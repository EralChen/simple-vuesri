<script setup lang="ts">
import { useView } from '@vuesri/core/composables'
// @vuesri/core/arcgis is just alias of @arcgis/core
import { LocalMediaElementSource, ImageElement, ExtentAndRotationGeoreference, MediaLayer } from '@vuesri/core/arcgis/4.24'
import { Extent } from '@vuesri/core/arcgis';

const view = useView()
const map = view.map

const source = new LocalMediaElementSource({
  elements: [
    new ImageElement({
      image: '/img.png',
      georeference: new ExtentAndRotationGeoreference({
        extent: new Extent({
          xmin: 120.19741890224812,
          ymin: 29.145493440582083,
          xmax: 122.83118597998016,
          ymax: 30.407506831995352,
          spatialReference: {
            wkid: 4326,
          },
        }),
      }),
    }),
  ],
})
const layer = new MediaLayer({
  title: '测试媒体图层',
  source: source
})

map.add(layer)

</script>
<template>
  <slot></slot>
</template>
