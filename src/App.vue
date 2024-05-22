<script setup>
import { VaSceneView } from '../components/scene-view'
import { VaTdtBasemap } from '../components/tdt-base-map'
import { VaMapView } from '../components/map-view'
import Mvt4326 from './Mvt4326.vue'
const defaultOptions = {
  center: [120, 30],
  zoom: 9,
}
// https://openlayers.org/en/latest/examples/vector-tiles-4326.html

</script>
<template>
  <VaSceneView :defaultOptions="defaultOptions">
    <VaTdtBasemap :type="'vec_c'" />

    <Mvt4326></Mvt4326>
  </VaSceneView>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>