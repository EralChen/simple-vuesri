import{cR as M,eY as R,cS as $,f3 as f,aE as q,n as U,aF as E,K as I,bI as F,E as p,F as w,H}from"./index-e4odrhqs.js";import{v as W}from"./ExportStrategy-hHaKr78D.js";import{i as A}from"./WMSLayerView-_rlUVF3i.js";let r=class extends A(M(R($))){constructor(){super(...arguments),this.bitmapContainer=new f}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{q(e)||U.getLogger(this).error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:i}=t;this.bitmapContainer=new f,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(E(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=I(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:i}=this,{x:s,y:n}=t,{spatialReference:v}=e;let a,h=0,m=0;if(i.children.some(C=>{const{width:c,height:g,resolution:y,x:o,y:d}=C,l=o+y*c,x=d-y*g;return s>=o&&s<=l&&n<=d&&n>=x&&(a=new F({xmin:o,ymin:x,xmax:l,ymax:d,spatialReference:v}),h=c,m=g,!0)}),!a)return null;const u=a.width/h,b=Math.round((s-a.xmin)/u),S=Math.round((a.ymax-n)/u);return{extent:a,width:h,height:m,x:b,y:S}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,s){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,...s})}};p([w()],r.prototype,"strategy",void 0),p([w()],r.prototype,"updating",void 0),r=p([H("esri.views.2d.layers.WMSLayerView2D")],r);const B=r;export{B as default};