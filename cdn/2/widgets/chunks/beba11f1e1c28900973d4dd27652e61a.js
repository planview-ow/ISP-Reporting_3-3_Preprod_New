"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4555],{54555:(e,t,i)=>{i.r(t),i.d(t,{NearestCoordinateEngineTask:()=>o});var n=i(61339),s=i(18886),r=i(46275);const{nearestCoordinate:a}=n.default;class o{execute(e){var t=s.U.exists("geometry",e.geometry);return e=s.U.exists("point",e.point),e=a(t,e),(0,r.Qo)(e,(function(e){return{point:e.coordinate,distance:e.distance,side:e.isRightSide?"right":"left",index:e.vertexIndex,empty:e.isEmpty}}))}}o.action="gcx:wf:arcgis::NearestCoordinateEngineTask",o.suite="gcx:wf:builtin"}}]);