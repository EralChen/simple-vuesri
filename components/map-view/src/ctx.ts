import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  /**
   * @link
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constructors-summary
   * @description
   * MapView Constructor
   */
  defaultOptions: {
    type: Object as PropType< __esri.MapViewProperties>,
    default: () => ({}),
  },
  cursor: {
    type: String,
    default: '',
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}