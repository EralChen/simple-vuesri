import { ReturnVoid } from '@vunk/core'
export type LoadEvent = {
  view: __esri.MapView
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
