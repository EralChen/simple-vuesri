import{lp as A,gX as ee,eA as te,aF as G,P as x,gZ as L,dj as se,lq as ie,n as N,s as re,lr as U,ls as b,jW as ne,dE as ae,k1 as W,h8 as z,h9 as Q,ha as oe,i2 as le,dF as he,bv as ce,eH as de,gY as ue,jQ as me,a_ as pe,h1 as fe,h2 as ye,h3 as _e,h4 as ve,h5 as ge,h6 as we,fz as Re,h7 as $e,b4 as xe,lt as be,eY as Te,cS as Ee,V as Me,d6 as F,e$ as Ve,f0 as Se,lu as Ce,aE as qe,bI as Ae,lv as Ge,E as P,F as k,H as Pe,b3 as De,lw as He}from"./index-e4odrhqs.js";import{j as Oe,i as B}from"./MediaElementView-Kz8GN5xF.js";import"./BufferPool-2JbBg6_i.js";import{l as je}from"./MagnifierPrograms-PGxdpZDb.js";import"./GraphicsView2D-iMT8gEVb.js";import"./AttributeStoreView-Qo5oAAI0.js";import"./normalizeUtilsSync-Pw6LftAE.js";import"./cimAnalyzer-jgXqqslQ.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-9QGtt1O8.js";import"./Rect-pT1ASav_.js";import"./Rasterizer-IcAugvK1.js";import"./rasterizingUtils-2aA0mbnP.js";import"./imageutils-4P2cImfR.js";import"./Matcher-SCmP_8jQ.js";import"./visualVariablesUtils-i9euq2f9.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-80Mn2608.js";import"./ExpandedCIM-4L7cbCaC.js";import"./CircularArray-1_thnT0U.js";import"./throttle-SZpAiZ7F.js";import"./ComputedAttributeStorage-CCo--bMf.js";import"./TimeOnly-wi1wpUKe.js";import"./projectionSupport-uyMYuDgl.js";import"./json-v6EOeNTY.js";import"./util-TyaP2TSG.js";const y=he(),Ie={none:A.None,loop:A.Loop,oscillate:A.Oscillate};function Le(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?Ie[s.repeatType]:void 0}:{}}let Ue=class extends ee{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=te(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(G(()=>this.elementView.element.opacity,t=>this.opacity=t,x),G(()=>[this.elementView.coords],()=>{this.requestRender()},x),G(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{var t;(t=this._playHandle)==null||t.remove(),this.texture=L(this.texture),this.requestRender()},x),se(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(ie(t.content,"play",()=>this.requestRender()))},x)),e.element.load().catch(t=>{N.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new re("element-load-error","Element cannot be displayed",{element:e,error:t}))})}destroy(){var e;(e=this._playHandle)==null||e.remove(),this._handles.forEach(t=>t.remove()),this.texture=L(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(i!=null){const r=i instanceof HTMLImageElement,n=i instanceof HTMLVideoElement,l=r?i.naturalWidth:n?i.videoWidth:i.width,a=r?i.naturalHeight:n?i.videoHeight:i.height;if(this._updatePerspectiveTransform(l,a),this.texture)n&&!i.paused&&(this.texture.setData(i),this.requestRender(),(t.type===U.WEBGL2||b(l)&&b(a))&&this.texture.generateMipmap());else{const c=new ne;if(c.wrapMode=ae.CLAMP_TO_EDGE,c.preMultiplyAlpha=!0,c.width=l,c.height=a,"getFrame"in i){const h=o=>{this.texture?this.texture.setData(o):this.texture=new W(t,c,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=je(i,Le(this.elementView.element.animationOptions),null,h))}else this.texture=new W(t,c,i);(t.type===U.WEBGL2||b(l)&&b(a))&&this.texture.generateMipmap(),n&&!i.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const i=this.elementView.coords;if(i==null)return;const[r,n,l,a]=i.rings[0],c=this._vertices,{x:h,y:o}=e,m=t!==0;m?c.set([n[0]-h,n[1]-o,r[0]-h,r[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o,a[0]-h,a[1]-o,n[0]+t-h,n[1]-o,n[0]+t-h,n[1]-o,r[0]+t-h,r[1]-o,l[0]+t-h,l[1]-o,a[0]+t-h,a[1]-o]):c.set([n[0]-h,n[1]-o,r[0]-h,r[1]-o,l[0]-h,l[1]-o,a[0]-h,a[1]-o]),this.isWrapAround=m}getVAO(e,t,i){if(this.elementView.coords==null)return null;const r=this._vertices;if(this._vao)this._geometryVbo.setData(r);else{this._geometryVbo=z.createVertex(e,Q.DYNAMIC_DRAW,r);const n=z.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new oe(e,i,t,{geometry:this._geometryVbo,tex:n})}return this._vao}_updatePerspectiveTransform(e,t){const i=this._vertices;Oe(y,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),le(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}};class We extends ce{constructor(){super(...arguments),this._localOrigin=de(0,0),this._viewStateId=-1,this._dvsMat3=ue()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[me.overlay],target:()=>this.children,drawPhase:pe.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:i,size:r,pixelRatio:n,resolution:l,rotation:a,viewpoint:c,displayMat3:h}=t;if(this._viewStateId===i)return;const o=Math.PI/180*a,m=n*r[0],f=n*r[1],{x:T,y:g}=c.targetGeometry,E=fe(T,t.spatialReference);this._localOrigin.x=E,this._localOrigin.y=g;const M=l*m,w=l*f,d=ye(this._dvsMat3);_e(d,d,h),ve(d,d,ge(m/2,f/2)),we(d,d,Re(m/M,-f/w,1)),$e(d,d,-o),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:r,spatialReference:n,worldScreenWidth:l,size:a,viewpoint:c}=i,h=this._localOrigin;let o=0;const m=xe(n);if(m&&n.isWrappable){const f=a[0],T=a[1],g=180/Math.PI*r,E=Math.abs(Math.cos(g)),M=Math.abs(Math.sin(g)),w=Math.round(f*E+T*M),[d,V]=m.valid,p=be(n),{x:D,y:X}=c.targetGeometry,Z=[D,X],S=[0,0];i.toScreen(S,Z);const R=[0,0];let C;C=w>l?.5*l:.5*w;const H=Math.floor((D+.5*p)/p),J=d+H*p,K=V+H*p,q=[S[0]+C,0];i.toMap(R,q),R[0]>K&&(o=p),q[0]=S[0]-C,i.toMap(R,q),R[0]<J&&(o=-p);for(const $ of t){const O=$.elementView.bounds;if(O==null)continue;const[j,,I]=O;j<d&&I>d?$.updateDrawCoords(h,p):I>V&&j<V?$.updateDrawCoords(h,-p):$.updateDrawCoords(h,o)}}else for(const f of t)f.updateDrawCoords(h,o)}}let v=class extends Te(Ee){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new Me}attach(){this.addAttachHandles([F(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),F(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new We,this.container.addChild(this._overlayContainer),this._fetchQueue=new Ve({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new Se({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){var s;this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),(s=this._debugGraphicsView)==null||s.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){var e;this._tileStrategy.update(s),(e=this._debugGraphicsView)==null||e.update(s)}async hitTest(s,e){const t=[],i=s.normalize(),r=[i.x,i.y];for(const{projectedElement:{normalizedCoords:n,element:l}}of this._elementReferences.values())n!=null&&Ce(n.rings,r)&&t.push({type:"media",element:l,layer:this.layer,mapPoint:s,sourcePoint:l.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new ze(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,i]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,i),this.requestUpdate()},e=>{qe(e)||N.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(u,s,!0);const i=new Ae({xmin:u[0],ymin:u[1],xmax:u[2],ymax:u[3],spatialReference:this.view.spatialReference});return t.queryElements(i,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){Ge(this._elementReferences,e.uid,()=>{const t=new B({element:e,spatialReference:this.view.spatialReference}),i=new Ue(t);return this._overlayContainer.addChild(i),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:i,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){var i;const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),(i=this._debugGraphicsView)==null||i.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){var i;let e=this._elementReferences.get(s.uid);if(e){const r=e.projectedElement.normalizedCoords;if(r==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void((i=this._debugGraphicsView)==null?void 0:i.graphics.remove(e.debugGraphic));const n=[],l=[];for(const a of this._tileStrategy.tiles){const c=Y(this.view.featuresTilingScheme,a,r);e.tiles.has(a)?c||l.push(a):c&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of l)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void((e==null?void 0:e.debugGraphic)&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new B({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const r of this._tileStrategy.tiles)Y(this.view.featuresTilingScheme,r,t)&&this._referenceElement(r,s)}};P([k()],v.prototype,"layer",void 0),P([k({readOnly:!0})],v.prototype,"elements",void 0),v=P([Pe("esri.views.2d.layers.MediaLayerView2D")],v);const u=De(),_={xmin:0,ymin:0,xmax:0,ymax:0};function Y(s,e,t){return s.getTileBounds(u,e.key,!0),_.xmin=u[0],_.ymin=u[1],_.xmax=u[2],_.ymax=u[3],He(_,t)}class ze{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const r of e)i.has(r)?i.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const _t=v;export{_t as default};
