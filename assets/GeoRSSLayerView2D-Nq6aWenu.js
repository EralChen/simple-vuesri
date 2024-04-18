import{eY as g,cS as w,aF as h,P as n,c1 as f,V as d,c3 as u,c2 as S,f4 as m,E as V,H as b}from"./index--fOyh5XL.js";import{i as _}from"./GraphicContainer-la0fWX4o.js";import{r as T}from"./GraphicsView2D-N6QPGK5-.js";import"./BaseGraphicContainer-xdFE-B6w.js";import"./FeatureContainer-gXwaXTnQ.js";import"./AttributeStoreView-xmX8Qycn.js";import"./visualVariablesUtils-Vd2fTuso.js";import"./cimAnalyzer-gy2zc7ye.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-lHI8rp7z.js";import"./Rect-pT1ASav_.js";import"./ExpandedCIM-bd1MIo_0.js";import"./util-4ofgXPAM.js";import"./TileContainer-OcxkAdvJ.js";import"./normalizeUtilsSync-LkxxN7dk.js";import"./projectionSupport-vABirATK.js";import"./json-v6EOeNTY.js";import"./Matcher-Ee5Rw7aH.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-F9uulrrF.js";import"./ComputedAttributeStorage-b_NwiE_c.js";import"./TimeOnly-gwmTTSeT.js";let c=class extends g(w){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap(t=>{const i=this._popupTemplates.get(t),p=t.hitTest(e);for(const o of p)o.layer=s,o.sourceLayer=s,o.popupTemplate=i;return p}).map(t=>({type:"graphic",graphic:t,layer:s,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([h(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:s,layerDefinition:t}of e){const i=f.fromJSON(s),p=new d(i.features),o=t.drawingInfo,y=r?u.fromJSON(r):null,a=S(o.renderer),l=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=l,this._popupTemplates.set(l,y),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}},n),h(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e})},n),h(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e})},n),h(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new m({symbol:e})},n)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};c=V([b("esri.views.2d.layers.GeoRSSLayerView2D")],c);const j=c;export{j as default};