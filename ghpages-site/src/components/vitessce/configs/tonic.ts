import {
    VitessceConfig,
    CoordinationLevel as CL,
    hconcat,
    vconcat,
    FileType as ft,
    CoordinationType as ct,
} from "vitessce";

function generateTonicConfig(fov: string) {
    const config = new VitessceConfig({
        schemaVersion: "1.0.16",
        name: fov,
        description: "Example",
    });
    const fov_path = `https://angelolab-vitessce-vizualizations.s3.amazonaws.com/tonic/${fov.toUpperCase()}`;

    const dataset = config
        .addDataset(fov)
        .addFile({
            fileType: ft.IMAGE_OME_ZARR,
            url: `${fov_path}/image.ome.zarr`,
            coordinationValues: {
                fileUid: "fov-image",
            },
            options: undefined,
        })
        .addFile({
            fileType: "anndata.zarr",
            url: `${fov_path}/whole_cell_table.anndata.zarr`,
            coordinationValues: {
                fileUid: "adata",
                obsType: "cell",
                featureType: "gene",
                featureValuetype: "expression",
            },
            options: {
                obsFeatureMatrix: {
                    path: "X",
                },
                obsLocations: {
                    path: "obsm/spatial",
                },
                obsSets: [
                    {
                        name: "Cell Type",
                        path: [
                            "obs/cell_cluster_broad",
                            "obs/cell_cluster",
                            "obs/cell_meta_cluster",
                        ],
                    },
                    {
                        name: "Compartment",
                        path: "obs/compartment",
                    },
                ],
            },
        })
        .addFile({
            fileType: "obsSegmentations.ome-zarr",
            url: `${fov_path}/cell_segmentation.ome.zarr`,
            coordinationValues: {
                fileUid: "segmentation",
                obsType: "cell",
            },
            // options: undefined
            options: {
                obsTypesFromChannelNames: true,
            },
        });

    // Create Views
    const spatialView = config
        .addView(dataset, "spatialBeta")
        .setProps({ title: "Cell Segmentation" });
    const lcView = config
        .addView(dataset, "layerControllerBeta")
        .setProps({ title: "Layers" });
    const obsSetsView = config
        .addView(dataset, "obsSets")
        .setProps({ title: "Cell Types" });
    const featureListView = config
        .addView(dataset, "featureList")
        .setProps({ title: "Marker List", variablesLabelOverride: "Markers" });
    const obsSetsSizesView = config.addView(dataset, "obsSetSizes");

    // Cell Segmentation Scopes
    const [
        cellFeatureTypeScope,
        cellFeatureValueTypeScope,
        cellSpatialSegmentationFilledScope,
        cellSpatialSegmentationStrokeWidthScope,
    ] = config.addCoordination(
        ct.FEATURE_TYPE,
        ct.FEATURE_VALUE_TYPE,
        ct.SPATIAL_SEGMENTATION_FILLED,
        ct.SPATIAL_SEGMENTATION_STROKE_WIDTH,
    );
    cellFeatureTypeScope.setValue("gene");
    cellFeatureValueTypeScope.setValue("expression");
    cellSpatialSegmentationFilledScope.setValue(false);
    cellSpatialSegmentationStrokeWidthScope.setValue(0.09);

    // Feature Selection
    const [featureSelectionScope] = config.addCoordination(
        ct.FEATURE_SELECTION,
    );
    featureListView.useCoordination(featureSelectionScope);

    // Channel Scopes
    const [spatialChannelOpacityScope] = config.addCoordination(
        "spatialChannelOpacity",
    );
    spatialChannelOpacityScope.setValue(0.3);

    // obs Scopes
    const [obsSetSelectionScope, obsSetColorScope] = config.addCoordination(
        "obsSetSelection",
        "obsSetColor",
    );
    obsSetsView.useCoordination(obsSetSelectionScope, obsSetColorScope);

    config.linkViewsByObject(
        [spatialView, lcView, obsSetsView, featureListView, obsSetsSizesView],
        {
            imageLayer: CL([
                {
                    fileUid: "fov-image",
                    spatialLayerOpacity: 1,
                    spatialLayerVisible: true,
                    photometricInterpretation: "BlackIsZero",
                    spatialTargetResolution: null,
                    featureValueColormapRange: [0, 1],
                    imageChannel: CL([
                        // CD8
                        {
                            spatialTargetC: 2,
                            spatialChannelColor: [
                                172, 191, 105,
                            ] /* dark orange */,
                            spatialChannelVisible: true,
                            spatialChannelOpacity: spatialChannelOpacityScope,
                            spatialChannelWindow: null,
                        },
                        // CD45
                        {
                            spatialTargetC: 7,
                            spatialChannelColor: [
                                213, 182, 10,
                            ] /* dark yellow*/,
                            spatialChannelVisible: true,
                            spatialChannelOpacity: spatialChannelOpacityScope,
                            spatialChannelWindow: null,
                        },
                        // ECAD
                        {
                            spatialTargetC: 15,
                            spatialChannelColor: [255, 255, 212] /* eggshell */,
                            spatialChannelVisible: true,
                            spatialChannelOpacity: spatialChannelOpacityScope,
                            spatialChannelWindow: null,
                        },
                        // SMA
                        {
                            spatialTargetC: 22,
                            spatialChannelColor: [166, 129, 76] /* brown */,
                            spatialChannelVisible: true,
                            spatialChannelOpacity: spatialChannelOpacityScope,
                            spatialChannelWindow: null,
                        },
                        // H3K9ac
                        {
                            spatialTargetC: 19,
                            spatialChannelColor: [4, 133, 209] /* cerulean */,
                            spatialChannelVisible: true,
                            spatialChannelOpacity: spatialChannelOpacityScope,
                            spatialChannelWindow: null,
                        },
                        // H3K27me3
                        {
                            spatialTargetC: 20,
                            spatialChannelColor: [4, 116, 149] /* cerulean */,
                            spatialChannelVisible: true,
                            spatialChannelOpacity: spatialChannelOpacityScope,
                            spatialChannelWindow: null,
                        },
                    ]),
                },
            ]),
            segmentationLayer: CL([
                {
                    fileUid: "segmentation",
                    spatialLayerVisible: true,
                    spatialLayerOpacity: 1.0,
                    segmentationChannel: CL([
                        {
                            obsType: "cell",
                            obsSetSelection: obsSetSelectionScope,
                            obsSetColor: obsSetColorScope,
                            spatialTargetC: 1,
                            spatialChannelVisible: true,
                            spatialChannelOpacity: 1.0,
                            featureType: cellFeatureTypeScope,
                            featureValueType: cellFeatureValueTypeScope,
                            featureSelection: featureSelectionScope,
                            spatialSegmentationFilled:
                                cellSpatialSegmentationFilledScope,
                            spatialSegmentationStrokeWidth:
                                cellSpatialSegmentationStrokeWidthScope,
                            legendVisible: true,
                            tooltipsVisible: true,
                            tooltipCrosshairsVisible: true,
                        },
                    ]),
                },
            ]),
        },
    );

    const legend = vconcat(
        hconcat(obsSetsView, featureListView),
        obsSetsSizesView,
    );

    config.layout(hconcat(spatialView, vconcat(lcView, legend)));

    const configJSON = config.toJSON();
    return configJSON;
}

export default generateTonicConfig;
