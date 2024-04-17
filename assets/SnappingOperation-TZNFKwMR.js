import{jB as D,aF as L,dZ as O,jC as F,jD as q,dq as C,jw as H,jE as B,dm as U,E as g,M as J,F as _,H as K}from"./index-e4odrhqs.js";import{r as Q}from"./dehydratedFeatureComparison-MVhB98Rv.js";import{U as V}from"./InteractiveToolBase-Z2UPXAmo.js";import{e as W}from"./SnappingContext-nmBhZrKu.js";function lt({predicate:t=()=>!0,snappingManager:n,snappingContext:e,updatingHandles:s,useZ:o=!0}){const i=new V;if(n==null)return{snappingStep:[E,i],cancelSnapping:E};let l,p=null,a=null,c=null;const d=()=>{p=C(p),n.doneSnapping(),a==null||a.frameTask.remove(),a=null,l=H(l),c=null},m=X(n,o,i);let f=null,u=null,k=null;return{snappingStep:[r=>{if(!t(r))return r;const{action:v}=r;if(v==="start"){const{info:x}=r,y=Y(n.view);if(a=tt(e,r,y),a.context.selfSnappingZ=null,!o&&x!=null){const P=et(e.coordinateHelper,x.handle.component);P!=null&&(a.context.selfSnappingZ={value:P,elevationInfo:e.elevationInfo??D})}}if(a!=null){const{context:x,originalScenePos:y,originalPos:P}=a,{mapEnd:b,mapStart:Z,scenePoints:G}=r,S=j(P,T(b,Z)),I=T(Z,P),N={...r,action:"update"},M=a.context,w=nt(y,G),z=n.update({point:S,scenePoint:w,context:x});if(k=z,A(b,z,I,o),f=S,u=w,v!=="end"){const{frameTask:R}=a;p==null&&(p=new AbortController),c=$=>{s.addPromise(B(m({frameTask:R,event:N,context:M,point:S,scenePoint:w,delta:I,getLastState:()=>({point:f,scenePoint:u,updatePoint:$.forceUpdate?null:k})},p.signal)))},c({forceUpdate:!1}),l==null&&(l=L(()=>n.options.effectiveEnabled,()=>c==null?void 0:c({forceUpdate:!0})))}}return v==="end"&&d(),r},i],cancelSnapping:r=>(d(),r)}}function X(t,n,e){return U(async({frameTask:s,point:o,scenePoint:i,context:l,event:p,delta:a,getLastState:c},d)=>{const m=await s.schedule(()=>t.snap({point:o,scenePoint:i,context:l,signal:d}),d);if(m.valid){let f=await s.schedule(()=>m.apply(),d);const u=c();u.point!=null&&o!==u.point&&(f=t.update({point:u.point,scenePoint:u.scenePoint,context:l})),u.updatePoint!=null&&Q(f,u.updatePoint)||(A(p.mapEnd,f,a,n),e.execute(p))}})}function Y(t){return t.type==="3d"?t.resourceController.scheduler.registerTask(O.SNAPPING):F}function tt(t,n,e){return{context:new W({editGeometryOperations:t.editGeometryOperations,elevationInfo:t.elevationInfo,pointer:t.pointer,vertexHandle:n.info!=null?n.info.handle:null,excludeFeature:t.excludeFeature,feature:t.feature,visualizer:t.visualizer}),originalPos:n.snapOrigin!=null?t.coordinateHelper.vectorToDehydratedPoint(n.snapOrigin):n.mapStart,originalScenePos:n.scenePoints!=null?n.scenePoints.sceneStart:null,frameTask:e}}function j(t,[n,e,s]){const o=q(t);return o.x+=n,o.y+=e,o.hasZ&&(o.z+=s),o}function nt(t,n){return t==null||n==null?null:j(t,T(n.sceneEnd,n.sceneStart))}function T(t,n){const e=t.hasZ&&n.hasZ?t.z-n.z:0;return[t.x-n.x,t.y-n.y,e]}function A(t,n,[e,s,o],i){t.x=n.x+e,t.y=n.y+s,i&&t.hasZ&&n.hasZ&&(t.z=n.z+o)}function et(t,n){if(!t.hasZ())return null;const e=n.vertices;let s=null;for(const o of e){const i=t.getZ(o.pos);if(s!=null&&i!=null&&Math.abs(i-s)>1e-6)return null;s==null&&(s=i)}return s}function E(t){return t}let h=class extends J{constructor(t){super(t),this.constrainResult=n=>n,this._snapPoints=null,this._frameTask=null,this._abortController=null,this._stagedPoint=null,this._snap=U(async(n,e,s,o)=>{const i=this._frameTask;if(i==null)return;const l=await i.schedule(()=>e.snap({...n,context:s,signal:o}),o);l.valid&&await i.schedule(()=>{this.stagedPoint=l.apply(),n!==this._snapPoints&&this._snapPoints!=null&&(this.stagedPoint=e.update({...this._snapPoints,context:s}))},o)})}get stagedPoint(){return this._stagedPoint}set stagedPoint(t){this._stagedPoint=this.constrainResult(t)}initialize(){var n,e;const t=this.view.type==="3d"?(e=(n=this.view)==null?void 0:n.resourceController)==null?void 0:e.scheduler:null;this._frameTask=t!=null?t.registerTask(O.SNAPPING):F}destroy(){this._abortController=C(this._abortController),this._frameTask=H(this._frameTask)}update(t,n,e){this._snapPoints=t;const{point:s,scenePoint:o}=t,i=n.update({point:s,scenePoint:o,context:e});return this.stagedPoint=i,i}async snap(t,n,e){const{point:s,scenePoint:o}=t;return this.stagedPoint=n.update({point:s,scenePoint:o,context:e}),this._snapPoints=t,this._abortController==null&&(this._abortController=new AbortController),this._snap(t,n,e,this._abortController.signal)}async resnap(t,n){this._snapPoints!=null&&await this.snap(this._snapPoints,t,n)}abort(){this._abortController=C(this._abortController),this._snapPoints=null}};g([_({constructOnly:!0})],h.prototype,"view",void 0),g([_()],h.prototype,"stagedPoint",null),g([_()],h.prototype,"constrainResult",void 0),g([_()],h.prototype,"_stagedPoint",void 0),h=g([K("esri.views.interactive.snapping.SnappingOperation")],h);export{lt as f,h as p};
