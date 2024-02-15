"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5121],{95242:(e,t,n)=>{n.d(t,{NL:()=>i,ep:()=>a});var r=n(45881),o=n(18214);function i(e,t,n,i){let a=(e=e||{}).precision,s=e.step,u=e.lowerBound,c=e.upperBound;return u=(0,o.kE)(u)?u:0,c=(0,o.kE)(c)?c:100,c<=u&&(u=0,c=100),a=(0,o.kE)(a)?a:n,(a<t||a>20)&&(a=n),s=(0,o.kE)(s)&&s<=c-u&&0<=s?s:i,n=e.displayFormat,i=e.customDisplayFormat,a<0&&(s=Math.pow(10,-1*a),a=0),{currency:e.currency||r.a7,customDisplayFormat:i,displayFormat:n,precision:a,step:s,lowerBound:u,upperBound:c}}function a(e,t,n=!1){const r=(0,o.kE)(t.lowerBound)?t.lowerBound:0,i=(0,o.kE)(t.upperBound)?t.upperBound:100,a=e=>(0,o.kE)(e)?e<r?r:e>i?i:e:NaN;var s=e=>(e=(e||"").trim(),e=(0,o.kE)(e)?parseFloat(e):NaN,a(e));let u=[],c=NaN,l=NaN;return"string"==typeof e?(c=s((t=e.split("\n").filter((e=>""!==e)))[0]),l=s(t[1])):"number"==typeof e?c=a(e):"number"==typeof e?.numeric?c=a(e.numeric):Array.isArray(e)&&1<=e.length&&(c=("string"==typeof e[0]?s:a)(e[0]),l=("string"==typeof e[1]?s:a)(e[1])),isNaN(c)||(isNaN(l)?n&&u.push(c):u.push(c,l)),u=u.sort(((e,t)=>e-t)),u.length?u:n?[Math.round((r+i)/2)]:[r,i]}},32992:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},u=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var c=s(n(51315)),l=n(26241),d=n(83788),h=["ArrowRight","ArrowUp","k","PageUp"],f=["ArrowLeft","ArrowDown","j","PageDown"],p=function(e){function t(t){var n=e.call(this,t)||this;if(n.trackRef=c.createRef(),n.thumbRefs=[],n.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:new Array(n.props.values.length).fill(0).map((function(e,t){return t})),isChanged:!1,markOffsets:[]},n.getOffsets=function(){var e=n.props,t=e.direction,r=e.values,o=e.min,i=e.max,a=n.trackRef.current,s=a.getBoundingClientRect(),u=(0,l.getPaddingAndBorder)(a);return n.getThumbs().map((function(e,n){var a={x:0,y:0},c=e.getBoundingClientRect(),h=(0,l.getMargin)(e);switch(t){case d.Direction.Right:return a.x=-1*(h.left+u.left),a.y=-1*((c.height-s.height)/2+u.top),a.x+=s.width*(0,l.relativeValue)(r[n],o,i)-c.width/2,a;case d.Direction.Left:return a.x=-1*(h.right+u.right),a.y=-1*((c.height-s.height)/2+u.top),a.x+=s.width-s.width*(0,l.relativeValue)(r[n],o,i)-c.width/2,a;case d.Direction.Up:return a.x=-1*((c.width-s.width)/2+h.left+u.left),a.y=-u.left,a.y+=s.height-s.height*(0,l.relativeValue)(r[n],o,i)-c.height/2,a;case d.Direction.Down:return a.x=-1*((c.width-s.width)/2+h.left+u.left),a.y=-u.left,a.y+=s.height*(0,l.relativeValue)(r[n],o,i)-c.height/2,a;default:return(0,l.assertUnreachable)(t)}}))},n.getThumbs=function(){return n.trackRef&&n.trackRef.current?Array.from(n.trackRef.current.children).filter((function(e){return e.hasAttribute("aria-valuenow")})):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},n.getTargetIndex=function(e){return n.getThumbs().findIndex((function(t){return t===e.target||t.contains(e.target)}))},n.addTouchEvents=function(e){document.addEventListener("touchmove",n.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",n.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",n.schdOnEnd,{passive:!1})},n.addMouseEvents=function(e){document.addEventListener("mousemove",n.schdOnMouseMove),document.addEventListener("mouseup",n.schdOnEnd)},n.onMouseDownTrack=function(e){var t;if(0===e.button)if(e.persist(),e.preventDefault(),n.addMouseEvents(e.nativeEvent),n.props.values.length>1&&n.props.draggableTrack){if(n.thumbRefs.some((function(t){var n;return null===(n=t.current)||void 0===n?void 0:n.contains(e.target)})))return;n.setState({draggedTrackPos:[e.clientX,e.clientY]},(function(){return n.onMove(e.clientX,e.clientY)}))}else{var r=(0,l.getClosestThumbIndex)(n.thumbRefs.map((function(e){return e.current})),e.clientX,e.clientY,n.props.direction);null===(t=n.thumbRefs[r].current)||void 0===t||t.focus(),n.setState({draggedThumbIndex:r},(function(){return n.onMove(e.clientX,e.clientY)}))}},n.onResize=function(){(0,l.translateThumbs)(n.getThumbs(),n.getOffsets(),n.props.rtl),n.calculateMarkOffsets()},n.onTouchStartTrack=function(e){var t;if(e.persist(),n.addTouchEvents(e.nativeEvent),n.props.values.length>1&&n.props.draggableTrack){if(n.thumbRefs.some((function(t){var n;return null===(n=t.current)||void 0===n?void 0:n.contains(e.target)})))return;n.setState({draggedTrackPos:[e.touches[0].clientX,e.touches[0].clientY]},(function(){return n.onMove(e.touches[0].clientX,e.touches[0].clientY)}))}else{var r=(0,l.getClosestThumbIndex)(n.thumbRefs.map((function(e){return e.current})),e.touches[0].clientX,e.touches[0].clientY,n.props.direction);null===(t=n.thumbRefs[r].current)||void 0===t||t.focus(),n.setState({draggedThumbIndex:r},(function(){return n.onMove(e.touches[0].clientX,e.touches[0].clientY)}))}},n.onMouseOrTouchStart=function(e){if(!n.props.disabled){var t=(0,l.isTouchEvent)(e);if(t||0===e.button){var r=n.getTargetIndex(e);-1!==r&&(t?n.addTouchEvents(e):n.addMouseEvents(e),n.setState({draggedThumbIndex:r,thumbZIndexes:n.state.thumbZIndexes.map((function(e,t){return t===r?Math.max.apply(Math,n.state.thumbZIndexes):e<=n.state.thumbZIndexes[r]?e:e-1}))}))}}},n.onMouseMove=function(e){e.preventDefault(),n.onMove(e.clientX,e.clientY)},n.onTouchMove=function(e){e.preventDefault(),n.onMove(e.touches[0].clientX,e.touches[0].clientY)},n.onKeyDown=function(e){var t=n.props,r=t.values,o=t.onChange,i=t.step,a=t.rtl,s=t.direction,u=n.state.isChanged,c=n.getTargetIndex(e.nativeEvent),p=a||s===d.Direction.Left||s===d.Direction.Down?-1:1;-1!==c&&(h.includes(e.key)?(e.preventDefault(),n.setState({draggedThumbIndex:c,isChanged:!0}),o((0,l.replaceAt)(r,c,n.normalizeValue(r[c]+p*("PageUp"===e.key?10*i:i),c)))):f.includes(e.key)?(e.preventDefault(),n.setState({draggedThumbIndex:c,isChanged:!0}),o((0,l.replaceAt)(r,c,n.normalizeValue(r[c]-p*("PageDown"===e.key?10*i:i),c)))):"Tab"===e.key?n.setState({draggedThumbIndex:-1},(function(){u&&n.fireOnFinalChange()})):u&&n.fireOnFinalChange())},n.onKeyUp=function(e){var t=n.state.isChanged;n.setState({draggedThumbIndex:-1},(function(){t&&n.fireOnFinalChange()}))},n.onMove=function(e,t){var r=n.state,o=r.draggedThumbIndex,i=r.draggedTrackPos,a=n.props,s=a.direction,u=a.min,c=a.max,h=a.onChange,f=a.values,p=a.step,v=a.rtl;if(-1===o&&-1===i[0]&&-1===i[1])return null;var g=n.trackRef.current;if(!g)return null;var m=g.getBoundingClientRect(),b=(0,l.isVertical)(s)?m.height:m.width;if(-1!==i[0]&&-1!==i[1]){var k=e-i[0],w=t-i[1],y=0;switch(s){case d.Direction.Right:case d.Direction.Left:y=k/b*(c-u);break;case d.Direction.Down:case d.Direction.Up:y=w/b*(c-u);break;default:(0,l.assertUnreachable)(s)}if(v&&(y*=-1),Math.abs(y)>=p/2){for(var M=0;M<n.thumbRefs.length;M++){if(f[M]===c&&1===Math.sign(y)||f[M]===u&&-1===Math.sign(y))return;var T=f[M]+y;T>c?y=c-f[M]:T<u&&(y=u-f[M])}var O=f.slice(0);for(M=0;M<n.thumbRefs.length;M++)O=(0,l.replaceAt)(O,M,n.normalizeValue(f[M]+y,M));n.setState({draggedTrackPos:[e,t]}),h(O)}}else{var x=0;switch(s){case d.Direction.Right:x=(e-m.left)/b*(c-u)+u;break;case d.Direction.Left:x=(b-(e-m.left))/b*(c-u)+u;break;case d.Direction.Down:x=(t-m.top)/b*(c-u)+u;break;case d.Direction.Up:x=(b-(t-m.top))/b*(c-u)+u;break;default:(0,l.assertUnreachable)(s)}v&&(x=c+u-x),Math.abs(f[o]-x)>=p/2&&h((0,l.replaceAt)(f,o,n.normalizeValue(x,o)))}},n.normalizeValue=function(e,t){var r=n.props,o=r.min,i=r.max,a=r.step,s=r.allowOverlap,u=r.values;return(0,l.normalizeValue)(e,t,o,i,a,s,u)},n.onEnd=function(e){if(e.preventDefault(),document.removeEventListener("mousemove",n.schdOnMouseMove),document.removeEventListener("touchmove",n.schdOnTouchMove),document.removeEventListener("mouseup",n.schdOnEnd),document.removeEventListener("touchend",n.schdOnEnd),document.removeEventListener("touchcancel",n.schdOnEnd),-1===n.state.draggedThumbIndex&&-1===n.state.draggedTrackPos[0]&&-1===n.state.draggedTrackPos[1])return null;n.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},(function(){n.fireOnFinalChange()}))},n.fireOnFinalChange=function(){n.setState({isChanged:!1});var e=n.props,t=e.onFinalChange,r=e.values;t&&t(r)},n.updateMarkRefs=function(e){if(!e.renderMark)return n.numOfMarks=void 0,void(n.markRefs=void 0);n.numOfMarks=(e.max-e.min)/n.props.step,n.markRefs=[];for(var t=0;t<n.numOfMarks+1;t++)n.markRefs[t]=c.createRef()},n.calculateMarkOffsets=function(){if(n.props.renderMark&&n.trackRef&&n.numOfMarks&&n.markRefs&&null!==n.trackRef.current){for(var e=window.getComputedStyle(n.trackRef.current),t=parseInt(e.width,10),r=parseInt(e.height,10),o=parseInt(e.paddingLeft,10),i=parseInt(e.paddingTop,10),a=[],s=0;s<n.numOfMarks+1;s++){var u=9999,c=9999;if(n.markRefs[s].current){var l=n.markRefs[s].current.getBoundingClientRect();u=l.height,c=l.width}n.props.direction===d.Direction.Left||n.props.direction===d.Direction.Right?a.push([Math.round(t/n.numOfMarks*s+o-c/2),-Math.round((u-r)/2)]):a.push([Math.round(r/n.numOfMarks*s+i-u/2),-Math.round((c-t)/2)])}n.setState({markOffsets:a})}},0===t.step)throw new Error('"step" property should be a positive number');return n.schdOnMouseMove=(0,l.schd)(n.onMouseMove),n.schdOnTouchMove=(0,l.schd)(n.onTouchMove),n.schdOnEnd=(0,l.schd)(n.onEnd),n.thumbRefs=t.values.map((function(){return c.createRef()})),n.updateMarkRefs(t),n}return o(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.values,r=t.min,o=t.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",e.onResize)},unobserve:function(){return window.removeEventListener("resize",e.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),!this.props.allowOverlap&&(0,l.checkInitialOverlap)(this.props.values),this.props.values.forEach((function(t){return(0,l.checkBoundaries)(t,e.props.min,e.props.max)})),this.resizeObserver.observe(this.trackRef.current),(0,l.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),n.forEach((function(e){(0,l.isStepDivisible)(r,e,o)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},t.prototype.componentDidUpdate=function(e,t){var n=this.props,r=n.max,o=n.min,i=n.step,a=n.values,s=n.rtl;e.max===r&&e.min===o&&e.step===i||this.updateMarkRefs(this.props),(0,l.translateThumbs)(this.getThumbs(),this.getOffsets(),s),e.max===r&&e.min===o&&e.step===i&&t.markOffsets.length===this.state.markOffsets.length||(this.calculateMarkOffsets(),a.forEach((function(e){(0,l.isStepDivisible)(o,e,i)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})))},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},t.prototype.render=function(){var e=this,t=this.props,n=t.renderTrack,r=t.renderThumb,o=t.renderMark,i=void 0===o?function(){return null}:o,a=t.values,s=t.min,c=t.max,h=t.allowOverlap,f=t.disabled,p=this.state,v=p.draggedThumbIndex,g=p.thumbZIndexes,m=p.markOffsets;return n({props:{style:{transform:"scale(1)",cursor:v>-1?"grabbing":this.props.draggableTrack?(0,l.isVertical)(this.props.direction)?"ns-resize":"ew-resize":1!==a.length||f?"inherit":"pointer"},onMouseDown:f?l.voidFn:this.onMouseDownTrack,onTouchStart:f?l.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex>-1,disabled:f,children:u(u([],m.map((function(t,n,r){return i({props:{style:e.props.direction===d.Direction.Left||e.props.direction===d.Direction.Right?{position:"absolute",left:"".concat(t[0],"px"),marginTop:"".concat(t[1],"px")}:{position:"absolute",top:"".concat(t[0],"px"),marginLeft:"".concat(t[1],"px")},key:"mark".concat(n),ref:e.markRefs[n]},index:n})})),!0),a.map((function(t,n){var o=e.state.draggedThumbIndex===n;return r({index:n,value:t,isDragged:o,props:{style:{position:"absolute",zIndex:g[n],cursor:f?"inherit":o?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:n,tabIndex:f?void 0:0,"aria-valuemax":h?c:a[n+1]||c,"aria-valuemin":h?s:a[n-1]||s,"aria-valuenow":t,draggable:!1,ref:e.thumbRefs[n],role:"slider",onKeyDown:f?l.voidFn:e.onKeyDown,onKeyUp:f?l.voidFn:e.onKeyUp}})})),!0)})},t.defaultProps={step:1,direction:d.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},t}(c.Component);t.default=p},94783:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkValuesAgainstBoundaries=t.relativeValue=t.useThumbOverlap=t.Direction=t.getTrackBackground=t.Range=void 0;var o=r(n(32992));t.Range=o.default;var i=n(26241);Object.defineProperty(t,"getTrackBackground",{enumerable:!0,get:function(){return i.getTrackBackground}}),Object.defineProperty(t,"useThumbOverlap",{enumerable:!0,get:function(){return i.useThumbOverlap}}),Object.defineProperty(t,"relativeValue",{enumerable:!0,get:function(){return i.relativeValue}}),Object.defineProperty(t,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return i.checkValuesAgainstBoundaries}});var a=n(83788);Object.defineProperty(t,"Direction",{enumerable:!0,get:function(){return a.Direction}})},83788:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Direction=void 0,(n=t.Direction||(t.Direction={})).Right="to right",n.Left="to left",n.Down="to bottom",n.Up="to top"},26241:function(e,t,n){var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.useThumbOverlap=t.assertUnreachable=t.voidFn=t.getTrackBackground=t.replaceAt=t.schd=t.translate=t.getClosestThumbIndex=t.translateThumbs=t.getPaddingAndBorder=t.getMargin=t.checkInitialOverlap=t.checkValuesAgainstBoundaries=t.checkBoundaries=t.isVertical=t.relativeValue=t.normalizeValue=t.isStepDivisible=t.isTouchEvent=t.getStepDecimals=void 0;var o=n(51315),i=n(83788);function a(e){return e===i.Direction.Up||e===i.Direction.Down}function s(e,t,n){e.style.transform="translate(".concat(t,"px, ").concat(n,"px)")}t.getStepDecimals=function(e){var t=e.toString().split(".")[1];return t?t.length:0},t.isTouchEvent=function(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length},t.isStepDivisible=function(e,t,n){var r=Number(((t-e)/n).toFixed(8));return parseInt(r.toString(),10)===r},t.normalizeValue=function(e,n,r,o,i,a,s){var u=1e11;if(e=Math.round(e*u)/u,!a){var c=s[n-1],l=s[n+1];if(c&&c>e)return c;if(l&&l<e)return l}if(e>o)return o;if(e<r)return r;var d=Math.floor(e*u-r*u)%Math.floor(i*u),h=Math.floor(e*u-Math.abs(d)),f=0===d?e:h/u,p=Math.abs(d/u)<i/2?f:f+i,v=(0,t.getStepDecimals)(i);return parseFloat(p.toFixed(v))},t.relativeValue=function(e,t,n){return(e-t)/(n-t)},t.isVertical=a,t.checkBoundaries=function(e,t,n){if(t>=n)throw new RangeError("min (".concat(t,") is equal/bigger than max (").concat(n,")"));if(e<t)throw new RangeError("value (".concat(e,") is smaller than min (").concat(t,")"));if(e>n)throw new RangeError("value (".concat(e,") is bigger than max (").concat(n,")"))},t.checkValuesAgainstBoundaries=function(e,t,n){return e<t?t:e>n?n:e},t.checkInitialOverlap=function(e){if(!(e.length<2||e.slice(1).every((function(t,n){return e[n]<=t}))))throw new RangeError("values={[".concat(e,"]} needs to be sorted when allowOverlap={false}"))},t.getMargin=function(e){var t=window.getComputedStyle(e);return{top:parseInt(t["margin-top"],10),bottom:parseInt(t["margin-bottom"],10),left:parseInt(t["margin-left"],10),right:parseInt(t["margin-right"],10)}},t.getPaddingAndBorder=function(e){var t=window.getComputedStyle(e);return{top:parseInt(t["padding-top"],10)+parseInt(t["border-top-width"],10),bottom:parseInt(t["padding-bottom"],10)+parseInt(t["border-bottom-width"],10),left:parseInt(t["padding-left"],10)+parseInt(t["border-left-width"],10),right:parseInt(t["padding-right"],10)+parseInt(t["border-right-width"],10)}},t.translateThumbs=function(e,t,n){var r=n?-1:1;e.forEach((function(e,n){return s(e,r*t[n].x,t[n].y)}))},t.getClosestThumbIndex=function(e,t,n,r){for(var o=0,i=c(e[0],t,n,r),a=1;a<e.length;a++){var s=c(e[a],t,n,r);s<i&&(i=s,o=a)}return o},t.translate=s,t.schd=function(e){var t=[],n=null;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];t=r,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))}},t.replaceAt=function(e,t,n){var r=e.slice(0);return r[t]=n,r},t.getTrackBackground=function(e){var t=e.values,n=e.colors,r=e.min,o=e.max,a=e.direction,s=void 0===a?i.Direction.Right:a,u=e.rtl,c=void 0!==u&&u;c&&s===i.Direction.Right?s=i.Direction.Left:c&&i.Direction.Left&&(s=i.Direction.Right);var l=t.slice(0).sort((function(e,t){return e-t})).map((function(e){return(e-r)/(o-r)*100})).reduce((function(e,t,r){return"".concat(e,", ").concat(n[r]," ").concat(t,"%, ").concat(n[r+1]," ").concat(t,"%")}),"");return"linear-gradient(".concat(s,", ").concat(n[0]," 0%").concat(l,", ").concat(n[n.length-1]," 100%)")},t.voidFn=function(){},t.assertUnreachable=function(e){throw new Error("Didn't expect to get here")};var u=function(e,t,n,o,i){return void 0===i&&(i=function(e){return e}),Math.ceil(r([e],Array.from(e.children),!0).reduce((function(e,r){var a=Math.ceil(r.getBoundingClientRect().width);if(r.innerText&&r.innerText.includes(n)&&0===r.childElementCount){var s=r.cloneNode(!0);s.innerHTML=i(t.toFixed(o)),s.style.visibility="hidden",document.body.appendChild(s),a=Math.ceil(s.getBoundingClientRect().width),document.body.removeChild(s)}return a>e?a:e}),e.getBoundingClientRect().width))};function c(e,t,n,r){var o=e.getBoundingClientRect(),i=o.left,s=o.top,u=o.width,c=o.height;return a(r)?Math.abs(n-(s+c/2)):Math.abs(t-(i+u/2))}t.useThumbOverlap=function(e,n,i,a,s,c){void 0===a&&(a=.1),void 0===s&&(s=" - "),void 0===c&&(c=function(e){return e});var l=(0,t.getStepDecimals)(a),d=(0,o.useState)({}),h=d[0],f=d[1],p=(0,o.useState)(c(n[i].toFixed(l))),v=p[0],g=p[1];return(0,o.useEffect)((function(){if(e){var t=e.getThumbs();if(t.length<1)return;var o={},a=e.getOffsets(),d=function(e,t,n,o,i,a,s){void 0===s&&(s=function(e){return e});var c=[],l=function(e){var d=u(n[e],o[e],i,a,s),h=t[e].x;t.forEach((function(t,f){var p=t.x,v=u(n[f],o[f],i,a,s);e!==f&&(h>=p&&h<=p+v||h+d>=p&&h+d<=p+v)&&(c.includes(f)||(c.push(e),c.push(f),c=r(r([],c,!0),[e,f],!1),l(f)))}))};return l(e),Array.from(new Set(c.sort()))}(i,a,t,n,s,l,c),h=c(n[i].toFixed(l));if(d.length){var p=d.reduce((function(e,t,n,o){return e.length?r(r([],e,!0),[a[o[n]].x],!1):[a[o[n]].x]}),[]);if(Math.min.apply(Math,p)===a[i].x){var v=[];d.forEach((function(e){v.push(n[e].toFixed(l))})),h=Array.from(new Set(v.sort((function(e,t){return parseFloat(e)-parseFloat(t)})))).map(c).join(s);var m=Math.min.apply(Math,p),b=Math.max.apply(Math,p),k=t[d[p.indexOf(b)]].getBoundingClientRect().width;o.left="".concat(Math.abs(m-(b+k))/2,"px"),o.transform="translate(-50%, 0)"}else o.visibility="hidden"}g(h),f(o)}}),[e,n]),[v,h]}}}]);