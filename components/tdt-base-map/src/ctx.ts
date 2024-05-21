import { levelToScale } from './tile-info'
import { PropType } from 'vue'

export const props = {
  
  spatialReference: {
    type: Object as PropType<__esri.SpatialReferenceProperties>,
    default: () => ({ wkid: 4326 }),
  },
  type: {
    type: String as PropType<'img_c' | 'vec_c' | 'ter_c' | 'img_w' | 'vec_w' | 'ter_w'>,
    default: 'img_c',
  },
  orphan: {
    type: Boolean,
    default: false,
  },
  anno: {
    type: Boolean,
    default: true,
  },
  thumbnailUrl: {
    type: String,
    default: '',
  },
  minScale: {
    type: Number,
    default: levelToScale[1],
  },
  maxScale: {
    type: Number,
    default: levelToScale[18],
  },
  token: {
    type: String,
    default: 'f0175927031c1e12cb804b0c3b8cce4d',
  },
  webTileLayerOptions: {
    type: Object as PropType<__esri.WebTileLayerProperties>,
    default: () => ({} as __esri.WebTileLayerProperties),
  },
}

export const emits = {
}