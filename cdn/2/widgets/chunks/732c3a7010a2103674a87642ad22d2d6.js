"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[9263],{39263:(e,t,r)=>{r.r(t),r.d(t,{CreateFeatureSet:()=>c});var a=r(94129),u=r(47913),s=r(18886);class c{async execute(e,t){var r=s.U.array("geometry",e.geometries,[]).map((e=>{const t=new a.default;return t.geometry=e,t}));e=s.U.array("feature",e.features,[]);const c=new u.default;c.features=[...r,...e];for(const e of c.features)if(e?.geometry?.type){c.geometryType=e.geometry.type;break}return{featureSet:c}}}c.action="gcx:wf:arcgis::CreateFeatureSet",c.suite="gcx:wf:builtin"}}]);