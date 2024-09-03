from typing import Literal

import anndata as ad
import natsort as ns
import numpy as np
import pandas as pd
from tifffile import imread
from upath import UPath
from vitessce.data_utils import VAR_CHUNK_SIZE, multiplex_img_to_ome_zarr, optimize_adata, optimize_arr
from zarr import ZipStore, consolidate_metadata

from angelolab_vitessce.tonic.constants import SegmentationMasksConstants, WholeCellTableConstants

WholeCellTableColumns = WholeCellTableConstants()
SegmentationMasks = SegmentationMasksConstants()


def extract_fov_table(cell_table_df: pd.DataFrame, cell_compartment_df: pd.DataFrame, fov: str) -> pd.DataFrame:
    """Extracts a given FOV from the Cell Table.

    Parameters
    ----------
    cell_table_df : pd.DataFrame
        The Cell Table DataFrame.
    cell_compartment_df : pd.DataFrame
        The Cell Compartment DataFrame
    fov : str
        The field of view to extract.

    Returns
    -------
    pd.DataFrame
        The cell-wise data associated to a given `fov`.
    """
    fov_ct: pd.DataFrame = (
        cell_table_df[cell_table_df["fov"] == fov]
        .pipe(
            lambda df: df.astype(
                {
                    "label": "int",
                }
            )
        )
        .merge(right=cell_compartment_df, on=["fov", "label"], how="left")
        .rename(columns={"mask_name": "compartment"})
        .pipe(
            lambda df: df.astype(
                {
                    **{
                        c: "object"
                        for c in ["fov", "compartment", "cell_meta_cluster", "cell_cluster", "cell_cluster_broad"]
                    },
                    "area": "int",
                    "convex_area": "int",
                    "num_concavities": "int",
                    **{c: "int" for c in WholeCellTableColumns.obsm_columns},
                },
            )
        )
        .sort_values(by="label")
        .reset_index(drop=True)
        .pipe(lambda df: df.set_index(pd.Index(list(range(1, len(df) + 1)))))
    )
    return fov_ct


def optimize_and_write_adata(
    fov_df: pd.DataFrame,
    fov: str,
    segmentation_dir: UPath,
    vitessce_fovs_path: UPath,
    var_cols: list[str],
    obs_cols: list[str],
    zarr_store_type: Literal["zip", "directory"] = "directory",
):
    """Creates the `AnnData` object for a given FOV, optimizes it and writes it to disk.

    Parameters
    ----------
    fov_df : pd.DataFrame
        The cell-wise data associated to a given `fov`.
    fov : str
        The `fov` name.
    var_type: Literal["whole_cell"] | Literal["nuclear"]
        Either the whole_cell mask, or the nuclear mask
    vitessce_fovs_path : Path
        The output directory to place the FOVs.
    """
    seg_mask = imread(segmentation_dir / f"{fov}_whole_cell.tiff").astype("int").squeeze()
    n_unique_labels = len(np.unique(seg_mask))

    whole_cell_df = fov_df[fov_df["label"].isin(range(1, n_unique_labels + 1))]

    fov_adata = ad.AnnData(
        X=whole_cell_df[var_cols],
        obs=whole_cell_df[obs_cols],
        obsm={"spatial": whole_cell_df[WholeCellTableColumns.obsm_columns].to_numpy()},
    )

    fov_optimized_adata = optimize_adata(adata=fov_adata, optimize_X=True)

    if not (vitessce_fov_path := vitessce_fovs_path / fov).exists():
        vitessce_fov_path.mkdir(parents=True, exist_ok=True)

    fov_optimized_adata.strings_to_categoricals()
    if zarr_store_type == "zip":
        store_path = ZipStore(path=vitessce_fov_path / "whole_cell_table.anndata.zarr.zip", mode="w")
    else:
        store_path = vitessce_fov_path / "whole_cell_table.anndata.zarr"

    fov_optimized_adata.write_zarr(store=store_path, chunks=[fov_optimized_adata.shape[0], VAR_CHUNK_SIZE])
    consolidate_metadata(store=store_path)


