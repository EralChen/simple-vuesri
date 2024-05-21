
import TileInfo from '@arcgis/core/layers/support/TileInfo'

export const lods = [{
  'level': 0,
  'levelValue': '0',
  'resolution': 1.4062500262315807,
  'scale': 590995197.14166903,
},
{
  'level': 1,
  'levelValue': '1',
  'resolution': 0.70312501311579145,
  'scale': 295497598.57083499,
},
{
  'level': 2,
  'levelValue': '2',
  'resolution': 0.35156250655789451,
  'scale': 147748799.28541699,
},
{
  'level': 3,
  'levelValue': '3',
  'resolution': 0.1757812532789475,
  'scale': 73874399.6427086,
},
{
  'level': 4,
  'levelValue': '4',
  'resolution': 0.087890626639473751,
  'scale': 36937199.8213543,
},
{
  'level': 5,
  'levelValue': '5',
  'resolution': 0.043945313319736994,
  'scale': 18468599.910677198,
},
{
  'level': 6,
  'levelValue': '6',
  'resolution': 0.021972656659868452,
  'scale': 9234299.9553385805,
},
{
  'level': 7,
  'levelValue': '7',
  'resolution': 0.010986328329934226,
  'scale': 4617149.9776692903,
},
{
  'level': 8,
  'levelValue': '8',
  'resolution': 0.0054931641649671242,
  'scale': 2308574.9888346498,
},
{
  'level': 9,
  'levelValue': '9',
  'resolution': 0.0027465820824835504,
  'scale': 1154287.49441732,
},
{
  'level': 10,
  'levelValue': '10',
  'resolution': 0.0013732910412417776,
  'scale': 577143.74720866105,
},
{
  'level': 11,
  'levelValue': '11',
  'resolution': 0.00068664552062088987,
  'scale': 288571.87360433099,
},
{
  'level': 12,
  'levelValue': '12',
  'resolution': 0.0003433227603104438,
  'scale': 144285.936802165,
},
{
  'level': 13,
  'levelValue': '13',
  'resolution': 0.00017166138015522239,
  'scale': 72142.968401082704,
},
{
  'level': 14,
  'levelValue': '14',
  'resolution': 8.5830690077611316e-005,
  'scale': 36071.484200541403,
},
{
  'level': 15,
  'levelValue': '15',
  'resolution': 4.2915345038805658e-005,
  'scale': 18035.742100270701,
},
{
  'level': 16,
  'levelValue': '16',
  'resolution': 2.1457672519402802e-005,
  'scale': 9017.8710501353398,
},
{
  'level': 17,
  'levelValue': '17',
  'resolution': 1.0728836259701401e-005,
  'scale': 4508.9355250676699,
},
{
  'level': 18,
  'levelValue': '18',
  'resolution': 5.3644181298507123e-006,
  'scale': 2254.46776253384,
},
{
  'level': 19,
  'levelValue': '19',
  'resolution': 2.6822090649253562e-006,
  'scale': 1127.23388126692,
},
{
  'level': 20,
  'levelValue': '20',
  'resolution': 1.3411045321451153e-006,
  'scale': 563.61694050000006,
}]
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
