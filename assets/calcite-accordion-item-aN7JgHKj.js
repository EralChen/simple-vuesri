import{N as g,Q as x,S as l,eL as h,W as i,X as f,eN as v,Y as y,Z as b,aY as p}from"./index-e4odrhqs.js";import{c as S,d as I}from"./conditionalSlot-xGQdh3h-.js";import{g as s}from"./component-dtiBfYiX.js";import{d as k}from"./icon-gld3uZDY.js";import"./observers-PsH-maUp.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const a={actionsStart:"actions-start",actionsEnd:"actions-end"},n={icon:"icon",header:"header",headerContent:"header-content",actionsStart:"actions-start",actionsEnd:"actions-end",headerText:"header-text",heading:"heading",description:"description",expandIcon:"expand-icon",content:"content",iconStart:"icon--start",iconEnd:"icon--end",headerContainer:"header-container"},r={section:"section",sectionToggle:"section-toggle"},E=`.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-3);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}`,m=g(class extends x{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=l(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=l(this,"calciteInternalAccordionItemClose",6),this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){S(this)}disconnectedCallback(){I(this)}renderActionsStart(){const{el:t}=this;return h(t,a.actionsStart)?i("div",{class:n.actionsStart},i("slot",{name:a.actionsStart})):null}renderActionsEnd(){const{el:t}=this;return h(t,a.actionsEnd)?i("div",{class:n.actionsEnd},i("slot",{name:a.actionsEnd})):null}render(){const{iconFlipRtl:t}=this,e=f(this.el),c=this.iconStart?i("calcite-icon",{class:n.iconStart,flipRtl:t==="both"||t==="start",icon:this.iconStart,key:"icon-start",scale:s(this.scale)}):null,d=this.iconEnd?i("calcite-icon",{class:n.iconEnd,flipRtl:t==="both"||t==="end",icon:this.iconEnd,key:"icon-end",scale:s(this.scale)}):null,{description:o}=this;return i(b,null,i("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},i("div",{class:{[n.header]:!0,[v.rtl]:e==="rtl"}},this.renderActionsStart(),i("div",{"aria-controls":r.section,"aria-expanded":y(this.expanded),class:n.headerContent,id:r.sectionToggle,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},i("div",{class:n.headerContainer},c,i("div",{class:n.headerText},i("span",{class:n.heading},this.heading),o?i("span",{class:n.description},o):null),d),i("calcite-icon",{class:n.expandIcon,icon:this.iconType==="chevron"?"chevronDown":this.iconType==="caret"?"caretDown":this.expanded?"minus":"plus",scale:s(this.scale)})),this.renderActionsEnd()),i("section",{"aria-labelledby":r.sectionToggle,class:n.content,id:r.section},i("slot",null))))}keyDownHandler(t){if(t.target===this.el)switch(t.key){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault();break}}updateActiveItemOnChange(t){const[e]=t.composedPath(),c=p(this.el,"calcite-accordion");e===c&&(this.determineActiveItem(c.selectionMode,t.detail.requestedAccordionItem),t.stopPropagation())}accordionItemSyncHandler(t){const[e]=t.composedPath(),c=this.el;if(c.parentElement===e)return;const o=p(c,"calcite-accordion");e===o&&(c.iconPosition=o.iconPosition,c.iconType=o.iconType,c.scale=o.scale,t.stopPropagation())}determineActiveItem(t,e){switch(t){case"multiple":this.el===e&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===e?!this.expanded:!1;break;case"single-persist":this.expanded=this.el===e;break}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return this}static get style(){return E}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconPosition:[1,"icon-position"],iconType:[1,"icon-type"],accordionParent:[16],scale:[1]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"],[4,"calciteInternalAccordionItemsSync","accordionItemSyncHandler"]]]);function u(){if(typeof customElements>"u")return;["calcite-accordion-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-accordion-item":customElements.get(e)||customElements.define(e,m);break;case"calcite-icon":customElements.get(e)||k();break}})}u();const H=m,D=u;export{H as CalciteAccordionItem,D as defineCustomElement};
