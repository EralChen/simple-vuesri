import{n as De,E as o,F as d,H as ce,M as de,dU as b,eh as Te,bS as ge,aF as C,aM as z,jK as Q,em as le,cB as xe,yB as Re,yC as Ge,BS as pe,sW as je,ei as Ne,ej as He,sX as Be,AJ as Ie,AK as ke,AQ as q,dy as L,AM as X,BW as K,AW as We,_ as Fe,AV as J,AT as he,AY as Ue,AZ as Qe,BC as qe,A_ as Xe,C9 as Ke,A$ as Je,hc as Ye,B2 as Ze,B4 as et,g$ as tt,AX as it,Cd as st,Cb as nt,AR as _e,lB as me,BY as at,Bi as rt,mg as Y,dT as Z,dS as ee,lb as ze,dR as ot,gI as te,gJ as lt,mh as j,pI as ve,Cj as ye,mo as be,l1 as ct,K as f,lc as N,mq as dt,Aa as we,rB as ht,rh as fe,A8 as ut,nR as Le,oc as ie,sD as gt,P as pt,ld as _t,ke as mt,j4 as vt,BZ as yt,j0 as bt,sC as wt,tc as Ae,rg as ft,l9 as Ve,l8 as ue}from"./index-e4odrhqs.js";import{a as Lt,e as x,i as se,b as At}from"./UnitNormalizer-yUDjoSTJ.js";import{s as Pt}from"./AnalysisView3D-ICCUMYPg.js";import{r as H,f as ne}from"./unitFormatUtils-cVwjZZmV.js";import{geodesicLength as Ct}from"./geometryEngine-dHzrppj1.js";import{r as St,b as Et,a as Ot,u as B}from"./LineVisualElement-bFkrGlt0.js";import{h as I,R as ae,y as zt,L as re,d as Vt}from"./quantityFormatUtils-O-0GgyJ5.js";import{g as oe,_ as Pe,m as G,C as Ce}from"./Segment-PczSg4JU.js";import{z as $t}from"./RightAngleQuadVisualElement-kFzlvull.js";import"./geometryEngineBase-aCmThG7z.js";import"./hydrated-bpMuqPL4.js";import"./TextOverlayItem-B3EVaEOV.js";const $e="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",Mt=De.getLogger($e),Dt=1e5;let M=class extends de{constructor(e){super(e),this._unitNormalizer=new Lt,this._tempStartPosition=b(),this._tempEndPosition=b(),this._tempCornerPosition=b()}initialize(){const e=this.view.spatialReference,i=Te(e),s=i===Ne?He:i;this._sphericalPCPF=s;const n=ge(e,s);this._unitNormalizer.spatialReference=n?s:e,this.addHandles([C(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:a,startPoint:r})=>{a.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(r)},z),C(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:a,endPoint:r})=>{a.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(r)},z),C(()=>({result:this._computedResult,viewData:this.viewData}),({result:a,viewData:r})=>{r.result=a},z)])}_applyProjectionAndElevationAlignment(e){if(e==null)return e;const{spatialReference:i,elevationProvider:s}=this.view;return St(e,i,s)??(Et(this.analysis,e.spatialReference,Mt),null)}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:i,measurementMode:s}=this.viewData;if(e==null||i==null)return null;const n=this._euclideanDistances(e,i),a=this._geodesicDistance(e,i,n.horizontal.value),r=s===x.Geodesic||s===x.Auto&&n.horizontal.value>Dt?"geodesic":"euclidean";return{mode:r,distance:r==="euclidean"?n.direct:a,directDistance:n.direct,horizontalDistance:n.horizontal,verticalDistance:n.vertical,geodesicDistance:a}}_euclideanDistances(e,i){const s=e.clone();s.z=i.z;const n=this._tempStartPosition,a=this._tempEndPosition,r=this._tempCornerPosition,u=this.view.spatialReference,c=this._sphericalPCPF,h=ge(u,c)?c:u;Q(e,n,h),Q(i,a,h),Q(s,r,h);const l=le(n,a),g=le(r,a),m=Math.abs(i.z-e.z),p=A=>this._unitNormalizer.normalizeDistance(A),S=p(l),D=p(g),E=p(m);return{direct:H(S,"meters"),horizontal:H(D,"meters"),vertical:H(E,"meters")}}_geodesicDistance(e,i,s){const n=e.spatialReference,a=new xe({spatialReference:n});a.addPath([e,i]);const r=n.isGeographic&&Re(n)?Ge([a],"meters")[0]:n.isWebMercator?Ct(a,"meters"):null,u=r??this._fallbackGeodesicDistance(e,i,s);return H(u,"meters")}_fallbackGeodesicDistance(e,i,s){if(pe(e,Se)&&pe(i,Ee)){const n=new Be;return je(n,Se,Ee),n.distance}return s}};o([d()],M.prototype,"view",void 0),o([d()],M.prototype,"analysis",void 0),o([d()],M.prototype,"viewData",void 0),o([d()],M.prototype,"_computedResult",null),M=o([ce($e)],M);const Se=b(),Ee=b();var y,P;(function(t){t[t.None=0]="None",t[t.Direct=1]="Direct",t[t.Triangle=2]="Triangle",t[t.ProjectedGeodesic=3]="ProjectedGeodesic"})(y||(y={})),function(t){t[t.Auto=0]="Auto",t[t.AboveSegment=1]="AboveSegment",t[t.BelowSegment=2]="BelowSegment"}(P||(P={}));function Me(t){const e=new Ie,{vertex:i,fragment:s}=e;ke(i,t),i.uniforms.add(new q("width",a=>a.width)),e.attributes.add(L.POSITION,"vec3"),e.attributes.add(L.NORMAL,"vec3"),e.attributes.add(L.UV0,"vec2"),e.attributes.add(L.AUXPOS1,"float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),i.code.add(X`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add(new q("outlineSize",a=>a.outlineSize),new K("outlineColor",a=>a.outlineColor),new q("stripeLength",a=>a.stripeLength),new K("stripeEvenColor",a=>a.stripeEvenColor),new K("stripeOddColor",a=>a.stripeOddColor));const n=1/Math.sqrt(2);return s.code.add(X`
    const float INV_SQRT2 = ${X.float(n)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),e}const Tt=Object.freeze(Object.defineProperty({__proto__:null,build:Me},Symbol.toStringTag,{value:"Module"}));class W extends Ue{constructor(e,i,s){super(e,i,s)}initializeProgram(e){return new Qe(e.rctx,W.shader.get().build(this.configuration),qe)}_setPipelineState(e){const i=e===he.NONE,s=this.configuration;return Xe({blending:s.transparent?i?Ke:Je(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:Ye.LESS},depthWrite:Ze,colorWrite:et})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return tt.TRIANGLE_STRIP}}W.shader=new We(Tt,()=>Fe(()=>Promise.resolve().then(()=>Yt),void 0));let k=class extends it{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=he.NONE}};o([J()],k.prototype,"polygonOffsetEnabled",void 0),o([J()],k.prototype,"transparent",void 0),o([J({count:he.COUNT})],k.prototype,"transparencyPassType",void 0);class xt extends nt{constructor(e){super(e,new Gt),this._configuration=new k}getConfiguration(e,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}intersect(){}produces(e,i){return i===_e.Color||i===_e.Alpha?e===(this._transparent?me.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:me.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Rt(e)}createBufferWriter(){return new Wt}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class Rt extends at{beginSlot(e){return this.ensureTechnique(W,e)}}class Gt extends rt{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=Y(1,.5,0,1),this.stripeEvenColor=Y(1,1,1,1),this.stripeOddColor=Y(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const jt=st().vec3f(L.POSITION).vec3f(L.NORMAL).vec2f(L.UV0).f32(L.AUXPOS1),Nt=b(),Ht=b(),Bt=b(),It=b(),kt=b();let Wt=class{constructor(){this.vertexBufferLayout=jt}elementCount(e){return 2*(e.attributes.get(L.POSITION).indices.length/2+1)}write(e,i,s,n,a){const{data:r,indices:u}=s.attributes.get(L.POSITION),c=s.attributes.get(L.NORMAL).data,h=r.length/3;u&&u.length!==2*(h-1)&&console.warn("MeasurementArrowMaterial does not support indices");const l=Nt,g=Ht,m=Bt,p=It,S=kt,D=n.position,E=n.normal,A=n.uv0;let O=0;for(let w=0;w<h;++w){const R=3*w;if(Z(l,r[R],r[R+1],r[R+2]),w<h-1){const T=3*(w+1);Z(g,r[T],r[T+1],r[T+2]),Z(S,c[T],c[T+1],c[T+2]),ee(S,S),ze(m,g,l),ee(m,m),ot(p,S,m),ee(p,p)}const U=le(l,g);e&&i&&(te(l,l,e),te(g,g,e),te(p,p,i));const V=a+2*w,$=V+1;D.setVec(V,l),D.setVec($,l),E.setVec(V,p),E.setVec($,p),A.set(V,0,O),A.set(V,1,-1),A.set($,0,O),A.set($,1,1),w<h-1&&(O+=U)}const F=n.auxpos1;for(let w=0;w<2*h;++w)F.set(a+w,O)}},Ft=class extends Ot{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=b(),this._originTransform=lt(),this._arrowCenter=b(),this._renderOccluded=j.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=ve(),this._contrastColor=ve(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const i=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:i})}}get color(){return this._color}set color(e){ye(e,this._color)||(be(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){ye(e,this._color)||(be(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e;this._arrowMaterial=new xt({outlineColor:e,stripeEvenColor:s,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new ct,this._handles.add(C(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=f(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){var s;if(((s=this._geometry)==null?void 0:s.startRenderSpace)==null||this._geometry.endRenderSpace==null)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,i,s,n){const a=this.view.renderCoordsHelper,r=[],u=[],c=(h,l)=>{const g=N.get();ze(g,h,s),r.push(g),u.push(l)};if(n.type==="euclidean"){n.eval(.5,this._arrowCenter);const h=N.get();a.worldUpAtPosition(this._arrowCenter,h),c(e,h),c(i,h)}else{n.eval(.5,this._arrowCenter);const h=this._arrowSubdivisions+1&-2;for(let l=0;l<h;++l){const g=l/(h-1),m=N.get(),p=N.get();n.eval(g,m),a.worldUpAtPosition(m,p),c(m,p)}}return dt(this._arrowMaterial,r,u)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&this._geometry!=null){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e,n=e,a=e;this._arrowMaterial.setParameters({stripeEvenColor:s,outlineColor:n,stripeOddColor:a})}},v=class extends de{get _parameters(){const t=this.view.effectiveTheme,{accentColor:e,textColor:i}=t,s=we(e),n=ht(e,.75),a=we(fe(e)),r=fe(i,ut.Low);return{accentColor:s,contrastColor:a,translucentAccentColor:n,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:Le(r,.6),textCalloutColor:Le(r,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e}=this.analysisView;if(t==null||e==null||t.equals(e))return y.None;const i=this.analysisView.result;if(i==null)return y.Direct;if(i.mode==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:s,horizontalDistance:n}=i,a=s.value,r=n.value;return Math.min(a/r,r/a)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){if(this.analysisView.result==null)switch(this.analysisView.measurementMode){case x.Auto:case x.Euclidean:default:return"euclidean";case x.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return this._triangleOrientationOverride==null}set allowVisualElementsOrientationChange(t){this._triangleOrientationOverride==null!==t&&(this._triangleOrientationOverride==null?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const t=this.actualVisualizedMeasurement==="geodesic";return{direct:this._segmentLabel,horizontal:t?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(t){super(t),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=b(),this._endPosition=b(),this._cornerPosition=b(),this._startPositionAtSeaLevel=b(),this._endPositionAtSeaLevel=b(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=P.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const t=this._parameters,e={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:s,triangleLineWidth:n,geodesicProjectionLineWidth:a,directLabelFontSize:r,verticalLabelFontSize:u,horizontalLabelFontSize:c}=t;this._segmentVisualElement=new Ft({...e,geometry:null,renderOccluded:j.OccludeAndTransparent}),this._triangleVisualElement=new B({...e,width:n,renderOccluded:j.OccludeAndTransparent}),this._rightAngleQuad=new $t({...e,renderOccluded:j.OccludeAndTransparent});const h={...e,polygonOffset:!0,renderOccluded:j.OccludeAndTransparent};this._projectedGeodesicLine=new B({...h,width:a,stipplePattern:ie(s)}),this._geodesicStartHint=new B({...h,width:i,stipplePattern:ie(s)}),this._geodesicEndHint=new B({...h,width:i,stipplePattern:ie(s)}),this._segmentLabel=new oe({...e,fontSize:r}),this._verticalLabel=new oe({...e,fontSize:u}),this._horizontalLabel=new oe({...e,fontSize:c}),this.addHandles([C(()=>{const{elevationAlignedStartPoint:l,elevationAlignedEndPoint:g}=this.analysisView,m=this.view;return{view:m,camera:m.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:l,elevationAlignedEndPoint:g,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},l=>this._updateGeometryAndViewMode(l),z),C(()=>({visible:this.visible,viewMode:this.viewMode}),l=>this._updateVisualElementVisibility(l),z),C(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),l=>this._updateLabelText(l),z),C(()=>({visible:this.visible,viewMode:this.viewMode}),l=>this._updateLabelVisibility(l),z),C(()=>this._measurementArrowStripeLength,l=>this._updateSegmentStripeLength(l),z),gt(async()=>this._updateMessageBundle()),C(()=>this._parameters,({textBackgroundColor:l,textCalloutColor:g,textColor:m,translucentAccentColor:p,accentColor:S,contrastColor:D})=>{const{_segmentLabel:E,_verticalLabel:A,_horizontalLabel:O,_triangleVisualElement:F,_rightAngleQuad:w,_projectedGeodesicLine:R,_geodesicStartHint:U,_geodesicEndHint:V,_segmentVisualElement:$}=this;E.backgroundColor=l,E.calloutColor=g,E.textColor=m,A.backgroundColor=l,A.calloutColor=g,A.textColor=m,O.backgroundColor=l,O.calloutColor=g,O.textColor=m,F.color=p,w.color=p,R.color=p,U.color=p,V.color=p,$.color=S,$.contrastColor=D},pt)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=f(this._segmentVisualElement),this._triangleVisualElement=f(this._triangleVisualElement),this._rightAngleQuad=f(this._rightAngleQuad),this._projectedGeodesicLine=f(this._projectedGeodesicLine),this._geodesicStartHint=f(this._geodesicStartHint),this._geodesicEndHint=f(this._geodesicEndHint),this._segmentLabel=f(this._segmentLabel),this._verticalLabel=f(this._verticalLabel),this._horizontalLabel=f(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:t,viewMode:e}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(e){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:t,camera:e,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:n,orientation:a,visualizedMeasurement:r,stripeLength:u}){const c=t.renderCoordsHelper;if(c==null||s==null||n==null||s.equals(n))return;let h=this._startPosition,l=this._endPosition;c.toRenderCoords(s,h),c.toRenderCoords(n,l);const g=a===P.AboveSegment?1:-1,m=g*(c.getAltitude(l)-c.getAltitude(h));m<0&&(h=this._endPosition,l=this._startPosition);const p=r==="geodesic"?new Pe(this._startPosition,this._endPosition,c.spatialReference):new G(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=p,this._updateSegmentStripeLength(u),i){case y.Direct:this._updateSegment(p,a);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:e,segment:p,orientation:a,startPosition:h,endPosition:l,deltaSign:g,altitudeDelta:m});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:a,startPosition:h,endPosition:l})}}_updateSegment(t,e){this._segmentLabel.anchor=e===P.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:t,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:t},camera:e,segment:i,orientation:s,startPosition:n,endPosition:a,deltaSign:r,altitudeDelta:u}){const c=this._cornerPosition;t.worldUpAtPosition(n,c),_t(c,c,r*Math.abs(u)),mt(c,c,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[c[0],c[1],c[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:n,center:c,next:a};const h=new G(n,c),l=new G(c,a),g=Ut(n,a,c,s,e);this._segmentLabel.anchor=g.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=g.vertical,this._horizontalLabel.geometry={type:"segment",segment:l,sampleLocation:"center"},this._horizontalLabel.anchor=g.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:t},orientation:e,startPosition:i,endPosition:s}){t.setAltitude(this._startPositionAtSeaLevel,0,i),t.setAltitude(this._endPositionAtSeaLevel,0,s);const n=new Pe(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(n),this._geodesicStartHint.setGeometryFromSegment(new G(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new G(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._segmentLabel.anchor=e===P.AboveSegment?"top":"bottom"}_updateLabelText({text:t,visualizedMeasurement:e}){t!=null?(this._segmentLabel.text=e==="euclidean"?t.euclideanDistance:t.geodesicDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:t,viewMode:e}){const i=this._segmentLabel,s=this._horizontalLabel,n=this._verticalLabel;if(i.visible=!1,s.visible=!1,n.visible=!1,t)switch(e){case y.Direct:i.visible=!0;break;case y.Triangle:i.visible=!0,s.visible=!0,n.visible=!0;break;case y.ProjectedGeodesic:i.visible=!0;case y.None:}}get _labelsText(){if(this.destroyed)return null;const t=this.messages,e=this.analysisView.result;if(e==null||t==null)return null;const{directDistance:i,horizontalDistance:s,verticalDistance:n,geodesicDistance:a}=e,r=this.analysisView.unit,u=c=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...c});switch(r){case"metric":return u({euclideanDistance:i&&re(t,i),geodesicDistance:a&&re(t,a),horizontalDistance:s&&re(t,s),verticalDistance:n&&Vt(t,n)});case"imperial":return u({euclideanDistance:i&&ae(t,i),geodesicDistance:a&&ae(t,a),horizontalDistance:s&&ae(t,s),verticalDistance:n&&zt(t,n)});default:return u({euclideanDistance:i&&I(t,i,r),geodesicDistance:a&&I(t,a,r),horizontalDistance:s&&I(t,s,r),verticalDistance:n&&I(t,n,r)})}}_updateSegmentStripeLength(t){const e=this._segmentVisualElement;t!=null?(e.stripeLength=t,e.stripesEnabled=!0):e.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(this._triangleOrientationOverride!=null)return this._triangleOrientationOverride;const t=this.visualElementOrientation;return t===P.Auto?this.view.state.camera.aboveGround?P.AboveSegment:P.BelowSegment:t}_requiresGeodesicGuideAt(t){const e=this.view;if(!(e!=null&&e.state))return!1;const i=e.state.camera,s=e.renderCoordsHelper;if(!s)return!1;const n=i.computeScreenPixelSizeAt(t);return s.getAltitude(t)/n>=10}get _measurementArrowStripeLength(){const{result:t,unit:e}=this.analysisView;if(t==null)return null;let i=null;const s=t.directDistance;switch(e){case"metric":i=s&&ne(s,"meters");break;case"imperial":i=s&&ne(s,vt(s.value,s.unit));break;default:i=s&&ne(s,e)}return i==null?null:yt(i.value/30)*bt(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,wt("esri/core/t9n/Units").then(t=>{this.messages=t}).finally(()=>{this.loadingMessages=!1})}get testData(){var t;return{labels:this.labels,stripeLength:(t=this._segmentVisualElement)==null?void 0:t.stripeLength}}};function Ut(t,e,i,s,n){const a=Qt,r=qt;n.projectToRenderScreen(i,a),n.projectToRenderScreen(e,r);const u={segment:"bottom",horizontal:"top",vertical:a[0]<r[0]?"left":"right"};{const c=Xt,h=Kt;if(se(t,i,c,n),se(t,e,h,n),Ae(c,h)>=Oe){const l=Math.sign(c[1])===Math.sign(h[1]);u.segment=l?Ce(u.vertical):u.vertical}else{const l=Jt;se(i,e,l,n),Ae(l,h)>=Oe&&(u.segment=Math.sign(l[0])===Math.sign(h[0])?Ce(u.horizontal):u.horizontal)}}if(s===P.BelowSegment){const c=h=>h==="top"?"bottom":"top";u.segment=c(u.segment),u.horizontal=c(u.horizontal),u.vertical=c(u.vertical)}return u}o([d()],v.prototype,"_parameters",null),o([d()],v.prototype,"_triangleOrientationOverride",void 0),o([d()],v.prototype,"messages",void 0),o([d()],v.prototype,"view",void 0),o([d()],v.prototype,"analysis",void 0),o([d()],v.prototype,"analysisView",void 0),o([d()],v.prototype,"loadingMessages",void 0),o([d()],v.prototype,"visible",null),o([d()],v.prototype,"viewMode",null),o([d()],v.prototype,"actualVisualizedMeasurement",null),o([d()],v.prototype,"visualElementOrientation",void 0),o([d()],v.prototype,"triangleCollapseRatioThreshold",void 0),o([d()],v.prototype,"allowVisualElementsOrientationChange",null),o([d()],v.prototype,"labels",null),o([d()],v.prototype,"_labelsText",null),o([d()],v.prototype,"_actualVisualElementsOrientation",null),o([d()],v.prototype,"_measurementArrowStripeLength",null),v=o([ce("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],v);const Oe=Math.cos(ft(12)),Qt=Ve(),qt=Ve(),Xt=ue(),Kt=ue(),Jt=ue();let _=class extends Pt(de){constructor(t){super(t),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=x.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const t=this.view,e=this.analysis;this._analysisVisualization=new v({view:t,analysis:e,analysisView:this}),this._analysisController=new M({view:t,analysis:e,viewData:this})}destroy(){this._analysisController=f(this._analysisController),this._analysisVisualization=f(this._analysisVisualization)}get updating(){var t;return!!((t=this._analysisVisualization)!=null&&t.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(t){this._analysisVisualization.visualElementOrientation=t}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(t){this._analysisVisualization.allowVisualElementsOrientationChange=t}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(t){this._analysisVisualization.triangleCollapseRatioThreshold=t}get directLabelText(){var t;return((t=this._analysisVisualization.labels.direct)==null?void 0:t.text)??""}get horizontalLabelText(){var t;return((t=this._analysisVisualization.labels.horizontal)==null?void 0:t.text)??""}get verticalLabelText(){var t;return((t=this._analysisVisualization.labels.vertical)==null?void 0:t.text)??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){var t;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...(t=this._analysisVisualization)==null?void 0:t.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};o([d()],_.prototype,"updating",null),o([d({readOnly:!0})],_.prototype,"type",void 0),o([d({constructOnly:!0,nonNullable:!0})],_.prototype,"analysis",void 0),o([d()],_.prototype,"result",void 0),o([d()],_.prototype,"measurementMode",void 0),o([d()],_.prototype,"elevationAlignedStartPoint",void 0),o([d()],_.prototype,"elevationAlignedEndPoint",void 0),o([d({readOnly:!0})],_.prototype,"viewMode",null),o([d({readOnly:!0})],_.prototype,"actualVisualizedMeasurement",null),o([d()],_.prototype,"visualElementOrientation",null),o([d()],_.prototype,"allowVisualElementsOrientationChange",null),o([d()],_.prototype,"triangleCollapseRatioThreshold",null),o([d({readOnly:!0})],_.prototype,"directLabelText",null),o([d({readOnly:!0})],_.prototype,"horizontalLabelText",null),o([d({readOnly:!0})],_.prototype,"verticalLabelText",null),o([d()],_.prototype,"_analysisVisualization",void 0),o([d()],_.prototype,"_analysisController",void 0),o([d()],_.prototype,"unit",null),o([d(At)],_.prototype,"_defaultUnit",void 0),_=o([ce("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],_);const _i=_,Yt=Object.freeze(Object.defineProperty({__proto__:null,build:Me},Symbol.toStringTag,{value:"Module"}));export{_i as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
