"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4330],{54330:(e,t,n)=>{n.r(t),n.d(t,{DeleteAttachments:()=>a});var r=n(3091),s=n(27387),c=n(35109),i=n(68457);class a{execute(e,t){var n=s.U.urlOrLayer(e,c.gu).trim(),a=s.U.number("objectId",e.objectId,s.U.never),u=s.U.array("attachmentIds",e.attachmentIds,s.U.never).join(","),l=s.U.string("gdbVersion",e.gdbVersion);e=s.U.number("timeout",e.timeout,void 0),a=(0,i._A)(n,`${a}/deleteAttachments`);const o={attachmentIds:u};return l&&(o.gdbVersion=l),e=(0,i.v_)(a,o,e,t.cancellationToken.signal),(0,i.Iz)(t,e),(0,i.Qo)(e,(function(e){if(!(e=e.deleteAttachmentResults))throw new r.ls('Error running the "Delete Attachments" activity. The response did not include the required "deleteAttachmentResults" property.');return{results:e}}))}}a.action="gcx:wf:arcgis::DeleteAttachments",a.suite="gcx:wf:builtin"}}]);