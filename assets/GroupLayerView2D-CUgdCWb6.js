import{eY as i,E as r,H as s}from"./index--fOyh5XL.js";import n from"./GroupLayerView-DS54ma6s.js";let e=class extends i(n){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,a)=>this.container.addChildAt(t.container,a))}};e=r([s("esri.views.2d.layers.GroupLayerView2D")],e);const o=e;export{o as default};