import{k as d,gG as g,gH as a,fy as u,gI as r,G as S,E as h,F as c,H as b,gJ as v,dU as y}from"./index--fOyh5XL.js";import{d as j}from"./TileTreeDebugger-fTF-Bby2.js";let p=class extends j{constructor(o){super(o)}getTiles(){const o=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,i=this.nodeSR;return o.map(l=>m(l,t,i)).filter(d).sort((l,s)=>l.lij[0]===s.lij[0]?l.label>s.label?-1:1:l.lij[0]-s.lij[0])}};function m(o,t,i){const l=o.serviceObb;if(l==null||t==null)return null;g(n,l.quaternion),a(e,l.center),u(e,i,0,e,t,0,1),n[12]=e[0],n[13]=e[1],n[14]=e[2];const s=[[],[],[]];a(e,l.halfSize),r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[0]=-e[0],r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[0]=-e[0],e[1]=-e[1],r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[1]=-e[1],r(e,e,n),u(e,t,0,e,i,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),a(e,l.halfSize),e[0]=-e[0],e[2]=-e[2],r(e,e,n),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),a(e,l.halfSize),e[2]=-e[2],r(e,e,n),u(e,t,0,e,i,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),a(e,l.halfSize),e[1]=-e[1],e[2]=-e[2],r(e,e,n),u(e,t,0,e,i,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new S({rings:s,spatialReference:i});return{lij:[o.level,o.childCount,0],label:o.id,geometry:f}}h([c({constructOnly:!0})],p.prototype,"lv",void 0),h([c({constructOnly:!0})],p.prototype,"nodeSR",void 0),p=h([b("esri.views.3d.layers.support.I3STreeDebugger")],p);const n=v(),e=y();export{p as I3STreeDebugger};