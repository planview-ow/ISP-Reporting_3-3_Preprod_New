System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-theme","jimu-ui","jimu-core/react"],(function(e,t){var a={},s={},r={},o={},n={};return{setters:[function(e){a.FormattedMessage=e.FormattedMessage,a.Immutable=e.Immutable,a.React=e.React,a.classNames=e.classNames,a.css=e.css,a.getAppStore=e.getAppStore,a.jsx=e.jsx,a.polished=e.polished},function(e){s.SettingRow=e.SettingRow,s.SettingSection=e.SettingSection,s.SidePopper=e.SidePopper},function(e){r.withTheme=e.withTheme},function(e){o.Button=e.Button,o.Input=e.Input,o.Option=e.Option,o.PanelHeader=e.PanelHeader,o.Select=e.Select},function(e){n.useLayoutEffect=e.useLayoutEffect,n.useRef=e.useRef,n.useState=e.useState}],execute:function(){e((()=>{var e={54357:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0v-6ZM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1Zm0 3V1H5v2h6Zm1.895 1h-9.79l.8 11h8.19l.8-11Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=a},51315:e=>{"use strict";e.exports=n},34796:e=>{"use strict";e.exports=r},30726:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=s}},t={};function l(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";l.r(i),l.d(i,{default:()=>g});var e=l(48891),t=l(77756);const a="Configure Parameters";var s=l(34796),r=l(30726),o=l(54357),n=l.n(o);const d=t=>{const a=window.SVG,{className:s}=t,r=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(a[s[r]]=e[s[r]])}return a}(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",s);return a?e.React.createElement(a,Object.assign({className:o,src:n()},r)):e.React.createElement("svg",Object.assign({className:o},r))},m=({params:s,theme:o,handleCloseParams:n,handleAddParam:l,handleChangeParam:i,handleRemoveParam:m})=>(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
      .error {
        background-color: rgb(244 226 226);
        box-shadow: 0 0 0 1px #b22222 inset;
        border-color: #b22222;
      }
      .param-panel {
        padding: 0 1rem;
      }
      .param-panel .panel-header .title {
        max-width: 80%;
      }
      .param {
        background-color: black;
        width: 100%;
        padding: 0.5rem;
        padding-top: 0;
        margin-top: 0.5rem;
      }
      .params {
        overflow-y: auto;
        max-height: 90%;
        margin-top: 1rem;
      }
      .param-input {
        width: 100%;
        border-radius: 0.25rem;
      }
      .param-key {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .param-label {
        padding: 0.25rem 0;
        height: 2.5rem;
        display: flex;
        align-items: center;
      }
      .param-remove {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .param-remove:hover {
        background-color: #282828;
      }
    `},(0,e.jsx)("div",{className:"param-panel w-100 h-100"},(0,e.jsx)(r.PanelHeader,{level:1,className:"py-3 panel-inner",onClose:n,title:(0,e.jsx)(e.FormattedMessage,{id:"vswf-configureParams",defaultMessage:a})}),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(r.Button,{className:"w-100 text-dark set-link-btn add-parameter-button",type:"primary",block:!0,onClick:l},(0,e.jsx)(e.FormattedMessage,{id:"vswf-addParam",defaultMessage:"Add Parameter"}))),(0,e.jsx)("div",{className:"params"},null==s?void 0:s.map(((t,a)=>(0,e.jsx)("div",{className:"param"},(0,e.jsx)("div",{className:"name"},(0,e.jsx)("div",{className:"setting-text-level-3 param-label param-key"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-name",defaultMessage:"Name"}),(0,e.jsx)("div",{className:"param-remove",onClick:()=>m(a)},(0,e.jsx)(d,null))),(0,e.jsx)(r.Input,{value:t.key,className:!t.key||s.filter((e=>t.key===e.key)).length>1?"error param-input":"param-input",onChange:e=>((e,t)=>{const a=Object.assign(Object.assign({},s[e]),{key:t});i(e,a)})(a,e.target.value)})),(0,e.jsx)("div",{className:"value"},(0,e.jsx)("div",{className:"setting-text-level-3 param-label"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-value",defaultMessage:"Value"})),(0,e.jsx)(r.Input,{value:t.value,className:"param-input",onChange:e=>((e,t)=>{const a=Object.assign(Object.assign({},s[e]),{value:t});i(e,a)})(a,e.target.value)}))))))));var u=l(51315);const c=t.SidePopper,p=s=>{var o,n;const[l,i]=(0,u.useState)(!1),[d,p]=(0,u.useState)(),g=(0,u.useRef)();(0,u.useLayoutEffect)((()=>{(()=>{const t=(0,e.getAppStore)().getState().appStateInBuilder.appConfig.widgets.asMutable()[s.widgetId].config;v("workflow",t.workflowInfo),p(t)})()}),[]);const v=(e,t)=>{s.onSettingChange({config:s.config.set(e,t),actionId:s.actionId})};return(0,e.jsx)("div",{css:(s.theme,e.css`
      .setting-header {
        padding: ${e.polished.rem(10)} ${e.polished.rem(16)} ${e.polished.rem(0)} ${e.polished.rem(16)};
      }

      .deleteIcon {
        cursor: pointer;
        opacity: 0.8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `),ref:g,style:{width:"100%"}},(0,e.jsx)(t.SettingSection,{title:s.intl.formatMessage({id:"vswf-workflow-settings",defaultMessage:"Workflow Settings"})},(0,e.jsx)(t.SettingRow,{label:s.intl.formatMessage({id:"vswf-workflow",defaultMessage:"Workflow"})}),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(r.Select,{value:(()=>{var e,t,a,r;const o=null===(t=null===(e=s.config)||void 0===e?void 0:e.workflow)||void 0===t?void 0:t.id;return o?o===(null==d?void 0:d.workflowInfo.id)?0:null!==(r=(null===(a=null==d?void 0:d.allowedWorkflows)||void 0===a?void 0:a.findIndex((e=>e.id===o)))+1)&&void 0!==r?r:0:-1})(),onChange:e=>{var t;const a=e.target.value;let s;0===a?s=null==d?void 0:d.workflowInfo:a>0&&(s=null===(t=null==d?void 0:d.allowedWorkflows)||void 0===t?void 0:t[a-1]),v("workflow",s)}},(0,e.jsx)(r.Option,{key:0,value:0},null==d?void 0:d.workflowInfo.title),null===(o=null==d?void 0:d.allowedWorkflows)||void 0===o?void 0:o.map(((t,a)=>(0,e.jsx)(r.Option,{key:a+1,value:a+1},t.title)))))),(0,e.jsx)(t.SettingSection,{title:(0,e.jsx)(e.FormattedMessage,{id:"vswf-parameters",defaultMessage:"Parameters"})},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(r.Button,{className:"w-100 text-dark set-link-btn add-parameter-button",type:"primary",onClick:()=>{i(!0)},block:!0},(0,e.jsx)(e.FormattedMessage,{id:"vswf-configureParams",defaultMessage:a})))),(0,e.jsx)(c,{isOpen:l,position:"right",toggle:()=>i(!1),trigger:g.current},(0,e.jsx)(m,{params:null===(n=s.config.parameters)||void 0===n?void 0:n.asMutable(),theme:s.theme,handleCloseParams:()=>i(!1),handleAddParam:()=>{var t,a;const r=null!==(a=null===(t=s.config.parameters)||void 0===t?void 0:t.asMutable())&&void 0!==a?a:[];r.push((0,e.Immutable)({key:"",value:""})),v("parameters",r)},handleChangeParam:(t,a)=>{const r=s.config.parameters.asMutable();r[t]=(0,e.Immutable)(a),v("parameters",r)},handleRemoveParam:e=>{const t=s.config.parameters.filter(((t,a)=>a!==e));v("parameters",t)}})))};p.defaultProps={config:(0,e.Immutable)({workflow:void 0,parameters:[],widgetId:""})};const g=(0,s.withTheme)(p)})(),i})())}}}));