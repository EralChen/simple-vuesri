import { ReturnVoid } from '@vunk/core'
export type LoadEvent = {
  view: __esri.SceneView
}

export type OnLoad = (e:LoadEvent) => ReturnVoid
