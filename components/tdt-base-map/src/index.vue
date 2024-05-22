<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent, onUnmounted } from 'vue'
import { origin, lods, fullExtent } from './tile-info'
import WebTileLayer from '@arcgis/core/layers/WebTileLayer'
import { useView } from '@vuesri/core'
import Basemap from '@arcgis/core/Basemap'

export default defineComponent({
  name: 'VaTdtBasemap',
  props,
  emits,
  setup (props) {
    // inject view
    const view = useView()
    const map = view.map

    const subDomains = ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
    const urlParams = computed(() => {
      const baseTypeInfo = props.type.split('_')
      const baseLayer = baseTypeInfo[0]
      const typeSR = baseTypeInfo[1]
      return {
        baseLayer,
        typeSR,
      }
    })

    const defaultOptions = computed(() => {

      // 4326

      const tileInfo: __esri.TileInfoProperties = {
        origin: origin,
        spatialReference: props.spatialReference,
      }
      tileInfo.lods = lods.slice(1, 19)


      const data = {
        subDomains,
        urlTemplate: `https://{subDomain}.tianditu.gov.cn`
          + `/${props.type}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0`
          + `&LAYER=${urlParams.value.baseLayer}&STYLE=default`
          + `&TILEMATRIXSET=${urlParams.value.typeSR}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}`
          + `&tk=${props.token}`,
        tileInfo,
        fullExtent: {
          ...fullExtent,
          spatialReference: props.spatialReference,
        },
        spatialReference: props.spatialReference,
      }

      return data

    })

    const layer = new WebTileLayer(defaultOptions.value)


    if (!map.basemap) {
      map.basemap = new Basemap()
    }
    
    map.basemap.baseLayers.add(layer)

    onUnmounted(() => map.basemap.baseLayers.remove(layer))


    return () => null
  },
})
</script>

