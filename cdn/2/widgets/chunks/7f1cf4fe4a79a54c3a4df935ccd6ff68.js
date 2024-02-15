"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8561],{98561:(e,r,t)=>{t.r(r),t.d(r,{RunWorkflow:()=>f});var o=t(68230),i=t(56655),s=t(8558),n=t(18886);const a=/(\/\/[^\/]+)\/geocortex\/workflow\/service\/?$/i,c="$1/vertigisstudio/workflow/service";var l=t(14450),u=t(97853),w=t(72103);let f=class{async execute(e,r,t){var o=n.U.string("url",e.url,n.U.never),i=(0,w.M6)(o);if(i){var s=this.getAuthenticationToken(i.portalUrl),a=(0,w.i6)(i,s);const o=r.cancellationToken;a=await(0,w.uT)(a,t,o);const n=t.create();if(o.finally((function(){n.cancel()})),this.isServerWorkflow(a))return this.runServerWorkflow(a,e.arguments,n,o,i.portalUrl,s)}return this.runClientWorkflow(o,e.arguments,r)}getAuthenticationToken(e){return(0,w.Ni)(e)}isServerWorkflow(e){if(null==e)return!1;var r=e.properties;return null!=r&&(e=r.isServerWorkflow,r=r.serverUrl,!(!0!==e||!r))}async runServerWorkflow(e,r,t,o,i,s){let n,l,w=e.properties.serverUrl;if(w=w.replace(/\/+$/,""),s&&"public"!==e.access)try{n=await(0,u.Yi)(w,i,s,t)}catch(e){if(!a.test(w))throw e;w=w.replace(a,c),n=await(0,u.Yi)(w,i,s,t)}r={workflow:{id:e.id},inputs:r};try{l=await(0,u.uu)(w,n,r,t)}catch(e){if(!a.test(w))throw e;w=w.replace(a,c),l=await(0,u.uu)(w,n,r,t)}return r=l.ticket,{result:await this.checkResult(w,n,r,1e3,t,o)}}async delay(e){return new Promise((r=>setTimeout(r,e)))}async checkResult(e,r,t,o,i,s){return await this.checkJobStatus(e,r,t,i,s)||(await this.delay(o),this.checkResult(e,r,t,1.1*o,i,s))}async checkJobStatus(e,r,t,o,i){if(o=o.new(),i.finally((function(){o.cancel()})),o.request.url=`${e}/job/artifacts?ticket=${t}`,r&&(o.request.headers.Authorization=`Bearer ${r}`),!await o.send())throw console.error("Unable to check workflow status.",o.response.message),new Error("Unable to check workflow status.");const s=JSON.parse(o.response.content);if(console.debug(s),s.results?.some((e=>"JobQuit"===e.$type))){if(r=s.results.filter((e=>"JobResult"===e.$type))[0],r)return r.outputs;throw console.error("Server workflow failed.",`${e}/job/logs?ticket=${t}&`),new Error("Server workflow failed.")}return null}async runClientWorkflow(e,r,t){const o=t.ambient.trivia;var s=(s=t.ambient.activityContexts)?s.$$form:void 0;try{var n=s?{$$form:s}:{};return{result:await o.runWorkflow(e,r,n,o.isDescendantOf)}}catch(e){if(!(e instanceof i.bs))throw e;t.ambient.reject(e)}}};f.action="gcx:wf:core::RunWorkflow",f.suite="gcx:wf:builtin",f=(0,o.gn)([(0,s.QZ)(l.m)],f)}}]);