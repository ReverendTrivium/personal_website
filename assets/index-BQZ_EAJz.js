var nM=Object.defineProperty;var rM=(t,e,n)=>e in t?nM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Na=(t,e,n)=>rM(t,typeof e!="symbol"?e+"":e,n);function iM(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k_={exports:{}},wf={},F_={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xl=Symbol.for("react.element"),oM=Symbol.for("react.portal"),sM=Symbol.for("react.fragment"),aM=Symbol.for("react.strict_mode"),lM=Symbol.for("react.profiler"),cM=Symbol.for("react.provider"),uM=Symbol.for("react.context"),fM=Symbol.for("react.forward_ref"),dM=Symbol.for("react.suspense"),hM=Symbol.for("react.memo"),pM=Symbol.for("react.lazy"),Rv=Symbol.iterator;function mM(t){return t===null||typeof t!="object"?null:(t=Rv&&t[Rv]||t["@@iterator"],typeof t=="function"?t:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z_=Object.assign,H_={};function Ta(t,e,n){this.props=t,this.context=e,this.refs=H_,this.updater=n||B_}Ta.prototype.isReactComponent={};Ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function V_(){}V_.prototype=Ta.prototype;function km(t,e,n){this.props=t,this.context=e,this.refs=H_,this.updater=n||B_}var Fm=km.prototype=new V_;Fm.constructor=km;z_(Fm,Ta.prototype);Fm.isPureReactComponent=!0;var Pv=Array.isArray,G_=Object.prototype.hasOwnProperty,Bm={current:null},W_={key:!0,ref:!0,__self:!0,__source:!0};function $_(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)G_.call(e,r)&&!W_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xl,type:t,key:o,ref:s,props:i,_owner:Bm.current}}function gM(t,e){return{$$typeof:Xl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xl}function vM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lv=/\/+/g;function Sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vM(""+t.key):e.toString(36)}function uu(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Xl:case oM:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Sd(s,0):r,Pv(i)?(n="",t!=null&&(n=t.replace(Lv,"$&/")+"/"),uu(i,e,n,"",function(c){return c})):i!=null&&(zm(i)&&(i=gM(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Lv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Pv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Sd(o,a);s+=uu(o,e,n,l,i)}else if(l=mM(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Sd(o,a++),s+=uu(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function hc(t,e,n){if(t==null)return t;var r=[],i=0;return uu(t,r,"","",function(o){return e.call(n,o,i++)}),r}function yM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},fu={transition:null},_M={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:fu,ReactCurrentOwner:Bm};Ke.Children={map:hc,forEach:function(t,e,n){hc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hc(t,function(){e++}),e},toArray:function(t){return hc(t,function(e){return e})||[]},only:function(t){if(!zm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Ta;Ke.Fragment=sM;Ke.Profiler=lM;Ke.PureComponent=km;Ke.StrictMode=aM;Ke.Suspense=dM;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_M;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=z_({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Bm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)G_.call(e,l)&&!W_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xl,type:t.type,key:i,ref:o,props:r,_owner:s}};Ke.createContext=function(t){return t={$$typeof:uM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cM,_context:t},t.Consumer=t};Ke.createElement=$_;Ke.createFactory=function(t){var e=$_.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:fM,render:t}};Ke.isValidElement=zm;Ke.lazy=function(t){return{$$typeof:pM,_payload:{_status:-1,_result:t},_init:yM}};Ke.memo=function(t,e){return{$$typeof:hM,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=fu.transition;fu.transition={};try{t()}finally{fu.transition=e}};Ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ke.useCallback=function(t,e){return yn.current.useCallback(t,e)};Ke.useContext=function(t){return yn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return yn.current.useEffect(t,e)};Ke.useId=function(){return yn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return yn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};Ke.useRef=function(t){return yn.current.useRef(t)};Ke.useState=function(t){return yn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return yn.current.useTransition()};Ke.version="18.2.0";F_.exports=Ke;var Z=F_.exports;const rn=O_(Z),Ih=iM({__proto__:null,default:rn},[Z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xM=Z,SM=Symbol.for("react.element"),EM=Symbol.for("react.fragment"),MM=Object.prototype.hasOwnProperty,wM=xM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TM={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)MM.call(e,r)&&!TM.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:SM,type:t,key:o,ref:s,props:i,_owner:wM.current}}wf.Fragment=EM;wf.jsx=j_;wf.jsxs=j_;k_.exports=wf;var R=k_.exports,Dh={},X_={exports:{}},qn={},Y_={exports:{}},q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,z){var q=I.length;I.push(z);e:for(;0<q;){var oe=q-1>>>1,ue=I[oe];if(0<i(ue,z))I[oe]=z,I[q]=ue,q=oe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var z=I[0],q=I.pop();if(q!==z){I[0]=q;e:for(var oe=0,ue=I.length,Fe=ue>>>1;oe<Fe;){var X=2*(oe+1)-1,ne=I[X],ce=X+1,ae=I[ce];if(0>i(ne,q))ce<ue&&0>i(ae,ne)?(I[oe]=ae,I[ce]=q,oe=ce):(I[oe]=ne,I[X]=q,oe=X);else if(ce<ue&&0>i(ae,q))I[oe]=ae,I[ce]=q,oe=ce;else break e}}return z}function i(I,z){var q=I.sortIndex-z.sortIndex;return q!==0?q:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(I){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=I)r(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function _(I){if(y=!1,S(I),!v)if(n(l)!==null)v=!0,B(T);else{var z=n(c);z!==null&&Y(_,z.startTime-I)}}function T(I,z){v=!1,y&&(y=!1,f(L),L=-1),p=!0;var q=h;try{for(S(z),d=n(l);d!==null&&(!(d.expirationTime>z)||I&&!C());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var ue=oe(d.expirationTime<=z);z=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(l)&&r(l),S(z)}else r(l);d=n(l)}if(d!==null)var Fe=!0;else{var X=n(c);X!==null&&Y(_,X.startTime-z),Fe=!1}return Fe}finally{d=null,h=q,p=!1}}var w=!1,M=null,L=-1,A=5,m=-1;function C(){return!(t.unstable_now()-m<A)}function O(){if(M!==null){var I=t.unstable_now();m=I;var z=!0;try{z=M(!0,I)}finally{z?N():(w=!1,M=null)}}else w=!1}var N;if(typeof x=="function")N=function(){x(O)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,G=H.port2;H.port1.onmessage=O,N=function(){G.postMessage(null)}}else N=function(){g(O,0)};function B(I){M=I,w||(w=!0,N())}function Y(I,z){L=g(function(){I(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,B(T))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var q=h;h=z;try{return I()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=h;h=I;try{return z()}finally{h=q}},t.unstable_scheduleCallback=function(I,z,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,I){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=q+ue,I={id:u++,callback:z,priorityLevel:I,startTime:q,expirationTime:ue,sortIndex:-1},q>oe?(I.sortIndex=q,e(c,I),n(l)===null&&I===n(c)&&(y?(f(L),L=-1):y=!0,Y(_,q-oe))):(I.sortIndex=ue,e(l,I),v||p||(v=!0,B(T))),I},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(I){var z=h;return function(){var q=h;h=z;try{return I.apply(this,arguments)}finally{h=q}}}})(q_);Y_.exports=q_;var AM=Y_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=Z,Xn=AM;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,Sl={};function Zo(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(Sl[t]=e,t=0;t<e.length;t++)Z_.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nh=Object.prototype.hasOwnProperty,bM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iv={},Dv={};function CM(t){return Nh.call(Dv,t)?!0:Nh.call(Iv,t)?!1:bM.test(t)?Dv[t]=!0:(Iv[t]=!0,!1)}function RM(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PM(t,e,n,r){if(e===null||typeof e>"u"||RM(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hm=/[\-:]([a-z])/g;function Vm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hm,Vm);sn[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hm,Vm);sn[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hm,Vm);sn[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gm(t,e,n,r){var i=sn.hasOwnProperty(e)?sn[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PM(e,n,i,r)&&(n=null),r||i===null?CM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bi=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pc=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),Uh=Symbol.for("react.profiler"),Q_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Oh=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),ex=Symbol.for("react.offscreen"),Nv=Symbol.iterator;function Ua(t){return t===null||typeof t!="object"?null:(t=Nv&&t[Nv]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Ed;function Ja(t){if(Ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+t}var Md=!1;function wd(t,e){if(!t||Md)return"";Md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Md=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ja(t):""}function LM(t){switch(t.tag){case 5:return Ja(t.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 2:case 15:return t=wd(t.type,!1),t;case 11:return t=wd(t.type.render,!1),t;case 1:return t=wd(t.type,!0),t;default:return""}}function Fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case Uh:return"Profiler";case Wm:return"StrictMode";case Oh:return"Suspense";case kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J_:return(t.displayName||"Context")+".Consumer";case Q_:return(t._context.displayName||"Context")+".Provider";case $m:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jm:return e=t.displayName||null,e!==null?e:Fh(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return Fh(t(e))}catch{}}return null}function IM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fh(e);case 8:return e===Wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function eo(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DM(t){var e=tx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mc(t){t._valueTracker||(t._valueTracker=DM(t))}function nx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bh(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=eo(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rx(t,e){e=e.checked,e!=null&&Gm(t,"checked",e,!1)}function zh(t,e){rx(t,e);var n=eo(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hh(t,e.type,eo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ov(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hh(t,e,n){(e!=="number"||Fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var el=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+eo(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(el(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:eo(n)}}function ix(t,e){var n=eo(e.value),r=eo(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ox(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ox(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gc,sx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gc=gc||document.createElement("div"),gc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function El(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ll={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NM=["Webkit","ms","Moz","O"];Object.keys(ll).forEach(function(t){NM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ll[e]=ll[t]})});function ax(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ll.hasOwnProperty(t)&&ll[t]?(""+e).trim():e+"px"}function lx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ax(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UM=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wh(t,e){if(e){if(UM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=null;function Xm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xh=null,Hs=null,Vs=null;function Bv(t){if(t=Kl(t)){if(typeof Xh!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Rf(e),Xh(t.stateNode,t.type,e))}}function cx(t){Hs?Vs?Vs.push(t):Vs=[t]:Hs=t}function ux(){if(Hs){var t=Hs,e=Vs;if(Vs=Hs=null,Bv(t),e)for(t=0;t<e.length;t++)Bv(e[t])}}function fx(t,e){return t(e)}function dx(){}var Td=!1;function hx(t,e,n){if(Td)return t(e,n);Td=!0;try{return fx(t,e,n)}finally{Td=!1,(Hs!==null||Vs!==null)&&(dx(),ux())}}function Ml(t,e){var n=t.stateNode;if(n===null)return null;var r=Rf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Yh=!1;if(yi)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){Yh=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{Yh=!1}function OM(t,e,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var cl=!1,Bu=null,zu=!1,qh=null,kM={onError:function(t){cl=!0,Bu=t}};function FM(t,e,n,r,i,o,s,a,l){cl=!1,Bu=null,OM.apply(kM,arguments)}function BM(t,e,n,r,i,o,s,a,l){if(FM.apply(this,arguments),cl){if(cl){var c=Bu;cl=!1,Bu=null}else throw Error(se(198));zu||(zu=!0,qh=c)}}function Qo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function px(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(Qo(t)!==t)throw Error(se(188))}function zM(t){var e=t.alternate;if(!e){if(e=Qo(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zv(i),t;if(o===r)return zv(i),e;o=o.sibling}throw Error(se(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function mx(t){return t=zM(t),t!==null?gx(t):null}function gx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gx(t);if(e!==null)return e;t=t.sibling}return null}var vx=Xn.unstable_scheduleCallback,Hv=Xn.unstable_cancelCallback,HM=Xn.unstable_shouldYield,VM=Xn.unstable_requestPaint,Nt=Xn.unstable_now,GM=Xn.unstable_getCurrentPriorityLevel,Ym=Xn.unstable_ImmediatePriority,yx=Xn.unstable_UserBlockingPriority,Hu=Xn.unstable_NormalPriority,WM=Xn.unstable_LowPriority,_x=Xn.unstable_IdlePriority,Tf=null,Gr=null;function $M(t){if(Gr&&typeof Gr.onCommitFiberRoot=="function")try{Gr.onCommitFiberRoot(Tf,t,void 0,(t.current.flags&128)===128)}catch{}}var Ar=Math.clz32?Math.clz32:YM,jM=Math.log,XM=Math.LN2;function YM(t){return t>>>=0,t===0?32:31-(jM(t)/XM|0)|0}var vc=64,yc=4194304;function tl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=tl(a):(o&=s,o!==0&&(r=tl(o)))}else s=n&~i,s!==0?r=tl(s):o!==0&&(r=tl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ar(e),i=1<<n,r|=t[n],e&=~i;return r}function qM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KM(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Ar(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=qM(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xx(){var t=vc;return vc<<=1,!(vc&4194240)&&(vc=64),t}function Ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ar(e),t[e]=n}function ZM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ar(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function qm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ar(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ft=0;function Sx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ex,Km,Mx,wx,Tx,Zh=!1,_c=[],Wi=null,$i=null,ji=null,wl=new Map,Tl=new Map,Bi=[],QM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(e.pointerId)}}function ka(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Kl(e),e!==null&&Km(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JM(t,e,n,r,i){switch(e){case"focusin":return Wi=ka(Wi,t,e,n,r,i),!0;case"dragenter":return $i=ka($i,t,e,n,r,i),!0;case"mouseover":return ji=ka(ji,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return wl.set(o,ka(wl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Tl.set(o,ka(Tl.get(o)||null,t,e,n,r,i)),!0}return!1}function Ax(t){var e=Po(t.target);if(e!==null){var n=Qo(e);if(n!==null){if(e=n.tag,e===13){if(e=px(n),e!==null){t.blockedOn=e,Tx(t.priority,function(){Mx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jh=r,n.target.dispatchEvent(r),jh=null}else return e=Kl(n),e!==null&&Km(e),t.blockedOn=n,!1;e.shift()}return!0}function Gv(t,e,n){du(t)&&n.delete(e)}function ew(){Zh=!1,Wi!==null&&du(Wi)&&(Wi=null),$i!==null&&du($i)&&($i=null),ji!==null&&du(ji)&&(ji=null),wl.forEach(Gv),Tl.forEach(Gv)}function Fa(t,e){t.blockedOn===e&&(t.blockedOn=null,Zh||(Zh=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,ew)))}function Al(t){function e(i){return Fa(i,t)}if(0<_c.length){Fa(_c[0],t);for(var n=1;n<_c.length;n++){var r=_c[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wi!==null&&Fa(Wi,t),$i!==null&&Fa($i,t),ji!==null&&Fa(ji,t),wl.forEach(e),Tl.forEach(e),n=0;n<Bi.length;n++)r=Bi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)Ax(n),n.blockedOn===null&&Bi.shift()}var Gs=bi.ReactCurrentBatchConfig,Gu=!0;function tw(t,e,n,r){var i=ft,o=Gs.transition;Gs.transition=null;try{ft=1,Zm(t,e,n,r)}finally{ft=i,Gs.transition=o}}function nw(t,e,n,r){var i=ft,o=Gs.transition;Gs.transition=null;try{ft=4,Zm(t,e,n,r)}finally{ft=i,Gs.transition=o}}function Zm(t,e,n,r){if(Gu){var i=Qh(t,e,n,r);if(i===null)Od(t,e,r,Wu,n),Vv(t,r);else if(JM(i,t,e,n,r))r.stopPropagation();else if(Vv(t,r),e&4&&-1<QM.indexOf(t)){for(;i!==null;){var o=Kl(i);if(o!==null&&Ex(o),o=Qh(t,e,n,r),o===null&&Od(t,e,r,Wu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Od(t,e,r,null,n)}}var Wu=null;function Qh(t,e,n,r){if(Wu=null,t=Xm(r),t=Po(t),t!==null)if(e=Qo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=px(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function bx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GM()){case Ym:return 1;case yx:return 4;case Hu:case WM:return 16;case _x:return 536870912;default:return 16}default:return 16}}var Vi=null,Qm=null,hu=null;function Cx(){if(hu)return hu;var t,e=Qm,n=e.length,r,i="value"in Vi?Vi.value:Vi.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xc(){return!0}function Wv(){return!1}function Kn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xc:Wv,this.isPropagationStopped=Wv,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),e}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jm=Kn(Aa),ql=bt({},Aa,{view:0,detail:0}),rw=Kn(ql),bd,Cd,Ba,Af=bt({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(bd=t.screenX-Ba.screenX,Cd=t.screenY-Ba.screenY):Cd=bd=0,Ba=t),bd)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),$v=Kn(Af),iw=bt({},Af,{dataTransfer:0}),ow=Kn(iw),sw=bt({},ql,{relatedTarget:0}),Rd=Kn(sw),aw=bt({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),lw=Kn(aw),cw=bt({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uw=Kn(cw),fw=bt({},Aa,{data:0}),jv=Kn(fw),dw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pw[t])?!!e[t]:!1}function eg(){return mw}var gw=bt({},ql,{key:function(t){if(t.key){var e=dw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eg,charCode:function(t){return t.type==="keypress"?pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vw=Kn(gw),yw=bt({},Af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xv=Kn(yw),_w=bt({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eg}),xw=Kn(_w),Sw=bt({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ew=Kn(Sw),Mw=bt({},Af,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ww=Kn(Mw),Tw=[9,13,27,32],tg=yi&&"CompositionEvent"in window,ul=null;yi&&"documentMode"in document&&(ul=document.documentMode);var Aw=yi&&"TextEvent"in window&&!ul,Rx=yi&&(!tg||ul&&8<ul&&11>=ul),Yv=" ",qv=!1;function Px(t,e){switch(t){case"keyup":return Tw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function bw(t,e){switch(t){case"compositionend":return Lx(e);case"keypress":return e.which!==32?null:(qv=!0,Yv);case"textInput":return t=e.data,t===Yv&&qv?null:t;default:return null}}function Cw(t,e){if(bs)return t==="compositionend"||!tg&&Px(t,e)?(t=Cx(),hu=Qm=Vi=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rx&&e.locale!=="ko"?null:e.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rw[t.type]:e==="textarea"}function Ix(t,e,n,r){cx(r),e=$u(e,"onChange"),0<e.length&&(n=new Jm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fl=null,bl=null;function Pw(t){Gx(t,0)}function bf(t){var e=Ps(t);if(nx(e))return t}function Lw(t,e){if(t==="change")return e}var Dx=!1;if(yi){var Pd;if(yi){var Ld="oninput"in document;if(!Ld){var Zv=document.createElement("div");Zv.setAttribute("oninput","return;"),Ld=typeof Zv.oninput=="function"}Pd=Ld}else Pd=!1;Dx=Pd&&(!document.documentMode||9<document.documentMode)}function Qv(){fl&&(fl.detachEvent("onpropertychange",Nx),bl=fl=null)}function Nx(t){if(t.propertyName==="value"&&bf(bl)){var e=[];Ix(e,bl,t,Xm(t)),hx(Pw,e)}}function Iw(t,e,n){t==="focusin"?(Qv(),fl=e,bl=n,fl.attachEvent("onpropertychange",Nx)):t==="focusout"&&Qv()}function Dw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bf(bl)}function Nw(t,e){if(t==="click")return bf(e)}function Uw(t,e){if(t==="input"||t==="change")return bf(e)}function Ow(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lr=typeof Object.is=="function"?Object.is:Ow;function Cl(t,e){if(Lr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nh.call(e,i)||!Lr(t[i],e[i]))return!1}return!0}function Jv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function e0(t,e){var n=Jv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jv(n)}}function Ux(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ux(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ox(){for(var t=window,e=Fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fu(t.document)}return e}function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kw(t){var e=Ox(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ux(n.ownerDocument.documentElement,n)){if(r!==null&&ng(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=e0(n,o);var s=e0(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fw=yi&&"documentMode"in document&&11>=document.documentMode,Cs=null,Jh=null,dl=null,ep=!1;function t0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ep||Cs==null||Cs!==Fu(r)||(r=Cs,"selectionStart"in r&&ng(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dl&&Cl(dl,r)||(dl=r,r=$u(Jh,"onSelect"),0<r.length&&(e=new Jm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Cs)))}function Sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rs={animationend:Sc("Animation","AnimationEnd"),animationiteration:Sc("Animation","AnimationIteration"),animationstart:Sc("Animation","AnimationStart"),transitionend:Sc("Transition","TransitionEnd")},Id={},kx={};yi&&(kx=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Cf(t){if(Id[t])return Id[t];if(!Rs[t])return t;var e=Rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kx)return Id[t]=e[n];return t}var Fx=Cf("animationend"),Bx=Cf("animationiteration"),zx=Cf("animationstart"),Hx=Cf("transitionend"),Vx=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function so(t,e){Vx.set(t,e),Zo(e,[t])}for(var Dd=0;Dd<n0.length;Dd++){var Nd=n0[Dd],Bw=Nd.toLowerCase(),zw=Nd[0].toUpperCase()+Nd.slice(1);so(Bw,"on"+zw)}so(Fx,"onAnimationEnd");so(Bx,"onAnimationIteration");so(zx,"onAnimationStart");so("dblclick","onDoubleClick");so("focusin","onFocus");so("focusout","onBlur");so(Hx,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);Zo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(nl));function r0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BM(r,e,void 0,t),t.currentTarget=null}function Gx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;r0(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;r0(i,a,c),o=l}}}if(zu)throw t=qh,zu=!1,qh=null,t}function yt(t,e){var n=e[op];n===void 0&&(n=e[op]=new Set);var r=t+"__bubble";n.has(r)||(Wx(e,t,2,!1),n.add(r))}function Ud(t,e,n){var r=0;e&&(r|=4),Wx(n,t,r,e)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function Rl(t){if(!t[Ec]){t[Ec]=!0,Z_.forEach(function(n){n!=="selectionchange"&&(Hw.has(n)||Ud(n,!1,t),Ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ec]||(e[Ec]=!0,Ud("selectionchange",!1,e))}}function Wx(t,e,n,r){switch(bx(e)){case 1:var i=tw;break;case 4:i=nw;break;default:i=Zm}n=i.bind(null,e,n,t),i=void 0,!Yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Od(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Po(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}hx(function(){var c=o,u=Xm(n),d=[];e:{var h=Vx.get(t);if(h!==void 0){var p=Jm,v=t;switch(t){case"keypress":if(pu(n)===0)break e;case"keydown":case"keyup":p=vw;break;case"focusin":v="focus",p=Rd;break;case"focusout":v="blur",p=Rd;break;case"beforeblur":case"afterblur":p=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ow;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xw;break;case Fx:case Bx:case zx:p=lw;break;case Hx:p=Ew;break;case"scroll":p=rw;break;case"wheel":p=ww;break;case"copy":case"cut":case"paste":p=uw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xv}var y=(e&4)!==0,g=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var x=c,S;x!==null;){S=x;var _=S.stateNode;if(S.tag===5&&_!==null&&(S=_,f!==null&&(_=Ml(x,f),_!=null&&y.push(Pl(x,_,S)))),g)break;x=x.return}0<y.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==jh&&(v=n.relatedTarget||n.fromElement)&&(Po(v)||v[_i]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Po(v):null,v!==null&&(g=Qo(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=$v,_="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xv,_="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?h:Ps(p),S=v==null?h:Ps(v),h=new y(_,x+"leave",p,n,u),h.target=g,h.relatedTarget=S,_=null,Po(u)===c&&(y=new y(f,x+"enter",v,n,u),y.target=S,y.relatedTarget=g,_=y),g=_,p&&v)t:{for(y=p,f=v,x=0,S=y;S;S=ts(S))x++;for(S=0,_=f;_;_=ts(_))S++;for(;0<x-S;)y=ts(y),x--;for(;0<S-x;)f=ts(f),S--;for(;x--;){if(y===f||f!==null&&y===f.alternate)break t;y=ts(y),f=ts(f)}y=null}else y=null;p!==null&&i0(d,h,p,y,!1),v!==null&&g!==null&&i0(d,g,v,y,!0)}}e:{if(h=c?Ps(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=Lw;else if(Kv(h))if(Dx)T=Uw;else{T=Dw;var w=Iw}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Nw);if(T&&(T=T(t,c))){Ix(d,T,n,u);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Hh(h,"number",h.value)}switch(w=c?Ps(c):window,t){case"focusin":(Kv(w)||w.contentEditable==="true")&&(Cs=w,Jh=c,dl=null);break;case"focusout":dl=Jh=Cs=null;break;case"mousedown":ep=!0;break;case"contextmenu":case"mouseup":case"dragend":ep=!1,t0(d,n,u);break;case"selectionchange":if(Fw)break;case"keydown":case"keyup":t0(d,n,u)}var M;if(tg)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else bs?Px(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Rx&&n.locale!=="ko"&&(bs||L!=="onCompositionStart"?L==="onCompositionEnd"&&bs&&(M=Cx()):(Vi=u,Qm="value"in Vi?Vi.value:Vi.textContent,bs=!0)),w=$u(c,L),0<w.length&&(L=new jv(L,t,null,n,u),d.push({event:L,listeners:w}),M?L.data=M:(M=Lx(n),M!==null&&(L.data=M)))),(M=Aw?bw(t,n):Cw(t,n))&&(c=$u(c,"onBeforeInput"),0<c.length&&(u=new jv("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=M))}Gx(d,e)})}function Pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $u(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ml(t,n),o!=null&&r.unshift(Pl(t,o,i)),o=Ml(t,e),o!=null&&r.push(Pl(t,o,i))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function i0(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ml(n,o),l!=null&&s.unshift(Pl(n,l,a))):i||(l=Ml(n,o),l!=null&&s.push(Pl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Vw=/\r\n?/g,Gw=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(Vw,`
`).replace(Gw,"")}function Mc(t,e,n){if(e=o0(e),o0(t)!==e&&n)throw Error(se(425))}function ju(){}var tp=null,np=null;function rp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ip=typeof setTimeout=="function"?setTimeout:void 0,Ww=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,$w=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(t){return s0.resolve(null).then(t).catch(jw)}:ip;function jw(t){setTimeout(function(){throw t})}function kd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function a0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ba=Math.random().toString(36).slice(2),zr="__reactFiber$"+ba,Ll="__reactProps$"+ba,_i="__reactContainer$"+ba,op="__reactEvents$"+ba,Xw="__reactListeners$"+ba,Yw="__reactHandles$"+ba;function Po(t){var e=t[zr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[zr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=a0(t);t!==null;){if(n=t[zr])return n;t=a0(t)}return e}t=n,n=t.parentNode}return null}function Kl(t){return t=t[zr]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Rf(t){return t[Ll]||null}var sp=[],Ls=-1;function ao(t){return{current:t}}function xt(t){0>Ls||(t.current=sp[Ls],sp[Ls]=null,Ls--)}function vt(t,e){Ls++,sp[Ls]=t.current,t.current=e}var to={},hn=ao(to),Cn=ao(!1),Vo=to;function Js(t,e){var n=t.type.contextTypes;if(!n)return to;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rn(t){return t=t.childContextTypes,t!=null}function Xu(){xt(Cn),xt(hn)}function l0(t,e,n){if(hn.current!==to)throw Error(se(168));vt(hn,e),vt(Cn,n)}function $x(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(se(108,IM(t)||"Unknown",i));return bt({},n,r)}function Yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||to,Vo=hn.current,vt(hn,t),vt(Cn,Cn.current),!0}function c0(t,e,n){var r=t.stateNode;if(!r)throw Error(se(169));n?(t=$x(t,e,Vo),r.__reactInternalMemoizedMergedChildContext=t,xt(Cn),xt(hn),vt(hn,t)):xt(Cn),vt(Cn,n)}var ai=null,Pf=!1,Fd=!1;function jx(t){ai===null?ai=[t]:ai.push(t)}function qw(t){Pf=!0,jx(t)}function lo(){if(!Fd&&ai!==null){Fd=!0;var t=0,e=ft;try{var n=ai;for(ft=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ai=null,Pf=!1}catch(i){throw ai!==null&&(ai=ai.slice(t+1)),vx(Ym,lo),i}finally{ft=e,Fd=!1}}return null}var Is=[],Ds=0,qu=null,Ku=0,rr=[],ir=0,Go=null,ui=1,fi="";function Eo(t,e){Is[Ds++]=Ku,Is[Ds++]=qu,qu=t,Ku=e}function Xx(t,e,n){rr[ir++]=ui,rr[ir++]=fi,rr[ir++]=Go,Go=t;var r=ui;t=fi;var i=32-Ar(r)-1;r&=~(1<<i),n+=1;var o=32-Ar(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ui=1<<32-Ar(e)+i|n<<i|r,fi=o+t}else ui=1<<o|n<<i|r,fi=t}function rg(t){t.return!==null&&(Eo(t,1),Xx(t,1,0))}function ig(t){for(;t===qu;)qu=Is[--Ds],Is[Ds]=null,Ku=Is[--Ds],Is[Ds]=null;for(;t===Go;)Go=rr[--ir],rr[ir]=null,fi=rr[--ir],rr[ir]=null,ui=rr[--ir],rr[ir]=null}var Wn=null,Gn=null,wt=!1,Mr=null;function Yx(t,e){var n=ar(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function u0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wn=t,Gn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wn=t,Gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Go!==null?{id:ui,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ar(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wn=t,Gn=null,!0):!1;default:return!1}}function ap(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lp(t){if(wt){var e=Gn;if(e){var n=e;if(!u0(t,e)){if(ap(t))throw Error(se(418));e=Xi(n.nextSibling);var r=Wn;e&&u0(t,e)?Yx(r,n):(t.flags=t.flags&-4097|2,wt=!1,Wn=t)}}else{if(ap(t))throw Error(se(418));t.flags=t.flags&-4097|2,wt=!1,Wn=t}}}function f0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function wc(t){if(t!==Wn)return!1;if(!wt)return f0(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rp(t.type,t.memoizedProps)),e&&(e=Gn)){if(ap(t))throw qx(),Error(se(418));for(;e;)Yx(t,e),e=Xi(e.nextSibling)}if(f0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gn=null}}else Gn=Wn?Xi(t.stateNode.nextSibling):null;return!0}function qx(){for(var t=Gn;t;)t=Xi(t.nextSibling)}function ea(){Gn=Wn=null,wt=!1}function og(t){Mr===null?Mr=[t]:Mr.push(t)}var Kw=bi.ReactCurrentBatchConfig;function Sr(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Zu=ao(null),Qu=null,Ns=null,sg=null;function ag(){sg=Ns=Qu=null}function lg(t){var e=Zu.current;xt(Zu),t._currentValue=e}function cp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Qu=t,sg=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function ur(t){var e=t._currentValue;if(sg!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(Qu===null)throw Error(se(308));Ns=t,Qu.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var Lo=null;function cg(t){Lo===null?Lo=[t]:Lo.push(t)}function Kx(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cg(e)):(n.next=i.next,i.next=n),e.interleaved=n,xi(t,r)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function ug(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,et&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xi(t,n)}return i=r.interleaved,i===null?(e.next=e,cg(r)):(e.next=i.next,i.next=e),r.interleaved=e,xi(t,n)}function mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qm(t,n)}}function d0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var i=t.updateQueue;Fi=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=bt({},d,h);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);$o|=s,t.lanes=s,t.memoizedState=d}}function h0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(se(191,i));i.call(r)}}}var Qx=new K_.Component().refs;function up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lf={isMounted:function(t){return(t=t._reactInternals)?Qo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vn(),i=Ki(t),o=mi(r,i);o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,i),e!==null&&(br(e,t,i,r),mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vn(),i=Ki(t),o=mi(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,i),e!==null&&(br(e,t,i,r),mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),r=Ki(t),i=mi(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yi(t,i,r),e!==null&&(br(e,t,r,n),mu(e,t,r))}};function p0(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Cl(n,r)||!Cl(i,o):!0}function Jx(t,e,n){var r=!1,i=to,o=e.contextType;return typeof o=="object"&&o!==null?o=ur(o):(i=Rn(e)?Vo:hn.current,r=e.contextTypes,o=(r=r!=null)?Js(t,i):to),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function m0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lf.enqueueReplaceState(e,e.state,null)}function fp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Qx,ug(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ur(o):(o=Rn(e)?Vo:hn.current,i.context=Js(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(up(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lf.enqueueReplaceState(i,i.state,null),Ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function za(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Qx&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Tc(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function g0(t){var e=t._init;return e(t._payload)}function eS(t){function e(f,x){if(t){var S=f.deletions;S===null?(f.deletions=[x],f.flags|=16):S.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function r(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function i(f,x){return f=Zi(f,x),f.index=0,f.sibling=null,f}function o(f,x,S){return f.index=S,t?(S=f.alternate,S!==null?(S=S.index,S<x?(f.flags|=2,x):S):(f.flags|=2,x)):(f.flags|=1048576,x)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,S,_){return x===null||x.tag!==6?(x=$d(S,f.mode,_),x.return=f,x):(x=i(x,S),x.return=f,x)}function l(f,x,S,_){var T=S.type;return T===As?u(f,x,S.props.children,_,S.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ki&&g0(T)===x.type)?(_=i(x,S.props),_.ref=za(f,x,S),_.return=f,_):(_=Su(S.type,S.key,S.props,null,f.mode,_),_.ref=za(f,x,S),_.return=f,_)}function c(f,x,S,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=jd(S,f.mode,_),x.return=f,x):(x=i(x,S.children||[]),x.return=f,x)}function u(f,x,S,_,T){return x===null||x.tag!==7?(x=Fo(S,f.mode,_,T),x.return=f,x):(x=i(x,S),x.return=f,x)}function d(f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=$d(""+x,f.mode,S),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pc:return S=Su(x.type,x.key,x.props,null,f.mode,S),S.ref=za(f,null,x),S.return=f,S;case Ts:return x=jd(x,f.mode,S),x.return=f,x;case ki:var _=x._init;return d(f,_(x._payload),S)}if(el(x)||Ua(x))return x=Fo(x,f.mode,S,null),x.return=f,x;Tc(f,x)}return null}function h(f,x,S,_){var T=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:a(f,x,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pc:return S.key===T?l(f,x,S,_):null;case Ts:return S.key===T?c(f,x,S,_):null;case ki:return T=S._init,h(f,x,T(S._payload),_)}if(el(S)||Ua(S))return T!==null?null:u(f,x,S,_,null);Tc(f,S)}return null}function p(f,x,S,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(S)||null,a(x,f,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pc:return f=f.get(_.key===null?S:_.key)||null,l(x,f,_,T);case Ts:return f=f.get(_.key===null?S:_.key)||null,c(x,f,_,T);case ki:var w=_._init;return p(f,x,S,w(_._payload),T)}if(el(_)||Ua(_))return f=f.get(S)||null,u(x,f,_,T,null);Tc(x,_)}return null}function v(f,x,S,_){for(var T=null,w=null,M=x,L=x=0,A=null;M!==null&&L<S.length;L++){M.index>L?(A=M,M=null):A=M.sibling;var m=h(f,M,S[L],_);if(m===null){M===null&&(M=A);break}t&&M&&m.alternate===null&&e(f,M),x=o(m,x,L),w===null?T=m:w.sibling=m,w=m,M=A}if(L===S.length)return n(f,M),wt&&Eo(f,L),T;if(M===null){for(;L<S.length;L++)M=d(f,S[L],_),M!==null&&(x=o(M,x,L),w===null?T=M:w.sibling=M,w=M);return wt&&Eo(f,L),T}for(M=r(f,M);L<S.length;L++)A=p(M,f,L,S[L],_),A!==null&&(t&&A.alternate!==null&&M.delete(A.key===null?L:A.key),x=o(A,x,L),w===null?T=A:w.sibling=A,w=A);return t&&M.forEach(function(C){return e(f,C)}),wt&&Eo(f,L),T}function y(f,x,S,_){var T=Ua(S);if(typeof T!="function")throw Error(se(150));if(S=T.call(S),S==null)throw Error(se(151));for(var w=T=null,M=x,L=x=0,A=null,m=S.next();M!==null&&!m.done;L++,m=S.next()){M.index>L?(A=M,M=null):A=M.sibling;var C=h(f,M,m.value,_);if(C===null){M===null&&(M=A);break}t&&M&&C.alternate===null&&e(f,M),x=o(C,x,L),w===null?T=C:w.sibling=C,w=C,M=A}if(m.done)return n(f,M),wt&&Eo(f,L),T;if(M===null){for(;!m.done;L++,m=S.next())m=d(f,m.value,_),m!==null&&(x=o(m,x,L),w===null?T=m:w.sibling=m,w=m);return wt&&Eo(f,L),T}for(M=r(f,M);!m.done;L++,m=S.next())m=p(M,f,L,m.value,_),m!==null&&(t&&m.alternate!==null&&M.delete(m.key===null?L:m.key),x=o(m,x,L),w===null?T=m:w.sibling=m,w=m);return t&&M.forEach(function(O){return e(f,O)}),wt&&Eo(f,L),T}function g(f,x,S,_){if(typeof S=="object"&&S!==null&&S.type===As&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case pc:e:{for(var T=S.key,w=x;w!==null;){if(w.key===T){if(T=S.type,T===As){if(w.tag===7){n(f,w.sibling),x=i(w,S.props.children),x.return=f,f=x;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ki&&g0(T)===w.type){n(f,w.sibling),x=i(w,S.props),x.ref=za(f,w,S),x.return=f,f=x;break e}n(f,w);break}else e(f,w);w=w.sibling}S.type===As?(x=Fo(S.props.children,f.mode,_,S.key),x.return=f,f=x):(_=Su(S.type,S.key,S.props,null,f.mode,_),_.ref=za(f,x,S),_.return=f,f=_)}return s(f);case Ts:e:{for(w=S.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(f,x.sibling),x=i(x,S.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=jd(S,f.mode,_),x.return=f,f=x}return s(f);case ki:return w=S._init,g(f,x,w(S._payload),_)}if(el(S))return v(f,x,S,_);if(Ua(S))return y(f,x,S,_);Tc(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(f,x.sibling),x=i(x,S),x.return=f,f=x):(n(f,x),x=$d(S,f.mode,_),x.return=f,f=x),s(f)):n(f,x)}return g}var ta=eS(!0),tS=eS(!1),Zl={},Wr=ao(Zl),Il=ao(Zl),Dl=ao(Zl);function Io(t){if(t===Zl)throw Error(se(174));return t}function fg(t,e){switch(vt(Dl,e),vt(Il,t),vt(Wr,Zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gh(e,t)}xt(Wr),vt(Wr,e)}function na(){xt(Wr),xt(Il),xt(Dl)}function nS(t){Io(Dl.current);var e=Io(Wr.current),n=Gh(e,t.type);e!==n&&(vt(Il,t),vt(Wr,n))}function dg(t){Il.current===t&&(xt(Wr),xt(Il))}var Tt=ao(0);function ef(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function hg(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var gu=bi.ReactCurrentDispatcher,zd=bi.ReactCurrentBatchConfig,Wo=0,At=null,Gt=null,qt=null,tf=!1,hl=!1,Nl=0,Zw=0;function an(){throw Error(se(321))}function pg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lr(t[n],e[n]))return!1;return!0}function mg(t,e,n,r,i,o){if(Wo=o,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gu.current=t===null||t.memoizedState===null?tT:nT,t=n(r,i),hl){o=0;do{if(hl=!1,Nl=0,25<=o)throw Error(se(301));o+=1,qt=Gt=null,e.updateQueue=null,gu.current=rT,t=n(r,i)}while(hl)}if(gu.current=nf,e=Gt!==null&&Gt.next!==null,Wo=0,qt=Gt=At=null,tf=!1,e)throw Error(se(300));return t}function gg(){var t=Nl!==0;return Nl=0,t}function Ur(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?At.memoizedState=qt=t:qt=qt.next=t,qt}function fr(){if(Gt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=qt===null?At.memoizedState:qt.next;if(e!==null)qt=e,Gt=t;else{if(t===null)throw Error(se(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},qt===null?At.memoizedState=qt=t:qt=qt.next=t}return qt}function Ul(t,e){return typeof e=="function"?e(t):e}function Hd(t){var e=fr(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var r=Gt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Wo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,At.lanes|=u,$o|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Lr(r,e.memoizedState)||(An=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,At.lanes|=o,$o|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vd(t){var e=fr(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Lr(o,e.memoizedState)||(An=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function rS(){}function iS(t,e){var n=At,r=fr(),i=e(),o=!Lr(r.memoizedState,i);if(o&&(r.memoizedState=i,An=!0),r=r.queue,vg(aS.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,Ol(9,sS.bind(null,n,r,i,e),void 0,null),Qt===null)throw Error(se(349));Wo&30||oS(n,e,i)}return i}function oS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sS(t,e,n,r){e.value=n,e.getSnapshot=r,lS(e)&&cS(t)}function aS(t,e,n){return n(function(){lS(e)&&cS(t)})}function lS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lr(t,n)}catch{return!0}}function cS(t){var e=xi(t,1);e!==null&&br(e,t,1,-1)}function v0(t){var e=Ur();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ul,lastRenderedState:t},e.queue=t,t=t.dispatch=eT.bind(null,At,t),[e.memoizedState,t]}function Ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uS(){return fr().memoizedState}function vu(t,e,n,r){var i=Ur();At.flags|=t,i.memoizedState=Ol(1|e,n,void 0,r===void 0?null:r)}function If(t,e,n,r){var i=fr();r=r===void 0?null:r;var o=void 0;if(Gt!==null){var s=Gt.memoizedState;if(o=s.destroy,r!==null&&pg(r,s.deps)){i.memoizedState=Ol(e,n,o,r);return}}At.flags|=t,i.memoizedState=Ol(1|e,n,o,r)}function y0(t,e){return vu(8390656,8,t,e)}function vg(t,e){return If(2048,8,t,e)}function fS(t,e){return If(4,2,t,e)}function dS(t,e){return If(4,4,t,e)}function hS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pS(t,e,n){return n=n!=null?n.concat([t]):null,If(4,4,hS.bind(null,e,t),n)}function yg(){}function mS(t,e){var n=fr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gS(t,e){var n=fr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vS(t,e,n){return Wo&21?(Lr(n,e)||(n=xx(),At.lanes|=n,$o|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function Qw(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var r=zd.transition;zd.transition={};try{t(!1),e()}finally{ft=n,zd.transition=r}}function yS(){return fr().memoizedState}function Jw(t,e,n){var r=Ki(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_S(t))xS(e,n);else if(n=Kx(t,e,n,r),n!==null){var i=vn();br(n,t,r,i),SS(n,e,r)}}function eT(t,e,n){var r=Ki(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_S(t))xS(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Lr(a,s)){var l=e.interleaved;l===null?(i.next=i,cg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Kx(t,e,i,r),n!==null&&(i=vn(),br(n,t,r,i),SS(n,e,r))}}function _S(t){var e=t.alternate;return t===At||e!==null&&e===At}function xS(t,e){hl=tf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function SS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qm(t,n)}}var nf={readContext:ur,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},tT={readContext:ur,useCallback:function(t,e){return Ur().memoizedState=[t,e===void 0?null:e],t},useContext:ur,useEffect:y0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vu(4194308,4,hS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vu(4194308,4,t,e)},useInsertionEffect:function(t,e){return vu(4,2,t,e)},useMemo:function(t,e){var n=Ur();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ur();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Jw.bind(null,At,t),[r.memoizedState,t]},useRef:function(t){var e=Ur();return t={current:t},e.memoizedState=t},useState:v0,useDebugValue:yg,useDeferredValue:function(t){return Ur().memoizedState=t},useTransition:function(){var t=v0(!1),e=t[0];return t=Qw.bind(null,t[1]),Ur().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=At,i=Ur();if(wt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Qt===null)throw Error(se(349));Wo&30||oS(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,y0(aS.bind(null,r,o,t),[t]),r.flags|=2048,Ol(9,sS.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ur(),e=Qt.identifierPrefix;if(wt){var n=fi,r=ui;n=(r&~(1<<32-Ar(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Nl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nT={readContext:ur,useCallback:mS,useContext:ur,useEffect:vg,useImperativeHandle:pS,useInsertionEffect:fS,useLayoutEffect:dS,useMemo:gS,useReducer:Hd,useRef:uS,useState:function(){return Hd(Ul)},useDebugValue:yg,useDeferredValue:function(t){var e=fr();return vS(e,Gt.memoizedState,t)},useTransition:function(){var t=Hd(Ul)[0],e=fr().memoizedState;return[t,e]},useMutableSource:rS,useSyncExternalStore:iS,useId:yS,unstable_isNewReconciler:!1},rT={readContext:ur,useCallback:mS,useContext:ur,useEffect:vg,useImperativeHandle:pS,useInsertionEffect:fS,useLayoutEffect:dS,useMemo:gS,useReducer:Vd,useRef:uS,useState:function(){return Vd(Ul)},useDebugValue:yg,useDeferredValue:function(t){var e=fr();return Gt===null?e.memoizedState=t:vS(e,Gt.memoizedState,t)},useTransition:function(){var t=Vd(Ul)[0],e=fr().memoizedState;return[t,e]},useMutableSource:rS,useSyncExternalStore:iS,useId:yS,unstable_isNewReconciler:!1};function ra(t,e){try{var n="",r=e;do n+=LM(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Gd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iT=typeof WeakMap=="function"?WeakMap:Map;function ES(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){of||(of=!0,Ep=r),dp(t,e)},n}function MS(t,e,n){n=mi(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){dp(t,e),typeof r!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function _0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yT.bind(null,t,e,n),e.then(t,t))}function x0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function S0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var oT=bi.ReactCurrentOwner,An=!1;function gn(t,e,n,r){e.child=t===null?tS(e,null,n,r):ta(e,t.child,n,r)}function E0(t,e,n,r,i){n=n.render;var o=e.ref;return Ws(e,i),r=mg(t,e,n,r,o,i),n=gg(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Si(t,e,i)):(wt&&n&&rg(e),e.flags|=1,gn(t,e,r,i),e.child)}function M0(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Ag(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,wS(t,e,o,r,i)):(t=Su(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cl,n(s,r)&&t.ref===e.ref)return Si(t,e,i)}return e.flags|=1,t=Zi(o,r),t.ref=e.ref,t.return=e,e.child=t}function wS(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Cl(o,r)&&t.ref===e.ref)if(An=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,Si(t,e,i)}return hp(t,e,n,r,i)}function TS(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Os,Hn),Hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Os,Hn),Hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,vt(Os,Hn),Hn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,vt(Os,Hn),Hn|=r;return gn(t,e,i,n),e.child}function AS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hp(t,e,n,r,i){var o=Rn(n)?Vo:hn.current;return o=Js(e,o),Ws(e,i),n=mg(t,e,n,r,o,i),r=gg(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Si(t,e,i)):(wt&&r&&rg(e),e.flags|=1,gn(t,e,n,i),e.child)}function w0(t,e,n,r,i){if(Rn(n)){var o=!0;Yu(e)}else o=!1;if(Ws(e,i),e.stateNode===null)yu(t,e),Jx(e,n,r),fp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=ur(c):(c=Rn(n)?Vo:hn.current,c=Js(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&m0(e,s,r,c),Fi=!1;var h=e.memoizedState;s.state=h,Ju(e,r,s,i),l=e.memoizedState,a!==r||h!==l||Cn.current||Fi?(typeof u=="function"&&(up(e,n,u,r),l=e.memoizedState),(a=Fi||p0(e,n,a,r,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Zx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Sr(e.type,a),s.props=c,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ur(l):(l=Rn(n)?Vo:hn.current,l=Js(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&m0(e,s,r,l),Fi=!1,h=e.memoizedState,s.state=h,Ju(e,r,s,i);var v=e.memoizedState;a!==d||h!==v||Cn.current||Fi?(typeof p=="function"&&(up(e,n,p,r),v=e.memoizedState),(c=Fi||p0(e,n,c,r,h,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return pp(t,e,n,r,o,i)}function pp(t,e,n,r,i,o){AS(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&c0(e,n,!1),Si(t,e,o);r=e.stateNode,oT.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ta(e,t.child,null,o),e.child=ta(e,null,a,o)):gn(t,e,a,o),e.memoizedState=r.state,i&&c0(e,n,!0),e.child}function bS(t){var e=t.stateNode;e.pendingContext?l0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&l0(t,e.context,!1),fg(t,e.containerInfo)}function T0(t,e,n,r,i){return ea(),og(i),e.flags|=256,gn(t,e,n,r),e.child}var mp={dehydrated:null,treeContext:null,retryLane:0};function gp(t){return{baseLanes:t,cachePool:null,transitions:null}}function CS(t,e,n){var r=e.pendingProps,i=Tt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),vt(Tt,i&1),t===null)return lp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Uf(s,r,0,null),t=Fo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=gp(n),e.memoizedState=mp,t):_g(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sT(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Zi(a,o):(o=Fo(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?gp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=mp,r}return o=t.child,t=o.sibling,r=Zi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _g(t,e){return e=Uf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ac(t,e,n,r){return r!==null&&og(r),ta(e,t.child,null,n),t=_g(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sT(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Gd(Error(se(422))),Ac(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Uf({mode:"visible",children:r.children},i,0,null),o=Fo(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ta(e,t.child,null,s),e.child.memoizedState=gp(s),e.memoizedState=mp,o);if(!(e.mode&1))return Ac(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(se(419)),r=Gd(o,r,void 0),Ac(t,e,s,r)}if(a=(s&t.childLanes)!==0,An||a){if(r=Qt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xi(t,i),br(r,t,i,-1))}return Tg(),r=Gd(Error(se(421))),Ac(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_T.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Gn=Xi(i.nextSibling),Wn=e,wt=!0,Mr=null,t!==null&&(rr[ir++]=ui,rr[ir++]=fi,rr[ir++]=Go,ui=t.id,fi=t.overflow,Go=e),e=_g(e,r.children),e.flags|=4096,e)}function A0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cp(t.return,e,n)}function Wd(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function RS(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(gn(t,e,r.children,n),r=Tt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A0(t,n,e);else if(t.tag===19)A0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(vt(Tt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ef(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wd(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ef(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wd(e,!0,n,null,o);break;case"together":Wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$o|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aT(t,e,n){switch(e.tag){case 3:bS(e),ea();break;case 5:nS(e);break;case 1:Rn(e.type)&&Yu(e);break;case 4:fg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;vt(Zu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(vt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?CS(t,e,n):(vt(Tt,Tt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);vt(Tt,Tt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return RS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),vt(Tt,Tt.current),r)break;return null;case 22:case 23:return e.lanes=0,TS(t,e,n)}return Si(t,e,n)}var PS,vp,LS,IS;PS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vp=function(){};LS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Io(Wr.current);var o=null;switch(n){case"input":i=Bh(t,i),r=Bh(t,r),o=[];break;case"select":i=bt({},i,{value:void 0}),r=bt({},r,{value:void 0}),o=[];break;case"textarea":i=Vh(t,i),r=Vh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ju)}Wh(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};IS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ha(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lT(t,e,n){var r=e.pendingProps;switch(ig(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(e),null;case 1:return Rn(e.type)&&Xu(),ln(e),null;case 3:return r=e.stateNode,na(),xt(Cn),xt(hn),hg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mr!==null&&(Tp(Mr),Mr=null))),vp(t,e),ln(e),null;case 5:dg(e);var i=Io(Dl.current);if(n=e.type,t!==null&&e.stateNode!=null)LS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(se(166));return ln(e),null}if(t=Io(Wr.current),wc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[zr]=e,r[Ll]=o,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",r),yt("close",r);break;case"iframe":case"object":case"embed":yt("load",r);break;case"video":case"audio":for(i=0;i<nl.length;i++)yt(nl[i],r);break;case"source":yt("error",r);break;case"img":case"image":case"link":yt("error",r),yt("load",r);break;case"details":yt("toggle",r);break;case"input":Uv(r,o),yt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},yt("invalid",r);break;case"textarea":kv(r,o),yt("invalid",r)}Wh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Mc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Mc(r.textContent,a,t),i=["children",""+a]):Sl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&yt("scroll",r)}switch(n){case"input":mc(r),Ov(r,o,!0);break;case"textarea":mc(r),Fv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ju)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ox(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[zr]=e,t[Ll]=r,PS(t,e,!1,!1),e.stateNode=t;e:{switch(s=$h(n,r),n){case"dialog":yt("cancel",t),yt("close",t),i=r;break;case"iframe":case"object":case"embed":yt("load",t),i=r;break;case"video":case"audio":for(i=0;i<nl.length;i++)yt(nl[i],t);i=r;break;case"source":yt("error",t),i=r;break;case"img":case"image":case"link":yt("error",t),yt("load",t),i=r;break;case"details":yt("toggle",t),i=r;break;case"input":Uv(t,r),i=Bh(t,r),yt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=bt({},r,{value:void 0}),yt("invalid",t);break;case"textarea":kv(t,r),i=Vh(t,r),yt("invalid",t);break;default:i=r}Wh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?lx(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sx(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&El(t,l):typeof l=="number"&&El(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Sl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&yt("scroll",t):l!=null&&Gm(t,o,l,s))}switch(n){case"input":mc(t),Ov(t,r,!1);break;case"textarea":mc(t),Fv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+eo(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?zs(t,!!r.multiple,o,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ln(e),null;case 6:if(t&&e.stateNode!=null)IS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(se(166));if(n=Io(Dl.current),Io(Wr.current),wc(e)){if(r=e.stateNode,n=e.memoizedProps,r[zr]=e,(o=r.nodeValue!==n)&&(t=Wn,t!==null))switch(t.tag){case 3:Mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zr]=e,e.stateNode=r}return ln(e),null;case 13:if(xt(Tt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Gn!==null&&e.mode&1&&!(e.flags&128))qx(),ea(),e.flags|=98560,o=!1;else if(o=wc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(se(317));o[zr]=e}else ea(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ln(e),o=!1}else Mr!==null&&(Tp(Mr),Mr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Wt===0&&(Wt=3):Tg())),e.updateQueue!==null&&(e.flags|=4),ln(e),null);case 4:return na(),vp(t,e),t===null&&Rl(e.stateNode.containerInfo),ln(e),null;case 10:return lg(e.type._context),ln(e),null;case 17:return Rn(e.type)&&Xu(),ln(e),null;case 19:if(xt(Tt),o=e.memoizedState,o===null)return ln(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ha(o,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ef(t),s!==null){for(e.flags|=128,Ha(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Tt,Tt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Nt()>ia&&(e.flags|=128,r=!0,Ha(o,!1),e.lanes=4194304)}else{if(!r)if(t=ef(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ha(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!wt)return ln(e),null}else 2*Nt()-o.renderingStartTime>ia&&n!==1073741824&&(e.flags|=128,r=!0,Ha(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Nt(),e.sibling=null,n=Tt.current,vt(Tt,r?n&1|2:n&1),e):(ln(e),null);case 22:case 23:return wg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Hn&1073741824&&(ln(e),e.subtreeFlags&6&&(e.flags|=8192)):ln(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function cT(t,e){switch(ig(e),e.tag){case 1:return Rn(e.type)&&Xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return na(),xt(Cn),xt(hn),hg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dg(e),null;case 13:if(xt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Tt),null;case 4:return na(),null;case 10:return lg(e.type._context),null;case 22:case 23:return wg(),null;case 24:return null;default:return null}}var bc=!1,dn=!1,uT=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){It(t,e,r)}else n.current=null}function yp(t,e,n){try{n()}catch(r){It(t,e,r)}}var b0=!1;function fT(t,e){if(tp=Gu,t=Ox(),ng(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===i&&(a=s),h===o&&++u===r&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(np={focusedElem:t,selectionRange:n},Gu=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Sr(e.type,y),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(_){It(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return v=b0,b0=!1,v}function pl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&yp(e,n,o)}i=i.next}while(i!==r)}}function Df(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _p(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function DS(t){var e=t.alternate;e!==null&&(t.alternate=null,DS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zr],delete e[Ll],delete e[op],delete e[Xw],delete e[Yw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function NS(t){return t.tag===5||t.tag===3||t.tag===4}function C0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||NS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ju));else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}var tn=null,Er=!1;function Ri(t,e,n){for(n=n.child;n!==null;)US(t,e,n),n=n.sibling}function US(t,e,n){if(Gr&&typeof Gr.onCommitFiberUnmount=="function")try{Gr.onCommitFiberUnmount(Tf,n)}catch{}switch(n.tag){case 5:dn||Us(n,e);case 6:var r=tn,i=Er;tn=null,Ri(t,e,n),tn=r,Er=i,tn!==null&&(Er?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(Er?(t=tn,n=n.stateNode,t.nodeType===8?kd(t.parentNode,n):t.nodeType===1&&kd(t,n),Al(t)):kd(tn,n.stateNode));break;case 4:r=tn,i=Er,tn=n.stateNode.containerInfo,Er=!0,Ri(t,e,n),tn=r,Er=i;break;case 0:case 11:case 14:case 15:if(!dn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yp(n,e,s),i=i.next}while(i!==r)}Ri(t,e,n);break;case 1:if(!dn&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){It(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(dn=(r=dn)||n.memoizedState!==null,Ri(t,e,n),dn=r):Ri(t,e,n);break;default:Ri(t,e,n)}}function R0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uT),e.forEach(function(r){var i=xT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vr(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,Er=!1;break e;case 3:tn=a.stateNode.containerInfo,Er=!0;break e;case 4:tn=a.stateNode.containerInfo,Er=!0;break e}a=a.return}if(tn===null)throw Error(se(160));US(o,s,i),tn=null,Er=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){It(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OS(e,t),e=e.sibling}function OS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vr(e,t),Dr(t),r&4){try{pl(3,t,t.return),Df(3,t)}catch(y){It(t,t.return,y)}try{pl(5,t,t.return)}catch(y){It(t,t.return,y)}}break;case 1:vr(e,t),Dr(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(vr(e,t),Dr(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var i=t.stateNode;try{El(i,"")}catch(y){It(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&rx(i,o),$h(a,s);var c=$h(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?lx(i,d):u==="dangerouslySetInnerHTML"?sx(i,d):u==="children"?El(i,d):Gm(i,u,d,c)}switch(a){case"input":zh(i,o);break;case"textarea":ix(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?zs(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?zs(i,!!o.multiple,o.defaultValue,!0):zs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ll]=o}catch(y){It(t,t.return,y)}}break;case 6:if(vr(e,t),Dr(t),r&4){if(t.stateNode===null)throw Error(se(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(y){It(t,t.return,y)}}break;case 3:if(vr(e,t),Dr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(y){It(t,t.return,y)}break;case 4:vr(e,t),Dr(t);break;case 13:vr(e,t),Dr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Eg=Nt())),r&4&&R0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(c=dn)||u,vr(e,t),dn=c):vr(e,t),Dr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Me=t,u=t.child;u!==null;){for(d=Me=u;Me!==null;){switch(h=Me,p=h.child,h.tag){case 0:case 11:case 14:case 15:pl(4,h,h.return);break;case 1:Us(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){It(r,n,y)}}break;case 5:Us(h,h.return);break;case 22:if(h.memoizedState!==null){L0(d);continue}}p!==null?(p.return=h,Me=p):L0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ax("display",s))}catch(y){It(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){It(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vr(e,t),Dr(t),r&4&&R0(t);break;case 21:break;default:vr(e,t),Dr(t)}}function Dr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(NS(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(El(i,""),r.flags&=-33);var o=C0(t);Sp(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=C0(t);xp(t,a,s);break;default:throw Error(se(161))}}catch(l){It(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dT(t,e,n){Me=t,kS(t)}function kS(t,e,n){for(var r=(t.mode&1)!==0;Me!==null;){var i=Me,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||bc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dn;a=bc;var c=dn;if(bc=s,(dn=l)&&!c)for(Me=i;Me!==null;)s=Me,l=s.child,s.tag===22&&s.memoizedState!==null?I0(i):l!==null?(l.return=s,Me=l):I0(i);for(;o!==null;)Me=o,kS(o),o=o.sibling;Me=i,bc=a,dn=c}P0(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Me=o):P0(t)}}function P0(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||Df(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Sr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&h0(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}h0(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Al(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}dn||e.flags&512&&_p(e)}catch(h){It(e,e.return,h)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function L0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function I0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Df(4,e)}catch(l){It(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){It(e,i,l)}}var o=e.return;try{_p(e)}catch(l){It(e,o,l)}break;case 5:var s=e.return;try{_p(e)}catch(l){It(e,s,l)}}}catch(l){It(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var hT=Math.ceil,rf=bi.ReactCurrentDispatcher,xg=bi.ReactCurrentOwner,lr=bi.ReactCurrentBatchConfig,et=0,Qt=null,Vt=null,on=0,Hn=0,Os=ao(0),Wt=0,kl=null,$o=0,Nf=0,Sg=0,ml=null,Mn=null,Eg=0,ia=1/0,oi=null,of=!1,Ep=null,qi=null,Cc=!1,Gi=null,sf=0,gl=0,Mp=null,_u=-1,xu=0;function vn(){return et&6?Nt():_u!==-1?_u:_u=Nt()}function Ki(t){return t.mode&1?et&2&&on!==0?on&-on:Kw.transition!==null?(xu===0&&(xu=xx()),xu):(t=ft,t!==0||(t=window.event,t=t===void 0?16:bx(t.type)),t):1}function br(t,e,n,r){if(50<gl)throw gl=0,Mp=null,Error(se(185));Yl(t,n,r),(!(et&2)||t!==Qt)&&(t===Qt&&(!(et&2)&&(Nf|=n),Wt===4&&zi(t,on)),Pn(t,r),n===1&&et===0&&!(e.mode&1)&&(ia=Nt()+500,Pf&&lo()))}function Pn(t,e){var n=t.callbackNode;KM(t,e);var r=Vu(t,t===Qt?on:0);if(r===0)n!==null&&Hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hv(n),e===1)t.tag===0?qw(D0.bind(null,t)):jx(D0.bind(null,t)),$w(function(){!(et&6)&&lo()}),n=null;else{switch(Sx(r)){case 1:n=Ym;break;case 4:n=yx;break;case 16:n=Hu;break;case 536870912:n=_x;break;default:n=Hu}n=$S(n,FS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function FS(t,e){if(_u=-1,xu=0,et&6)throw Error(se(327));var n=t.callbackNode;if($s()&&t.callbackNode!==n)return null;var r=Vu(t,t===Qt?on:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=af(t,r);else{e=r;var i=et;et|=2;var o=zS();(Qt!==t||on!==e)&&(oi=null,ia=Nt()+500,ko(t,e));do try{gT();break}catch(a){BS(t,a)}while(!0);ag(),rf.current=o,et=i,Vt!==null?e=0:(Qt=null,on=0,e=Wt)}if(e!==0){if(e===2&&(i=Kh(t),i!==0&&(r=i,e=wp(t,i))),e===1)throw n=kl,ko(t,0),zi(t,r),Pn(t,Nt()),n;if(e===6)zi(t,r);else{if(i=t.current.alternate,!(r&30)&&!pT(i)&&(e=af(t,r),e===2&&(o=Kh(t),o!==0&&(r=o,e=wp(t,o))),e===1))throw n=kl,ko(t,0),zi(t,r),Pn(t,Nt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(se(345));case 2:Mo(t,Mn,oi);break;case 3:if(zi(t,r),(r&130023424)===r&&(e=Eg+500-Nt(),10<e)){if(Vu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ip(Mo.bind(null,t,Mn,oi),e);break}Mo(t,Mn,oi);break;case 4:if(zi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Ar(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hT(r/1960))-r,10<r){t.timeoutHandle=ip(Mo.bind(null,t,Mn,oi),r);break}Mo(t,Mn,oi);break;case 5:Mo(t,Mn,oi);break;default:throw Error(se(329))}}}return Pn(t,Nt()),t.callbackNode===n?FS.bind(null,t):null}function wp(t,e){var n=ml;return t.current.memoizedState.isDehydrated&&(ko(t,e).flags|=256),t=af(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&Tp(e)),t}function Tp(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function pT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Lr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~Sg,e&=~Nf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ar(e),r=1<<n;t[n]=-1,e&=~r}}function D0(t){if(et&6)throw Error(se(327));$s();var e=Vu(t,0);if(!(e&1))return Pn(t,Nt()),null;var n=af(t,e);if(t.tag!==0&&n===2){var r=Kh(t);r!==0&&(e=r,n=wp(t,r))}if(n===1)throw n=kl,ko(t,0),zi(t,e),Pn(t,Nt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mo(t,Mn,oi),Pn(t,Nt()),null}function Mg(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(ia=Nt()+500,Pf&&lo())}}function jo(t){Gi!==null&&Gi.tag===0&&!(et&6)&&$s();var e=et;et|=1;var n=lr.transition,r=ft;try{if(lr.transition=null,ft=1,t)return t()}finally{ft=r,lr.transition=n,et=e,!(et&6)&&lo()}}function wg(){Hn=Os.current,xt(Os)}function ko(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ww(n)),Vt!==null)for(n=Vt.return;n!==null;){var r=n;switch(ig(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xu();break;case 3:na(),xt(Cn),xt(hn),hg();break;case 5:dg(r);break;case 4:na();break;case 13:xt(Tt);break;case 19:xt(Tt);break;case 10:lg(r.type._context);break;case 22:case 23:wg()}n=n.return}if(Qt=t,Vt=t=Zi(t.current,null),on=Hn=e,Wt=0,kl=null,Sg=Nf=$o=0,Mn=ml=null,Lo!==null){for(e=0;e<Lo.length;e++)if(n=Lo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Lo=null}return t}function BS(t,e){do{var n=Vt;try{if(ag(),gu.current=nf,tf){for(var r=At.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tf=!1}if(Wo=0,qt=Gt=At=null,hl=!1,Nl=0,xg.current=null,n===null||n.return===null){Wt=1,kl=e,Vt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=on,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=x0(s);if(p!==null){p.flags&=-257,S0(p,s,a,o,e),p.mode&1&&_0(o,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){_0(o,c,e),Tg();break e}l=Error(se(426))}}else if(wt&&a.mode&1){var g=x0(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),S0(g,s,a,o,e),og(ra(l,a));break e}}o=l=ra(l,a),Wt!==4&&(Wt=2),ml===null?ml=[o]:ml.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=ES(o,l,e);d0(o,f);break e;case 1:a=l;var x=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(qi===null||!qi.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=MS(o,a,e);d0(o,_);break e}}o=o.return}while(o!==null)}VS(n)}catch(T){e=T,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function zS(){var t=rf.current;return rf.current=nf,t===null?nf:t}function Tg(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Qt===null||!($o&268435455)&&!(Nf&268435455)||zi(Qt,on)}function af(t,e){var n=et;et|=2;var r=zS();(Qt!==t||on!==e)&&(oi=null,ko(t,e));do try{mT();break}catch(i){BS(t,i)}while(!0);if(ag(),et=n,rf.current=r,Vt!==null)throw Error(se(261));return Qt=null,on=0,Wt}function mT(){for(;Vt!==null;)HS(Vt)}function gT(){for(;Vt!==null&&!HM();)HS(Vt)}function HS(t){var e=WS(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,e===null?VS(t):Vt=e,xg.current=null}function VS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cT(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Vt=null;return}}else if(n=lT(n,e,Hn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Mo(t,e,n){var r=ft,i=lr.transition;try{lr.transition=null,ft=1,vT(t,e,n,r)}finally{lr.transition=i,ft=r}return null}function vT(t,e,n,r){do $s();while(Gi!==null);if(et&6)throw Error(se(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ZM(t,o),t===Qt&&(Vt=Qt=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cc||(Cc=!0,$S(Hu,function(){return $s(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=lr.transition,lr.transition=null;var s=ft;ft=1;var a=et;et|=4,xg.current=null,fT(t,n),OS(n,t),kw(np),Gu=!!tp,np=tp=null,t.current=n,dT(n),VM(),et=a,ft=s,lr.transition=o}else t.current=n;if(Cc&&(Cc=!1,Gi=t,sf=i),o=t.pendingLanes,o===0&&(qi=null),$M(n.stateNode),Pn(t,Nt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(of)throw of=!1,t=Ep,Ep=null,t;return sf&1&&t.tag!==0&&$s(),o=t.pendingLanes,o&1?t===Mp?gl++:(gl=0,Mp=t):gl=0,lo(),null}function $s(){if(Gi!==null){var t=Sx(sf),e=lr.transition,n=ft;try{if(lr.transition=null,ft=16>t?16:t,Gi===null)var r=!1;else{if(t=Gi,Gi=null,sf=0,et&6)throw Error(se(331));var i=et;for(et|=4,Me=t.current;Me!==null;){var o=Me,s=o.child;if(Me.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:pl(8,u,o)}var d=u.child;if(d!==null)d.return=u,Me=d;else for(;Me!==null;){u=Me;var h=u.sibling,p=u.return;if(DS(u),u===c){Me=null;break}if(h!==null){h.return=p,Me=h;break}Me=p}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Me=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Me=s;else e:for(;Me!==null;){if(o=Me,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pl(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,Me=f;break e}Me=o.return}}var x=t.current;for(Me=x;Me!==null;){s=Me;var S=s.child;if(s.subtreeFlags&2064&&S!==null)S.return=s,Me=S;else e:for(s=x;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Df(9,a)}}catch(T){It(a,a.return,T)}if(a===s){Me=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Me=_;break e}Me=a.return}}if(et=i,lo(),Gr&&typeof Gr.onPostCommitFiberRoot=="function")try{Gr.onPostCommitFiberRoot(Tf,t)}catch{}r=!0}return r}finally{ft=n,lr.transition=e}}return!1}function N0(t,e,n){e=ra(n,e),e=ES(t,e,1),t=Yi(t,e,1),e=vn(),t!==null&&(Yl(t,1,e),Pn(t,e))}function It(t,e,n){if(t.tag===3)N0(t,t,n);else for(;e!==null;){if(e.tag===3){N0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qi===null||!qi.has(r))){t=ra(n,t),t=MS(e,t,1),e=Yi(e,t,1),t=vn(),e!==null&&(Yl(e,1,t),Pn(e,t));break}}e=e.return}}function yT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(on&n)===n&&(Wt===4||Wt===3&&(on&130023424)===on&&500>Nt()-Eg?ko(t,0):Sg|=n),Pn(t,e)}function GS(t,e){e===0&&(t.mode&1?(e=yc,yc<<=1,!(yc&130023424)&&(yc=4194304)):e=1);var n=vn();t=xi(t,e),t!==null&&(Yl(t,e,n),Pn(t,n))}function _T(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),GS(t,n)}function xT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(se(314))}r!==null&&r.delete(e),GS(t,n)}var WS;WS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Cn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,aT(t,e,n);An=!!(t.flags&131072)}else An=!1,wt&&e.flags&1048576&&Xx(e,Ku,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yu(t,e),t=e.pendingProps;var i=Js(e,hn.current);Ws(e,n),i=mg(null,e,r,t,i,n);var o=gg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(r)?(o=!0,Yu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ug(e),i.updater=Lf,e.stateNode=i,i._reactInternals=e,fp(e,r,t,n),e=pp(null,e,r,!0,o,n)):(e.tag=0,wt&&o&&rg(e),gn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ET(r),t=Sr(r,t),i){case 0:e=hp(null,e,r,t,n);break e;case 1:e=w0(null,e,r,t,n);break e;case 11:e=E0(null,e,r,t,n);break e;case 14:e=M0(null,e,r,Sr(r.type,t),n);break e}throw Error(se(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sr(r,i),hp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sr(r,i),w0(t,e,r,i,n);case 3:e:{if(bS(e),t===null)throw Error(se(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Zx(t,e),Ju(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ra(Error(se(423)),e),e=T0(t,e,r,n,i);break e}else if(r!==i){i=ra(Error(se(424)),e),e=T0(t,e,r,n,i);break e}else for(Gn=Xi(e.stateNode.containerInfo.firstChild),Wn=e,wt=!0,Mr=null,n=tS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ea(),r===i){e=Si(t,e,n);break e}gn(t,e,r,n)}e=e.child}return e;case 5:return nS(e),t===null&&lp(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,rp(r,i)?s=null:o!==null&&rp(r,o)&&(e.flags|=32),AS(t,e),gn(t,e,s,n),e.child;case 6:return t===null&&lp(e),null;case 13:return CS(t,e,n);case 4:return fg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ta(e,null,r,n):gn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sr(r,i),E0(t,e,r,i,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,vt(Zu,r._currentValue),r._currentValue=s,o!==null)if(Lr(o.value,s)){if(o.children===i.children&&!Cn.current){e=Si(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cp(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(se(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}gn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ws(e,n),i=ur(i),r=r(i),e.flags|=1,gn(t,e,r,n),e.child;case 14:return r=e.type,i=Sr(r,e.pendingProps),i=Sr(r.type,i),M0(t,e,r,i,n);case 15:return wS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sr(r,i),yu(t,e),e.tag=1,Rn(r)?(t=!0,Yu(e)):t=!1,Ws(e,n),Jx(e,r,i),fp(e,r,i,n),pp(null,e,r,!0,t,n);case 19:return RS(t,e,n);case 22:return TS(t,e,n)}throw Error(se(156,e.tag))};function $S(t,e){return vx(t,e)}function ST(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(t,e,n,r){return new ST(t,e,n,r)}function Ag(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ET(t){if(typeof t=="function")return Ag(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$m)return 11;if(t===jm)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=ar(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Su(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Ag(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case As:return Fo(n.children,i,o,e);case Wm:s=8,i|=8;break;case Uh:return t=ar(12,n,e,i|2),t.elementType=Uh,t.lanes=o,t;case Oh:return t=ar(13,n,e,i),t.elementType=Oh,t.lanes=o,t;case kh:return t=ar(19,n,e,i),t.elementType=kh,t.lanes=o,t;case ex:return Uf(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q_:s=10;break e;case J_:s=9;break e;case $m:s=11;break e;case jm:s=14;break e;case ki:s=16,r=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=ar(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Fo(t,e,n,r){return t=ar(7,t,r,e),t.lanes=n,t}function Uf(t,e,n,r){return t=ar(22,t,r,e),t.elementType=ex,t.lanes=n,t.stateNode={isHidden:!1},t}function $d(t,e,n){return t=ar(6,t,null,e),t.lanes=n,t}function jd(t,e,n){return e=ar(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ad(0),this.expirationTimes=Ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ad(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bg(t,e,n,r,i,o,s,a,l){return t=new MT(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ar(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ug(o),t}function wT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jS(t){if(!t)return to;t=t._reactInternals;e:{if(Qo(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Rn(n))return $x(t,n,e)}return e}function XS(t,e,n,r,i,o,s,a,l){return t=bg(n,r,!0,t,i,o,s,a,l),t.context=jS(null),n=t.current,r=vn(),i=Ki(n),o=mi(r,i),o.callback=e??null,Yi(n,o,i),t.current.lanes=i,Yl(t,i,r),Pn(t,r),t}function Of(t,e,n,r){var i=e.current,o=vn(),s=Ki(i);return n=jS(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yi(i,e,s),t!==null&&(br(t,i,s,o),mu(t,i,s)),s}function lf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function U0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cg(t,e){U0(t,e),(t=t.alternate)&&U0(t,e)}var YS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rg(t){this._internalRoot=t}kf.prototype.render=Rg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Of(t,e,null,null)};kf.prototype.unmount=Rg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jo(function(){Of(null,t,null,null)}),e[_i]=null}};function kf(t){this._internalRoot=t}kf.prototype.unstable_scheduleHydration=function(t){if(t){var e=wx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&Ax(t)}};function Pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function O0(){}function TT(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=lf(s);o.call(c)}}var s=XS(e,r,t,0,null,!1,!1,"",O0);return t._reactRootContainer=s,t[_i]=s.current,Rl(t.nodeType===8?t.parentNode:t),jo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=lf(l);a.call(c)}}var l=bg(t,0,!1,null,null,!1,!1,"",O0);return t._reactRootContainer=l,t[_i]=l.current,Rl(t.nodeType===8?t.parentNode:t),jo(function(){Of(e,l,n,r)}),l}function Bf(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=lf(s);a.call(l)}}Of(e,s,t,i)}else s=TT(n,e,t,i,r);return lf(s)}Ex=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=tl(e.pendingLanes);n!==0&&(qm(e,n|1),Pn(e,Nt()),!(et&6)&&(ia=Nt()+500,lo()))}break;case 13:jo(function(){var r=xi(t,1);if(r!==null){var i=vn();br(r,t,1,i)}}),Cg(t,1)}};Km=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=vn();br(e,t,134217728,n)}Cg(t,134217728)}};Mx=function(t){if(t.tag===13){var e=Ki(t),n=xi(t,e);if(n!==null){var r=vn();br(n,t,e,r)}Cg(t,e)}};wx=function(){return ft};Tx=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};Xh=function(t,e,n){switch(e){case"input":if(zh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rf(r);if(!i)throw Error(se(90));nx(r),zh(r,i)}}}break;case"textarea":ix(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};fx=Mg;dx=jo;var AT={usingClientEntryPoint:!1,Events:[Kl,Ps,Rf,cx,ux,Mg]},Va={findFiberByHostInstance:Po,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bT={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mx(t),t===null?null:t.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{Tf=Rc.inject(bT),Gr=Rc}catch{}}qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AT;qn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pg(e))throw Error(se(200));return wT(t,e,null,n)};qn.createRoot=function(t,e){if(!Pg(t))throw Error(se(299));var n=!1,r="",i=YS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bg(t,1,!1,null,null,n,!1,r,i),t[_i]=e.current,Rl(t.nodeType===8?t.parentNode:t),new Rg(e)};qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=mx(e),t=t===null?null:t.stateNode,t};qn.flushSync=function(t){return jo(t)};qn.hydrate=function(t,e,n){if(!Ff(e))throw Error(se(200));return Bf(null,t,e,!0,n)};qn.hydrateRoot=function(t,e,n){if(!Pg(t))throw Error(se(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=YS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=XS(e,null,t,1,n??null,i,!1,o,s),t[_i]=e.current,Rl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kf(e)};qn.render=function(t,e,n){if(!Ff(e))throw Error(se(200));return Bf(null,t,e,!1,n)};qn.unmountComponentAtNode=function(t){if(!Ff(t))throw Error(se(40));return t._reactRootContainer?(jo(function(){Bf(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};qn.unstable_batchedUpdates=Mg;qn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ff(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Bf(t,e,n,!1,r)};qn.version="18.2.0-next-9e3b772b8-20220608";function qS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qS)}catch(t){console.error(t)}}qS(),X_.exports=qn;var Lg=X_.exports;const Pc=O_(Lg);var k0=Lg;Dh.createRoot=k0.createRoot,Dh.hydrateRoot=k0.hydrateRoot;function Hr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function KS(t){if(Z.isValidElement(t)||!Hr(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=KS(t[n])}),e}function $n(t,e,n={clone:!0}){const r=n.clone?{...t}:t;return Hr(t)&&Hr(e)&&Object.keys(e).forEach(i=>{Z.isValidElement(e[i])?r[i]=e[i]:Hr(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&Hr(t[i])?r[i]=$n(t[i],e[i],n):n.clone?r[i]=Hr(e[i])?KS(e[i]):e[i]:r[i]=e[i]}),r}function Xo(t,...e){const n=new URL(`https://mui.com/production-error/?code=${t}`);return e.forEach(r=>n.searchParams.append("args[]",r)),`Minified MUI error #${t}; visit ${n} for the full message.`}function $t(t){if(typeof t!="string")throw new Error(Xo(7));return t.charAt(0).toUpperCase()+t.slice(1)}function F0(t){return t&&t.ownerDocument||document}function Ap(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const Fl=typeof window<"u"?Z.useLayoutEffect:Z.useEffect;let B0=0;function CT(t){const[e,n]=Z.useState(t),r=t||e;return Z.useEffect(()=>{e==null&&(B0+=1,n(`mui-${B0}`))},[e]),r}const RT={...Ih},z0=RT.useId;function PT(t){if(z0!==void 0){const e=z0();return t??e}return CT(t)}function LT({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=Z.useRef(t!==void 0),[o,s]=Z.useState(e),a=i?t:o,l=Z.useCallback(c=>{i||s(c)},[]);return[a,l]}function js(t){const e=Z.useRef(t);return Fl(()=>{e.current=t}),Z.useRef((...n)=>(0,e.current)(...n)).current}function Ei(...t){return Z.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{Ap(n,e)})},t)}const H0={};function ZS(t,e){const n=Z.useRef(H0);return n.current===H0&&(n.current=t(e)),n}const IT=[];function DT(t){Z.useEffect(t,IT)}class zf{constructor(){Na(this,"currentId",null);Na(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Na(this,"disposeEffect",()=>this.clear)}static create(){return new zf}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function ks(){const t=ZS(zf.create).current;return DT(t.disposeEffect),t}function oa(t){try{return t.matches(":focus-visible")}catch{}return!1}function bp(t,e){const n={...e};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const i=r;if(i==="components"||i==="slots")n[i]={...t[i],...n[i]};else if(i==="componentsProps"||i==="slotProps"){const o=t[i],s=e[i];if(!s)n[i]=o||{};else if(!o)n[i]=s;else{n[i]={...s};for(const a in o)if(Object.prototype.hasOwnProperty.call(o,a)){const l=a;n[i][l]=bp(o[l],s[l])}}}else n[i]===void 0&&(n[i]=t[i])}return n}function Jo(t,e,n=void 0){const r={};for(const i in t){const o=t[i];let s="",a=!0;for(let l=0;l<o.length;l+=1){const c=o[l];c&&(s+=(a===!0?"":" ")+e(c),a=!1,n&&n[c]&&(s+=" "+n[c]))}r[i]=s}return r}const V0=t=>t,NT=()=>{let t=V0;return{configure(e){t=e},generate(e){return t(e)},reset(){t=V0}}},UT=NT(),OT={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function co(t,e,n="Mui"){const r=OT[e];return r?`${n}-${r}`:`${UT.generate(t)}-${e}`}function uo(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=co(t,i,n)}),r}function kT(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function FT(t){return typeof t=="string"}function QS(t,e,n){return t===void 0||FT(t)?e:{...e,ownerState:{...e.ownerState,...n}}}function JS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=JS(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Zt(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=JS(t))&&(r&&(r+=" "),r+=e);return r}function BT(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!e.includes(r)).forEach(r=>{n[r]=t[r]}),n}function G0(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function e1(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=t;if(!e){const p=Zt(n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),v={...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},y={...n,...i,...r};return p.length>0&&(y.className=p),Object.keys(v).length>0&&(y.style=v),{props:y,internalRef:void 0}}const s=BT({...i,...r}),a=G0(r),l=G0(i),c=e(s),u=Zt(c==null?void 0:c.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),d={...c==null?void 0:c.style,...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},h={...c,...n,...l,...a};return u.length>0&&(h.className=u),Object.keys(d).length>0&&(h.style=d),{props:h,internalRef:c.ref}}function t1(t,e,n){return typeof t=="function"?t(e,n):t}function zT(t){var d;const{elementType:e,externalSlotProps:n,ownerState:r,skipResolvingSlotProps:i=!1,...o}=t,s=i?{}:t1(n,r),{props:a,internalRef:l}=e1({...o,externalSlotProps:s}),c=Ei(l,s==null?void 0:s.ref,(d=t.additionalProps)==null?void 0:d.ref);return QS(e,{...a,ref:c},r)}function Ig(t){var e;return parseInt(Z.version,10)>=19?((e=t==null?void 0:t.props)==null?void 0:e.ref)||null:(t==null?void 0:t.ref)||null}function vl(t,e){return e?$n(t,e,{clone:!1}):t}function HT(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,i)=>{var s,a;const o=/min-width:\s*([0-9.]+)/;return+(((s=r.match(o))==null?void 0:s[1])||0)-+(((a=i.match(o))==null?void 0:a[1])||0)});return n.length?n.reduce((r,i)=>{const o=e[i];return delete r[i],r[i]=o,r},{...e}):e}function VT(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function GT(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,i]=n,o=Number.isNaN(+r)?r||0:+r;return t.containerQueries(i).up(o)}function WT(t){const e=(o,s)=>o.replace("@media",s?`@container ${s}`:"@container");function n(o,s){o.up=(...a)=>e(t.breakpoints.up(...a),s),o.down=(...a)=>e(t.breakpoints.down(...a),s),o.between=(...a)=>e(t.breakpoints.between(...a),s),o.only=(...a)=>e(t.breakpoints.only(...a),s),o.not=(...a)=>{const l=e(t.breakpoints.not(...a),s);return l.includes("not all and")?l.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):l}}const r={},i=o=>(n(r,o),r);return n(i),{...t,containerQueries:i}}const Hf={xs:0,sm:600,md:900,lg:1200,xl:1536},W0={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Hf[t]}px)`},$T={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:Hf[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function Mi(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||W0;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=r.breakpoints||W0;return Object.keys(e).reduce((s,a)=>{if(VT(o.keys,a)){const l=GT(r.containerQueries?r:$T,a);l&&(s[l]=n(e[a],a))}else if(Object.keys(o.values||Hf).includes(a)){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function jT(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function XT(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function sa(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function cf(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=sa(t,n)||r,e&&(i=e(i,r,t)),i}function kt(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,c=sa(l,r)||{};return Mi(s,a,d=>{let h=cf(c,i,d);return d===h&&typeof d=="string"&&(h=cf(c,i,`${e}${d==="default"?"":$t(d)}`,d)),n===!1?h:{[n]:h}})};return o.propTypes={},o.filterProps=[e],o}function YT(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const qT={m:"margin",p:"padding"},KT={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},$0={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},ZT=YT(t=>{if(t.length>2)if($0[t])t=$0[t];else return[t];const[e,n]=t.split(""),r=qT[e],i=KT[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),Dg=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ng=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Dg,...Ng];function Ql(t,e,n,r){const i=sa(t,e,!0)??n;return typeof i=="number"||typeof i=="string"?o=>typeof o=="string"?o:typeof i=="string"?`calc(${o} * ${i})`:i*o:Array.isArray(i)?o=>{if(typeof o=="string")return o;const s=Math.abs(o),a=i[s];return o>=0?a:typeof a=="number"?-a:`-${a}`}:typeof i=="function"?i:()=>{}}function Ug(t){return Ql(t,"spacing",8)}function Jl(t,e){return typeof e=="string"||e==null?e:t(e)}function QT(t,e){return n=>t.reduce((r,i)=>(r[i]=Jl(e,n),r),{})}function JT(t,e,n,r){if(!e.includes(n))return null;const i=ZT(n),o=QT(i,r),s=t[n];return Mi(t,s,o)}function n1(t,e){const n=Ug(t.theme);return Object.keys(t).map(r=>JT(t,e,r,n)).reduce(vl,{})}function Rt(t){return n1(t,Dg)}Rt.propTypes={};Rt.filterProps=Dg;function Pt(t){return n1(t,Ng)}Pt.propTypes={};Pt.filterProps=Ng;function Vf(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?vl(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function or(t){return typeof t!="number"?t:`${t}px solid`}function mr(t,e){return kt({prop:t,themeKey:"borders",transform:e})}const eA=mr("border",or),tA=mr("borderTop",or),nA=mr("borderRight",or),rA=mr("borderBottom",or),iA=mr("borderLeft",or),oA=mr("borderColor"),sA=mr("borderTopColor"),aA=mr("borderRightColor"),lA=mr("borderBottomColor"),cA=mr("borderLeftColor"),uA=mr("outline",or),fA=mr("outlineColor"),Gf=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Ql(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Jl(e,r)});return Mi(t,t.borderRadius,n)}return null};Gf.propTypes={};Gf.filterProps=["borderRadius"];Vf(eA,tA,nA,rA,iA,oA,sA,aA,lA,cA,Gf,uA,fA);const Wf=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Ql(t.theme,"spacing",8),n=r=>({gap:Jl(e,r)});return Mi(t,t.gap,n)}return null};Wf.propTypes={};Wf.filterProps=["gap"];const $f=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Ql(t.theme,"spacing",8),n=r=>({columnGap:Jl(e,r)});return Mi(t,t.columnGap,n)}return null};$f.propTypes={};$f.filterProps=["columnGap"];const jf=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Ql(t.theme,"spacing",8),n=r=>({rowGap:Jl(e,r)});return Mi(t,t.rowGap,n)}return null};jf.propTypes={};jf.filterProps=["rowGap"];const dA=kt({prop:"gridColumn"}),hA=kt({prop:"gridRow"}),pA=kt({prop:"gridAutoFlow"}),mA=kt({prop:"gridAutoColumns"}),gA=kt({prop:"gridAutoRows"}),vA=kt({prop:"gridTemplateColumns"}),yA=kt({prop:"gridTemplateRows"}),_A=kt({prop:"gridTemplateAreas"}),xA=kt({prop:"gridArea"});Vf(Wf,$f,jf,dA,hA,pA,mA,gA,vA,yA,_A,xA);function Xs(t,e){return e==="grey"?e:t}const SA=kt({prop:"color",themeKey:"palette",transform:Xs}),EA=kt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Xs}),MA=kt({prop:"backgroundColor",themeKey:"palette",transform:Xs});Vf(SA,EA,MA);function Vn(t){return t<=1&&t!==0?`${t*100}%`:t}const wA=kt({prop:"width",transform:Vn}),Og=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,o,s,a,l;const r=((s=(o=(i=t.theme)==null?void 0:i.breakpoints)==null?void 0:o.values)==null?void 0:s[n])||Hf[n];return r?((l=(a=t.theme)==null?void 0:a.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${r}${t.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:Vn(n)}};return Mi(t,t.maxWidth,e)}return null};Og.filterProps=["maxWidth"];const TA=kt({prop:"minWidth",transform:Vn}),AA=kt({prop:"height",transform:Vn}),bA=kt({prop:"maxHeight",transform:Vn}),CA=kt({prop:"minHeight",transform:Vn});kt({prop:"size",cssProperty:"width",transform:Vn});kt({prop:"size",cssProperty:"height",transform:Vn});const RA=kt({prop:"boxSizing"});Vf(wA,Og,TA,AA,bA,CA,RA);const ec={border:{themeKey:"borders",transform:or},borderTop:{themeKey:"borders",transform:or},borderRight:{themeKey:"borders",transform:or},borderBottom:{themeKey:"borders",transform:or},borderLeft:{themeKey:"borders",transform:or},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:or},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Gf},color:{themeKey:"palette",transform:Xs},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Xs},backgroundColor:{themeKey:"palette",transform:Xs},p:{style:Pt},pt:{style:Pt},pr:{style:Pt},pb:{style:Pt},pl:{style:Pt},px:{style:Pt},py:{style:Pt},padding:{style:Pt},paddingTop:{style:Pt},paddingRight:{style:Pt},paddingBottom:{style:Pt},paddingLeft:{style:Pt},paddingX:{style:Pt},paddingY:{style:Pt},paddingInline:{style:Pt},paddingInlineStart:{style:Pt},paddingInlineEnd:{style:Pt},paddingBlock:{style:Pt},paddingBlockStart:{style:Pt},paddingBlockEnd:{style:Pt},m:{style:Rt},mt:{style:Rt},mr:{style:Rt},mb:{style:Rt},ml:{style:Rt},mx:{style:Rt},my:{style:Rt},margin:{style:Rt},marginTop:{style:Rt},marginRight:{style:Rt},marginBottom:{style:Rt},marginLeft:{style:Rt},marginX:{style:Rt},marginY:{style:Rt},marginInline:{style:Rt},marginInlineStart:{style:Rt},marginInlineEnd:{style:Rt},marginBlock:{style:Rt},marginBlockStart:{style:Rt},marginBlockEnd:{style:Rt},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Wf},rowGap:{style:jf},columnGap:{style:$f},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Vn},maxWidth:{style:Og},minWidth:{transform:Vn},height:{transform:Vn},maxHeight:{transform:Vn},minHeight:{transform:Vn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function PA(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function LA(t,e){return typeof t=="function"?t(e):t}function IA(){function t(n,r,i,o){const s={[n]:r,theme:i},a=o[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:c,transform:u,style:d}=a;if(r==null)return null;if(c==="typography"&&r==="inherit")return{[n]:r};const h=sa(i,c)||{};return d?d(s):Mi(s,r,v=>{let y=cf(h,u,v);return v===y&&typeof v=="string"&&(y=cf(h,u,`${n}${v==="default"?"":$t(v)}`,v)),l===!1?y:{[l]:y}})}function e(n){const{sx:r,theme:i={}}=n||{};if(!r)return null;const o=i.unstable_sxConfig??ec;function s(a){let l=a;if(typeof a=="function")l=a(i);else if(typeof a!="object")return a;if(!l)return null;const c=jT(i.breakpoints),u=Object.keys(c);let d=c;return Object.keys(l).forEach(h=>{const p=LA(l[h],i);if(p!=null)if(typeof p=="object")if(o[h])d=vl(d,t(h,p,i,o));else{const v=Mi({theme:i},p,y=>({[h]:y}));PA(v,p)?d[h]=e({sx:p,theme:i}):d=vl(d,v)}else d=vl(d,t(h,p,i,o))}),HT(i,XT(u,d))}return Array.isArray(r)?r.map(s):s(r)}return e}const aa=IA();aa.filterProps=["sx"];const DA=t=>{var r;const e={systemProps:{},otherProps:{}},n=((r=t==null?void 0:t.theme)==null?void 0:r.unstable_sxConfig)??ec;return Object.keys(t).forEach(i=>{n[i]?e.systemProps[i]=t[i]:e.otherProps[i]=t[i]}),e};function NA(t){const{sx:e,...n}=t,{systemProps:r,otherProps:i}=DA(n);let o;return Array.isArray(e)?o=[r,...e]:typeof e=="function"?o=(...s)=>{const a=e(...s);return Hr(a)?{...r,...a}:r}:o={...r,...e},{...i,sx:o}}function uf(){return uf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uf.apply(null,arguments)}var UA=!1;function OA(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function kA(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var FA=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!UA:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(kA(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=OA(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},t}(),fn="-ms-",ff="-moz-",it="-webkit-",r1="comm",kg="rule",Fg="decl",BA="@import",i1="@keyframes",zA="@layer",HA=Math.abs,Xf=String.fromCharCode,VA=Object.assign;function GA(t,e){return nn(t,0)^45?(((e<<2^nn(t,0))<<2^nn(t,1))<<2^nn(t,2))<<2^nn(t,3):0}function o1(t){return t.trim()}function WA(t,e){return(t=e.exec(t))?t[0]:t}function ot(t,e,n){return t.replace(e,n)}function Cp(t,e){return t.indexOf(e)}function nn(t,e){return t.charCodeAt(e)|0}function Bl(t,e,n){return t.slice(e,n)}function Or(t){return t.length}function Bg(t){return t.length}function Lc(t,e){return e.push(t),t}function $A(t,e){return t.map(e).join("")}var Yf=1,la=1,s1=0,On=0,zt=0,Ca="";function qf(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Yf,column:la,length:s,return:""}}function Ga(t,e){return VA(qf("",null,null,"",null,null,0),t,{length:-t.length},e)}function jA(){return zt}function XA(){return zt=On>0?nn(Ca,--On):0,la--,zt===10&&(la=1,Yf--),zt}function jn(){return zt=On<s1?nn(Ca,On++):0,la++,zt===10&&(la=1,Yf++),zt}function $r(){return nn(Ca,On)}function Eu(){return On}function tc(t,e){return Bl(Ca,t,e)}function zl(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function a1(t){return Yf=la=1,s1=Or(Ca=t),On=0,[]}function l1(t){return Ca="",t}function Mu(t){return o1(tc(On-1,Rp(t===91?t+2:t===40?t+1:t)))}function YA(t){for(;(zt=$r())&&zt<33;)jn();return zl(t)>2||zl(zt)>3?"":" "}function qA(t,e){for(;--e&&jn()&&!(zt<48||zt>102||zt>57&&zt<65||zt>70&&zt<97););return tc(t,Eu()+(e<6&&$r()==32&&jn()==32))}function Rp(t){for(;jn();)switch(zt){case t:return On;case 34:case 39:t!==34&&t!==39&&Rp(zt);break;case 40:t===41&&Rp(t);break;case 92:jn();break}return On}function KA(t,e){for(;jn()&&t+zt!==57;)if(t+zt===84&&$r()===47)break;return"/*"+tc(e,On-1)+"*"+Xf(t===47?t:jn())}function ZA(t){for(;!zl($r());)jn();return tc(t,On)}function QA(t){return l1(wu("",null,null,null,[""],t=a1(t),0,[0],t))}function wu(t,e,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,h=0,p=0,v=0,y=1,g=1,f=1,x=0,S="",_=i,T=o,w=r,M=S;g;)switch(v=x,x=jn()){case 40:if(v!=108&&nn(M,d-1)==58){Cp(M+=ot(Mu(x),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:M+=Mu(x);break;case 9:case 10:case 13:case 32:M+=YA(v);break;case 92:M+=qA(Eu()-1,7);continue;case 47:switch($r()){case 42:case 47:Lc(JA(KA(jn(),Eu()),e,n),l);break;default:M+="/"}break;case 123*y:a[c++]=Or(M)*f;case 125*y:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+u:f==-1&&(M=ot(M,/\f/g,"")),p>0&&Or(M)-d&&Lc(p>32?X0(M+";",r,n,d-1):X0(ot(M," ","")+";",r,n,d-2),l);break;case 59:M+=";";default:if(Lc(w=j0(M,e,n,c,u,i,a,S,_=[],T=[],d),o),x===123)if(u===0)wu(M,e,w,w,_,o,d,a,T);else switch(h===99&&nn(M,3)===110?100:h){case 100:case 108:case 109:case 115:wu(t,w,w,r&&Lc(j0(t,w,w,0,0,i,a,S,i,_=[],d),T),i,T,d,a,r?_:T);break;default:wu(M,w,w,w,[""],T,0,a,T)}}c=u=p=0,y=f=1,S=M="",d=s;break;case 58:d=1+Or(M),p=v;default:if(y<1){if(x==123)--y;else if(x==125&&y++==0&&XA()==125)continue}switch(M+=Xf(x),x*y){case 38:f=u>0?1:(M+="\f",-1);break;case 44:a[c++]=(Or(M)-1)*f,f=1;break;case 64:$r()===45&&(M+=Mu(jn())),h=$r(),u=d=Or(S=M+=ZA(Eu())),x++;break;case 45:v===45&&Or(M)==2&&(y=0)}}return o}function j0(t,e,n,r,i,o,s,a,l,c,u){for(var d=i-1,h=i===0?o:[""],p=Bg(h),v=0,y=0,g=0;v<r;++v)for(var f=0,x=Bl(t,d+1,d=HA(y=s[v])),S=t;f<p;++f)(S=o1(y>0?h[f]+" "+x:ot(x,/&\f/g,h[f])))&&(l[g++]=S);return qf(t,e,n,i===0?kg:a,l,c,u)}function JA(t,e,n){return qf(t,e,n,r1,Xf(jA()),Bl(t,2,-2),0)}function X0(t,e,n,r){return qf(t,e,n,Fg,Bl(t,0,r),Bl(t,r+1,-1),r)}function Ys(t,e){for(var n="",r=Bg(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function eb(t,e,n,r){switch(t.type){case zA:if(t.children.length)break;case BA:case Fg:return t.return=t.return||t.value;case r1:return"";case i1:return t.return=t.value+"{"+Ys(t.children,r)+"}";case kg:t.value=t.props.join(",")}return Or(n=Ys(t.children,r))?t.return=t.value+"{"+n+"}":""}function tb(t){var e=Bg(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function nb(t){return function(e){e.root||(e=e.return)&&t(e)}}function c1(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var rb=function(e,n,r){for(var i=0,o=0;i=o,o=$r(),i===38&&o===12&&(n[r]=1),!zl(o);)jn();return tc(e,On)},ib=function(e,n){var r=-1,i=44;do switch(zl(i)){case 0:i===38&&$r()===12&&(n[r]=1),e[r]+=rb(On-1,n,r);break;case 2:e[r]+=Mu(i);break;case 4:if(i===44){e[++r]=$r()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Xf(i)}while(i=jn());return e},ob=function(e,n){return l1(ib(a1(e),n))},Y0=new WeakMap,sb=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Y0.get(r))&&!i){Y0.set(e,!0);for(var o=[],s=ob(n,o),a=r.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},ab=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function u1(t,e){switch(GA(t,e)){case 5103:return it+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return it+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return it+t+ff+t+fn+t+t;case 6828:case 4268:return it+t+fn+t+t;case 6165:return it+t+fn+"flex-"+t+t;case 5187:return it+t+ot(t,/(\w+).+(:[^]+)/,it+"box-$1$2"+fn+"flex-$1$2")+t;case 5443:return it+t+fn+"flex-item-"+ot(t,/flex-|-self/,"")+t;case 4675:return it+t+fn+"flex-line-pack"+ot(t,/align-content|flex-|-self/,"")+t;case 5548:return it+t+fn+ot(t,"shrink","negative")+t;case 5292:return it+t+fn+ot(t,"basis","preferred-size")+t;case 6060:return it+"box-"+ot(t,"-grow","")+it+t+fn+ot(t,"grow","positive")+t;case 4554:return it+ot(t,/([^-])(transform)/g,"$1"+it+"$2")+t;case 6187:return ot(ot(ot(t,/(zoom-|grab)/,it+"$1"),/(image-set)/,it+"$1"),t,"")+t;case 5495:case 3959:return ot(t,/(image-set\([^]*)/,it+"$1$`$1");case 4968:return ot(ot(t,/(.+:)(flex-)?(.*)/,it+"box-pack:$3"+fn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+it+t+t;case 4095:case 3583:case 4068:case 2532:return ot(t,/(.+)-inline(.+)/,it+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Or(t)-1-e>6)switch(nn(t,e+1)){case 109:if(nn(t,e+4)!==45)break;case 102:return ot(t,/(.+:)(.+)-([^]+)/,"$1"+it+"$2-$3$1"+ff+(nn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Cp(t,"stretch")?u1(ot(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(nn(t,e+1)!==115)break;case 6444:switch(nn(t,Or(t)-3-(~Cp(t,"!important")&&10))){case 107:return ot(t,":",":"+it)+t;case 101:return ot(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+it+(nn(t,14)===45?"inline-":"")+"box$3$1"+it+"$2$3$1"+fn+"$2box$3")+t}break;case 5936:switch(nn(t,e+11)){case 114:return it+t+fn+ot(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return it+t+fn+ot(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return it+t+fn+ot(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return it+t+fn+t+t}return t}var lb=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Fg:e.return=u1(e.value,e.length);break;case i1:return Ys([Ga(e,{value:ot(e.value,"@","@"+it)})],i);case kg:if(e.length)return $A(e.props,function(o){switch(WA(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ys([Ga(e,{props:[ot(o,/:(read-\w+)/,":"+ff+"$1")]})],i);case"::placeholder":return Ys([Ga(e,{props:[ot(o,/:(plac\w+)/,":"+it+"input-$1")]}),Ga(e,{props:[ot(o,/:(plac\w+)/,":"+ff+"$1")]}),Ga(e,{props:[ot(o,/:(plac\w+)/,fn+"input-$1")]})],i)}return""})}},cb=[lb],ub=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var g=y.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=e.stylisPlugins||cb,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var g=y.getAttribute("data-emotion").split(" "),f=1;f<g.length;f++)o[g[f]]=!0;a.push(y)});var l,c=[sb,ab];{var u,d=[eb,nb(function(y){u.insert(y)})],h=tb(c.concat(i,d)),p=function(g){return Ys(QA(g),h)};l=function(g,f,x,S){u=x,p(g?g+"{"+f.styles+"}":f.styles),S&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new FA({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v},f1={exports:{}},dt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=typeof Symbol=="function"&&Symbol.for,zg=Jt?Symbol.for("react.element"):60103,Hg=Jt?Symbol.for("react.portal"):60106,Kf=Jt?Symbol.for("react.fragment"):60107,Zf=Jt?Symbol.for("react.strict_mode"):60108,Qf=Jt?Symbol.for("react.profiler"):60114,Jf=Jt?Symbol.for("react.provider"):60109,ed=Jt?Symbol.for("react.context"):60110,Vg=Jt?Symbol.for("react.async_mode"):60111,td=Jt?Symbol.for("react.concurrent_mode"):60111,nd=Jt?Symbol.for("react.forward_ref"):60112,rd=Jt?Symbol.for("react.suspense"):60113,fb=Jt?Symbol.for("react.suspense_list"):60120,id=Jt?Symbol.for("react.memo"):60115,od=Jt?Symbol.for("react.lazy"):60116,db=Jt?Symbol.for("react.block"):60121,hb=Jt?Symbol.for("react.fundamental"):60117,pb=Jt?Symbol.for("react.responder"):60118,mb=Jt?Symbol.for("react.scope"):60119;function Zn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case zg:switch(t=t.type,t){case Vg:case td:case Kf:case Qf:case Zf:case rd:return t;default:switch(t=t&&t.$$typeof,t){case ed:case nd:case od:case id:case Jf:return t;default:return e}}case Hg:return e}}}function d1(t){return Zn(t)===td}dt.AsyncMode=Vg;dt.ConcurrentMode=td;dt.ContextConsumer=ed;dt.ContextProvider=Jf;dt.Element=zg;dt.ForwardRef=nd;dt.Fragment=Kf;dt.Lazy=od;dt.Memo=id;dt.Portal=Hg;dt.Profiler=Qf;dt.StrictMode=Zf;dt.Suspense=rd;dt.isAsyncMode=function(t){return d1(t)||Zn(t)===Vg};dt.isConcurrentMode=d1;dt.isContextConsumer=function(t){return Zn(t)===ed};dt.isContextProvider=function(t){return Zn(t)===Jf};dt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===zg};dt.isForwardRef=function(t){return Zn(t)===nd};dt.isFragment=function(t){return Zn(t)===Kf};dt.isLazy=function(t){return Zn(t)===od};dt.isMemo=function(t){return Zn(t)===id};dt.isPortal=function(t){return Zn(t)===Hg};dt.isProfiler=function(t){return Zn(t)===Qf};dt.isStrictMode=function(t){return Zn(t)===Zf};dt.isSuspense=function(t){return Zn(t)===rd};dt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Kf||t===td||t===Qf||t===Zf||t===rd||t===fb||typeof t=="object"&&t!==null&&(t.$$typeof===od||t.$$typeof===id||t.$$typeof===Jf||t.$$typeof===ed||t.$$typeof===nd||t.$$typeof===hb||t.$$typeof===pb||t.$$typeof===mb||t.$$typeof===db)};dt.typeOf=Zn;f1.exports=dt;var gb=f1.exports,h1=gb,vb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p1={};p1[h1.ForwardRef]=vb;p1[h1.Memo]=yb;var _b=!0;function m1(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):i&&(r+=i+" ")}),r}var Gg=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||_b===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},g1=function(e,n,r){Gg(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function xb(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Sb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Eb=/[A-Z]|^ms/g,Mb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,v1=function(e){return e.charCodeAt(1)===45},q0=function(e){return e!=null&&typeof e!="boolean"},Xd=c1(function(t){return v1(t)?t:t.replace(Eb,"-$&").toLowerCase()}),K0=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Mb,function(r,i,o){return kr={name:i,styles:o,next:kr},i})}return Sb[e]!==1&&!v1(e)&&typeof n=="number"&&n!==0?n+"px":n};function Hl(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return kr={name:i.name,styles:i.styles,next:kr},i.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)kr={name:s.name,styles:s.styles,next:kr},s=s.next;var a=o.styles+";";return a}return wb(t,e,n)}case"function":{if(t!==void 0){var l=kr,c=n(t);return kr=l,Hl(t,e,c)}break}}var u=n;if(e==null)return u;var d=e[u];return d!==void 0?d:u}function wb(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Hl(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;e!=null&&e[a]!==void 0?r+=o+"{"+e[a]+"}":q0(a)&&(r+=Xd(o)+":"+K0(o,a)+";")}else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)q0(s[l])&&(r+=Xd(o)+":"+K0(o,s[l])+";");else{var c=Hl(t,e,s);switch(o){case"animation":case"animationName":{r+=Xd(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}return r}var Z0=/label:\s*([^\s;{]+)\s*(;|$)/g,kr;function sd(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,i="";kr=void 0;var o=t[0];if(o==null||o.raw===void 0)r=!1,i+=Hl(n,e,o);else{var s=o;i+=s[0]}for(var a=1;a<t.length;a++)if(i+=Hl(n,e,t[a]),r){var l=o;i+=l[a]}Z0.lastIndex=0;for(var c="",u;(u=Z0.exec(i))!==null;)c+="-"+u[1];var d=xb(i)+c;return{name:d,styles:i,next:kr}}var Tb=function(e){return e()},Ab=Ih.useInsertionEffect?Ih.useInsertionEffect:!1,y1=Ab||Tb,bb=!1,_1=Z.createContext(typeof HTMLElement<"u"?ub({key:"css"}):null);_1.Provider;var x1=function(e){return Z.forwardRef(function(n,r){var i=Z.useContext(_1);return e(n,i,r)})},Wg=Z.createContext({}),$g={}.hasOwnProperty,Pp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Cb=function(e,n){var r={};for(var i in n)$g.call(n,i)&&(r[i]=n[i]);return r[Pp]=e,r},Rb=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Gg(n,r,i),y1(function(){return g1(n,r,i)}),null},Pb=x1(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var i=t[Pp],o=[r],s="";typeof t.className=="string"?s=m1(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var a=sd(o,void 0,Z.useContext(Wg));s+=e.key+"-"+a.name;var l={};for(var c in t)$g.call(t,c)&&c!=="css"&&c!==Pp&&!bb&&(l[c]=t[c]);return l.className=s,n&&(l.ref=n),Z.createElement(Z.Fragment,null,Z.createElement(Rb,{cache:e,serialized:a,isStringTag:typeof i=="string"}),Z.createElement(i,l))}),Lb=Pb,Ib=function(e,n){var r=arguments;if(n==null||!$g.call(n,"css"))return Z.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=Lb,o[1]=Cb(e,n);for(var s=2;s<i;s++)o[s]=r[s];return Z.createElement.apply(null,o)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(Ib);function Db(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return sd(e)}function jg(){var t=Db.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Nb=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ub=c1(function(t){return Nb.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Ob=Ub,kb=function(e){return e!=="theme"},Q0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Ob:kb},J0=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Fb=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Gg(n,r,i),y1(function(){return g1(n,r,i)}),null},Bb=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=J0(e,n,r),l=a||Q0(i),c=!l("as");return function(){var u=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var h=u[0];d.push(h[0]);for(var p=u.length,v=1;v<p;v++)d.push(u[v],h[v])}var y=x1(function(g,f,x){var S=c&&g.as||i,_="",T=[],w=g;if(g.theme==null){w={};for(var M in g)w[M]=g[M];w.theme=Z.useContext(Wg)}typeof g.className=="string"?_=m1(f.registered,T,g.className):g.className!=null&&(_=g.className+" ");var L=sd(d.concat(T),f.registered,w);_+=f.key+"-"+L.name,s!==void 0&&(_+=" "+s);var A=c&&a===void 0?Q0(S):l,m={};for(var C in g)c&&C==="as"||A(C)&&(m[C]=g[C]);return m.className=_,x&&(m.ref=x),Z.createElement(Z.Fragment,null,Z.createElement(Fb,{cache:f,serialized:L,isStringTag:typeof S=="string"}),Z.createElement(S,m))});return y.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=e.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=d,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(g,f){var x=t(g,uf({},n,f,{shouldForwardProp:J0(y,f,!0)}));return x.apply(void 0,d)},y}},zb=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Lp=Bb.bind(null);zb.forEach(function(t){Lp[t]=Lp(t)});/**
 * @mui/styled-engine v6.2.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Hb(t,e){return Lp(t,e)}function Vb(t,e){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))}const ey=[];function ty(t){return ey[0]=t,sd(ey)}const Gb=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function Wb(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=t,o=Gb(e),s=Object.keys(o);function a(h){return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n})`}function l(h){return`@media (max-width:${(typeof e[h]=="number"?e[h]:h)-r/100}${n})`}function c(h,p){const v=s.indexOf(p);return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n}) and (max-width:${(v!==-1&&typeof e[s[v]]=="number"?e[s[v]]:p)-r/100}${n})`}function u(h){return s.indexOf(h)+1<s.length?c(h,s[s.indexOf(h)+1]):a(h)}function d(h){const p=s.indexOf(h);return p===0?a(s[1]):p===s.length-1?l(s[p]):c(h,s[s.indexOf(h)+1]).replace("@media","@media not all and")}return{keys:s,values:o,up:a,down:l,between:c,only:u,not:d,unit:n,...i}}const $b={borderRadius:4};function S1(t=8,e=Ug({spacing:t})){if(t.mui)return t;const n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function jb(t,e){var r;const n=this;if(n.vars){if(!((r=n.colorSchemes)!=null&&r[t])||typeof n.getColorSchemeSelector!="function")return{};let i=n.getColorSchemeSelector(t);return i==="&"?e:((i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:e})}return n.palette.mode===t?e:{}}function Xg(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={},...s}=t,a=Wb(n),l=S1(i);let c=$n({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:l,shape:{...$b,...o}},s);return c=WT(c),c.applyStyles=jb,c=e.reduce((u,d)=>$n(u,d),c),c.unstable_sxConfig={...ec,...s==null?void 0:s.unstable_sxConfig},c.unstable_sx=function(d){return aa({sx:d,theme:this})},c}function Xb(t){return Object.keys(t).length===0}function Yb(t=null){const e=Z.useContext(Wg);return!e||Xb(e)?t:e}const qb=Xg();function Kb(t=qb){return Yb(t)}function E1(t){const{variants:e,...n}=t,r={variants:e,style:ty(n),isProcessed:!0};return r.style===n||e&&e.forEach(i=>{typeof i.style!="function"&&(i.style=ty(i.style))}),r}const Zb=Xg();function Yd(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function Qb(t){return t?(e,n)=>n[t]:null}function Jb(t,e,n){t.theme=nC(t.theme)?n:t.theme[e]||t.theme}function Tu(t,e){const n=typeof e=="function"?e(t):e;if(Array.isArray(n))return n.flatMap(r=>Tu(t,r));if(Array.isArray(n==null?void 0:n.variants)){let r;if(n.isProcessed)r=n.style;else{const{variants:i,...o}=n;r=o}return M1(t,n.variants,[r])}return n!=null&&n.isProcessed?n.style:n}function M1(t,e,n=[]){var i;let r;e:for(let o=0;o<e.length;o+=1){const s=e[o];if(typeof s.props=="function"){if(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),!s.props(r))continue}else for(const a in s.props)if(t[a]!==s.props[a]&&((i=t.ownerState)==null?void 0:i[a])!==s.props[a])continue e;typeof s.style=="function"?(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),n.push(s.style(r))):n.push(s.style)}return n}function eC(t={}){const{themeId:e,defaultTheme:n=Zb,rootShouldForwardProp:r=Yd,slotShouldForwardProp:i=Yd}=t;function o(a){Jb(a,e,n)}return(a,l={})=>{Vb(a,T=>T.filter(w=>w!==aa));const{name:c,slot:u,skipVariantsResolver:d,skipSx:h,overridesResolver:p=Qb(iC(u)),...v}=l,y=d!==void 0?d:u&&u!=="Root"&&u!=="root"||!1,g=h||!1;let f=Yd;u==="Root"||u==="root"?f=r:u?f=i:rC(a)&&(f=void 0);const x=Hb(a,{shouldForwardProp:f,label:tC(),...v}),S=T=>{if(typeof T=="function"&&T.__emotion_real!==T)return function(M){return Tu(M,T)};if(Hr(T)){const w=E1(T);return w.variants?function(L){return Tu(L,w)}:w.style}return T},_=(...T)=>{const w=[],M=T.map(S),L=[];if(w.push(o),c&&p&&L.push(function(O){var B,Y;const H=(Y=(B=O.theme.components)==null?void 0:B[c])==null?void 0:Y.styleOverrides;if(!H)return null;const G={};for(const I in H)G[I]=Tu(O,H[I]);return p(O,G)}),c&&!y&&L.push(function(O){var G,B;const N=O.theme,H=(B=(G=N==null?void 0:N.components)==null?void 0:G[c])==null?void 0:B.variants;return H?M1(O,H):null}),g||L.push(aa),Array.isArray(M[0])){const C=M.shift(),O=new Array(w.length).fill(""),N=new Array(L.length).fill("");let H;H=[...O,...C,...N],H.raw=[...O,...C.raw,...N],w.unshift(H)}const A=[...w,...M,...L],m=x(...A);return a.muiName&&(m.muiName=a.muiName),m};return x.withConfig&&(_.withConfig=x.withConfig),_}}function tC(t,e){return void 0}function nC(t){for(const e in t)return!1;return!0}function rC(t){return typeof t=="string"&&t.charCodeAt(0)>96}function iC(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}function Yg(t,e=0,n=1){return kT(t,e,n)}function oC(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function no(t){if(t.type)return t;if(t.charAt(0)==="#")return no(oC(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(Xo(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(i))throw new Error(Xo(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}const sC=t=>{const e=no(t);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},rl=(t,e)=>{try{return sC(t)}catch{return t}};function ad(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.includes("rgb")?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function w1(t){t=no(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(c,u=(c+n/30)%12)=>i-o*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),ad({type:a,values:l})}function Ip(t){t=no(t);let e=t.type==="hsl"||t.type==="hsla"?no(w1(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function aC(t,e){const n=Ip(t),r=Ip(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function gi(t,e){return t=no(t),e=Yg(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,ad(t)}function Ic(t,e,n){try{return gi(t,e)}catch{return t}}function qg(t,e){if(t=no(t),e=Yg(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return ad(t)}function pt(t,e,n){try{return qg(t,e)}catch{return t}}function Kg(t,e){if(t=no(t),e=Yg(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return ad(t)}function mt(t,e,n){try{return Kg(t,e)}catch{return t}}function lC(t,e=.15){return Ip(t)>.5?qg(t,e):Kg(t,e)}function Dc(t,e,n){try{return lC(t,e)}catch{return t}}const cC=Z.createContext(),T1=()=>Z.useContext(cC)??!1,uC=Z.createContext(void 0);function fC(t){const{theme:e,name:n,props:r}=t;if(!e||!e.components||!e.components[n])return r;const i=e.components[n];return i.defaultProps?bp(i.defaultProps,r):!i.styleOverrides&&!i.variants?bp(i,r):r}function dC({props:t,name:e}){const n=Z.useContext(uC);return fC({props:t,name:e,theme:{components:n}})}const ny={theme:void 0};function hC(t){let e,n;return function(i){let o=e;return(o===void 0||i.theme!==n)&&(ny.theme=i.theme,o=E1(t(ny)),e=o,n=i.theme),o}}function pC(t=""){function e(...r){if(!r.length)return"";const i=r[0];return typeof i=="string"&&!i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${i}${e(...r.slice(1))})`:`, ${i}`}return(r,...i)=>`var(--${t?`${t}-`:""}${r}${e(...i)})`}const ry=(t,e,n,r=[])=>{let i=t;e.forEach((o,s)=>{s===e.length-1?Array.isArray(i)?i[Number(o)]=n:i&&typeof i=="object"&&(i[o]=n):i&&typeof i=="object"&&(i[o]||(i[o]=r.includes(o)?[]:{}),i=i[o])})},mC=(t,e,n)=>{function r(i,o=[],s=[]){Object.entries(i).forEach(([a,l])=>{(!n||!n([...o,a]))&&l!=null&&(typeof l=="object"&&Object.keys(l).length>0?r(l,[...o,a],Array.isArray(l)?[...s,a]:s):e([...o,a],l,s))})}r(t)},gC=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>t.includes(r))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function qd(t,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},i={},o={},s={};return mC(t,(a,l,c)=>{if((typeof l=="string"||typeof l=="number")&&(!r||!r(a,l))){const u=`--${n?`${n}-`:""}${a.join("-")}`,d=gC(a,l);Object.assign(i,{[u]:d}),ry(o,a,`var(${u})`,c),ry(s,a,`var(${u}, ${d})`,c)}},a=>a[0]==="vars"),{css:i,vars:o,varsWithDefaults:s}}function vC(t,e={}){const{getSelector:n=g,disableCssColorScheme:r,colorSchemeSelector:i}=e,{colorSchemes:o={},components:s,defaultColorScheme:a="light",...l}=t,{vars:c,css:u,varsWithDefaults:d}=qd(l,e);let h=d;const p={},{[a]:v,...y}=o;if(Object.entries(y||{}).forEach(([S,_])=>{const{vars:T,css:w,varsWithDefaults:M}=qd(_,e);h=$n(h,M),p[S]={css:w,vars:T}}),v){const{css:S,vars:_,varsWithDefaults:T}=qd(v,e);h=$n(h,T),p[a]={css:S,vars:_}}function g(S,_){var w,M;let T=i;if(i==="class"&&(T=".%s"),i==="data"&&(T="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(T=`[${i}="%s"]`),S){if(T==="media")return t.defaultColorScheme===S?":root":{[`@media (prefers-color-scheme: ${((M=(w=o[S])==null?void 0:w.palette)==null?void 0:M.mode)||S})`]:{":root":_}};if(T)return t.defaultColorScheme===S?`:root, ${T.replace("%s",String(S))}`:T.replace("%s",String(S))}return":root"}return{vars:h,generateThemeVars:()=>{let S={...c};return Object.entries(p).forEach(([,{vars:_}])=>{S=$n(S,_)}),S},generateStyleSheets:()=>{var L,A;const S=[],_=t.defaultColorScheme||"light";function T(m,C){Object.keys(C).length&&S.push(typeof m=="string"?{[m]:{...C}}:m)}T(n(void 0,{...u}),u);const{[_]:w,...M}=p;if(w){const{css:m}=w,C=(A=(L=o[_])==null?void 0:L.palette)==null?void 0:A.mode,O=!r&&C?{colorScheme:C,...m}:{...m};T(n(_,{...O}),O)}return Object.entries(M).forEach(([m,{css:C}])=>{var H,G;const O=(G=(H=o[m])==null?void 0:H.palette)==null?void 0:G.mode,N=!r&&O?{colorScheme:O,...C}:{...C};T(n(m,{...N}),N)}),S}}}function yC(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}const Vl={black:"#000",white:"#fff"},_C={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},ns={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},rs={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Wa={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},is={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},os={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ss={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function A1(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Vl.white,default:Vl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const xC=A1();function b1(){return{text:{primary:Vl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Vl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const iy=b1();function oy(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=Kg(t.main,i):e==="dark"&&(t.dark=qg(t.main,o)))}function SC(t="light"){return t==="dark"?{main:is[200],light:is[50],dark:is[400]}:{main:is[700],light:is[400],dark:is[800]}}function EC(t="light"){return t==="dark"?{main:ns[200],light:ns[50],dark:ns[400]}:{main:ns[500],light:ns[300],dark:ns[700]}}function MC(t="light"){return t==="dark"?{main:rs[500],light:rs[300],dark:rs[700]}:{main:rs[700],light:rs[400],dark:rs[800]}}function wC(t="light"){return t==="dark"?{main:os[400],light:os[300],dark:os[700]}:{main:os[700],light:os[500],dark:os[900]}}function TC(t="light"){return t==="dark"?{main:ss[400],light:ss[300],dark:ss[700]}:{main:ss[800],light:ss[500],dark:ss[900]}}function AC(t="light"){return t==="dark"?{main:Wa[400],light:Wa[300],dark:Wa[700]}:{main:"#ed6c02",light:Wa[500],dark:Wa[900]}}function Zg(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=t,o=t.primary||SC(e),s=t.secondary||EC(e),a=t.error||MC(e),l=t.info||wC(e),c=t.success||TC(e),u=t.warning||AC(e);function d(y){return aC(y,iy.text.primary)>=n?iy.text.primary:xC.text.primary}const h=({color:y,name:g,mainShade:f=500,lightShade:x=300,darkShade:S=700})=>{if(y={...y},!y.main&&y[f]&&(y.main=y[f]),!y.hasOwnProperty("main"))throw new Error(Xo(11,g?` (${g})`:"",f));if(typeof y.main!="string")throw new Error(Xo(12,g?` (${g})`:"",JSON.stringify(y.main)));return oy(y,"light",x,r),oy(y,"dark",S,r),y.contrastText||(y.contrastText=d(y.main)),y};let p;return e==="light"?p=A1():e==="dark"&&(p=b1()),$n({common:{...Vl},mode:e,primary:h({color:o,name:"primary"}),secondary:h({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:a,name:"error"}),warning:h({color:u,name:"warning"}),info:h({color:l,name:"info"}),success:h({color:c,name:"success"}),grey:_C,contrastThreshold:n,getContrastText:d,augmentColor:h,tonalOffset:r,...p},i)}function bC(t){const e={};return Object.entries(t).forEach(r=>{const[i,o]=r;typeof o=="object"&&(e[i]=`${o.fontStyle?`${o.fontStyle} `:""}${o.fontVariant?`${o.fontVariant} `:""}${o.fontWeight?`${o.fontWeight} `:""}${o.fontStretch?`${o.fontStretch} `:""}${o.fontSize||""}${o.lineHeight?`/${o.lineHeight} `:""}${o.fontFamily||""}`)}),e}function CC(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function RC(t){return Math.round(t*1e5)/1e5}const sy={textTransform:"uppercase"},ay='"Roboto", "Helvetica", "Arial", sans-serif';function PC(t,e){const{fontFamily:n=ay,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:a=700,htmlFontSize:l=16,allVariants:c,pxToRem:u,...d}=typeof e=="function"?e(t):e,h=r/14,p=u||(g=>`${g/l*h}rem`),v=(g,f,x,S,_)=>({fontFamily:n,fontWeight:g,fontSize:p(f),lineHeight:x,...n===ay?{letterSpacing:`${RC(S/f)}em`}:{},..._,...c}),y={h1:v(i,96,1.167,-1.5),h2:v(i,60,1.2,-.5),h3:v(o,48,1.167,0),h4:v(o,34,1.235,.25),h5:v(o,24,1.334,0),h6:v(s,20,1.6,.15),subtitle1:v(o,16,1.75,.15),subtitle2:v(s,14,1.57,.1),body1:v(o,16,1.5,.15),body2:v(o,14,1.43,.15),button:v(s,14,1.75,.4,sy),caption:v(o,12,1.66,.4),overline:v(o,12,2.66,1,sy),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return $n({htmlFontSize:l,pxToRem:p,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:a,...y},d,{clone:!1})}const LC=.2,IC=.14,DC=.12;function Mt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${LC})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${IC})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${DC})`].join(",")}const NC=["none",Mt(0,2,1,-1,0,1,1,0,0,1,3,0),Mt(0,3,1,-2,0,2,2,0,0,1,5,0),Mt(0,3,3,-2,0,3,4,0,0,1,8,0),Mt(0,2,4,-1,0,4,5,0,0,1,10,0),Mt(0,3,5,-1,0,5,8,0,0,1,14,0),Mt(0,3,5,-1,0,6,10,0,0,1,18,0),Mt(0,4,5,-2,0,7,10,1,0,2,16,1),Mt(0,5,5,-3,0,8,10,1,0,3,14,2),Mt(0,5,6,-3,0,9,12,1,0,3,16,2),Mt(0,6,6,-3,0,10,14,1,0,4,18,3),Mt(0,6,7,-4,0,11,15,1,0,4,20,3),Mt(0,7,8,-4,0,12,17,2,0,5,22,4),Mt(0,7,8,-4,0,13,19,2,0,5,24,4),Mt(0,7,9,-4,0,14,21,2,0,5,26,4),Mt(0,8,9,-5,0,15,22,2,0,6,28,5),Mt(0,8,10,-5,0,16,24,2,0,6,30,5),Mt(0,8,11,-5,0,17,26,2,0,6,32,5),Mt(0,9,11,-5,0,18,28,2,0,7,34,6),Mt(0,9,12,-6,0,19,29,2,0,7,36,6),Mt(0,10,13,-6,0,20,31,3,0,8,38,7),Mt(0,10,13,-6,0,21,33,3,0,8,40,7),Mt(0,10,14,-6,0,22,35,3,0,8,42,7),Mt(0,11,14,-7,0,23,36,3,0,9,44,8),Mt(0,11,15,-7,0,24,38,3,0,9,46,8)],UC={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},OC={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ly(t){return`${Math.round(t)}ms`}function kC(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function FC(t){const e={...UC,...t.easing},n={...OC,...t.duration};return{getAutoHeightDuration:kC,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0,...c}=o;return(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:ly(s)} ${a} ${typeof l=="string"?l:ly(l)}`).join(",")},...t,easing:e,duration:n}}const BC={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function zC(t){return Hr(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function C1(t={}){const e={...t};function n(r){const i=Object.entries(r);for(let o=0;o<i.length;o++){const[s,a]=i[o];!zC(a)||s.startsWith("unstable_")?delete r[s]:Hr(a)&&(r[s]={...a},n(r[s]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Dp(t={},...e){const{breakpoints:n,mixins:r={},spacing:i,palette:o={},transitions:s={},typography:a={},shape:l,...c}=t;if(t.vars)throw new Error(Xo(20));const u=Zg(o),d=Xg(t);let h=$n(d,{mixins:CC(d.breakpoints,r),palette:u,shadows:NC.slice(),typography:PC(u,a),transitions:FC(s),zIndex:{...BC}});return h=$n(h,c),h=e.reduce((p,v)=>$n(p,v),h),h.unstable_sxConfig={...ec,...c==null?void 0:c.unstable_sxConfig},h.unstable_sx=function(v){return aa({sx:v,theme:this})},h.toRuntimeSource=C1,h}function HC(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const VC=[...Array(25)].map((t,e)=>{if(e===0)return"none";const n=HC(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function R1(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function P1(t){return t==="dark"?VC:[]}function GC(t){const{palette:e={mode:"light"},opacity:n,overlays:r,...i}=t,o=Zg(e);return{palette:o,opacity:{...R1(o.mode),...n},overlays:r||P1(o.mode),...i}}function WC(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const $C=t=>[...[...Array(25)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],jC=t=>(e,n)=>{const r=t.rootSelector||":root",i=t.colorSchemeSelector;let o=i;if(i==="class"&&(o=".%s"),i==="data"&&(o="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(o=`[${i}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const s={};return $C(t.cssVarPrefix).forEach(a=>{s[a]=n[a],delete n[a]}),o==="media"?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:s}}:o?{[o.replace("%s",e)]:s,[`${r}, ${o.replace("%s",e)}`]:n}:{[r]:{...n,...s}}}if(o&&o!=="media")return`${r}, ${o.replace("%s",String(e))}`}else if(e){if(o==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:n}};if(o)return o.replace("%s",String(e))}return r};function XC(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function Q(t,e,n){!t[e]&&n&&(t[e]=n)}function il(t){return typeof t!="string"||!t.startsWith("hsl")?t:w1(t)}function Zr(t,e){`${e}Channel`in t||(t[`${e}Channel`]=rl(il(t[e])))}function YC(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const Nr=t=>{try{return t()}catch{}},qC=(t="mui")=>pC(t);function Kd(t,e,n,r){if(!e)return;e=e===!0?{}:e;const i=r==="dark"?"dark":"light";if(!n){t[r]=GC({...e,palette:{mode:i,...e==null?void 0:e.palette}});return}const{palette:o,...s}=Dp({...n,palette:{mode:i,...e==null?void 0:e.palette}});return t[r]={...e,palette:o,opacity:{...R1(i),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||P1(i)},s}function KC(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:o="mui",shouldSkipGeneratingVar:s=WC,colorSchemeSelector:a=n.light&&n.dark?"media":void 0,rootSelector:l=":root",...c}=t,u=Object.keys(n)[0],d=r||(n.light&&u!=="light"?"light":u),h=qC(o),{[d]:p,light:v,dark:y,...g}=n,f={...g};let x=p;if((d==="dark"&&!("dark"in n)||d==="light"&&!("light"in n))&&(x=!0),!x)throw new Error(Xo(21,d));const S=Kd(f,x,c,d);v&&!f.light&&Kd(f,v,void 0,"light"),y&&!f.dark&&Kd(f,y,void 0,"dark");let _={defaultColorScheme:d,...S,cssVarPrefix:o,colorSchemeSelector:a,rootSelector:l,getCssVar:h,colorSchemes:f,font:{...bC(S.typography),...S.font},spacing:YC(c.spacing)};Object.keys(_.colorSchemes).forEach(A=>{const m=_.colorSchemes[A].palette,C=O=>{const N=O.split("-"),H=N[1],G=N[2];return h(O,m[H][G])};if(m.mode==="light"&&(Q(m.common,"background","#fff"),Q(m.common,"onBackground","#000")),m.mode==="dark"&&(Q(m.common,"background","#000"),Q(m.common,"onBackground","#fff")),XC(m,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),m.mode==="light"){Q(m.Alert,"errorColor",pt(m.error.light,.6)),Q(m.Alert,"infoColor",pt(m.info.light,.6)),Q(m.Alert,"successColor",pt(m.success.light,.6)),Q(m.Alert,"warningColor",pt(m.warning.light,.6)),Q(m.Alert,"errorFilledBg",C("palette-error-main")),Q(m.Alert,"infoFilledBg",C("palette-info-main")),Q(m.Alert,"successFilledBg",C("palette-success-main")),Q(m.Alert,"warningFilledBg",C("palette-warning-main")),Q(m.Alert,"errorFilledColor",Nr(()=>m.getContrastText(m.error.main))),Q(m.Alert,"infoFilledColor",Nr(()=>m.getContrastText(m.info.main))),Q(m.Alert,"successFilledColor",Nr(()=>m.getContrastText(m.success.main))),Q(m.Alert,"warningFilledColor",Nr(()=>m.getContrastText(m.warning.main))),Q(m.Alert,"errorStandardBg",mt(m.error.light,.9)),Q(m.Alert,"infoStandardBg",mt(m.info.light,.9)),Q(m.Alert,"successStandardBg",mt(m.success.light,.9)),Q(m.Alert,"warningStandardBg",mt(m.warning.light,.9)),Q(m.Alert,"errorIconColor",C("palette-error-main")),Q(m.Alert,"infoIconColor",C("palette-info-main")),Q(m.Alert,"successIconColor",C("palette-success-main")),Q(m.Alert,"warningIconColor",C("palette-warning-main")),Q(m.AppBar,"defaultBg",C("palette-grey-100")),Q(m.Avatar,"defaultBg",C("palette-grey-400")),Q(m.Button,"inheritContainedBg",C("palette-grey-300")),Q(m.Button,"inheritContainedHoverBg",C("palette-grey-A100")),Q(m.Chip,"defaultBorder",C("palette-grey-400")),Q(m.Chip,"defaultAvatarColor",C("palette-grey-700")),Q(m.Chip,"defaultIconColor",C("palette-grey-700")),Q(m.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),Q(m.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),Q(m.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),Q(m.LinearProgress,"primaryBg",mt(m.primary.main,.62)),Q(m.LinearProgress,"secondaryBg",mt(m.secondary.main,.62)),Q(m.LinearProgress,"errorBg",mt(m.error.main,.62)),Q(m.LinearProgress,"infoBg",mt(m.info.main,.62)),Q(m.LinearProgress,"successBg",mt(m.success.main,.62)),Q(m.LinearProgress,"warningBg",mt(m.warning.main,.62)),Q(m.Skeleton,"bg",`rgba(${C("palette-text-primaryChannel")} / 0.11)`),Q(m.Slider,"primaryTrack",mt(m.primary.main,.62)),Q(m.Slider,"secondaryTrack",mt(m.secondary.main,.62)),Q(m.Slider,"errorTrack",mt(m.error.main,.62)),Q(m.Slider,"infoTrack",mt(m.info.main,.62)),Q(m.Slider,"successTrack",mt(m.success.main,.62)),Q(m.Slider,"warningTrack",mt(m.warning.main,.62));const O=Dc(m.background.default,.8);Q(m.SnackbarContent,"bg",O),Q(m.SnackbarContent,"color",Nr(()=>m.getContrastText(O))),Q(m.SpeedDialAction,"fabHoverBg",Dc(m.background.paper,.15)),Q(m.StepConnector,"border",C("palette-grey-400")),Q(m.StepContent,"border",C("palette-grey-400")),Q(m.Switch,"defaultColor",C("palette-common-white")),Q(m.Switch,"defaultDisabledColor",C("palette-grey-100")),Q(m.Switch,"primaryDisabledColor",mt(m.primary.main,.62)),Q(m.Switch,"secondaryDisabledColor",mt(m.secondary.main,.62)),Q(m.Switch,"errorDisabledColor",mt(m.error.main,.62)),Q(m.Switch,"infoDisabledColor",mt(m.info.main,.62)),Q(m.Switch,"successDisabledColor",mt(m.success.main,.62)),Q(m.Switch,"warningDisabledColor",mt(m.warning.main,.62)),Q(m.TableCell,"border",mt(Ic(m.divider,1),.88)),Q(m.Tooltip,"bg",Ic(m.grey[700],.92))}if(m.mode==="dark"){Q(m.Alert,"errorColor",mt(m.error.light,.6)),Q(m.Alert,"infoColor",mt(m.info.light,.6)),Q(m.Alert,"successColor",mt(m.success.light,.6)),Q(m.Alert,"warningColor",mt(m.warning.light,.6)),Q(m.Alert,"errorFilledBg",C("palette-error-dark")),Q(m.Alert,"infoFilledBg",C("palette-info-dark")),Q(m.Alert,"successFilledBg",C("palette-success-dark")),Q(m.Alert,"warningFilledBg",C("palette-warning-dark")),Q(m.Alert,"errorFilledColor",Nr(()=>m.getContrastText(m.error.dark))),Q(m.Alert,"infoFilledColor",Nr(()=>m.getContrastText(m.info.dark))),Q(m.Alert,"successFilledColor",Nr(()=>m.getContrastText(m.success.dark))),Q(m.Alert,"warningFilledColor",Nr(()=>m.getContrastText(m.warning.dark))),Q(m.Alert,"errorStandardBg",pt(m.error.light,.9)),Q(m.Alert,"infoStandardBg",pt(m.info.light,.9)),Q(m.Alert,"successStandardBg",pt(m.success.light,.9)),Q(m.Alert,"warningStandardBg",pt(m.warning.light,.9)),Q(m.Alert,"errorIconColor",C("palette-error-main")),Q(m.Alert,"infoIconColor",C("palette-info-main")),Q(m.Alert,"successIconColor",C("palette-success-main")),Q(m.Alert,"warningIconColor",C("palette-warning-main")),Q(m.AppBar,"defaultBg",C("palette-grey-900")),Q(m.AppBar,"darkBg",C("palette-background-paper")),Q(m.AppBar,"darkColor",C("palette-text-primary")),Q(m.Avatar,"defaultBg",C("palette-grey-600")),Q(m.Button,"inheritContainedBg",C("palette-grey-800")),Q(m.Button,"inheritContainedHoverBg",C("palette-grey-700")),Q(m.Chip,"defaultBorder",C("palette-grey-700")),Q(m.Chip,"defaultAvatarColor",C("palette-grey-300")),Q(m.Chip,"defaultIconColor",C("palette-grey-300")),Q(m.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),Q(m.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),Q(m.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),Q(m.LinearProgress,"primaryBg",pt(m.primary.main,.5)),Q(m.LinearProgress,"secondaryBg",pt(m.secondary.main,.5)),Q(m.LinearProgress,"errorBg",pt(m.error.main,.5)),Q(m.LinearProgress,"infoBg",pt(m.info.main,.5)),Q(m.LinearProgress,"successBg",pt(m.success.main,.5)),Q(m.LinearProgress,"warningBg",pt(m.warning.main,.5)),Q(m.Skeleton,"bg",`rgba(${C("palette-text-primaryChannel")} / 0.13)`),Q(m.Slider,"primaryTrack",pt(m.primary.main,.5)),Q(m.Slider,"secondaryTrack",pt(m.secondary.main,.5)),Q(m.Slider,"errorTrack",pt(m.error.main,.5)),Q(m.Slider,"infoTrack",pt(m.info.main,.5)),Q(m.Slider,"successTrack",pt(m.success.main,.5)),Q(m.Slider,"warningTrack",pt(m.warning.main,.5));const O=Dc(m.background.default,.98);Q(m.SnackbarContent,"bg",O),Q(m.SnackbarContent,"color",Nr(()=>m.getContrastText(O))),Q(m.SpeedDialAction,"fabHoverBg",Dc(m.background.paper,.15)),Q(m.StepConnector,"border",C("palette-grey-600")),Q(m.StepContent,"border",C("palette-grey-600")),Q(m.Switch,"defaultColor",C("palette-grey-300")),Q(m.Switch,"defaultDisabledColor",C("palette-grey-600")),Q(m.Switch,"primaryDisabledColor",pt(m.primary.main,.55)),Q(m.Switch,"secondaryDisabledColor",pt(m.secondary.main,.55)),Q(m.Switch,"errorDisabledColor",pt(m.error.main,.55)),Q(m.Switch,"infoDisabledColor",pt(m.info.main,.55)),Q(m.Switch,"successDisabledColor",pt(m.success.main,.55)),Q(m.Switch,"warningDisabledColor",pt(m.warning.main,.55)),Q(m.TableCell,"border",pt(Ic(m.divider,1),.68)),Q(m.Tooltip,"bg",Ic(m.grey[700],.92))}Zr(m.background,"default"),Zr(m.background,"paper"),Zr(m.common,"background"),Zr(m.common,"onBackground"),Zr(m,"divider"),Object.keys(m).forEach(O=>{const N=m[O];O!=="tonalOffset"&&N&&typeof N=="object"&&(N.main&&Q(m[O],"mainChannel",rl(il(N.main))),N.light&&Q(m[O],"lightChannel",rl(il(N.light))),N.dark&&Q(m[O],"darkChannel",rl(il(N.dark))),N.contrastText&&Q(m[O],"contrastTextChannel",rl(il(N.contrastText))),O==="text"&&(Zr(m[O],"primary"),Zr(m[O],"secondary")),O==="action"&&(N.active&&Zr(m[O],"active"),N.selected&&Zr(m[O],"selected")))})}),_=e.reduce((A,m)=>$n(A,m),_);const T={prefix:o,disableCssColorScheme:i,shouldSkipGeneratingVar:s,getSelector:jC(_)},{vars:w,generateThemeVars:M,generateStyleSheets:L}=vC(_,T);return _.vars=w,Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([A,m])=>{_[A]=m}),_.generateThemeVars=M,_.generateStyleSheets=L,_.generateSpacing=function(){return S1(c.spacing,Ug(this))},_.getColorSchemeSelector=yC(a),_.spacing=_.generateSpacing(),_.shouldSkipGeneratingVar=s,_.unstable_sxConfig={...ec,...c==null?void 0:c.unstable_sxConfig},_.unstable_sx=function(m){return aa({sx:m,theme:this})},_.toRuntimeSource=C1,_}function cy(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:Zg({...n===!0?{}:n.palette,mode:e})})}function ZC(t={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:o=n==null?void 0:n.mode,...s}=t,a=o||"light",l=i==null?void 0:i[a],c={...i,...n?{[a]:{...typeof l!="boolean"&&l,palette:n}}:void 0};if(r===!1){if(!("colorSchemes"in t))return Dp(t,...e);let u=n;"palette"in t||c[a]&&(c[a]!==!0?u=c[a].palette:a==="dark"&&(u={mode:"dark"}));const d=Dp({...t,palette:u},...e);return d.defaultColorScheme=a,d.colorSchemes=c,d.palette.mode==="light"&&(d.colorSchemes.light={...c.light!==!0&&c.light,palette:d.palette},cy(d,"dark",c.dark)),d.palette.mode==="dark"&&(d.colorSchemes.dark={...c.dark!==!0&&c.dark,palette:d.palette},cy(d,"light",c.light)),d}return!n&&!("light"in c)&&a==="light"&&(c.light=!0),KC({...s,colorSchemes:c,defaultColorScheme:a,...typeof r!="boolean"&&r},...e)}const L1=ZC(),I1="$$material";function Qg(){const t=Kb(L1);return t[I1]||t}function QC(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const JC=t=>QC(t)&&t!=="classes",Ir=eC({themeId:I1,defaultTheme:L1,rootShouldForwardProp:JC});function eR(){return NA}const ro=hC;function fo(t){return dC(t)}function tR(t){return co("MuiSvgIcon",t)}uo("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const nR=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${$t(e)}`,`fontSize${$t(n)}`]};return Jo(i,tR,r)},rR=Ir("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${$t(n.color)}`],e[`fontSize${$t(n.fontSize)}`]]}})(ro(({theme:t})=>{var e,n,r,i,o,s,a,l,c,u,d,h,p,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(i=(e=t.transitions)==null?void 0:e.create)==null?void 0:i.call(e,"fill",{duration:(r=(n=(t.vars??t).transitions)==null?void 0:n.duration)==null?void 0:r.shorter}),variants:[{props:y=>!y.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((s=(o=t.typography)==null?void 0:o.pxToRem)==null?void 0:s.call(o,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((l=(a=t.typography)==null?void 0:a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((u=(c=t.typography)==null?void 0:c.pxToRem)==null?void 0:u.call(c,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,y])=>y&&y.main).map(([y])=>{var g,f;return{props:{color:y},style:{color:(f=(g=(t.vars??t).palette)==null?void 0:g[y])==null?void 0:f.main}}}),{props:{color:"action"},style:{color:(h=(d=(t.vars??t).palette)==null?void 0:d.action)==null?void 0:h.active}},{props:{color:"disabled"},style:{color:(v=(p=(t.vars??t).palette)==null?void 0:p.action)==null?void 0:v.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),df=Z.forwardRef(function(e,n){const r=fo({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:u=!1,titleAccess:d,viewBox:h="0 0 24 24",...p}=r,v=Z.isValidElement(i)&&i.type==="svg",y={...r,color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:u,viewBox:h,hasSvgAsChild:v},g={};u||(g.viewBox=h);const f=nR(y);return R.jsxs(rR,{as:a,className:Zt(f.root,o),focusable:"false",color:c,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n,...g,...p,...v&&i.props,ownerState:y,children:[v?i.props.children:i,d?R.jsx("title",{children:d}):null]})});df&&(df.muiName="SvgIcon");function Ra(t,e){function n(r,i){return R.jsx(df,{"data-testid":`${e}Icon`,ref:i,...r,children:t})}return n.muiName=df.muiName,Z.memo(Z.forwardRef(n))}const iR=Ra(R.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),oR=Ra(R.jsx("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram"),sR=Ra(R.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),aR=Ra(R.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");function D1(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}function Np(t,e){return Np=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Np(t,e)}function N1(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Np(t,e)}const uy={disabled:!1},hf=rn.createContext(null);var lR=function(e){return e.scrollTop},ol="unmounted",wo="exited",To="entering",Ms="entered",Up="exiting",Ci=function(t){N1(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=wo,o.appearStatus=To):l=Ms:r.unmountOnExit||r.mountOnEnter?l=ol:l=wo,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===ol?{status:wo}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==To&&s!==Ms&&(o=To):(s===To||s===Ms)&&(o=Up)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===To){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Pc.findDOMNode(this);s&&lR(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===wo&&this.setState({status:ol})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Pc.findDOMNode(this),a],c=l[0],u=l[1],d=this.getTimeouts(),h=a?d.appear:d.enter;if(!i&&!s||uy.disabled){this.safeSetState({status:Ms},function(){o.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:To},function(){o.props.onEntering(c,u),o.onTransitionEnd(h,function(){o.safeSetState({status:Ms},function(){o.props.onEntered(c,u)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Pc.findDOMNode(this);if(!o||uy.disabled){this.safeSetState({status:wo},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Up},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:wo},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:Pc.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ol)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=D1(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return rn.createElement(hf.Provider,{value:null},typeof s=="function"?s(i,a):rn.cloneElement(rn.Children.only(s),a))},e}(rn.Component);Ci.contextType=hf;Ci.propTypes={};function as(){}Ci.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:as,onEntering:as,onEntered:as,onExit:as,onExiting:as,onExited:as};Ci.UNMOUNTED=ol;Ci.EXITED=wo;Ci.ENTERING=To;Ci.ENTERED=Ms;Ci.EXITING=Up;function cR(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jg(t,e){var n=function(o){return e&&Z.isValidElement(o)?e(o):o},r=Object.create(null);return t&&Z.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function uR(t,e){t=t||{},e=e||{};function n(u){return u in e?e[u]:t[u]}var r=Object.create(null),i=[];for(var o in t)o in e?i.length&&(r[o]=i,i=[]):i.push(o);var s,a={};for(var l in e){if(r[l])for(s=0;s<r[l].length;s++){var c=r[l][s];a[r[l][s]]=n(c)}a[l]=n(l)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}function Do(t,e,n){return n[e]!=null?n[e]:t.props[e]}function fR(t,e){return Jg(t.children,function(n){return Z.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:Do(n,"appear",t),enter:Do(n,"enter",t),exit:Do(n,"exit",t)})})}function dR(t,e,n){var r=Jg(t.children),i=uR(e,r);return Object.keys(i).forEach(function(o){var s=i[o];if(Z.isValidElement(s)){var a=o in e,l=o in r,c=e[o],u=Z.isValidElement(c)&&!c.props.in;l&&(!a||u)?i[o]=Z.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:Do(s,"exit",t),enter:Do(s,"enter",t)}):!l&&a&&!u?i[o]=Z.cloneElement(s,{in:!1}):l&&a&&Z.isValidElement(c)&&(i[o]=Z.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:Do(s,"exit",t),enter:Do(s,"enter",t)}))}}),i}var hR=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},pR={component:"div",childFactory:function(e){return e}},ev=function(t){N1(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=o.handleExited.bind(cR(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,o){var s=o.children,a=o.handleExited,l=o.firstRender;return{children:l?fR(i,a):dR(i,s,a),firstRender:!1}},n.handleExited=function(i,o){var s=Jg(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(o),this.mounted&&this.setState(function(a){var l=uf({},a.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,o=i.component,s=i.childFactory,a=D1(i,["component","childFactory"]),l=this.state.contextValue,c=hR(this.state.children).map(s);return delete a.appear,delete a.enter,delete a.exit,o===null?rn.createElement(hf.Provider,{value:l},c):rn.createElement(hf.Provider,{value:l},rn.createElement(o,a,c))},e}(rn.Component);ev.propTypes={};ev.defaultProps=pR;const mR=t=>t.scrollTop;function fy(t,e){const{timeout:n,easing:r,style:i={}}=t;return{duration:i.transitionDuration??(typeof n=="number"?n:n[e.mode]||0),easing:i.transitionTimingFunction??(typeof r=="object"?r[e.mode]:r),delay:i.transitionDelay}}function Op(t){return`scale(${t}, ${t**2})`}const gR={entering:{opacity:1,transform:Op(1)},entered:{opacity:1,transform:"none"}},Zd=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),kp=Z.forwardRef(function(e,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:c,onEntering:u,onExit:d,onExited:h,onExiting:p,style:v,timeout:y="auto",TransitionComponent:g=Ci,...f}=e,x=ks(),S=Z.useRef(),_=Qg(),T=Z.useRef(null),w=Ei(T,Ig(o),n),M=G=>B=>{if(G){const Y=T.current;B===void 0?G(Y):G(Y,B)}},L=M(u),A=M((G,B)=>{mR(G);const{duration:Y,delay:I,easing:z}=fy({style:v,timeout:y,easing:s},{mode:"enter"});let q;y==="auto"?(q=_.transitions.getAutoHeightDuration(G.clientHeight),S.current=q):q=Y,G.style.transition=[_.transitions.create("opacity",{duration:q,delay:I}),_.transitions.create("transform",{duration:Zd?q:q*.666,delay:I,easing:z})].join(","),l&&l(G,B)}),m=M(c),C=M(p),O=M(G=>{const{duration:B,delay:Y,easing:I}=fy({style:v,timeout:y,easing:s},{mode:"exit"});let z;y==="auto"?(z=_.transitions.getAutoHeightDuration(G.clientHeight),S.current=z):z=B,G.style.transition=[_.transitions.create("opacity",{duration:z,delay:Y}),_.transitions.create("transform",{duration:Zd?z:z*.666,delay:Zd?Y:Y||z*.333,easing:I})].join(","),G.style.opacity=0,G.style.transform=Op(.75),d&&d(G)}),N=M(h),H=G=>{y==="auto"&&x.start(S.current||0,G),r&&r(T.current,G)};return R.jsx(g,{appear:i,in:a,nodeRef:T,onEnter:A,onEntered:m,onEntering:L,onExit:O,onExited:N,onExiting:C,addEndListener:H,timeout:y==="auto"?null:y,...f,children:(G,B)=>Z.cloneElement(o,{style:{opacity:0,transform:Op(.75),visibility:G==="exited"&&!a?"hidden":void 0,...gR[G],...v,...o.props.style},ref:w,...B})})});kp&&(kp.muiSupportAuto=!0);var Ln="top",dr="bottom",hr="right",In="left",tv="auto",nc=[Ln,dr,hr,In],ca="start",Gl="end",vR="clippingParents",U1="viewport",$a="popper",yR="reference",dy=nc.reduce(function(t,e){return t.concat([e+"-"+ca,e+"-"+Gl])},[]),O1=[].concat(nc,[tv]).reduce(function(t,e){return t.concat([e,e+"-"+ca,e+"-"+Gl])},[]),_R="beforeRead",xR="read",SR="afterRead",ER="beforeMain",MR="main",wR="afterMain",TR="beforeWrite",AR="write",bR="afterWrite",CR=[_R,xR,SR,ER,MR,wR,TR,AR,bR];function Yr(t){return t?(t.nodeName||"").toLowerCase():null}function Yn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Yo(t){var e=Yn(t).Element;return t instanceof e||t instanceof Element}function cr(t){var e=Yn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function nv(t){if(typeof ShadowRoot>"u")return!1;var e=Yn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function RR(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},o=e.elements[n];!cr(o)||!Yr(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function PR(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],o=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=s.reduce(function(l,c){return l[c]="",l},{});!cr(i)||!Yr(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const LR={name:"applyStyles",enabled:!0,phase:"write",fn:RR,effect:PR,requires:["computeStyles"]};function jr(t){return t.split("-")[0]}var Bo=Math.max,pf=Math.min,ua=Math.round;function Fp(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function k1(){return!/^((?!chrome|android).)*safari/i.test(Fp())}function fa(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,o=1;e&&cr(t)&&(i=t.offsetWidth>0&&ua(r.width)/t.offsetWidth||1,o=t.offsetHeight>0&&ua(r.height)/t.offsetHeight||1);var s=Yo(t)?Yn(t):window,a=s.visualViewport,l=!k1()&&n,c=(r.left+(l&&a?a.offsetLeft:0))/i,u=(r.top+(l&&a?a.offsetTop:0))/o,d=r.width/i,h=r.height/o;return{width:d,height:h,top:u,right:c+d,bottom:u+h,left:c,x:c,y:u}}function rv(t){var e=fa(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function F1(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&nv(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function wi(t){return Yn(t).getComputedStyle(t)}function IR(t){return["table","td","th"].indexOf(Yr(t))>=0}function ho(t){return((Yo(t)?t.ownerDocument:t.document)||window.document).documentElement}function ld(t){return Yr(t)==="html"?t:t.assignedSlot||t.parentNode||(nv(t)?t.host:null)||ho(t)}function hy(t){return!cr(t)||wi(t).position==="fixed"?null:t.offsetParent}function DR(t){var e=/firefox/i.test(Fp()),n=/Trident/i.test(Fp());if(n&&cr(t)){var r=wi(t);if(r.position==="fixed")return null}var i=ld(t);for(nv(i)&&(i=i.host);cr(i)&&["html","body"].indexOf(Yr(i))<0;){var o=wi(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function rc(t){for(var e=Yn(t),n=hy(t);n&&IR(n)&&wi(n).position==="static";)n=hy(n);return n&&(Yr(n)==="html"||Yr(n)==="body"&&wi(n).position==="static")?e:n||DR(t)||e}function iv(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function yl(t,e,n){return Bo(t,pf(e,n))}function NR(t,e,n){var r=yl(t,e,n);return r>n?n:r}function B1(){return{top:0,right:0,bottom:0,left:0}}function z1(t){return Object.assign({},B1(),t)}function H1(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var UR=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,z1(typeof e!="number"?e:H1(e,nc))};function OR(t){var e,n=t.state,r=t.name,i=t.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=jr(n.placement),l=iv(a),c=[In,hr].indexOf(a)>=0,u=c?"height":"width";if(!(!o||!s)){var d=UR(i.padding,n),h=rv(o),p=l==="y"?Ln:In,v=l==="y"?dr:hr,y=n.rects.reference[u]+n.rects.reference[l]-s[l]-n.rects.popper[u],g=s[l]-n.rects.reference[l],f=rc(o),x=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,S=y/2-g/2,_=d[p],T=x-h[u]-d[v],w=x/2-h[u]/2+S,M=yl(_,w,T),L=l;n.modifiersData[r]=(e={},e[L]=M,e.centerOffset=M-w,e)}}function kR(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||F1(e.elements.popper,i)&&(e.elements.arrow=i))}const FR={name:"arrow",enabled:!0,phase:"main",fn:OR,effect:kR,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function da(t){return t.split("-")[1]}var BR={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zR(t,e){var n=t.x,r=t.y,i=e.devicePixelRatio||1;return{x:ua(n*i)/i||0,y:ua(r*i)/i||0}}function py(t){var e,n=t.popper,r=t.popperRect,i=t.placement,o=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,d=t.isFixed,h=s.x,p=h===void 0?0:h,v=s.y,y=v===void 0?0:v,g=typeof u=="function"?u({x:p,y}):{x:p,y};p=g.x,y=g.y;var f=s.hasOwnProperty("x"),x=s.hasOwnProperty("y"),S=In,_=Ln,T=window;if(c){var w=rc(n),M="clientHeight",L="clientWidth";if(w===Yn(n)&&(w=ho(n),wi(w).position!=="static"&&a==="absolute"&&(M="scrollHeight",L="scrollWidth")),w=w,i===Ln||(i===In||i===hr)&&o===Gl){_=dr;var A=d&&w===T&&T.visualViewport?T.visualViewport.height:w[M];y-=A-r.height,y*=l?1:-1}if(i===In||(i===Ln||i===dr)&&o===Gl){S=hr;var m=d&&w===T&&T.visualViewport?T.visualViewport.width:w[L];p-=m-r.width,p*=l?1:-1}}var C=Object.assign({position:a},c&&BR),O=u===!0?zR({x:p,y},Yn(n)):{x:p,y};if(p=O.x,y=O.y,l){var N;return Object.assign({},C,(N={},N[_]=x?"0":"",N[S]=f?"0":"",N.transform=(T.devicePixelRatio||1)<=1?"translate("+p+"px, "+y+"px)":"translate3d("+p+"px, "+y+"px, 0)",N))}return Object.assign({},C,(e={},e[_]=x?y+"px":"",e[S]=f?p+"px":"",e.transform="",e))}function HR(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:jr(e.placement),variation:da(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,py(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,py(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const VR={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:HR,data:{}};var Nc={passive:!0};function GR(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,o=i===void 0?!0:i,s=r.resize,a=s===void 0?!0:s,l=Yn(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",n.update,Nc)}),a&&l.addEventListener("resize",n.update,Nc),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Nc)}),a&&l.removeEventListener("resize",n.update,Nc)}}const WR={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:GR,data:{}};var $R={left:"right",right:"left",bottom:"top",top:"bottom"};function Au(t){return t.replace(/left|right|bottom|top/g,function(e){return $R[e]})}var jR={start:"end",end:"start"};function my(t){return t.replace(/start|end/g,function(e){return jR[e]})}function ov(t){var e=Yn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function sv(t){return fa(ho(t)).left+ov(t).scrollLeft}function XR(t,e){var n=Yn(t),r=ho(t),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;var c=k1();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+sv(t),y:l}}function YR(t){var e,n=ho(t),r=ov(t),i=(e=t.ownerDocument)==null?void 0:e.body,o=Bo(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=Bo(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+sv(t),l=-r.scrollTop;return wi(i||n).direction==="rtl"&&(a+=Bo(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function av(t){var e=wi(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function V1(t){return["html","body","#document"].indexOf(Yr(t))>=0?t.ownerDocument.body:cr(t)&&av(t)?t:V1(ld(t))}function _l(t,e){var n;e===void 0&&(e=[]);var r=V1(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),o=Yn(r),s=i?[o].concat(o.visualViewport||[],av(r)?r:[]):r,a=e.concat(s);return i?a:a.concat(_l(ld(s)))}function Bp(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function qR(t,e){var n=fa(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function gy(t,e,n){return e===U1?Bp(XR(t,n)):Yo(e)?qR(e,n):Bp(YR(ho(t)))}function KR(t){var e=_l(ld(t)),n=["absolute","fixed"].indexOf(wi(t).position)>=0,r=n&&cr(t)?rc(t):t;return Yo(r)?e.filter(function(i){return Yo(i)&&F1(i,r)&&Yr(i)!=="body"}):[]}function ZR(t,e,n,r){var i=e==="clippingParents"?KR(t):[].concat(e),o=[].concat(i,[n]),s=o[0],a=o.reduce(function(l,c){var u=gy(t,c,r);return l.top=Bo(u.top,l.top),l.right=pf(u.right,l.right),l.bottom=pf(u.bottom,l.bottom),l.left=Bo(u.left,l.left),l},gy(t,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function G1(t){var e=t.reference,n=t.element,r=t.placement,i=r?jr(r):null,o=r?da(r):null,s=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ln:l={x:s,y:e.y-n.height};break;case dr:l={x:s,y:e.y+e.height};break;case hr:l={x:e.x+e.width,y:a};break;case In:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?iv(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case ca:l[c]=l[c]-(e[u]/2-n[u]/2);break;case Gl:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function Wl(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,o=n.strategy,s=o===void 0?t.strategy:o,a=n.boundary,l=a===void 0?vR:a,c=n.rootBoundary,u=c===void 0?U1:c,d=n.elementContext,h=d===void 0?$a:d,p=n.altBoundary,v=p===void 0?!1:p,y=n.padding,g=y===void 0?0:y,f=z1(typeof g!="number"?g:H1(g,nc)),x=h===$a?yR:$a,S=t.rects.popper,_=t.elements[v?x:h],T=ZR(Yo(_)?_:_.contextElement||ho(t.elements.popper),l,u,s),w=fa(t.elements.reference),M=G1({reference:w,element:S,strategy:"absolute",placement:i}),L=Bp(Object.assign({},S,M)),A=h===$a?L:w,m={top:T.top-A.top+f.top,bottom:A.bottom-T.bottom+f.bottom,left:T.left-A.left+f.left,right:A.right-T.right+f.right},C=t.modifiersData.offset;if(h===$a&&C){var O=C[i];Object.keys(m).forEach(function(N){var H=[hr,dr].indexOf(N)>=0?1:-1,G=[Ln,dr].indexOf(N)>=0?"y":"x";m[N]+=O[G]*H})}return m}function QR(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?O1:l,u=da(r),d=u?a?dy:dy.filter(function(v){return da(v)===u}):nc,h=d.filter(function(v){return c.indexOf(v)>=0});h.length===0&&(h=d);var p=h.reduce(function(v,y){return v[y]=Wl(t,{placement:y,boundary:i,rootBoundary:o,padding:s})[jr(y)],v},{});return Object.keys(p).sort(function(v,y){return p[v]-p[y]})}function JR(t){if(jr(t)===tv)return[];var e=Au(t);return[my(t),e,my(e)]}function eP(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,c=n.padding,u=n.boundary,d=n.rootBoundary,h=n.altBoundary,p=n.flipVariations,v=p===void 0?!0:p,y=n.allowedAutoPlacements,g=e.options.placement,f=jr(g),x=f===g,S=l||(x||!v?[Au(g)]:JR(g)),_=[g].concat(S).reduce(function(X,ne){return X.concat(jr(ne)===tv?QR(e,{placement:ne,boundary:u,rootBoundary:d,padding:c,flipVariations:v,allowedAutoPlacements:y}):ne)},[]),T=e.rects.reference,w=e.rects.popper,M=new Map,L=!0,A=_[0],m=0;m<_.length;m++){var C=_[m],O=jr(C),N=da(C)===ca,H=[Ln,dr].indexOf(O)>=0,G=H?"width":"height",B=Wl(e,{placement:C,boundary:u,rootBoundary:d,altBoundary:h,padding:c}),Y=H?N?hr:In:N?dr:Ln;T[G]>w[G]&&(Y=Au(Y));var I=Au(Y),z=[];if(o&&z.push(B[O]<=0),a&&z.push(B[Y]<=0,B[I]<=0),z.every(function(X){return X})){A=C,L=!1;break}M.set(C,z)}if(L)for(var q=v?3:1,oe=function(ne){var ce=_.find(function(ae){var _e=M.get(ae);if(_e)return _e.slice(0,ne).every(function(Ce){return Ce})});if(ce)return A=ce,"break"},ue=q;ue>0;ue--){var Fe=oe(ue);if(Fe==="break")break}e.placement!==A&&(e.modifiersData[r]._skip=!0,e.placement=A,e.reset=!0)}}const tP={name:"flip",enabled:!0,phase:"main",fn:eP,requiresIfExists:["offset"],data:{_skip:!1}};function vy(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function yy(t){return[Ln,hr,dr,In].some(function(e){return t[e]>=0})}function nP(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,o=e.modifiersData.preventOverflow,s=Wl(e,{elementContext:"reference"}),a=Wl(e,{altBoundary:!0}),l=vy(s,r),c=vy(a,i,o),u=yy(l),d=yy(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const rP={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nP};function iP(t,e,n){var r=jr(t),i=[In,Ln].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[In,hr].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function oP(t){var e=t.state,n=t.options,r=t.name,i=n.offset,o=i===void 0?[0,0]:i,s=O1.reduce(function(u,d){return u[d]=iP(d,e.rects,o),u},{}),a=s[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=s}const sP={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:oP};function aP(t){var e=t.state,n=t.name;e.modifiersData[n]=G1({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const lP={name:"popperOffsets",enabled:!0,phase:"read",fn:aP,data:{}};function cP(t){return t==="x"?"y":"x"}function uP(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,h=n.tether,p=h===void 0?!0:h,v=n.tetherOffset,y=v===void 0?0:v,g=Wl(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),f=jr(e.placement),x=da(e.placement),S=!x,_=iv(f),T=cP(_),w=e.modifiersData.popperOffsets,M=e.rects.reference,L=e.rects.popper,A=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,m=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),C=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,O={x:0,y:0};if(w){if(o){var N,H=_==="y"?Ln:In,G=_==="y"?dr:hr,B=_==="y"?"height":"width",Y=w[_],I=Y+g[H],z=Y-g[G],q=p?-L[B]/2:0,oe=x===ca?M[B]:L[B],ue=x===ca?-L[B]:-M[B],Fe=e.elements.arrow,X=p&&Fe?rv(Fe):{width:0,height:0},ne=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:B1(),ce=ne[H],ae=ne[G],_e=yl(0,M[B],X[B]),Ce=S?M[B]/2-q-_e-ce-m.mainAxis:oe-_e-ce-m.mainAxis,Ue=S?-M[B]/2+q+_e+ae+m.mainAxis:ue+_e+ae+m.mainAxis,Ye=e.elements.arrow&&rc(e.elements.arrow),Le=Ye?_==="y"?Ye.clientTop||0:Ye.clientLeft||0:0,st=(N=C==null?void 0:C[_])!=null?N:0,D=Y+Ce-st-Le,Dt=Y+Ue-st,He=yl(p?pf(I,D):I,Y,p?Bo(z,Dt):z);w[_]=He,O[_]=He-Y}if(a){var Oe,Ee=_==="x"?Ln:In,Qe=_==="x"?dr:hr,Se=w[T],P=T==="y"?"height":"width",E=Se+g[Ee],V=Se-g[Qe],ee=[Ln,In].indexOf(f)!==-1,re=(Oe=C==null?void 0:C[T])!=null?Oe:0,J=ee?E:Se-M[P]-L[P]-re+m.altAxis,Ae=ee?Se+M[P]+L[P]-re-m.altAxis:V,fe=p&&ee?NR(J,Se,Ae):yl(p?J:E,Se,p?Ae:V);w[T]=fe,O[T]=fe-Se}e.modifiersData[r]=O}}const fP={name:"preventOverflow",enabled:!0,phase:"main",fn:uP,requiresIfExists:["offset"]};function dP(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function hP(t){return t===Yn(t)||!cr(t)?ov(t):dP(t)}function pP(t){var e=t.getBoundingClientRect(),n=ua(e.width)/t.offsetWidth||1,r=ua(e.height)/t.offsetHeight||1;return n!==1||r!==1}function mP(t,e,n){n===void 0&&(n=!1);var r=cr(e),i=cr(e)&&pP(e),o=ho(e),s=fa(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Yr(e)!=="body"||av(o))&&(a=hP(e)),cr(e)?(l=fa(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):o&&(l.x=sv(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function gP(t){var e=new Map,n=new Set,r=[];t.forEach(function(o){e.set(o.name,o)});function i(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),r.push(o)}return t.forEach(function(o){n.has(o.name)||i(o)}),r}function vP(t){var e=gP(t);return CR.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function yP(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function _P(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var _y={placement:"bottom",modifiers:[],strategy:"absolute"};function xy(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function xP(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,o=i===void 0?_y:i;return function(a,l,c){c===void 0&&(c=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},_y,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],h=!1,p={state:u,setOptions:function(f){var x=typeof f=="function"?f(u.options):f;y(),u.options=Object.assign({},o,u.options,x),u.scrollParents={reference:Yo(a)?_l(a):a.contextElement?_l(a.contextElement):[],popper:_l(l)};var S=vP(_P([].concat(r,u.options.modifiers)));return u.orderedModifiers=S.filter(function(_){return _.enabled}),v(),p.update()},forceUpdate:function(){if(!h){var f=u.elements,x=f.reference,S=f.popper;if(xy(x,S)){u.rects={reference:mP(x,rc(S),u.options.strategy==="fixed"),popper:rv(S)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(m){return u.modifiersData[m.name]=Object.assign({},m.data)});for(var _=0;_<u.orderedModifiers.length;_++){if(u.reset===!0){u.reset=!1,_=-1;continue}var T=u.orderedModifiers[_],w=T.fn,M=T.options,L=M===void 0?{}:M,A=T.name;typeof w=="function"&&(u=w({state:u,options:L,name:A,instance:p})||u)}}}},update:yP(function(){return new Promise(function(g){p.forceUpdate(),g(u)})}),destroy:function(){y(),h=!0}};if(!xy(a,l))return p;p.setOptions(c).then(function(g){!h&&c.onFirstUpdate&&c.onFirstUpdate(g)});function v(){u.orderedModifiers.forEach(function(g){var f=g.name,x=g.options,S=x===void 0?{}:x,_=g.effect;if(typeof _=="function"){var T=_({state:u,name:f,instance:p,options:S}),w=function(){};d.push(T||w)}})}function y(){d.forEach(function(g){return g()}),d=[]}return p}}var SP=[WR,lP,VR,LR,sP,tP,fP,FR,rP],EP=xP({defaultModifiers:SP});function MP(t){return typeof t=="function"?t():t}const wP=Z.forwardRef(function(e,n){const{children:r,container:i,disablePortal:o=!1}=e,[s,a]=Z.useState(null),l=Ei(Z.isValidElement(r)?Ig(r):null,n);if(Fl(()=>{o||a(MP(i)||document.body)},[i,o]),Fl(()=>{if(s&&!o)return Ap(n,s),()=>{Ap(n,null)}},[n,s,o]),o){if(Z.isValidElement(r)){const c={ref:l};return Z.cloneElement(r,c)}return r}return s&&Lg.createPortal(r,s)});function TP(t){return co("MuiPopper",t)}uo("MuiPopper",["root"]);function AP(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function zp(t){return typeof t=="function"?t():t}function bP(t){return t.nodeType!==void 0}const CP=t=>{const{classes:e}=t;return Jo({root:["root"]},TP,e)},RP={},PP=Z.forwardRef(function(e,n){const{anchorEl:r,children:i,direction:o,disablePortal:s,modifiers:a,open:l,placement:c,popperOptions:u,popperRef:d,slotProps:h={},slots:p={},TransitionProps:v,ownerState:y,...g}=e,f=Z.useRef(null),x=Ei(f,n),S=Z.useRef(null),_=Ei(S,d),T=Z.useRef(_);Fl(()=>{T.current=_},[_]),Z.useImperativeHandle(d,()=>S.current,[]);const w=AP(c,o),[M,L]=Z.useState(w),[A,m]=Z.useState(zp(r));Z.useEffect(()=>{S.current&&S.current.forceUpdate()}),Z.useEffect(()=>{r&&m(zp(r))},[r]),Fl(()=>{if(!A||!l)return;const G=I=>{L(I.placement)};let B=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{G(I)}}];a!=null&&(B=B.concat(a)),u&&u.modifiers!=null&&(B=B.concat(u.modifiers));const Y=EP(A,f.current,{placement:w,...u,modifiers:B});return T.current(Y),()=>{Y.destroy(),T.current(null)}},[A,s,a,l,u,w]);const C={placement:M};v!==null&&(C.TransitionProps=v);const O=CP(e),N=p.root??"div",H=zT({elementType:N,externalSlotProps:h.root,externalForwardedProps:g,additionalProps:{role:"tooltip",ref:x},ownerState:e,className:O.root});return R.jsx(N,{...H,children:typeof i=="function"?i(C):i})}),LP=Z.forwardRef(function(e,n){const{anchorEl:r,children:i,container:o,direction:s="ltr",disablePortal:a=!1,keepMounted:l=!1,modifiers:c,open:u,placement:d="bottom",popperOptions:h=RP,popperRef:p,style:v,transition:y=!1,slotProps:g={},slots:f={},...x}=e,[S,_]=Z.useState(!0),T=()=>{_(!1)},w=()=>{_(!0)};if(!l&&!u&&(!y||S))return null;let M;if(o)M=o;else if(r){const m=zp(r);M=m&&bP(m)?F0(m).body:F0(null).body}const L=!u&&l&&(!y||S)?"none":void 0,A=y?{in:u,onEnter:T,onExited:w}:void 0;return R.jsx(wP,{disablePortal:a,container:M,children:R.jsx(PP,{anchorEl:r,direction:s,disablePortal:a,modifiers:c,ref:n,open:y?!S:u,placement:d,popperOptions:h,popperRef:p,slotProps:g,slots:f,...x,style:{position:"fixed",top:0,left:0,display:L,...v},TransitionProps:A,children:i})})}),IP=Ir(LP,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),W1=Z.forwardRef(function(e,n){const r=T1(),i=fo({props:e,name:"MuiPopper"}),{anchorEl:o,component:s,components:a,componentsProps:l,container:c,disablePortal:u,keepMounted:d,modifiers:h,open:p,placement:v,popperOptions:y,popperRef:g,transition:f,slots:x,slotProps:S,..._}=i,T=(x==null?void 0:x.root)??(a==null?void 0:a.Root),w={anchorEl:o,container:c,disablePortal:u,keepMounted:d,modifiers:h,open:p,placement:v,popperOptions:y,popperRef:g,transition:f,..._};return R.jsx(IP,{as:s,direction:r?"rtl":"ltr",slots:{root:T},slotProps:S??l,...w,ref:n})});function Uc(t,e){const{className:n,elementType:r,ownerState:i,externalForwardedProps:o,internalForwardedProps:s,...a}=e,{component:l,slots:c={[t]:void 0},slotProps:u={[t]:void 0},...d}=o,h=c[t]||r,p=t1(u[t],i),{props:{component:v,...y},internalRef:g}=e1({className:n,...a,externalForwardedProps:t==="root"?d:void 0,externalSlotProps:p}),f=Ei(g,p==null?void 0:p.ref,e.ref),x=t==="root"?v||l:v,S=QS(h,{...t==="root"&&!l&&!c[t]&&s,...t!=="root"&&!c[t]&&s,...y,...x&&{as:x},ref:f},i);return[h,S]}function DP(t){return co("MuiTooltip",t)}const Lt=uo("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function NP(t){return Math.round(t*1e5)/1e5}const UP=t=>{const{classes:e,disableInteractive:n,arrow:r,touch:i,placement:o}=t,s={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${$t(o.split("-")[0])}`],arrow:["arrow"]};return Jo(s,DP,e)},OP=Ir(W1,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(ro(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${Lt.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${Lt.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${Lt.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${Lt.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${Lt.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${Lt.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${Lt.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${Lt.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),kP=Ir("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${$t(n.placement.split("-")[0])}`]]}})(ro(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:gi(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${Lt.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${Lt.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${Lt.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${Lt.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${NP(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${Lt.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${Lt.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${Lt.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${Lt.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${Lt.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${Lt.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${Lt.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${Lt.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${Lt.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${Lt.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),FP=Ir("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(ro(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:gi(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Oc=!1;const Sy=new zf;let ja={x:0,y:0};function kc(t,e){return(n,...r)=>{e&&e(n,...r),t(n,...r)}}const wn=Z.forwardRef(function(e,n){const r=fo({props:e,name:"MuiTooltip"}),{arrow:i=!1,children:o,classes:s,components:a={},componentsProps:l={},describeChild:c=!1,disableFocusListener:u=!1,disableHoverListener:d=!1,disableInteractive:h=!1,disableTouchListener:p=!1,enterDelay:v=100,enterNextDelay:y=0,enterTouchDelay:g=700,followCursor:f=!1,id:x,leaveDelay:S=0,leaveTouchDelay:_=1500,onClose:T,onOpen:w,open:M,placement:L="bottom",PopperComponent:A,PopperProps:m={},slotProps:C={},slots:O={},title:N,TransitionComponent:H,TransitionProps:G,...B}=r,Y=Z.isValidElement(o)?o:R.jsx("span",{children:o}),I=Qg(),z=T1(),[q,oe]=Z.useState(),[ue,Fe]=Z.useState(null),X=Z.useRef(!1),ne=h||f,ce=ks(),ae=ks(),_e=ks(),Ce=ks(),[Ue,Ye]=LT({controlled:M,default:!1,name:"Tooltip",state:"open"});let Le=Ue;const st=PT(x),D=Z.useRef(),Dt=js(()=>{D.current!==void 0&&(document.body.style.WebkitUserSelect=D.current,D.current=void 0),Ce.clear()});Z.useEffect(()=>Dt,[Dt]);const He=Ie=>{Sy.clear(),Oc=!0,Ye(!0),w&&!Le&&w(Ie)},Oe=js(Ie=>{Sy.start(800+S,()=>{Oc=!1}),Ye(!1),T&&Le&&T(Ie),ce.start(I.transitions.duration.shortest,()=>{X.current=!1})}),Ee=Ie=>{X.current&&Ie.type!=="touchstart"||(q&&q.removeAttribute("title"),ae.clear(),_e.clear(),v||Oc&&y?ae.start(Oc?y:v,()=>{He(Ie)}):He(Ie))},Qe=Ie=>{ae.clear(),_e.start(S,()=>{Oe(Ie)})},[,Se]=Z.useState(!1),P=Ie=>{oa(Ie.target)||(Se(!1),Qe(Ie))},E=Ie=>{q||oe(Ie.currentTarget),oa(Ie.target)&&(Se(!0),Ee(Ie))},V=Ie=>{X.current=!0;const Ge=Y.props;Ge.onTouchStart&&Ge.onTouchStart(Ie)},ee=Ie=>{V(Ie),_e.clear(),ce.clear(),Dt(),D.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ce.start(g,()=>{document.body.style.WebkitUserSelect=D.current,Ee(Ie)})},re=Ie=>{Y.props.onTouchEnd&&Y.props.onTouchEnd(Ie),Dt(),_e.start(_,()=>{Oe(Ie)})};Z.useEffect(()=>{if(!Le)return;function Ie(Ge){Ge.key==="Escape"&&Oe(Ge)}return document.addEventListener("keydown",Ie),()=>{document.removeEventListener("keydown",Ie)}},[Oe,Le]);const J=Ei(Ig(Y),oe,n);!N&&N!==0&&(Le=!1);const Ae=Z.useRef(),fe=Ie=>{const Ge=Y.props;Ge.onMouseMove&&Ge.onMouseMove(Ie),ja={x:Ie.clientX,y:Ie.clientY},Ae.current&&Ae.current.update()},ye={},qe=typeof N=="string";c?(ye.title=!Le&&qe&&!d?N:null,ye["aria-describedby"]=Le?st:null):(ye["aria-label"]=qe?N:null,ye["aria-labelledby"]=Le&&!qe?st:null);const ie={...ye,...B,...Y.props,className:Zt(B.className,Y.props.className),onTouchStart:V,ref:J,...f?{onMouseMove:fe}:{}},xe={};p||(ie.onTouchStart=ee,ie.onTouchEnd=re),d||(ie.onMouseOver=kc(Ee,ie.onMouseOver),ie.onMouseLeave=kc(Qe,ie.onMouseLeave),ne||(xe.onMouseOver=Ee,xe.onMouseLeave=Qe)),u||(ie.onFocus=kc(E,ie.onFocus),ie.onBlur=kc(P,ie.onBlur),ne||(xe.onFocus=E,xe.onBlur=P));const Re={...r,isRtl:z,arrow:i,disableInteractive:ne,placement:L,PopperComponentProp:A,touch:X.current},Pe=typeof C.popper=="function"?C.popper(Re):C.popper,we=Z.useMemo(()=>{var Ge,xn;let Ie=[{name:"arrow",enabled:!!ue,options:{element:ue,padding:4}}];return(Ge=m.popperOptions)!=null&&Ge.modifiers&&(Ie=Ie.concat(m.popperOptions.modifiers)),(xn=Pe==null?void 0:Pe.popperOptions)!=null&&xn.modifiers&&(Ie=Ie.concat(Pe.popperOptions.modifiers)),{...m.popperOptions,...Pe==null?void 0:Pe.popperOptions,modifiers:Ie}},[ue,m.popperOptions,Pe==null?void 0:Pe.popperOptions]),Xe=UP(Re),Ve=typeof C.transition=="function"?C.transition(Re):C.transition,rt={slots:{popper:a.Popper,transition:a.Transition??H,tooltip:a.Tooltip,arrow:a.Arrow,...O},slotProps:{arrow:C.arrow??l.arrow,popper:{...m,...Pe??l.popper},tooltip:C.tooltip??l.tooltip,transition:{...G,...Ve??l.transition}}},[U,pe]=Uc("popper",{elementType:OP,externalForwardedProps:rt,ownerState:Re,className:Zt(Xe.popper,m==null?void 0:m.className)}),[K,te]=Uc("transition",{elementType:kp,externalForwardedProps:rt,ownerState:Re}),[ve,me]=Uc("tooltip",{elementType:kP,className:Xe.tooltip,externalForwardedProps:rt,ownerState:Re}),[ze,St]=Uc("arrow",{elementType:FP,className:Xe.arrow,externalForwardedProps:rt,ownerState:Re,ref:Fe});return R.jsxs(Z.Fragment,{children:[Z.cloneElement(Y,ie),R.jsx(U,{as:A??W1,placement:L,anchorEl:f?{getBoundingClientRect:()=>({top:ja.y,left:ja.x,right:ja.x,bottom:ja.y,width:0,height:0})}:q,popperRef:Ae,open:q?Le:!1,id:st,transition:!0,...xe,...pe,popperOptions:we,children:({TransitionProps:Ie})=>R.jsx(K,{timeout:I.transitions.duration.shorter,...Ie,...te,children:R.jsxs(ve,{...me,children:[N,i?R.jsx(ze,{...St}):null]})})})]})});function BP(t){return typeof t.main=="string"}function zP(t,e=[]){if(!BP(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function mf(t=[]){return([,e])=>e&&zP(e,t)}class gf{constructor(){Na(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new gf}static use(){const e=ZS(gf.create).current,[n,r]=Z.useState(!1);return e.shouldMount=n,e.setShouldMount=r,Z.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=VP(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function HP(){return gf.use()}function VP(){let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n}function GP(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:o,rippleSize:s,in:a,onExited:l,timeout:c}=t,[u,d]=Z.useState(!1),h=Zt(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),p={width:s,height:s,top:-(s/2)+o,left:-(s/2)+i},v=Zt(n.child,u&&n.childLeaving,r&&n.childPulsate);return!a&&!u&&d(!0),Z.useEffect(()=>{if(!a&&l!=null){const y=setTimeout(l,c);return()=>{clearTimeout(y)}}},[l,a,c]),R.jsx("span",{className:h,style:p,children:R.jsx("span",{className:v})})}const tr=uo("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Hp=550,WP=80,$P=jg`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,jP=jg`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,XP=jg`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,YP=Ir("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),qP=Ir(GP,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${tr.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${$P};
    animation-duration: ${Hp}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${tr.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${tr.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${tr.childLeaving} {
    opacity: 0;
    animation-name: ${jP};
    animation-duration: ${Hp}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${tr.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${XP};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,KP=Z.forwardRef(function(e,n){const r=fo({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:s,...a}=r,[l,c]=Z.useState([]),u=Z.useRef(0),d=Z.useRef(null);Z.useEffect(()=>{d.current&&(d.current(),d.current=null)},[l]);const h=Z.useRef(!1),p=ks(),v=Z.useRef(null),y=Z.useRef(null),g=Z.useCallback(_=>{const{pulsate:T,rippleX:w,rippleY:M,rippleSize:L,cb:A}=_;c(m=>[...m,R.jsx(qP,{classes:{ripple:Zt(o.ripple,tr.ripple),rippleVisible:Zt(o.rippleVisible,tr.rippleVisible),ripplePulsate:Zt(o.ripplePulsate,tr.ripplePulsate),child:Zt(o.child,tr.child),childLeaving:Zt(o.childLeaving,tr.childLeaving),childPulsate:Zt(o.childPulsate,tr.childPulsate)},timeout:Hp,pulsate:T,rippleX:w,rippleY:M,rippleSize:L},u.current)]),u.current+=1,d.current=A},[o]),f=Z.useCallback((_={},T={},w=()=>{})=>{const{pulsate:M=!1,center:L=i||T.pulsate,fakeElement:A=!1}=T;if((_==null?void 0:_.type)==="mousedown"&&h.current){h.current=!1;return}(_==null?void 0:_.type)==="touchstart"&&(h.current=!0);const m=A?null:y.current,C=m?m.getBoundingClientRect():{width:0,height:0,left:0,top:0};let O,N,H;if(L||_===void 0||_.clientX===0&&_.clientY===0||!_.clientX&&!_.touches)O=Math.round(C.width/2),N=Math.round(C.height/2);else{const{clientX:G,clientY:B}=_.touches&&_.touches.length>0?_.touches[0]:_;O=Math.round(G-C.left),N=Math.round(B-C.top)}if(L)H=Math.sqrt((2*C.width**2+C.height**2)/3),H%2===0&&(H+=1);else{const G=Math.max(Math.abs((m?m.clientWidth:0)-O),O)*2+2,B=Math.max(Math.abs((m?m.clientHeight:0)-N),N)*2+2;H=Math.sqrt(G**2+B**2)}_!=null&&_.touches?v.current===null&&(v.current=()=>{g({pulsate:M,rippleX:O,rippleY:N,rippleSize:H,cb:w})},p.start(WP,()=>{v.current&&(v.current(),v.current=null)})):g({pulsate:M,rippleX:O,rippleY:N,rippleSize:H,cb:w})},[i,g,p]),x=Z.useCallback(()=>{f({},{pulsate:!0})},[f]),S=Z.useCallback((_,T)=>{if(p.clear(),(_==null?void 0:_.type)==="touchend"&&v.current){v.current(),v.current=null,p.start(0,()=>{S(_,T)});return}v.current=null,c(w=>w.length>0?w.slice(1):w),d.current=T},[p]);return Z.useImperativeHandle(n,()=>({pulsate:x,start:f,stop:S}),[x,f,S]),R.jsx(YP,{className:Zt(tr.root,o.root,s),ref:y,...a,children:R.jsx(ev,{component:null,exit:!0,children:l})})});function ZP(t){return co("MuiButtonBase",t)}const QP=uo("MuiButtonBase",["root","disabled","focusVisible"]),JP=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,s=Jo({root:["root",e&&"disabled",n&&"focusVisible"]},ZP,i);return n&&r&&(s.root+=` ${r}`),s},e3=Ir("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${QP.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),t3=Z.forwardRef(function(e,n){const r=fo({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:s,className:a,component:l="button",disabled:c=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:h=!1,focusVisibleClassName:p,LinkComponent:v="a",onBlur:y,onClick:g,onContextMenu:f,onDragLeave:x,onFocus:S,onFocusVisible:_,onKeyDown:T,onKeyUp:w,onMouseDown:M,onMouseLeave:L,onMouseUp:A,onTouchEnd:m,onTouchMove:C,onTouchStart:O,tabIndex:N=0,TouchRippleProps:H,touchRippleRef:G,type:B,...Y}=r,I=Z.useRef(null),z=HP(),q=Ei(z.ref,G),[oe,ue]=Z.useState(!1);c&&oe&&ue(!1),Z.useImperativeHandle(i,()=>({focusVisible:()=>{ue(!0),I.current.focus()}}),[]);const Fe=z.shouldMount&&!u&&!c;Z.useEffect(()=>{oe&&h&&!u&&z.pulsate()},[u,h,oe,z]);const X=Qr(z,"start",M,d),ne=Qr(z,"stop",f,d),ce=Qr(z,"stop",x,d),ae=Qr(z,"stop",A,d),_e=Qr(z,"stop",E=>{oe&&E.preventDefault(),L&&L(E)},d),Ce=Qr(z,"start",O,d),Ue=Qr(z,"stop",m,d),Ye=Qr(z,"stop",C,d),Le=Qr(z,"stop",E=>{oa(E.target)||ue(!1),y&&y(E)},!1),st=js(E=>{I.current||(I.current=E.currentTarget),oa(E.target)&&(ue(!0),_&&_(E)),S&&S(E)}),D=()=>{const E=I.current;return l&&l!=="button"&&!(E.tagName==="A"&&E.href)},Dt=js(E=>{h&&!E.repeat&&oe&&E.key===" "&&z.stop(E,()=>{z.start(E)}),E.target===E.currentTarget&&D()&&E.key===" "&&E.preventDefault(),T&&T(E),E.target===E.currentTarget&&D()&&E.key==="Enter"&&!c&&(E.preventDefault(),g&&g(E))}),He=js(E=>{h&&E.key===" "&&oe&&!E.defaultPrevented&&z.stop(E,()=>{z.pulsate(E)}),w&&w(E),g&&E.target===E.currentTarget&&D()&&E.key===" "&&!E.defaultPrevented&&g(E)});let Oe=l;Oe==="button"&&(Y.href||Y.to)&&(Oe=v);const Ee={};Oe==="button"?(Ee.type=B===void 0?"button":B,Ee.disabled=c):(!Y.href&&!Y.to&&(Ee.role="button"),c&&(Ee["aria-disabled"]=c));const Qe=Ei(n,I),Se={...r,centerRipple:o,component:l,disabled:c,disableRipple:u,disableTouchRipple:d,focusRipple:h,tabIndex:N,focusVisible:oe},P=JP(Se);return R.jsxs(e3,{as:Oe,className:Zt(P.root,a),ownerState:Se,onBlur:Le,onClick:g,onContextMenu:ne,onFocus:st,onKeyDown:Dt,onKeyUp:He,onMouseDown:X,onMouseLeave:_e,onMouseUp:ae,onDragLeave:ce,onTouchEnd:Ue,onTouchMove:Ye,onTouchStart:Ce,ref:Qe,tabIndex:c?-1:N,type:B,...Ee,...Y,children:[s,Fe?R.jsx(KP,{ref:q,center:o,...H}):null]})});function Qr(t,e,n,r=!1){return js(i=>(n&&n(i),r||t[e](i),!0))}function n3(t){return co("MuiIconButton",t)}const r3=uo("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),i3=t=>{const{classes:e,disabled:n,color:r,edge:i,size:o}=t,s={root:["root",n&&"disabled",r!=="default"&&`color${$t(r)}`,i&&`edge${$t(i)}`,`size${$t(o)}`]};return Jo(s,n3,e)},o3=Ir(t3,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="default"&&e[`color${$t(n.color)}`],n.edge&&e[`edge${$t(n.edge)}`],e[`size${$t(n.size)}`]]}})(ro(({theme:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:gi(t.palette.action.active,t.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),ro(({theme:t})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(t.palette).filter(mf()).map(([e])=>({props:{color:e},style:{color:(t.vars||t).palette[e].main}})),...Object.entries(t.palette).filter(mf()).map(([e])=>({props:{color:e},style:{"--IconButton-hoverBg":t.vars?`rgba(${(t.vars||t).palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:gi((t.vars||t).palette[e].main,t.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:t.typography.pxToRem(28)}}],[`&.${r3.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}}))),Xa=Z.forwardRef(function(e,n){const r=fo({props:e,name:"MuiIconButton"}),{edge:i=!1,children:o,className:s,color:a="default",disabled:l=!1,disableFocusRipple:c=!1,size:u="medium",...d}=r,h={...r,edge:i,color:a,disabled:l,disableFocusRipple:c,size:u},p=i3(h);return R.jsx(o3,{className:Zt(p.root,s),centerRipple:!0,focusRipple:!c,disabled:l,ref:n,...d,ownerState:h,children:o})}),s3=Ra(R.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");function a3(t){return co("MuiTypography",t)}uo("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const l3={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},c3=eR(),u3=t=>{const{align:e,gutterBottom:n,noWrap:r,paragraph:i,variant:o,classes:s}=t,a={root:["root",o,t.align!=="inherit"&&`align${$t(e)}`,n&&"gutterBottom",r&&"noWrap",i&&"paragraph"]};return Jo(a,a3,s)},f3=Ir("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${$t(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(ro(({theme:t})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([n,r])=>n!=="inherit"&&r&&typeof r=="object").map(([n,r])=>({props:{variant:n},style:r})),...Object.entries(t.palette).filter(mf()).map(([n])=>({props:{color:n},style:{color:(t.vars||t).palette[n].main}})),...Object.entries(((e=t.palette)==null?void 0:e.text)||{}).filter(([,n])=>typeof n=="string").map(([n])=>({props:{color:`text${$t(n)}`},style:{color:(t.vars||t).palette.text[n]}})),{props:({ownerState:n})=>n.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:n})=>n.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:n})=>n.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:n})=>n.paragraph,style:{marginBottom:16}}]}})),Ey={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},d3=Z.forwardRef(function(e,n){const{color:r,...i}=fo({props:e,name:"MuiTypography"}),o=!l3[r],s=c3({...i,...o&&{color:r}}),{align:a="inherit",className:l,component:c,gutterBottom:u=!1,noWrap:d=!1,paragraph:h=!1,variant:p="body1",variantMapping:v=Ey,...y}=s,g={...s,align:a,color:r,className:l,component:c,gutterBottom:u,noWrap:d,paragraph:h,variant:p,variantMapping:v},f=c||(h?"p":v[p]||Ey[p])||"span",x=u3(g);return R.jsx(f3,{as:f,ref:n,className:Zt(x.root,l),...y,ownerState:g,style:{...a!=="inherit"&&{"--Typography-textAlign":a},...y.style}})});function h3(t){return co("MuiLink",t)}const p3=uo("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),m3=({theme:t,ownerState:e})=>{const n=e.color,r=sa(t,`palette.${n}`,!1)||e.color,i=sa(t,`palette.${n}Channel`);return"vars"in t&&i?`rgba(${i} / 0.4)`:gi(r,.4)},My={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},g3=t=>{const{classes:e,component:n,focusVisible:r,underline:i}=t,o={root:["root",`underline${$t(i)}`,n==="button"&&"button",r&&"focusVisible"]};return Jo(o,h3,e)},v3=Ir(d3,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`underline${$t(n.underline)}`],n.component==="button"&&e.button]}})(ro(({theme:t})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:n})=>e==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(t.palette).filter(mf()).map(([e])=>({props:{underline:"always",color:e},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette[e].mainChannel} / 0.4)`:gi(t.palette[e].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.4)`:gi(t.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.secondaryChannel} / 0.4)`:gi(t.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(t.vars||t).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${p3.focusVisible}`]:{outline:"auto"}}}]}))),Tn=Z.forwardRef(function(e,n){const r=fo({props:e,name:"MuiLink"}),i=Qg(),{className:o,color:s="primary",component:a="a",onBlur:l,onFocus:c,TypographyClasses:u,underline:d="always",variant:h="inherit",sx:p,...v}=r,[y,g]=Z.useState(!1),f=T=>{oa(T.target)||g(!1),l&&l(T)},x=T=>{oa(T.target)&&g(!0),c&&c(T)},S={...r,color:s,component:a,focusVisible:y,underline:d,variant:h},_=g3(S);return R.jsx(v3,{color:s,className:Zt(_.root,o),classes:u,component:a,onBlur:f,onFocus:x,ref:n,ownerState:S,variant:h,...v,sx:[...My[s]===void 0?[{color:s}]:[],...Array.isArray(p)?p:[p]],style:{...v.style,...d==="always"&&s!=="inherit"&&!My[s]&&{"--Link-underlineColor":m3({theme:i,ownerState:S})}}})}),y3="https://derrickeberlein.dev/assets/26014_Derrick_Eberlein-DY8wBFdT.pdf",_3=()=>R.jsx("div",{className:"header-container",children:R.jsxs("div",{className:"header-content",children:[R.jsx("h1",{children:"Derrick Eberlein"}),R.jsx("h2",{children:"Software Engineer"}),R.jsx("h3",{className:"brush-script",children:"Turning intrusive thoughts into reality."}),R.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[R.jsx(wn,{title:"GitHub",children:R.jsx(Tn,{href:"https://github.com/reverendtrivium/",rel:"noopener",target:"_blank",underline:"none",children:R.jsx(Xa,{"aria-label":"GitHub",children:R.jsx(iR,{sx:{color:"white","&:hover":{color:"lightgray"}}})})})}),R.jsx(wn,{title:"LinkedIn",children:R.jsx(Tn,{href:"https://www.linkedin.com/in/derrickeberlein/",rel:"noopener",target:"_blank",underline:"none",children:R.jsx(Xa,{"aria-label":"LinkedIn",children:R.jsx(sR,{sx:{color:"white","&:hover":{color:"lightgray"}}})})})}),R.jsx(wn,{title:"Instagram",children:R.jsx(Tn,{href:"https://www.instagram.com/mx.cyberagent/",rel:"noopener",target:"_blank",underline:"none",children:R.jsx(Xa,{"aria-label":"Instagram",children:R.jsx(oR,{sx:{color:"white","&:hover":{color:"lightgray"}}})})})}),R.jsx(wn,{title:"Email Me",children:R.jsx(Tn,{href:"mailto:derrickeberlein@gmail.com",target:"_blank",rel:"noopener",underline:"none",children:R.jsx(Xa,{"aria-label":"Email",children:R.jsx(s3,{sx:{color:"white","&:hover":{color:"lightgray"}}})})})}),R.jsx(wn,{title:"Download Resume",children:R.jsx(Tn,{href:y3,target:"_blank",children:R.jsx(Xa,{onClick:()=>{},"aria-label":"Download Resume",children:R.jsx(aR,{sx:{color:"white","&:hover":{color:"lightgray"}}})})})})]})]})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lv="172",x3=0,wy=1,S3=2,$1=1,E3=2,ii=3,io=0,Dn=1,li=2,Qi=0,qs=1,Ty=2,Ay=3,by=4,M3=5,Co=100,w3=101,T3=102,A3=103,b3=104,C3=200,R3=201,P3=202,L3=203,Vp=204,Gp=205,I3=206,D3=207,N3=208,U3=209,O3=210,k3=211,F3=212,B3=213,z3=214,Wp=0,$p=1,jp=2,ha=3,Xp=4,Yp=5,qp=6,Kp=7,j1=0,H3=1,V3=2,Ji=0,G3=1,W3=2,$3=3,j3=4,X3=5,Y3=6,q3=7,X1=300,pa=301,ma=302,Zp=303,Qp=304,cd=306,Jp=1e3,No=1001,em=1002,Cr=1003,K3=1004,Fc=1005,Vr=1006,Qd=1007,Uo=1008,Ti=1009,Y1=1010,q1=1011,$l=1012,cv=1013,qo=1014,di=1015,ic=1016,uv=1017,fv=1018,ga=1020,K1=35902,Z1=1021,Q1=1022,Tr=1023,J1=1024,eE=1025,Ks=1026,va=1027,tE=1028,dv=1029,nE=1030,hv=1031,pv=1033,bu=33776,Cu=33777,Ru=33778,Pu=33779,tm=35840,nm=35841,rm=35842,im=35843,om=36196,sm=37492,am=37496,lm=37808,cm=37809,um=37810,fm=37811,dm=37812,hm=37813,pm=37814,mm=37815,gm=37816,vm=37817,ym=37818,_m=37819,xm=37820,Sm=37821,Lu=36492,Em=36494,Mm=36495,rE=36283,wm=36284,Tm=36285,Am=36286,Z3=3200,Q3=3201,J3=0,eL=1,Hi="",nr="srgb",ya="srgb-linear",vf="linear",ht="srgb",ls=7680,Cy=519,tL=512,nL=513,rL=514,iE=515,iL=516,oL=517,sL=518,aL=519,Ry=35044,Py="300 es",hi=2e3,yf=2001;class Pa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,s=i.length;o<s;o++)i[o].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=Math.PI/180,bm=180/Math.PI;function oc(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function lL(t,e){return(t%e+e)%e}function eh(t,e,n){return(1-n)*t+n*e}function Ya(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,n=0){gt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*r-s*i+e.x,this.y=o*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,r,i,o,s,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,c)}set(e,n,r,i,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],h=r[2],p=r[5],v=r[8],y=i[0],g=i[3],f=i[6],x=i[1],S=i[4],_=i[7],T=i[2],w=i[5],M=i[8];return o[0]=s*y+a*x+l*T,o[3]=s*g+a*S+l*w,o[6]=s*f+a*_+l*M,o[1]=c*y+u*x+d*T,o[4]=c*g+u*S+d*w,o[7]=c*f+u*_+d*M,o[2]=h*y+p*x+v*T,o[5]=h*g+p*S+v*w,o[8]=h*f+p*_+v*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-r*o*u+r*a*l+i*o*c-i*s*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,p=c*o-s*l,v=n*d+r*h+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(i*c-u*r)*y,e[2]=(a*r-i*s)*y,e[3]=h*y,e[4]=(u*n-i*l)*y,e[5]=(i*o-a*n)*y,e[6]=p*y,e[7]=(r*l-c*n)*y,e[8]=(s*n-r*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(th.makeScale(e,n)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,n){return this.premultiply(th.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new We;function oE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _f(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cL(){const t=_f("canvas");return t.style.display="block",t}const Ly={};function ws(t){t in Ly||(Ly[t]=!0,console.warn(t))}function uL(t,e,n){return new Promise(function(r,i){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:r()}}setTimeout(o,n)})}function fL(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dL(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Iy=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dy=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hL(){const t={enabled:!0,workingColorSpace:ya,spaces:{},convert:function(i,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ht&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ht&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?vf:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,s){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[ya]:{primaries:e,whitePoint:r,transfer:vf,toXYZ:Iy,fromXYZ:Dy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:nr},outputColorSpaceConfig:{drawingBufferColorSpace:nr}},[nr]:{primaries:e,whitePoint:r,transfer:ht,toXYZ:Iy,fromXYZ:Dy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:nr}}}),t}const nt=hL();function vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let cs;class pL{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=_f("canvas")),cs.width=e.width,cs.height=e.height;const r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_f("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let s=0;s<o.length;s++)o[s]=vi(o[s]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(vi(n[r]/255)*255):n[r]=vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mL=0;class sE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mL++}),this.uuid=oc(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?o.push(nh(i[s].image)):o.push(nh(i[s]))}else o=nh(i);r.url=o}return n||(e.images[this.uuid]=r),r}}function nh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pL.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gL=0;class Nn extends Pa{constructor(e=Nn.DEFAULT_IMAGE,n=Nn.DEFAULT_MAPPING,r=No,i=No,o=Vr,s=Uo,a=Tr,l=Ti,c=Nn.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gL++}),this.uuid=oc(),this.name="",this.source=new sE(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jp:e.x=e.x-Math.floor(e.x);break;case No:e.x=e.x<0?0:1;break;case em:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jp:e.y=e.y-Math.floor(e.y);break;case No:e.y=e.y<0?0:1;break;case em:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=X1;Nn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,r=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i+s[12]*o,this.y=s[1]*n+s[5]*r+s[9]*i+s[13]*o,this.z=s[2]*n+s[6]*r+s[10]*i+s[14]*o,this.w=s[3]*n+s[7]*r+s[11]*i+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,_=(p+1)/2,T=(f+1)/2,w=(u+h)/4,M=(d+y)/4,L=(v+g)/4;return S>_&&S>T?S<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(S),i=w/r,o=M/r):_>T?_<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),r=w/i,o=L/i):T<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),r=M/o,i=L/o),this.set(r,i,o,n),this}let x=Math.sqrt((g-v)*(g-v)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(d-y)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vL extends Pa{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new Nn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new sE(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ko extends vL{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class aE extends Nn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Cr,this.minFilter=Cr,this.wrapR=No,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yL extends Nn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=Cr,this.minFilter=Cr,this.wrapR=No,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,o,s,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const h=o[s+0],p=o[s+1],v=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==h||c!==p||u!==v){let g=1-a;const f=l*h+c*p+u*v+d*y,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const T=Math.sqrt(S),w=Math.atan2(T,f*x);g=Math.sin(g*w)/T,a=Math.sin(a*w)/T}const _=a*x;if(l=l*g+h*_,c=c*g+p*_,u=u*g+v*_,d=d*g+y*_,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,r,i,o,s){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=o[s],h=o[s+1],p=o[s+2],v=o[s+3];return e[n]=a*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-a*p,e[n+2]=c*v+u*p+a*h-l*d,e[n+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(o/2),h=l(r/2),p=l(i/2),v=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=r+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-i)*p}else if(r>a&&r>d){const p=2*Math.sqrt(1+r-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-r-d);this._w=(o-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-r-a);this._w=(s-i)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+s*a+i*c-o*l,this._y=i*u+s*l+o*a-r*c,this._z=o*u+s*c+r*l-i*a,this._w=s*u-r*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,s=this._w;let a=s*e._w+r*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=r,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=s*d+this._w*h,this._x=r*d+this._x*h,this._y=i*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ny.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ny.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6]*i,this.y=o[1]*n+o[4]*r+o[7]*i,this.z=o[2]*n+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=e.elements,s=1/(o[3]*n+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*i+o[12])*s,this.y=(o[1]*n+o[5]*r+o[9]*i+o[13])*s,this.z=(o[2]*n+o[6]*r+o[10]*i+o[14])*s,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*i-a*r),u=2*(a*n-o*i),d=2*(o*r-s*n);return this.x=n+l*c+s*d-a*u,this.y=r+l*u+a*c-o*d,this.z=i+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i,this.y=o[1]*n+o[5]*r+o[9]*i,this.z=o[2]*n+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ze(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=i*l-o*a,this.y=o*s-r*l,this.z=r*a-i*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new j,Ny=new sc;class ac{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(yr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(yr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=yr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,yr):yr.fromBufferAttribute(o,s),yr.applyMatrix4(e.matrixWorld),this.expandByPoint(yr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Bc.copy(r.boundingBox)),Bc.applyMatrix4(e.matrixWorld),this.union(Bc)}const i=e.children;for(let o=0,s=i.length;o<s;o++)this.expandByObject(i[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yr),yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),zc.subVectors(this.max,qa),us.subVectors(e.a,qa),fs.subVectors(e.b,qa),ds.subVectors(e.c,qa),Pi.subVectors(fs,us),Li.subVectors(ds,fs),go.subVectors(us,ds);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-go.z,go.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,go.z,0,-go.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-go.y,go.x,0];return!ih(n,us,fs,ds,zc)||(n=[1,0,0,0,1,0,0,0,1],!ih(n,us,fs,ds,zc))?!1:(Hc.crossVectors(Pi,Li),n=[Hc.x,Hc.y,Hc.z],ih(n,us,fs,ds,zc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jr=[new j,new j,new j,new j,new j,new j,new j,new j],yr=new j,Bc=new ac,us=new j,fs=new j,ds=new j,Pi=new j,Li=new j,go=new j,qa=new j,zc=new j,Hc=new j,vo=new j;function ih(t,e,n,r,i){for(let o=0,s=t.length-3;o<=s;o+=3){vo.fromArray(t,o);const a=i.x*Math.abs(vo.x)+i.y*Math.abs(vo.y)+i.z*Math.abs(vo.z),l=e.dot(vo),c=n.dot(vo),u=r.dot(vo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _L=new ac,Ka=new j,oh=new j;class ud{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_L.setFromPoints(e).getCenter(r);let i=0;for(let o=0,s=e.length;o<s;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const n=Ka.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Ka,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(oh)),this.expandByPoint(Ka.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new j,sh=new j,Vc=new j,Ii=new j,ah=new j,Gc=new j,lh=new j;class lE{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){sh.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(sh);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Vc),a=Ii.dot(this.direction),l=-Ii.dot(Vc),c=Ii.lengthSq(),u=Math.abs(1-s*s);let d,h,p,v;if(u>0)if(d=s*l-a,h=s*a-l,v=o*u,d>=0)if(h>=-v)if(h<=v){const y=1/u;d*=y,h*=y,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sh).addScaledVector(Vc,h),p}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const r=ei.dot(this.direction),i=ei.dot(ei)-r*r,o=e.radius*e.radius;if(i>o)return null;const s=Math.sqrt(o-i),a=r-s,l=r+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||o>i||((o>r||isNaN(r))&&(r=o),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,r,i,o){ah.subVectors(n,e),Gc.subVectors(r,e),lh.crossVectors(ah,Gc);let s=this.direction.dot(lh),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(Gc.crossVectors(Ii,Gc));if(l<0)return null;const c=a*this.direction.dot(ah.cross(Ii));if(c<0||l+c>s)return null;const u=-a*Ii.dot(lh);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,r,i,o,s,a,l,c,u,d,h,p,v,y,g){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,s,a,l,c,u,d,h,p,v,y,g)}set(e,n,r,i,o,s,a,l,c,u,d,h,p,v,y,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=r,f[12]=i,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),o=1/hs.setFromMatrixColumn(e,1).length(),s=1/hs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*s,n[9]=r[9]*s,n[10]=r[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,o=e.z,s=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*u,p=s*d,v=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=v+p*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,y=c*d;n[0]=h+y*a,n[4]=v*a-p,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,y=c*d;n[0]=h-y*a,n[4]=-s*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=s*u,n[9]=y-h*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,v=a*u,y=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-h*d,n[8]=v*d+p,n[1]=d,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-y*d}else if(e.order==="XZY"){const h=s*l,p=s*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+y,n[5]=s*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xL,e,SL)}lookAt(e,n,r){const i=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Di.crossVectors(r,Fn),Di.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Di.crossVectors(r,Fn)),Di.normalize(),Wc.crossVectors(Fn,Di),i[0]=Di.x,i[4]=Wc.x,i[8]=Fn.x,i[1]=Di.y,i[5]=Wc.y,i[9]=Fn.y,i[2]=Di.z,i[6]=Wc.z,i[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,s=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],h=r[9],p=r[13],v=r[2],y=r[6],g=r[10],f=r[14],x=r[3],S=r[7],_=r[11],T=r[15],w=i[0],M=i[4],L=i[8],A=i[12],m=i[1],C=i[5],O=i[9],N=i[13],H=i[2],G=i[6],B=i[10],Y=i[14],I=i[3],z=i[7],q=i[11],oe=i[15];return o[0]=s*w+a*m+l*H+c*I,o[4]=s*M+a*C+l*G+c*z,o[8]=s*L+a*O+l*B+c*q,o[12]=s*A+a*N+l*Y+c*oe,o[1]=u*w+d*m+h*H+p*I,o[5]=u*M+d*C+h*G+p*z,o[9]=u*L+d*O+h*B+p*q,o[13]=u*A+d*N+h*Y+p*oe,o[2]=v*w+y*m+g*H+f*I,o[6]=v*M+y*C+g*G+f*z,o[10]=v*L+y*O+g*B+f*q,o[14]=v*A+y*N+g*Y+f*oe,o[3]=x*w+S*m+_*H+T*I,o[7]=x*M+S*C+_*G+T*z,o[11]=x*L+S*O+_*B+T*q,o[15]=x*A+S*N+_*Y+T*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],y=e[7],g=e[11],f=e[15];return v*(+o*l*d-i*c*d-o*a*h+r*c*h+i*a*p-r*l*p)+y*(+n*l*p-n*c*h+o*s*h-i*s*p+i*c*u-o*l*u)+g*(+n*c*d-n*a*p-o*s*d+r*s*p+o*a*u-r*c*u)+f*(-i*a*u-n*l*d+n*a*h+i*s*d-r*s*h+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],y=e[13],g=e[14],f=e[15],x=d*g*c-y*h*c+y*l*p-a*g*p-d*l*f+a*h*f,S=v*h*c-u*g*c-v*l*p+s*g*p+u*l*f-s*h*f,_=u*y*c-v*d*c+v*a*p-s*y*p-u*a*f+s*d*f,T=v*d*l-u*y*l-v*a*h+s*y*h+u*a*g-s*d*g,w=n*x+r*S+i*_+o*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=x*M,e[1]=(y*h*o-d*g*o-y*i*p+r*g*p+d*i*f-r*h*f)*M,e[2]=(a*g*o-y*l*o+y*i*c-r*g*c-a*i*f+r*l*f)*M,e[3]=(d*l*o-a*h*o-d*i*c+r*h*c+a*i*p-r*l*p)*M,e[4]=S*M,e[5]=(u*g*o-v*h*o+v*i*p-n*g*p-u*i*f+n*h*f)*M,e[6]=(v*l*o-s*g*o-v*i*c+n*g*c+s*i*f-n*l*f)*M,e[7]=(s*h*o-u*l*o+u*i*c-n*h*c-s*i*p+n*l*p)*M,e[8]=_*M,e[9]=(v*d*o-u*y*o-v*r*p+n*y*p+u*r*f-n*d*f)*M,e[10]=(s*y*o-v*a*o+v*r*c-n*y*c-s*r*f+n*a*f)*M,e[11]=(u*a*o-s*d*o-u*r*c+n*d*c+s*r*p-n*a*p)*M,e[12]=T*M,e[13]=(u*y*i-v*d*i+v*r*h-n*y*h-u*r*g+n*d*g)*M,e[14]=(v*a*i-s*y*i-v*r*l+n*y*l+s*r*g-n*a*g)*M,e[15]=(s*d*i-u*a*i+u*r*l-n*d*l-s*r*h+n*a*h)*M,this}scale(e){const n=this.elements,r=e.x,i=e.y,o=e.z;return n[0]*=r,n[4]*=i,n[8]*=o,n[1]*=r,n[5]*=i,n[9]*=o,n[2]*=r,n[6]*=i,n[10]*=o,n[3]*=r,n[7]*=i,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),o=1-r,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*s,0,c*l-i*a,u*l+i*s,o*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,o,s){return this.set(1,r,o,0,e,1,s,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,d=a+a,h=o*c,p=o*u,v=o*d,y=s*u,g=s*d,f=a*d,x=l*c,S=l*u,_=l*d,T=r.x,w=r.y,M=r.z;return i[0]=(1-(y+f))*T,i[1]=(p+_)*T,i[2]=(v-S)*T,i[3]=0,i[4]=(p-_)*w,i[5]=(1-(h+f))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(v+S)*M,i[9]=(g-x)*M,i[10]=(1-(h+y))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let o=hs.set(i[0],i[1],i[2]).length();const s=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],_r.copy(this);const c=1/o,u=1/s,d=1/a;return _r.elements[0]*=c,_r.elements[1]*=c,_r.elements[2]*=c,_r.elements[4]*=u,_r.elements[5]*=u,_r.elements[6]*=u,_r.elements[8]*=d,_r.elements[9]*=d,_r.elements[10]*=d,n.setFromRotationMatrix(_r),r.x=o,r.y=s,r.z=a,this}makePerspective(e,n,r,i,o,s,a=hi){const l=this.elements,c=2*o/(n-e),u=2*o/(r-i),d=(n+e)/(n-e),h=(r+i)/(r-i);let p,v;if(a===hi)p=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===yf)p=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,o,s,a=hi){const l=this.elements,c=1/(n-e),u=1/(r-i),d=1/(s-o),h=(n+e)*c,p=(r+i)*u;let v,y;if(a===hi)v=(s+o)*d,y=-2*d;else if(a===yf)v=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const hs=new j,_r=new Ot,xL=new j(0,0,0),SL=new j(1,1,1),Di=new j,Wc=new j,Fn=new j,Uy=new Ot,Oy=new sc;class Ai{constructor(e=0,n=0,r=0,i=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,o=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Uy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uy,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Oy.setFromEuler(this),this.setFromQuaternion(Oy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class cE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EL=0;const ky=new j,ps=new sc,ti=new Ot,$c=new j,Za=new j,ML=new j,wL=new sc,Fy=new j(1,0,0),By=new j(0,1,0),zy=new j(0,0,1),Hy={type:"added"},TL={type:"removed"},ms={type:"childadded",child:null},ch={type:"childremoved",child:null};class Un extends Pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EL++}),this.uuid=oc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new j,n=new Ai,r=new sc,i=new j(1,1,1);function o(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new We}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Fy,e)}rotateY(e){return this.rotateOnAxis(By,e)}rotateZ(e){return this.rotateOnAxis(zy,e)}translateOnAxis(e,n){return ky.copy(e).applyQuaternion(this.quaternion),this.position.add(ky.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fy,e)}translateY(e){return this.translateOnAxis(By,e)}translateZ(e){return this.translateOnAxis(zy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?$c.copy(e):$c.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Za,$c,this.up):ti.lookAt($c,Za,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(ti),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hy),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(TL),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hy),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,ML),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,wL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let o=0,s=i.length;o<s;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),v=s(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),v.length>0&&(r.nodes=v)}return r.object=i,r;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Un.DEFAULT_UP=new j(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xr=new j,ni=new j,uh=new j,ri=new j,gs=new j,vs=new j,Vy=new j,fh=new j,dh=new j,hh=new j,ph=new Ut,mh=new Ut,gh=new Ut;class wr{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),xr.subVectors(e,n),i.cross(xr);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,n,r,i,o){xr.subVectors(i,n),ni.subVectors(r,n),uh.subVectors(e,n);const s=xr.dot(xr),a=xr.dot(ni),l=xr.dot(uh),c=ni.dot(ni),u=ni.dot(uh),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,v=(s*u-a*l)*h;return o.set(1-p-v,v,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,r,i,o,s,a,l){return this.getBarycoord(e,n,r,i,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ri.x),l.addScaledVector(s,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,r,i,o,s){return ph.setScalar(0),mh.setScalar(0),gh.setScalar(0),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,r),gh.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(ph,o.x),s.addScaledVector(mh,o.y),s.addScaledVector(gh,o.z),s}static isFrontFacing(e,n,r,i){return xr.subVectors(r,n),ni.subVectors(e,n),xr.cross(ni).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xr.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),xr.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,o){return wr.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}containsPoint(e){return wr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,o=this.c;let s,a;gs.subVectors(i,r),vs.subVectors(o,r),fh.subVectors(e,r);const l=gs.dot(fh),c=vs.dot(fh);if(l<=0&&c<=0)return n.copy(r);dh.subVectors(e,i);const u=gs.dot(dh),d=vs.dot(dh);if(u>=0&&d<=u)return n.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(r).addScaledVector(gs,s);hh.subVectors(e,o);const p=gs.dot(hh),v=vs.dot(hh);if(v>=0&&p<=v)return n.copy(o);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(r).addScaledVector(vs,a);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return Vy.subVectors(o,i),a=(d-u)/(d-u+(p-v)),n.copy(i).addScaledVector(Vy,a);const f=1/(g+y+h);return s=y*f,a=h*f,n.copy(r).addScaledVector(gs,s).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},jc={h:0,s:0,l:0};function vh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ut{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=nr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=nt.workingColorSpace){return this.r=e,this.g=n,this.b=r,nt.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=nt.workingColorSpace){if(e=lL(e,1),n=Ze(n,0,1),r=Ze(r,0,1),n===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+n):r+n-r*n,s=2*r-o;this.r=vh(s,o,e+1/3),this.g=vh(s,o,e),this.b=vh(s,o,e-1/3)}return nt.toWorkingColorSpace(this,i),this}setStyle(e,n=nr){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=nr){const r=uE[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nr){return nt.fromWorkingColorSpace(un.copy(this),e),Math.round(Ze(un.r*255,0,255))*65536+Math.round(Ze(un.g*255,0,255))*256+Math.round(Ze(un.b*255,0,255))}getHexString(e=nr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(un.copy(this),n);const r=un.r,i=un.g,o=un.b,s=Math.max(r,i,o),a=Math.min(r,i,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case r:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-r)/d+2;break;case o:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=nr){nt.fromWorkingColorSpace(un.copy(this),e);const n=un.r,r=un.g,i=un.b;return e!==nr?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(jc);const r=eh(Ni.h,jc.h,n),i=eh(Ni.s,jc.s,n),o=eh(Ni.l,jc.l,n);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*n+o[3]*r+o[6]*i,this.g=o[1]*n+o[4]*r+o[7]*i,this.b=o[2]*n+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ut;ut.NAMES=uE;let AL=0;class lc extends Pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AL++}),this.uuid=oc(),this.name="",this.type="Material",this.blending=qs,this.side=io,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vp,this.blendDst=Gp,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==io&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vp&&(r.blendSrc=this.blendSrc),this.blendDst!==Gp&&(r.blendDst=this.blendDst),this.blendEquation!==Co&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=i(e.textures),s=i(e.images);o.length>0&&(r.textures=o),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=n[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fE extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=j1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new j,Xc=new gt;class Xr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ry,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Xc.fromBufferAttribute(this,n),Xc.applyMatrix3(e),this.setXY(n,Xc.x,Xc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ya(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ya(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ya(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ya(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ya(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,o){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),i=En(i,this.array),o=En(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ry&&(e.usage=this.usage),e}}class dE extends Xr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class hE extends Xr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Rr extends Xr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let bL=0;const er=new Ot,yh=new Un,ys=new j,Bn=new ac,Qa=new ac,Yt=new j;class qr extends Pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bL++}),this.uuid=oc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oE(e)?hE:dE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new We().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return er.makeRotationFromQuaternion(e),this.applyMatrix4(er),this}rotateX(e){return er.makeRotationX(e),this.applyMatrix4(er),this}rotateY(e){return er.makeRotationY(e),this.applyMatrix4(er),this}rotateZ(e){return er.makeRotationZ(e),this.applyMatrix4(er),this}translate(e,n,r){return er.makeTranslation(e,n,r),this.applyMatrix4(er),this}scale(e,n,r){return er.makeScale(e,n,r),this.applyMatrix4(er),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let i=0,o=e.length;i<o;i++){const s=e[i];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Rr(r,3))}else{const r=Math.min(e.length,n.count);for(let i=0;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const o=n[r];Bn.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ud);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Bn.min,Qa.min),Bn.expandByPoint(Yt),Yt.addVectors(Bn.max,Qa.max),Bn.expandByPoint(Yt)):(Bn.expandByPoint(Qa.min),Bn.expandByPoint(Qa.max))}Bn.getCenter(r);let i=0;for(let o=0,s=e.count;o<s;o++)Yt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(Yt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Yt.add(ys)),i=Math.max(i,r.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xr(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<r.count;L++)a[L]=new j,l[L]=new j;const c=new j,u=new j,d=new j,h=new gt,p=new gt,v=new gt,y=new j,g=new j;function f(L,A,m){c.fromBufferAttribute(r,L),u.fromBufferAttribute(r,A),d.fromBufferAttribute(r,m),h.fromBufferAttribute(o,L),p.fromBufferAttribute(o,A),v.fromBufferAttribute(o,m),u.sub(c),d.sub(c),p.sub(h),v.sub(h);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(C),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),a[L].add(y),a[A].add(y),a[m].add(y),l[L].add(g),l[A].add(g),l[m].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,A=x.length;L<A;++L){const m=x[L],C=m.start,O=m.count;for(let N=C,H=C+O;N<H;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new j,_=new j,T=new j,w=new j;function M(L){T.fromBufferAttribute(i,L),w.copy(T);const A=a[L];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),_.crossVectors(w,A);const C=_.dot(l[L])<0?-1:1;s.setXYZW(L,S.x,S.y,S.z,C)}for(let L=0,A=x.length;L<A;++L){const m=x[L],C=m.start,O=m.count;for(let N=C,H=C+O;N<H;N+=3)M(e.getX(N+0)),M(e.getX(N+1)),M(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const i=new j,o=new j,s=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(n,v),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,g),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),a.fromBufferAttribute(r,v),l.fromBufferAttribute(r,y),c.fromBufferAttribute(r,g),a.add(u),l.add(u),c.add(u),r.setXYZ(v,a.x,a.y,a.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)i.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),u.subVectors(s,o),d.subVectors(i,o),u.cross(d),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new Xr(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qr,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,r);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gy=new Ot,yo=new lE,Yc=new ud,Wy=new j,qc=new j,Kc=new j,Zc=new j,_h=new j,Qc=new j,$y=new j,Jc=new j;class pi extends Un{constructor(e=new qr,n=new fE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,s=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Qc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(_h.fromBufferAttribute(d,e),s?Qc.addScaledVector(_h,u):Qc.addScaledVector(_h.sub(n),u))}n.add(Qc)}return n}raycast(e,n){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yc.copy(r.boundingSphere),Yc.applyMatrix4(o),yo.copy(e.ray).recast(e.near),!(Yc.containsPoint(yo.origin)===!1&&(yo.intersectSphere(Yc,Wy)===null||yo.origin.distanceToSquared(Wy)>(e.far-e.near)**2))&&(Gy.copy(o).invert(),yo.copy(e.ray).applyMatrix4(Gy),!(r.boundingBox!==null&&yo.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,yo)))}_computeIntersections(e,n,r){let i;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,y=h.length;v<y;v++){const g=h[v],f=s[g.materialIndex],x=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,T=S;_<T;_+=3){const w=a.getX(_),M=a.getX(_+1),L=a.getX(_+2);i=eu(this,f,e,r,c,u,d,w,M,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const x=a.getX(g),S=a.getX(g+1),_=a.getX(g+2);i=eu(this,s,e,r,c,u,d,x,S,_),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,y=h.length;v<y;v++){const g=h[v],f=s[g.materialIndex],x=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,T=S;_<T;_+=3){const w=_,M=_+1,L=_+2;i=eu(this,f,e,r,c,u,d,w,M,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const x=g,S=g+1,_=g+2;i=eu(this,s,e,r,c,u,d,x,S,_),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function CL(t,e,n,r,i,o,s,a){let l;if(e.side===Dn?l=r.intersectTriangle(s,o,i,!0,a):l=r.intersectTriangle(i,o,s,e.side===io,a),l===null)return null;Jc.copy(a),Jc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Jc);return c<n.near||c>n.far?null:{distance:c,point:Jc.clone(),object:t}}function eu(t,e,n,r,i,o,s,a,l,c){t.getVertexPosition(a,qc),t.getVertexPosition(l,Kc),t.getVertexPosition(c,Zc);const u=CL(t,e,n,r,qc,Kc,Zc,$y);if(u){const d=new j;wr.getBarycoord($y,qc,Kc,Zc,d),i&&(u.uv=wr.getInterpolatedAttribute(i,a,l,c,d,new gt)),o&&(u.uv1=wr.getInterpolatedAttribute(o,a,l,c,d,new gt)),s&&(u.normal=wr.getInterpolatedAttribute(s,a,l,c,d,new j),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};wr.getNormal(qc,Kc,Zc,h.normal),u.face=h,u.barycoord=d}return u}class cc extends qr{constructor(e=1,n=1,r=1,i=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:o,depthSegments:s};const a=this;i=Math.floor(i),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,r,n,e,s,o,0),v("z","y","x",1,-1,r,n,-e,s,o,1),v("x","z","y",1,1,e,r,n,i,s,2),v("x","z","y",1,-1,e,r,-n,i,s,3),v("x","y","z",1,-1,e,n,r,i,o,4),v("x","y","z",-1,-1,e,n,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new Rr(c,3)),this.setAttribute("normal",new Rr(u,3)),this.setAttribute("uv",new Rr(d,2));function v(y,g,f,x,S,_,T,w,M,L,A){const m=_/M,C=T/L,O=_/2,N=T/2,H=w/2,G=M+1,B=L+1;let Y=0,I=0;const z=new j;for(let q=0;q<B;q++){const oe=q*C-N;for(let ue=0;ue<G;ue++){const Fe=ue*m-O;z[y]=Fe*x,z[g]=oe*S,z[f]=H,c.push(z.x,z.y,z.z),z[y]=0,z[g]=0,z[f]=w>0?1:-1,u.push(z.x,z.y,z.z),d.push(ue/M),d.push(1-q/L),Y+=1}}for(let q=0;q<L;q++)for(let oe=0;oe<M;oe++){const ue=h+oe+G*q,Fe=h+oe+G*(q+1),X=h+(oe+1)+G*(q+1),ne=h+(oe+1)+G*q;l.push(ue,Fe,ne),l.push(Fe,X,ne),I+=6}a.addGroup(p,I,A),p+=I,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _a(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const r=_a(t[n]);for(const i in r)e[i]=r[i]}return e}function RL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function pE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const PL={clone:_a,merge:mn};var LL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oo extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LL,this.fragmentShader=IL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=RL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?n.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[i]={type:"m4",value:s.toArray()}:n.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class mE extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new j,jy=new gt,Xy=new gt;class sr extends mE{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bm*2*Math.atan(Math.tan(Jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,jy,Xy),n.subVectors(Xy,jy)}setViewOffset(e,n,r,i,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jd*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,o=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*i/l,n-=s.offsetY*r/c,i*=s.width/l,r*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,xs=1;class DL extends Un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sr(_s,xs,e,n);i.layers=this.layers,this.add(i);const o=new sr(_s,xs,e,n);o.layers=this.layers,this.add(o);const s=new sr(_s,xs,e,n);s.layers=this.layers,this.add(s);const a=new sr(_s,xs,e,n);a.layers=this.layers,this.add(a);const l=new sr(_s,xs,e,n);l.layers=this.layers,this.add(l);const c=new sr(_s,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===hi)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yf)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,o),e.setRenderTarget(r,1,i),e.render(n,s),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,r.texture.needsPMREMUpdate=!0}}class gE extends Nn{constructor(e,n,r,i,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:pa,super(e,n,r,i,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NL extends Ko{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new gE(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cc(5,5,5),o=new oo({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:Qi});o.uniforms.tEquirect.value=n;const s=new pi(i,o),a=n.minFilter;return n.minFilter===Uo&&(n.minFilter=Vr),new DL(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,r,i){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,r,i);e.setRenderTarget(o)}}class UL extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xh=new j,OL=new j,kL=new We;class Ao{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=xh.subVectors(r,n).cross(OL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(xh),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||kL.getNormalMatrix(e),i=this.coplanarPoint(xh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _o=new ud,tu=new j;class vE{constructor(e=new Ao,n=new Ao,r=new Ao,i=new Ao,o=new Ao,s=new Ao){this.planes=[e,n,r,i,o,s]}set(e,n,r,i,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=hi){const r=this.planes,i=e.elements,o=i[0],s=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],p=i[8],v=i[9],y=i[10],g=i[11],f=i[12],x=i[13],S=i[14],_=i[15];if(r[0].setComponents(l-o,h-c,g-p,_-f).normalize(),r[1].setComponents(l+o,h+c,g+p,_+f).normalize(),r[2].setComponents(l+s,h+u,g+v,_+x).normalize(),r[3].setComponents(l-s,h-u,g-v,_-x).normalize(),r[4].setComponents(l-a,h-d,g-y,_-S).normalize(),n===hi)r[5].setComponents(l+a,h+d,g+y,_+S).normalize();else if(n===yf)r[5].setComponents(a,d,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_o.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_o)}intersectsSprite(e){return _o.center.set(0,0,0),_o.radius=.7071067811865476,_o.applyMatrix4(e.matrixWorld),this.intersectsSphere(_o)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(tu.x=i.normal.x>0?e.max.x:e.min.x,tu.y=i.normal.y>0?e.max.y:e.min.y,tu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yE extends lc{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yy=new Ot,Cm=new lE,nu=new ud,ru=new j;class FL extends Un{constructor(e=new qr,n=new yE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(i),nu.radius+=o,e.ray.intersectsSphere(nu)===!1)return;Yy.copy(i).invert(),Cm.copy(e.ray).applyMatrix4(Yy);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=r.index,d=r.attributes.position;if(c!==null){const h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let v=h,y=p;v<y;v++){const g=c.getX(v);ru.fromBufferAttribute(d,g),qy(ru,g,l,i,e,n,this)}}else{const h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let v=h,y=p;v<y;v++)ru.fromBufferAttribute(d,v),qy(ru,v,l,i,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=i.length;o<s;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function qy(t,e,n,r,i,o,s){const a=Cm.distanceSqToPoint(t);if(a<n){const l=new j;Cm.closestPointToPoint(t,l),l.applyMatrix4(r);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class iu extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class _E extends Nn{constructor(e,n,r,i,o,s,a,l,c,u=Ks){if(u!==Ks&&u!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ks&&(r=qo),r===void 0&&u===va&&(r=ga),super(null,i,o,s,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Cr,this.minFilter=l!==void 0?l:Cr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class fd extends qr{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const o=e/2,s=n/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=n/l,p=[],v=[],y=[],g=[];for(let f=0;f<u;f++){const x=f*h-s;for(let S=0;S<c;S++){const _=S*d-o;v.push(_,-x,0),y.push(0,0,1),g.push(S/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const S=x+c*f,_=x+c*(f+1),T=x+1+c*(f+1),w=x+1+c*f;p.push(S,_,w),p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new Rr(v,3)),this.setAttribute("normal",new Rr(y,3)),this.setAttribute("uv",new Rr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.width,e.height,e.widthSegments,e.heightSegments)}}class mv extends qr{constructor(e=1,n=32,r=16,i=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:i,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new j,h=new j,p=[],v=[],y=[],g=[];for(let f=0;f<=r;f++){const x=[],S=f/r;let _=0;f===0&&s===0?_=.5/n:f===r&&l===Math.PI&&(_=-.5/n);for(let T=0;T<=n;T++){const w=T/n;d.x=-e*Math.cos(i+w*o)*Math.sin(s+S*a),d.y=e*Math.cos(s+S*a),d.z=e*Math.sin(i+w*o)*Math.sin(s+S*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),g.push(w+_,1-S),x.push(c++)}u.push(x)}for(let f=0;f<r;f++)for(let x=0;x<n;x++){const S=u[f][x+1],_=u[f][x],T=u[f+1][x],w=u[f+1][x+1];(f!==0||s>0)&&p.push(S,_,w),(f!==r-1||l<Math.PI)&&p.push(_,T,w)}this.setIndex(p),this.setAttribute("position",new Rr(v,3)),this.setAttribute("normal",new Rr(y,3)),this.setAttribute("uv",new Rr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mv(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class BL extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zL extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class HL extends mE{constructor(e=-1,n=1,r=1,i=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,s=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VL extends sr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Ky(t,e,n,r){const i=GL(r);switch(n){case Z1:return t*e;case J1:return t*e;case eE:return t*e*2;case tE:return t*e/i.components*i.byteLength;case dv:return t*e/i.components*i.byteLength;case nE:return t*e*2/i.components*i.byteLength;case hv:return t*e*2/i.components*i.byteLength;case Q1:return t*e*3/i.components*i.byteLength;case Tr:return t*e*4/i.components*i.byteLength;case pv:return t*e*4/i.components*i.byteLength;case bu:case Cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ru:case Pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nm:case im:return Math.max(t,16)*Math.max(e,8)/4;case tm:case rm:return Math.max(t,8)*Math.max(e,8)/2;case om:case sm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case am:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cm:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case um:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dm:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mm:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ym:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _m:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lu:case Em:case Mm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rE:case wm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tm:case Am:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GL(t){switch(t){case Ti:case Y1:return{byteLength:1,components:1};case $l:case q1:case ic:return{byteLength:2,components:1};case uv:case fv:return{byteLength:2,components:4};case qo:case cv:case di:return{byteLength:4,components:1};case K1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xE(){let t=null,e=!1,n=null,r=null;function i(o,s){n(o,s),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function WL(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){const v=d[h],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:s}}var $L=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JL=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iI=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oI=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_I=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SI="gl_FragColor = linearToOutputTexel( gl_FragColor );",EI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,II=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GI=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$I=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XI=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YI=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qI=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KI=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_D=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ED=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:$L,alphahash_pars_fragment:jL,alphamap_fragment:XL,alphamap_pars_fragment:YL,alphatest_fragment:qL,alphatest_pars_fragment:KL,aomap_fragment:ZL,aomap_pars_fragment:QL,batching_pars_vertex:JL,batching_vertex:eI,begin_vertex:tI,beginnormal_vertex:nI,bsdfs:rI,iridescence_fragment:iI,bumpmap_pars_fragment:oI,clipping_planes_fragment:sI,clipping_planes_pars_fragment:aI,clipping_planes_pars_vertex:lI,clipping_planes_vertex:cI,color_fragment:uI,color_pars_fragment:fI,color_pars_vertex:dI,color_vertex:hI,common:pI,cube_uv_reflection_fragment:mI,defaultnormal_vertex:gI,displacementmap_pars_vertex:vI,displacementmap_vertex:yI,emissivemap_fragment:_I,emissivemap_pars_fragment:xI,colorspace_fragment:SI,colorspace_pars_fragment:EI,envmap_fragment:MI,envmap_common_pars_fragment:wI,envmap_pars_fragment:TI,envmap_pars_vertex:AI,envmap_physical_pars_fragment:kI,envmap_vertex:bI,fog_vertex:CI,fog_pars_vertex:RI,fog_fragment:PI,fog_pars_fragment:LI,gradientmap_pars_fragment:II,lightmap_pars_fragment:DI,lights_lambert_fragment:NI,lights_lambert_pars_fragment:UI,lights_pars_begin:OI,lights_toon_fragment:FI,lights_toon_pars_fragment:BI,lights_phong_fragment:zI,lights_phong_pars_fragment:HI,lights_physical_fragment:VI,lights_physical_pars_fragment:GI,lights_fragment_begin:WI,lights_fragment_maps:$I,lights_fragment_end:jI,logdepthbuf_fragment:XI,logdepthbuf_pars_fragment:YI,logdepthbuf_pars_vertex:qI,logdepthbuf_vertex:KI,map_fragment:ZI,map_pars_fragment:QI,map_particle_fragment:JI,map_particle_pars_fragment:e2,metalnessmap_fragment:t2,metalnessmap_pars_fragment:n2,morphinstance_vertex:r2,morphcolor_vertex:i2,morphnormal_vertex:o2,morphtarget_pars_vertex:s2,morphtarget_vertex:a2,normal_fragment_begin:l2,normal_fragment_maps:c2,normal_pars_fragment:u2,normal_pars_vertex:f2,normal_vertex:d2,normalmap_pars_fragment:h2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:v2,opaque_fragment:y2,packing:_2,premultiplied_alpha_fragment:x2,project_vertex:S2,dithering_fragment:E2,dithering_pars_fragment:M2,roughnessmap_fragment:w2,roughnessmap_pars_fragment:T2,shadowmap_pars_fragment:A2,shadowmap_pars_vertex:b2,shadowmap_vertex:C2,shadowmask_pars_fragment:R2,skinbase_vertex:P2,skinning_pars_vertex:L2,skinning_vertex:I2,skinnormal_vertex:D2,specularmap_fragment:N2,specularmap_pars_fragment:U2,tonemapping_fragment:O2,tonemapping_pars_fragment:k2,transmission_fragment:F2,transmission_pars_fragment:B2,uv_pars_fragment:z2,uv_pars_vertex:H2,uv_vertex:V2,worldpos_vertex:G2,background_vert:W2,background_frag:$2,backgroundCube_vert:j2,backgroundCube_frag:X2,cube_vert:Y2,cube_frag:q2,depth_vert:K2,depth_frag:Z2,distanceRGBA_vert:Q2,distanceRGBA_frag:J2,equirect_vert:eD,equirect_frag:tD,linedashed_vert:nD,linedashed_frag:rD,meshbasic_vert:iD,meshbasic_frag:oD,meshlambert_vert:sD,meshlambert_frag:aD,meshmatcap_vert:lD,meshmatcap_frag:cD,meshnormal_vert:uD,meshnormal_frag:fD,meshphong_vert:dD,meshphong_frag:hD,meshphysical_vert:pD,meshphysical_frag:mD,meshtoon_vert:gD,meshtoon_frag:vD,points_vert:yD,points_frag:_D,shadow_vert:xD,shadow_frag:SD,sprite_vert:ED,sprite_frag:MD},he={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fr={basic:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ut(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:mn([he.points,he.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:mn([he.common,he.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:mn([he.sprite,he.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:mn([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:mn([he.lights,he.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Fr.physical={uniforms:mn([Fr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ou={r:0,b:0,g:0},xo=new Ai,wD=new Ot;function TD(t,e,n,r,i,o,s){const a=new ut(0);let l=o===!0?0:1,c,u,d=null,h=0,p=null;function v(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?n:e).get(_)),_}function y(S){let _=!1;const T=v(S);T===null?f(a,l):T&&T.isColor&&(f(T,1),_=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?r.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(S,_){const T=v(_);T&&(T.isCubeTexture||T.mapping===cd)?(u===void 0&&(u=new pi(new cc(1,1,1),new oo({name:"BackgroundCubeMaterial",uniforms:_a(Fr.backgroundCube.uniforms),vertexShader:Fr.backgroundCube.vertexShader,fragmentShader:Fr.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,M,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xo.copy(_.backgroundRotation),xo.x*=-1,xo.y*=-1,xo.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xo.y*=-1,xo.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wD.makeRotationFromEuler(xo)),u.material.toneMapped=nt.getTransfer(T.colorSpace)!==ht,(d!==T||h!==T.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=T,h=T.version,p=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new pi(new fd(2,2),new oo({name:"BackgroundMaterial",uniforms:_a(Fr.background.uniforms),vertexShader:Fr.background.vertexShader,fragmentShader:Fr.background.fragmentShader,side:io,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=nt.getTransfer(T.colorSpace)!==ht,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,p=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,_){S.getRGB(ou,pE(t)),r.buffers.color.setClear(ou.r,ou.g,ou.b,_,s)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:y,addToRenderList:g,dispose:x}}function AD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=h(null);let o=i,s=!1;function a(m,C,O,N,H){let G=!1;const B=d(N,O,C);o!==B&&(o=B,c(o.object)),G=p(m,N,O,H),G&&v(m,N,O,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,_(m,C,O,N),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(m){return t.bindVertexArray(m)}function u(m){return t.deleteVertexArray(m)}function d(m,C,O){const N=O.wireframe===!0;let H=r[m.id];H===void 0&&(H={},r[m.id]=H);let G=H[C.id];G===void 0&&(G={},H[C.id]=G);let B=G[N];return B===void 0&&(B=h(l()),G[N]=B),B}function h(m){const C=[],O=[],N=[];for(let H=0;H<n;H++)C[H]=0,O[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:N,object:m,attributes:{},index:null}}function p(m,C,O,N){const H=o.attributes,G=C.attributes;let B=0;const Y=O.getAttributes();for(const I in Y)if(Y[I].location>=0){const q=H[I];let oe=G[I];if(oe===void 0&&(I==="instanceMatrix"&&m.instanceMatrix&&(oe=m.instanceMatrix),I==="instanceColor"&&m.instanceColor&&(oe=m.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;B++}return o.attributesNum!==B||o.index!==N}function v(m,C,O,N){const H={},G=C.attributes;let B=0;const Y=O.getAttributes();for(const I in Y)if(Y[I].location>=0){let q=G[I];q===void 0&&(I==="instanceMatrix"&&m.instanceMatrix&&(q=m.instanceMatrix),I==="instanceColor"&&m.instanceColor&&(q=m.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),H[I]=oe,B++}o.attributes=H,o.attributesNum=B,o.index=N}function y(){const m=o.newAttributes;for(let C=0,O=m.length;C<O;C++)m[C]=0}function g(m){f(m,0)}function f(m,C){const O=o.newAttributes,N=o.enabledAttributes,H=o.attributeDivisors;O[m]=1,N[m]===0&&(t.enableVertexAttribArray(m),N[m]=1),H[m]!==C&&(t.vertexAttribDivisor(m,C),H[m]=C)}function x(){const m=o.newAttributes,C=o.enabledAttributes;for(let O=0,N=C.length;O<N;O++)C[O]!==m[O]&&(t.disableVertexAttribArray(O),C[O]=0)}function S(m,C,O,N,H,G,B){B===!0?t.vertexAttribIPointer(m,C,O,H,G):t.vertexAttribPointer(m,C,O,N,H,G)}function _(m,C,O,N){y();const H=N.attributes,G=O.getAttributes(),B=C.defaultAttributeValues;for(const Y in G){const I=G[Y];if(I.location>=0){let z=H[Y];if(z===void 0&&(Y==="instanceMatrix"&&m.instanceMatrix&&(z=m.instanceMatrix),Y==="instanceColor"&&m.instanceColor&&(z=m.instanceColor)),z!==void 0){const q=z.normalized,oe=z.itemSize,ue=e.get(z);if(ue===void 0)continue;const Fe=ue.buffer,X=ue.type,ne=ue.bytesPerElement,ce=X===t.INT||X===t.UNSIGNED_INT||z.gpuType===cv;if(z.isInterleavedBufferAttribute){const ae=z.data,_e=ae.stride,Ce=z.offset;if(ae.isInstancedInterleavedBuffer){for(let Ue=0;Ue<I.locationSize;Ue++)f(I.location+Ue,ae.meshPerAttribute);m.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<I.locationSize;Ue++)g(I.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Ue=0;Ue<I.locationSize;Ue++)S(I.location+Ue,oe/I.locationSize,X,q,_e*ne,(Ce+oe/I.locationSize*Ue)*ne,ce)}else{if(z.isInstancedBufferAttribute){for(let ae=0;ae<I.locationSize;ae++)f(I.location+ae,z.meshPerAttribute);m.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ae=0;ae<I.locationSize;ae++)g(I.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ae=0;ae<I.locationSize;ae++)S(I.location+ae,oe/I.locationSize,X,q,oe*ne,oe/I.locationSize*ae*ne,ce)}}else if(B!==void 0){const q=B[Y];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(I.location,q);break;case 3:t.vertexAttrib3fv(I.location,q);break;case 4:t.vertexAttrib4fv(I.location,q);break;default:t.vertexAttrib1fv(I.location,q)}}}}x()}function T(){L();for(const m in r){const C=r[m];for(const O in C){const N=C[O];for(const H in N)u(N[H].object),delete N[H];delete C[O]}delete r[m]}}function w(m){if(r[m.id]===void 0)return;const C=r[m.id];for(const O in C){const N=C[O];for(const H in N)u(N[H].object),delete N[H];delete C[O]}delete r[m.id]}function M(m){for(const C in r){const O=r[C];if(O[m.id]===void 0)continue;const N=O[m.id];for(const H in N)u(N[H].object),delete N[H];delete O[m.id]}}function L(){A(),s=!0,o!==i&&(o=i,c(o.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function bD(t,e,n){let r;function i(c){r=c}function o(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function s(c,u,d){d!==0&&(t.drawArraysInstanced(r,c,u,d),n.update(u,r,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,r,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)s(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=u[y]*h[y];n.update(v,r,1)}}this.setMode=i,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function CD(t,e,n,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){return!(M!==Tr&&r.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const L=M===ic&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Ti&&r.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==di&&!L)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,w=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function RD(t){const e=this;let n=null,r=0,i=!1,o=!1;const s=new Ao,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||r!==0||i;return i=h,r=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!i||v===null||v.length===0||o&&!g)o?u(null):c();else{const x=o?0:r,S=x*4;let _=f.clippingState||null;l.value=_,_=u(v,h,S,p);for(let T=0;T!==S;++T)_[T]=n[T];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,h,p,v){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const f=p+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,_=p;S!==y;++S,_+=4)s.copy(d[S]).applyMatrix4(x,a),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function PD(t){let e=new WeakMap;function n(s,a){return a===Zp?s.mapping=pa:a===Qp&&(s.mapping=ma),s}function r(s){if(s&&s.isTexture){const a=s.mapping;if(a===Zp||a===Qp)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new NL(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",i),n(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}const Fs=4,Zy=[.125,.215,.35,.446,.526,.582],Ro=20,Sh=new HL,Qy=new ut;let Eh=null,Mh=0,wh=0,Th=!1;const bo=(1+Math.sqrt(5))/2,Ss=1/bo,Jy=[new j(-bo,Ss,0),new j(bo,Ss,0),new j(-Ss,0,bo),new j(Ss,0,bo),new j(0,bo,-Ss),new j(0,bo,Ss),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Eh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Mh,wh),this._renderer.xr.enabled=Th,e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===pa||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Vr,minFilter:Vr,generateMipmaps:!1,type:ic,format:Tr,colorSpace:ya,depthBuffer:!1},i=t_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,n,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LD(o)),this._blurMaterial=ID(o,e,n)}return i}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Sh)}_sceneToCubeUV(e,n,r,i){const a=new sr(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Qy),u.toneMapping=Ji,u.autoClear=!1;const p=new fE({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),v=new pi(new cc,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Qy),y=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;su(i,x*S,f>2?S:0,S,S),u.setRenderTarget(i),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===pa||e.mapping===ma;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const o=i?this._cubemapMaterial:this._equirectMaterial,s=new pi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;su(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(s,Sh)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Jy[(i-o-1)%Jy.length];this._blur(e,o-1,o,s,a)}n.autoClear=r}_blur(e,n,r,i,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,r,i,"latitudinal",o),this._halfBlur(s,e,r,r,i,"longitudinal",o)}_halfBlur(e,n,r,i,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pi(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[r]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ro-1),y=o/v,g=isFinite(o)?1+Math.floor(u*y):Ro;g>Ro&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ro}`);const f=[];let x=0;for(let M=0;M<Ro;++M){const L=M/y,A=Math.exp(-L*L/2);f.push(A),M===0?x+=A:M<g&&(x+=2*A)}for(let M=0;M<f.length;M++)f[M]=f[M]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-r;const _=this._sizeLods[i],T=3*_*(i>S-Fs?i-S+Fs:0),w=4*(this._cubeSize-_);su(n,T,w,3*_,2*_),l.setRenderTarget(n),l.render(d,Sh)}}function LD(t){const e=[],n=[],r=[];let i=t;const o=t-Fs+1+Zy.length;for(let s=0;s<o;s++){const a=Math.pow(2,i);n.push(a);let l=1/a;s>t-Fs?l=Zy[s-t+Fs-1]:s===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,y=3,g=2,f=1,x=new Float32Array(y*v*p),S=new Float32Array(g*v*p),_=new Float32Array(f*v*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,L=w>2?0:-1,A=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];x.set(A,y*v*w),S.set(h,g*v*w);const m=[w,w,w,w,w,w];_.set(m,f*v*w)}const T=new qr;T.setAttribute("position",new Xr(x,y)),T.setAttribute("uv",new Xr(S,g)),T.setAttribute("faceIndex",new Xr(_,f)),e.push(T),i>Fs&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function t_(t,e,n){const r=new Ko(t,e,n);return r.texture.mapping=cd,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function su(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function ID(t,e,n){const r=new Float32Array(Ro),i=new j(0,1,0);return new oo({name:"SphericalGaussianBlur",defines:{n:Ro,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function n_(){return new oo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function r_(){return new oo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function gv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DD(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zp||l===Qp,u=l===pa||l===ma;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new e_(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(n===null&&(n=new e_(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:s}}function ND(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&ws("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function UD(t,e,n,r){const i={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete i[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let S=0,_=x.length;S<_;S+=3){const T=x[S+0],w=x[S+1],M=x[S+2];h.push(T,w,w,M,M,T)}}else if(v!==void 0){const x=v.array;y=v.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const T=S+0,w=S+1,M=S+2;h.push(T,w,w,M,M,T)}}else return;const g=new(oE(h)?hE:dE)(h,1);g.version=y;const f=o.get(d);f&&e.remove(f),o.set(d,g)}function u(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function OD(t,e,n){let r;function i(h){r=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(r,p,o,h*s),n.update(p,r,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(r,p,o,h*s,v),n.update(p,r,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,o,h,0,v);let g=0;for(let f=0;f<v;f++)g+=p[f];n.update(g,r,1)}function d(h,p,v,y){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/s,p[f],y[f]);else{g.multiDrawElementsInstancedWEBGL(r,p,0,o,h,0,y,0,v);let f=0;for(let x=0;x<v;x++)f+=p[x]*y[x];n.update(f,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function kD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function FD(t,e,n){const r=new WeakMap,i=new Ut;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=r.get(a);if(h===void 0||h.count!==d){let p=function(){L.dispose(),r.delete(a),a.removeEventListener("dispose",p)};h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),y===!0&&(_=2),g===!0&&(_=3);let T=a.attributes.position.count*_,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const M=new Float32Array(T*w*4*d),L=new aE(M,T,w,d);L.type=di,L.needsUpdate=!0;const A=_*4;for(let m=0;m<d;m++){const C=f[m],O=x[m],N=S[m],H=T*w*4*m;for(let G=0;G<C.count;G++){const B=G*A;v===!0&&(i.fromBufferAttribute(C,G),M[H+B+0]=i.x,M[H+B+1]=i.y,M[H+B+2]=i.z,M[H+B+3]=0),y===!0&&(i.fromBufferAttribute(O,G),M[H+B+4]=i.x,M[H+B+5]=i.y,M[H+B+6]=i.z,M[H+B+7]=0),g===!0&&(i.fromBufferAttribute(N,G),M[H+B+8]=i.x,M[H+B+9]=i.y,M[H+B+10]=i.z,M[H+B+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:L,size:new gt(T,w)},r.set(a,h),a.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function BD(t,e,n,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const SE=new Nn,i_=new _E(1,1),EE=new aE,ME=new yL,wE=new gE,o_=[],s_=[],a_=new Float32Array(16),l_=new Float32Array(9),c_=new Float32Array(4);function La(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let o=o_[i];if(o===void 0&&(o=new Float32Array(i),o_[i]=o),e!==0){r.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function dd(t,e){let n=s_[e];n===void 0&&(n=new Int32Array(e),s_[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function zD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function VD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function GD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function WD(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,r))return;c_.set(r),t.uniformMatrix2fv(this.addr,!1,c_),Xt(n,r)}}function $D(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,r))return;l_.set(r),t.uniformMatrix3fv(this.addr,!1,l_),Xt(n,r)}}function jD(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,r))return;a_.set(r),t.uniformMatrix4fv(this.addr,!1,a_),Xt(n,r)}}function XD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function qD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function KD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function ZD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function JD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function tN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let o;this.type===t.SAMPLER_2D_SHADOW?(i_.compareFunction=iE,o=i_):o=SE,n.setTexture2D(e||o,i)}function nN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||ME,i)}function rN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||wE,i)}function iN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||EE,i)}function oN(t){switch(t){case 5126:return zD;case 35664:return HD;case 35665:return VD;case 35666:return GD;case 35674:return WD;case 35675:return $D;case 35676:return jD;case 5124:case 35670:return XD;case 35667:case 35671:return YD;case 35668:case 35672:return qD;case 35669:case 35673:return KD;case 5125:return ZD;case 36294:return QD;case 36295:return JD;case 36296:return eN;case 35678:case 36198:case 36298:case 36306:case 35682:return tN;case 35679:case 36299:case 36307:return nN;case 35680:case 36300:case 36308:case 36293:return rN;case 36289:case 36303:case 36311:case 36292:return iN}}function sN(t,e){t.uniform1fv(this.addr,e)}function aN(t,e){const n=La(e,this.size,2);t.uniform2fv(this.addr,n)}function lN(t,e){const n=La(e,this.size,3);t.uniform3fv(this.addr,n)}function cN(t,e){const n=La(e,this.size,4);t.uniform4fv(this.addr,n)}function uN(t,e){const n=La(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fN(t,e){const n=La(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dN(t,e){const n=La(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hN(t,e){t.uniform1iv(this.addr,e)}function pN(t,e){t.uniform2iv(this.addr,e)}function mN(t,e){t.uniform3iv(this.addr,e)}function gN(t,e){t.uniform4iv(this.addr,e)}function vN(t,e){t.uniform1uiv(this.addr,e)}function yN(t,e){t.uniform2uiv(this.addr,e)}function _N(t,e){t.uniform3uiv(this.addr,e)}function xN(t,e){t.uniform4uiv(this.addr,e)}function SN(t,e,n){const r=this.cache,i=e.length,o=dd(n,i);jt(r,o)||(t.uniform1iv(this.addr,o),Xt(r,o));for(let s=0;s!==i;++s)n.setTexture2D(e[s]||SE,o[s])}function EN(t,e,n){const r=this.cache,i=e.length,o=dd(n,i);jt(r,o)||(t.uniform1iv(this.addr,o),Xt(r,o));for(let s=0;s!==i;++s)n.setTexture3D(e[s]||ME,o[s])}function MN(t,e,n){const r=this.cache,i=e.length,o=dd(n,i);jt(r,o)||(t.uniform1iv(this.addr,o),Xt(r,o));for(let s=0;s!==i;++s)n.setTextureCube(e[s]||wE,o[s])}function wN(t,e,n){const r=this.cache,i=e.length,o=dd(n,i);jt(r,o)||(t.uniform1iv(this.addr,o),Xt(r,o));for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||EE,o[s])}function TN(t){switch(t){case 5126:return sN;case 35664:return aN;case 35665:return lN;case 35666:return cN;case 35674:return uN;case 35675:return fN;case 35676:return dN;case 5124:case 35670:return hN;case 35667:case 35671:return pN;case 35668:case 35672:return mN;case 35669:case 35673:return gN;case 5125:return vN;case 36294:return yN;case 36295:return _N;case 36296:return xN;case 35678:case 36198:case 36298:case 36306:case 35682:return SN;case 35679:case 36299:case 36307:return EN;case 35680:case 36300:case 36308:case 36293:return MN;case 36289:case 36303:case 36311:case 36292:return wN}}class AN{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=oN(n.type)}}class bN{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TN(n.type)}}class CN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let o=0,s=i.length;o!==s;++o){const a=i[o];a.setValue(e,n[a.id],r)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function u_(t,e){t.seq.push(e),t.map[e.id]=e}function RN(t,e,n){const r=t.name,i=r.length;for(Ah.lastIndex=0;;){const o=Ah.exec(r),s=Ah.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){u_(n,c===void 0?new AN(a,t,e):new bN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new CN(a),u_(n,d)),n=d}}}class Iu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(n,i),s=e.getUniformLocation(n,o.name);RN(o,s,this)}}setValue(e,n,r,i){const o=this.map[n];o!==void 0&&o.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,o=e.length;i!==o;++i){const s=e[i];s.id in n&&r.push(s)}return r}}function f_(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const PN=37297;let LN=0;function IN(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=i;s<o;s++){const a=s+1;r.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return r.join(`
`)}const d_=new We;function DN(t){nt._getMatrix(d_,nt.workingColorSpace,t);const e=`mat3( ${d_.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case vf:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function h_(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+i+`

`+IN(t.getShaderSource(e),s)}else return i}function NN(t,e){const n=DN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function UN(t,e){let n;switch(e){case G3:n="Linear";break;case W3:n="Reinhard";break;case $3:n="Cineon";break;case j3:n="ACESFilmic";break;case Y3:n="AgX";break;case q3:n="Neutral";break;case X3:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const au=new j;function ON(){nt.getLuminanceCoefficients(au);const t=au.x.toFixed(4),e=au.y.toFixed(4),n=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function FN(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function BN(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=t.getActiveAttrib(e,i),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function sl(t){return t!==""}function p_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rm(t){return t.replace(zN,VN)}const HN=new Map;function VN(t,e){let n=$e[e];if(n===void 0){const r=HN.get(e);if(r!==void 0)n=$e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rm(n)}const GN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g_(t){return t.replace(GN,WN)}function WN(t,e,n,r){let i="";for(let o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function v_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $N(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===E3?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function jN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case pa:case ma:e="ENVMAP_TYPE_CUBE";break;case cd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ma:e="ENVMAP_MODE_REFRACTION";break}return e}function YN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case j1:e="ENVMAP_BLENDING_MULTIPLY";break;case H3:e="ENVMAP_BLENDING_MIX";break;case V3:e="ENVMAP_BLENDING_ADD";break}return e}function qN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function KN(t,e,n,r){const i=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=$N(n),c=jN(n),u=XN(n),d=YN(n),h=qN(n),p=kN(n),v=FN(o),y=i.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(sl).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(sl).join(`
`),f.length>0&&(f+=`
`)):(g=[v_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),f=[v_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?$e.tonemapping_pars_fragment:"",n.toneMapping!==Ji?UN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,NN("linearToOutputTexel",n.outputColorSpace),ON(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sl).join(`
`)),s=Rm(s),s=p_(s,n),s=m_(s,n),a=Rm(a),a=p_(a,n),a=m_(a,n),s=g_(s),a=g_(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Py?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Py?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+g+s,_=x+f+a,T=f_(i,i.VERTEX_SHADER,S),w=f_(i,i.FRAGMENT_SHADER,_);i.attachShader(y,T),i.attachShader(y,w),n.index0AttributeName!==void 0?i.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function M(C){if(t.debug.checkShaderErrors){const O=i.getProgramInfoLog(y).trim(),N=i.getShaderInfoLog(T).trim(),H=i.getShaderInfoLog(w).trim();let G=!0,B=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,y,T,w);else{const Y=h_(i,T,"vertex"),I=h_(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+Y+`
`+I)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||H==="")&&(B=!1);B&&(C.diagnostics={runnable:G,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:f}})}i.deleteShader(T),i.deleteShader(w),L=new Iu(i,y),A=BN(i,y)}let L;this.getUniforms=function(){return L===void 0&&M(this),L};let A;this.getAttributes=function(){return A===void 0&&M(this),A};let m=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=i.getProgramParameter(y,PN)),m},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}let ZN=0;class QN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),o=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new JN(e),n.set(e,r)),r}}class JN{constructor(e){this.id=ZN++,this.code=e,this.usedTimes=0}}function eU(t,e,n,r,i,o,s){const a=new cE,l=new QN,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,m,C,O,N){const H=O.fog,G=N.geometry,B=A.isMeshStandardMaterial?O.environment:null,Y=(A.isMeshStandardMaterial?n:e).get(A.envMap||B),I=Y&&Y.mapping===cd?Y.image.height:null,z=v[A.type];A.precision!==null&&(p=i.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=q!==void 0?q.length:0;let ue=0;G.morphAttributes.position!==void 0&&(ue=1),G.morphAttributes.normal!==void 0&&(ue=2),G.morphAttributes.color!==void 0&&(ue=3);let Fe,X,ne,ce;if(z){const Ge=Fr[z];Fe=Ge.vertexShader,X=Ge.fragmentShader}else Fe=A.vertexShader,X=A.fragmentShader,l.update(A),ne=l.getVertexShaderID(A),ce=l.getFragmentShaderID(A);const ae=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Ue=N.isBatchedMesh===!0,Ye=!!A.map,Le=!!A.matcap,st=!!Y,D=!!A.aoMap,Dt=!!A.lightMap,He=!!A.bumpMap,Oe=!!A.normalMap,Ee=!!A.displacementMap,Qe=!!A.emissiveMap,Se=!!A.metalnessMap,P=!!A.roughnessMap,E=A.anisotropy>0,V=A.clearcoat>0,ee=A.dispersion>0,re=A.iridescence>0,J=A.sheen>0,Ae=A.transmission>0,fe=E&&!!A.anisotropyMap,ye=V&&!!A.clearcoatMap,qe=V&&!!A.clearcoatNormalMap,ie=V&&!!A.clearcoatRoughnessMap,xe=re&&!!A.iridescenceMap,Re=re&&!!A.iridescenceThicknessMap,Pe=J&&!!A.sheenColorMap,we=J&&!!A.sheenRoughnessMap,Xe=!!A.specularMap,Ve=!!A.specularColorMap,rt=!!A.specularIntensityMap,U=Ae&&!!A.transmissionMap,pe=Ae&&!!A.thicknessMap,K=!!A.gradientMap,te=!!A.alphaMap,ve=A.alphaTest>0,me=!!A.alphaHash,ze=!!A.extensions;let St=Ji;A.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(St=t.toneMapping);const Ie={shaderID:z,shaderType:A.type,shaderName:A.name,vertexShader:Fe,fragmentShader:X,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ya,alphaToCoverage:!!A.alphaToCoverage,map:Ye,matcap:Le,envMap:st,envMapMode:st&&Y.mapping,envMapCubeUVHeight:I,aoMap:D,lightMap:Dt,bumpMap:He,normalMap:Oe,displacementMap:h&&Ee,emissiveMap:Qe,normalMapObjectSpace:Oe&&A.normalMapType===eL,normalMapTangentSpace:Oe&&A.normalMapType===J3,metalnessMap:Se,roughnessMap:P,anisotropy:E,anisotropyMap:fe,clearcoat:V,clearcoatMap:ye,clearcoatNormalMap:qe,clearcoatRoughnessMap:ie,dispersion:ee,iridescence:re,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:J,sheenColorMap:Pe,sheenRoughnessMap:we,specularMap:Xe,specularColorMap:Ve,specularIntensityMap:rt,transmission:Ae,transmissionMap:U,thicknessMap:pe,gradientMap:K,opaque:A.transparent===!1&&A.blending===qs&&A.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:me,combine:A.combine,mapUv:Ye&&y(A.map.channel),aoMapUv:D&&y(A.aoMap.channel),lightMapUv:Dt&&y(A.lightMap.channel),bumpMapUv:He&&y(A.bumpMap.channel),normalMapUv:Oe&&y(A.normalMap.channel),displacementMapUv:Ee&&y(A.displacementMap.channel),emissiveMapUv:Qe&&y(A.emissiveMap.channel),metalnessMapUv:Se&&y(A.metalnessMap.channel),roughnessMapUv:P&&y(A.roughnessMap.channel),anisotropyMapUv:fe&&y(A.anisotropyMap.channel),clearcoatMapUv:ye&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(A.sheenRoughnessMap.channel),specularMapUv:Xe&&y(A.specularMap.channel),specularColorMapUv:Ve&&y(A.specularColorMap.channel),specularIntensityMapUv:rt&&y(A.specularIntensityMap.channel),transmissionMapUv:U&&y(A.transmissionMap.channel),thicknessMapUv:pe&&y(A.thicknessMap.channel),alphaMapUv:te&&y(A.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Oe||E),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Ye||te),fog:!!H,useFog:A.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ue,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:St,decodeVideoTexture:Ye&&A.map.isVideoTexture===!0&&nt.getTransfer(A.map.colorSpace)===ht,decodeVideoTextureEmissive:Qe&&A.emissiveMap.isVideoTexture===!0&&nt.getTransfer(A.emissiveMap.colorSpace)===ht,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===li,flipSided:A.side===Dn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ze&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&A.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function f(A){const m=[];if(A.shaderID?m.push(A.shaderID):(m.push(A.customVertexShaderID),m.push(A.customFragmentShaderID)),A.defines!==void 0)for(const C in A.defines)m.push(C),m.push(A.defines[C]);return A.isRawShaderMaterial===!1&&(x(m,A),S(m,A),m.push(t.outputColorSpace)),m.push(A.customProgramCacheKey),m.join()}function x(A,m){A.push(m.precision),A.push(m.outputColorSpace),A.push(m.envMapMode),A.push(m.envMapCubeUVHeight),A.push(m.mapUv),A.push(m.alphaMapUv),A.push(m.lightMapUv),A.push(m.aoMapUv),A.push(m.bumpMapUv),A.push(m.normalMapUv),A.push(m.displacementMapUv),A.push(m.emissiveMapUv),A.push(m.metalnessMapUv),A.push(m.roughnessMapUv),A.push(m.anisotropyMapUv),A.push(m.clearcoatMapUv),A.push(m.clearcoatNormalMapUv),A.push(m.clearcoatRoughnessMapUv),A.push(m.iridescenceMapUv),A.push(m.iridescenceThicknessMapUv),A.push(m.sheenColorMapUv),A.push(m.sheenRoughnessMapUv),A.push(m.specularMapUv),A.push(m.specularColorMapUv),A.push(m.specularIntensityMapUv),A.push(m.transmissionMapUv),A.push(m.thicknessMapUv),A.push(m.combine),A.push(m.fogExp2),A.push(m.sizeAttenuation),A.push(m.morphTargetsCount),A.push(m.morphAttributeCount),A.push(m.numDirLights),A.push(m.numPointLights),A.push(m.numSpotLights),A.push(m.numSpotLightMaps),A.push(m.numHemiLights),A.push(m.numRectAreaLights),A.push(m.numDirLightShadows),A.push(m.numPointLightShadows),A.push(m.numSpotLightShadows),A.push(m.numSpotLightShadowsWithMaps),A.push(m.numLightProbes),A.push(m.shadowMapType),A.push(m.toneMapping),A.push(m.numClippingPlanes),A.push(m.numClipIntersection),A.push(m.depthPacking)}function S(A,m){a.disableAll(),m.supportsVertexTextures&&a.enable(0),m.instancing&&a.enable(1),m.instancingColor&&a.enable(2),m.instancingMorph&&a.enable(3),m.matcap&&a.enable(4),m.envMap&&a.enable(5),m.normalMapObjectSpace&&a.enable(6),m.normalMapTangentSpace&&a.enable(7),m.clearcoat&&a.enable(8),m.iridescence&&a.enable(9),m.alphaTest&&a.enable(10),m.vertexColors&&a.enable(11),m.vertexAlphas&&a.enable(12),m.vertexUv1s&&a.enable(13),m.vertexUv2s&&a.enable(14),m.vertexUv3s&&a.enable(15),m.vertexTangents&&a.enable(16),m.anisotropy&&a.enable(17),m.alphaHash&&a.enable(18),m.batching&&a.enable(19),m.dispersion&&a.enable(20),m.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.reverseDepthBuffer&&a.enable(4),m.skinning&&a.enable(5),m.morphTargets&&a.enable(6),m.morphNormals&&a.enable(7),m.morphColors&&a.enable(8),m.premultipliedAlpha&&a.enable(9),m.shadowMapEnabled&&a.enable(10),m.doubleSided&&a.enable(11),m.flipSided&&a.enable(12),m.useDepthPacking&&a.enable(13),m.dithering&&a.enable(14),m.transmission&&a.enable(15),m.sheen&&a.enable(16),m.opaque&&a.enable(17),m.pointsUvs&&a.enable(18),m.decodeVideoTexture&&a.enable(19),m.decodeVideoTextureEmissive&&a.enable(20),m.alphaToCoverage&&a.enable(21),A.push(a.mask)}function _(A){const m=v[A.type];let C;if(m){const O=Fr[m];C=PL.clone(O.uniforms)}else C=A.uniforms;return C}function T(A,m){let C;for(let O=0,N=u.length;O<N;O++){const H=u[O];if(H.cacheKey===m){C=H,++C.usedTimes;break}}return C===void 0&&(C=new KN(t,m,A,o),u.push(C)),C}function w(A){if(--A.usedTimes===0){const m=u.indexOf(A);u[m]=u[u.length-1],u.pop(),A.destroy()}}function M(A){l.remove(A)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:L}}function tU(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function r(s){t.delete(s)}function i(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:o}}function nU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function y_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function __(){const t=[];let e=0;const n=[],r=[],i=[];function o(){e=0,n.length=0,r.length=0,i.length=0}function s(d,h,p,v,y,g){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=y,f.group=g),e++,f}function a(d,h,p,v,y,g){const f=s(d,h,p,v,y,g);p.transmission>0?r.push(f):p.transparent===!0?i.push(f):n.push(f)}function l(d,h,p,v,y,g){const f=s(d,h,p,v,y,g);p.transmission>0?r.unshift(f):p.transparent===!0?i.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||nU),r.length>1&&r.sort(h||y_),i.length>1&&i.sort(h||y_)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:o,push:a,unshift:l,finish:u,sort:c}}function rU(){let t=new WeakMap;function e(r,i){const o=t.get(r);let s;return o===void 0?(s=new __,t.set(r,[s])):i>=o.length?(s=new __,o.push(s)):s=o[i],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function iU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new ut};break;case"SpotLight":n={position:new j,direction:new j,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function oU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sU=0;function aU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lU(t){const e=new iU,n=oU(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new j);const i=new j,o=new Ot,s=new Ot;function a(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,v=0,y=0,g=0,f=0,x=0,S=0,_=0,T=0,w=0,M=0;c.sort(aU);for(let A=0,m=c.length;A<m;A++){const C=c[A],O=C.color,N=C.intensity,H=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=O.r*N,d+=O.g*N,h+=O.b*N;else if(C.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(C.sh.coefficients[B],N);M++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,I=n.get(C);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,r.directionalShadow[p]=I,r.directionalShadowMap[p]=G,r.directionalShadowMatrix[p]=C.shadow.matrix,x++}r.directional[p]=B,p++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(O).multiplyScalar(N),B.distance=H,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,r.spot[y]=B;const Y=C.shadow;if(C.map&&(r.spotLightMap[T]=C.map,T++,Y.updateMatrices(C),C.castShadow&&w++),r.spotLightMatrix[y]=Y.matrix,C.castShadow){const I=n.get(C);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,r.spotShadow[y]=I,r.spotShadowMap[y]=G,_++}y++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(O).multiplyScalar(N),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),r.rectArea[g]=B,g++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Y=C.shadow,I=n.get(C);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,r.pointShadow[v]=I,r.pointShadowMap[v]=G,r.pointShadowMatrix[v]=C.shadow.matrix,S++}r.point[v]=B,v++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(N),B.groundColor.copy(C.groundColor).multiplyScalar(N),r.hemi[f]=B,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=h;const L=r.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==T||L.numLightProbes!==M)&&(r.directional.length=p,r.spot.length=y,r.rectArea.length=g,r.point.length=v,r.hemi.length=f,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=_,r.spotShadowMap.length=_,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=_+T-w,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=M,L.directionalLength=p,L.pointLength=v,L.spotLength=y,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=T,L.numLightProbes=M,r.version=sU++)}function l(c,u){let d=0,h=0,p=0,v=0,y=0;const g=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const S=c[f];if(S.isDirectionalLight){const _=r.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(S.isSpotLight){const _=r.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const _=r.rectArea[v];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),s.identity(),o.copy(S.matrixWorld),o.premultiply(g),s.extractRotation(o),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const _=r.point[h];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){const _=r.hemi[y];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:r}}function x_(t){const e=new lU(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function o(u){n.push(u)}function s(u){r.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function cU(t){let e=new WeakMap;function n(i,o=0){const s=e.get(i);let a;return s===void 0?(a=new x_(t),e.set(i,[a])):o>=s.length?(a=new x_(t),s.push(a)):a=s[o],a}function r(){e=new WeakMap}return{get:n,dispose:r}}const uU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dU(t,e,n){let r=new vE;const i=new gt,o=new gt,s=new Ut,a=new BL({depthPacking:Q3}),l=new zL,c={},u=n.maxTextureSize,d={[io]:Dn,[Dn]:io,[li]:li},h=new oo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:uU,fragmentShader:fU}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new qr;v.setAttribute("position",new Xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new pi(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$1;let f=this.type;this.render=function(w,M,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const A=t.getRenderTarget(),m=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Qi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=f!==ii&&this.type===ii,H=f===ii&&this.type!==ii;for(let G=0,B=w.length;G<B;G++){const Y=w[G],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const z=I.getFrameExtents();if(i.multiply(z),o.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/z.x),i.x=o.x*z.x,I.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/z.y),i.y=o.y*z.y,I.mapSize.y=o.y)),I.map===null||N===!0||H===!0){const oe=this.type!==ii?{minFilter:Cr,magFilter:Cr}:{};I.map!==null&&I.map.dispose(),I.map=new Ko(i.x,i.y,oe),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const q=I.getViewportCount();for(let oe=0;oe<q;oe++){const ue=I.getViewport(oe);s.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),O.viewport(s),I.updateMatrices(Y,oe),r=I.getFrustum(),_(M,L,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===ii&&x(I,L),I.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(A,m,C)};function x(w,M){const L=e.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ko(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(M,null,L,h,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(M,null,L,p,y,null)}function S(w,M,L,A){let m=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)m=C;else if(m=L.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=m.uuid,N=M.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let G=H[N];G===void 0&&(G=m.clone(),H[N]=G,M.addEventListener("dispose",T)),m=G}if(m.visible=M.visible,m.wireframe=M.wireframe,A===ii?m.side=M.shadowSide!==null?M.shadowSide:M.side:m.side=M.shadowSide!==null?M.shadowSide:d[M.side],m.alphaMap=M.alphaMap,m.alphaTest=M.alphaTest,m.map=M.map,m.clipShadows=M.clipShadows,m.clippingPlanes=M.clippingPlanes,m.clipIntersection=M.clipIntersection,m.displacementMap=M.displacementMap,m.displacementScale=M.displacementScale,m.displacementBias=M.displacementBias,m.wireframeLinewidth=M.wireframeLinewidth,m.linewidth=M.linewidth,L.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const O=t.properties.get(m);O.light=L}return m}function _(w,M,L,A,m){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&m===ii)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const N=e.update(w),H=w.material;if(Array.isArray(H)){const G=N.groups;for(let B=0,Y=G.length;B<Y;B++){const I=G[B],z=H[I.materialIndex];if(z&&z.visible){const q=S(w,z,A,m);w.onBeforeShadow(t,w,M,L,N,q,I),t.renderBufferDirect(L,null,N,q,w,I),w.onAfterShadow(t,w,M,L,N,q,I)}}}else if(H.visible){const G=S(w,H,A,m);w.onBeforeShadow(t,w,M,L,N,G,null),t.renderBufferDirect(L,null,N,G,w,null),w.onAfterShadow(t,w,M,L,N,G,null)}}const O=w.children;for(let N=0,H=O.length;N<H;N++)_(O[N],M,L,A,m)}function T(w){w.target.removeEventListener("dispose",T);for(const L in c){const A=c[L],m=w.target.uuid;m in A&&(A[m].dispose(),delete A[m])}}}const hU={[Wp]:$p,[jp]:qp,[Xp]:Kp,[ha]:Yp,[$p]:Wp,[qp]:jp,[Kp]:Xp,[Yp]:ha};function pU(t,e){function n(){let U=!1;const pe=new Ut;let K=null;const te=new Ut(0,0,0,0);return{setMask:function(ve){K!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),K=ve)},setLocked:function(ve){U=ve},setClear:function(ve,me,ze,St,Ie){Ie===!0&&(ve*=St,me*=St,ze*=St),pe.set(ve,me,ze,St),te.equals(pe)===!1&&(t.clearColor(ve,me,ze,St),te.copy(pe))},reset:function(){U=!1,K=null,te.set(-1,0,0,0)}}}function r(){let U=!1,pe=!1,K=null,te=null,ve=null;return{setReversed:function(me){if(pe!==me){const ze=e.get("EXT_clip_control");pe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const St=ve;ve=null,this.setClear(St)}pe=me},getReversed:function(){return pe},setTest:function(me){me?ae(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(me){K!==me&&!U&&(t.depthMask(me),K=me)},setFunc:function(me){if(pe&&(me=hU[me]),te!==me){switch(me){case Wp:t.depthFunc(t.NEVER);break;case $p:t.depthFunc(t.ALWAYS);break;case jp:t.depthFunc(t.LESS);break;case ha:t.depthFunc(t.LEQUAL);break;case Xp:t.depthFunc(t.EQUAL);break;case Yp:t.depthFunc(t.GEQUAL);break;case qp:t.depthFunc(t.GREATER);break;case Kp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=me}},setLocked:function(me){U=me},setClear:function(me){ve!==me&&(pe&&(me=1-me),t.clearDepth(me),ve=me)},reset:function(){U=!1,K=null,te=null,ve=null,pe=!1}}}function i(){let U=!1,pe=null,K=null,te=null,ve=null,me=null,ze=null,St=null,Ie=null;return{setTest:function(Ge){U||(Ge?ae(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Ge){pe!==Ge&&!U&&(t.stencilMask(Ge),pe=Ge)},setFunc:function(Ge,xn,Kr){(K!==Ge||te!==xn||ve!==Kr)&&(t.stencilFunc(Ge,xn,Kr),K=Ge,te=xn,ve=Kr)},setOp:function(Ge,xn,Kr){(me!==Ge||ze!==xn||St!==Kr)&&(t.stencilOp(Ge,xn,Kr),me=Ge,ze=xn,St=Kr)},setLocked:function(Ge){U=Ge},setClear:function(Ge){Ie!==Ge&&(t.clearStencil(Ge),Ie=Ge)},reset:function(){U=!1,pe=null,K=null,te=null,ve=null,me=null,ze=null,St=null,Ie=null}}}const o=new n,s=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],v=null,y=!1,g=null,f=null,x=null,S=null,_=null,T=null,w=null,M=new ut(0,0,0),L=0,A=!1,m=null,C=null,O=null,N=null,H=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(I)[1]),B=Y>=1):I.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),B=Y>=2);let z=null,q={};const oe=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Fe=new Ut().fromArray(oe),X=new Ut().fromArray(ue);function ne(U,pe,K,te){const ve=new Uint8Array(4),me=t.createTexture();t.bindTexture(U,me),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<K;ze++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(pe+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return me}const ce={};ce[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),s.setFunc(ha),He(!1),Oe(wy),ae(t.CULL_FACE),D(Qi);function ae(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Ce(U,pe){return d[U]!==pe?(t.bindFramebuffer(U,pe),d[U]=pe,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=pe),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ue(U,pe){let K=p,te=!1;if(U){K=h.get(pe),K===void 0&&(K=[],h.set(pe,K));const ve=U.textures;if(K.length!==ve.length||K[0]!==t.COLOR_ATTACHMENT0){for(let me=0,ze=ve.length;me<ze;me++)K[me]=t.COLOR_ATTACHMENT0+me;K.length=ve.length,te=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,te=!0);te&&t.drawBuffers(K)}function Ye(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const Le={[Co]:t.FUNC_ADD,[w3]:t.FUNC_SUBTRACT,[T3]:t.FUNC_REVERSE_SUBTRACT};Le[A3]=t.MIN,Le[b3]=t.MAX;const st={[C3]:t.ZERO,[R3]:t.ONE,[P3]:t.SRC_COLOR,[Vp]:t.SRC_ALPHA,[O3]:t.SRC_ALPHA_SATURATE,[N3]:t.DST_COLOR,[I3]:t.DST_ALPHA,[L3]:t.ONE_MINUS_SRC_COLOR,[Gp]:t.ONE_MINUS_SRC_ALPHA,[U3]:t.ONE_MINUS_DST_COLOR,[D3]:t.ONE_MINUS_DST_ALPHA,[k3]:t.CONSTANT_COLOR,[F3]:t.ONE_MINUS_CONSTANT_COLOR,[B3]:t.CONSTANT_ALPHA,[z3]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,pe,K,te,ve,me,ze,St,Ie,Ge){if(U===Qi){y===!0&&(_e(t.BLEND),y=!1);return}if(y===!1&&(ae(t.BLEND),y=!0),U!==M3){if(U!==g||Ge!==A){if((f!==Co||_!==Co)&&(t.blendEquation(t.FUNC_ADD),f=Co,_=Co),Ge)switch(U){case qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ty:t.blendFunc(t.ONE,t.ONE);break;case Ay:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case by:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ty:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ay:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case by:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,S=null,T=null,w=null,M.set(0,0,0),L=0,g=U,A=Ge}return}ve=ve||pe,me=me||K,ze=ze||te,(pe!==f||ve!==_)&&(t.blendEquationSeparate(Le[pe],Le[ve]),f=pe,_=ve),(K!==x||te!==S||me!==T||ze!==w)&&(t.blendFuncSeparate(st[K],st[te],st[me],st[ze]),x=K,S=te,T=me,w=ze),(St.equals(M)===!1||Ie!==L)&&(t.blendColor(St.r,St.g,St.b,Ie),M.copy(St),L=Ie),g=U,A=!1}function Dt(U,pe){U.side===li?_e(t.CULL_FACE):ae(t.CULL_FACE);let K=U.side===Dn;pe&&(K=!K),He(K),U.blending===qs&&U.transparent===!1?D(Qi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),o.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){m!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),m=U)}function Oe(U){U!==x3?(ae(t.CULL_FACE),U!==C&&(U===wy?t.cullFace(t.BACK):U===S3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),C=U}function Ee(U){U!==O&&(B&&t.lineWidth(U),O=U)}function Qe(U,pe,K){U?(ae(t.POLYGON_OFFSET_FILL),(N!==pe||H!==K)&&(t.polygonOffset(pe,K),N=pe,H=K)):_e(t.POLYGON_OFFSET_FILL)}function Se(U){U?ae(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function P(U){U===void 0&&(U=t.TEXTURE0+G-1),z!==U&&(t.activeTexture(U),z=U)}function E(U,pe,K){K===void 0&&(z===null?K=t.TEXTURE0+G-1:K=z);let te=q[K];te===void 0&&(te={type:void 0,texture:void 0},q[K]=te),(te.type!==U||te.texture!==pe)&&(z!==K&&(t.activeTexture(K),z=K),t.bindTexture(U,pe||ce[U]),te.type=U,te.texture=pe)}function V(){const U=q[z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){Fe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Fe.copy(U))}function we(U){X.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Xe(U,pe){let K=c.get(pe);K===void 0&&(K=new WeakMap,c.set(pe,K));let te=K.get(U);te===void 0&&(te=t.getUniformBlockIndex(pe,U.name),K.set(U,te))}function Ve(U,pe){const te=c.get(pe).get(U);l.get(pe)!==te&&(t.uniformBlockBinding(pe,te,U.__bindingPointIndex),l.set(pe,te))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},z=null,q={},d={},h=new WeakMap,p=[],v=null,y=!1,g=null,f=null,x=null,S=null,_=null,T=null,w=null,M=new ut(0,0,0),L=0,A=!1,m=null,C=null,O=null,N=null,H=null,Fe.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ae,disable:_e,bindFramebuffer:Ce,drawBuffers:Ue,useProgram:Ye,setBlending:D,setMaterial:Dt,setFlipSided:He,setCullFace:Oe,setLineWidth:Ee,setPolygonOffset:Qe,setScissorTest:Se,activeTexture:P,bindTexture:E,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:xe,texImage3D:Re,updateUBOMapping:Xe,uniformBlockBinding:Ve,texStorage2D:qe,texStorage3D:ie,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Pe,viewport:we,reset:rt}}function mU(t,e,n,r,i,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return p?new OffscreenCanvas(P,E):_f("canvas")}function y(P,E,V){let ee=1;const re=Se(P);if((re.width>V||re.height>V)&&(ee=V/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(ee*re.width),Ae=Math.floor(ee*re.height);d===void 0&&(d=v(J,Ae));const fe=E?v(J,Ae):d;return fe.width=J,fe.height=Ae,fe.getContext("2d").drawImage(P,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Ae+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function g(P){return P.generateMipmaps}function f(P){t.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(P,E,V,ee,re=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=E;if(E===t.RED&&(V===t.FLOAT&&(J=t.R32F),V===t.HALF_FLOAT&&(J=t.R16F),V===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.R8UI),V===t.UNSIGNED_SHORT&&(J=t.R16UI),V===t.UNSIGNED_INT&&(J=t.R32UI),V===t.BYTE&&(J=t.R8I),V===t.SHORT&&(J=t.R16I),V===t.INT&&(J=t.R32I)),E===t.RG&&(V===t.FLOAT&&(J=t.RG32F),V===t.HALF_FLOAT&&(J=t.RG16F),V===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RG8UI),V===t.UNSIGNED_SHORT&&(J=t.RG16UI),V===t.UNSIGNED_INT&&(J=t.RG32UI),V===t.BYTE&&(J=t.RG8I),V===t.SHORT&&(J=t.RG16I),V===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RGB8UI),V===t.UNSIGNED_SHORT&&(J=t.RGB16UI),V===t.UNSIGNED_INT&&(J=t.RGB32UI),V===t.BYTE&&(J=t.RGB8I),V===t.SHORT&&(J=t.RGB16I),V===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),V===t.UNSIGNED_INT&&(J=t.RGBA32UI),V===t.BYTE&&(J=t.RGBA8I),V===t.SHORT&&(J=t.RGBA16I),V===t.INT&&(J=t.RGBA32I)),E===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const Ae=re?vf:nt.getTransfer(ee);V===t.FLOAT&&(J=t.RGBA32F),V===t.HALF_FLOAT&&(J=t.RGBA16F),V===t.UNSIGNED_BYTE&&(J=Ae===ht?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(P,E){let V;return P?E===null||E===qo||E===ga?V=t.DEPTH24_STENCIL8:E===di?V=t.DEPTH32F_STENCIL8:E===$l&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qo||E===ga?V=t.DEPTH_COMPONENT24:E===di?V=t.DEPTH_COMPONENT32F:E===$l&&(V=t.DEPTH_COMPONENT16),V}function T(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Cr&&P.minFilter!==Vr?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){const E=P.target;E.removeEventListener("dispose",w),L(E),E.isVideoTexture&&u.delete(E)}function M(P){const E=P.target;E.removeEventListener("dispose",M),m(E)}function L(P){const E=r.get(P);if(E.__webglInit===void 0)return;const V=P.source,ee=h.get(V);if(ee){const re=ee[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&A(P),Object.keys(ee).length===0&&h.delete(V)}r.remove(P)}function A(P){const E=r.get(P);t.deleteTexture(E.__webglTexture);const V=P.source,ee=h.get(V);delete ee[E.__cacheKey],s.memory.textures--}function m(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let re=0;re<E.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=P.textures;for(let ee=0,re=V.length;ee<re;ee++){const J=r.get(V[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),s.memory.textures--),r.remove(V[ee])}r.remove(P)}let C=0;function O(){C=0}function N(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function G(P,E){const V=r.get(P);if(P.isVideoTexture&&Ee(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,P,E);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function B(P,E){const V=r.get(P);if(P.version>0&&V.__version!==P.version){X(V,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function Y(P,E){const V=r.get(P);if(P.version>0&&V.__version!==P.version){X(V,P,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function I(P,E){const V=r.get(P);if(P.version>0&&V.__version!==P.version){ne(V,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}const z={[Jp]:t.REPEAT,[No]:t.CLAMP_TO_EDGE,[em]:t.MIRRORED_REPEAT},q={[Cr]:t.NEAREST,[K3]:t.NEAREST_MIPMAP_NEAREST,[Fc]:t.NEAREST_MIPMAP_LINEAR,[Vr]:t.LINEAR,[Qd]:t.LINEAR_MIPMAP_NEAREST,[Uo]:t.LINEAR_MIPMAP_LINEAR},oe={[tL]:t.NEVER,[aL]:t.ALWAYS,[nL]:t.LESS,[iE]:t.LEQUAL,[rL]:t.EQUAL,[sL]:t.GEQUAL,[iL]:t.GREATER,[oL]:t.NOTEQUAL};function ue(P,E){if(E.type===di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Vr||E.magFilter===Qd||E.magFilter===Fc||E.magFilter===Uo||E.minFilter===Vr||E.minFilter===Qd||E.minFilter===Fc||E.minFilter===Uo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,z[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,z[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,z[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,q[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,q[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cr||E.minFilter!==Fc&&E.minFilter!==Uo||E.type===di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Fe(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",w));const ee=E.source;let re=h.get(ee);re===void 0&&(re={},h.set(ee,re));const J=H(E);if(J!==P.__cacheKey){re[J]===void 0&&(re[J]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),re[J].usedTimes++;const Ae=re[P.__cacheKey];Ae!==void 0&&(re[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&A(E)),P.__cacheKey=J,P.__webglTexture=re[J].texture}return V}function X(P,E,V){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const re=Fe(P,E),J=E.source;n.bindTexture(ee,P.__webglTexture,t.TEXTURE0+V);const Ae=r.get(J);if(J.version!==Ae.__version||re===!0){n.activeTexture(t.TEXTURE0+V);const fe=nt.getPrimaries(nt.workingColorSpace),ye=E.colorSpace===Hi?null:nt.getPrimaries(E.colorSpace),qe=E.colorSpace===Hi||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ie=y(E.image,!1,i.maxTextureSize);ie=Qe(E,ie);const xe=o.convert(E.format,E.colorSpace),Re=o.convert(E.type);let Pe=S(E.internalFormat,xe,Re,E.colorSpace,E.isVideoTexture);ue(ee,E);let we;const Xe=E.mipmaps,Ve=E.isVideoTexture!==!0,rt=Ae.__version===void 0||re===!0,U=J.dataReady,pe=T(E,ie);if(E.isDepthTexture)Pe=_(E.format===va,E.type),rt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Pe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,xe,Re,null));else if(E.isDataTexture)if(Xe.length>0){Ve&&rt&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,Xe[0].width,Xe[0].height);for(let K=0,te=Xe.length;K<te;K++)we=Xe[K],Ve?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,we.width,we.height,xe,Re,we.data):n.texImage2D(t.TEXTURE_2D,K,Pe,we.width,we.height,0,xe,Re,we.data);E.generateMipmaps=!1}else Ve?(rt&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,ie.width,ie.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,Re,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,xe,Re,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Pe,Xe[0].width,Xe[0].height,ie.depth);for(let K=0,te=Xe.length;K<te;K++)if(we=Xe[K],E.format!==Tr)if(xe!==null)if(Ve){if(U)if(E.layerUpdates.size>0){const ve=Ky(we.width,we.height,E.format,E.type);for(const me of E.layerUpdates){const ze=we.data.subarray(me*ve/we.data.BYTES_PER_ELEMENT,(me+1)*ve/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,me,we.width,we.height,1,xe,ze)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,we.width,we.height,ie.depth,xe,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Pe,we.width,we.height,ie.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,we.width,we.height,ie.depth,xe,Re,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Pe,we.width,we.height,ie.depth,0,xe,Re,we.data)}else{Ve&&rt&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,Xe[0].width,Xe[0].height);for(let K=0,te=Xe.length;K<te;K++)we=Xe[K],E.format!==Tr?xe!==null?Ve?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,we.width,we.height,xe,we.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,we.width,we.height,xe,Re,we.data):n.texImage2D(t.TEXTURE_2D,K,Pe,we.width,we.height,0,xe,Re,we.data)}else if(E.isDataArrayTexture)if(Ve){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Pe,ie.width,ie.height,ie.depth),U)if(E.layerUpdates.size>0){const K=Ky(ie.width,ie.height,E.format,E.type);for(const te of E.layerUpdates){const ve=ie.data.subarray(te*K/ie.data.BYTES_PER_ELEMENT,(te+1)*K/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,xe,Re,ve)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,xe,Re,ie.data);else if(E.isData3DTexture)Ve?(rt&&n.texStorage3D(t.TEXTURE_3D,pe,Pe,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,xe,Re,ie.data);else if(E.isFramebufferTexture){if(rt)if(Ve)n.texStorage2D(t.TEXTURE_2D,pe,Pe,ie.width,ie.height);else{let K=ie.width,te=ie.height;for(let ve=0;ve<pe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Pe,K,te,0,xe,Re,null),K>>=1,te>>=1}}else if(Xe.length>0){if(Ve&&rt){const K=Se(Xe[0]);n.texStorage2D(t.TEXTURE_2D,pe,Pe,K.width,K.height)}for(let K=0,te=Xe.length;K<te;K++)we=Xe[K],Ve?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,xe,Re,we):n.texImage2D(t.TEXTURE_2D,K,Pe,xe,Re,we);E.generateMipmaps=!1}else if(Ve){if(rt){const K=Se(ie);n.texStorage2D(t.TEXTURE_2D,pe,Pe,K.width,K.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,Pe,xe,Re,ie);g(E)&&f(ee),Ae.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ne(P,E,V){if(E.image.length!==6)return;const ee=Fe(P,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+V);const J=r.get(re);if(re.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+V);const Ae=nt.getPrimaries(nt.workingColorSpace),fe=E.colorSpace===Hi?null:nt.getPrimaries(E.colorSpace),ye=E.colorSpace===Hi||Ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const qe=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!qe&&!ie?xe[te]=y(E.image[te],!0,i.maxCubemapSize):xe[te]=ie?E.image[te].image:E.image[te],xe[te]=Qe(E,xe[te]);const Re=xe[0],Pe=o.convert(E.format,E.colorSpace),we=o.convert(E.type),Xe=S(E.internalFormat,Pe,we,E.colorSpace),Ve=E.isVideoTexture!==!0,rt=J.__version===void 0||ee===!0,U=re.dataReady;let pe=T(E,Re);ue(t.TEXTURE_CUBE_MAP,E);let K;if(qe){Ve&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Xe,Re.width,Re.height);for(let te=0;te<6;te++){K=xe[te].mipmaps;for(let ve=0;ve<K.length;ve++){const me=K[ve];E.format!==Tr?Pe!==null?Ve?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Pe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Pe,we,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Xe,me.width,me.height,0,Pe,we,me.data)}}}else{if(K=E.mipmaps,Ve&&rt){K.length>0&&pe++;const te=Se(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Xe,te.width,te.height)}for(let te=0;te<6;te++)if(ie){Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Pe,we,xe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,xe[te].width,xe[te].height,0,Pe,we,xe[te].data);for(let ve=0;ve<K.length;ve++){const ze=K[ve].image[te].image;Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,ze.width,ze.height,Pe,we,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Xe,ze.width,ze.height,0,Pe,we,ze.data)}}else{Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,we,xe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,Pe,we,xe[te]);for(let ve=0;ve<K.length;ve++){const me=K[ve];Ve?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Pe,we,me.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Xe,Pe,we,me.image[te])}}}g(E)&&f(t.TEXTURE_CUBE_MAP),J.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ce(P,E,V,ee,re,J){const Ae=o.convert(V.format,V.colorSpace),fe=o.convert(V.type),ye=S(V.internalFormat,Ae,fe,V.colorSpace),qe=r.get(E),ie=r.get(V);if(ie.__renderTarget=E,!qe.__hasExternalTextures){const xe=Math.max(1,E.width>>J),Re=Math.max(1,E.height>>J);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,J,ye,xe,Re,E.depth,0,Ae,fe,null):n.texImage2D(re,J,ye,xe,Re,0,Ae,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Oe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,ie.__webglTexture,0,He(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,ie.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(P,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const ee=E.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,J=_(E.stencilBuffer,re),Ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=He(E);Oe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,J,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,P)}else{const ee=E.textures;for(let re=0;re<ee.length;re++){const J=ee[re],Ae=o.convert(J.format,J.colorSpace),fe=o.convert(J.type),ye=S(J.internalFormat,Ae,fe,J.colorSpace),qe=He(E);V&&Oe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,ye,E.width,E.height):Oe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,ye,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ye,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(E.depthTexture);ee.__renderTarget=E,(!ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const re=ee.__webglTexture,J=He(E);if(E.depthTexture.format===Ks)Oe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===va)Oe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const E=r.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ee}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");_e(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),ae(E.__webglDepthbuffer[ee],P,!1);else{const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ae(E.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(P,E,V){const ee=r.get(P);E!==void 0&&ce(ee.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ce(P)}function Ye(P){const E=P.texture,V=r.get(P),ee=r.get(E);P.addEventListener("dispose",M);const re=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ae=re.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,s.memory.textures++),J){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)V.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else V.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[fe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let fe=0,ye=re.length;fe<ye;fe++){const qe=r.get(re[fe]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),s.memory.textures++)}if(P.samples>0&&Oe(P)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const ye=re[fe];V.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const qe=o.convert(ye.format,ye.colorSpace),ie=o.convert(ye.type),xe=S(ye.internalFormat,qe,ie,ye.colorSpace,P.isXRRenderTarget===!0),Re=He(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(V.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ue(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ce(V.__webglFramebuffer[fe][ye],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ce(V.__webglFramebuffer[fe],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let fe=0,ye=re.length;fe<ye;fe++){const qe=re[fe],ie=r.get(qe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ue(t.TEXTURE_2D,qe),ce(V.__webglFramebuffer,P,qe,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(qe)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),ue(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ce(V.__webglFramebuffer[ye],P,E,t.COLOR_ATTACHMENT0,fe,ye);else ce(V.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,fe,0);g(E)&&f(fe),n.unbindTexture()}P.depthBuffer&&Ce(P)}function Le(P){const E=P.textures;for(let V=0,ee=E.length;V<ee;V++){const re=E[V];if(g(re)){const J=x(P),Ae=r.get(re).__webglTexture;n.bindTexture(J,Ae),f(J),n.unbindTexture()}}}const st=[],D=[];function Dt(P){if(P.samples>0){if(Oe(P)===!1){const E=P.textures,V=P.width,ee=P.height;let re=t.COLOR_BUFFER_BIT;const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=r.get(P),fe=E.length>1;if(fe)for(let ye=0;ye<E.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const qe=r.get(E[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,V,ee,0,0,V,ee,re,t.NEAREST),l===!0&&(st.length=0,D.length=0,st.push(t.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(st.push(J),D.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<E.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const qe=r.get(E[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function He(P){return Math.min(i.maxSamples,P.samples)}function Oe(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(P){const E=s.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Qe(P,E){const V=P.colorSpace,ee=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==ya&&V!==Hi&&(nt.getTransfer(V)===ht?(ee!==Tr||re!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=I,this.rebindTextures=Ue,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Oe}function gU(t,e){function n(r,i=Hi){let o;const s=nt.getTransfer(i);if(r===Ti)return t.UNSIGNED_BYTE;if(r===uv)return t.UNSIGNED_SHORT_4_4_4_4;if(r===fv)return t.UNSIGNED_SHORT_5_5_5_1;if(r===K1)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===Y1)return t.BYTE;if(r===q1)return t.SHORT;if(r===$l)return t.UNSIGNED_SHORT;if(r===cv)return t.INT;if(r===qo)return t.UNSIGNED_INT;if(r===di)return t.FLOAT;if(r===ic)return t.HALF_FLOAT;if(r===Z1)return t.ALPHA;if(r===Q1)return t.RGB;if(r===Tr)return t.RGBA;if(r===J1)return t.LUMINANCE;if(r===eE)return t.LUMINANCE_ALPHA;if(r===Ks)return t.DEPTH_COMPONENT;if(r===va)return t.DEPTH_STENCIL;if(r===tE)return t.RED;if(r===dv)return t.RED_INTEGER;if(r===nE)return t.RG;if(r===hv)return t.RG_INTEGER;if(r===pv)return t.RGBA_INTEGER;if(r===bu||r===Cu||r===Ru||r===Pu)if(s===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===bu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ru)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===bu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ru)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tm||r===nm||r===rm||r===im)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===im)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===om||r===sm||r===am)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===om||r===sm)return s===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===am)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lm||r===cm||r===um||r===fm||r===dm||r===hm||r===pm||r===mm||r===gm||r===vm||r===ym||r===_m||r===xm||r===Sm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===lm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===um)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ym)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_m)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sm)return s===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lu||r===Em||r===Mm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Lu)return s===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Em)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rE||r===wm||r===Tm||r===Am)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Lu)return o.COMPRESSED_RED_RGTC1_EXT;if(r===wm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Am)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ga?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}const vU={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,r),f=this._getHandJoint(c,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vU)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new iu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const yU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_U=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new Nn,o=e.properties.get(i);o.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new oo({vertexShader:yU,fragmentShader:_U,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new fd(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SU extends Pa{constructor(e,n){super();const r=this;let i=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const y=new xU,g=n.getContextAttributes();let f=null,x=null;const S=[],_=[],T=new gt;let w=null;const M=new sr;M.viewport=new Ut;const L=new sr;L.viewport=new Ut;const A=[M,L],m=new VL;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=S[X];return ne===void 0&&(ne=new bh,S[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=S[X];return ne===void 0&&(ne=new bh,S[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=S[X];return ne===void 0&&(ne=new bh,S[X]=ne),ne.getHandSpace()};function N(X){const ne=_.indexOf(X.inputSource);if(ne===-1)return;const ce=S[ne];ce!==void 0&&(ce.update(X.inputSource,X.frame,c||s),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",G);for(let X=0;X<S.length;X++){const ne=_[X];ne!==null&&(_[X]=null,S[X].disconnect(ne))}C=null,O=null,y.reset(),e.setRenderTarget(f),p=null,h=null,d=null,i=null,x=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ce=null,ae=null,_e=null;g.depth&&(_e=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?va:Ks,ae=g.stencil?ga:qo);const Ce={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:o};d=new XRWebGLBinding(i,n),h=d.createProjectionLayer(Ce),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ko(h.textureWidth,h.textureHeight,{format:Tr,type:Ti,depthTexture:new _E(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,n,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ko(p.framebufferWidth,p.framebufferHeight,{format:Tr,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(X){for(let ne=0;ne<X.removed.length;ne++){const ce=X.removed[ne],ae=_.indexOf(ce);ae>=0&&(_[ae]=null,S[ae].disconnect(ce))}for(let ne=0;ne<X.added.length;ne++){const ce=X.added[ne];let ae=_.indexOf(ce);if(ae===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=_.length){_.push(ce),ae=Ce;break}else if(_[Ce]===null){_[Ce]=ce,ae=Ce;break}if(ae===-1)break}const _e=S[ae];_e&&_e.connect(ce)}}const B=new j,Y=new j;function I(X,ne,ce){B.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ae=B.distanceTo(Y),_e=ne.projectionMatrix.elements,Ce=ce.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),Le=(_e[9]+1)/_e[5],st=(_e[9]-1)/_e[5],D=(_e[8]-1)/_e[0],Dt=(Ce[8]+1)/Ce[0],He=Ue*D,Oe=Ue*Dt,Ee=ae/(-D+Dt),Qe=Ee*-D;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qe),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),_e[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Se=Ue+Ee,P=Ye+Ee,E=He-Qe,V=Oe+(ae-Qe),ee=Le*Ye/P*Se,re=st*Ye/P*Se;X.projectionMatrix.makePerspective(E,V,ee,re,Se,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function z(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ne=X.near,ce=X.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),m.near=L.near=M.near=ne,m.far=L.far=M.far=ce,(C!==m.near||O!==m.far)&&(i.updateRenderState({depthNear:m.near,depthFar:m.far}),C=m.near,O=m.far),M.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,m.layers.mask=M.layers.mask|L.layers.mask;const ae=X.parent,_e=m.cameras;z(m,ae);for(let Ce=0;Ce<_e.length;Ce++)z(_e[Ce],ae);_e.length===2?I(m,M,L):m.projectionMatrix.copy(M.projectionMatrix),q(X,m,ae)};function q(X,ne,ce){ce===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=bm*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(m)};let oe=null;function ue(X,ne){if(u=ne.getViewerPose(c||s),v=ne,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ae=!1;ce.length!==m.cameras.length&&(m.cameras.length=0,ae=!0);for(let Ce=0;Ce<ce.length;Ce++){const Ue=ce[Ce];let Ye=null;if(p!==null)Ye=p.getViewport(Ue);else{const st=d.getViewSubImage(h,Ue);Ye=st.viewport,Ce===0&&(e.setRenderTargetTextures(x,st.colorTexture,h.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(x))}let Le=A[Ce];Le===void 0&&(Le=new sr,Le.layers.enable(Ce),Le.viewport=new Ut,A[Ce]=Le),Le.matrix.fromArray(Ue.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ue.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ce===0&&(m.matrix.copy(Le.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),ae===!0&&m.cameras.push(Le)}const _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Ce=d.getDepthInformation(ce[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,i.renderState)}}for(let ce=0;ce<S.length;ce++){const ae=_[ce],_e=S[ce];ae!==null&&_e!==void 0&&_e.update(ae,ne,c||s)}oe&&oe(X,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Fe=new xE;Fe.setAnimationLoop(ue),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const So=new Ai,EU=new Ot;function MU(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function r(g,f){f.color.getRGB(g.fogColor.value,pE(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,x,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(g,f):f.isMeshToonMaterial?(o(g,f),d(g,f)):f.isMeshPhongMaterial?(o(g,f),u(g,f)):f.isMeshStandardMaterial?(o(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(o(g,f),v(g,f)):f.isMeshDepthMaterial?o(g,f):f.isMeshDistanceMaterial?(o(g,f),y(g,f)):f.isMeshNormalMaterial?o(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,S):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Dn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Dn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),S=x.envMap,_=x.envMapRotation;S&&(g.envMap.value=S,So.copy(_),So.x*=-1,So.y*=-1,So.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(So.y*=-1,So.z*=-1),g.envMapRotation.value.setFromMatrix4(EU.makeRotationFromEuler(So)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=S*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function wU(t,e,n,r){let i={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const _=S.program;r.uniformBlockBinding(x,_)}function c(x,S){let _=i[x.id];_===void 0&&(v(x),_=u(x),i[x.id]=_,x.addEventListener("dispose",g));const T=S.program;r.updateUBOMapping(x,T);const w=e.render.frame;o[x.id]!==w&&(h(x),o[x.id]=w)}function u(x){const S=d();x.__bindingPointIndex=S;const _=t.createBuffer(),T=x.__size,w=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,_),_}function d(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=i[x.id],_=x.uniforms,T=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let w=0,M=_.length;w<M;w++){const L=Array.isArray(_[w])?_[w]:[_[w]];for(let A=0,m=L.length;A<m;A++){const C=L[A];if(p(C,w,A,T)===!0){const O=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let G=0;G<N.length;G++){const B=N[G],Y=y(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,O+H,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,S,_,T){const w=x.value,M=S+"_"+_;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const L=T[M];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[M]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function v(x){const S=x.uniforms;let _=0;const T=16;for(let M=0,L=S.length;M<L;M++){const A=Array.isArray(S[M])?S[M]:[S[M]];for(let m=0,C=A.length;m<C;m++){const O=A[m],N=Array.isArray(O.value)?O.value:[O.value];for(let H=0,G=N.length;H<G;H++){const B=N[H],Y=y(B),I=_%T,z=I%Y.boundary,q=I+z;_+=z,q!==0&&T-q<Y.storage&&(_+=T-q),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=Y.storage}}}const w=_%T;return w>0&&(_+=T-w),x.__size=_,x.__cache={},this}function y(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function g(x){const S=x.target;S.removeEventListener("dispose",g);const _=s.indexOf(S.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function f(){for(const x in i)t.deleteBuffer(i[x]);s=[],i={},o={}}return{bind:l,update:c,dispose:f}}class TU{constructor(e={}){const{canvas:n=cL(),context:r=null,depth:i=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=s;const v=new Uint32Array(4),y=new Int32Array(4);let g=null,f=null;const x=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nr,this.toneMapping=Ji,this.toneMappingExposure=1;const _=this;let T=!1,w=0,M=0,L=null,A=-1,m=null;const C=new Ut,O=new Ut;let N=null;const H=new ut(0);let G=0,B=n.width,Y=n.height,I=1,z=null,q=null;const oe=new Ut(0,0,B,Y),ue=new Ut(0,0,B,Y);let Fe=!1;const X=new vE;let ne=!1,ce=!1;this.transmissionResolutionScale=1;const ae=new Ot,_e=new Ot,Ce=new j,Ue=new Ut,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function st(){return L===null?I:1}let D=r;function Dt(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lv}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",me,!1),D===null){const k="webgl2";if(D=Dt(k,b),D===null)throw Dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let He,Oe,Ee,Qe,Se,P,E,V,ee,re,J,Ae,fe,ye,qe,ie,xe,Re,Pe,we,Xe,Ve,rt,U;function pe(){He=new ND(D),He.init(),Ve=new gU(D,He),Oe=new CD(D,He,e,Ve),Ee=new pU(D,He),Oe.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),Qe=new kD(D),Se=new tU,P=new mU(D,He,Ee,Se,Oe,Ve,Qe),E=new PD(_),V=new DD(_),ee=new WL(D),rt=new AD(D,ee),re=new UD(D,ee,Qe,rt),J=new BD(D,re,ee,Qe),Pe=new FD(D,Oe,P),ie=new RD(Se),Ae=new eU(_,E,V,He,Oe,rt,ie),fe=new MU(_,Se),ye=new rU,qe=new cU(He),Re=new TD(_,E,V,Ee,J,p,l),xe=new dU(_,J,Oe),U=new wU(D,Qe,Oe,Ee),we=new bD(D,He,Qe),Xe=new OD(D,He,Qe),Qe.programs=Ae.programs,_.capabilities=Oe,_.extensions=He,_.properties=Se,_.renderLists=ye,_.shadowMap=xe,_.state=Ee,_.info=Qe}pe();const K=new SU(_,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(B,Y,!1))},this.getSize=function(b){return b.set(B,Y)},this.setSize=function(b,k,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,Y=k,n.width=Math.floor(b*I),n.height=Math.floor(k*I),W===!0&&(n.style.width=b+"px",n.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(B*I,Y*I).floor()},this.setDrawingBufferSize=function(b,k,W){B=b,Y=k,I=W,n.width=Math.floor(b*W),n.height=Math.floor(k*W),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,k,W,$){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,k,W,$),Ee.viewport(C.copy(oe).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(ue)},this.setScissor=function(b,k,W,$){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,k,W,$),Ee.scissor(O.copy(ue).multiplyScalar(I).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(b){Ee.setScissorTest(Fe=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(b=!0,k=!0,W=!0){let $=0;if(b){let F=!1;if(L!==null){const le=L.texture.format;F=le===pv||le===hv||le===dv}if(F){const le=L.texture.type,ge=le===Ti||le===qo||le===$l||le===ga||le===uv||le===fv,Te=Re.getClearColor(),be=Re.getClearAlpha(),ke=Te.r,Be=Te.g,De=Te.b;ge?(v[0]=ke,v[1]=Be,v[2]=De,v[3]=be,D.clearBufferuiv(D.COLOR,0,v)):(y[0]=ke,y[1]=Be,y[2]=De,y[3]=be,D.clearBufferiv(D.COLOR,0,y))}else $|=D.COLOR_BUFFER_BIT}k&&($|=D.DEPTH_BUFFER_BIT),W&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",me,!1),Re.dispose(),ye.dispose(),qe.dispose(),Se.dispose(),E.dispose(),V.dispose(),J.dispose(),rt.dispose(),U.dispose(),Ae.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ev),K.removeEventListener("sessionend",Mv),po.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Qe.autoReset,k=xe.enabled,W=xe.autoUpdate,$=xe.needsUpdate,F=xe.type;pe(),Qe.autoReset=b,xe.enabled=k,xe.autoUpdate=W,xe.needsUpdate=$,xe.type=F}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){const k=b.target;k.removeEventListener("dispose",ze),St(k)}function St(b){Ie(b),Se.remove(b)}function Ie(b){const k=Se.get(b).programs;k!==void 0&&(k.forEach(function(W){Ae.releaseProgram(W)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,W,$,F,le){k===null&&(k=Ye);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Te=KE(b,k,W,$,F);Ee.setMaterial($,ge);let be=W.index,ke=1;if($.wireframe===!0){if(be=re.getWireframeAttribute(W),be===void 0)return;ke=2}const Be=W.drawRange,De=W.attributes.position;let Je=Be.start*ke,at=(Be.start+Be.count)*ke;le!==null&&(Je=Math.max(Je,le.start*ke),at=Math.min(at,(le.start+le.count)*ke)),be!==null?(Je=Math.max(Je,0),at=Math.min(at,be.count)):De!=null&&(Je=Math.max(Je,0),at=Math.min(at,De.count));const Ft=at-Je;if(Ft<0||Ft===1/0)return;rt.setup(F,$,Te,W,be);let Ct,tt=we;if(be!==null&&(Ct=ee.get(be),tt=Xe,tt.setIndex(Ct)),F.isMesh)$.wireframe===!0?(Ee.setLineWidth($.wireframeLinewidth*st()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(F.isLine){let Ne=$.linewidth;Ne===void 0&&(Ne=1),Ee.setLineWidth(Ne*st()),F.isLineSegments?tt.setMode(D.LINES):F.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else F.isPoints?tt.setMode(D.POINTS):F.isSprite&&tt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,en=F._multiDrawCounts,lt=F._multiDrawCount,gr=be?ee.get(be).bytesPerElement:1,es=Se.get($).currentProgram.getUniforms();for(let kn=0;kn<lt;kn++)es.setValue(D,"_gl_DrawID",kn),tt.render(Ne[kn]/gr,en[kn])}else if(F.isInstancedMesh)tt.renderInstances(Je,Ft,F.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,en=Math.min(W.instanceCount,Ne);tt.renderInstances(Je,Ft,en)}else tt.render(Je,Ft)};function Ge(b,k,W){b.transparent===!0&&b.side===li&&b.forceSinglePass===!1?(b.side=Dn,b.needsUpdate=!0,dc(b,k,W),b.side=io,b.needsUpdate=!0,dc(b,k,W),b.side=li):dc(b,k,W)}this.compile=function(b,k,W=null){W===null&&(W=b),f=qe.get(W),f.init(k),S.push(f),W.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),b!==W&&b.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const $=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Te=le[ge];Ge(Te,W,F),$.add(Te)}else Ge(le,W,F),$.add(le)}),S.pop(),f=null,$},this.compileAsync=function(b,k,W=null){const $=this.compile(b,k,W);return new Promise(F=>{function le(){if($.forEach(function(ge){Se.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){F(b);return}setTimeout(le,10)}He.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let xn=null;function Kr(b){xn&&xn(b)}function Ev(){po.stop()}function Mv(){po.start()}const po=new xE;po.setAnimationLoop(Kr),typeof self<"u"&&po.setContext(self),this.setAnimationLoop=function(b){xn=b,K.setAnimationLoop(b),b===null?po.stop():po.start()},K.addEventListener("sessionstart",Ev),K.addEventListener("sessionend",Mv),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,k,L),f=qe.get(b,S.length),f.init(k),S.push(f),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,ce),g=ye.get(b,x.length),g.init(),x.push(g),K.enabled===!0&&K.isPresenting===!0){const le=_.xr.getDepthSensingMesh();le!==null&&_d(le,k,-1/0,_.sortObjects)}_d(b,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(z,q),Le=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Le&&Re.addToRenderList(g,b),this.info.render.frame++,ne===!0&&ie.beginShadows();const W=f.state.shadowsArray;xe.render(W,b,k),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,F=g.transmissive;if(f.setupLights(),k.isArrayCamera){const le=k.cameras;if(F.length>0)for(let ge=0,Te=le.length;ge<Te;ge++){const be=le[ge];Tv($,F,b,be)}Le&&Re.render(b);for(let ge=0,Te=le.length;ge<Te;ge++){const be=le[ge];wv(g,b,be,be.viewport)}}else F.length>0&&Tv($,F,b,k),Le&&Re.render(b),wv(g,b,k);L!==null&&M===0&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(_,b,k),rt.resetDefaultState(),A=-1,m=null,S.pop(),S.length>0?(f=S[S.length-1],ne===!0&&ie.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function _d(b,k,W,$){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){$&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const ge=J.update(b),Te=b.material;Te.visible&&g.push(b,ge,Te,W,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const ge=J.update(b),Te=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(Te)){const be=ge.groups;for(let ke=0,Be=be.length;ke<Be;ke++){const De=be[ke],Je=Te[De.materialIndex];Je&&Je.visible&&g.push(b,ge,Je,W,Ue.z,De)}}else Te.visible&&g.push(b,ge,Te,W,Ue.z,null)}}const le=b.children;for(let ge=0,Te=le.length;ge<Te;ge++)_d(le[ge],k,W,$)}function wv(b,k,W,$){const F=b.opaque,le=b.transmissive,ge=b.transparent;f.setupLightsView(W),ne===!0&&ie.setGlobalState(_.clippingPlanes,W),$&&Ee.viewport(C.copy($)),F.length>0&&fc(F,k,W),le.length>0&&fc(le,k,W),ge.length>0&&fc(ge,k,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Tv(b,k,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new Ko(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ic:Ti,minFilter:Uo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const le=f.state.transmissionRenderTarget[$.id],ge=$.viewport||C;le.setSize(ge.z*_.transmissionResolutionScale,ge.w*_.transmissionResolutionScale);const Te=_.getRenderTarget();_.setRenderTarget(le),_.getClearColor(H),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Le&&Re.render(W);const be=_.toneMapping;_.toneMapping=Ji;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),ne===!0&&ie.setGlobalState(_.clippingPlanes,$),fc(b,W,$),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),He.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let De=0,Je=k.length;De<Je;De++){const at=k[De],Ft=at.object,Ct=at.geometry,tt=at.material,Ne=at.group;if(tt.side===li&&Ft.layers.test($.layers)){const en=tt.side;tt.side=Dn,tt.needsUpdate=!0,Av(Ft,W,$,Ct,tt,Ne),tt.side=en,tt.needsUpdate=!0,Be=!0}}Be===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}_.setRenderTarget(Te),_.setClearColor(H,G),ke!==void 0&&($.viewport=ke),_.toneMapping=be}function fc(b,k,W){const $=k.isScene===!0?k.overrideMaterial:null;for(let F=0,le=b.length;F<le;F++){const ge=b[F],Te=ge.object,be=ge.geometry,ke=$===null?ge.material:$,Be=ge.group;Te.layers.test(W.layers)&&Av(Te,k,W,be,ke,Be)}}function Av(b,k,W,$,F,le){b.onBeforeRender(_,k,W,$,F,le),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(_,k,W,$,b,le),F.transparent===!0&&F.side===li&&F.forceSinglePass===!1?(F.side=Dn,F.needsUpdate=!0,_.renderBufferDirect(W,k,$,F,b,le),F.side=io,F.needsUpdate=!0,_.renderBufferDirect(W,k,$,F,b,le),F.side=li):_.renderBufferDirect(W,k,$,F,b,le),b.onAfterRender(_,k,W,$,F,le)}function dc(b,k,W){k.isScene!==!0&&(k=Ye);const $=Se.get(b),F=f.state.lights,le=f.state.shadowsArray,ge=F.state.version,Te=Ae.getParameters(b,F.state,le,k,W),be=Ae.getProgramCacheKey(Te);let ke=$.programs;$.environment=b.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(b.isMeshStandardMaterial?V:E).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",ze),ke=new Map,$.programs=ke);let Be=ke.get(be);if(Be!==void 0){if($.currentProgram===Be&&$.lightsStateVersion===ge)return Cv(b,Te),Be}else Te.uniforms=Ae.getUniforms(b),b.onBeforeCompile(Te,_),Be=Ae.acquireProgram(Te,be),ke.set(be,Be),$.uniforms=Te.uniforms;const De=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=ie.uniform),Cv(b,Te),$.needsLights=QE(b),$.lightsStateVersion=ge,$.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),$.currentProgram=Be,$.uniformsList=null,Be}function bv(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Iu.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Cv(b,k){const W=Se.get(b);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function KE(b,k,W,$,F){k.isScene!==!0&&(k=Ye),P.resetTextureUnits();const le=k.fog,ge=$.isMeshStandardMaterial?k.environment:null,Te=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ya,be=($.isMeshStandardMaterial?V:E).get($.envMap||ge),ke=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),De=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let Ft=Ji;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ft=_.toneMapping);const Ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=Ct!==void 0?Ct.length:0,Ne=Se.get($),en=f.state.lights;if(ne===!0&&(ce===!0||b!==m)){const pn=b===m&&$.id===A;ie.setState($,b,pn)}let lt=!1;$.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==en.state.version||Ne.outputColorSpace!==Te||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==be||$.fog===!0&&Ne.fog!==le||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ie.numPlanes||Ne.numIntersection!==ie.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Be||Ne.morphTargets!==De||Ne.morphNormals!==Je||Ne.morphColors!==at||Ne.toneMapping!==Ft||Ne.morphTargetsCount!==tt)&&(lt=!0):(lt=!0,Ne.__version=$.version);let gr=Ne.currentProgram;lt===!0&&(gr=dc($,k,F));let es=!1,kn=!1,Da=!1;const Et=gr.getUniforms(),Qn=Ne.uniforms;if(Ee.useProgram(gr.program)&&(es=!0,kn=!0,Da=!0),$.id!==A&&(A=$.id,kn=!0),es||m!==b){Ee.buffers.depth.getReversed()?(ae.copy(b.projectionMatrix),fL(ae),dL(ae),Et.setValue(D,"projectionMatrix",ae)):Et.setValue(D,"projectionMatrix",b.projectionMatrix),Et.setValue(D,"viewMatrix",b.matrixWorldInverse);const Sn=Et.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,Ce.setFromMatrixPosition(b.matrixWorld)),Oe.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),m!==b&&(m=b,kn=!0,Da=!0)}if(F.isSkinnedMesh){Et.setOptional(D,F,"bindMatrix"),Et.setOptional(D,F,"bindMatrixInverse");const pn=F.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Et.setValue(D,"boneTexture",pn.boneTexture,P))}F.isBatchedMesh&&(Et.setOptional(D,F,"batchingTexture"),Et.setValue(D,"batchingTexture",F._matricesTexture,P),Et.setOptional(D,F,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",F._indirectTexture,P),Et.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",F._colorsTexture,P));const Jn=W.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Pe.update(F,W,gr),(kn||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,Et.setValue(D,"receiveShadow",F.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Qn.envMap.value=be,Qn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Qn.envMapIntensity.value=k.environmentIntensity),kn&&(Et.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&ZE(Qn,Da),le&&$.fog===!0&&fe.refreshFogUniforms(Qn,le),fe.refreshMaterialUniforms(Qn,$,I,Y,f.state.transmissionRenderTarget[b.id]),Iu.upload(D,bv(Ne),Qn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Iu.upload(D,bv(Ne),Qn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(D,"center",F.center),Et.setValue(D,"modelViewMatrix",F.modelViewMatrix),Et.setValue(D,"normalMatrix",F.normalMatrix),Et.setValue(D,"modelMatrix",F.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const pn=$.uniformsGroups;for(let Sn=0,xd=pn.length;Sn<xd;Sn++){const mo=pn[Sn];U.update(mo,gr),U.bind(mo,gr)}}return gr}function ZE(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function QE(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,W){Se.get(b.texture).__webglTexture=k,Se.get(b.depthTexture).__webglTexture=W;const $=Se.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const W=Se.get(b);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const JE=D.createFramebuffer();this.setRenderTarget=function(b,k=0,W=0){L=b,w=k,M=W;let $=!0,F=null,le=!1,ge=!1;if(b){const be=Se.get(b);if(be.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(be.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(be.__hasExternalTextures)P.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&Se.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);const Be=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?F=Be[k][W]:F=Be[k],le=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?F=Se.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[W]:F=Be,C.copy(b.viewport),O.copy(b.scissor),N=b.scissorTest}else C.copy(oe).multiplyScalar(I).floor(),O.copy(ue).multiplyScalar(I).floor(),N=Fe;if(W!==0&&(F=JE),Ee.bindFramebuffer(D.FRAMEBUFFER,F)&&$&&Ee.drawBuffers(b,F),Ee.viewport(C),Ee.scissor(O),Ee.setScissorTest(N),le){const be=Se.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,W)}else if(ge){const be=Se.get(b.texture),ke=k;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,W,ke)}else if(b!==null&&W!==0){const be=Se.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,W)}A=-1},this.readRenderTargetPixels=function(b,k,W,$,F,le,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){Ee.bindFramebuffer(D.FRAMEBUFFER,Te);try{const be=b.texture,ke=be.format,Be=be.type;if(!Oe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-$&&W>=0&&W<=b.height-F&&D.readPixels(k,W,$,F,Ve.convert(ke),Ve.convert(Be),le)}finally{const be=L!==null?Se.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(b,k,W,$,F,le,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){const be=b.texture,ke=be.format,Be=be.type;if(!Oe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-$&&W>=0&&W<=b.height-F){Ee.bindFramebuffer(D.FRAMEBUFFER,Te);const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(k,W,$,F,Ve.convert(ke),Ve.convert(Be),0);const Je=L!==null?Se.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Je);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uL(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(De),D.deleteSync(at),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,W=0){b.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-W),F=Math.floor(b.image.width*$),le=Math.floor(b.image.height*$),ge=k!==null?k.x:0,Te=k!==null?k.y:0;P.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ge,Te,F,le),Ee.unbindTexture()};const eM=D.createFramebuffer(),tM=D.createFramebuffer();this.copyTextureToTexture=function(b,k,W=null,$=null,F=0,le=null){b.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],k=arguments[2],le=arguments[3]||0,W=null),le===null&&(F!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=F,F=0):le=0);let ge,Te,be,ke,Be,De,Je,at,Ft;const Ct=b.isCompressedTexture?b.mipmaps[le]:b.image;if(W!==null)ge=W.max.x-W.min.x,Te=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,Be=W.min.y,De=W.isBox3?W.min.z:0;else{const Jn=Math.pow(2,-F);ge=Math.floor(Ct.width*Jn),Te=Math.floor(Ct.height*Jn),b.isDataArrayTexture?be=Ct.depth:b.isData3DTexture?be=Math.floor(Ct.depth*Jn):be=1,ke=0,Be=0,De=0}$!==null?(Je=$.x,at=$.y,Ft=$.z):(Je=0,at=0,Ft=0);const tt=Ve.convert(k.format),Ne=Ve.convert(k.type);let en;k.isData3DTexture?(P.setTexture3D(k,0),en=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),en=D.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),en=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),gr=D.getParameter(D.UNPACK_IMAGE_HEIGHT),es=D.getParameter(D.UNPACK_SKIP_PIXELS),kn=D.getParameter(D.UNPACK_SKIP_ROWS),Da=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ct.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ct.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De);const Et=b.isDataArrayTexture||b.isData3DTexture,Qn=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Jn=Se.get(b),pn=Se.get(k),Sn=Se.get(Jn.__renderTarget),xd=Se.get(pn.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,xd.__webglFramebuffer);for(let mo=0;mo<be;mo++)Et&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(b).__webglTexture,F,De+mo),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,le,Ft+mo)),D.blitFramebuffer(ke,Be,ge,Te,Je,at,ge,Te,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||Se.has(b)){const Jn=Se.get(b),pn=Se.get(k);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,eM),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,tM);for(let Sn=0;Sn<be;Sn++)Et?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jn.__webglTexture,F,De+Sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jn.__webglTexture,F),Qn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,le,Ft+Sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,le),F!==0?D.blitFramebuffer(ke,Be,ge,Te,Je,at,ge,Te,D.COLOR_BUFFER_BIT,D.NEAREST):Qn?D.copyTexSubImage3D(en,le,Je,at,Ft+Sn,ke,Be,ge,Te):D.copyTexSubImage2D(en,le,Je,at,ke,Be,ge,Te);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Qn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(en,le,Je,at,Ft,ge,Te,be,tt,Ne,Ct.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(en,le,Je,at,Ft,ge,Te,be,tt,Ct.data):D.texSubImage3D(en,le,Je,at,Ft,ge,Te,be,tt,Ne,Ct):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,Je,at,ge,Te,tt,Ne,Ct.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,Je,at,Ct.width,Ct.height,tt,Ct.data):D.texSubImage2D(D.TEXTURE_2D,le,Je,at,ge,Te,tt,Ne,Ct);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gr),D.pixelStorei(D.UNPACK_SKIP_PIXELS,es),D.pixelStorei(D.UNPACK_SKIP_ROWS,kn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Da),le===0&&k.generateMipmaps&&D.generateMipmap(en),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,k,W=null,$=null,F=0){return b.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,$=arguments[1]||null,b=arguments[2],k=arguments[3],F=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,W,$,F)},this.initRenderTarget=function(b){Se.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){w=0,M=0,L=null,Ee.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}const AU=()=>{const t=Z.useRef(null);return Z.useEffect(()=>{const e=t.current.clientWidth,n=t.current.clientHeight,r=new UL,i=new sr(75,e/n,.1,1e3);i.position.z=400;const o=new TU({alpha:!0});o.setSize(e,n),t.current.appendChild(o.domElement);const s=200;new mv(s,32,32);const a=["JavaScript","TypeScript","React.js","Next.js","Node.js","HTML5","CSS3","MongoDB","SQL","REST APIs","Tailwind","Bootstrap","Git","Java","C++","Python","MySQL","Azure","ThreeJS","Postman","Spring Boot","Spring MVC","AWS","Agile","VS Code","IntelliJ","Jira","Thymeleaf"],l=new yE({color:16711935,size:10}),c=new qr,u=[];for(let p=0;p<a.length;p++){const v=Math.acos(-1+2*p/a.length),y=Math.sqrt(a.length*Math.PI)*v,g=s*Math.cos(y)*Math.sin(v),f=s*Math.sin(y)*Math.sin(v),x=s*Math.cos(v);u.push(g,f,x)}c.setAttribute("position",new Rr(u,3));const d=new FL(c,l);r.add(d);const h=()=>{requestAnimationFrame(h),d.rotation.y+=.01,o.render(r,i)};return h(),()=>{t.current.removeChild(o.domElement)}},[]),R.jsx("div",{ref:t,style:{width:"100%",height:"500px"}})},bU=({sectionRefs:t})=>R.jsxs("div",{ref:e=>t.current.About=e,id:"About",className:"about-container flex flex-row justify-between items-start px-4 py-4",children:[R.jsxs("div",{className:"about-text flex flex-col justify-center items-start text-gray-100 px-4",children:[R.jsx("h2",{className:"text-xl font-medium uppercase border-box",children:"About"}),R.jsxs("h3",{className:"text-base mt-4 text-start text-lightgray",children:["I am a passionate software engineer specializing in crafting dynamic Java applications and engaging data visualizations. My expertise lies in developing fast, user-friendly software solutions that prioritize exceptional user experiences. I thrive on bringing innovation and precision to every project I take on.",R.jsx("br",{}),"With a strong background in Software Engineering, I've worked extensively with technologies like Java, MySQL, C++, MongoDB, JavaScript, and HTML. Currently, I'm expanding my skill set to include cloud technologies such as AWS and Microsoft Azure. My experience includes building scalable web applications tailored to client needs, as well as creating innovative projects for a community group I founded.",R.jsx("br",{}),"Outside of work, I enjoy cosplaying with friends, working on my car, skateboarding, and pushing my limits at the gym."]})]}),R.jsx(AU,{})]}),CU=({sectionRefs:t})=>R.jsxs("div",{ref:e=>t.current.Achievements=e,id:"Achievements",className:"flex flex-col justify-center items-start text-gray-100 px-4 py-4",children:[R.jsx("h2",{className:"text-overlay text-xl font-medium uppercase border-box",children:"Achievements"}),R.jsx("h3",{className:"text-overlay text-base mt-4 text-lightgray text-start",children:R.jsxs("ul",{children:[R.jsxs("li",{children:[R.jsx("strong",{children:"Service Excellence Award"})," – Recognized for outstanding work and exceptional performance, demonstrating a commitment to high-quality software development in a trading systems environment"]}),R.jsx("br",{}),R.jsxs("li",{children:[R.jsx("strong",{children:"Employee of the Year"})," – Recognized for outstanding work, exceptional performance, and dedication to my job, reflecting strong organizational skills and team collaboration in mission-critical projects"]})]})})]}),RU=({sectionRefs:t})=>{const[e,n]=Z.useState([]);return Z.useEffect(()=>{let i="AZ-900 – Azure Fundamentals, Microsoft (Sep 2023 – Present) ||".split("||").filter(Boolean);n(i)},[]),R.jsxs("div",{ref:r=>t.current.Certifications=r,id:"Certifications",className:"flex flex-col items-start text-gray-100 px-4 py-4",children:[R.jsx("h2",{className:"text-overlay text-xl font-medium uppercase border-box",children:"Certifications"}),R.jsx("h3",{className:"text-overlay text-base mt-4 text-lightgray text-start",children:R.jsx("ul",{id:"certs",children:e.map((r,i)=>R.jsx("li",{children:r},i))})})]})},de=t=>R.jsx("div",{className:"mr-1.5 mt-2 inline-block bg-gray-200 bg-opacity-75 border-2 border-white text-black px-2 py-1 rounded-full text-xs font-medium shadow-xl",children:t.text}),ci=Ra(R.jsx("path",{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"}),"ArrowOutward"),PU=({sectionRefs:t})=>R.jsxs("div",{ref:e=>t.current.Education=e,id:"Education",className:"flex flex-col justify-center items-start text-gray-100 px-4 py-4",children:[R.jsx("h2",{className:"text-xl font-medium mt-2 uppercase border-box",children:"Education"}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"2018-2023"}),R.jsxs("h2",{className:"",children:[R.jsx(wn,{title:"University Link",children:R.jsx(Tn,{href:"https://www.byui.edu",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["Bachelor of Science - Software Engineering",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Brigham Young University - Idaho"}),R.jsx("div",{className:"text-start text-lightgray italic-script",children:"GPA 3.97, Magna Cum Laude"}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"Java"}),R.jsx(de,{text:"Python"}),R.jsx(de,{text:"C++"}),R.jsx(de,{text:"SQL"}),R.jsx(de,{text:"MySQL"}),R.jsx(de,{text:"Postman"}),R.jsx(de,{text:"Object Oriented Programming"}),R.jsx(de,{text:"Data Structures and Algorithms"}),R.jsx(de,{text:"Machine Learning"})]})]})]})]}),LU=rn.forwardRef((t,e)=>R.jsxs("div",{ref:e,id:"Experience",className:"min-h-screen flex flex-col items-start text-gray-100 px-4 py-4",children:[R.jsx("h2",{className:"text-xl font-medium mt-2 uppercase py-4 border-box",children:"Experience"}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"Feburary 2024 - Present"}),R.jsx("h2",{className:"pb-4",children:R.jsx(wn,{title:"Company Link",children:R.jsx(Tn,{href:"https://discord.gg/fB2VQyjWP2",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["CTO | Founder - Tomodachi Street",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Built and scaled a thriving community in the DMV, growing membership to 100+ and hosting dynamic events. Spearheaded the development of automated workflows, secure MongoDB infrastructure, and a messaging platform integration that boosted regional connections by 40%. Designed immersive AV experiences, driving engagement and enhancing attendee satisfaction."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"Java"}),R.jsx(de,{text:"MySQL"}),R.jsx(de,{text:"JavaScript"}),R.jsx(de,{text:"MongoDB"}),R.jsx(de,{text:"RESTful APIs"}),R.jsx(de,{text:"Microservices"}),R.jsx(de,{text:"Authorization"}),R.jsx(de,{text:"Authentication"}),R.jsx(de,{text:"Data Visualization"}),R.jsx(de,{text:"Java Discord API (JDA)"}),R.jsx(de,{text:"Springboot"}),R.jsx(de,{text:"Spring Frameworks"}),R.jsx(de,{text:"HTML"})]})]}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"May 2023 - January 2024"}),R.jsx("h2",{className:"pb-4",children:R.jsx(wn,{title:"Company Link",children:R.jsx(Tn,{href:"https://animealliance.org",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["Event Staff - Anime Alliance",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Played a key role in organizing events for 500+ attendees by setting up engaging decorations and AV equipment. Ensured safety and security by monitoring gaming stations, enforcing entry restrictions, and addressing attendee concerns. Supported efficient event operations, including setup and teardown, to deliver seamless experiences."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"Communication"}),R.jsx(de,{text:"Customer Service"}),R.jsx(de,{text:"Leadership"}),R.jsx(de,{text:"Security"}),R.jsx(de,{text:"Organization"}),R.jsx(de,{text:"Planning"})]})]}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"January 2023 - April 2023"}),R.jsx("h2",{className:"pb-4",children:R.jsx(wn,{title:"Company Link",children:R.jsx(Tn,{href:"https://www.ibexcontrols.com",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["Team Lead | Software Engineer - IBEX Controls",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Led a team of four in developing a 508A UL-compliant web application for electrical panels, resolving technical challenges like SSL issues across browsers. Conducted code reviews to ensure quality and compliance, reducing delays and streamlining development. Fostered collaboration, aligned with client needs, and translated complex requirements into actionable solutions, delivering the project on schedule."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"JavaScript"}),R.jsx(de,{text:"SSL"}),R.jsx(de,{text:"Object Oriented Programming"}),R.jsx(de,{text:"Containerization"}),R.jsx(de,{text:"Leadership"}),R.jsx(de,{text:"Delegation"}),R.jsx(de,{text:"JIRA"}),R.jsx(de,{text:"CI/CD Pipelines"}),R.jsx(de,{text:"HTML"})]})]}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"October 2021 - April 2022"}),R.jsx("h2",{className:"pb-4",children:R.jsx(wn,{title:"Company Link",children:R.jsx(Tn,{href:"https://www.byui.edu",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["Team Lead | Software Engineer - BYU-Idaho",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Led a team of six to deliver mobile and web applications, increasing user engagement by 30% and efficiency by 23%. Optimized SQL databases and enhanced UI/UX design, boosting app performance and positioning products at the forefront of mobile technology. Facilitated Agile Scrum processes, conducted peer code reviews, and mentored team members, ensuring high-quality deliverables that exceeded expectations."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"SQLite"}),R.jsx(de,{text:"Software Requirements Specification (SRS)"}),R.jsx(de,{text:"Software Design Document (SDD)"}),R.jsx(de,{text:"UI Templates"}),R.jsx(de,{text:"CSS"}),R.jsx(de,{text:"PHP"}),R.jsx(de,{text:"SQL Server"}),R.jsx(de,{text:"Android App Development"}),R.jsx(de,{text:"Python"})]})]}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"September 2016 - Present"}),R.jsx("h2",{className:"pb-4",children:R.jsx(wn,{title:"Company Link",children:R.jsx(Tn,{href:"https://www.servicesource.org",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["General Clerk II - Service Source",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Streamlined mailroom operations and expedited customer service, boosting efficiency by 30%. Mastered QA reporting and advanced clerical duties while ensuring IT issue resolution for seamless office functionality. Delivered consistent improvements to operational processes and support systems."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"Mail Room Operations"}),R.jsx(de,{text:"Quality Assurance Reports"}),R.jsx(de,{text:"IT Troubleshooting"}),R.jsx(de,{text:"Documentation"}),R.jsx(de,{text:"Operational Support"}),R.jsx(de,{text:"Clerical Work"}),R.jsx(de,{text:"Customer Service"}),R.jsx(de,{text:"WITS Software"}),R.jsx(de,{text:"UPS Worldship"})]})]})]})),IU=({sectionRefs:t})=>R.jsxs("div",{ref:e=>t.current.Projects=e,id:"Projects",className:"min-h-screen flex flex-col justify-center items-start text-gray-100 px-4 py-4",children:[R.jsx("h2",{className:"text-xl font-medium mt-2 uppercase border-box",children:"Projects"}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"2024"}),R.jsx("h2",{className:"pb-4",children:R.jsx(wn,{title:"Project Link",children:R.jsx(Tn,{href:"https://github.com/ReverendTrivium/Tomodachi-Street",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["Event Management Web Application",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Designed and developed a responsive event management application using the Java Spring Framework, improving event creation, editing, and listing capabilities. Simplified workflows with a user-friendly interface and secure processes for managing event details."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"Java Spring Framework"}),R.jsx(de,{text:"MySQL Server 8"}),R.jsx(de,{text:"Thymeleaf"}),R.jsx(de,{text:"Bootstrap 5"}),R.jsx(de,{text:"RESTful API's"}),R.jsx(de,{text:"Microservices"}),R.jsx(de,{text:"API Architecture"}),R.jsx(de,{text:"Git"})]}),R.jsx("br",{}),R.jsx("h2",{className:"pb-4",children:R.jsx(wn,{title:"Project Link",children:R.jsx(Tn,{href:"https://github.com/ReverendTrivium/RedactedBot",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["Server Management Bot (Discord)",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Built a robust Discord server management bot with Java and JDA, automating moderation, content handling, and dynamic blacklist enforcement. Integrated Reddit and Google APIs for media fetching and search functionality, enhancing server engagement."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"Java"}),R.jsx(de,{text:"Java Discord API (JDA)"}),R.jsx(de,{text:"MongoDB"}),R.jsx(de,{text:"Reddit API"}),R.jsx(de,{text:"Google Custom Search API"}),R.jsx(de,{text:"ScheduledExecutorService"}),R.jsx(de,{text:"Regular Expressions (REGEX)"}),R.jsx(de,{text:"Dotenv"})]})]}),R.jsxs("div",{className:"text-start my-4",children:[R.jsx("p",{className:"text-sm text-gray-400",children:"2023"}),R.jsxs("h2",{className:"",children:[R.jsx(wn,{title:"Project Link",children:R.jsx(Tn,{href:"https://github.com/ReverendTrivium/Inventory",target:"_blank",rel:"noopener",underline:"none",children:R.jsxs("p",{className:"text-gray-100",children:["Inventory - An Inventory Management and Grocery List Android App.",R.jsx(ci,{fontSize:"small",sx:{color:"white","&:hover":{color:"lightgray"}}})]})})}),R.jsx("div",{className:"text-start text-lightgray",children:"Developed an innovative inventory management and grocery list app, enabling users to track household inventory and avoid duplicate purchases. Seamlessly integrates inventory monitoring with grocery list functionality for smarter shopping decisions."}),R.jsxs("div",{className:"mt-2 mb-2 flex flex-wrap",children:[R.jsx(de,{text:"AndroidX"}),R.jsx(de,{text:"Material Search Bar"}),R.jsx(de,{text:"SQLite"}),R.jsx(de,{text:"SQLiteAssetHelper"}),R.jsx(de,{text:"Android Flow Layout"})]})]})]})]});var bn=function(){return bn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},bn.apply(this,arguments)};function xf(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var _t="-ms-",xl="-moz-",ct="-webkit-",TE="comm",hd="rule",vv="decl",DU="@import",AE="@keyframes",NU="@layer",bE=Math.abs,yv=String.fromCharCode,Pm=Object.assign;function UU(t,e){return Kt(t,0)^45?(((e<<2^Kt(t,0))<<2^Kt(t,1))<<2^Kt(t,2))<<2^Kt(t,3):0}function CE(t){return t.trim()}function si(t,e){return(t=e.exec(t))?t[0]:t}function je(t,e,n){return t.replace(e,n)}function Du(t,e,n){return t.indexOf(e,n)}function Kt(t,e){return t.charCodeAt(e)|0}function xa(t,e,n){return t.slice(e,n)}function Br(t){return t.length}function RE(t){return t.length}function al(t,e){return e.push(t),t}function OU(t,e){return t.map(e).join("")}function S_(t,e){return t.filter(function(n){return!si(n,e)})}var pd=1,Sa=1,PE=0,pr=0,Ht=0,Ia="";function md(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:pd,column:Sa,length:s,return:"",siblings:a}}function Oi(t,e){return Pm(md("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Es(t){for(;t.root;)t=Oi(t.root,{children:[t]});al(t,t.siblings)}function kU(){return Ht}function FU(){return Ht=pr>0?Kt(Ia,--pr):0,Sa--,Ht===10&&(Sa=1,pd--),Ht}function Pr(){return Ht=pr<PE?Kt(Ia,pr++):0,Sa++,Ht===10&&(Sa=1,pd++),Ht}function zo(){return Kt(Ia,pr)}function Nu(){return pr}function gd(t,e){return xa(Ia,t,e)}function Lm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BU(t){return pd=Sa=1,PE=Br(Ia=t),pr=0,[]}function zU(t){return Ia="",t}function Ch(t){return CE(gd(pr-1,Im(t===91?t+2:t===40?t+1:t)))}function HU(t){for(;(Ht=zo())&&Ht<33;)Pr();return Lm(t)>2||Lm(Ht)>3?"":" "}function VU(t,e){for(;--e&&Pr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return gd(t,Nu()+(e<6&&zo()==32&&Pr()==32))}function Im(t){for(;Pr();)switch(Ht){case t:return pr;case 34:case 39:t!==34&&t!==39&&Im(Ht);break;case 40:t===41&&Im(t);break;case 92:Pr();break}return pr}function GU(t,e){for(;Pr()&&t+Ht!==57;)if(t+Ht===84&&zo()===47)break;return"/*"+gd(e,pr-1)+"*"+yv(t===47?t:Pr())}function WU(t){for(;!Lm(zo());)Pr();return gd(t,pr)}function $U(t){return zU(Uu("",null,null,null,[""],t=BU(t),0,[0],t))}function Uu(t,e,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,h=0,p=0,v=0,y=1,g=1,f=1,x=0,S="",_=i,T=o,w=r,M=S;g;)switch(v=x,x=Pr()){case 40:if(v!=108&&Kt(M,d-1)==58){Du(M+=je(Ch(x),"&","&\f"),"&\f",bE(c?a[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:M+=Ch(x);break;case 9:case 10:case 13:case 32:M+=HU(v);break;case 92:M+=VU(Nu()-1,7);continue;case 47:switch(zo()){case 42:case 47:al(jU(GU(Pr(),Nu()),e,n,l),l);break;default:M+="/"}break;case 123*y:a[c++]=Br(M)*f;case 125*y:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+u:f==-1&&(M=je(M,/\f/g,"")),p>0&&Br(M)-d&&al(p>32?M_(M+";",r,n,d-1,l):M_(je(M," ","")+";",r,n,d-2,l),l);break;case 59:M+=";";default:if(al(w=E_(M,e,n,c,u,i,a,S,_=[],T=[],d,o),o),x===123)if(u===0)Uu(M,e,w,w,_,o,d,a,T);else switch(h===99&&Kt(M,3)===110?100:h){case 100:case 108:case 109:case 115:Uu(t,w,w,r&&al(E_(t,w,w,0,0,i,a,S,i,_=[],d,T),T),i,T,d,a,r?_:T);break;default:Uu(M,w,w,w,[""],T,0,a,T)}}c=u=p=0,y=f=1,S=M="",d=s;break;case 58:d=1+Br(M),p=v;default:if(y<1){if(x==123)--y;else if(x==125&&y++==0&&FU()==125)continue}switch(M+=yv(x),x*y){case 38:f=u>0?1:(M+="\f",-1);break;case 44:a[c++]=(Br(M)-1)*f,f=1;break;case 64:zo()===45&&(M+=Ch(Pr())),h=zo(),u=d=Br(S=M+=WU(Nu())),x++;break;case 45:v===45&&Br(M)==2&&(y=0)}}return o}function E_(t,e,n,r,i,o,s,a,l,c,u,d){for(var h=i-1,p=i===0?o:[""],v=RE(p),y=0,g=0,f=0;y<r;++y)for(var x=0,S=xa(t,h+1,h=bE(g=s[y])),_=t;x<v;++x)(_=CE(g>0?p[x]+" "+S:je(S,/&\f/g,p[x])))&&(l[f++]=_);return md(t,e,n,i===0?hd:a,l,c,u,d)}function jU(t,e,n,r){return md(t,e,n,TE,yv(kU()),xa(t,2,-2),0,r)}function M_(t,e,n,r,i){return md(t,e,n,vv,xa(t,0,r),xa(t,r+1,-1),r,i)}function LE(t,e,n){switch(UU(t,e)){case 5103:return ct+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+t+t;case 4789:return xl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+t+xl+t+_t+t+t;case 5936:switch(Kt(t,e+11)){case 114:return ct+t+_t+je(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ct+t+_t+je(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ct+t+_t+je(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ct+t+_t+t+t;case 6165:return ct+t+_t+"flex-"+t+t;case 5187:return ct+t+je(t,/(\w+).+(:[^]+)/,ct+"box-$1$2"+_t+"flex-$1$2")+t;case 5443:return ct+t+_t+"flex-item-"+je(t,/flex-|-self/g,"")+(si(t,/flex-|baseline/)?"":_t+"grid-row-"+je(t,/flex-|-self/g,""))+t;case 4675:return ct+t+_t+"flex-line-pack"+je(t,/align-content|flex-|-self/g,"")+t;case 5548:return ct+t+_t+je(t,"shrink","negative")+t;case 5292:return ct+t+_t+je(t,"basis","preferred-size")+t;case 6060:return ct+"box-"+je(t,"-grow","")+ct+t+_t+je(t,"grow","positive")+t;case 4554:return ct+je(t,/([^-])(transform)/g,"$1"+ct+"$2")+t;case 6187:return je(je(je(t,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),t,"")+t;case 5495:case 3959:return je(t,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return je(je(t,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+_t+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+t+t;case 4200:if(!si(t,/flex-|baseline/))return _t+"grid-column-align"+xa(t,e)+t;break;case 2592:case 3360:return _t+je(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,si(r.props,/grid-\w+-end/)})?~Du(t+(n=n[e].value),"span",0)?t:_t+je(t,"-start","")+t+_t+"grid-row-span:"+(~Du(n,"span",0)?si(n,/\d+/):+si(n,/\d+/)-+si(t,/\d+/))+";":_t+je(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return si(r.props,/grid-\w+-start/)})?t:_t+je(je(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return je(t,/(.+)-inline(.+)/,ct+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Br(t)-1-e>6)switch(Kt(t,e+1)){case 109:if(Kt(t,e+4)!==45)break;case 102:return je(t,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+xl+(Kt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Du(t,"stretch",0)?LE(je(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return je(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return _t+i+":"+o+c+(s?_t+i+"-span:"+(a?l:+l-+o)+c:"")+t});case 4949:if(Kt(t,e+6)===121)return je(t,":",":"+ct)+t;break;case 6444:switch(Kt(t,Kt(t,14)===45?18:11)){case 120:return je(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ct+(Kt(t,14)===45?"inline-":"")+"box$3$1"+ct+"$2$3$1"+_t+"$2box$3")+t;case 100:return je(t,":",":"+_t)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return je(t,"scroll-","scroll-snap-")+t}return t}function Sf(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function XU(t,e,n,r){switch(t.type){case NU:if(t.children.length)break;case DU:case vv:return t.return=t.return||t.value;case TE:return"";case AE:return t.return=t.value+"{"+Sf(t.children,r)+"}";case hd:if(!Br(t.value=t.props.join(",")))return""}return Br(n=Sf(t.children,r))?t.return=t.value+"{"+n+"}":""}function YU(t){var e=RE(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function qU(t){return function(e){e.root||(e=e.return)&&t(e)}}function KU(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case vv:t.return=LE(t.value,t.length,n);return;case AE:return Sf([Oi(t,{value:je(t.value,"@","@"+ct)})],r);case hd:if(t.length)return OU(n=t.props,function(i){switch(si(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Es(Oi(t,{props:[je(i,/:(read-\w+)/,":"+xl+"$1")]})),Es(Oi(t,{props:[i]})),Pm(t,{props:S_(n,r)});break;case"::placeholder":Es(Oi(t,{props:[je(i,/:(plac\w+)/,":"+ct+"input-$1")]})),Es(Oi(t,{props:[je(i,/:(plac\w+)/,":"+xl+"$1")]})),Es(Oi(t,{props:[je(i,/:(plac\w+)/,_t+"input-$1")]})),Es(Oi(t,{props:[i]})),Pm(t,{props:S_(n,r)});break}return""})}}var ZU={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zn={},Ea=typeof process<"u"&&zn!==void 0&&(zn.REACT_APP_SC_ATTR||zn.SC_ATTR)||"data-styled",IE="active",DE="data-styled-version",vd="6.1.13",_v=`/*!sc*/
`,Ef=typeof window<"u"&&"HTMLElement"in window,QU=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&zn!==void 0&&zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&zn.REACT_APP_SC_DISABLE_SPEEDY!==""?zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&zn!==void 0&&zn.SC_DISABLE_SPEEDY!==void 0&&zn.SC_DISABLE_SPEEDY!==""&&zn.SC_DISABLE_SPEEDY!=="false"&&zn.SC_DISABLE_SPEEDY),yd=Object.freeze([]),Ma=Object.freeze({});function JU(t,e,n){return n===void 0&&(n=Ma),t.theme!==n.theme&&t.theme||e||n.theme}var NE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tO=/(^-|-$)/g;function w_(t){return t.replace(eO,"-").replace(tO,"")}var nO=/(a)(d)/gi,lu=52,T_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Dm(t){var e,n="";for(e=Math.abs(t);e>lu;e=e/lu|0)n=T_(e%lu)+n;return(T_(e%lu)+n).replace(nO,"$1-$2")}var Rh,UE=5381,Bs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},OE=function(t){return Bs(UE,t)};function rO(t){return Dm(OE(t)>>>0)}function iO(t){return t.displayName||t.name||"Component"}function Ph(t){return typeof t=="string"&&!0}var kE=typeof Symbol=="function"&&Symbol.for,FE=kE?Symbol.for("react.memo"):60115,oO=kE?Symbol.for("react.forward_ref"):60112,sO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},aO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lO=((Rh={})[oO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rh[FE]=BE,Rh);function A_(t){return("type"in(e=t)&&e.type.$$typeof)===FE?BE:"$$typeof"in t?lO[t.$$typeof]:sO;var e}var cO=Object.defineProperty,uO=Object.getOwnPropertyNames,b_=Object.getOwnPropertySymbols,fO=Object.getOwnPropertyDescriptor,dO=Object.getPrototypeOf,C_=Object.prototype;function zE(t,e,n){if(typeof e!="string"){if(C_){var r=dO(e);r&&r!==C_&&zE(t,r,n)}var i=uO(e);b_&&(i=i.concat(b_(e)));for(var o=A_(t),s=A_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in aO||n&&n[l]||s&&l in s||o&&l in o)){var c=fO(e,l);try{cO(t,l,c)}catch{}}}}return t}function wa(t){return typeof t=="function"}function xv(t){return typeof t=="object"&&"styledComponentId"in t}function Oo(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function R_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function jl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Nm(t,e,n){if(n===void 0&&(n=!1),!n&&!jl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Nm(t[r],e[r]);else if(jl(e))for(var r in e)t[r]=Nm(t[r],e[r]);return t}function Sv(t,e){Object.defineProperty(t,"toString",{value:e})}function uc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var hO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw uc(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(_v);return n},t}(),Ou=new Map,Mf=new Map,ku=1,cu=function(t){if(Ou.has(t))return Ou.get(t);for(;Mf.has(ku);)ku++;var e=ku++;return Ou.set(t,e),Mf.set(e,t),e},pO=function(t,e){ku=e+1,Ou.set(t,e),Mf.set(e,t)},mO="style[".concat(Ea,"][").concat(DE,'="').concat(vd,'"]'),gO=new RegExp("^".concat(Ea,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vO=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},yO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(_v),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(gO);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(pO(u,c),vO(t,u,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},P_=function(t){for(var e=document.querySelectorAll(mO),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ea)!==IE&&(yO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function _O(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var HE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ea,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ea,IE),r.setAttribute(DE,vd);var s=_O();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},xO=function(){function t(e){this.element=HE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw uc(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),SO=function(){function t(e){this.element=HE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),EO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),L_=Ef,MO={isServer:!Ef,useCSSOMInjection:!QU},VE=function(){function t(e,n,r){e===void 0&&(e=Ma),n===void 0&&(n={});var i=this;this.options=bn(bn({},MO),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Ef&&L_&&(L_=!1,P_(this)),Sv(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(d){var h=function(f){return Mf.get(f)}(d);if(h===void 0)return"continue";var p=o.names.get(h),v=s.getGroup(d);if(p===void 0||!p.size||v.length===0)return"continue";var y="".concat(Ea,".g").concat(d,'[id="').concat(h,'"]'),g="";p!==void 0&&p.forEach(function(f){f.length>0&&(g+="".concat(f,","))}),l+="".concat(v).concat(y,'{content:"').concat(g,'"}').concat(_v)},u=0;u<a;u++)c(u);return l}(i)})}return t.registerId=function(e){return cu(e)},t.prototype.rehydrate=function(){!this.server&&Ef&&P_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(bn(bn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new EO(i):r?new xO(i):new SO(i)}(this.options),new hO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(cu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(cu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(cu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),wO=/&/g,TO=/^\s*\/\/.*$/gm;function GE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=GE(n.children,e)),n})}function AO(t){var e,n,r,i=Ma,o=i.options,s=o===void 0?Ma:o,a=i.plugins,l=a===void 0?yd:a,c=function(h,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):h},u=l.slice();u.push(function(h){h.type===hd&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(wO,n).replace(r,c))}),s.prefix&&u.push(KU),u.push(XU);var d=function(h,p,v,y){p===void 0&&(p=""),v===void 0&&(v=""),y===void 0&&(y="&"),e=y,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var g=h.replace(TO,""),f=$U(v||p?"".concat(v," ").concat(p," { ").concat(g," }"):g);s.namespace&&(f=GE(f,s.namespace));var x=[];return Sf(f,YU(u.concat(qU(function(S){return x.push(S)})))),x};return d.hash=l.length?l.reduce(function(h,p){return p.name||uc(15),Bs(h,p.name)},UE).toString():"",d}var bO=new VE,Um=AO(),WE=rn.createContext({shouldForwardProp:void 0,styleSheet:bO,stylis:Um});WE.Consumer;rn.createContext(void 0);function I_(){return Z.useContext(WE)}var CO=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Um);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Sv(this,function(){throw uc(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Um),this.name+e.hash},t}(),RO=function(t){return t>="A"&&t<="Z"};function D_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;RO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var $E=function(t){return t==null||t===!1||t===""},jE=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!$E(o)&&(Array.isArray(o)&&o.isCss||wa(o)?r.push("".concat(D_(i),":"),o,";"):jl(o)?r.push.apply(r,xf(xf(["".concat(i," {")],jE(o),!1),["}"],!1)):r.push("".concat(D_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ZU||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ho(t,e,n,r){if($E(t))return[];if(xv(t))return[".".concat(t.styledComponentId)];if(wa(t)){if(!wa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Ho(i,e,n,r)}var o;return t instanceof CO?n?(t.inject(n,r),[t.getName(r)]):[t]:jl(t)?jE(t):Array.isArray(t)?Array.prototype.concat.apply(yd,t.map(function(s){return Ho(s,e,n,r)})):[t.toString()]}function PO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(wa(n)&&!xv(n))return!1}return!0}var LO=OE(vd),IO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&PO(e),this.componentId=n,this.baseHash=Bs(LO,n),this.baseStyle=r,VE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Oo(i,this.staticRulesId);else{var o=R_(Ho(this.rules,e,n,r)),s=Dm(Bs(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Oo(i,s),this.staticRulesId=s}else{for(var l=Bs(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var h=R_(Ho(d,e,n,r));l=Bs(l,h+u),c+=h}}if(c){var p=Dm(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),i=Oo(i,p)}}return i},t}(),XE=rn.createContext(void 0);XE.Consumer;var Lh={};function DO(t,e,n){var r=xv(t),i=t,o=!Ph(t),s=e.attrs,a=s===void 0?yd:s,l=e.componentId,c=l===void 0?function(_,T){var w=typeof _!="string"?"sc":w_(_);Lh[w]=(Lh[w]||0)+1;var M="".concat(w,"-").concat(rO(vd+w+Lh[w]));return T?"".concat(T,"-").concat(M):M}(e.displayName,e.parentComponentId):l,u=e.displayName,d=u===void 0?function(_){return Ph(_)?"styled.".concat(_):"Styled(".concat(iO(_),")")}(t):u,h=e.displayName&&e.componentId?"".concat(w_(e.displayName),"-").concat(e.componentId):e.componentId||c,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var g=e.shouldForwardProp;v=function(_,T){return y(_,T)&&g(_,T)}}else v=y}var f=new IO(n,h,r?i.componentStyle:void 0);function x(_,T){return function(w,M,L){var A=w.attrs,m=w.componentStyle,C=w.defaultProps,O=w.foldedComponentIds,N=w.styledComponentId,H=w.target,G=rn.useContext(XE),B=I_(),Y=w.shouldForwardProp||B.shouldForwardProp,I=JU(M,G,C)||Ma,z=function(ne,ce,ae){for(var _e,Ce=bn(bn({},ce),{className:void 0,theme:ae}),Ue=0;Ue<ne.length;Ue+=1){var Ye=wa(_e=ne[Ue])?_e(Ce):_e;for(var Le in Ye)Ce[Le]=Le==="className"?Oo(Ce[Le],Ye[Le]):Le==="style"?bn(bn({},Ce[Le]),Ye[Le]):Ye[Le]}return ce.className&&(Ce.className=Oo(Ce.className,ce.className)),Ce}(A,M,I),q=z.as||H,oe={};for(var ue in z)z[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"&&z.theme===I||(ue==="forwardedAs"?oe.as=z.forwardedAs:Y&&!Y(ue,q)||(oe[ue]=z[ue]));var Fe=function(ne,ce){var ae=I_(),_e=ne.generateAndInjectStyles(ce,ae.styleSheet,ae.stylis);return _e}(m,z),X=Oo(O,N);return Fe&&(X+=" "+Fe),z.className&&(X+=" "+z.className),oe[Ph(q)&&!NE.has(q)?"class":"className"]=X,oe.ref=L,Z.createElement(q,oe)}(S,_,T)}x.displayName=d;var S=rn.forwardRef(x);return S.attrs=p,S.componentStyle=f,S.displayName=d,S.shouldForwardProp=v,S.foldedComponentIds=r?Oo(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=h,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=r?function(T){for(var w=[],M=1;M<arguments.length;M++)w[M-1]=arguments[M];for(var L=0,A=w;L<A.length;L++)Nm(T,A[L],!0);return T}({},i.defaultProps,_):_}}),Sv(S,function(){return".".concat(S.styledComponentId)}),o&&zE(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function N_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var U_=function(t){return Object.assign(t,{isCss:!0})};function NO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(wa(t)||jl(t))return U_(Ho(N_(yd,xf([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ho(r):U_(Ho(N_(r,e)))}function Om(t,e,n){if(n===void 0&&(n=Ma),!e)throw uc(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,NO.apply(void 0,xf([i],o,!1)))};return r.attrs=function(i){return Om(t,e,bn(bn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Om(t,e,bn(bn({},n),i))},r}var YE=function(t){return Om(DO,t)},qE=YE;NE.forEach(function(t){qE[t]=YE(t)});const UO=({nav:t})=>(Z.useEffect(()=>{document.querySelectorAll(".radio-container input").forEach(n=>{n.id===`radio-${t.toLowerCase()}`&&(n.checked=!0)})},[t]),R.jsx(OO,{nav:t,children:R.jsxs("div",{className:"radio-container",children:[R.jsx("input",{onClick:()=>{var e;(e=document.getElementById("About"))==null||e.scrollIntoView({behavior:"smooth"})},defaultChecked:!0,id:"radio-about",name:"radio",type:"radio"}),R.jsx("label",{htmlFor:"radio-about",className:t==="About"?"active":"",children:"ABOUT"}),R.jsx("input",{onClick:()=>{var e;(e=document.getElementById("Experience"))==null||e.scrollIntoView({behavior:"smooth"})},id:"radio-experience",name:"radio",type:"radio"}),R.jsx("label",{htmlFor:"radio-experience",className:t==="Experience"?"active":"",children:"EXPERIENCE"}),R.jsx("input",{onClick:()=>{var e;(e=document.getElementById("Education"))==null||e.scrollIntoView({behavior:"smooth"})},id:"radio-education",name:"radio",type:"radio"}),R.jsx("label",{htmlFor:"radio-education",className:t==="Education"?"active":"",children:"EDUCATION"}),R.jsx("input",{onClick:()=>{var e;(e=document.getElementById("Projects"))==null||e.scrollIntoView({behavior:"smooth"})},id:"radio-projects",name:"radio",type:"radio"}),R.jsx("label",{htmlFor:"radio-projects",className:t==="Projects"?"active":"",children:"PROJECTS"}),R.jsx("input",{onClick:()=>{var e;(e=document.getElementById("Certifications"))==null||e.scrollIntoView({behavior:"smooth"})},id:"radio-certifications",name:"radio",type:"radio"}),R.jsx("label",{htmlFor:"radio-certifications",className:t==="Certifications"?"active":"",children:"CERTIFICATIONS"}),R.jsx("input",{onClick:()=>{var e;(e=document.getElementById("Achievements"))==null||e.scrollIntoView({behavior:"smooth"})},id:"radio-achievements",name:"radio",type:"radio"}),R.jsx("label",{htmlFor:"radio-achievements",className:t==="Achievements"?"active":"",children:"ACHIEVEMENTS"}),R.jsx("div",{className:"glider-container",children:R.jsx("div",{className:"glider"})})]})})),OO=qE.div`
  .radio-container {
    --main-color: #008080;
    --main-color-opacity: #f7e4791c;
    --total-radio: 6;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-right: 0.5rem;
    align-items: flex-start;
    width: auto;
    margin-left: 20px;
    margin-top: calc(1rem + 50px);
    z-index: 30;
  }

  .radio-container input {
    cursor: pointer;
    appearance: none;
    display: none;
  }

  .radio-container .glider-container {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(27, 27, 27, 1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 1px;
  }

  .radio-container .glider-container .glider {
    position: relative;
    height: calc(100% / var(--total-radio));
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      var(--main-color) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
  }

  .radio-container label {
    cursor: pointer;
    padding: 1rem;
    position: relative;
    color: grey;
    transition: all 0.3s ease-in-out;
  }

  .radio-container input:checked + label {
    color: white;
  }

  .radio-container label.active + label:hover {
    color: white;
  }

  .radio-container label:not(.active) + label:hover {
    color: grey;
  }

  .radio-container input:nth-of-type(1):checked ~ .glider-container .glider {
    transform: translateY(0);
  }

  .radio-container input:nth-of-type(2):checked ~ .glider-container .glider {
    transform: translateY(100%);
  }

  .radio-container input:nth-of-type(3):checked ~ .glider-container .glider {
    transform: translateY(200%);
  }

  .radio-container input:nth-of-type(4):checked ~ .glider-container .glider {
    transform: translateY(300%);
  }

  .radio-container input:nth-of-type(5):checked ~ .glider-container .glider {
    transform: translateY(400%);
  }

  .radio-container input:nth-of-type(6):checked ~ .glider-container .glider {
    transform: translateY(500%);
  }

  .radio-container input:nth-of-type(7):checked ~ .glider-container .glider {
    transform: translateY(600%);
  }

  .radio-container input:nth-of-type(8):checked ~ .glider-container .glider {
    transform: translateY(700%);
  }

  .radio-container input:nth-of-type(9):checked ~ .glider-container .glider {
    transform: translateY(800%);
  }

  .radio-container input:nth-of-type(10):checked ~ .glider-container .glider {
    transform: translateY(900%);
  }
`,kO=()=>{const[t,e]=Z.useState("About"),n=Z.useRef({}),[r,i]=Z.useState(!0),[o,s]=Z.useState(0);return Z.useEffect(()=>{const a=document.querySelector(".star-background");for(let l=0;l<100;l++){const c=document.createElement("div");c.className="star",c.style.top=`${Math.random()*window.innerHeight}px`,c.style.left=`${Math.random()*window.innerWidth}px`,c.style.width=`${Math.random()*2+1}px`,c.style.height=`${Math.random()*2+1}px`,a.appendChild(c)}},[]),Z.useEffect(()=>{const a=()=>{const l=window.scrollY;l>o&&l>50?i(!1):i(!0),s(l)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[o]),Z.useEffect(()=>{const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&e(c.target.id)})},{threshold:.6});return Object.values(n.current).forEach(l=>{l&&a.observe(l)}),()=>a.disconnect()},[]),R.jsxs("div",{className:"w-full h-full",children:[R.jsx("div",{className:`header-container ${r?"visible":"hidden"}`,children:R.jsx(_3,{})}),R.jsx("div",{className:"star-background"}),R.jsxs("div",{className:"meteor-container",children:[R.jsx("div",{className:"meteor-1"}),R.jsx("div",{className:"meteor-2"}),R.jsx("div",{className:"meteor-3"}),R.jsx("div",{className:"meteor-4"}),R.jsx("div",{className:"meteor-5"}),R.jsx("div",{className:"meteor-6"}),R.jsx("div",{className:"meteor-7"}),R.jsx("div",{className:"meteor-8"}),R.jsx("div",{className:"meteor-9"}),R.jsx("div",{className:"meteor-10"}),R.jsx("div",{className:"meteor-11"}),R.jsx("div",{className:"meteor-12"}),R.jsx("div",{className:"meteor-13"}),R.jsx("div",{className:"meteor-14"}),R.jsx("div",{className:"meteor-15"})]}),R.jsxs("div",{className:"content",children:[R.jsx("div",{className:"radio-container-wrapper",children:R.jsx(UO,{nav:t})}),R.jsxs("div",{className:"sections-container",children:[R.jsx(bU,{sectionRefs:n}),R.jsx(LU,{sectionRefs:n}),R.jsx(PU,{sectionRefs:n}),R.jsx(IU,{sectionRefs:n}),R.jsx(RU,{sectionRefs:n}),R.jsx(CU,{sectionRefs:n})]})]})]})};Dh.createRoot(document.getElementById("root")).render(R.jsx(rn.StrictMode,{children:R.jsx(kO,{})}));
