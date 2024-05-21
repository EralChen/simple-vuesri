<script setup>
import { VaTdtBasemap } from '../components/tdt-base-map'
import { VaMapView } from '../components/map-view'
import Mvt4326 from './mvt4326.vue';
const defaultOptions = {
  center: [120, 30],
  zoom: 9,
}
// https://openlayers.org/en/latest/examples/vector-tiles-4326.html

</script>
<template>
  <VaMapView :defaultOptions="defaultOptions">
    <!-- 加载天地图 -->
    <!-- 注释掉天地图图， Mvt4326 似乎时以3857坐标系叠加导致显示问题 -->
    <VaTdtBasemap :type="'vec_c'" />

    <!-- 加载 4326mvt -->
    <Mvt4326></Mvt4326>

  </VaMapView>
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