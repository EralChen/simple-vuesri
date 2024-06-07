<script lang="ts" setup>
import { WebTileLayer } from '@vuesri/core/arcgis';
import { useView } from '@vuesri/core/composables'
import { computed } from 'vue'
import { fullExtent } from '../components/tdt-base-map/src/tile-info';

const type = 'cia_c'
const token = 'f0175927031c1e12cb804b0c3b8cce4d'

const view = useView()
const map = view.map
const baseLayer = view.map.basemap.baseLayers.getItemAt(0) as __esri.TileLayer

const subDomains = ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
const urlParams = computed(() => {
  const baseTypeInfo = type.split('_')
  const baseLayer = baseTypeInfo[0]
  const typeSR = baseTypeInfo[1]
  return {
    baseLayer,
    typeSR,
  }
})

const defaultOptions = computed(() => {


  const data = {
    title: '测试注记图层, 希望叠到 media layer 之上',
    subDomains,
    urlTemplate: `https://{subDomain}.tianditu.gov.cn`
      + `/${type}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0`
      + `&LAYER=${urlParams.value.baseLayer}&STYLE=default`
      + `&TILEMATRIXSET=${urlParams.value.typeSR}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}`
      + `&tk=${token}`,
    tileInfo: baseLayer.tileInfo,
    spatialReference: baseLayer.spatialReference,
    fullExtent: baseLayer.fullExtent
  }

  return data

})

const layer = new WebTileLayer(defaultOptions.value)


map.add(layer)

</script>
<template>
  <slot></slot>
</template>
