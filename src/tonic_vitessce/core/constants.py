from collections.abc import Iterator
from dataclasses import dataclass, field

VAR = [
    "Au",
    "Calprotectin",
    "CD11c",
    "CD14",
    "CD163",
    "CD20",
    "CD3",
    "CD31",
    "CD38",
    "CD4",
    "CD45",
    "CD45RB",
    "CD45RO",
    "CD56",
    "CD57",
    "CD68",
    "CD69",
    "CD8",
    "chan_115",
    "chan_141",
    "chan_39",
    "chan_45",
    "chan_48",
    "ChyTr",
    "CK17",
    "Collagen1",
    "ECAD",
    "FAP",
    "Fe",
    "Fibronectin",
    "FOXP3",
    "GLUT1",
    "H3K27me3",
    "H3K9ac",
    "HLA1",
    "HLADR",
    "IDO",
    "Ki67",
    "LAG3",
    "Noodle",
    "PD1",
    "PDL1",
    "SMA",
    "TBET",
    "TCF1",
    "TIM3",
    "Vim",
]
OBS = [
    "area",
    "centroid_dif",
    "convex_area",
    "convex_hull_resid",
    "eccentricity",
    "equivalent_diameter",
    "label",
    "major_axis_equiv_diam_ratio",
    "major_axis_length",
    "major_minor_axis_ratio",
    "minor_axis_length",
    "nc_ratio",
    "num_concavities",
    "perim_square_over_area",
    "perimeter",
    "cell_meta_cluster",
    "cell_cluster",
    "cell_cluster_broad",
]

OBSM = [
    "centroid-0",
    "centroid-1",
]

COMPARTMENT_MASKS = [
    "cancer_border",
    "cancer_core",
    "stroma_border",
    "stroma_core",
]

CELL_SEGMENTATION_MASKS = [
    "whole_cell",
    "nuclear",
]


@dataclass
class WholeCellTableConstants:
    """Constants for the whole cell table"""

    var_columns: list[str] = field(default_factory=lambda: VAR)
    obs_columns: list[str] = field(default_factory=lambda: OBS)
    obsm_columns: list[str] = field(default_factory=lambda: OBSM)

    def __iter__(self) -> Iterator[str]:
        return iter(self.var_columns + self.obs_columns + self.obsm_columns)


@dataclass
class NuclearTableConstants:
    """Constants for the nuclear table"""

    var_columns: list[str] = field(default_factory=lambda: [f"{x}_nuclear" for x in VAR])
    obs_columns: list[str] = field(default_factory=lambda: [f"{x}_nuclear" for x in OBS])
    obsm_columns: list[str] = field(default_factory=lambda: [f"{x}_nuclear" for x in OBSM])

    def __iter__(self) -> Iterator[str]:
        return iter(self.var_columns + self.obs_columns + self.obsm_columns)


@dataclass
class SegmentationMasksConstants:
    """Constants for the segmentation masks"""

    cell_segmentation: list[str] = field(default_factory=lambda: CELL_SEGMENTATION_MASKS)
    compartments: list[str] = field(default_factory=lambda: COMPARTMENT_MASKS)

    def __iter__(self) -> Iterator[str]:
        return iter(self.cell_segmentation + self.compartments)
