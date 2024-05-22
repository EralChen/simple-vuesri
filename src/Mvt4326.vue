<script lang="ts">
import { useView } from '@vuesri/core'
import VectorTileLayer  from '@arcgis/core/layers/VectorTileLayer'
import { defineComponent, onUnmounted } from 'vue'
export default defineComponent({
  setup () {
    // inject view
    const view = useView()
    const map = view.map

    // ref: https://openlayers.org/en/latest/examples/vector-tiles-4326.html
    // const url = 'https://api.maptiler.com/maps/basic-4326/style.json'
    const url = './mystyle.json'

    const layer = new VectorTileLayer({
      apiKey: 'pSHUA9sSkNny3iqoWG4P',
      customParameters: {
        key: 'pSHUA9sSkNny3iqoWG4P'
      },
      url,
    })

    map.add(layer)
    onUnmounted(() => {
      map.remove(layer)
    })


    

    return () => null
  }
})
</script>

