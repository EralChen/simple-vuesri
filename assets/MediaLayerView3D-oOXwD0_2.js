import{aB as T,aC as x,dm as P,aN as I,d6 as D,ce as M,dt as c,du as G,dv as S,dw as H,dx as z,dy as s,dz as m,dA as b,dB as $,dC as h,s as O,dD as C,dE as v,E as p,F as w,H as V,dF as L,cS as W}from"./index-e4odrhqs.js";import{i as N,j as F}from"./MediaElementView-Kz8GN5xF.js";import{n as U}from"./LayerView3D-pVPmrFBD.js";import{g as k}from"./ImageMaterial.glsl-sQ5tIX5I.js";import"./normalizeUtilsSync-Pw6LftAE.js";let o=class extends U(W){constructor(){super(...arguments),this.type="media-3d",this.drapeSourceType=T.RasterImage,this.updatePolicy=x.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=P(async(e,t,r)=>{const n=await this._collectMediaElements(e,t,r);this._synchronizeRenderElements(n)},0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const e=()=>this._updateWithLastDrapingExtent();this.addHandles([I(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),D(()=>this.layer.effectiveSource,"change",e),D(()=>this.layer.effectiveSource,"refresh",e)]),this._updatingHandles.add(()=>this.suspended,e)}setDrapingExtent(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}getHit(e){const t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(this._lastDrapingExtent==null||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:e,spatialReference:t}=this._lastDrapingExtent;this._updatingHandles.addPromise(this._update(e,t).catch(()=>{}))}async _collectMediaElements(e,t,r){const n=this.layer.effectiveSource;return n==null?new Set:new Set((await Promise.all(e.map(a=>n.queryElements(M(a.extent,t),{signal:r})))).flat())}_synchronizeRenderElements(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}_synchronizeRenderElementsRemove(e){const t=new Set,r=[];this._renderedElements.forEach((n,a)=>{e.has(a)||(t.add(a),n.renderData!=null&&r.push(n.renderData.renderGeometry),this._removeElement(a,n))}),this._renderer.removeGeometries(r,c.REMOVE)}_synchronizeRenderElementsAdd(e){for(const t of e)this._renderedElements.has(t)||this._createRenderElement(t)}_removeElement(e,{renderData:t,handle:r}){this._destroyRenderData(t),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),r.remove()}async _createRenderElement(e){const t=new N({spatialReference:this.view.spatialReference,element:e}),r={renderData:null,handle:G([this._updatingHandles.add(()=>e.opacity,n=>{r.renderData!=null&&r.renderData.material.setParameters({opacity:n})}),this._updatingHandles.add(()=>t.coords,()=>{r.renderData!=null?this._updateGeometry(t,r,r.renderData):this._initializeRenderData(t,r)}),this._updatingHandles.add(()=>e.content,()=>this._initializeRenderData(t,r)),S(t)])};this._renderedElements.set(e,r),this._uidToElement.set(e.uid,e),this._updatingHandles.addPromise(e.load().catch(()=>{})),this._initializeRenderData(t,r)}_initializeRenderData(e,t){const{coords:r,element:n}=e,{contentWidth:a,contentHeight:l}=n;if(r==null||n.content==null)return void(t.renderData=this._destroyRenderData(t.renderData));if(t.renderData!=null)return;const i=this._createTexture(n.content),_=i.load(this.view._stage.renderView.renderingContext);this.view._stage.add(i),H(_)&&this._updatingHandles.addPromise(_);const y=new k({initTextureTransparent:!0,textureId:i.id,opacity:n.opacity,transparent:!0,perspectiveInterpolation:!0}),E=this._getPositionAttributeArray(r),f=[0,0,1,0,1,1,0,1],R=this._getPerspectiveDivideAttributeArray(E,a,l),u=[0,1,2,0,2,3],A=new z(y,[[s.POSITION,new m(E,u,3,!0)],[s.UV0,new m(f,u,2,!0)],[s.PERSPECTIVEDIVIDE,new m(R,u,1,!0)]]),g=new b(A,{layerUid:this.layer.uid,graphicUid:n.uid});this._renderer.addGeometries([g],c.ADD),t.renderData={renderGeometry:g,texture:i,material:y}}_updateGeometry(e,t,r){const{coords:n,element:a}=e;if(n==null||a.content==null)return void(t.renderData=this._destroyRenderData(t.renderData));const l=this._getPositionAttributeArray(n);r.renderGeometry.geometry.setAttributeData(s.POSITION,l);const i=this._getPerspectiveDivideAttributeArray(l,a.contentWidth,a.contentHeight);r.renderGeometry.geometry.setAttributeData(s.PERSPECTIVEDIVIDE,i),this._renderer.modifyGeometries([r.renderGeometry],$.GEOMETRY)}_getPositionAttributeArray(e){const[t,r,n,a]=e.rings[0];return[t[0],t[1],h,a[0],a[1],h,n[0],n[1],h,r[0],r[1],h]}_getPerspectiveDivideAttributeArray(e,t,r){F(d,[0,0,t,0,t,r,0,r],[e[0],e[1],e[3],e[4],e[6],e[7],e[9],e[10]]);const n=d[6]/d[8]*t,a=d[7]/d[8]*r;return[1,1+n,1+n+a,1+a]}_destroyRenderData(e){if(e==null)return null;const t=e.texture;return t.unload(),this.view._stage.remove(t),this._renderer.removeGeometries([e.renderGeometry],c.REMOVE),null}_createTexture(e){const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,r=e instanceof HTMLImageElement?e.naturalHeight:e.height;if("getFrame"in e)throw new O("media-layer-view-3d","animation is not supported");return new C(e,{wrap:{s:v.CLAMP_TO_EDGE,t:v.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:t,height:r,mipmap:!0,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const e=this;return{get numberOfElements(){return e._renderedElements.size}}}};p([w({readOnly:!0})],o.prototype,"type",void 0),p([w()],o.prototype,"layer",void 0),o=p([V("esri.views.3d.layers.MediaLayerView3D")],o);const d=L(),K=o;export{K as default};
