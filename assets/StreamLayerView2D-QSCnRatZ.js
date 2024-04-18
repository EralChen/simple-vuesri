import{aF as c,s as u,du as m,aN as h,c1 as f,E as l,F as d,H as S}from"./index--fOyh5XL.js";import v from"./FeatureLayerView2D-BlLGlh6T.js";import{e as _}from"./util-4ofgXPAM.js";import{o as g}from"./StreamLayerView-1U2Wgb75.js";import"./AttributeStoreView-xmX8Qycn.js";import"./visualVariablesUtils-Vd2fTuso.js";import"./cimAnalyzer-gy2zc7ye.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-lHI8rp7z.js";import"./Rect-pT1ASav_.js";import"./ExpandedCIM-bd1MIo_0.js";import"./BitmapTileContainer-wE0YpoV1.js";import"./TileContainer-OcxkAdvJ.js";import"./CircularArray-1_thnT0U.js";import"./BufferPool-BOk6nGf6.js";import"./FeatureContainer-gXwaXTnQ.js";import"./FeatureLayerView-K9Lt8u9W.js";function y(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t.toJSON()),e!=null&&(r.where=e),r}let i=class extends g(v){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([c(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),c(()=>this.layer.purgeOptions,()=>this._update()),c(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new u("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return m(e.map(o=>this.on(o,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const n=super.on(e,t),s=this;return h(()=>{n.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,n,s;if(!((r=this.layer.timeInfo)!=null&&r.endField||(n=this.layer.timeInfo)!=null&&n.startField||(s=this.layer.timeInfo)!=null&&s.trackIdField))throw new u("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(o=>{const a=f.fromJSON(o);return a.features.forEach(p=>{p.layer=this.layer,p.sourceLayer=this.layer}),a})}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){var e;(e=this._proxy)==null||e.pauseStream()}_doResume(){var e;(e=this._proxy)==null||e.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(y(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){var a;const e=this.layer,{objectIdField:t}=e,r=e.fields.map(p=>p.toJSON()),n=_(e.geometryType),s=((a=e.timeInfo)==null?void 0:a.toJSON())||null,o=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:r,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:n,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:y(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};l([d()],i.prototype,"pipelineConnectionStatus",void 0),l([d()],i.prototype,"pipelineErrorString",void 0),l([d({readOnly:!0})],i.prototype,"connectionError",null),l([d({readOnly:!0})],i.prototype,"_streamConnectionStatus",null),i=l([S("esri.views.2d.layers.StreamLayerView2D")],i);const H=i;export{H as default};