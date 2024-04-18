import{nq as H,jH as p,nr as y,ns as j,nt as b,nu as S,dU as u,lg as T,es as $,nv as D,gH as L,jL as N,nw as f,nx as E,dR as Z,lb as M,ny as R,nz as Y,nA as v,ld as P,ke as G,nB as U,lL as h,nC as x,lC as O,dD as C}from"./index--fOyh5XL.js";import{U as W}from"./InteractiveToolBase-7rbdQ--a.js";function X(t,n){return w(t,()=>n)}function ct(t){return w(t,n=>n.plane)}function w(t,n){const e=u(),r=u();let a=!1;return l=>{const s=n(l);if(l.action==="start"){const i=p(l.screenStart,y(j.get())),c=b(t.state.camera,i,A);c!=null&&(a=S(s,c,e))}if(!a)return null;const o=p(l.screenEnd,y(j.get())),d=b(t.state.camera,o,A);return d==null?null:S(s,d,r)?{...l,renderStart:e,renderEnd:r,plane:s,ray:d}:null}}function k(t,n,e=0,r=null,a=null){let l=null;return s=>{if(s.action==="start"&&(l=t.sceneIntersectionHelper.intersectElevationFromScreen(N(s.screenStart.x,s.screenStart.y),n,e,a),l!=null&&r!=null&&!f(l,l,r))||l==null)return null;const o=t.sceneIntersectionHelper.intersectElevationFromScreen(N(s.screenEnd.x,s.screenEnd.y),n,e,a);return o!=null&&(r==null||f(o,o,r))?{...s,mapStart:l,mapEnd:o}:null}}function J(t,n,e,r=null,a=null){return k(t,e,T(n,t,e),r,a)}function Q(t,n,e,r=null,a=null){return J(t,e,$(n),r,a)}function it(t,n,e,r){const a=n.toMap(t.screenStart,{include:[e]});return a!=null?Q(n,e,a,r):null}function B(t,n){const e=q,r=_,a=E();t.renderCoordsHelper.worldUpAtPosition(n,e);const l=Z(a,e,M(r,n,t.state.camera.eye));return Z(l,l,e),R(n,l,a)}function ut(t,n,e){let r=null;const a=new W;return a.next(X(t,B(t,n))).next(F(t,n)).next(V(t,e)).next(l=>{l.mapEnd.x=l.mapStart.x,l.mapEnd.y=l.mapStart.y,r=l}),l=>(r=null,a.execute(l),r)}function F(t,n){const e=u(),r=D(n);t.renderCoordsHelper.worldUpAtPosition(n,e);const a=u(),l=u(),s=o=>(M(o,o,n),Y(e,o,o),t.viewingMode==="global"&&D(o)*Math.sign(v(e,o))<.001-r&&M(o,P(o,e,.001),n),G(o,o,n),o);return o=>(o.renderStart=s(L(a,o.renderStart)),o.renderEnd=s(L(l,o.renderEnd)),o)}function V(t,n){const e=t.renderCoordsHelper;return r=>{const a=e.fromRenderCoords(r.renderStart,n),l=e.fromRenderCoords(r.renderEnd,n);return a!=null&&l!=null?{...r,mapStart:a,mapEnd:l}:null}}var m;function dt(t){let n=null;return e=>{switch(e.action){case"start":n=t.disableDisplay();break;case"end":case"cancel":n!=null&&(n.remove(),n=null)}return e}}function It(t,n=null){const e=U(t.state.viewingMode);e.options.selectionMode=!0,e.options.store=h.MIN,e.options.hud=!1;const r=N(),a={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},l=u(),s=n??t.spatialReference,o=i=>{t.map.ground&&t.map.ground.opacity<1?a.exclude.add(x):a.exclude.delete(x),t.sceneIntersectionHelper.intersectIntersectorScreen(p(i,r),e,a);const c=e.results.min;let I;if(c.getIntersectionPoint(l))I=c.intersector===O.TERRAIN?m.GROUND:m.OTHER;else{if(!e.results.ground.getIntersectionPoint(l))return null;I=m.GROUND}return{location:t.renderCoordsHelper.fromRenderCoords(l,s),surfaceType:I}};let d;return i=>{if(i.action==="start"){const I=o(i.screenStart);d=I!=null?I.location:null}if(d==null)return null;const c=o(i.screenEnd);return(c==null?void 0:c.location)!=null?{...i,mapStart:d,mapEnd:c.location,surfaceType:c.surfaceType}:null}}(function(t){t[t.GROUND=0]="GROUND",t[t.OTHER=1]="OTHER"})(m||(m={}));const q=u(),_=u(),A=H(),K="theme-style";function z(t,n){return rt(et(tt(nt(t),n)),n.size)}function tt(t,{accentColor:n,contrastColor:e}){const r=n.toHex(),a=n.a,l=e.toHex(),s=e.a,o=t.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(K);return o&&(o.innerHTML=`
      .contrast-fill { fill: ${l}; fill-opacity: ${s}; }
      .contrast-stroke { stroke: ${l}; stroke-opacity: ${s};  }
      .accent-fill { fill: ${r}; fill-opacity: ${a}; }
      .accent-stroke { stroke: ${r}; stroke-opacity:  ${a}; }`),t}function nt(t){const n=t.split(",")[1],e=atob(n);return new DOMParser().parseFromString(e,"image/svg+xml")}function et(t){const n=new XMLSerializer().serializeToString(t);return`data:image/svg+xml;base64,${btoa(n)}`}function rt(t,n){const e=new Image(n,n);return e.src=t,e}const lt="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NnoiIGNsYXNzPSJhY2NlbnQtZmlsbCIvPjxwYXRoIHN0cm9rZS13aWR0aD0iNC45OSIgZD0iTTIwLjA1IDQwLjg2YTE1LjA1IDE1LjA1IDAgMCAwIDE3LjE0LTEuNSAxNS4wNSAxNS4wNSAwIDAgMCA0LjQ3LTE2LjY1IDE1LjA1IDE1LjA1IDAgMCAwLTIyLjcyLTcuMTUgMTUuMDUgMTUuMDUgMCAwIDAtNS41IDcuMTUiIGNsYXNzPSJjb250cmFzdC1zdHJva2UiLz48cGF0aCBkPSJtMTAuOTcgMzUuNTcgNS4zOCAxMi4wNyA3Ljc5LTEzLjQ3LTEzLjE3IDEuNHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+",at="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTgyIDExLjk4MiAwIDAgMC05LjggNy41MDciIGNsYXNzPSJjb250cmFzdC1zdHJva2UgY29udHJhc3QtZmlsbCIvPjxwYXRoIGQ9Im0yOS44MTggMjIuODA4LTYuMTg0IDQuNi0uNTQxLTguMzY0eiIgY2xhc3M9ImNvbnRyYXN0LWZpbGwiLz48L3N2Zz4=",g=64;function mt(t,n){const{accentColor:e,contrastColor:r,preMultiplyAlpha:a}=n;return t.fromData(`heading-rotate:[accent:${e},contrast:${r},size:${g}]`,()=>new C(z(lt,{accentColor:e,contrastColor:r,size:g}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}function gt(t,n){const{accentColor:e,contrastColor:r,preMultiplyAlpha:a}=n;return t.fromData(`tilt-rotate:[accent:${e},contrast:${r},size:${g}]`,()=>new C(z(at,{accentColor:e,contrastColor:r,size:g}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:a}))}export{dt as A,Q as D,It as F,X as H,it as M,ut as P,J as T,ct as U,V as k,mt as l,gt as n};