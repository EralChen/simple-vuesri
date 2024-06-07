<script setup>
import { VaTdtBasemap } from '../components/tdt-base-map'
import { VaMapView } from '../components/map-view'

</script>
<template>
  <VaMapView :defaultOptions="defaultOptions">
    <VaTdtBasemap :type="'vec_c'" />


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