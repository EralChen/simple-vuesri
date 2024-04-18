import{e9 as f,em as g,ke as m,kf as k,kg as _,E as x,H as w,kh as b,ki as v,dU as h,aa as y,fg as L,kj as V,kk as j,kl as C,km as u}from"./index--fOyh5XL.js";const P=1e3;function S(t,e,n){const s=k(),o=_(s);return f(o,o,t,.5),f(o,o,e,.5),s[3]=g(o,t),m(o,o,n),s}let l=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=v(),this._tmpP1=h(),this._tmpP2=h(),this._tmpP3=h(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),y(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor(s=>(this._addCandidates(t,s,n),n.length<P),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor(i=>{if(i.info==null){const{id:c,uid:d}=i;n.push({id:c,uid:d})}return!0},t.bounds),!n.length)return;const s={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",s,e??{});for(const i of o.components)this._setFetchEdgeLocations(i)}async add(t){const e=new p(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const n=[];this._edges.forEachNeighbor(s=>(s.component===e&&n.push(s),!0),e.bounds),this._edges.remove(n),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(e==null||t.uid!==e.uid)return;const n=L.createView(t.locations),s=new Array(n.count),o=h(),i=h();for(let a=0;a<n.count;a++){n.position0.getVec(a,o),n.position1.getVec(a,i);const r=S(o,i,t.origin),E=new I(e,a,r);s[a]=E}this._edges.add(s);const{objectIds:c,origin:d}=t;e.info={locations:n,objectIds:c,origin:d}}_addCandidates(t,e,n){const{info:s}=e.component,{origin:o,objectIds:i}=s,c=s.locations,d=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);m(d,d,o),m(a,a,o);const r=i[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,r,d,a,n),this._addVertexCandidate(t,r,d,n),this._addVertexCandidate(t,r,a,n)}_addEdgeCandidate(t,e,n,s,o){if(!t.returnEdge)return;const i=_(t.bounds),c=V(n,s,this._tmpLineSegment),d=j(c,i,this._tmpP3);C(t.bounds,d)&&o.push({type:"edge",objectId:e,target:u(d),distance:g(i,d),start:u(n),end:u(s)})}_addVertexCandidate(t,e,n,s){if(!t.returnVertex)return;const o=_(t.bounds);C(t.bounds,n)&&s.push({type:"vertex",objectId:e,target:u(n),distance:g(o,n)})}};l=x([w("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],l);const N=l;class p{constructor(e,n){this.id=e,this.bounds=n,this.info=null,this.uid=++p.uid}}p.uid=0;class I{constructor(e,n,s){this.component=e,this.index=n,this.bounds=s}}export{N as default};