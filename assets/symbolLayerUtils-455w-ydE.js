import{fY as v,s as n,a7 as y,_ as p,fZ as c,bX as b,f_ as w,dU as l}from"./index-e4odrhqs.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,i){var o,t;if((o=r.resource)!=null&&o.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return i!=null?[i,i]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(i=>i.data)}async function B(r,i=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./index-e4odrhqs.js").then(d=>d.D0),__vite__mapDeps([0,1])),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const o=b(w(r.resource.primitive));if(i!=null)for(let e=0;e<o.length;e++)o[e]*=i;return c(o,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-e4odrhqs.js","assets/index-r5ist8VX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
