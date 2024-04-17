import{bO as G,c4 as z,V as E,eB as $,dj as U,eC as M,aF as k,K as S,eD as D,cB as L,eE as P,cj as B,dq as I,en as b,t as f,bA as x,eF as O,dp as K,eG as j,eH as C,n as q,s as J,E as m,F as y,eI as N,eJ as Q,aM as W,P as X,H as Y}from"./index-e4odrhqs.js";import{h as T}from"./unitFormatUtils-cVwjZZmV.js";import{S as Z}from"./SnappingVisualizer2D-2kRHDxuU.js";import{i as tt}from"./drawUtils-QB4dzU8l.js";import{l as et,U as it}from"./GraphicMover-yGSlXMD0.js";import{d as st}from"./settings-E-72Gq78.js";import{V as ot}from"./EditGeometryOperations-9QkRLVAG.js";import{e as rt}from"./SnappingContext-nmBhZrKu.js";import{m as R,g as nt,u as at}from"./Tooltip-zSyKl7Mu.js";import{r as ht,p as pt}from"./TranslateTooltipInfos-EVx1eYBI.js";import{u as ct}from"./automaticAreaMeasurementUtils-1-UFfqPk.js";import"./featureUtils-BtuVs_uN.js";import"./GraphicManipulator-FDaeRMXx.js";import"./PointSnappingHint-rM9sELLN.js";import"./euclideanLengthMeasurementUtils-7MHVl5Oq.js";import"./measurementUtils-SUXZ7Gdz.js";import"./geometryEngine-dHzrppj1.js";import"./geometryEngineBase-aCmThG7z.js";import"./hydrated-bpMuqPL4.js";import"./memoize-uBdPJ80n.js";import"./quantityFormatUtils-O-0GgyJ5.js";import"./euclideanAreaMeasurementUtils-hQ_3jGha.js";class lt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-start"}}class dt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape"}}class vt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-stop"}}class mt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class yt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class _t{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class gt{constructor(e){this.added=e,this.type="vertex-select"}}class ut{constructor(e){this.removed=e,this.type="vertex-deselect"}}class xt{constructor(e,i,s,o){this.added=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-add"}}class ft{constructor(e,i,s,o){this.removed=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-remove"}}const g=st.reshapeGraphics,Gt={vertices:{default:new G({style:"circle",size:g.vertex.size,color:g.vertex.color,outline:{color:g.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:g.vertex.hoverSize,color:g.vertex.hoverColor,outline:{color:g.vertex.hoverOutlineColor,width:1}}),selected:new G({style:"circle",size:g.selected.size,color:g.selected.color,outline:{color:g.selected.outlineColor,width:1}})},midpoints:{default:new G({style:"circle",size:g.midpoint.size,color:g.midpoint.color,outline:{color:g.midpoint.outlineColor,width:1}}),hover:new G({style:"circle",size:g.midpoint.size,color:g.midpoint.color,outline:{color:g.midpoint.outlineColor,width:1}})}};let d=class extends z.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this._tooltip=null,this._translateGraphicTooltipInfo=null,this._translateVertexTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new E,this.midpointSymbol=new G({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.symbols=Gt,this.tooltipOptions=new $,this.type="reshape",this.vertexGraphics=new E,this.view=null}initialize(){const t=this.view;this._highlightHelper=new et({view:t}),this._setup(),this.addHandles([U(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;N(i,e),this.addHandles(i.on("key-down",s=>this._keyDownHandler(s),Q.TOOL))},{once:!0,initial:!0}),M(()=>this.graphic,()=>this.refresh()),M(()=>this.layer,(e,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),M(()=>this.enableMidpoints,()=>this.refresh()),k(()=>this.tooltipOptions.enabled,e=>{this._tooltip=e?new at({view:this.view}):S(this._tooltip)},W),k(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),X)])}destroy(){var t;this._reset(),(t=this._mover)==null||t.destroy(),this._mover=null,this._tooltip=S(this._tooltip)}set highlightsEnabled(t){var e;(e=this._highlightHelper)==null||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=this.view.ready,e=!(!this.graphic||!this.layer);return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length>0&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:t,layer:e}=this;if(!e||(t==null?void 0:t.geometry)==null)return;const i=t.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&D(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphic&&((t=this._highlightHelper)==null||t.add(this.graphic))}_setUpGeometryHelper(){const t=this.graphic.geometry;if(t==null||t.type==="mesh"||t.type==="extent")return void this._logGeometryTypeError();const e=t.type==="multipoint"?new L({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=ot.fromGeometry(e,P.Local)}_saveSnappingContextForHandle(t,e){var i;this._snappingGraphicsLayer=new B({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new rt({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((i=e.viewEvent)==null?void 0:i.pointerType)||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new Z(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){var t;this._clearSelection(),(t=this._highlightHelper)==null||t.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){var t;this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._snappingGraphicsLayer!=null&&((t=this.view)!=null&&t.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=S(this._editGeometryOperations),this._snappingTask=I(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this._set("selectedVertices",[])}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_getCoordinatesForUI(t){const e=b(t.clone());if(t.type==="polygon")for(const i of e){const s=i[i.length-1];i[0][0]===s[0]&&i[0][1]===s[1]&&i.length>2&&i.pop()}return e}_setupGraphics(){const t=this.graphic.geometry;if(t!=null&&(t.type==="polyline"||t.type==="polygon")){const e=this._getCoordinatesForUI(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:s}}=this,o=[];return t==null||t.forEach((n,r)=>{n.forEach((h,p)=>{var v;const[a,c,l]=h;o.push(new f({geometry:new x({x:a,y:c,z:l,spatialReference:s}),symbol:(v=i==null?void 0:i.vertices)==null?void 0:v.default,attributes:{...e,pathIndex:r,pointIndex:p}}))})}),o}_createMidpointGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:s}}=this,o=[];return t==null||t.forEach((n,r)=>{n.forEach((h,p)=>{var _;const[a,c,l]=h,v=n[p+1]?p+1:0;if(((_=this.graphic.geometry)==null?void 0:_.type)==="polygon"||v!==0){const[u,V,w]=n[v],[H,A,F]=O([a,c,l],[u,V,w]);o.push(new f({geometry:new x({x:H,y:A,z:F,spatialReference:s}),symbol:i.midpoints.default,attributes:{...e,pathIndex:r,pointIndexStart:p,pointIndexEnd:v}}))}})}),o}_updateSymbolsForTheme(){var e;const t=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",t),hover:(e=this.symbols.vertices.hover)==null?void 0:e.clone().set("color",t)},midpoints:{...this.symbols.midpoints}};for(const i of this.vertexGraphics)this._isSelected(i)?i.symbol=this.symbols.vertices.selected:this._hoverGraphic===i?i.symbol=this.symbols.vertices.hover:i.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<e.length;i++){const s=[];for(let o=0;o<e.length;o++){if(i===o)continue;const n=e[i],r=e[o];n.x===r.x&&n.y===r.y&&s.push(o)}t[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:s,view:o}=this,n=s.concat(i).items;t&&n.push(e),this._mover=new it({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:n,view:o,callbacks:{onGraphicClick:r=>this._onGraphicClickCallback(r),onGraphicMoveStart:r=>this._onGraphicMoveStartCallback(r),onGraphicMove:r=>this._onGraphicMoveCallback(r),onGraphicMoveStop:r=>this._onGraphicMoveStopCallback(r),onGraphicPointerOver:r=>this._onGraphicPointerOverCallback(r),onGraphicPointerOut:r=>this._onGraphicPointerOutCallback(r)}})}_onGraphicClickCallback(t){t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);else if(this._isMidpoint(e)){if(t.viewEvent.button===2)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],i,s)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),t.viewEvent.button===2?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:s}=t,o=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:s}=t;if(s===this.graphic){const{geometry:o}=s;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(o!=null&&o.type==="point"&&this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}))}if(!this.selectedVertices.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const o=this.graphic.clone(),n=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],o,n)}this._addToSelection(s)}this._setUpOperation(t),this._emitReshapeStartEvent(s),this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)})}_onGraphicMoveCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t;e.totalDx+=i,e.totalDy+=s;const{operationType:n}=e,{geometry:r}=o;if(r!=null){if(n!=="move")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)});else if(r.type==="point")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)});else if(r.type==="polyline"||r.type==="polygon"){const h=this._getCoordinatesForUI(r);this._updateVertexGraphicLocations(h),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)}}}_onGraphicMoveStopCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t,{operationType:n}=e;e.totalDx+=i,e.totalDy+=s,this._onHandleMove(o,i,s,t,()=>n==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(o)),this._isMidpoint(o)?this.refresh():(this._updateTooltip(this._isVertex(o)?o:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const e=this.view.spatialReference;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:o}=i.attributes,[n,r,h]=t[s][o];i.geometry=new x({x:n,y:r,z:h,spatialReference:e})}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=e.attributes,[n,r,h]=t[i][s],[p,a,c]=t[i][o],[l,v,_]=O([n,r,h],[p,a,c]);e.geometry=new x({x:l,y:v,z:_,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:t}){return[(t==null?void 0:t.pathIndex)||0,(t==null?void 0:t.pointIndex)||0]}_getVertexFromEditGeometry(t){const[e,i]=this._getIndicesForVertexGraphic(t);return this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,i,s,o){I(this._snappingTask);const n=this._snappingContext;if(!n)return;const r=t.geometry,h=s.type==="graphic-move-stop";if(this.snappingManager!=null&&this.selectedVertices.length<2&&!h){const p=this.snappingManager;this._stagedVertex=p.update({point:r,context:n}),this._syncGeometryAfterVertexMove(t,new x(this._stagedVertex),e,i,h),o(),this._snappingTask=K(async a=>{const c=await p.snap({point:r,context:n,signal:a});c.valid&&(this._stagedVertex=c.apply(),this._syncGeometryAfterVertexMove(t,new x(this._stagedVertex),e,i,h),o())})}else{const p=this._stagedVertex!=null?new x(this._stagedVertex):r;this._syncGeometryAfterVertexMove(t,p,e,i,h),o()}}async _syncGeometryAfterVertexMove(t,e,i,s,o=!1){const n=this._editGeometryOperations.data.geometry;if(n.type==="point")t.geometry=e;else if(n.type==="mesh")t.geometry=n.centerAt(e),t.notifyGeometryChanged();else{const{x:r,y:h,z:p}=e,[a,c]=this._getIndicesForVertexGraphic(t);let l=b(n);const v=l[a].length-1,_=p!=null?[r,h,p]:[r,h];l[a][c]=_,n.type==="polygon"&&(c===0?l[a][v]=_:c===v&&(l[a][0]=_)),this._isVertex(t)&&(l=this._moveRelatedCoordinates(l,t,_),l=this._moveSelectedHandleCoordinates(l,t,i,s,n.type==="polygon"),this._updateMidpointGraphicLocations(l)),this.graphic.geometry=n.clone();const u=this._getVertexFromEditGeometry(t),V=r-u.pos[0],w=h-u.pos[1];this._editGeometryOperations.moveVertices([u],V,w,0),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i){const{relatedGraphicIndices:s}=e.attributes;for(const o of s){const n=this.vertexGraphics.at(o),{pathIndex:r,pointIndex:h}=n.attributes;t[r][h]=i,n.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,s,o){for(const n of this.selectedVertices)if(n!==e){const{pathIndex:r,pointIndex:h,relatedGraphicIndices:p}=n.attributes,a=tt(n.geometry,i,s,this.view),c=t[r].length-1;t[r][h]=[a.x,a.y],n.geometry=a,o&&(h===0?t[r][c]=[a.x,a.y]:h===c&&(t[r][0]=[a.x,a.y]));for(const l of p){const v=this.vertexGraphics.at(l),{pathIndex:_,pointIndex:u}=v.attributes;t[_][u]=[a.x,a.y],v.geometry=a}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic;this._hoverGraphic=e;const i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._hoverGraphic=null,this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,s=i.geometry;if(s==null||s.type!=="polygon"&&s.type!=="polyline")return[];const o=s.clone(),n=[],{pathIndex:r,pointIndexStart:h,pointIndexEnd:p}=t.attributes,{x:a,y:c,z:l}=t.geometry,v=p===0?h+1:p,_=b(o);return _[r].splice(v,0,l!=null?[a,c,l]:[a,c]),t.attributes={...e,pathIndex:r,pointIndex:v,relatedGraphicIndices:[]},n.push({coordinates:_[r][v],componentIndex:r,vertexIndex:v}),this.graphic.geometry=o,n}_addToSelection(t){t instanceof f&&(t=[t]);for(const e of t)e.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(t)),this._emitSelectEvent(t)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,s=e?i.hover:i.default;t instanceof f&&(t=[t]);for(const o of t)this.selectedVertices.splice(this.selectedVertices.indexOf(o),1),this._set("selectedVertices",this.selectedVertices),o.set("symbol",s);this._emitDeselectEvent(t)}_clearSelection(){if(this.selectedVertices.length){const t=this.selectedVertices;for(const e of this.selectedVertices)e.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(t)}}_keyDownHandler(t){j.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if(e==null||e.type!=="polygon"&&e.type!=="polyline"||e.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;t instanceof f&&(t=[t]);const i=this.graphic.clone(),s=e.clone();let o=b(s);const n=[];t instanceof f&&(t=[t]);for(const r of t){const{x:h,y:p}=r.geometry;for(let a=0;a<o.length;a++){const c=o[a];for(let l=0;l<c.length;l++){const[v,_]=c[l];h===v&&p===_&&(n.push({coordinates:o[a][l],componentIndex:a,vertexIndex:l}),o[a].splice(Number(l),1))}}}if(s.type==="polygon")o=o.filter(r=>{if(r.length<2)return!1;const[h,p]=r[0],[a,c]=r[r.length-1];return(r.length!==2||h!==a||p!==c)&&(h===a&&p===c||r.push(r[0]),!0)}),s.rings=o;else{for(const r of o)r.length===1&&o.splice(o.indexOf(r),1);s.paths=o}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(t,i,n)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){this._tooltip!=null&&(t?t===this.graphic?this._updateMoveGraphicTooltip(e):this._updateMoveVertexTooltip(e):this._tooltip.clear())}_updateMoveGraphicTooltip(t){const{_tooltip:e,tooltipOptions:i,view:s}=this;if(e==null)return;const o=this._translateGraphicTooltipInfo??(this._translateGraphicTooltipInfo=new ht({tooltipOptions:i}));if(o.clear(),o.tooltipOptions=i,t){const{x:n,y:r}=t.origin,h=s.toMap(t),p=s.toMap(C(n,r)),a=R(p,h);o.distance=a??T}e.info=o}_updateMoveVertexTooltip(t){const{_tooltip:e,graphic:{geometry:i},tooltipOptions:s,view:o}=this;if(e==null)return;const n=this._translateVertexTooltipInfo??(this._translateVertexTooltipInfo=new pt({tooltipOptions:s}));if(n.clear(),n.tooltipOptions=s,(i==null?void 0:i.type)==="polygon"?n.area=ct(i):(i==null?void 0:i.type)==="polyline"&&(n.totalLength=nt(i)),t){const{x:r,y:h}=t.origin,p=o.toMap(t),a=o.toMap(C(r,h)),c=R(a,p);n.distance=c??T}e.info=n}_emitMoveStartEvent(t,e){const i=new mt(this.graphic,t,e);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(t,e){const i=new yt(this.graphic,t,e);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const t=this._activeOperationInfo;if(!t)return;const{totalDx:e,totalDy:i}=t,s=new _t(this.graphic,e,i);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitReshapeStartEvent(t){const e=new lt(this.graphic,t,this.selectedVertices);this.emit("reshape-start",e),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(e)}_emitReshapeEvent(t){const e=new dt(this.graphic,t,this.selectedVertices);this.emit("reshape",e),this.callbacks.onReshape&&this.callbacks.onReshape(e)}_emitReshapeStopEvent(t){const e=new vt(this.graphic,t,this.selectedVertices);this.emit("reshape-stop",e),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(e)}_emitSelectEvent(t){const e=new gt(t);this.emit("select",e),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(e)}_emitDeselectEvent(t){const e=new ut(t);this.emit("deselect",e),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(e)}_emitVertexAddEvent(t,e,i){const s=new xt(t,this.graphic,e,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(t,e,i){const s=new ft(t,this.graphic,e,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}_logGeometryTypeError(){q.getLogger(this).error(new J("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};m([y()],d.prototype,"_tooltip",void 0),m([y()],d.prototype,"_translateGraphicTooltipInfo",void 0),m([y()],d.prototype,"_translateVertexTooltipInfo",void 0),m([y()],d.prototype,"callbacks",void 0),m([y()],d.prototype,"enableMidpoints",void 0),m([y()],d.prototype,"enableMovement",void 0),m([y()],d.prototype,"enableVertices",void 0),m([y()],d.prototype,"graphic",void 0),m([y({value:!0})],d.prototype,"highlightsEnabled",null),m([y()],d.prototype,"layer",void 0),m([y({readOnly:!0})],d.prototype,"midpointGraphics",void 0),m([y()],d.prototype,"midpointSymbol",void 0),m([y({readOnly:!0})],d.prototype,"selectedVertices",void 0),m([y()],d.prototype,"snappingManager",void 0),m([y({readOnly:!0})],d.prototype,"state",null),m([y()],d.prototype,"symbols",void 0),m([y({type:$})],d.prototype,"tooltipOptions",void 0),m([y({readOnly:!0})],d.prototype,"type",void 0),m([y({readOnly:!0})],d.prototype,"vertexGraphics",void 0),m([y()],d.prototype,"view",void 0),d=m([Y("esri.views.draw.support.Reshape")],d);const Kt=d;export{Kt as default};