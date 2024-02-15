"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1036],{41036:(e,t,a)=>{a.r(t),a.d(t,{DEFAULT_DECIMALS:()=>d,DEFAULT_STEP:()=>m,MIN_DECIMALS:()=>p,default:()=>f});var r=a(51315),n=a(90547),l=a(62590),o=a(64773),u=a(90906),s=a(58678),i=a(22135),c=a(74228);const p=-20,d=3,m=1,f=e=>{const t=e.component,{host:a,name:f}=t.props,v=e.element,x=!t.enabled,b=(0,r.useMemo)((()=>(0,i.NL)(v.format,p,d,m)),[]),h=(0,r.useRef)(null),{lowerBound:g,upperBound:y,precision:E}=b,{showMinMaxLabels:N,manualEntry:w}=v,k={currency:b.currency,customDisplayFormat:b.customDisplayFormat,format:b.displayFormat,fractionalDigits:E,locale:a.deriveLocale()},C={...k,format:s.rf.FIXED_POINT},M=e=>{v.value=h.current={refValueType:"number",format:b,display:a.formatNumber(e,k,!0),numeric:e}},[D,T]=(0,r.useState)(),[F,I]=(0,r.useState)();(0,r.useEffect)((()=>{var e;null!==h.current&&v.value===h.current||(e=(0,i.ep)(v.value,b,!0),M(e[0]),j(e[0]))}),[v.value]);var A=(0,o.TM)(t);let S=b.step,L=v.showTickMarks;L=0<S&&L,0===S&&(S=1/Math.pow(10,E)),e=a.renderText(v.tooltip);const R=[v.type,(0,c.Pw)(f)],_=e=>{var t=e[0];t=P(t),j(t),t!==(null===(e=h.current)||void 0===e?void 0:e.numeric)&&(M(t),a.post("changed",{name:f,value:v.value}))},P=e=>e<g?g:e>y?y:e,B=e=>{let t=""!==e?Number(e):NaN;isNaN(t)?j(t):(t<g&&(t=g),t>y&&(t=y),_([t]))},j=e=>{T(e),I(a.formatNumber(e,C,!0))},H=(e,t,a,n,l="#fff",o="#197dc8")=>r.default.createElement("div",{style:{position:"absolute",top:t,color:l,fontWeight:"bold",fontSize:"14px",fontFamily:"Montserrat,Helvetica Neue,Helvetica,sans-serif",padding:"4px",borderRadius:"5px",backgroundColor:o,left:a,right:n,whiteSpace:"nowrap"}},e);return r.default.createElement(l.Z,{className:R.join(" "),component:t,element:v,errorClassName:u.Nx.ERROR},r.default.createElement("div",{className:"slider-container",title:e},r.default.createElement(n.Range,{step:S,min:g,max:y,values:[D],onChange:e=>{e=e[0],e=P(e),j(e)},onFinalChange:_,renderMark:e=>{var{props:t,index:e}=e;return e=g+e*S>y,L&&!e&&r.default.createElement("div",{...t,style:{...t.style,height:"16px",width:"2px",backgroundColor:"#ccc"}})},renderTrack:e=>{var{props:t,children:e}=e;return r.default.createElement("div",{...t,style:{...t.style,height:"6px",margin:"50px 0px 24px",width:"100%",background:"#ccc"}},!1!==N&&H(a.formatNumber(g,k,!0),"20px","-12px",void 0,"#333","#fff"),!1!==N&&H(a.formatNumber(y,k,!0),"20px",void 0,"-12px","#333","#fff"),e)},renderThumb:e=>{var{props:t,value:n}=e,l=y-g,o=(e=(o=n-g)<l/10?"0":"auto",9*l/10<o?"0":"auto");return r.default.createElement("div",{...t,style:{...t.style,height:"24px",width:"24px",borderRadius:"12px",backgroundColor:"#197dc8",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 2px 4px #AAA",outline:"none"}},H(a.formatNumber(n,k,!0),"-32px",e,o))},disabled:x,ref:A})),!1===w?null:r.default.createElement("div",{className:"inputs"},r.default.createElement("span",null,r.default.createElement("input",{type:"number",disabled:x,min:g,max:y,step:S,title:F+"",value:F,onBlur:e=>{B(e.target.value)},onChange:e=>{I(e.target.value),t.autoInput&&B(e.target.value)},onKeyDown:e=>{e.stopPropagation(),t.autoInput=!1,"Enter"===e.key?B(F+""):"Escape"===e.key&&j(D)},onMouseDown:e=>{t.autoInput=!0},onFocus:e=>e.target.select()}))))}}}]);