import{cS as p,s as h,E as i,F as y,H as u}from"./index-e4odrhqs.js";import{n as v}from"./LayerView3D-pVPmrFBD.js";import{o as f}from"./TiledLayerView3D-O2Ba7Snb.js";let e=class extends f(v(p)){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var a,o,r,l,n;const t=(o=(a=this.view)==null?void 0:a.map)==null?void 0:o.allLayers,d=t&&t.includes(this.layer),s=(n=(l=(r=this.view)==null?void 0:r.map)==null?void 0:l.ground)==null?void 0:n.layers,c=s&&s.includes(this.layer);if(d&&!c){const m=new h("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(m))}this._addTilingSchemeMatchPromise()}};i([y()],e.prototype,"layer",void 0),i([y()],e.prototype,"tileInfo",null),e=i([u("esri.views.3d.layers.ElevationLayerView3D")],e);const P=e;export{P as default};