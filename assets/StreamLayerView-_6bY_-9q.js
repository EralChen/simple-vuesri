import{E as e,F as i,d4 as o,H as u}from"./index-e4odrhqs.js";const d=r=>{let s=class extends r{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...t){super(...t),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(t){t?this._doPause():this._isUserPaused||this._doResume()}};return e([i()],s.prototype,"_isUserPaused",void 0),e([i({readOnly:!0})],s.prototype,"connectionStatus",null),e([i({type:o})],s.prototype,"filter",void 0),s=e([u("esri.layers.mixins.StreamLayerView")],s),s};export{d as o};
