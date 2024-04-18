import { createApp } from 'vue'
import App from './App.vue'
import './styles'
import esriConfig from '@arcgis/core/config'

/**
 * if you run `npm run copy`
 * copy assets to public folder
 */
esriConfig.assetsPath = import.meta.env.BASE_URL + 'Esri/'

createApp(App).mount('#app')
