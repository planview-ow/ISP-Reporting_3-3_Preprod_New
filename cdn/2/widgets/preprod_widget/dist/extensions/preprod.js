System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>r});class r{constructor(){this.id="translation"}process(e){return t=this,r=void 0,s=function*(){if(window.jimuConfig.isInBuilder)return Promise.resolve(e);e.widgets[this.widgetId],_appState.portalUrl="https://pvpreprod.maps.arcgis.com",_appState.clientId="k7sj2oreWJKxss0Q";const t=yield _sessionManager.signIn(window.location.href,!0);console.log(t._user),t.username;var r=t._token;const n=`https://pvpreprod.maps.arcgis.com/sharing/rest/community/self?returnUserLicensedItems=true&token=${r}&f=json`;var s=yield fetch(n);let o=`https://services8.arcgis.com/NuuCA33lKSTDQlm3/arcgis/rest/services/BOW_preprod_LOOKUP/FeatureServer/14/query?where=OWGROUP+%3D+%27${(yield s.json()).groups[0].title}%27&objectIds=&time=&resultType=none&outFields=SOURCEID%2CVIEWID&returnHiddenFields=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=none&f=json&token=${r}`;var i=yield fetch(o),a=yield i.json();if(a&&a.features&&a.features.length){{let t=[];a.features.map((e=>{t.push([e.attributes.SOURCEID,e.attributes.VIEWID])})),t.push(["hide=navbar","hide=navbar&amp;token="+r]);let n=t.reduce(((e,t)=>function(e,t,r){let n=JSON.stringify(e).split(t).join(r);return JSON.parse(n)}(e,t[0],t[1])),e);e=n}return Promise.resolve(e)}},new((n=void 0)||(n=Promise))((function(e,o){function i(e){try{u(s.next(e))}catch(e){o(e)}}function a(e){try{u(s.throw(e))}catch(e){o(e)}}function u(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,a)}u((s=s.apply(t,r||[])).next())}));var t,r,n,s}}return t})())}}}));