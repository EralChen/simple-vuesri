<script setup>
import { VaMapView, VaTdtBasemap } from '@vuesri/core'

const defaultOptions = {
  center: [120, 30],
  zoom: 9,
}

</script>
<template>
  <VaMapView :defaultOptions="defaultOptions">
    <VaTdtBasemap />
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