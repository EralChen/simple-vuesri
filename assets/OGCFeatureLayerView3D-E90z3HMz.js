import{s as t,E as r,F as i,H as o}from"./index-e4odrhqs.js";import{_ as p}from"./FeatureLayerViewBase3D-b9xszg1h.js";import{o as s}from"./OGCFeatureLayerView-PliXC-pd.js";import"./HeatmapDensity.glsl-_QaU8e5Y.js";import"./dehydratedFeatureComparison-MVhB98Rv.js";import"./queryForSymbologySnapping-JhN7osTW.js";import"./hash-SS5GKVPY.js";import"./Graphics3DObjectStates-OLfO7jFF.js";import"./rendererConversion--J2G_8r6.js";import"./optimizedFeatureQueryEngineAdapter-A6xCzYF2.js";import"./PooledRBush-nNRbx-Gl.js";import"./QueryEngine-N8k8Kcw_.js";import"./WhereClause-ZnquZxVU.js";import"./TimeOnly-wi1wpUKe.js";import"./timeSupport-OdcbnGSy.js";import"./projectionSupport-uyMYuDgl.js";import"./json-v6EOeNTY.js";import"./FeatureStore-wnDLhbyy.js";import"./BoundsStore-yvbMw36F.js";import"./projectExtentUtils-jPpK4UOF.js";import"./LayerView3D-pVPmrFBD.js";import"./EventedSet-TE3DOMP-.js";import"./FeatureLayerView-1unf8uDU.js";let e=class extends s(p){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new t("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],e.prototype,"layer",void 0),e=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],e);const z=e;export{z as default};
