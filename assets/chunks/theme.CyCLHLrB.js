import{d as k,c as y,w as r2,h as ct,o as v,a as z,b as P,n as at,g as et,u,m as k2,_ as B,e as p6,i as y1,r as R,f as $,j as L,k as H,l as H1,p as S,F as q,q as D,s as J2,t as q3,v as rt,x as S4,y as i1,z as d,A as A5,B as _5,C as $1,T as t1,D as s2,E as I,G as P5,H as st,I as nt,J as B2,K as c3,L as c2,M as a2,N as it,O as tt,P as ot,Q as h6,R as N1,S as a1,U as W4,V as T5,W as lt,X as ft,Y as o1,Z as n2,$ as B5,a0 as Y3,a1 as $5,a2 as X3,a3 as vt,a4 as mt,a5 as ut,a6 as pt,a7 as F5,a8 as ht,a9 as R5,aa as Ht,ab as zt}from"./framework.BZdLSpNF.js";var D5=typeof global=="object"&&global&&global.Object===Object&&global,dt=typeof self=="object"&&self&&self.Object===Object&&self,i2=D5||dt||Function("return this")(),g2=i2.Symbol,E5=Object.prototype,Vt=E5.hasOwnProperty,Mt=E5.toString,_1=g2?g2.toStringTag:void 0;function Ct(c){var a=Vt.call(c,_1),e=c[_1];try{c[_1]=void 0;var r=!0}catch{}var s=Mt.call(c);return r&&(a?c[_1]=e:delete c[_1]),s}var Lt=Object.prototype,gt=Lt.toString;function bt(c){return gt.call(c)}var xt="[object Null]",yt="[object Undefined]",i8=g2?g2.toStringTag:void 0;function G2(c){return c==null?c===void 0?yt:xt:i8&&i8 in Object(c)?Ct(c):bt(c)}function y2(c){return c!=null&&typeof c=="object"}var Nt="[object Symbol]";function K3(c){return typeof c=="symbol"||y2(c)&&G2(c)==Nt}function H6(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var V2=Array.isArray,wt=1/0,t8=g2?g2.prototype:void 0,o8=t8?t8.toString:void 0;function O5(c){if(typeof c=="string")return c;if(V2(c))return H6(c,O5)+"";if(K3(c))return o8?o8.call(c):"";var a=c+"";return a=="0"&&1/c==-wt?"-0":a}var St=/\s/;function kt(c){for(var a=c.length;a--&&St.test(c.charAt(a)););return a}var At=/^\s+/;function _t(c){return c&&c.slice(0,kt(c)+1).replace(At,"")}function b2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var l8=NaN,Pt=/^[-+]0x[0-9a-f]+$/i,Tt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,$t=parseInt;function G4(c){if(typeof c=="number")return c;if(K3(c))return l8;if(b2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=b2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=_t(c);var e=Tt.test(c);return e||Bt.test(c)?$t(c.slice(2),e?2:8):Pt.test(c)?l8:+c}var f8=1/0,Ft=17976931348623157e292;function Rt(c){if(!c)return c===0?c:0;if(c=G4(c),c===f8||c===-f8){var a=c<0?-1:1;return a*Ft}return c===c?c:0}function j4(c){var a=Rt(c),e=a%1;return a===a?e?a-e:a:0}function Q3(c){return c}var Dt="[object AsyncFunction]",Et="[object Function]",Ot="[object GeneratorFunction]",It="[object Proxy]";function S2(c){if(!b2(c))return!1;var a=G2(c);return a==Et||a==Ot||a==Dt||a==It}var k4=i2["__core-js_shared__"],v8=function(){var c=/[^.]+$/.exec(k4&&k4.keys&&k4.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function Ut(c){return!!v8&&v8 in c}var Wt=Function.prototype,Gt=Wt.toString;function l1(c){if(c!=null){try{return Gt.call(c)}catch{}try{return c+""}catch{}}return""}var jt=/[\\^$.*+?()[\]{}|]/g,qt=/^\[object .+?Constructor\]$/,Yt=Function.prototype,Xt=Object.prototype,Kt=Yt.toString,Qt=Xt.hasOwnProperty,Zt=RegExp("^"+Kt.call(Qt).replace(jt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Jt(c){if(!b2(c)||Ut(c))return!1;var a=S2(c)?Zt:qt;return a.test(l1(c))}function co(c,a){return c==null?void 0:c[a]}function f1(c,a){var e=co(c,a);return Jt(e)?e:void 0}var I1=f1(i2,"WeakMap"),$3=I1&&new I1,I5=$3?function(c,a){return $3.set(c,a),c}:Q3,m8=Object.create,Z3=function(){function c(){}return function(a){if(!b2(a))return{};if(m8)return m8(a);c.prototype=a;var e=new c;return c.prototype=void 0,e}}();function U1(c){return function(){var a=arguments;switch(a.length){case 0:return new c;case 1:return new c(a[0]);case 2:return new c(a[0],a[1]);case 3:return new c(a[0],a[1],a[2]);case 4:return new c(a[0],a[1],a[2],a[3]);case 5:return new c(a[0],a[1],a[2],a[3],a[4]);case 6:return new c(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new c(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var e=Z3(c.prototype),r=c.apply(e,a);return b2(r)?r:e}}var ao=1;function eo(c,a,e){var r=a&ao,s=U1(c);function n(){var i=this&&this!==i2&&this instanceof n?s:c;return i.apply(r?e:this,arguments)}return n}function z6(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}var ro=Math.max;function U5(c,a,e,r){for(var s=-1,n=c.length,i=e.length,t=-1,o=a.length,l=ro(n-i,0),f=Array(o+l),m=!r;++t<o;)f[t]=a[t];for(;++s<i;)(m||s<n)&&(f[e[s]]=c[s]);for(;l--;)f[t++]=c[s++];return f}var so=Math.max;function W5(c,a,e,r){for(var s=-1,n=c.length,i=-1,t=e.length,o=-1,l=a.length,f=so(n-t,0),m=Array(f+l),p=!r;++s<f;)m[s]=c[s];for(var h=s;++o<l;)m[h+o]=a[o];for(;++i<t;)(p||s<n)&&(m[h+e[i]]=c[s++]);return m}function no(c,a){for(var e=c.length,r=0;e--;)c[e]===a&&++r;return r}function d6(){}var io=4294967295;function z1(c){this.__wrapped__=c,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=io,this.__views__=[]}z1.prototype=Z3(d6.prototype);z1.prototype.constructor=z1;function to(){}var G5=$3?function(c){return $3.get(c)}:to,u8={},oo=Object.prototype,lo=oo.hasOwnProperty;function fo(c){for(var a=c.name+"",e=u8[a],r=lo.call(u8,a)?e.length:0;r--;){var s=e[r],n=s.func;if(n==null||n==c)return s.name}return a}function d1(c,a){this.__wrapped__=c,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=void 0}d1.prototype=Z3(d6.prototype);d1.prototype.constructor=d1;function V6(c,a){var e=-1,r=c.length;for(a||(a=Array(r));++e<r;)a[e]=c[e];return a}function vo(c){if(c instanceof z1)return c.clone();var a=new d1(c.__wrapped__,c.__chain__);return a.__actions__=V6(c.__actions__),a.__index__=c.__index__,a.__values__=c.__values__,a}var mo=Object.prototype,uo=mo.hasOwnProperty;function F3(c){if(y2(c)&&!V2(c)&&!(c instanceof z1)){if(c instanceof d1)return c;if(uo.call(c,"__wrapped__"))return vo(c)}return new d1(c)}F3.prototype=d6.prototype;F3.prototype.constructor=F3;function po(c){var a=fo(c),e=F3[a];if(typeof e!="function"||!(a in z1.prototype))return!1;if(c===e)return!0;var r=G5(e);return!!r&&c===r[0]}var ho=800,Ho=16,zo=Date.now;function j5(c){var a=0,e=0;return function(){var r=zo(),s=Ho-(r-e);if(e=r,s>0){if(++a>=ho)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}var q5=j5(I5),Vo=/\{\n\/\* \[wrapped with (.+)\] \*/,Mo=/,? & /;function Co(c){var a=c.match(Vo);return a?a[1].split(Mo):[]}var Lo=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;function go(c,a){var e=a.length;if(!e)return c;var r=e-1;return a[r]=(e>1?"& ":"")+a[r],a=a.join(e>2?", ":" "),c.replace(Lo,`{
/* [wrapped with `+a+`] */
`)}function bo(c){return function(){return c}}var R3=function(){try{var c=f1(Object,"defineProperty");return c({},"",{}),c}catch{}}(),xo=R3?function(c,a){return R3(c,"toString",{configurable:!0,enumerable:!1,value:bo(a),writable:!0})}:Q3,M6=j5(xo);function C6(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}function yo(c,a,e,r){for(var s=c.length,n=e+-1;++n<s;)if(a(c[n],n,c))return n;return-1}function No(c){return c!==c}function wo(c,a,e){for(var r=e-1,s=c.length;++r<s;)if(c[r]===a)return r;return-1}function Y5(c,a,e){return a===a?wo(c,a,e):yo(c,No,e)}function So(c,a){var e=c==null?0:c.length;return!!e&&Y5(c,a,0)>-1}var ko=1,Ao=2,_o=8,Po=16,To=32,Bo=64,$o=128,Fo=256,Ro=512,Do=[["ary",$o],["bind",ko],["bindKey",Ao],["curry",_o],["curryRight",Po],["flip",Ro],["partial",To],["partialRight",Bo],["rearg",Fo]];function Eo(c,a){return C6(Do,function(e){var r="_."+e[0];a&e[1]&&!So(c,r)&&c.push(r)}),c.sort()}function X5(c,a,e){var r=a+"";return M6(c,go(r,Eo(Co(r),e)))}var Oo=1,Io=2,Uo=4,Wo=8,p8=32,h8=64;function K5(c,a,e,r,s,n,i,t,o,l){var f=a&Wo,m=f?i:void 0,p=f?void 0:i,h=f?n:void 0,b=f?void 0:n;a|=f?p8:h8,a&=~(f?h8:p8),a&Uo||(a&=~(Oo|Io));var g=[c,a,s,h,m,b,p,t,o,l],V=e.apply(void 0,g);return po(c)&&q5(V,g),V.placeholder=r,X5(V,c,a)}function L6(c){var a=c;return a.placeholder}var Go=9007199254740991,jo=/^(?:0|[1-9]\d*)$/;function Q5(c,a){var e=typeof c;return a=a??Go,!!a&&(e=="number"||e!="symbol"&&jo.test(c))&&c>-1&&c%1==0&&c<a}var qo=Math.min;function Yo(c,a){for(var e=c.length,r=qo(a.length,e),s=V6(c);r--;){var n=a[r];c[r]=Q5(n,e)?s[n]:void 0}return c}var H8="__lodash_placeholder__";function W1(c,a){for(var e=-1,r=c.length,s=0,n=[];++e<r;){var i=c[e];(i===a||i===H8)&&(c[e]=H8,n[s++]=e)}return n}var Xo=1,Ko=2,Qo=8,Zo=16,Jo=128,cl=512;function g6(c,a,e,r,s,n,i,t,o,l){var f=a&Jo,m=a&Xo,p=a&Ko,h=a&(Qo|Zo),b=a&cl,g=p?void 0:U1(c);function V(){for(var M=arguments.length,C=Array(M),N=M;N--;)C[N]=arguments[N];if(h)var x=L6(V),_=no(C,x);if(r&&(C=U5(C,r,s,h)),n&&(C=W5(C,n,i,h)),M-=_,h&&M<l){var A=W1(C,x);return K5(c,a,g6,V.placeholder,e,C,A,t,o,l-M)}var F=m?e:this,O=p?F[c]:c;return M=C.length,t?C=Yo(C,t):b&&M>1&&C.reverse(),f&&o<M&&(C.length=o),this&&this!==i2&&this instanceof V&&(O=g||U1(O)),O.apply(F,C)}return V}function al(c,a,e){var r=U1(c);function s(){for(var n=arguments.length,i=Array(n),t=n,o=L6(s);t--;)i[t]=arguments[t];var l=n<3&&i[0]!==o&&i[n-1]!==o?[]:W1(i,o);if(n-=l.length,n<e)return K5(c,a,g6,s.placeholder,void 0,i,l,void 0,void 0,e-n);var f=this&&this!==i2&&this instanceof s?r:c;return z6(f,this,i)}return s}var el=1;function rl(c,a,e,r){var s=a&el,n=U1(c);function i(){for(var t=-1,o=arguments.length,l=-1,f=r.length,m=Array(f+o),p=this&&this!==i2&&this instanceof i?n:c;++l<f;)m[l]=r[l];for(;o--;)m[l++]=arguments[++t];return z6(p,s?e:this,m)}return i}var z8="__lodash_placeholder__",A4=1,sl=2,nl=4,d8=8,P1=128,V8=256,il=Math.min;function tl(c,a){var e=c[1],r=a[1],s=e|r,n=s<(A4|sl|P1),i=r==P1&&e==d8||r==P1&&e==V8&&c[7].length<=a[8]||r==(P1|V8)&&a[7].length<=a[8]&&e==d8;if(!(n||i))return c;r&A4&&(c[2]=a[2],s|=e&A4?0:nl);var t=a[3];if(t){var o=c[3];c[3]=o?U5(o,t,a[4]):t,c[4]=o?W1(c[3],z8):a[4]}return t=a[5],t&&(o=c[5],c[5]=o?W5(o,t,a[6]):t,c[6]=o?W1(c[5],z8):a[6]),t=a[7],t&&(c[7]=t),r&P1&&(c[8]=c[8]==null?a[8]:il(c[8],a[8])),c[9]==null&&(c[9]=a[9]),c[0]=a[0],c[1]=s,c}var ol="Expected a function",M8=1,ll=2,_4=8,P4=16,T4=32,C8=64,L8=Math.max;function fl(c,a,e,r,s,n,i,t){var o=a&ll;if(!o&&typeof c!="function")throw new TypeError(ol);var l=r?r.length:0;if(l||(a&=~(T4|C8),r=s=void 0),i=i===void 0?i:L8(j4(i),0),t=t===void 0?t:j4(t),l-=s?s.length:0,a&C8){var f=r,m=s;r=s=void 0}var p=o?void 0:G5(c),h=[c,a,e,r,s,f,m,n,i,t];if(p&&tl(h,p),c=h[0],a=h[1],e=h[2],r=h[3],s=h[4],t=h[9]=h[9]===void 0?o?0:c.length:L8(h[9]-l,0),!t&&a&(_4|P4)&&(a&=~(_4|P4)),!a||a==M8)var b=eo(c,a,e);else a==_4||a==P4?b=al(c,a,t):(a==T4||a==(M8|T4))&&!s.length?b=rl(c,a,e,r):b=g6.apply(void 0,h);var g=p?I5:q5;return X5(g(b,h),c,a)}function Z5(c,a,e){a=="__proto__"&&R3?R3(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function J5(c,a){return c===a||c!==c&&a!==a}var vl=Object.prototype,ml=vl.hasOwnProperty;function c7(c,a,e){var r=c[a];(!(ml.call(c,a)&&J5(r,e))||e===void 0&&!(a in c))&&Z5(c,a,e)}function a3(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var t=a[n],o=void 0;o===void 0&&(o=c[t]),s?Z5(e,t,o):c7(e,t,o)}return e}var g8=Math.max;function a7(c,a,e){return a=g8(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=g8(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var t=Array(a+1);++s<a;)t[s]=r[s];return t[a]=e(i),z6(c,this,t)}}function ul(c,a){return M6(a7(c,a,Q3),c+"")}var pl=9007199254740991;function e7(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=pl}function J3(c){return c!=null&&e7(c.length)&&!S2(c)}var hl=Object.prototype;function b6(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||hl;return c===e}function Hl(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var zl="[object Arguments]";function b8(c){return y2(c)&&G2(c)==zl}var r7=Object.prototype,dl=r7.hasOwnProperty,Vl=r7.propertyIsEnumerable,s7=b8(function(){return arguments}())?b8:function(c){return y2(c)&&dl.call(c,"callee")&&!Vl.call(c,"callee")};function Ml(){return!1}var n7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x8=n7&&typeof module=="object"&&module&&!module.nodeType&&module,Cl=x8&&x8.exports===n7,y8=Cl?i2.Buffer:void 0,Ll=y8?y8.isBuffer:void 0,i7=Ll||Ml,gl="[object Arguments]",bl="[object Array]",xl="[object Boolean]",yl="[object Date]",Nl="[object Error]",wl="[object Function]",Sl="[object Map]",kl="[object Number]",Al="[object Object]",_l="[object RegExp]",Pl="[object Set]",Tl="[object String]",Bl="[object WeakMap]",$l="[object ArrayBuffer]",Fl="[object DataView]",Rl="[object Float32Array]",Dl="[object Float64Array]",El="[object Int8Array]",Ol="[object Int16Array]",Il="[object Int32Array]",Ul="[object Uint8Array]",Wl="[object Uint8ClampedArray]",Gl="[object Uint16Array]",jl="[object Uint32Array]",Y={};Y[Rl]=Y[Dl]=Y[El]=Y[Ol]=Y[Il]=Y[Ul]=Y[Wl]=Y[Gl]=Y[jl]=!0;Y[gl]=Y[bl]=Y[$l]=Y[xl]=Y[Fl]=Y[yl]=Y[Nl]=Y[wl]=Y[Sl]=Y[kl]=Y[Al]=Y[_l]=Y[Pl]=Y[Tl]=Y[Bl]=!1;function ql(c){return y2(c)&&e7(c.length)&&!!Y[G2(c)]}function x6(c){return function(a){return c(a)}}var t7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,F1=t7&&typeof module=="object"&&module&&!module.nodeType&&module,Yl=F1&&F1.exports===t7,B4=Yl&&D5.process,V1=function(){try{var c=F1&&F1.require&&F1.require("util").types;return c||B4&&B4.binding&&B4.binding("util")}catch{}}(),N8=V1&&V1.isTypedArray,Xl=N8?x6(N8):ql,Kl=Object.prototype,Ql=Kl.hasOwnProperty;function o7(c,a){var e=V2(c),r=!e&&s7(c),s=!e&&!r&&i7(c),n=!e&&!r&&!s&&Xl(c),i=e||r||s||n,t=i?Hl(c.length,String):[],o=t.length;for(var l in c)(a||Ql.call(c,l))&&!(i&&(l=="length"||s&&(l=="offset"||l=="parent")||n&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Q5(l,o)))&&t.push(l);return t}function l7(c,a){return function(e){return c(a(e))}}var Zl=l7(Object.keys,Object),Jl=Object.prototype,cf=Jl.hasOwnProperty;function af(c){if(!b6(c))return Zl(c);var a=[];for(var e in Object(c))cf.call(c,e)&&e!="constructor"&&a.push(e);return a}function e3(c){return J3(c)?o7(c):af(c)}function ef(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var rf=Object.prototype,sf=rf.hasOwnProperty;function nf(c){if(!b2(c))return ef(c);var a=b6(c),e=[];for(var r in c)r=="constructor"&&(a||!sf.call(c,r))||e.push(r);return e}function y6(c){return J3(c)?o7(c,!0):nf(c)}var tf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,of=/^\w*$/;function lf(c,a){if(V2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||K3(c)?!0:of.test(c)||!tf.test(c)||a!=null&&c in Object(a)}var G1=f1(Object,"create");function ff(){this.__data__=G1?G1(null):{},this.size=0}function vf(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var mf="__lodash_hash_undefined__",uf=Object.prototype,pf=uf.hasOwnProperty;function hf(c){var a=this.__data__;if(G1){var e=a[c];return e===mf?void 0:e}return pf.call(a,c)?a[c]:void 0}var Hf=Object.prototype,zf=Hf.hasOwnProperty;function df(c){var a=this.__data__;return G1?a[c]!==void 0:zf.call(a,c)}var Vf="__lodash_hash_undefined__";function Mf(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=G1&&a===void 0?Vf:a,this}function e1(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}e1.prototype.clear=ff;e1.prototype.delete=vf;e1.prototype.get=hf;e1.prototype.has=df;e1.prototype.set=Mf;function Cf(){this.__data__=[],this.size=0}function c4(c,a){for(var e=c.length;e--;)if(J5(c[e][0],a))return e;return-1}var Lf=Array.prototype,gf=Lf.splice;function bf(c){var a=this.__data__,e=c4(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():gf.call(a,e,1),--this.size,!0}function xf(c){var a=this.__data__,e=c4(a,c);return e<0?void 0:a[e][1]}function yf(c){return c4(this.__data__,c)>-1}function Nf(c,a){var e=this.__data__,r=c4(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function $2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}$2.prototype.clear=Cf;$2.prototype.delete=bf;$2.prototype.get=xf;$2.prototype.has=yf;$2.prototype.set=Nf;var j1=f1(i2,"Map");function wf(){this.size=0,this.__data__={hash:new e1,map:new(j1||$2),string:new e1}}function Sf(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function a4(c,a){var e=c.__data__;return Sf(a)?e[typeof a=="string"?"string":"hash"]:e.map}function kf(c){var a=a4(this,c).delete(c);return this.size-=a?1:0,a}function Af(c){return a4(this,c).get(c)}function _f(c){return a4(this,c).has(c)}function Pf(c,a){var e=a4(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function j2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}j2.prototype.clear=wf;j2.prototype.delete=kf;j2.prototype.get=Af;j2.prototype.has=_f;j2.prototype.set=Pf;var Tf="Expected a function";function N6(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(Tf);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(N6.Cache||j2),e}N6.Cache=j2;var Bf=500;function $f(c){var a=N6(c,function(r){return e.size===Bf&&e.clear(),r}),e=a.cache;return a}var Ff=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rf=/\\(\\)?/g,Df=$f(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(Ff,function(e,r,s,n){a.push(s?n.replace(Rf,"$1"):r||e)}),a});function Ef(c){return c==null?"":O5(c)}function w6(c,a){return V2(c)?c:lf(c,a)?[c]:Df(Ef(c))}var Of=1/0;function f7(c){if(typeof c=="string"||K3(c))return c;var a=c+"";return a=="0"&&1/c==-Of?"-0":a}function If(c,a){a=w6(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[f7(a[e++])];return e&&e==r?c:void 0}function S6(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var w8=g2?g2.isConcatSpreadable:void 0;function Uf(c){return V2(c)||s7(c)||!!(w8&&c&&c[w8])}function Wf(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=Uf),s||(s=[]);++n<i;){var t=c[n];e(t)?S6(s,t):s[s.length]=t}return s}function Gf(c){var a=c==null?0:c.length;return a?Wf(c):[]}function jf(c){return M6(a7(c,void 0,Gf),c+"")}var k6=l7(Object.getPrototypeOf,Object),qf="[object Object]",Yf=Function.prototype,Xf=Object.prototype,v7=Yf.toString,Kf=Xf.hasOwnProperty,Qf=v7.call(Object);function m7(c){if(!y2(c)||G2(c)!=qf)return!1;var a=k6(c);if(a===null)return!0;var e=Kf.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&v7.call(e)==Qf}var Zf=1,Jf=32,D3=ul(function(c,a,e){var r=Zf;if(e.length){var s=W1(e,L6(D3));r|=Jf}return fl(c,r,a,e,s)});D3.placeholder={};function cv(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function av(){this.__data__=new $2,this.size=0}function ev(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function rv(c){return this.__data__.get(c)}function sv(c){return this.__data__.has(c)}var nv=200;function iv(c,a){var e=this.__data__;if(e instanceof $2){var r=e.__data__;if(!j1||r.length<nv-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new j2(r)}return e.set(c,a),this.size=e.size,this}function w1(c){var a=this.__data__=new $2(c);this.size=a.size}w1.prototype.clear=av;w1.prototype.delete=ev;w1.prototype.get=rv;w1.prototype.has=sv;w1.prototype.set=iv;function tv(c,a){return c&&a3(a,e3(a),c)}function ov(c,a){return c&&a3(a,y6(a),c)}var u7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,S8=u7&&typeof module=="object"&&module&&!module.nodeType&&module,lv=S8&&S8.exports===u7,k8=lv?i2.Buffer:void 0,A8=k8?k8.allocUnsafe:void 0;function fv(c,a){if(a)return c.slice();var e=c.length,r=A8?A8(e):new c.constructor(e);return c.copy(r),r}function vv(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function p7(){return[]}var mv=Object.prototype,uv=mv.propertyIsEnumerable,_8=Object.getOwnPropertySymbols,A6=_8?function(c){return c==null?[]:(c=Object(c),vv(_8(c),function(a){return uv.call(c,a)}))}:p7;function pv(c,a){return a3(c,A6(c),a)}var hv=Object.getOwnPropertySymbols,h7=hv?function(c){for(var a=[];c;)S6(a,A6(c)),c=k6(c);return a}:p7;function Hv(c,a){return a3(c,h7(c),a)}function H7(c,a,e){var r=a(c);return V2(c)?r:S6(r,e(c))}function zv(c){return H7(c,e3,A6)}function z7(c){return H7(c,y6,h7)}var q4=f1(i2,"DataView"),Y4=f1(i2,"Promise"),X4=f1(i2,"Set"),P8="[object Map]",dv="[object Object]",T8="[object Promise]",B8="[object Set]",$8="[object WeakMap]",F8="[object DataView]",Vv=l1(q4),Mv=l1(j1),Cv=l1(Y4),Lv=l1(X4),gv=l1(I1),N2=G2;(q4&&N2(new q4(new ArrayBuffer(1)))!=F8||j1&&N2(new j1)!=P8||Y4&&N2(Y4.resolve())!=T8||X4&&N2(new X4)!=B8||I1&&N2(new I1)!=$8)&&(N2=function(c){var a=G2(c),e=a==dv?c.constructor:void 0,r=e?l1(e):"";if(r)switch(r){case Vv:return F8;case Mv:return P8;case Cv:return T8;case Lv:return B8;case gv:return $8}return a});var bv=Object.prototype,xv=bv.hasOwnProperty;function yv(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&xv.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var R8=i2.Uint8Array;function _6(c){var a=new c.constructor(c.byteLength);return new R8(a).set(new R8(c)),a}function Nv(c,a){var e=a?_6(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.byteLength)}var wv=/\w*$/;function Sv(c){var a=new c.constructor(c.source,wv.exec(c));return a.lastIndex=c.lastIndex,a}var D8=g2?g2.prototype:void 0,E8=D8?D8.valueOf:void 0;function kv(c){return E8?Object(E8.call(c)):{}}function Av(c,a){var e=a?_6(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.length)}var _v="[object Boolean]",Pv="[object Date]",Tv="[object Map]",Bv="[object Number]",$v="[object RegExp]",Fv="[object Set]",Rv="[object String]",Dv="[object Symbol]",Ev="[object ArrayBuffer]",Ov="[object DataView]",Iv="[object Float32Array]",Uv="[object Float64Array]",Wv="[object Int8Array]",Gv="[object Int16Array]",jv="[object Int32Array]",qv="[object Uint8Array]",Yv="[object Uint8ClampedArray]",Xv="[object Uint16Array]",Kv="[object Uint32Array]";function Qv(c,a,e){var r=c.constructor;switch(a){case Ev:return _6(c);case _v:case Pv:return new r(+c);case Ov:return Nv(c,e);case Iv:case Uv:case Wv:case Gv:case jv:case qv:case Yv:case Xv:case Kv:return Av(c,e);case Tv:return new r;case Bv:case Rv:return new r(c);case $v:return Sv(c);case Fv:return new r;case Dv:return kv(c)}}function Zv(c){return typeof c.constructor=="function"&&!b6(c)?Z3(k6(c)):{}}var Jv="[object Map]";function cm(c){return y2(c)&&N2(c)==Jv}var O8=V1&&V1.isMap,am=O8?x6(O8):cm,em="[object Set]";function rm(c){return y2(c)&&N2(c)==em}var I8=V1&&V1.isSet,sm=I8?x6(I8):rm,nm=1,im=2,tm=4,d7="[object Arguments]",om="[object Array]",lm="[object Boolean]",fm="[object Date]",vm="[object Error]",V7="[object Function]",mm="[object GeneratorFunction]",um="[object Map]",pm="[object Number]",M7="[object Object]",hm="[object RegExp]",Hm="[object Set]",zm="[object String]",dm="[object Symbol]",Vm="[object WeakMap]",Mm="[object ArrayBuffer]",Cm="[object DataView]",Lm="[object Float32Array]",gm="[object Float64Array]",bm="[object Int8Array]",xm="[object Int16Array]",ym="[object Int32Array]",Nm="[object Uint8Array]",wm="[object Uint8ClampedArray]",Sm="[object Uint16Array]",km="[object Uint32Array]",j={};j[d7]=j[om]=j[Mm]=j[Cm]=j[lm]=j[fm]=j[Lm]=j[gm]=j[bm]=j[xm]=j[ym]=j[um]=j[pm]=j[M7]=j[hm]=j[Hm]=j[zm]=j[dm]=j[Nm]=j[wm]=j[Sm]=j[km]=!0;j[vm]=j[V7]=j[Vm]=!1;function A3(c,a,e,r,s,n){var i,t=a&nm,o=a&im,l=a&tm;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!b2(c))return c;var f=V2(c);if(f){if(i=yv(c),!t)return V6(c,i)}else{var m=N2(c),p=m==V7||m==mm;if(i7(c))return fv(c,t);if(m==M7||m==d7||p&&!s){if(i=o||p?{}:Zv(c),!t)return o?Hv(c,ov(i,c)):pv(c,tv(i,c))}else{if(!j[m])return s?c:{};i=Qv(c,m,t)}}n||(n=new w1);var h=n.get(c);if(h)return h;n.set(c,i),sm(c)?c.forEach(function(V){i.add(A3(V,a,e,V,c,n))}):am(c)&&c.forEach(function(V,M){i.set(M,A3(V,a,e,M,c,n))});var b=l?o?z7:zv:o?y6:e3,g=f?void 0:b(c);return C6(g||c,function(V,M){g&&(M=V,V=c[M]),c7(i,M,A3(V,a,e,M,c,n))}),i}function Am(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),t=i.length;t--;){var o=i[++s];if(e(n[o],o,n)===!1)break}return a}}var _m=Am();function Pm(c,a){return c&&_m(c,a,e3)}function Tm(c,a){return function(e,r){if(e==null)return e;if(!J3(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var Bm=Tm(Pm),$4=function(){return i2.Date.now()},$m="Expected a function",Fm=Math.max,Rm=Math.min;function K4(c,a,e){var r,s,n,i,t,o,l=0,f=!1,m=!1,p=!0;if(typeof c!="function")throw new TypeError($m);a=G4(a)||0,b2(e)&&(f=!!e.leading,m="maxWait"in e,n=m?Fm(G4(e.maxWait)||0,a):n,p="trailing"in e?!!e.trailing:p);function h(A){var F=r,O=s;return r=s=void 0,l=A,i=c.apply(O,F),i}function b(A){return l=A,t=setTimeout(M,a),f?h(A):i}function g(A){var F=A-o,O=A-l,U=a-F;return m?Rm(U,n-O):U}function V(A){var F=A-o,O=A-l;return o===void 0||F>=a||F<0||m&&O>=n}function M(){var A=$4();if(V(A))return C(A);t=setTimeout(M,g(A))}function C(A){return t=void 0,p&&r?h(A):(r=s=void 0,i)}function N(){t!==void 0&&clearTimeout(t),l=0,r=o=s=t=void 0}function x(){return t===void 0?i:C($4())}function _(){var A=$4(),F=V(A);if(r=arguments,s=this,o=A,F){if(t===void 0)return b(o);if(m)return clearTimeout(t),t=setTimeout(M,a),h(o)}return t===void 0&&(t=setTimeout(M,a)),i}return _.cancel=N,_.flush=x,_}function Dm(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function Em(c){return typeof c=="function"?c:Q3}function E3(c,a){var e=V2(c)?C6:Bm;return e(c,Em(a))}var Om="[object String]";function Im(c){return typeof c=="string"||!V2(c)&&y2(c)&&G2(c)==Om}function Um(c,a){return H6(a,function(e){return c[e]})}function Wm(c){return c==null?[]:Um(c,e3(c))}var Gm=Math.max;function jm(c,a,e,r){c=J3(c)?c:Wm(c),e=e&&!r?j4(e):0;var s=c.length;return e<0&&(e=Gm(s+e,0)),Im(c)?e<=s&&c.indexOf(a,e)>-1:!!s&&Y5(c,a,e)>-1}function qm(c,a){return a.length<2?c:If(c,cv(a,0,-1))}function U8(c){return y2(c)&&c.nodeType===1&&!m7(c)}function Ym(c){return c==null}function Xm(c,a){return a=w6(a,c),c=qm(c,a),c==null||delete c[f7(Dm(a))]}function Km(c){return m7(c)?void 0:c}var Qm=1,Zm=2,Jm=4,cu=jf(function(c,a){var e={};if(c==null)return e;var r=!1;a=H6(a,function(n){return n=w6(n,c),r||(r=n.length>1),n}),a3(c,z7(c),e),r&&(e=A3(e,Qm|Zm|Jm,Km));for(var s=a.length;s--;)Xm(e,a[s]);return e}),au="Expected a function";function eu(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(au);return b2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),K4(c,a,{leading:r,maxWait:a,trailing:s})}function ru(c){return e=>E3(c,r=>e.use(r))}const v1=c=>(c.install=a=>{const e=c.name;a.component(e,c)},c);function W8(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function w(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?W8(Object(e),!0).forEach(function(r){J(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):W8(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function O3(c){"@babel/helpers - typeof";return O3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},O3(c)}function su(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function nu(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function iu(c,a,e){return a&&nu(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function J(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function P6(c,a){return ou(c)||fu(c,a)||C7(c,a)||mu()}function r3(c){return tu(c)||lu(c)||C7(c)||vu()}function tu(c){if(Array.isArray(c))return Q4(c)}function ou(c){if(Array.isArray(c))return c}function lu(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function fu(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,t=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function C7(c,a){if(c){if(typeof c=="string")return Q4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Q4(c,a)}}function Q4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function vu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G8=function(){},T6={},L7={},g7=null,b7={mark:G8,measure:G8};try{typeof window<"u"&&(T6=window),typeof document<"u"&&(L7=document),typeof MutationObserver<"u"&&(g7=MutationObserver),typeof performance<"u"&&(b7=performance)}catch{}var uu=T6.navigator||{},j8=uu.userAgent,q8=j8===void 0?"":j8,I2=T6,K=L7,Y8=g7,V3=b7;I2.document;var F2=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",x7=~q8.indexOf("MSIE")||~q8.indexOf("Trident/"),M3,C3,L3,g3,b3,A2="___FONT_AWESOME___",Z4=16,y7="fa",N7="svg-inline--fa",r1="data-fa-i2svg",J4="data-fa-pseudo-element",pu="data-fa-pseudo-element-pending",B6="data-prefix",$6="data-icon",X8="fontawesome-i2svg",hu="async",Hu=["HTML","HEAD","STYLE","SCRIPT"],w7=function(){try{return!0}catch{return!1}}(),X="classic",Q="sharp",F6=[X,Q];function s3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[X]}})}var q1=s3((M3={},J(M3,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),J(M3,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),M3)),Y1=s3((C3={},J(C3,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),J(C3,Q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),C3)),X1=s3((L3={},J(L3,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),J(L3,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),L3)),zu=s3((g3={},J(g3,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),J(g3,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),g3)),du=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,S7="fa-layers-text",Vu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Mu=s3((b3={},J(b3,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),J(b3,Q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),b3)),k7=[1,2,3,4,5,6,7,8,9,10],Cu=k7.concat([11,12,13,14,15,16,17,18,19,20]),Lu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K1=new Set;Object.keys(Y1[X]).map(K1.add.bind(K1));Object.keys(Y1[Q]).map(K1.add.bind(K1));var gu=[].concat(F6,r3(K1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q2.GROUP,Q2.SWAP_OPACITY,Q2.PRIMARY,Q2.SECONDARY]).concat(k7.map(function(c){return"".concat(c,"x")})).concat(Cu.map(function(c){return"w-".concat(c)})),R1=I2.FontAwesomeConfig||{};function bu(c){var a=K.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function xu(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(K&&typeof K.querySelector=="function"){var yu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yu.forEach(function(c){var a=P6(c,2),e=a[0],r=a[1],s=xu(bu(e));s!=null&&(R1[r]=s)})}var A7={styleDefault:"solid",familyDefault:"classic",cssPrefix:y7,replacementClass:N7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};R1.familyPrefix&&(R1.cssPrefix=R1.familyPrefix);var M1=w(w({},A7),R1);M1.autoReplaceSvg||(M1.observeMutations=!1);var T={};Object.keys(A7).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){M1[c]=e,D1.forEach(function(r){return r(T)})},get:function(){return M1[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){M1.cssPrefix=a,D1.forEach(function(e){return e(T)})},get:function(){return M1.cssPrefix}});I2.FontAwesomeConfig=T;var D1=[];function Nu(c){return D1.push(c),function(){D1.splice(D1.indexOf(c),1)}}var O2=Z4,M2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wu(c){if(!(!c||!F2)){var a=K.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=K.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return K.head.insertBefore(a,r),c}}var Su="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q1(){for(var c=12,a="";c-- >0;)a+=Su[Math.random()*62|0];return a}function S1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function R6(c){return c.classList?S1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function _7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ku(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(_7(c[e]),'" ')},"").trim()}function e4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function D6(c){return c.size!==M2.size||c.x!==M2.x||c.y!==M2.y||c.rotate!==M2.rotate||c.flipX||c.flipY}function Au(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:l}}function _u(c){var a=c.transform,e=c.width,r=e===void 0?Z4:e,s=c.height,n=s===void 0?Z4:s,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&x7?o+="translate(".concat(a.x/O2-r/2,"em, ").concat(a.y/O2-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/O2,"em), calc(-50% + ").concat(a.y/O2,"em)) "):o+="translate(".concat(a.x/O2,"em, ").concat(a.y/O2,"em) "),o+="scale(".concat(a.size/O2*(a.flipX?-1:1),", ").concat(a.size/O2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Pu=`:root, :host {
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
}`;function P7(){var c=y7,a=N7,e=T.cssPrefix,r=T.replacementClass,s=Pu;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var K8=!1;function F4(){T.autoAddCss&&!K8&&(wu(P7()),K8=!0)}var Tu={mixout:function(){return{dom:{css:P7,insertCss:F4}}},hooks:function(){return{beforeDOMElementCreation:function(){F4()},beforeI2svg:function(){F4()}}}},_2=I2||{};_2[A2]||(_2[A2]={});_2[A2].styles||(_2[A2].styles={});_2[A2].hooks||(_2[A2].hooks={});_2[A2].shims||(_2[A2].shims=[]);var d2=_2[A2],T7=[],Bu=function c(){K.removeEventListener("DOMContentLoaded",c),I3=1,T7.map(function(a){return a()})},I3=!1;F2&&(I3=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),I3||K.addEventListener("DOMContentLoaded",Bu));function $u(c){F2&&(I3?setTimeout(c,0):T7.push(c))}function n3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?_7(c):"<".concat(a," ").concat(ku(r),">").concat(n.map(n3).join(""),"</").concat(a,">")}function Q8(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var R4=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=e,o,l,f;for(r===void 0?(o=1,f=a[n[0]]):(o=0,f=r);o<i;o++)l=n[o],f=t(f,a[l],l,a);return f};function Fu(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function c6(c){var a=Fu(c);return a.length===1?a[0].toString(16):null}function Ru(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Z8(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function a6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=Z8(a);typeof d2.hooks.addPack=="function"&&!s?d2.hooks.addPack(c,Z8(a)):d2.styles[c]=w(w({},d2.styles[c]||{}),n),c==="fas"&&a6("fa",a)}var x3,y3,N3,u1=d2.styles,Du=d2.shims,Eu=(x3={},J(x3,X,Object.values(X1[X])),J(x3,Q,Object.values(X1[Q])),x3),E6=null,B7={},$7={},F7={},R7={},D7={},Ou=(y3={},J(y3,X,Object.keys(q1[X])),J(y3,Q,Object.keys(q1[Q])),y3);function Iu(c){return~gu.indexOf(c)}function Uu(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Iu(s)?s:null}var E7=function(){var a=function(n){return R4(u1,function(i,t,o){return i[o]=R4(t,n,{}),i},{})};B7=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){s[o.toString(16)]=i})}return s}),$7=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){s[o]=i})}return s}),D7=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(o){s[o]=i}),s});var e="far"in u1||T.autoFetchSvg,r=R4(Du,function(s,n){var i=n[0],t=n[1],o=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:o}),s},{names:{},unicodes:{}});F7=r.names,R7=r.unicodes,E6=r4(T.styleDefault,{family:T.familyDefault})};Nu(function(c){E6=r4(c.styleDefault,{family:T.familyDefault})});E7();function O6(c,a){return(B7[c]||{})[a]}function Wu(c,a){return($7[c]||{})[a]}function Z2(c,a){return(D7[c]||{})[a]}function O7(c){return F7[c]||{prefix:null,iconName:null}}function Gu(c){var a=R7[c],e=O6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U2(){return E6}var I6=function(){return{prefix:null,iconName:null,rest:[]}};function r4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?X:e,s=q1[r][c],n=Y1[r][c]||Y1[r][s],i=c in d2.styles?c:null;return n||i||null}var J8=(N3={},J(N3,X,Object.keys(X1[X])),J(N3,Q,Object.keys(X1[Q])),N3);function s4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},J(a,X,"".concat(T.cssPrefix,"-").concat(X)),J(a,Q,"".concat(T.cssPrefix,"-").concat(Q)),a),i=null,t=X;(c.includes(n[X])||c.some(function(l){return J8[X].includes(l)}))&&(t=X),(c.includes(n[Q])||c.some(function(l){return J8[Q].includes(l)}))&&(t=Q);var o=c.reduce(function(l,f){var m=Uu(T.cssPrefix,f);if(u1[f]?(f=Eu[t].includes(f)?zu[t][f]:f,i=f,l.prefix=f):Ou[t].indexOf(f)>-1?(i=f,l.prefix=r4(f,{family:t})):m?l.iconName=m:f!==T.replacementClass&&f!==n[X]&&f!==n[Q]&&l.rest.push(f),!s&&l.prefix&&l.iconName){var p=i==="fa"?O7(l.iconName):{},h=Z2(l.prefix,l.iconName);p.prefix&&(i=null),l.iconName=p.iconName||h||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!u1.far&&u1.fas&&!T.autoFetchSvg&&(l.prefix="fas")}return l},I6());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===Q&&(u1.fass||T.autoFetchSvg)&&(o.prefix="fass",o.iconName=Z2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=U2()||"fas"),o}var ju=function(){function c(){su(this,c),this.definitions={}}return iu(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=w(w({},e.definitions[t]||{}),i[t]),a6(t,i[t]);var o=X1[X][t];o&&a6(o,i[t]),E7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,o=i.iconName,l=i.icon,f=l[2];e[t]||(e[t]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(e[t][m]=l)}),e[t][o]=l}),e}}]),c}(),c5=[],p1={},h1={},qu=Object.keys(h1);function Yu(c,a){var e=a.mixoutsTo;return c5=c,p1={},Object.keys(h1).forEach(function(r){qu.indexOf(r)===-1&&delete h1[r]}),c5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),O3(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){p1[i]||(p1[i]=[]),p1[i].push(n[i])})}r.provides&&r.provides(h1)}),e}function e6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=p1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function s1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=p1[c]||[];s.forEach(function(n){n.apply(null,e)})}function P2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return h1[c]?h1[c].apply(null,a):void 0}function r6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||U2();if(a)return a=Z2(e,a)||a,Q8(I7.definitions,e,a)||Q8(d2.styles,e,a)}var I7=new ju,Xu=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,s1("noAuto")},Ku={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F2?(s1("beforeI2svg",a),P2("pseudoElements2svg",a),P2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,$u(function(){Zu({autoReplaceSvgRoot:e}),s1("watch",a)})}},Qu={icon:function(a){if(a===null)return null;if(O3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=r4(a[0]);return{prefix:r,iconName:Z2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(du))){var s=s4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||U2(),iconName:Z2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=U2();return{prefix:n,iconName:Z2(n,a)||a}}}},u2={noAuto:Xu,config:T,dom:Ku,parse:Qu,library:I7,findIconDefinition:r6,toHtml:n3},Zu=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?K:e;(Object.keys(d2.styles).length>0||T.autoFetchSvg)&&F2&&T.autoReplaceSvg&&u2.dom.i2svg({node:r})};function n4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return n3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(F2){var r=K.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Ju(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(D6(i)&&e.found&&!r.found){var t=e.width,o=e.height,l={x:t/o/2,y:.5};s.style=e4(w(w({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function cp(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:w(w({},s),{},{id:i}),children:r}]}]}function U6(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,o=c.title,l=c.maskId,f=c.titleId,m=c.extra,p=c.watchable,h=p===void 0?!1:p,b=r.found?r:e,g=b.width,V=b.height,M=s==="fak",C=[T.replacementClass,n?"".concat(T.cssPrefix,"-").concat(n):""].filter(function(U){return m.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(m.classes).join(" "),N={children:[],attributes:w(w({},m.attributes),{},{"data-prefix":s,"data-icon":n,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(V)})},x=M&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/V*16*.0625,"em")}:{};h&&(N.attributes[r1]=""),o&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(f||Q1())},children:[o]}),delete N.attributes.title);var _=w(w({},N),{},{prefix:s,iconName:n,main:e,mask:r,maskId:l,transform:i,symbol:t,styles:w(w({},x),m.styles)}),A=r.found&&e.found?P2("generateAbstractMask",_)||{children:[],attributes:{}}:P2("generateAbstractIcon",_)||{children:[],attributes:{}},F=A.children,O=A.attributes;return _.children=F,_.attributes=O,t?cp(_):Ju(_)}function a5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,l=w(w(w({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[r1]="");var f=w({},i.styles);D6(s)&&(f.transform=_u({transform:s,startCentered:!0,width:e,height:r}),f["-webkit-transform"]=f.transform);var m=e4(f);m.length>0&&(l.style=m);var p=[];return p.push({tag:"span",attributes:l,children:[a]}),n&&p.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),p}function ap(c){var a=c.content,e=c.title,r=c.extra,s=w(w(w({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=e4(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var D4=d2.styles;function s6(c){var a=c[0],e=c[1],r=c.slice(4),s=P6(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var ep={found:!1,width:512,height:512};function rp(c,a){!w7&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function n6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=U2()),new Promise(function(r,s){if(P2("missingIconAbstract"),e==="fa"){var n=O7(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&D4[a]&&D4[a][c]){var i=D4[a][c];return r(s6(i))}rp(c,a),r(w(w({},ep),{},{icon:T.showMissingIcons&&c?P2("missingIconAbstract")||{}:{}}))})}var e5=function(){},i6=T.measurePerformance&&V3&&V3.mark&&V3.measure?V3:{mark:e5,measure:e5},B1='FA "6.5.2"',sp=function(a){return i6.mark("".concat(B1," ").concat(a," begins")),function(){return U7(a)}},U7=function(a){i6.mark("".concat(B1," ").concat(a," ends")),i6.measure("".concat(B1," ").concat(a),"".concat(B1," ").concat(a," begins"),"".concat(B1," ").concat(a," ends"))},W6={begin:sp,end:U7},_3=function(){};function r5(c){var a=c.getAttribute?c.getAttribute(r1):null;return typeof a=="string"}function np(c){var a=c.getAttribute?c.getAttribute(B6):null,e=c.getAttribute?c.getAttribute($6):null;return a&&e}function ip(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function tp(){if(T.autoReplaceSvg===!0)return P3.replace;var c=P3[T.autoReplaceSvg];return c||P3.replace}function op(c){return K.createElementNS("http://www.w3.org/2000/svg",c)}function lp(c){return K.createElement(c)}function W7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?op:lp:e;if(typeof c=="string")return K.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(W7(i,{ceFn:r}))}),s}function fp(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var P3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(W7(s),e)}),e.getAttribute(r1)===null&&T.keepOriginalSource){var r=K.createComment(fp(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~R6(e).indexOf(T.replacementClass))return P3.replace(a);var s=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,o){return o===T.replacementClass||o.match(s)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return n3(t)}).join(`
`);e.setAttribute(r1,""),e.innerHTML=i}};function s5(c){c()}function G7(c,a){var e=typeof a=="function"?a:_3;if(c.length===0)e();else{var r=s5;T.mutateApproach===hu&&(r=I2.requestAnimationFrame||s5),r(function(){var s=tp(),n=W6.begin("mutate");c.map(s),n(),e()})}}var G6=!1;function j7(){G6=!0}function t6(){G6=!1}var U3=null;function n5(c){if(Y8&&T.observeMutations){var a=c.treeCallback,e=a===void 0?_3:a,r=c.nodeCallback,s=r===void 0?_3:r,n=c.pseudoElementsCallback,i=n===void 0?_3:n,t=c.observeMutationsRoot,o=t===void 0?K:t;U3=new Y8(function(l){if(!G6){var f=U2();S1(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!r5(m.addedNodes[0])&&(T.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&r5(m.target)&&~Lu.indexOf(m.attributeName))if(m.attributeName==="class"&&np(m.target)){var p=s4(R6(m.target)),h=p.prefix,b=p.iconName;m.target.setAttribute(B6,h||f),b&&m.target.setAttribute($6,b)}else ip(m.target)&&s(m.target)})}}),F2&&U3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vp(){U3&&U3.disconnect()}function mp(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function up(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=s4(R6(c));return s.prefix||(s.prefix=U2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Wu(s.prefix,c.innerText)||O6(s.prefix,c6(c.innerText))),!s.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function pp(c){var a=S1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Q1()):(a["aria-hidden"]="true",a.focusable="false")),a}function hp(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function i5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=up(c),r=e.iconName,s=e.prefix,n=e.rest,i=pp(c),t=e6("parseNodeAttributes",{},c),o=a.styleParser?mp(c):[];return w({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:M2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},t)}var Hp=d2.styles;function q7(c){var a=T.autoReplaceSvg==="nest"?i5(c,{styleParser:!1}):i5(c);return~a.extra.classes.indexOf(S7)?P2("generateLayersText",c,a):P2("generateSvgReplacementMutation",c,a)}var W2=new Set;F6.map(function(c){W2.add("fa-".concat(c))});Object.keys(q1[X]).map(W2.add.bind(W2));Object.keys(q1[Q]).map(W2.add.bind(W2));W2=r3(W2);function t5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F2)return Promise.resolve();var e=K.documentElement.classList,r=function(m){return e.add("".concat(X8,"-").concat(m))},s=function(m){return e.remove("".concat(X8,"-").concat(m))},n=T.autoFetchSvg?W2:F6.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Hp));n.includes("fa")||n.push("fa");var i=[".".concat(S7,":not([").concat(r1,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(r1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=S1(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var o=W6.begin("onTree"),l=t.reduce(function(f,m){try{var p=q7(m);p&&f.push(p)}catch(h){w7||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,m){Promise.all(l).then(function(p){G7(p,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),f()})}).catch(function(p){o(),m(p)})})}function zp(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;q7(c).then(function(e){e&&G7([e],a)})}function dp(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:r6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:r6(s||{})),c(r,w(w({},e),{},{mask:s}))}}var Vp=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?M2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,o=t===void 0?null:t,l=e.maskId,f=l===void 0?null:l,m=e.title,p=m===void 0?null:m,h=e.titleId,b=h===void 0?null:h,g=e.classes,V=g===void 0?[]:g,M=e.attributes,C=M===void 0?{}:M,N=e.styles,x=N===void 0?{}:N;if(a){var _=a.prefix,A=a.iconName,F=a.icon;return n4(w({type:"icon"},a),function(){return s1("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(p?C["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(b||Q1()):(C["aria-hidden"]="true",C.focusable="false")),U6({icons:{main:s6(F),mask:o?s6(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:A,transform:w(w({},M2),s),symbol:i,title:p,maskId:f,titleId:b,extra:{attributes:C,styles:x,classes:V}})})}},Mp={mixout:function(){return{icon:dp(Vp)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=t5,e.nodeCallback=zp,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?K:r,n=e.callback,i=n===void 0?function(){}:n;return t5(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,o=r.transform,l=r.symbol,f=r.mask,m=r.maskId,p=r.extra;return new Promise(function(h,b){Promise.all([n6(s,t),f.iconName?n6(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var V=P6(g,2),M=V[0],C=V[1];h([e,U6({icons:{main:M,mask:C},prefix:t,iconName:s,transform:o,symbol:l,maskId:m,title:n,titleId:i,extra:p,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,o=e4(t);o.length>0&&(s.style=o);var l;return D6(i)&&(l=P2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(l||n.icon),{children:r,attributes:s}}}},Cp={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return n4({type:"layer"},function(){s1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(r3(n)).join(" ")},children:i}]})}}}},Lp={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,o=r.attributes,l=o===void 0?{}:o,f=r.styles,m=f===void 0?{}:f;return n4({type:"counter",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),ap({content:e.toString(),title:n,extra:{attributes:l,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(r3(t))}})})}}}},gp={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?M2:s,i=r.title,t=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,f=r.attributes,m=f===void 0?{}:f,p=r.styles,h=p===void 0?{}:p;return n4({type:"text",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),a5({content:e,transform:w(w({},M2),n),title:t,extra:{attributes:m,styles:h,classes:["".concat(T.cssPrefix,"-layers-text")].concat(r3(l))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,o=null;if(x7){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();t=f.width/l,o=f.height/l}return T.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,a5({content:e.innerHTML,width:t,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},bp=new RegExp('"',"ug"),o5=[1105920,1112319];function xp(c){var a=c.replace(bp,""),e=Ru(a,0),r=e>=o5[0]&&e<=o5[1],s=a.length===2?a[0]===a[1]:!1;return{value:c6(s?a[0]:a),isSecondary:r||s}}function l5(c,a){var e="".concat(pu).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=S1(c.children),i=n.filter(function(F){return F.getAttribute(J4)===a})[0],t=I2.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(Vu),l=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),r();if(o&&f!=="none"&&f!==""){var m=t.getPropertyValue("content"),p=~["Sharp"].indexOf(o[2])?Q:X,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?Y1[p][o[2].toLowerCase()]:Mu[p][l],b=xp(m),g=b.value,V=b.isSecondary,M=o[0].startsWith("FontAwesome"),C=O6(h,g),N=C;if(M){var x=Gu(g);x.iconName&&x.prefix&&(C=x.iconName,h=x.prefix)}if(C&&!V&&(!i||i.getAttribute(B6)!==h||i.getAttribute($6)!==N)){c.setAttribute(e,N),i&&c.removeChild(i);var _=hp(),A=_.extra;A.attributes[J4]=a,n6(C,h).then(function(F){var O=U6(w(w({},_),{},{icons:{main:F,mask:I6()},prefix:h,iconName:N,extra:A,watchable:!0})),U=K.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(U,c.firstChild):c.appendChild(U),U.outerHTML=O.map(function(G){return n3(G)}).join(`