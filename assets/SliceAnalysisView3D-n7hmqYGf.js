import{ka as fe,n as Ve,E as l,F as r,H as L,M as N,ae as q,nZ as be,aF as v,n_ as d,n$ as ne,nq as Me,o0 as De,eH as Ee,nB as Te,lL as Ce,aG as Se,aM as B,K as V,lo as M,o1 as p,o2 as D,nA as S,o3 as F,nv as T,o4 as Z,gH as W,lc as c,ld as z,ke as J,o5 as Q,nx as U,nu as H,ed as xe,o6 as $e,o7 as C,gI as X,km as ke,dS as Y,o8 as He,jw as ee,jH as Le,ns as ze,dT as le,o9 as re,oa as oe,mj as Ge,ob as he,dU as K,oc as Oe}from"./index-e4odrhqs.js";import{s as Re}from"./AnalysisView3D-ICCUMYPg.js";import{U as Ie,P as Ae,v as Be,j as ue,m as Fe,I as Ue,H as Ke,g as te,a as je,A as pe,E as ce,M as de,r as G,t as O,c as ie,C as ae,o as Ne,p as qe,s as Ze,_ as x,b as We,V as f,d as ye,l as Je,e as Qe,f as Xe,h as Ye,n as ve,i as we,k as et,q as tt,u as it,w as at,x as st}from"./SlicePlaneMaterial.glsl-d_Bh0sQ7.js";import{b as nt}from"./LineVisualElement-bFkrGlt0.js";import{l as lt,n as rt,H as $}from"./Factory-SN-aD9VC.js";import{F as ot}from"./ShadedColorMaterial.glsl-S9MUG3Ek.js";import{a as ht,b as ut,v as pt}from"./analysisViewUtils-Zb6WWf8w.js";import{d as k}from"./InteractiveToolBase-Z2UPXAmo.js";import"./ImageMaterial.glsl-sQ5tIX5I.js";import"./drawUtils-QB4dzU8l.js";function ct(e){switch(e.type){case"building-scene":case"csv":case"dimension":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-notes":case"ogc-feature":case"oriented-imagery":case"point-cloud":case"route":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"media":case"open-street-map":case"tile":case"vector-tile":case"video":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return fe(e.type),!1}}const _e="esri.views.3d.analysis.Slice.SliceController",R=Ve.getLogger(_e);let P=class extends N{constructor(e){super(e),this._internalChange=!1,this._currentSlicePlane=null}initialize(){this.addHandles(this.analysis.excludedLayers.on("before-add",e=>{const t=e.item;t!=null&&(t instanceof q||t instanceof be)?t instanceof q&&ct(t)?(R.error("excludedLayers",`Layer '${t.title}, id:${t.id}' of type '${t.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),e.preventDefault()):this.analysis.excludedLayers.includes(t)&&e.preventDefault():(R.error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),e.preventDefault())})),yt(this.view,this),this.addHandles([v(()=>this.analysisViewData.plane,()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews()},{sync:!0}),v(()=>this.analysis.excludeGroundSurface,()=>this._updateLayerViews(),{sync:!0}),this.analysis.excludedLayers.on("change",()=>this._updateLayerViews()),v(()=>[this.analysisViewData.active,this.analysisViewData.visible],()=>{this._updateActiveController(),this._updateViewSlicePlane()},{sync:!0}),v(()=>this._allLayerAndSubLayerViews,()=>this._updateLayerViews())]),this.addHandles([v(()=>this.analysis.shape,()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane())},{sync:!0})],"analysis"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane()}destroy(){this.analysisViewData.active&&(this.analysisViewData.active=!1,this.view.slicePlane=null,this._updateActiveController(),this._updateViewSlicePlane()),vt(this.view,this),this.set("view",null)}get _allLayerAndSubLayerViews(){const e=this.view.allLayerViews.items;return e.concat(e.filter(Ie).flatMap(({sublayerViews:t})=>t.items))}_updateBoundedPlaneFromSlicePlane(){const e=this.analysis.shape,t=this._currentSlicePlane;if(t==null&&e==null||t!=null&&e!=null&&e.equals(t))return;let i=null,a=null;if((e==null?void 0:e.position)!=null){const s=e.position.spatialReference,n=Ae(e,this.view);n==null&&nt(this.analysis,s,R),i=Be(n,this.view,{tiltEnabled:this.analysis.tiltEnabled},d()),i!=null&&(a={heading:e.heading,tilt:e.tilt,position:e.position,width:e.width,height:e.height})}this._currentSlicePlane=a,this._internalChange=!0,this.analysisViewData.plane=i,this._internalChange=!1}_updateSlicePlaneFromBoundedPlane(){const e=this.analysisViewData.plane,t=ue(e,this.view,this.view.spatialReference,new ne);let i=null;t!=null&&(i={heading:t.heading,tilt:t.tilt,position:t.position,width:t.width,height:t.height}),this._currentSlicePlane=i,this._internalChange=!0,this.analysis.shape=t,this._internalChange=!1,this._updateViewSlicePlane()}_updateActiveController(){if(I)return;const e=Pe(this.view);if(e)if(this.analysisViewData.active)e.activeController!=null&&e.activeController!==this?(I=!0,e.activeController.analysisViewData.active=!1,I=!1):e.activeController!=null&&e.activeController,this._updateLayerViews(),e.activeController=this;else{if(e.activeController!=null&&e.activeController!==this)return;e.activeController!=null&&e.activeController===this&&(e.activeController=null,this._updateLayerViews())}}_updateViewSlicePlane(){dt(this.view)}_updateLayerViews(){const e=this.analysisViewData.plane!=null&&this.analysisViewData.visible&&this.analysisViewData.active,t=[],i=a=>{"layers"in a?a.layers.forEach(i):t.push(a)};this.analysis.excludedLayers.forEach(i),this.view.allLayerViews.forEach(a=>{a.destroyed||("slicePlaneEnabled"in a&&(a.slicePlaneEnabled=e&&!t.includes(a.layer)),"sublayerViews"in a&&a.sublayerViews.forEach(s=>{s.slicePlaneEnabled=e&&!t.includes(s.sublayer)}))}),this.view.basemapTerrain!=null&&(this.view.basemapTerrain.slicePlaneEnabled=e&&!this.analysis.excludeGroundSurface)}};l([r()],P.prototype,"view",void 0),l([r()],P.prototype,"analysis",void 0),l([r()],P.prototype,"analysisViewData",void 0),l([r()],P.prototype,"_allLayerAndSubLayerViews",null),P=l([L(_e)],P);const g=new Map;let I=!1;function dt(e){const t=Pe(e),i=t==null?void 0:t.activeController;(i==null?void 0:i.analysisViewData.plane)!=null&&i.analysisViewData.visible?e.slicePlane=i.analysisViewData.plane:e.slicePlane=null}function yt(e,t){var i;g.has(e)||g.set(e,{all:[],activeController:null}),(i=g.get(e))==null||i.all.push(t)}function Pe(e){return g.get(e)}function vt(e,t){if(!g.has(e))throw new Error("view expected in global slice register");const i=g.get(e),a=(i==null?void 0:i.all.lastIndexOf(t))??-1;if(!i||a===-1)throw new Error("controller expected in global slice register");i.all.splice(a,1),i.all.length===0&&g.delete(e)}var j;let u=j=class extends ht{constructor(e){super(e),this._clock=De,this._previewPlaneOpacity=1,this.removeIncompleteOnCancel=!1,this.layersMode="none",this.shiftManipulator=null,this.rotateHeadingManipulator=null,this.rotateTiltManipulator=null,this.resizeManipulators=null,this._frameTask=null,this._pointerMoveTimerMs=Fe,this._prevPointerMoveTimeout=null,this._previewPlaneGridVisualElement=null,this._previewPlaneOutlineVisualElement=null,this._startPlane=d(),this._previewPlane=null,this._activeKeyModifiers={},this._lastCursorPosition=Ee(),this._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],this._intersector=Te(e.view.state.viewingMode),this._intersector.options.store=Ce.MIN}initialize(){var h;if(this.analysis==null)throw new Error("SliceTool requires valid analysis, but null was provided.");const e=o=>{this._updateManipulatorsInteractive(o),o.grabbing||(this.analysisViewData.plane!=null&&p(this.analysisViewData.plane,this._startPlane),this.inputState=null)},t=new Ue(this.view,Ke.CENTER_ON_ARROW);this.shiftManipulator=t,this.manipulators.add(t),this.addHandles([this._createShiftDragPipeline(t),t.events.on("grab-changed",o=>{this._onShiftGrab(o),e(t)})]);const i=!((h=this.view._stage)!=null&&h.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result),a=new te(this.view,(o,w)=>lt(this.view.textures,{accentColor:o,contrastColor:w,preMultiplyAlpha:i}));this.rotateHeadingManipulator=a,this.manipulators.add(a),this.addHandles([this._createRotateHeadingDragPipeline(a),a.events.on("grab-changed",o=>{this._onRotateHeadingGrab(o),e(a)})]);const s=new te(this.view,(o,w)=>rt(this.view.textures,{accentColor:o,contrastColor:w,preMultiplyAlpha:i}));this.rotateTiltManipulator=s,this.manipulators.add(s),this.addHandles([this._createRotateTiltDragPipeline(s),s.events.on("grab-changed",o=>{this._onRotateTiltGrab(o),e(s)})]),this.resizeManipulators=this._resizeHandles.map((o,w)=>{const m=new je(this.view,o);return this.addHandles([this._createResizeDragPipeline(m),m.events.on("grab-changed",b=>{this._onResizeGrab(b,w),e(m)})]),m}),this.manipulators.addMany(this.resizeManipulators),this._previewPlaneGridVisualElement=pe(this.view),this._previewPlaneOutlineVisualElement=ce(this.view),this._previewPlaneOutlineVisualElement.width=de,this.addHandles(v(()=>[this.analysisViewData.plane,this.analysis.tiltEnabled],()=>this._updateManipulators(),Se));const n=v(()=>this.state,o=>{o==="sliced"&&this.finishToolCreation()},B);this.addHandles([n,v(()=>this.view.state.camera,()=>this._onCameraChange())])}destroy(){this._removeFrameTask(),this._clearPointerMoveTimeout(),this._previewPlaneOutlineVisualElement=V(this._previewPlaneOutlineVisualElement),this._previewPlaneGridVisualElement=V(this._previewPlaneGridVisualElement)}get state(){const e=!!this.analysisViewData.plane,t=!!this.inputState;return e?e&&t?"slicing":e&&!t?"sliced":"ready":"ready"}get cursor(){return this._isPlacingSlicePlane||this.layersMode==="exclude"?"crosshair":this._creatingPointerId!=null?"grabbing":null}set analysis(e){if(e==null)throw new Error("SliceTool requires valid analysis, but null was provided.");this.removeHandles("analysis"),this._set("analysis",e)}get inputState(){return this._get("inputState")}set inputState(e){this._set("inputState",e),this.analysisViewData.showGrid=e!=null&&e.type==="resize",this._updateMaterials()}get _isPlacingSlicePlane(){return!this.inputState&&!this.analysisViewData.plane&&this.active}get _creatingPointerId(){return this.inputState!=null&&this.inputState.type==="shift"?this.inputState.creatingPointerId:null}enterExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._set("layersMode","exclude"),this.active||(this.view.activeTool=this))}exitExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._set("layersMode","none"),this.active&&(this.view.activeTool=null))}onDeactivate(){this._set("layersMode","none"),this._updatePreviewPlane(null)}onShow(){this._updateVisibility(!0)}onHide(){this._updateVisibility(!1)}_updateVisibility(e){this._updateManipulators(),e||this._clearPointerMoveTimeout()}onInputEvent(e){switch(e.type){case"pointer-drag":if(!A(e))return;this._isPlacingSlicePlane?this._onClickPlacePlane(e)&&e.stopPropagation():this._onPointerDrag(e)&&e.stopPropagation();break;case"pointer-move":this._onPointerMove(e);break;case"pointer-up":this._onPointerUp(e)&&e.stopPropagation();break;case"immediate-click":if(!A(e))return;this._onClickPlacePlane(e)&&e.stopPropagation();break;case"click":if(!A(e))return;this._onClickExcludeLayer(e)&&e.stopPropagation();break;case"drag":this.inputState&&e.stopPropagation();break;case"key-down":this._onKeyDown(e)&&e.stopPropagation();break;case"key-up":this._onKeyUp(e)&&e.stopPropagation()}}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}_onPointerDrag(e){const t=this.inputState;if(e.pointerId===this._creatingPointerId&&t!=null&&t.type==="shift"){const i=M(e);return this.shiftManipulator.events.emit("drag",{action:t.hasBeenDragged?"update":"start",pointerType:e.pointerType,start:i,screenPoint:i}),t.hasBeenDragged=!0,!0}return!1}_onPointerMove(e){this._lastCursorPosition.x=e.x,this._lastCursorPosition.y=e.y,this._resetPointerMoveTimeout(),e.pointerType!=="touch"&&this._updatePreviewPlane(M(e),this._activeKeyModifiers)}_onCameraChange(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),this._updateManipulators()}_onPointerUp(e){if(e.pointerId===this._creatingPointerId&&this.analysisViewData.plane!=null){const t=M(e);return this.shiftManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),p(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0}return!1}_onClickPlacePlane(e){if(this.layersMode==="exclude")return!1;if(this._isPlacingSlicePlane){const t=M(e),i=d();if(this._pickPlane(t,!1,this._activeKeyModifiers,i)){if(e.type==="pointer-drag"){const a=D(this.view.state.camera,t,E);this.inputState=se(a,e.pointerId,i.origin,i)}return p(i,this._startPlane),this.analysis.shape=ue(i,this.view,this.view.spatialReference,new ne),!0}}return!1}_onClickExcludeLayer(e){return!(this.layersMode!=="exclude"||!this.created)&&(this.view.hitTest(M(e)).then(t=>{if(t.results.length){const i=t.results[0],a=(i==null?void 0:i.type)==="graphic"&&i.graphic;if(a){const s=a.sourceLayer||a.layer;s&&this.analysis.excludedLayers.push(s)}}else t.ground.layer?this.analysis.excludedLayers.push(t.ground.layer):this.analysis.excludeGroundSurface=!0}),this._set("layersMode","none"),this.active&&(this.view.activeTool=null),!0)}_onKeyDown(e){return(e.key===G||e.key===O)&&(this._activeKeyModifiers[e.key]=!0,this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onKeyUp(e){return!(e.key!==G&&e.key!==O||!this._activeKeyModifiers[e.key])&&(delete this._activeKeyModifiers[e.key],this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onShiftGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=D(this.view.state.camera,e.screenPoint,E);p(this.analysisViewData.plane,this._startPlane),this.inputState=se(t,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane)}_createShiftDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="shift")return;const n=this.analysisViewData.plane!=null?p(this.analysisViewData.plane,d()):null;i.next($(this.view,s.shiftPlane)).next(this._shiftDragAdjustSensitivity(s)).next(this._shiftDragUpdatePlane(s)),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_shiftDragAdjustSensitivity(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=.001,a=Math.min((1-Math.abs(S(F(this.analysisViewData.plane),t.ray.direction)/T(t.ray.direction)))/i,1),s=-Z(this._startPlane.plane,t.renderEnd),n=-Z(this._startPlane.plane,e.startPoint);return e.depth=e.depth*(1-a)+s*a-n,t}}_shiftDragUpdatePlane(e){return()=>{if(this.analysisViewData.plane==null)return;const t=W(c.get(),this._startPlane.origin),i=W(c.get(),F(this._startPlane));z(i,i,-e.depth),J(i,i,t);const a=Q(i,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,d());this._updateBoundedPlane(a)}}_onRotateHeadingGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=ie(this.analysisViewData.plane,this.view.renderCoordsHelper,ae.HEADING,U()),i=D(this.view.state.camera,e.screenPoint,E),a=K();H(t,i,a)&&(p(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateHeadingDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const n=this.analysisViewData.plane!=null?p(this.analysisViewData.plane,d()):null;i.next($(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_onRotateTiltGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=ie(this.analysisViewData.plane,this.view.renderCoordsHelper,ae.TILT,U()),i=D(this.view.state.camera,e.screenPoint,E),a=K();H(t,i,a)&&(p(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateTiltDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const n=this.analysisViewData.plane!=null?p(this.analysisViewData.plane,d()):null;i.next($(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_rotateDragRenderPlaneToRotate(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=xe(e.rotatePlane),a=ot(e.startPoint,t.renderEnd,this.analysisViewData.plane.origin,i);return{...t,rotateAxis:i,rotateAngle:a}}}_rotateDragUpdatePlaneFromRotate(){return e=>{if(this.analysisViewData.plane==null)return;const t=$e(C.get(),e.rotateAngle,e.rotateAxis);if(t==null)return;const i=X(c.get(),this._startPlane.basis1,t),a=X(c.get(),this._startPlane.basis2,t),s=Q(this.analysisViewData.plane.origin,i,a,d());this._updateBoundedPlane(s)}}_onResizeGrab(e,t){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const i=D(this.view.state.camera,e.screenPoint,E),a=c.get();H(this.analysisViewData.plane.plane,i,a)&&(p(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:t,startPoint:ke(a)})}_createResizeDragPipeline(e){return k(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="resize"||this.analysisViewData.plane==null)return;const n=p(this.analysisViewData.plane,d());i.next($(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(s)),a.next(()=>{this._updateBoundedPlane(n)})})}_resizeDragUpdatePlane(e){return t=>{if(this.analysisViewData.plane==null)return;const i=this._resizeHandles[e.activeHandleIdx],a=Ne(i,e.startPoint,t.renderEnd,this.view.state.camera,this._startPlane,p(this.analysisViewData.plane));this._updateBoundedPlane(a)}}_updateBoundedPlane(e){const t=this.analysisViewData;if(t==null)throw new Error("valid internal object expected");t.plane=e}_updatePreviewPlane(e,t={}){let i=this._previewPlane;if(this._previewPlane=null,e==null)return this._removeFrameTask(),void this._updateManipulators();if(!this.analysisViewData.plane&&this.active){const a=i??d();if(i=i!=null?p(i,wt):null,this._pickPlane(e,!0,t,a)){const s=tt;let n=!1;i!=null&&(n=S(i.plane,a.plane)<s||S(Y(c.get(),i.basis1),Y(c.get(),a.basis1))<s),n&&(this._previewPlaneOpacity=0),this._previewPlane=a}}this._previewPlane!=null&&this._frameTask==null&&this._previewPlaneOpacity===0?this._frameTask=He({update:({deltaTime:a})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+a/(1e3*qe),1),this._updateManipulators(),this._previewPlaneOpacity===1&&this._removeFrameTask()}}):this._previewPlane==null&&this._frameTask!=null?this._removeFrameTask():this._previewPlane!=null&&this._updateManipulators()}_removeFrameTask(){this._frameTask=ee(this._frameTask)}_pickMinResult(e){const t=Le(e,ze.get());return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(t,this._intersector),this._intersector.results.min}_pickPlane(e,t,i,a){const s=this._pickMinResult(e),n=c.get();if(!s.getIntersectionPoint(n))return!1;const h=s.getTransformedNormal(c.get()),o=this.view.state.camera;S(h,o.viewForward)>0&&z(h,h,-1);const w=Ze(n,o),m=(t?1:-1)*w*it,b=z(c.get(),h,m);J(b,b,n);const ge=this.analysis.tiltEnabled?x.TILTED:x.HORIZONTAL_OR_VERTICAL,me=i[G]?x.VERTICAL:i[O]?x.HORIZONTAL:ge;return We(b,h,w,w,o,me,this.view.renderCoordsHelper,a),!0}_clearPointerMoveTimeout(){this._prevPointerMoveTimeout=ee(this._prevPointerMoveTimeout)}_resetPointerMoveTimeout(){this._clearPointerMoveTimeout(),this.shiftManipulator.state|=f,this.rotateHeadingManipulator.state|=f,this.rotateTiltManipulator.state|=f,this._prevPointerMoveTimeout=this._clock.setTimeout(()=>{this.shiftManipulator.state&=~f,this.rotateHeadingManipulator.state&=~f,this.rotateTiltManipulator.state&=~f},this._pointerMoveTimerMs)}_updateManipulators(){if(j.disableEngineLayers)return;let e,t=!1;if(this.analysisViewData.plane!=null)e=this.analysisViewData.plane,t=!1;else{if(this._previewPlane==null)return this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(h=>h.available=!1),this._previewPlaneOutlineVisualElement.visible=!1,void(this._previewPlaneGridVisualElement.visible=!1);e=this._previewPlane,t=!0}const i=ye(e,C.get());t?(this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(h=>h.available=!1),this._previewPlaneOutlineVisualElement.attached=!0,this._previewPlaneGridVisualElement.attached=!0,this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach(h=>h.available=!0),Je(this.shiftManipulator,i,e,this.view.state.camera),Qe(this.rotateHeadingManipulator,i,e,this.view.renderCoordsHelper),Xe(this.rotateTiltManipulator,i,e),this.resizeManipulators.forEach((h,o)=>Ye(h,this._resizeHandles[o],i,e)),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);const a=le(c.get(),T(e.basis1),T(e.basis2),1),s=re(C.get(),a),n=oe(s,i,s);this._previewPlaneOutlineVisualElement.transform=n,this._previewPlaneGridVisualElement.transform=n,this._updateMaterials()}_updateMaterials(){const e=ve(this.view.effectiveTheme);e[3]*=this._previewPlaneOpacity;const t=Ge(we);t[3]*=this._previewPlaneOpacity,this._previewPlaneOutlineVisualElement.color=e,this._previewPlaneGridVisualElement.backgroundColor=t,this._previewPlaneGridVisualElement.gridColor=he}_updateManipulatorsInteractive(e){if(!e.grabbing)return this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,void this.resizeManipulators.forEach(t=>{t.interactive=!0});this.shiftManipulator.interactive=this.shiftManipulator===e,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===e,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===e,this.resizeManipulators.forEach(t=>{t.interactive=t===e})}testData(){return{plane:this.analysisViewData.plane,setPointerMoveTimerMs:e=>{this._pointerMoveTimerMs=e}}}};function se(e,t,i,a){const s=et(i,F(a),e.direction,U()),n=K();return H(s,e,n)?{type:"shift",creatingPointerId:t,hasBeenDragged:!1,shiftPlane:s,depth:0,startPoint:n}:null}function A(e){return e.pointerType!=="mouse"||e.button===0}u.disableEngineLayers=!1,l([r()],u.prototype,"_clock",void 0),l([r({constructOnly:!0})],u.prototype,"view",void 0),l([r()],u.prototype,"analysisViewData",void 0),l([r({readOnly:!0})],u.prototype,"state",null),l([r({readOnly:!0})],u.prototype,"cursor",null),l([r()],u.prototype,"analysis",null),l([r()],u.prototype,"removeIncompleteOnCancel",void 0),l([r({readOnly:!0})],u.prototype,"layersMode",void 0),l([r({value:null})],u.prototype,"inputState",null),l([r()],u.prototype,"_isPlacingSlicePlane",null),l([r()],u.prototype,"_creatingPointerId",null),u=j=l([L("esri.views.3d.analysis.Slice.SliceTool")],u);const wt=d(),E=Me(),_t=u;let _=class extends N{constructor(e){super(e),this._gridVisualElement=null,this._outlineVisualElement=null,this.showGrid=!1,this.preview=!0}initialize(){const e=this.analysisViewData;if(e==null)throw new Error("expected internal object to be valid");this._gridVisualElement=pe(this.view),this._outlineVisualElement=ce(this.view),this.addHandles([v(()=>{const t=e.plane!=null&&this.analysisViewData.visible,{active:i}=this.analysisViewData,{preview:a,showGrid:s,view:n}=this,{effectiveTheme:h}=n;return{visible:t,active:i,preview:a,showGrid:s,gridColor:at(h),outlineColor:ve(h)}},t=>this._updateMaterials(t),B),v(()=>e.plane,t=>this._updatePlane(t),B)],"internal")}destroy(){this._gridVisualElement=V(this._gridVisualElement),this._outlineVisualElement=V(this._outlineVisualElement),this.set("view",null)}_updatePlane(e){if(e==null)return;this._gridVisualElement.attached=!0,this._outlineVisualElement.attached=!0;const t=le(c.get(),T(e.basis1),T(e.basis2),1),i=re(C.get(),t),a=ye(e,C.get()),s=oe(i,a,i);this._outlineVisualElement.transform=s,this._gridVisualElement.transform=s}_updateMaterials({visible:e,active:t,preview:i,showGrid:a,gridColor:s,outlineColor:n}){this._outlineVisualElement.color=n,this._outlineVisualElement.width=i?de:st,this._outlineVisualElement.stipplePattern=t?null:Oe(5),this._gridVisualElement.backgroundColor=we,this._gridVisualElement.gridColor=a?s:he,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e}};l([r()],_.prototype,"view",void 0),l([r()],_.prototype,"analysis",void 0),l([r()],_.prototype,"analysisViewData",void 0),l([r()],_.prototype,"showGrid",void 0),l([r()],_.prototype,"preview",void 0),_=l([L("esri.views.3d.analysis.Slice.SliceVisualization")],_);let y=class extends Re(N){constructor(e){super(e),this.type="slice-view-3d",this.analysis=null,this.tool=null,this.analysisVisualization=null,this.analysisController=null,this.plane=null,this.active=!0}initialize(){this.analysisVisualization=new _({view:this.view,analysis:this.analysis,analysisViewData:this}),this.analysisController=new P({view:this.view,analysis:this.analysis,analysisViewData:this}),this.addHandles(ut(this,_t))}destroy(){pt(this),this.analysisVisualization=V(this.analysisVisualization),this.analysisController=V(this.analysisController)}get showGrid(){var e;return((e=this.analysisVisualization)==null?void 0:e.showGrid)??!1}set showGrid(e){this.analysisVisualization&&(this.analysisVisualization.showGrid=e)}get editable(){return!this.analysisVisualization.preview}set editable(e){this.analysisVisualization.preview=!e}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController,tool:this.tool}}};l([r({readOnly:!0})],y.prototype,"type",void 0),l([r({constructOnly:!0,nonNullable:!0})],y.prototype,"analysis",void 0),l([r()],y.prototype,"tool",void 0),l([r()],y.prototype,"plane",void 0),l([r()],y.prototype,"active",void 0),l([r()],y.prototype,"showGrid",null),l([r()],y.prototype,"editable",null),y=l([L("esri.views.3d.analysis.SliceAnalysisView3D")],y);const Ct=y;export{Ct as default};
