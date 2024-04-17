import{j8 as S,j9 as v,ja as U,jb as q,jc as F,jd as W,dx as k,dy as M,dz as b,cR as B,aB as Y,aC as Z,dm as J,aE as C,n as w,aN as K,cc as Q,b3 as L,bI as T,je as X,jf as ee,dq as H,jg as te,dr as ae,jh as ie,ji as D,aa as $,dt as j,dD as se,dE as N,gR as re,jj as x,dA as ne,jk as le,jl as oe,cV as he,E as y,F as R,H as de,cS as ce}from"./index-e4odrhqs.js";import{n as ue}from"./LayerView3D-pVPmrFBD.js";import{l as ge}from"./projectExtentUtils-jPpK4UOF.js";import{g as me}from"./ImageMaterial.glsl-sQ5tIX5I.js";function fe(a,e,t){const i=S(a)/v(a),s={width:t,height:t};return i>1.0001?s.height=t/i:i<.9999&&(s.width=t*i),s.width=Math.round(s.width/(S(a)/S(e))),s.height=Math.round(s.height/(v(a)/v(e))),s}function z(a,e){return U(a,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function pe(a,e,t){if(!q(e,t))return z(a,t);const i=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],s=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],o=t[2]-t[0],n=t[3]-t[1],r=s[0]>0&&s[2]>0?3:2,h=i[0]>0&&i[2]>0?3:2,l=(h+1)*(r+1),c=F(3*l),u=W(2*l),d=new Array(6*(h*r-1));let E=0,I=0,O=0,g=0,f=0;for(let p=0;p<4;p++){const P=i[p];if(P<=0)continue;let A=0;for(let _=0;_<4;_++){const G=s[_];G<=0||(c[I++]=t[0]+A,c[I++]=t[1]+E,c[I++]=-1,u[O++]=A/o,u[O++]=E/n,_<3&&p<3&&(_!==1||p!==1)&&(d[f++]=g,d[f++]=g+1,d[f++]=g+r+1,d[f++]=g+1,d[f++]=g+r+2,d[f++]=g+r+1),g++,A+=G)}E+=P}const V=new Array(d.length);return new k(a,[[M.POSITION,new b(c,d,3,!0)],[M.NORMAL,new b(_e,V,3,!0)],[M.UV0,new b(u,d,2,!0)]])}const _e=[0,0,1];let m=class extends B(ue(ce)){constructor(){super(...arguments),this.drapeSourceType=Y.RasterImage,this.updatePolicy=Z.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=J(async a=>{this.destroyed||await this._doRefresh(a).catch(e=>{C(e)||w.getLogger(this).error(e)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(K(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ge(this).then(a=>this._set("fullExtentInLocalViewSpatialReference",a))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this._updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(a,e){this._spatialReference=e,a.forEach((t,i)=>{this._overlays[i]=t,this._updateImageExtent(t,i)})}_updateImageExtent(a,e){const t=this._clippedExtent(a.extent,ye);if(t==null)return;const i=fe(a.extent,t,a.resolution);let s=a.pixelRatio*this.view.state.pixelRatio;const{layer:o}=this;if("imageMaxWidth"in o&&o.imageMaxWidth!=null||"imageMaxHeight"in o&&o.imageMaxHeight!=null){const r=o.imageMaxWidth,h=o.imageMaxHeight;if(i.width>r){const l=r/i.width;i.height=Math.floor(i.height*l),i.width=r,s*=l}if(i.height>h){const l=h/i.height;i.width=Math.floor(i.width*l),i.height=h,s*=l}}const n=this._extents[e];n&&Q(n.extent,t)&&this._imageSizeEquals(t,n.imageSize,i)||(this._extents[e]={extent:L(t),imageSize:i,pixelRatio:s},this.suspended||this._fetch(e).catch(r=>{C(r)||w.getLogger(this).error(r)}))}clear(){for(let a=0;a<this._images.length;a++)this._clearImage(a)}async doRefresh(){return this._doRefresh()}async _doRefresh(a){if(this.suspended)return;const e=[];for(let t=0;t<this._extents.length;t++)this._extents[t]&&e.push(this._fetch(t,a));await Promise.allSettled(e)}canResume(){if(!super.canResume())return!1;const a=this.layer;if(this._isScaleRangeActive()){const{minScale:e,maxScale:t}=a.effectiveScaleRange,i=this.view.scale;if(i<t||e>0&&i>e)return!1}return!0}async processResult(a,e,t){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(a.image=e)}findExtentInfoAt(a){for(const e of this._extents){const t=e.extent;if(new T(t[0],t[1],t[2],t[3],this._spatialReference).contains(a))return e}return null}getFetchOptions(){}async redraw(a,e){await X(this._images,async(t,i)=>{t&&(await a(t,e),await this._createStageObjects(i,t.image,e))})}_imageSizeEquals(a,e,t){if(!this.maximumDataResolution)return!1;const i=S(a)/this.maximumDataResolution.x,s=v(a)/this.maximumDataResolution.y,o=i/e.width,n=s/e.height,r=i/t.width,h=s/t.height,l=Math.abs(o-r),c=Math.abs(n-h),u=ee.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return l<=u&&c<=u}async _fetch(a,e){if(this.suspended)return;const t=this._extents[a],i=t.extent;this._images[a]||(this._images[a]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:L(i)});const s=this._images[a];s.loadingAbortController=H(s.loadingAbortController);const o=new T(i[0],i[1],i[2],i[3],this._spatialReference);if(o.width===0||o.height===0)return void this._clearImage(a);const n=new AbortController;s.loadingAbortController=n,te(e,()=>n.abort());const r=n.signal,h=this._waitFetchReady(r).then(async()=>{const l={requestAsImageElement:!0,pixelRatio:this._overlays[a].pixelRatio,...this.getFetchOptions(),signal:r},{height:c,width:u}=t.imageSize;return this.layer.fetchImage(o,u,c,l)}).then(l=>{if(ae(r))throw w.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),ie();return this.processResult(s,l)}).then(()=>{D(s.renderExtent,i)});s.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{$(r),await this._createStageObjects(a,s.image,r)}).catch(l=>{throw l&&!C(l)&&w.getLogger(this).error(l),l}).finally(()=>{h===s.loadingPromise&&(s.loadingPromise=null,s.loadingAbortController=null)}))}_clearImage(a){const e=this._images[a];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],j.UPDATE),e.renderGeometry=null);const t=this.view._stage,i=e.texture;i==null||i.unload(),t.remove(i),e.texture=null,t.remove(e.material),e.material=null,e.loadingAbortController=H(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(a,e,t){const i=this.view._stage,s=this._images[a],o=()=>{var n;(n=s.texture)==null||n.unload(),i.remove(s.texture),s.texture=null,s.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([s.renderGeometry],j.UPDATE),s.renderGeometry=null)};if(e){const n=new se(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:N.CLAMP_TO_EDGE,t:N.CLAMP_TO_EDGE}});let r;if(await re(this._images[a===x.INNER?x.OUTER:x.INNER].loadingPromise),$(t),o(),await i.schedule(()=>n.load(i.renderView.renderingContext),t),i.add(n),s.texture=n,s.material==null?(s.material=new me({transparent:!0,textureId:n.id}),i.add(s.material)):s.material.setParameters({textureId:n.id}),a===x.INNER)r=z(s.material,s.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void o();r=pe(s.material,h,s.renderExtent)}s.renderGeometry=new ne(r),s.renderGeometry.localOrigin=this._overlays[a].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([s.renderGeometry],j.UPDATE)}else o(),i.remove(s.material),s.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const a=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:e,maxScale:t}=a.effectiveScaleRange;return le(e,t)}_clippedExtent(a,e){if(this.view.viewingMode!=="local")return D(e,a);const t=this.view.basemapTerrain;return t.ready?oe(a,t.extent,e):D(e,a)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(a){await he(()=>this.view.stationary,a),$(a)}};y([R()],m.prototype,"layer",void 0),y([R()],m.prototype,"suspended",void 0),y([R({readOnly:!0})],m.prototype,"fullExtentInLocalViewSpatialReference",void 0),y([R()],m.prototype,"updating",void 0),m=y([de("esri.views.3d.layers.DynamicLayerView3D")],m);const ve=m,ye=L();export{ve as N};
