import{d as x,c as N,w as s2,h as bs,o as f,a as z,b as k,n as xs,g as Ns,u as m,m as E2,e as c4,i as W2,r as F,f as w,j as d,k as H,l as U2,F as O,p as b,q as B,s as w2,t as I1,v as ks,x as h3,y as f1,z as h,A as c2,B as D,C as g0,D as b0,E as x0,T as G2,G as N0,_ as A,H as Ss,I as ys,J as ws,K as a4,L as Y2,M as b2,N as X,O as K,P as A2,Q as _3,R as e4,S as k0,U as As,V as _s,W as T2,X as Z,Y as S0,Z as j1,$ as y0,a0 as q1,a1 as Ps,a2 as Ts,a3 as Bs,a4 as Fs,a5 as w0,a6 as $s,a7 as A0,a8 as Ds,a9 as Rs}from"./framework.CdYwsRQj.js";var _0=typeof global=="object"&&global&&global.Object===Object&&global,Es=typeof self=="object"&&self&&self.Object===Object&&self,n2=_0||Es||Function("return this")(),l2=n2.Symbol,P0=Object.prototype,Os=P0.hasOwnProperty,Us=P0.toString,Z2=l2?l2.toStringTag:void 0,Is=Object.prototype.toString,V6=l2?l2.toStringTag:void 0;function x2(c){return c==null?c===void 0?"[object Undefined]":"[object Null]":V6&&V6 in Object(c)?function(a){var e=Os.call(a,Z2),r=a[Z2];try{a[Z2]=void 0;var s=!0}catch{}var n=Us.call(a);return s&&(e?a[Z2]=r:delete a[Z2]),n}(c):function(a){return Is.call(a)}(c)}function N2(c){return c!=null&&typeof c=="object"}function W1(c){return typeof c=="symbol"||N2(c)&&x2(c)=="[object Symbol]"}function r4(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var t2=Array.isArray,d6=l2?l2.prototype:void 0,M6=d6?d6.toString:void 0;function T0(c){if(typeof c=="string")return c;if(t2(c))return r4(c,T0)+"";if(W1(c))return M6?M6.call(c):"";var a=c+"";return a=="0"&&1/c==-1/0?"-0":a}var js=/\s/,qs=/^\s+/;function M2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var Ws=/^[-+]0x[0-9a-f]+$/i,Gs=/^0b[01]+$/i,Ys=/^0o[0-7]+$/i,Xs=parseInt;function P3(c){if(typeof c=="number")return c;if(W1(c))return NaN;if(M2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=M2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;var e;c=(e=c)?e.slice(0,function(s){for(var n=s.length;n--&&js.test(s.charAt(n)););return n}(e)+1).replace(qs,""):e;var r=Gs.test(c);return r||Ys.test(c)?Xs(c.slice(2),r?2:8):Ws.test(c)?NaN:+c}var Ks=1/0;function B0(c){return c}function F0(c){if(!M2(c))return!1;var a=x2(c);return a=="[object Function]"||a=="[object GeneratorFunction]"||a=="[object AsyncFunction]"||a=="[object Proxy]"}var C6,p3=n2["__core-js_shared__"],L6=(C6=/[^.]+$/.exec(p3&&p3.keys&&p3.keys.IE_PROTO||""))?"Symbol(src)_1."+C6:"",Qs=Function.prototype.toString;function B2(c){if(c!=null){try{return Qs.call(c)}catch{}try{return c+""}catch{}}return""}var Zs=/^\[object .+?Constructor\]$/,Js=Function.prototype,cn=Object.prototype,an=Js.toString,en=cn.hasOwnProperty,rn=RegExp("^"+an.call(en).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function F2(c,a){var e=function(r,s){return r==null?void 0:r[s]}(c,a);return function(r){return!(!M2(r)||(s=r,L6&&L6 in s))&&(F0(r)?rn:Zs).test(B2(r));var s}(e)?e:void 0}var g6,V3,d3,T3=F2(n2,"WeakMap"),sn=Date.now,$1=function(){try{var c=F2(Object,"defineProperty");return c({},"",{}),c}catch{}}(),nn=$1?function(c,a){return $1(c,"toString",{configurable:!0,enumerable:!1,value:(e=a,function(){return e}),writable:!0});var e}:B0,on=(g6=nn,V3=0,d3=0,function(){var c=sn(),a=16-(c-d3);if(d3=c,a>0){if(++V3>=800)return arguments[0]}else V3=0;return g6.apply(void 0,arguments)});function $0(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}function ln(c){return c!=c}var tn=/^(?:0|[1-9]\d*)$/;function fn(c,a){var e=typeof c;return!!(a=a??9007199254740991)&&(e=="number"||e!="symbol"&&tn.test(c))&&c>-1&&c%1==0&&c<a}function D0(c,a,e){a=="__proto__"&&$1?$1(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function R0(c,a){return c===a||c!=c&&a!=a}var vn=Object.prototype.hasOwnProperty;function E0(c,a,e){var r=c[a];vn.call(c,a)&&R0(r,e)&&(e!==void 0||a in c)||D0(c,a,e)}function mn(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var o=a[n],l=void 0;l===void 0&&(l=c[o]),s?D0(e,o,l):E0(e,o,l)}return e}var b6=Math.max;function O0(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}function G1(c){return c!=null&&O0(c.length)&&!F0(c)}var un=Object.prototype;function U0(c){var a=c&&c.constructor;return c===(typeof a=="function"&&a.prototype||un)}function x6(c){return N2(c)&&x2(c)=="[object Arguments]"}var I0=Object.prototype,Hn=I0.hasOwnProperty,zn=I0.propertyIsEnumerable,j0=x6(function(){return arguments}())?x6:function(c){return N2(c)&&Hn.call(c,"callee")&&!zn.call(c,"callee")},q0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N6=q0&&typeof module=="object"&&module&&!module.nodeType&&module,k6=N6&&N6.exports===q0?n2.Buffer:void 0,W0=(k6?k6.isBuffer:void 0)||function(){return!1},I={};function s4(c){return function(a){return c(a)}}I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Arguments]"]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object Boolean]"]=I["[object DataView]"]=I["[object Date]"]=I["[object Error]"]=I["[object Function]"]=I["[object Map]"]=I["[object Number]"]=I["[object Object]"]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object WeakMap]"]=!1;var G0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,a1=G0&&typeof module=="object"&&module&&!module.nodeType&&module,M3=a1&&a1.exports===G0&&_0.process,I2=function(){try{return a1&&a1.require&&a1.require("util").types||M3&&M3.binding&&M3.binding("util")}catch{}}(),S6=I2&&I2.isTypedArray,hn=S6?s4(S6):function(c){return N2(c)&&O0(c.length)&&!!I[x2(c)]},pn=Object.prototype.hasOwnProperty;function Y0(c,a){var e=t2(c),r=!e&&j0(c),s=!e&&!r&&W0(c),n=!e&&!r&&!s&&hn(c),i=e||r||s||n,o=i?function(v,u){for(var V=-1,p=Array(v);++V<v;)p[V]=u(V);return p}(c.length,String):[],l=o.length;for(var t in c)!a&&!pn.call(c,t)||i&&(t=="length"||s&&(t=="offset"||t=="parent")||n&&(t=="buffer"||t=="byteLength"||t=="byteOffset")||fn(t,l))||o.push(t);return o}function X0(c,a){return function(e){return c(a(e))}}var Vn=X0(Object.keys,Object),dn=Object.prototype.hasOwnProperty;function K0(c){return G1(c)?Y0(c):function(a){if(!U0(a))return Vn(a);var e=[];for(var r in Object(a))dn.call(a,r)&&r!="constructor"&&e.push(r);return e}(c)}var Mn=Object.prototype.hasOwnProperty;function Cn(c){return G1(c)?Y0(c,!0):function(a){if(!M2(a))return function(n){var i=[];if(n!=null)for(var o in Object(n))i.push(o);return i}(a);var e=U0(a),r=[];for(var s in a)(s!="constructor"||!e&&Mn.call(a,s))&&r.push(s);return r}(c)}var Ln=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gn=/^\w*$/,J2=F2(Object,"create"),bn=Object.prototype.hasOwnProperty,xn=Object.prototype.hasOwnProperty;function k2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}function M1(c,a){for(var e=c.length;e--;)if(R0(c[e][0],a))return e;return-1}k2.prototype.clear=function(){this.__data__=J2?J2(null):{},this.size=0},k2.prototype.delete=function(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a},k2.prototype.get=function(c){var a=this.__data__;if(J2){var e=a[c];return e==="__lodash_hash_undefined__"?void 0:e}return bn.call(a,c)?a[c]:void 0},k2.prototype.has=function(c){var a=this.__data__;return J2?a[c]!==void 0:xn.call(a,c)},k2.prototype.set=function(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=J2&&a===void 0?"__lodash_hash_undefined__":a,this};var Nn=Array.prototype.splice;function v2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}v2.prototype.clear=function(){this.__data__=[],this.size=0},v2.prototype.delete=function(c){var a=this.__data__,e=M1(a,c);return!(e<0||(e==a.length-1?a.pop():Nn.call(a,e,1),--this.size,0))},v2.prototype.get=function(c){var a=this.__data__,e=M1(a,c);return e<0?void 0:a[e][1]},v2.prototype.has=function(c){return M1(this.__data__,c)>-1},v2.prototype.set=function(c,a){var e=this.__data__,r=M1(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this};var s1=F2(n2,"Map");function C1(c,a){var e,r,s=c.__data__;return((r=typeof(e=a))=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null)?s[typeof a=="string"?"string":"hash"]:s.map}function d2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}function n4(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError("Expected a function");var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(n4.Cache||d2),e}d2.prototype.clear=function(){this.size=0,this.__data__={hash:new k2,map:new(s1||v2),string:new k2}},d2.prototype.delete=function(c){var a=C1(this,c).delete(c);return this.size-=a?1:0,a},d2.prototype.get=function(c){return C1(this,c).get(c)},d2.prototype.has=function(c){return C1(this,c).has(c)},d2.prototype.set=function(c,a){var e=C1(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this},n4.Cache=d2;var C3,L3,kn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sn=/\\(\\)?/g,yn=(C3=n4(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(kn,function(e,r,s,n){a.push(s?n.replace(Sn,"$1"):r||e)}),a},function(c){return L3.size===500&&L3.clear(),c}),L3=C3.cache,C3);function B3(c,a){return t2(c)?c:function(e,r){if(t2(e))return!1;var s=typeof e;return!(s!="number"&&s!="symbol"&&s!="boolean"&&e!=null&&!W1(e))||gn.test(e)||!Ln.test(e)||r!=null&&e in Object(r)}(c,a)?[c]:yn(function(e){return e==null?"":T0(e)}(c))}function y6(c){if(typeof c=="string"||W1(c))return c;var a=c+"";return a=="0"&&1/c==-1/0?"-0":a}function i4(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var w6=l2?l2.isConcatSpreadable:void 0;function wn(c){return t2(c)||j0(c)||!!(w6&&c&&c[w6])}function An(c){return c!=null&&c.length?function(a,e,r,s,n){var i=-1,o=a.length;for(r||(r=wn),n||(n=[]);++i<o;){var l=a[i];r(l)?i4(n,l):n[n.length]=l}return n}(c):[]}var Q0=X0(Object.getPrototypeOf,Object),_n=Function.prototype,Pn=Object.prototype,Z0=_n.toString,Tn=Pn.hasOwnProperty,Bn=Z0.call(Object);function $2(c){var a=this.__data__=new v2(c);this.size=a.size}$2.prototype.clear=function(){this.__data__=new v2,this.size=0},$2.prototype.delete=function(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e},$2.prototype.get=function(c){return this.__data__.get(c)},$2.prototype.has=function(c){return this.__data__.has(c)},$2.prototype.set=function(c,a){var e=this.__data__;if(e instanceof v2){var r=e.__data__;if(!s1||r.length<199)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new d2(r)}return e.set(c,a),this.size=e.size,this};var J0=typeof exports=="object"&&exports&&!exports.nodeType&&exports,A6=J0&&typeof module=="object"&&module&&!module.nodeType&&module,_6=A6&&A6.exports===J0?n2.Buffer:void 0;_6&&_6.allocUnsafe;function c8(){return[]}var Fn=Object.prototype.propertyIsEnumerable,P6=Object.getOwnPropertySymbols,$n=P6?function(c){return c==null?[]:(c=Object(c),function(a){for(var e=-1,r=a==null?0:a.length,s=0,n=[];++e<r;){var i=a[e];o=i,Fn.call(c,o)&&(n[s++]=i)}var o;return n}(P6(c)))}:c8,Dn=Object.getOwnPropertySymbols?function(c){for(var a=[];c;)i4(a,$n(c)),c=Q0(c);return a}:c8;function Rn(c,a,e){var r=a(c);return t2(c)?r:i4(r,e(c))}function a8(c){return Rn(c,Cn,Dn)}var F3=F2(n2,"DataView"),$3=F2(n2,"Promise"),D3=F2(n2,"Set"),T6="[object Map]",B6="[object Promise]",F6="[object Set]",$6="[object WeakMap]",D6="[object DataView]",En=B2(F3),On=B2(s1),Un=B2($3),In=B2(D3),jn=B2(T3),f2=x2;(F3&&f2(new F3(new ArrayBuffer(1)))!=D6||s1&&f2(new s1)!=T6||$3&&f2($3.resolve())!=B6||D3&&f2(new D3)!=F6||T3&&f2(new T3)!=$6)&&(f2=function(c){var a=x2(c),e=a=="[object Object]"?c.constructor:void 0,r=e?B2(e):"";if(r)switch(r){case En:return D6;case On:return T6;case Un:return B6;case In:return F6;case jn:return $6}return a});var qn=Object.prototype.hasOwnProperty,R6=n2.Uint8Array;function g3(c){var a=new c.constructor(c.byteLength);return new R6(a).set(new R6(c)),a}var Wn=/\w*$/,E6=l2?l2.prototype:void 0,O6=E6?E6.valueOf:void 0,U6=I2&&I2.isMap,Gn=U6?s4(U6):function(c){return N2(c)&&f2(c)=="[object Map]"},I6=I2&&I2.isSet,Yn=I6?s4(I6):function(c){return N2(c)&&f2(c)=="[object Set]"},e8="[object Arguments]",r8="[object Function]",s8="[object Object]",E={};function P1(c,a,e,r,s,n){var i,o=1&a;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!M2(c))return c;var l=t2(c);if(l)i=function(p){var S=p.length,_=new p.constructor(S);return S&&typeof p[0]=="string"&&qn.call(p,"index")&&(_.index=p.index,_.input=p.input),_}(c);else{var t=f2(c),v=t==r8||t=="[object GeneratorFunction]";if(W0(c))return function(p,S){return p.slice()}(c);if(t==s8||t==e8||v&&!s)i={};else{if(!E[t])return s?c:{};i=function(p,S,_){var M,C,L,P=p.constructor;switch(S){case"[object ArrayBuffer]":return g3(p);case"[object Boolean]":case"[object Date]":return new P(+p);case"[object DataView]":return function(T,R){var Y=g3(T.buffer);return new T.constructor(Y,T.byteOffset,T.byteLength)}(p);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(T,R){var Y=g3(T.buffer);return new T.constructor(Y,T.byteOffset,T.length)}(p);case"[object Map]":case"[object Set]":return new P;case"[object Number]":case"[object String]":return new P(p);case"[object RegExp]":return(L=new(C=p).constructor(C.source,Wn.exec(C))).lastIndex=C.lastIndex,L;case"[object Symbol]":return M=p,O6?Object(O6.call(M)):{}}}(c,t)}}n||(n=new $2);var u=n.get(c);if(u)return u;n.set(c,i),Yn(c)?c.forEach(function(p){i.add(P1(p,a,e,p,c,n))}):Gn(c)&&c.forEach(function(p,S){i.set(S,P1(p,a,e,S,c,n))});var V=l?void 0:a8(c);return $0(V||c,function(p,S){V&&(p=c[S=p]),E0(i,S,P1(p,a,e,S,c,n))}),i}E[e8]=E["[object Array]"]=E["[object ArrayBuffer]"]=E["[object DataView]"]=E["[object Boolean]"]=E["[object Date]"]=E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Map]"]=E["[object Number]"]=E[s8]=E["[object RegExp]"]=E["[object Set]"]=E["[object String]"]=E["[object Symbol]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E["[object Error]"]=E[r8]=E["[object WeakMap]"]=!1;var j6,Xn=(j6=function(c,a){return c&&function(e,r,s){for(var n=-1,i=Object(e),o=s(e),l=o.length;l--;){var t=o[++n];if(r(i[t],t,i)===!1)break}return e}(c,a,K0)},function(c,a){if(c==null)return c;if(!G1(c))return j6(c,a);for(var e=c.length,r=-1,s=Object(c);++r<e&&a(s[r],r,s)!==!1;);return c}),b3=function(){return n2.Date.now()},Kn=Math.max,Qn=Math.min;function n8(c,a){var e;return(t2(c)?$0:Xn)(c,typeof(e=a)=="function"?e:B0)}function Zn(c){return typeof c=="string"||!t2(c)&&N2(c)&&x2(c)=="[object String]"}var Jn=Math.max;function ci(c,a,e,r){var s;c=G1(c)?c:(s=c)==null?[]:function(i,o){return r4(o,function(l){return i[l]})}(s,K0(s)),e=e&&!r?function(i){var o=function(t){return t?(t=P3(t))===Ks||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:t===0?t:0}(i),l=o%1;return o==o?l?o-l:o:0}(e):0;var n=c.length;return e<0&&(e=Jn(n+e,0)),Zn(c)?e<=n&&c.indexOf(a,e)>-1:!!n&&function(i,o,l){return o==o?function(t,v,u){for(var V=u-1,p=t.length;++V<p;)if(t[V]===v)return V;return-1}(i,o,l):function(t,v,u){for(var V=t.length,p=u+-1;++p<V;)if(v(t[p],p,t))return p;return-1}(i,ln,l)}(c,a,e)>-1}function ai(c,a){return(c=function(s,n){return n.length<2?s:function(i,o){for(var l=0,t=(o=B3(o,i)).length;i!=null&&l<t;)i=i[y6(o[l++])];return l&&l==t?i:void 0}(s,function(i,o,l){var t=-1,v=i.length;o<0&&(o=-o>v?0:v+o),(l=l>v?v:l)<0&&(l+=v),v=o>l?0:l-o>>>0,o>>>=0;for(var u=Array(v);++t<v;)u[t]=i[t+o];return u}(n,0,-1))}(c,a=B3(a,c)))==null||delete c[y6((e=a,r=e==null?0:e.length,r?e[r-1]:void 0))];var e,r}function ei(c){return function(a){if(!N2(a)||x2(a)!="[object Object]")return!1;var e=Q0(a);if(e===null)return!0;var r=Tn.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&Z0.call(r)==Bn}(c)?void 0:c}var ri=function(c){return on(function(a,e,r){return e=b6(e===void 0?a.length-1:e,0),function(){for(var s=arguments,n=-1,i=b6(s.length-e,0),o=Array(i);++n<i;)o[n]=s[e+n];n=-1;for(var l=Array(e+1);++n<e;)l[n]=s[n];return l[e]=r(o),function(t,v,u){switch(u.length){case 0:return t.call(v);case 1:return t.call(v,u[0]);case 2:return t.call(v,u[0],u[1]);case 3:return t.call(v,u[0],u[1],u[2])}return t.apply(v,u)}(a,this,l)}}(c,void 0,An),c+"")}(function(c,a){var e={};if(c==null)return e;var r=!1;a=r4(a,function(n){return n=B3(n,c),r||(r=n.length>1),n}),mn(c,a8(c),e),r&&(e=P1(e,7,ei));for(var s=a.length;s--;)ai(e,a[s]);return e});function si(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError("Expected a function");return M2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),function(n,i,o){var l,t,v,u,V,p,S=0,_=!1,M=!1,C=!0;if(typeof n!="function")throw new TypeError("Expected a function");function L(U){var a2=l,Q=t;return l=t=void 0,S=U,u=n.apply(Q,a2)}function P(U){var a2=U-p;return p===void 0||a2>=i||a2<0||M&&U-S>=v}function T(){var U=b3();if(P(U))return R(U);V=setTimeout(T,function(a2){var Q=i-(a2-p);return M?Qn(Q,v-(a2-S)):Q}(U))}function R(U){return V=void 0,C&&l?L(U):(l=t=void 0,u)}function Y(){var U=b3(),a2=P(U);if(l=arguments,t=this,p=U,a2){if(V===void 0)return function(Q){return S=Q,V=setTimeout(T,i),_?L(Q):u}(p);if(M)return clearTimeout(V),V=setTimeout(T,i),L(p)}return V===void 0&&(V=setTimeout(T,i)),u}return i=P3(i)||0,M2(o)&&(_=!!o.leading,v=(M="maxWait"in o)?Kn(P3(o.maxWait)||0,i):v,C="trailing"in o?!!o.trailing:C),Y.cancel=function(){V!==void 0&&clearTimeout(V),S=0,l=p=t=V=void 0},Y.flush=function(){return V===void 0?u:R(b3())},Y}(c,a,{leading:r,maxWait:a,trailing:s})}function ni(c){return a=>n8(c,e=>a.use(e))}const X2=c=>(c.install=a=>{const e=c.name;a.component(e,c)},c);const K2=(c,a)=>{const e=c.__vccOpts||c;for(const[r,s]of a)e[r]=s;return e};function q6(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function g(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?q6(Object(e),!0).forEach(function(r){G(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):q6(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function D1(c){"@babel/helpers - typeof";return D1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},D1(c)}function ii(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function oi(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function li(c,a,e){return a&&oi(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function G(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function o4(c,a){return fi(c)||mi(c,a)||i8(c,a)||Hi()}function v1(c){return ti(c)||vi(c)||i8(c)||ui()}function ti(c){if(Array.isArray(c))return R3(c)}function fi(c){if(Array.isArray(c))return c}function vi(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function mi(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,o;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,o=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw o}}return r}}function i8(c,a){if(c){if(typeof c=="string")return R3(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return R3(c,a)}}function R3(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function ui(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var W6=function(){},l4={},o8={},l8=null,t8={mark:W6,measure:W6};try{typeof window<"u"&&(l4=window),typeof document<"u"&&(o8=document),typeof MutationObserver<"u"&&(l8=MutationObserver),typeof performance<"u"&&(t8=performance)}catch{}var zi=l4.navigator||{},G6=zi.userAgent,Y6=G6===void 0?"":G6,C2=l4,q=o8,X6=l8,L1=t8;C2.document;var h2=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",f8=~Y6.indexOf("MSIE")||~Y6.indexOf("Trident/"),g1,b1,x1,N1,k1,u2="___FONT_AWESOME___",E3=16,v8="fa",m8="svg-inline--fa",_2="data-fa-i2svg",O3="data-fa-pseudo-element",hi="data-fa-pseudo-element-pending",t4="data-prefix",f4="data-icon",K6="fontawesome-i2svg",pi="async",Vi=["HTML","HEAD","STYLE","SCRIPT"],u8=function(){try{return!0}catch{return!1}}(),j="classic",W="sharp",v4=[j,W];function m1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[j]}})}var n1=m1((g1={},G(g1,j,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),G(g1,W,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),g1)),i1=m1((b1={},G(b1,j,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),G(b1,W,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),b1)),o1=m1((x1={},G(x1,j,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),G(x1,W,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),x1)),di=m1((N1={},G(N1,j,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),G(N1,W,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),N1)),Mi=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,H8="fa-layers-text",Ci=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Li=m1((k1={},G(k1,j,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),G(k1,W,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),k1)),z8=[1,2,3,4,5,6,7,8,9,10],gi=z8.concat([11,12,13,14,15,16,17,18,19,20]),bi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],S2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l1=new Set;Object.keys(i1[j]).map(l1.add.bind(l1));Object.keys(i1[W]).map(l1.add.bind(l1));var xi=[].concat(v4,v1(l1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",S2.GROUP,S2.SWAP_OPACITY,S2.PRIMARY,S2.SECONDARY]).concat(z8.map(function(c){return"".concat(c,"x")})).concat(gi.map(function(c){return"w-".concat(c)})),e1=C2.FontAwesomeConfig||{};function Ni(c){var a=q.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function ki(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(q&&typeof q.querySelector=="function"){var Si=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Si.forEach(function(c){var a=o4(c,2),e=a[0],r=a[1],s=ki(Ni(e));s!=null&&(e1[r]=s)})}var h8={styleDefault:"solid",familyDefault:"classic",cssPrefix:v8,replacementClass:m8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};e1.familyPrefix&&(e1.cssPrefix=e1.familyPrefix);var j2=g(g({},h8),e1);j2.autoReplaceSvg||(j2.observeMutations=!1);var y={};Object.keys(h8).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(e){j2[c]=e,r1.forEach(function(r){return r(y)})},get:function(){return j2[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){j2.cssPrefix=a,r1.forEach(function(e){return e(y)})},get:function(){return j2.cssPrefix}});C2.FontAwesomeConfig=y;var r1=[];function yi(c){return r1.push(c),function(){r1.splice(r1.indexOf(c),1)}}var V2=E3,i2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wi(c){if(!(!c||!h2)){var a=q.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=q.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return q.head.insertBefore(a,r),c}}var Ai="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function t1(){for(var c=12,a="";c-- >0;)a+=Ai[Math.random()*62|0];return a}function Q2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function m4(c){return c.classList?Q2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function p8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _i(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(p8(c[e]),'" ')},"").trim()}function Y1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function u4(c){return c.size!==i2.size||c.x!==i2.x||c.y!==i2.y||c.rotate!==i2.rotate||c.flipX||c.flipY}function Pi(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(o)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:t}}function Ti(c){var a=c.transform,e=c.width,r=e===void 0?E3:e,s=c.height,n=s===void 0?E3:s,i=c.startCentered,o=i===void 0?!1:i,l="";return o&&f8?l+="translate(".concat(a.x/V2-r/2,"em, ").concat(a.y/V2-n/2,"em) "):o?l+="translate(calc(-50% + ".concat(a.x/V2,"em), calc(-50% + ").concat(a.y/V2,"em)) "):l+="translate(".concat(a.x/V2,"em, ").concat(a.y/V2,"em) "),l+="scale(".concat(a.size/V2*(a.flipX?-1:1),", ").concat(a.size/V2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Bi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function V8(){var c=v8,a=m8,e=y.cssPrefix,r=y.replacementClass,s=Bi;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(o,".".concat(r))}return s}var Q6=!1;function x3(){y.autoAddCss&&!Q6&&(wi(V8()),Q6=!0)}var Fi={mixout:function(){return{dom:{css:V8,insertCss:x3}}},hooks:function(){return{beforeDOMElementCreation:function(){x3()},beforeI2svg:function(){x3()}}}},H2=C2||{};H2[u2]||(H2[u2]={});H2[u2].styles||(H2[u2].styles={});H2[u2].hooks||(H2[u2].hooks={});H2[u2].shims||(H2[u2].shims=[]);var r2=H2[u2],d8=[],$i=function c(){q.removeEventListener("DOMContentLoaded",c),R1=1,d8.map(function(a){return a()})},R1=!1;h2&&(R1=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),R1||q.addEventListener("DOMContentLoaded",$i));function Di(c){h2&&(R1?setTimeout(c,0):d8.push(c))}function u1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?p8(c):"<".concat(a," ").concat(_i(r),">").concat(n.map(u1).join(""),"</").concat(a,">")}function Z6(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var N3=function(a,e,r,s){var n=Object.keys(a),i=n.length,o=e,l,t,v;for(r===void 0?(l=1,v=a[n[0]]):(l=0,v=r);l<i;l++)t=n[l],v=o(v,a[t],t,a);return v};function Ri(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function U3(c){var a=Ri(c);return a.length===1?a[0].toString(16):null}function Ei(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function J6(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function I3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=J6(a);typeof r2.hooks.addPack=="function"&&!s?r2.hooks.addPack(c,J6(a)):r2.styles[c]=g(g({},r2.styles[c]||{}),n),c==="fas"&&I3("fa",a)}var S1,y1,w1,D2=r2.styles,Oi=r2.shims,Ui=(S1={},G(S1,j,Object.values(o1[j])),G(S1,W,Object.values(o1[W])),S1),H4=null,M8={},C8={},L8={},g8={},b8={},Ii=(y1={},G(y1,j,Object.keys(n1[j])),G(y1,W,Object.keys(n1[W])),y1);function ji(c){return~xi.indexOf(c)}function qi(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!ji(s)?s:null}var x8=function(){var a=function(n){return N3(D2,function(i,o,l){return i[l]=N3(o,n,{}),i},{})};M8=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var o=n[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){s[l.toString(16)]=i})}return s}),C8=a(function(s,n,i){if(s[i]=i,n[2]){var o=n[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){s[l]=i})}return s}),b8=a(function(s,n,i){var o=n[2];return s[i]=i,o.forEach(function(l){s[l]=i}),s});var e="far"in D2||y.autoFetchSvg,r=N3(Oi,function(s,n){var i=n[0],o=n[1],l=n[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(s.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:o,iconName:l}),s},{names:{},unicodes:{}});L8=r.names,g8=r.unicodes,H4=X1(y.styleDefault,{family:y.familyDefault})};yi(function(c){H4=X1(c.styleDefault,{family:y.familyDefault})});x8();function z4(c,a){return(M8[c]||{})[a]}function Wi(c,a){return(C8[c]||{})[a]}function y2(c,a){return(b8[c]||{})[a]}function N8(c){return L8[c]||{prefix:null,iconName:null}}function Gi(c){var a=g8[c],e=z4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function L2(){return H4}var h4=function(){return{prefix:null,iconName:null,rest:[]}};function X1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?j:e,s=n1[r][c],n=i1[r][c]||i1[r][s],i=c in r2.styles?c:null;return n||i||null}var c0=(w1={},G(w1,j,Object.keys(o1[j])),G(w1,W,Object.keys(o1[W])),w1);function K1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},G(a,j,"".concat(y.cssPrefix,"-").concat(j)),G(a,W,"".concat(y.cssPrefix,"-").concat(W)),a),i=null,o=j;(c.includes(n[j])||c.some(function(t){return c0[j].includes(t)}))&&(o=j),(c.includes(n[W])||c.some(function(t){return c0[W].includes(t)}))&&(o=W);var l=c.reduce(function(t,v){var u=qi(y.cssPrefix,v);if(D2[v]?(v=Ui[o].includes(v)?di[o][v]:v,i=v,t.prefix=v):Ii[o].indexOf(v)>-1?(i=v,t.prefix=X1(v,{family:o})):u?t.iconName=u:v!==y.replacementClass&&v!==n[j]&&v!==n[W]&&t.rest.push(v),!s&&t.prefix&&t.iconName){var V=i==="fa"?N8(t.iconName):{},p=y2(t.prefix,t.iconName);V.prefix&&(i=null),t.iconName=V.iconName||p||t.iconName,t.prefix=V.prefix||t.prefix,t.prefix==="far"&&!D2.far&&D2.fas&&!y.autoFetchSvg&&(t.prefix="fas")}return t},h4());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===W&&(D2.fass||y.autoFetchSvg)&&(l.prefix="fass",l.iconName=y2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=L2()||"fas"),l}var Yi=function(){function c(){ii(this,c),this.definitions={}}return li(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=g(g({},e.definitions[o]||{}),i[o]),I3(o,i[o]);var l=o1[j][o];l&&I3(l,i[o]),x8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],o=i.prefix,l=i.iconName,t=i.icon,v=t[2];e[o]||(e[o]={}),v.length>0&&v.forEach(function(u){typeof u=="string"&&(e[o][u]=t)}),e[o][l]=t}),e}}]),c}(),a0=[],R2={},O2={},Xi=Object.keys(O2);function Ki(c,a){var e=a.mixoutsTo;return a0=c,R2={},Object.keys(O2).forEach(function(r){Xi.indexOf(r)===-1&&delete O2[r]}),a0.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),D1(s[i])==="object"&&Object.keys(s[i]).forEach(function(o){e[i]||(e[i]={}),e[i][o]=s[i][o]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){R2[i]||(R2[i]=[]),R2[i].push(n[i])})}r.provides&&r.provides(O2)}),e}function j3(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=R2[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function P2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=R2[c]||[];s.forEach(function(n){n.apply(null,e)})}function z2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return O2[c]?O2[c].apply(null,a):void 0}function q3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||L2();if(a)return a=y2(e,a)||a,Z6(k8.definitions,e,a)||Z6(r2.styles,e,a)}var k8=new Yi,Qi=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,P2("noAuto")},Zi={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h2?(P2("beforeI2svg",a),z2("pseudoElements2svg",a),z2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Di(function(){co({autoReplaceSvgRoot:e}),P2("watch",a)})}},Ji={icon:function(a){if(a===null)return null;if(D1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:y2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=X1(a[0]);return{prefix:r,iconName:y2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(Mi))){var s=K1(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||L2(),iconName:y2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=L2();return{prefix:n,iconName:y2(n,a)||a}}}},e2={noAuto:Qi,config:y,dom:Zi,parse:Ji,library:k8,findIconDefinition:q3,toHtml:u1},co=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?q:e;(Object.keys(r2.styles).length>0||y.autoFetchSvg)&&h2&&y.autoReplaceSvg&&e2.dom.i2svg({node:r})};function Q1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return u1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(h2){var r=q.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function ao(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(u4(i)&&e.found&&!r.found){var o=e.width,l=e.height,t={x:o/l/2,y:.5};s.style=Y1(g(g({},n),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function eo(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},s),{},{id:i}),children:r}]}]}function p4(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,o=c.symbol,l=c.title,t=c.maskId,v=c.titleId,u=c.extra,V=c.watchable,p=V===void 0?!1:V,S=r.found?r:e,_=S.width,M=S.height,C=s==="fak",L=[y.replacementClass,n?"".concat(y.cssPrefix,"-").concat(n):""].filter(function(Q){return u.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(u.classes).join(" "),P={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:L,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(M)})},T=C&&!~u.classes.indexOf("fa-fw")?{width:"".concat(_/M*16*.0625,"em")}:{};p&&(P.attributes[_2]=""),l&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(v||t1())},children:[l]}),delete P.attributes.title);var R=g(g({},P),{},{prefix:s,iconName:n,main:e,mask:r,maskId:t,transform:i,symbol:o,styles:g(g({},T),u.styles)}),Y=r.found&&e.found?z2("generateAbstractMask",R)||{children:[],attributes:{}}:z2("generateAbstractIcon",R)||{children:[],attributes:{}},U=Y.children,a2=Y.attributes;return R.children=U,R.attributes=a2,o?eo(R):ao(R)}function e0(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,o=c.watchable,l=o===void 0?!1:o,t=g(g(g({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(t[_2]="");var v=g({},i.styles);u4(s)&&(v.transform=Ti({transform:s,startCentered:!0,width:e,height:r}),v["-webkit-transform"]=v.transform);var u=Y1(v);u.length>0&&(t.style=u);var V=[];return V.push({tag:"span",attributes:t,children:[a]}),n&&V.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),V}function ro(c){var a=c.content,e=c.title,r=c.extra,s=g(g(g({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=Y1(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var k3=r2.styles;function W3(c){var a=c[0],e=c[1],r=c.slice(4),s=o4(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(S2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(S2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(S2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var so={found:!1,width:512,height:512};function no(c,a){!u8&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function G3(c,a){var e=a;return a==="fa"&&y.styleDefault!==null&&(a=L2()),new Promise(function(r,s){if(z2("missingIconAbstract"),e==="fa"){var n=N8(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&k3[a]&&k3[a][c]){var i=k3[a][c];return r(W3(i))}no(c,a),r(g(g({},so),{},{icon:y.showMissingIcons&&c?z2("missingIconAbstract")||{}:{}}))})}var r0=function(){},Y3=y.measurePerformance&&L1&&L1.mark&&L1.measure?L1:{mark:r0,measure:r0},c1='FA "6.5.2"',io=function(a){return Y3.mark("".concat(c1," ").concat(a," begins")),function(){return S8(a)}},S8=function(a){Y3.mark("".concat(c1," ").concat(a," ends")),Y3.measure("".concat(c1," ").concat(a),"".concat(c1," ").concat(a," begins"),"".concat(c1," ").concat(a," ends"))},V4={begin:io,end:S8},T1=function(){};function s0(c){var a=c.getAttribute?c.getAttribute(_2):null;return typeof a=="string"}function oo(c){var a=c.getAttribute?c.getAttribute(t4):null,e=c.getAttribute?c.getAttribute(f4):null;return a&&e}function lo(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function to(){if(y.autoReplaceSvg===!0)return B1.replace;var c=B1[y.autoReplaceSvg];return c||B1.replace}function fo(c){return q.createElementNS("http://www.w3.org/2000/svg",c)}function vo(c){return q.createElement(c)}function y8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?fo:vo:e;if(typeof c=="string")return q.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(y8(i,{ceFn:r}))}),s}function mo(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var B1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(y8(s),e)}),e.getAttribute(_2)===null&&y.keepOriginalSource){var r=q.createComment(mo(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~m4(e).indexOf(y.replacementClass))return B1.replace(a);var s=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(o,l){return l===y.replacementClass||l.match(s)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(o){return u1(o)}).join(`
`);e.setAttribute(_2,""),e.innerHTML=i}};function n0(c){c()}function w8(c,a){var e=typeof a=="function"?a:T1;if(c.length===0)e();else{var r=n0;y.mutateApproach===pi&&(r=C2.requestAnimationFrame||n0),r(function(){var s=to(),n=V4.begin("mutate");c.map(s),n(),e()})}}var d4=!1;function A8(){d4=!0}function X3(){d4=!1}var E1=null;function i0(c){if(X6&&y.observeMutations){var a=c.treeCallback,e=a===void 0?T1:a,r=c.nodeCallback,s=r===void 0?T1:r,n=c.pseudoElementsCallback,i=n===void 0?T1:n,o=c.observeMutationsRoot,l=o===void 0?q:o;E1=new X6(function(t){if(!d4){var v=L2();Q2(t).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!s0(u.addedNodes[0])&&(y.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&y.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&s0(u.target)&&~bi.indexOf(u.attributeName))if(u.attributeName==="class"&&oo(u.target)){var V=K1(m4(u.target)),p=V.prefix,S=V.iconName;u.target.setAttribute(t4,p||v),S&&u.target.setAttribute(f4,S)}else lo(u.target)&&s(u.target)})}}),h2&&E1.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uo(){E1&&E1.disconnect()}function Ho(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),e}function zo(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=K1(m4(c));return s.prefix||(s.prefix=L2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Wi(s.prefix,c.innerText)||z4(s.prefix,U3(c.innerText))),!s.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function ho(c){var a=Q2(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return y.autoA11y&&(e?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(r||t1()):(a["aria-hidden"]="true",a.focusable="false")),a}function po(){return{iconName:null,title:null,titleId:null,prefix:null,transform:i2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function o0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=zo(c),r=e.iconName,s=e.prefix,n=e.rest,i=ho(c),o=j3("parseNodeAttributes",{},c),l=a.styleParser?Ho(c):[];return g({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:i2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},o)}var Vo=r2.styles;function _8(c){var a=y.autoReplaceSvg==="nest"?o0(c,{styleParser:!1}):o0(c);return~a.extra.classes.indexOf(H8)?z2("generateLayersText",c,a):z2("generateSvgReplacementMutation",c,a)}var g2=new Set;v4.map(function(c){g2.add("fa-".concat(c))});Object.keys(n1[j]).map(g2.add.bind(g2));Object.keys(n1[W]).map(g2.add.bind(g2));g2=v1(g2);function l0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h2)return Promise.resolve();var e=q.documentElement.classList,r=function(u){return e.add("".concat(K6,"-").concat(u))},s=function(u){return e.remove("".concat(K6,"-").concat(u))},n=y.autoFetchSvg?g2:v4.map(function(v){return"fa-".concat(v)}).concat(Object.keys(Vo));n.includes("fa")||n.push("fa");var i=[".".concat(H8,":not([").concat(_2,"])")].concat(n.map(function(v){return".".concat(v,":not([").concat(_2,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=Q2(c.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),s("complete");else return Promise.resolve();var l=V4.begin("onTree"),t=o.reduce(function(v,u){try{var V=_8(u);V&&v.push(V)}catch(p){u8||p.name==="MissingIcon"&&console.error(p)}return v},[]);return new Promise(function(v,u){Promise.all(t).then(function(V){w8(V,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),v()})}).catch(function(V){l(),u(V)})})}function Mo(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_8(c).then(function(e){e&&w8([e],a)})}function Co(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:q3(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:q3(s||{})),c(r,g(g({},e),{},{mask:s}))}}var Lo=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?i2:r,n=e.symbol,i=n===void 0?!1:n,o=e.mask,l=o===void 0?null:o,t=e.maskId,v=t===void 0?null:t,u=e.title,V=u===void 0?null:u,p=e.titleId,S=p===void 0?null:p,_=e.classes,M=_===void 0?[]:_,C=e.attributes,L=C===void 0?{}:C,P=e.styles,T=P===void 0?{}:P;if(a){var R=a.prefix,Y=a.iconName,U=a.icon;return Q1(g({type:"icon"},a),function(){return P2("beforeDOMElementCreation",{iconDefinition:a,params:e}),y.autoA11y&&(V?L["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(S||t1()):(L["aria-hidden"]="true",L.focusable="false")),p4({icons:{main:W3(U),mask:l?W3(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:Y,transform:g(g({},i2),s),symbol:i,title:V,maskId:v,titleId:S,extra:{attributes:L,styles:T,classes:M}})})}},go={mixout:function(){return{icon:Co(Lo)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=l0,e.nodeCallback=Mo,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?q:r,n=e.callback,i=n===void 0?function(){}:n;return l0(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,o=r.prefix,l=r.transform,t=r.symbol,v=r.mask,u=r.maskId,V=r.extra;return new Promise(function(p,S){Promise.all([G3(s,o),v.iconName?G3(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var M=o4(_,2),C=M[0],L=M[1];p([e,p4({icons:{main:C,mask:L},prefix:o,iconName:s,transform:l,symbol:t,maskId:u,title:n,titleId:i,extra:V,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,o=e.styles,l=Y1(o);l.length>0&&(s.style=l);var t;return u4(i)&&(t=z2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(t||n.icon),{children:r,attributes:s}}}},bo={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return Q1({type:"layer"},function(){P2("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(v1(n)).join(" ")},children:i}]})}}}},xo={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,o=i===void 0?[]:i,l=r.attributes,t=l===void 0?{}:l,v=r.styles,u=v===void 0?{}:v;return Q1({type:"counter",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:r}),ro({content:e.toString(),title:n,extra:{attributes:t,styles:u,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(v1(o))}})})}}}},No={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?i2:s,i=r.title,o=i===void 0?null:i,l=r.classes,t=l===void 0?[]:l,v=r.attributes,u=v===void 0?{}:v,V=r.styles,p=V===void 0?{}:V;return Q1({type:"text",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:r}),e0({content:e,transform:g(g({},i2),n),title:o,extra:{attributes:u,styles:p,classes:["".concat(y.cssPrefix,"-layers-text")].concat(v1(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,o=null,l=null;if(f8){var t=parseInt(getComputedStyle(e).fontSize,10),v=e.getBoundingClientRect();o=v.width/t,l=v.height/t}return y.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,e0({content:e.innerHTML,width:o,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},ko=new RegExp('"',"ug"),t0=[1105920,1112319];function So(c){var a=c.replace(ko,""),e=Ei(a,0),r=e>=t0[0]&&e<=t0[1],s=a.length===2?a[0]===a[1]:!1;return{value:U3(s?a[0]:a),isSecondary:r||s}}function f0(c,a){var e="".concat(hi).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=Q2(c.children),i=n.filter(function(U){return U.getAttribute(O3)===a})[0],o=C2.getComputedStyle(c,a),l=o.getPropertyValue("font-family").match(Ci),t=o.getPropertyValue("font-weight"),v=o.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&v!=="none"&&v!==""){var u=o.getPropertyValue("content"),V=~["Sharp"].indexOf(l[2])?W:j,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?i1[V][l[2].toLowerCase()]:Li[V][t],S=So(u),_=S.value,M=S.isSecondary,C=l[0].startsWith("FontAwesome"),L=z4(p,_),P=L;if(C){var T=Gi(_);T.iconName&&T.prefix&&(L=T.iconName,p=T.prefix)}if(L&&!M&&(!i||i.getAttribute(t4)!==p||i.getAttribute(f4)!==P)){c.setAttribute(e,P),i&&c.removeChild(i);var R=po(),Y=R.extra;Y.attributes[O3]=a,G3(L,p).then(function(U){var a2=p4(g(g({},R),{},{icons:{main:U,mask:h4()},prefix:p,iconName:P,extra:Y,watchable:!0})),Q=q.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(Q,c.firstChild):c.appendChild(Q),Q.outerHTML=a2.map(function(gs){return u1(gs)}).join(`