"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7894],{87894:(e,r,a)=>{a.r(r),a.d(r,{AddGraphics:()=>n});var t=a(68230),s=a(8558),u=a(18886),c=a(67411),i=a(46275);let n=class{execute(e,r,a){const t=u.U.id("layerId",e.layerId,void 0),s=(0,i.ZZ)(u.U.exists("features",e.features)),c=u.U.boolean("removeAllFeatures",e.removeAllFeatures,!1),n=a.create();return(0,i.Qo)(n.load(),(function(){if(t){const e=n.findLayer(t);return(0,i.Qo)(e?.load(),(function(){return c&&e&&e.clearFeatures(),{features:(e||n).addFeatures(s,t)}}))}return c&&n.view.graphics.removeAll(),n.view.graphics.addMany(s),{features:s}}))}};n.action="gcx:wf:arcgis::AddGraphicsLayerFeatures",n.suite="gcx:wf:builtin",n=(0,t.gn)([(0,s.QZ)(c.I)],n)}}]);