def convert_fov_to_zarr(
    fovs_dir: UPath,
    fov: str,
    vitessce_fovs_path: UPath,
    channels: list[str] | None = None,
    channel_colormap: dict | None = None,
    zarr_store_type: Literal["zip", "directory"] = "directory",
) -> None:
    """Converts the field of view (a folder of TIFFs) into a Zarr Store.

    Parameters
    ----------
    fovs_dir : Path
        The directory to all the FOVs.
    fov : str
        The fov to convert.
    vitessce_fovs_path : Path
        The output directory to place the fovs.
    channels : list[str] | None, optional
        The channels to convert, by default `None` which will use all channels
    channel_colormap : dict | None, optional
        A colormap per-channel, by default `None` which auto-assigns the colors.
    """
    if channels is None:
        channels = WholeCellTableColumns.var_columns
    channel_paths = [fovs_dir / fov / f"{c}.tiff" for c in ns.natsorted(channels)]

    fov_img = optimize_arr(arr=imread(files=channel_paths))

    if not (vitessce_fov_path := vitessce_fovs_path / fov).exists():
        vitessce_fov_path.mkdir(parents=True, exist_ok=True)
    if zarr_store_type == "zip":
        store_path = ZipStore(path=vitessce_fov_path / "image.ome.zarr.zip", mode="w")
    else:
        store_path = vitessce_fov_path / "image.ome.zarr"

    multiplex_img_to_ome_zarr(
        img_arr=fov_img,
        channel_names=channels,
        img_name=fov,
        axes="cyx",
        chunks=(1, 256, 256),
        channel_colors=channel_colormap,
        output_path=store_path,
    )
    consolidate_metadata(store=store_path)


def convert_segmentation_to_zarr(
    fov: str,
    segmentation_mask_type: Literal["cell_segmentation"] | Literal["compartment"],
    segmentation_dir: UPath,
    vitessce_fovs_path: UPath,
    zarr_store_type: Literal["zip", "directory"] = "directory",
) -> None:
    """Converts TIFF cell segmentation masks or compartment segmentation masks to OME-ZARR files.

    Parameters
    ----------
    fov : str
        The field of view.
    segmentation_mask_type : Literal["cell_segmentation"] | Literal["compartment"]
        The type of segmentation mask.
    segmentation_dir : Path
        The directory containing the specific segmentation masks.
    vitessce_fovs_path : Path
        The output directory to place the segmentation masks.
    zarr_store_type : Literal["zip", "directory"]
        The type of Zarr store to use.
    """
    if segmentation_mask_type == "cell_segmentation":
        segmentation_masks = ns.natsorted(
            [(segmentation_dir / f"{fov}_{c}.tiff") for c in SegmentationMasks.cell_segmentation]
        )
    elif segmentation_mask_type == "compartment":
        segmentation_masks = ns.natsorted(
            [(segmentation_dir / fov / f"{c}.tiff") for c in SegmentationMasks.compartments]
        )

    segmentation_array = optimize_arr(arr=imread(files=segmentation_masks).astype("int").squeeze())
    if not (vitessce_fov_path := vitessce_fovs_path / fov).exists():
        vitessce_fov_path.mkdir(parents=True, exist_ok=True)

    channel_names = (
        SegmentationMasks.compartments
        if segmentation_mask_type == "compartment"
        else SegmentationMasks.cell_segmentation
    )
    if zarr_store_type == "zip":
        store_path = ZipStore(path=vitessce_fov_path / f"{segmentation_mask_type}.ome.zarr.zip", mode="w")
    else:
        store_path = vitessce_fov_path / f"{segmentation_mask_type}.ome.zarr"

    multiplex_img_to_ome_zarr(
        img_arr=segmentation_array,
        channel_names=channel_names,
        img_name=f"{fov}_{segmentation_mask_type}",
        axes="cyx",
        chunks=(1, 256, 256),
        channel_colors=None,
        output_path=store_path,
    )
    consolidate_metadata(store=store_path)
