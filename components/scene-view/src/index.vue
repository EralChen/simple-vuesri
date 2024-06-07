<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent, onMounted, provide, ref, StyleValue } from 'vue'
// just alias @arcgis/core
import { SceneView, Map as EsriMap } from '@vuesri/core/arcgis'
import LayerList from "@arcgis/core/widgets/LayerList.js";

export default defineComponent({
  name: 'VaSceneView',

  inheritAttrs: false,
  props,
  emits,
  setup (props, { emit }) {
    const viewNode = ref<HTMLDivElement>()
    // core
    const map = new EsriMap()
    const view = new SceneView({
      map,
      ...props.defaultOptions,
    })
    view.ui.components = []

    
    const layerlist = new LayerList({
      view: view
    });

    view.ui.add(layerlist, {
      position: "top-right"
    });


        
    /* set cursor */
    const eventCursor = ref('')
    const cursorStyle = computed(() => ({
      '--va-scene-view-cursor': props.cursor || eventCursor.value,
    }) as unknown as StyleValue)
    /* set cursor end */

    provide('vaView', view)
    provide('vaSceneView', view)

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
    class="va-scene-view va-view-x"
    v-bind="$attrs"
  >
    <ViewEvents
      v-model:cursor="eventCursor"
    ></ViewEvents>
    <ViewWatchs></ViewWatchs>
    <slot></slot>
  </div>
  <slot name="after"></slot>
</template>
<style>
.va-scene-view{
  width: 100%;
  height: 100%;
  cursor: var(--va-scene-view-cursor);
}
</style>
