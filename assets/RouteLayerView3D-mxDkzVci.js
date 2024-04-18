import{P as u,dj as h,K as m,dV as y,V as d,aF as c,aC as g,E as i,F as o,H as f,cS as b}from"./index--fOyh5XL.js";import{m as O,c as _,C as I,T as v,j as S,S as w,O as V}from"./Stop-fl_Bn0zi.js";import{n as G}from"./LayerView3D-G13Q5ne8.js";import{O as C}from"./GraphicsProcessor-y2IT2eZS.js";import{l as P}from"./projectExtentUtils-BVEy2MPH.js";import{r as E}from"./EventedSet-ZofPhEyh.js";import"./Graphics3DObjectStates-S7BKZG8o.js";import"./rendererConversion-jw1L0KSF.js";import"./optimizedFeatureQueryEngineAdapter-1IHiGls0.js";import"./PooledRBush-CJda0HC2.js";function H(e){return e instanceof O||e instanceof _||e instanceof I||e instanceof v||e instanceof S||e instanceof w||e instanceof V}let r=class extends G(b){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new E,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new C({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this._updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),u),this.addResolvingPromise(P(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.addHandles(h(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this._updatingHandles.removeAll(),this._set("processor",m(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,this.layer.routeInfo!=null?new d([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const s=this._byObjectID.get(t);return this._byObjectID.delete(t),s}));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const s=t.toGraphic();return this._byObjectID.set(t,s),s}));for(const t of e.added)this.addHandles([c(()=>t.geometry,(s,a)=>{this._updateGraphic(t,"geometry",s,a)}),c(()=>t.symbol,(s,a)=>{this._updateGraphic(t,"symbol",s,a)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}getSuspendInfo(){var t,s;const e=super.getSuspendInfo();return e.outsideScaleRange=((t=this.processor)==null?void 0:t.scaleVisibilitySuspended)??!1,e.outsideOfView=((s=this.processor)==null?void 0:s.frustumVisibilitySuspended)??!1,e}async fetchPopupFeatures(e,t){return(t==null?void 0:t.clientGraphics)??[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var s;return(s=this.processor)==null?void 0:s.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new d(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return H(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||g.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,t,s;return!(!((e=this.processor)!=null&&e.updating)&&((s=(t=this.view)==null?void 0:t.basemapTerrain)!=null&&s.ready))}get performanceInfo(){var e,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((e=this.processor)==null?void 0:e.elevationAlignment.updating)??!1,visibilityFrustum:!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}}_updateGraphic(e,t,s,a){var p;const l=this._byObjectID.get(e);l[t]=s,n.graphic=l,n.property=t,n.oldValue=a,n.newValue=s,(p=this.processor)==null||p.graphicsCore.graphicUpdateHandler(n)}};i([o()],r.prototype,"_routeItems",null),i([o()],r.prototype,"loadedGraphics",void 0),i([o({readOnly:!0})],r.prototype,"legendEnabled",null),i([o()],r.prototype,"layer",void 0),i([o({readOnly:!0})],r.prototype,"processor",void 0),i([o({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),r=i([f("esri.views.3d.layers.RouteLayerView3D")],r);const n={graphic:null,property:null,oldValue:null,newValue:null},N=r;export{N as default};