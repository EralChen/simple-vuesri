import{h,g,k as i}from"./euclideanAreaMeasurementUtils-9_tHvPa2.js";import{lk as q,dT as $,dU as d,ll as m,c0 as k}from"./index--fOyh5XL.js";import{l as s}from"./unitFormatUtils-DiDbWZvs.js";import{geodesicArea as b}from"./geometryEngine-uhu0bFk7.js";import{r as y}from"./Tooltip-WHS24Yp-.js";function M({hasZ:r,spatialReference:t,rings:e},o,u=0){const a=q(t);if(a==null)return!1;const l=r?n=>n:n=>$(R,n[0],n[1],u);for(const n of e){const c=[];for(const p of n){const f=[0,0,u];a(l(p),0,f,0),c.push(f)}o.push(c)}return!0}const R=d();function G(r){const{spatialReference:t}=r;return y(t,w,x,A,r)}function w(r){return s(Math.abs(m([r],"square-meters")[0]),"square-meters")}function x(r){try{return s(Math.abs(b(r,"square-meters")),"square-meters")}catch{return null}}function A(r){const t=[];return M(r,t)?s(Math.abs(m([{type:"polygon",rings:t,spatialReference:k.WGS84}],"square-meters")[0]),"square-meters"):null}function S(r,t,e=i()){if(t==="on-the-ground"){const o=G(r);return o??h(r,e)}return g(r,e)}function v(r,t=i()){return S(r,"on-the-ground",t)}export{S as o,v as u};