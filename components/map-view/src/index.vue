<script lang="ts">
import { computed, defineComponent, onMounted, provide, ref, StyleValue } from 'vue'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import { props, emits } from './ctx'

export default defineComponent({
  name: 'VaMapView',
  inheritAttrs: false,
  props,
  emits,
  setup (props, { emit }) {
    const viewNode = ref<HTMLDivElement>()
    // init
    const map = new Map()
    const view:__esri.MapView = new MapView({
      map: map,
      ...props.defaultOptions,
    })
    view.ui.components = []

    // set cursor
    const eventCursor = ref('')
    const cursorStyle = computed(() => ({
      '--va-map-view-cursor': props.cursor || eventCursor.value,
    }) as unknown as StyleValue)

    // provide
    provide('vaView', view)
    provide('vaMapView', view)

    onMounted(() => {
      view.container = viewNode.value as HTMLDivElement
      emit('load', { view })
    })

    return {
      viewNode,
      eventCursor,
      cursorStyle,
    }
  },
})
</script>
<template>
  <slot name="before"></slot>
  <div
    ref="viewNode"
    :style="cursorStyle"
    class="va-map-view va-view-x"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
  <slot name="after"></slot>
</template>

<style>
.va-map-view{
  width: 100%;
  height: 100%;
  cursor: var(--va-map-view-cursor);
}
</style>
