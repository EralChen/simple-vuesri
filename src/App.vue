<script setup>
import { VaTdtBasemap } from '../components/tdt-base-map'
import { VaMapView } from '../components/map-view'
import { VaSceneView } from '../components/scene-view'
import TestMediaLayer from './TestMediaLayer.vue'
import TestWebTileLayer from './TestWebTileLayer.vue'

const defaultOptions ={
  spatialReference: {
    wkid: 4326
  },
  viewingMode: 'local',
  center: [120.56908035278317, 30.000086975097634],
  zoom: 9,
}
</script>
<template>
  <VaSceneView :defaultOptions="defaultOptions">
    <!-- 加载底图 -->
    <VaTdtBasemap :type="'img_c'" />
    <!-- media layer -->
    <TestMediaLayer></TestMediaLayer>
    <!-- tile layer -->
    <!-- 希望 tile layer 叠加到  media layer 之上 -->
     <!-- 但实际展示与叠加顺序不符 -->
    <TestWebTileLayer></TestWebTileLayer>
  </VaSceneView>

    <!-- 切换为 MapView 则显示正常,  -->
   <!-- tile layer 按照顺序叠加到  media layer 之上 -->
   <!-- <VaMapView :defaultOptions="defaultOptions">
      <VaTdtBasemap :type="'img_c'" />
      <TestMediaLayer></TestMediaLayer>
      <TestWebTileLayer></TestWebTileLayer>
   </VaMapView> -->
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