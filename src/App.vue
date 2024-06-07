<script setup>
import { VaTdtBasemap } from '../components/tdt-base-map'
import { VaMapView } from '../components/map-view'
import TestMediaLayer from './TestMediaLayer.vue'
import TestWebTileLayer from './TestWebTileLayer.vue'
const defaultOptions ={
  center: [120.56908035278317, 30.000086975097634],
  zoom: 8,

}
</script>
<template>
  <VaMapView :defaultOptions="defaultOptions">
    <!-- 加载底图 -->
    <VaTdtBasemap :type="'img_c'" />


    
    <!-- media layer -->
    <TestMediaLayer></TestMediaLayer>


    <!-- tile layer -->
    <!-- 希望 tile layer 叠加到  media layer 之上-->
    <TestWebTileLayer></TestWebTileLayer>




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