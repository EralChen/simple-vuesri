import TileInfo from '@arcgis/core/layers/support/TileInfo'

export const lods = [
    {
        level: 0,
        levelValue: "0",
        resolution: 0.703125,
        scale: 295828763.7958547
    },
    {
        level: 0,
        levelValue: "2",
        resolution: 0.3515625,
        scale: 147914381.89792734
    },
    {
        level: 1,
        levelValue: "3",
        resolution: 0.17578125,
        scale: 73957190.94896367
    },
    {
        level: 2,
        levelValue: "4",
        resolution: 0.087890625,
        scale: 36978595.474481836
    },
    {
        level: 3,
        levelValue: "5",
        resolution: 0.0439453125,
        scale: 18489297.737240918
    },
    {
        level: 4,
        levelValue: "6",
        resolution: 0.02197265625,
        scale: 9244648.868620459
    },
    {
        level: 5,
        levelValue: "7",
        resolution: 0.010986328125,
        scale: 4622324.4343102295
    },
    {
        level: 6,
        levelValue: "8",
        resolution: 0.0054931640625,
        scale: 2311162.2171551147
    },
    {
        level: 7,
        levelValue: "9",
        resolution: 0.00274658203125,
        scale: 1155581.1085775574
    },
    {
        level: 8,
        levelValue: "10",
        resolution: 0.001373291015625,
        scale: 577790.5542887787
    },
    {
        level: 9,
        levelValue: "11",
        resolution: 0.0006866455078125,
        scale: 288895.27714438934
    },
    {
        level: 10,
        levelValue: "12",
        resolution: 0.00034332275390625,
        scale: 144447.63857219467
    },
    {
        level: 11,
        levelValue: "13",
        resolution: 0.000171661376953125,
        scale: 72223.81928609734
    },
    {
        level: 12,
        levelValue: "14",
        resolution: 0.0000858306884765625,
        scale: 36111.90964304867
    },
    {
        level: 13,
        levelValue: "15",
        resolution: 0.00004291534423828125,
        scale: 18055.954821524334
    },
    {
        level: 14,
        levelValue: "16",
        resolution: 0.000021457672119140625,
        scale: 9027.977410762167
    },
    {
        level: 15,
        levelValue: "17",
        resolution: 0.000010728836059570312,
        scale: 4513.9887053810835
    },
    {
        level: 16,
        levelValue: "18",
        resolution: 0.000005364418029785156,
        scale: 2256.9943526905417
    },
    {
        level: 17,
        levelValue: "19",
        resolution: 0.000002682209014892578,
        scale: 1128.4971763452709
    },
    {
        level: 18,
        levelValue: "20",
        resolution: 0.0000013411045074463,
        scale: 564.2485881726350
    }
]

export const origin = {
    x: -180,
    y: 90,
}
export const levelToScale = lods.reduce((a, c) => (a[c.level] = c.scale, a), {} as Record<string, number>)

export const fullExtent = {
    xmin: -180,
    ymin: -90,
    xmax: 180,
    ymax: 90,
}


export const tileInfo = new TileInfo({
    size: [256, 256],
    origin,
    lods,
})
