"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6562],{26562:(e,t,n)=>{n.r(t),n.d(t,{RunEssentialsWorkflow:()=>p});var r=n(68230),s=n(3091),o=n(47130),i=n(27387),a=n(64678),u=n.n(a),l=n(34545);class c{constructor(){this.inputs={}}}let p=class{execute(e,t,n){const r=i.U.string("url",e.url,i.U.never);return this.getWorkflowSchema(r,n).then((o=>{var a=this.validateInputs(e.arguments,o);if(a)return u().reject(a);const l=n.create(void 0,"geocortex");l.request.url=r+"/run",l.timeout=i.U.number("timeout",e.timeout,6e4),l.request.method="POST",l.request.headers["Content-Type"]="application/x-www-form-urlencoded",l.request.json={inargs:this.constructInArgs(e.arguments,o),f:"json"},t.cancellationToken.finally((function(){l.cancel()}));const c=(new Date).valueOf();return l.send().then((function(e){return u().attempt((function(){var t=(new Date).valueOf()-c;const n={result:{}};if(e){var r=l.getResponseData(l.response.payload);if("Completed"===r.status){if(r=r.outputs)for(const e of r){var o=e.name,i=e.value;n.result[o]=i}return n}}const a=new s.ls(void 0,"Error running Essentials Workflow activity.");return a.timedOut=t>=l.timeout,a.elapsed=t,a.error=l.response.error,a.partialResult=n,u().reject(a)}))}))}))}isString(e){return"string"==typeof e}getWorkflowSchema(e,t){const n=t.create(void 0,"geocortex");return n.request.url=e,n.request.json={f:"json",deep:!0},n.send().then((e=>{if(e){const e=new c;var t=n.getResponseData(n.response.payload).inputs;if(t)for(const n of t){var r=n.name,o=n.typeName;this.isString(r)&&this.isString(o)&&(e.inputs[r]={name:r,typeName:o})}return u().resolve(e)}return t=new s.ls(void 0,"Error running Essentials Workflow activity. Error retrieving workflow schema."),u().reject(t)}))}validateInputs(e,t){const n=[],r=[];for(const r in t.inputs)e.hasOwnProperty(r)||n.push(r);for(const n in e)t.inputs.hasOwnProperty(n)||r.push(n);if(0<n.length+r.length){let e="",t="";n.length&&(e=" Missing parameters: "+n),r.length&&(t=" Unexpected parameters: "+r);var o="Invalid parameters supplied to Essentials Workflow activity."+e+t;return new s.ls(void 0,o)}}constructInArgs(e,t){const n=[];for(const r in e)n.push({name:r,typeName:t.inputs[r].typeName,value:e[r]});return n}};p.action="gcx:wf:essentials::RunEssentialsWorkflow",p.suite="gcx:wf:builtin",p=(0,r.gn)([(0,o.QZ)(l.m)],p)}}]);