"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5813],{75813:(e,r,s)=>{s.r(r),s.d(r,{RemoveGraphics:()=>u});var t=s(68230),a=s(47130),c=s(27387),i=s(35109),n=s(76780),o=s(68457);let u=class{execute(e,r,s){const t=c.U.id("layerId",e.layerId,void 0),a=s.create(),n=(0,o.ZZ)(c.U.exists("features",e.features));return(0,o.Qo)(a.load(),(function(){if(t){const e=a.findLayer(t);return(0,o.Qo)(e&&e.load(),(function(){return e.removeFeatures(n),{}}))}if(i.gu)for(const e of n)a.map.graphics.remove(e);else a.view.graphics.removeMany(n)}))}};u.action="gcx:wf:arcgis::RemoveGraphics",u.suite="gcx:wf:builtin",u=(0,t.gn)([(0,a.QZ)(n.I)],u)}}]);