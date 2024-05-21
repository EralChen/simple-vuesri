import { App } from 'vue'
import VaTdtBasemap from './src/index.vue'
export * as __VaTdtBasemap from './src/types'

VaTdtBasemap.install = (app: App): void => {
  app.component(VaTdtBasemap.name, VaTdtBasemap)
}
export {
  VaTdtBasemap,
}
export default VaTdtBasemap
