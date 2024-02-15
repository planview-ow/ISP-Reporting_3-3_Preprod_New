System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/basic/list-tree","jimu-core/react"],(function(e,t){var a={},s={},o={},r={},n={};return{setters:[function(e){a.FormattedMessage=e.FormattedMessage,a.Immutable=e.Immutable,a.React=e.React,a.ReactDOM=e.ReactDOM,a.classNames=e.classNames,a.css=e.css,a.jsx=e.jsx,a.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,a.polished=e.polished},function(e){s.Alert=e.Alert,s.Button=e.Button,s.Card=e.Card,s.CardBody=e.CardBody,s.CardHeader=e.CardHeader,s.CardImg=e.CardImg,s.Input=e.Input,s.Loading=e.Loading,s.Option=e.Option,s.PanelHeader=e.PanelHeader,s.Select=e.Select,s.Switch=e.Switch,s.Tab=e.Tab,s.Tabs=e.Tabs,s.Tooltip=e.Tooltip},function(e){o.MapWidgetSelector=e.MapWidgetSelector,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection,o.SidePopper=e.SidePopper},function(e){r.List=e.List},function(e){n.useCallback=e.useCallback,n.useEffect=e.useEffect,n.useRef=e.useRef,n.useState=e.useState}],execute:function(){e((()=>{var e={24786:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8ZM13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97Z" fill="#000"></path><path d="M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828L5.515 9.657Z" fill="#000"></path></svg>'},30224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" fill="#000"></path></svg>'},54357:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0v-6ZM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1Zm0 3V1H5v2h6Zm1.895 1h-9.79l.8 11h8.19l.8-11Z" fill="#000"></path></svg>'},21397:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm1 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-7.676 2.228H7.34c-.213-1.138.621-2.13 1.375-3.025C9.28 6.532 9.8 5.914 9.8 5.328 9.8 4.5 9.2 3.9 7.976 3.9c-.816 0-1.572.36-2.268 1.092l-.648-.6C5.852 3.552 6.788 3 8.096 3c1.692 0 2.772.864 2.772 2.244 0 .864-.652 1.628-1.3 2.387-.71.831-1.413 1.655-1.244 2.597Zm.3 2.172c0 .48-.348.792-.768.792-.432 0-.78-.312-.78-.792 0-.48.348-.804.78-.804.42 0 .768.324.768.804Z" fill="#000"></path></svg>'},91088:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAYAAAAenrcsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxQzY0OUM1QzJGMjExRUI4M0E2RkY4RTM3RDQxNTU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxQzY0OUM2QzJGMjExRUI4M0E2RkY4RTM3RDQxNTU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODFDNjQ5QzNDMkYyMTFFQjgzQTZGRjhFMzdENDE1NTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODFDNjQ5QzRDMkYyMTFFQjgzQTZGRjhFMzdENDE1NTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5edHyrAAAY6klEQVR42uxda4wk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"},48891:e=>{"use strict";e.exports=a},51315:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=s},77756:e=>{"use strict";e.exports=o},59587:e=>{"use strict";e.exports=r}},t={};function l(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,l),o.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var i={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(i),l.d(i,{Setting:()=>C,default:()=>P});var e=l(48891),t=l(24786),a=l.n(t);const s=t=>{const s=window.SVG,{className:o}=t,r=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",o);return s?e.React.createElement(s,Object.assign({className:n,src:a()},r)):e.React.createElement("svg",Object.assign({className:n},r))};var o=l(21397),r=l.n(o);const n=t=>{const a=window.SVG,{className:s}=t,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",s);return a?e.React.createElement(a,Object.assign({className:n,src:r()},o)):e.React.createElement("svg",Object.assign({className:n},o))};var d=l(54357),c=l.n(d),g=l(30726),m=l(77756),f=l(59587),u=l(51315),w=l(91088),p=l.n(w);const v=t=>t.open?e.ReactDOM.createPortal((0,e.jsx)("div",{css:(a=>{var s,o,r,n,l,i,d,c,g,m,f,u,w;const p=null===(o=null===(s=null==a?void 0:a.typography)||void 0===s?void 0:s.variants)||void 0===o?void 0:o.body1;return e.css`
      .custom-modal {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .custom-paper {
        background-color: ${null!==(n=null===(r=t.theme)||void 0===r?void 0:r.body.bg)&&void 0!==n?n:"rgb(40, 40, 40)"};
        border-style: solid;
        border-width: ${null!==(i=null===(l=t.theme)||void 0===l?void 0:l.border.width)&&void 0!==i?i:"0.5px"};
        border-color: ${null!==(c=null===(d=t.theme)||void 0===d?void 0:d.border.color)&&void 0!==c?c:"rgb(106, 106, 106)"};
        border-radius: ${null!==(m=null===(g=t.theme)||void 0===g?void 0:g.borderRadiuses.default)&&void 0!==m?m:0};
        max-height: 50rem;
        max-width: 62rem;
        padding: 1rem;
        font-size: ${null!==(f=null==p?void 0:p.fontSize)&&void 0!==f?f:"1rem"};
        color: ${null!==(u=null==p?void 0:p.color)&&void 0!==u?u:"white"};
        font-weight: ${null!==(w=null==p?void 0:p.fontWeight)&&void 0!==w?w:500};
        font-family: ${null==p?void 0:p.fontFamily};
      }
      .custom-paper.fixed-size {
        width: 62rem;
        height: 46rem;
      }
    `})(t.theme),id:t.id},(0,e.jsx)("div",{className:"custom-modal",onClick:t.onClick},(0,e.jsx)("div",{className:t.fixedSize?"custom-paper fixed-size":"custom-paper",onClick:e=>{e.stopPropagation()}},t.children))),window.document.getElementById("app")):null,x=t=>{const[a,s]=(0,u.useState)(t.thumbnailUrl),[o,r]=(0,u.useState)(!1);return(0,e.jsx)("div",{css:(t.theme,e.css`
      .portal-explorer-card {
        min-width: 12rem;
        max-width: 12rem;
        min-height: 18rem;
        max-height: 22rem;
        margin: 1rem;

        .portal-explorer-card-header {
          height: 3.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.75;
          padding: 0.5rem 1.25rem;
        }

        .portal-explorer-card-body {
          margin: 0.5rem 1rem;
          padding: 0;
        }
      }
      .portal-explorer-card-icon {
        margin: 0.5rem;
      }
    `)},(0,e.jsx)(g.Card,{"tab-index":0,className:"portal-explorer-card",active:t.selected,button:!0,onClick:t.onClick},(0,e.jsx)(g.CardHeader,{className:"portal-explorer-card-header",title:t.title},t.title),(0,e.jsx)(g.CardImg,{className:"portal-explorer-card-icon",src:a,onError:()=>{o?s(null):(s(t.defaultImage),r(!0))}}),(0,e.jsx)(g.CardBody,{className:"portal-explorer-card-body"},(0,e.jsx)("div",null,(0,e.jsx)(e.FormattedMessage,{id:`${t.languagePrefix}-owner`,defaultMessage:t.language[`${t.languagePrefix}-owner`]}),": ",t.owner),(0,e.jsx)("div",null,(0,e.jsx)(e.FormattedMessage,{id:`${t.languagePrefix}-modified`,defaultMessage:t.language[`${t.languagePrefix}-modified`]}),":",t.modified),(0,e.jsx)("div",null,t.access))))};var h=l(30224),b=l.n(h);const j=t=>{const a=window.SVG,{className:s}=t,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",s);return a?e.React.createElement(a,Object.assign({className:r,src:b()},o)):e.React.createElement("svg",Object.assign({className:r},o))};var M,y=function(e,t,a,s){return new(a||(a=Promise))((function(o,r){function n(e){try{i(s.next(e))}catch(e){r(e)}}function l(e){try{i(s.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}i((s=s.apply(e,t||[])).next())}))};!function(e){e.ME="me",e.ORG="org",e.PUBLIC="public"}(M||(M={}));const k=t=>{const[a,s]=(0,u.useState)(),[o,r]=(0,u.useState)(M.ME),[n,l]=(0,u.useState)(),[i,d]=(0,u.useState)(),[c,f]=(0,u.useState)(),w=(0,u.useCallback)((a=>y(void 0,void 0,void 0,(function*(){var s;try{const r=(yield(0,e.loadArcGISJSAPIModules)(["esri/request"]))[0],n=`typekeywords: (${t.typekeywords})`;let l;switch(o){case M.ME:l=`(owner: ${t.portalSelf.user.username} ${n})`;break;case M.ORG:l=`(orgid: ${t.portalSelf.user.orgId} (access:org OR access:public) ${n})`;break;case M.PUBLIC:l=`(access: public ${n})`}return a&&(l=`${a} AND ${l}`),null!==(s=(yield r(`${t.portalUrl}/sharing/rest/search?q=${encodeURIComponent(l)}&num=100&start=0&sortField=modified&sortOrder=desc&f=json`)).data.results)&&void 0!==s?s:[]}catch(e){console.error(e)}}))),[o,t.portalSelf,t.portalUrl,t.typekeywords]);(0,u.useEffect)((()=>{t.isOpen?w().then((e=>l(e))):(d(""),f(""),l(void 0))}),[o,w,t.isOpen]);const p=()=>y(void 0,void 0,void 0,(function*(){const e=yield w(i);f(i),l(e)})),h=e=>{const t=new Date(e);return t?t.toLocaleDateString():""},b=e=>{switch(e){case"private":return t.formatMessage({id:`${t.languagePrefix}-notShared`,defaultMessage:t.language[`${t.languagePrefix}-notShared`]});case"org":return t.formatMessage({id:`${t.languagePrefix}-sharedWithOrg`,defaultMessage:t.language[`${t.languagePrefix}-sharedWithOrg`]});case"public":return t.formatMessage({id:`${t.languagePrefix}-sharedWithEveryone`,defaultMessage:t.language[`${t.languagePrefix}-sharedWithEveryone`]})}return""},k=e=>{let a="";return t.portalUrl&&e.thumbnail&&(a=`${t.portalUrl}/sharing/rest/content/items/${e.id}/info/${e.thumbnail}`),t.token&&(a+=`?token=${t.token}`),a},S=()=>{s(void 0),r(M.ME),t.onClose()},O=()=>(0,e.jsx)(e.React.Fragment,null,!!(null==n?void 0:n.length)&&(0,e.jsx)("div",{className:"setting-container"},(0,e.jsx)(m.SettingSection,{className:"portal-explorer-body"},n.map((o=>{return(0,e.jsx)(x,{access:b(o.access),defaultImage:t.defaultImage,language:t.language,languagePrefix:t.languagePrefix,modified:h(o.modified),owner:(r=o.owner,r===(null===(n=t.user)||void 0===n?void 0:n.username)?t.formatMessage({id:`${t.languagePrefix}-me`,defaultMessage:t.language[`${t.languagePrefix}-me`]}):r),selected:o.id===a,theme:t.theme,thumbnailUrl:k(o),widgetName:t.widgetName,title:o.title,onClick:()=>s(o.id)});var r,n})))),0===(null==n?void 0:n.length)&&c&&(0,e.jsx)("div",{className:"portal-explorer-body"},t.formatMessage({id:`${t.languagePrefix}-noSearchResults`,defaultMessage:t.language[`${t.languagePrefix}-noSearchResults`]},{search:c})),0===(null==n?void 0:n.length)&&!c&&(0,e.jsx)("div",{className:"portal-explorer-body"},(0,e.jsx)(e.FormattedMessage,{id:`${t.languagePrefix}-noItems`,defaultMessage:t.language[`${t.languagePrefix}-noItems`]})),!n&&(0,e.jsx)(g.Loading,null));return(0,e.jsx)(v,{open:t.isOpen,theme:t.theme,onClick:S,fixedSize:!0},(0,e.jsx)("div",{className:"w-100 h-100",css:(t.theme,e.css`
      .portal-explorer-search {
        align-items: center;
        display: flex;
      }
      .portal-explorer-search-input {
        height: 2rem;
      }
      .portal-explorer-body {
        display: flex;
        flex-direction: row;
        height: 35rem;
        overflow-y: auto;
        flex-wrap: wrap;
        padding: 0 1rem;
      }
      .portal-explorer-actions {
        margin: 1rem 0.5rem 0 0.5rem;
        display: flex;
        justify-content: flex-end;

        .portal-explorer-actions-button {
          width: 7rem;
        }
        .open-button {
          margin-right: 1rem;
        }
      }
      .portal-explorer-header {
        .setting-header {
          padding: ${e.polished.rem(10)} ${e.polished.rem(16)} ${e.polished.rem(0)} ${e.polished.rem(16)};
        }
        .setting-title {
          font-size: ${e.polished.rem(16)};
        }
        .setting-container {
          overflow: auto;
        }
      }
    `)},(0,e.jsx)("div",{className:"w-100 h-100 portal-explorer-header"},(0,e.jsx)("div",{className:"w-100 d-flex align-items-center justify-content-between setting-header setting-title pb-2"},(0,e.jsx)("h5",{className:"text-truncate layer-config-label mt-2"},(0,e.jsx)(e.FormattedMessage,{id:`${t.languagePrefix}-selectTemplate`,defaultMessage:t.language[`${t.languagePrefix}-selectTemplate`]})),(0,e.jsx)("div",{className:"portal-explorer-search"},(0,e.jsx)(g.Input,{className:"portal-explorer-search-input",value:i,onChange:e=>{d(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&p()}}),(0,e.jsx)(g.Button,{icon:!0,onClick:p},(0,e.jsx)(j,null)))),(0,e.jsx)(g.Tabs,{defaultValue:M.ME,onChange:e=>r(e),type:"underline",fill:!0},(0,e.jsx)(g.Tab,{id:M.ME,title:t.formatMessage({id:"myContent",defaultMessage:t.language.myContent})},O()),(0,e.jsx)(g.Tab,{id:M.ORG,title:t.formatMessage({id:"myOrganization",defaultMessage:t.language.myOrganization})},O()),(0,e.jsx)(g.Tab,{id:M.PUBLIC,title:t.formatMessage({id:"public",defaultMessage:t.language.public})},O())),(0,e.jsx)("div",{className:"portal-explorer-actions"},(0,e.jsx)(g.Button,{className:"text-dark set-link-btn open-button portal-explorer-actions-button",type:"primary",onClick:()=>{s(void 0);const e=null==n?void 0:n.find((e=>e.id===a));t.onChoose(e)},block:!0,disabled:!a},(0,e.jsx)(e.FormattedMessage,{id:`${t.languagePrefix}-open`,defaultMessage:t.language[`${t.languagePrefix}-open`]})),(0,e.jsx)(g.Button,{className:"portal-explorer-actions-button",onClick:S},(0,e.jsx)(e.FormattedMessage,{id:`${t.languagePrefix}-cancel`,defaultMessage:t.language[`${t.languagePrefix}-cancel`]}))))))},S={"vswf-action":"Action","vswf-add-message-action-workflow":"Add Message Action Workflow","vswf-addParam":"Add Parameter","vswf-cancel":"Cancel","vswf-changeWorkflow":"Change Workflow","vswf-click":"Click","vswf-confirm":"Confirm","vswf-configureWorkflow":"Configure Workflow","vswf-configureParams":"Configure Parameters","vswf-event":"Event","vswf-help-message-action-workflows":'List of workflows that can be run via the "Run Workflow" message action',"vswf-me":"Me","vswf-message-action-workflows":"Message Action Workflows","vswf-modified":"Modified","vswf-name":"Name","vswf-noItems":"Sorry, no workflows were found.","vswf-noSearchResults":'Sorry, your search "{search}" does not match any items.',"vswf-notShared":"Not Shared","vswf-open":"Open","vswf-openInDesigner":"Open In Workflow Designer","vswf-options":"Options","vswf-owner":"Owner","vswf-parameters":"Parameters","vswf-remove":"Remove","vswf-selectMapWidget":"Select Map widget","vswf-selectTemplate":"Select Workflow","vswf-selectWorkflow":"Select Workflow","vswf-sharedWithEveryone":"Shared with everyone (public)","vswf-sharedWithOrg":"Shared with my organization","vswf-showFormTitle":"Show Form Title","vswf-showIcon":"Show Icon","vswf-source":"Source","vswf-start":"Start","vswf-startOperation":"Start Operation","vswf-startOperationHelp":'How the workflow will be started.  {br}"Start" will run when the app is launched.  {br}"Open" will run when the workflow container is opened.  {br}"Click" will run when the workflow icon is clicked. {br}"Event" will run only when the "start-workflow" event is fired by another widget.  The "start-workflow" event will work regardless of the start operation.',"vswf-url":"URL","vswf-value":"Value","vswf-viewItem":"View Item Info","vswf-workflow":"Workflow","vswf-workflow-info":"Workflow Info","vswf-workflow-settings":"Workflow Settings"};const O=t=>{const a=window.SVG,{className:s}=t,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(t,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",s);return a?e.React.createElement(a,Object.assign({className:r,src:c()},o)):e.React.createElement("svg",Object.assign({className:r},o))},I=({params:t,theme:a,handleCloseParams:s,handleAddParam:o,handleChangeParam:r,handleRemoveParam:n})=>(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
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
    `},(0,e.jsx)("div",{className:"param-panel w-100 h-100"},(0,e.jsx)(g.PanelHeader,{level:1,className:"py-3 panel-inner",onClose:s,title:(0,e.jsx)(e.FormattedMessage,{id:"vswf-configureParams",defaultMessage:S["vswf-configureParams"]})}),(0,e.jsx)(m.SettingRow,null,(0,e.jsx)(g.Button,{className:"w-100 text-dark set-link-btn add-parameter-button",type:"primary",block:!0,onClick:o},(0,e.jsx)(e.FormattedMessage,{id:"vswf-addParam",defaultMessage:S["vswf-addParam"]}))),(0,e.jsx)("div",{className:"params"},null==t?void 0:t.map(((a,s)=>(0,e.jsx)("div",{className:"param"},(0,e.jsx)("div",{className:"name"},(0,e.jsx)("div",{className:"setting-text-level-3 param-label param-key"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-name",defaultMessage:S["vswf-name"]}),(0,e.jsx)("div",{className:"param-remove",onClick:()=>n(s)},(0,e.jsx)(O,null))),(0,e.jsx)(g.Input,{value:a.key,className:!a.key||t.filter((e=>a.key===e.key)).length>1?"error param-input":"param-input",onChange:e=>((e,a)=>{const s=Object.assign(Object.assign({},t[e]),{key:a});r(e,s)})(s,e.target.value)})),(0,e.jsx)("div",{className:"value"},(0,e.jsx)("div",{className:"setting-text-level-3 param-label"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-value",defaultMessage:S["vswf-value"]})),(0,e.jsx)(g.Input,{value:a.value,className:"param-input",onChange:e=>((e,a)=>{const s=Object.assign(Object.assign({},t[e]),{value:a});r(e,s)})(s,e.target.value)})))))))),N=({workflow:t,theme:a,handleClosePanel:o})=>(0,e.jsx)("div",{className:"w-100 h-100",css:e.css`
      .template-panel {
        padding: 0 1rem;
      }
      .template-panel .template-header .title {
        max-width: 80%;
      }
      .template {
        background-color: black;
        width: 100%;
        padding: 0.5rem;
        padding-top: 0;
        margin-top: 0.5rem;
      }
      .template-panel .template-input {
        width: 100%;
        margin-top: 0.25rem;
      }
      .template-label {
        padding: 0.25rem 0;
      }
      .designer-url {
        margin-right: 0.25rem;
      }
    `},(0,e.jsx)("div",{className:"template-panel"},(0,e.jsx)(g.PanelHeader,{level:1,className:"py-3 template-inner",onClose:o,title:t.title}),(0,e.jsx)(m.SettingRow,null,(0,e.jsx)("a",{className:"designer-url",href:t.itemUrl,target:"_blank"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-viewItem",defaultMessage:S["vswf-viewItem"]})),(0,e.jsx)(s,{size:"s",color:"grey"})),(0,e.jsx)(m.SettingRow,null,(0,e.jsx)("a",{className:"designer-url",href:t.designerURL,target:"_blank"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-openInDesigner",defaultMessage:S["vswf-openInDesigner"]})),(0,e.jsx)(s,{size:"s",color:"grey"}))));const C=t=>{var a,o;const[r,l]=(0,u.useState)(!1),[i,d]=(0,u.useState)(!1),[w,v]=(0,u.useState)(),[x,h]=(0,u.useState)(-1),b=(0,u.useRef)(),j=e=>`${t.portalUrl}/home/item.html?id=${e.id}`,M=()=>{l(!1),v(void 0)};return(0,e.jsx)("div",{css:(y=t.theme,e.css`
      .widget-setting-workflow {
        .designer-url {
          margin-right: 0.25rem;
        }

        .start-operation-help {
          border-radius: 50%;
          background: transparent;
          height: 1.5rem;
          width: 1.5rem;
          border: 0;
          span: {
            min-height: 0;
            min-width: 0;
          }
        }

        .add-parameter-button {
          margin-bottom: 0.5rem;
        }

        .params-list {
          padding: 0.5rem;
          padding-bottom: 0;
          background: ${y.colors.palette.secondary[400]};
        }
      }
    `)},(0,e.jsx)("div",{className:"jimu-widget-setting widget-setting-workflow",ref:b},(0,e.jsx)(m.SettingSection,{className:"map-selector-section",title:(0,e.jsx)(e.FormattedMessage,{id:"vswf-source",defaultMessage:S["vswf-source"]})},(0,e.jsx)(m.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"vswf-selectMapWidget",defaultMessage:S["vswf-selectMapWidget"]})}),(0,e.jsx)(m.SettingRow,null,(0,e.jsx)(m.MapWidgetSelector,{onSelect:e=>{t.onSettingChange({id:t.id,useMapWidgetIds:e})},useMapWidgetIds:t.useMapWidgetIds}))),(0,e.jsx)(m.SettingSection,{title:(0,e.jsx)(e.FormattedMessage,{id:"vswf-workflow",defaultMessage:S["vswf-workflow"]})},(0,e.jsx)(m.SettingRow,null,(0,e.jsx)(g.Button,{className:"w-100 text-dark set-link-btn",type:"primary",onClick:()=>{return e=void 0,t=void 0,s=function*(){v("default"),l(!0)},new((a=void 0)||(a=Promise))((function(o,r){function n(e){try{i(s.next(e))}catch(e){r(e)}}function l(e){try{i(s.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}i((s=s.apply(e,t||[])).next())}));var e,t,a,s},block:!0},(0,e.jsx)("div",{className:"w-100 text-truncate"},""!==t.config.workflowInfo.id&&(0,e.jsx)(e.FormattedMessage,{id:"vswf-changeWorkflow",defaultMessage:S["vswf-changeWorkflow"]}),!t.config.workflowInfo.id&&(0,e.jsx)(e.FormattedMessage,{id:"vswf-selectWorkflow",defaultMessage:S["vswf-selectWorkflow"]})))),""!==t.config.workflowInfo.id&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(m.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"workflowName",defaultMessage:t.config.workflowInfo.title})}),(0,e.jsx)(m.SettingRow,null,(0,e.jsx)("a",{className:"designer-url",href:t.config.workflowInfo.itemUrl,target:"_blank"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-viewItem",defaultMessage:S["vswf-viewItem"]})),(0,e.jsx)(s,{size:"s"})),(0,e.jsx)(m.SettingRow,null,(0,e.jsx)("a",{className:"designer-url",href:t.config.workflowInfo.designerURL,target:"_blank"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-openInDesigner",defaultMessage:S["vswf-openInDesigner"]})),(0,e.jsx)(s,{size:"s"})),(0,e.jsx)(m.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"vswf-showFormTitle",defaultMessage:S["vswf-showFormTitle"]})},(0,e.jsx)(g.Switch,{checked:t.config.showFormTitle,"data-key":"showFormTitle",onChange:()=>{t.onSettingChange({id:t.id,config:t.config.set("showFormTitle",!t.config.showFormTitle)})}})),(0,e.jsx)(m.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"vswf-startOperation",defaultMessage:S["vswf-startOperation"]})},(0,e.jsx)(g.Tooltip,{arrowStyle:{background:"var(--info-100)",border:{color:"var(--info-300)",width:"1px"},size:8},placement:"top",title:(0,e.jsx)(g.Alert,{form:"basic",text:t.intl.formatMessage({id:"vswf-startOperationHelp",defaultMessage:S["vswf-startOperationHelp"]},{br:(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)("br",null),(0,e.jsx)("br",null))}),type:"info"})},(0,e.jsx)(g.Button,{icon:!0,className:"start-operation-help"},(0,e.jsx)(n,{size:"s"})))),(0,e.jsx)(m.SettingRow,null,(0,e.jsx)(g.Select,{value:t.config.startOperation,"data-key":"startOperation",onChange:e=>{"onClick"===e.target.value?t.onSettingChange({id:t.id,config:t.config.set("startOperation",e.target.value).set("showIcon",!0)}):t.onSettingChange({id:t.id,config:t.config.set("startOperation",e.target.value)})}},(0,e.jsx)(g.Option,{key:"onStart",value:"onStart"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-start",defaultMessage:S["vswf-start"]})),(0,e.jsx)(g.Option,{key:"onClick",value:"onClick"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-click",defaultMessage:S["vswf-click"]})),(0,e.jsx)(g.Option,{key:"onOpen",value:"onOpen"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-open",defaultMessage:S["vswf-open"]})),(0,e.jsx)(g.Option,{key:"onEvent",value:"onEvent"},(0,e.jsx)(e.FormattedMessage,{id:"vswf-event",defaultMessage:S["vswf-event"]})))),(0,e.jsx)(m.SettingRow,{label:(0,e.jsx)(e.FormattedMessage,{id:"vswf-showIcon",defaultMessage:S["vswf-showIcon"]})},(0,e.jsx)(g.Switch,{checked:t.config.showIcon||"onClick"===t.config.startOperation,"data-key":"showIcon",onChange:()=>{t.onSettingChange({id:t.id,config:t.config.set("showIcon",!t.config.showIcon)})},disabled:"onClick"===t.config.startOperation})))),""!==t.config.workflowInfo.id&&[(0,e.jsx)(m.SettingSection,{title:(0,e.jsx)(e.FormattedMessage,{id:"vswf-parameters",defaultMessage:S["vswf-parameters"]})},(0,e.jsx)(m.SettingRow,null,(0,e.jsx)(g.Button,{className:"w-100 text-dark set-link-btn add-parameter-button",type:"primary",onClick:()=>{d(!0),h(-1)},block:!0},(0,e.jsx)(e.FormattedMessage,{id:"vswf-configureParams",defaultMessage:S["vswf-configureParams"]})))),(0,e.jsx)(m.SettingSection,{title:(0,e.jsx)(e.FormattedMessage,{id:"vswf-message-action-workflows",defaultMessage:S["vswf-message-action-workflows"]})},(0,e.jsx)(m.SettingRow,null,(0,e.jsx)(g.Button,{className:"w-100 text-dark set-link-btn add-parameter-button",type:"primary",onClick:()=>{v("action"),l(!0)},block:!0},(0,e.jsx)(e.FormattedMessage,{id:"vswf-add-message-action-workflow",defaultMessage:S["vswf-add-message-action-workflow"]}))),(0,e.jsx)(f.List,{itemsJson:Array.from(null!==(a=t.config.allowedWorkflows)&&void 0!==a?a:[]).map(((e,a)=>({itemStateDetailContent:e,itemKey:`${a}`,itemStateTitle:e.title,itemStateCommands:[{label:t.intl.formatMessage({id:"vswf-remove",defaultMessage:S["vswf-remove"]}),iconProps:()=>({icon:c(),size:12}),action:()=>{(e=>{const a=t.config.allowedWorkflows.asMutable();a.splice(e,1),t.onSettingChange({id:t.id,config:t.config.set("allowedWorkflows",a)}),h(-1)})(a)}}]}))),onUpdateItem:(e,a)=>{const{itemJsons:s}=a.props;(e=>{const{id:a,config:s}=t,o=e.map((e=>e.itemStateDetailContent)),r={id:a,config:s.set("allowedWorkflows",o)};h(-1),t.onSettingChange(r)})(s[1])},renderOverrideItemDetailToggle:()=>null,onClickItemBody:(e,t)=>{const{itemJsons:[a]}=t.props;h(+a.itemKey),d(!1)}}))],(0,e.jsx)(k,{defaultImage:p(),formatMessage:t.intl.formatMessage,isOpen:r,language:S,languagePrefix:"vswf",onClose:M,onChoose:a=>{const s={designerURL:a.url,id:a.id,itemUrl:j(a),owner:a.owner,title:a.title};switch(w){case"default":o=s,t.onSettingChange({id:t.id,config:t.config.set("workflowInfo",o)});break;case"action":(a=>{var s,o;const r=null!==(o=null===(s=t.config.allowedWorkflows)||void 0===s?void 0:s.asMutable())&&void 0!==o?o:[];r.push((0,e.Immutable)(a)),t.onSettingChange({id:t.id,config:t.config.set("allowedWorkflows",r)})})(s)}var o;M()},portalSelf:t.portalSelf,portalUrl:t.portalUrl,theme:t.theme,token:t.token,typekeywords:'"Geocortex Workflow"',widgetName:"Workflow",user:t.user})),(0,e.jsx)(m.SidePopper,{isOpen:i,position:"right",toggle:()=>d(!1),trigger:b.current},(0,e.jsx)(I,{params:t.config.workflowParameters.asMutable(),theme:t.theme,handleCloseParams:()=>d(!1),handleAddParam:()=>{const a=t.config.workflowParameters.asMutable();a.push((0,e.Immutable)({key:"",value:""})),t.onSettingChange({id:t.id,config:t.config.set("workflowParameters",a)})},handleChangeParam:(a,s)=>{const o=t.config.workflowParameters.asMutable();o[a]=(0,e.Immutable)(s),t.onSettingChange({id:t.id,config:t.config.set("workflowParameters",o)})},handleRemoveParam:e=>{const a=t.config.workflowParameters.filter(((t,a)=>a!==e));t.onSettingChange({id:t.id,config:t.config.set("workflowParameters",a)})}})),(0,e.jsx)(m.SidePopper,{isOpen:x>=0,position:"right",toggle:()=>h(-1),trigger:b.current},(0,e.jsx)(N,{workflow:null===(o=t.config.allowedWorkflows)||void 0===o?void 0:o.asMutable()[x],theme:t.theme,handleClosePanel:()=>h(-1)})));var y},P=C})(),i})())}}}));