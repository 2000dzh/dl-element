import{d as k,c as S,w as i2,h as Zi,o as v,a as z,b as _,n as Ji,g as ct,u,m as N2,_ as B,e as u6,i as y1,r as R,f as $,j as L,k as H,l as H1,p as w,F as j,q as D,s as J2,t as G3,v as at,x as w4,y as i1,z as V,A as S5,B as k5,C as $1,T as t1,D as e2,E as I,G as A5,H as et,I as rt,J as j3,K as J,L as c2,M as st,N as nt,O as it,P as p6,Q as N1,R as I2,S as a1,U as U4,V as _5,W as tt,X as ot,Y as o1,Z as r2,$ as P5,a0 as q3,a1 as T5,a2 as Y3,a3 as lt,a4 as ft,a5 as vt,a6 as mt,a7 as B5,a8 as ut,a9 as $5,aa as pt,ab as ht}from"./framework.CYveRR8u.js";var F5=typeof global=="object"&&global&&global.Object===Object&&global,Ht=typeof self=="object"&&self&&self.Object===Object&&self,s2=F5||Ht||Function("return this")(),L2=s2.Symbol,R5=Object.prototype,zt=R5.hasOwnProperty,dt=R5.toString,_1=L2?L2.toStringTag:void 0;function Vt(c){var a=zt.call(c,_1),e=c[_1];try{c[_1]=void 0;var r=!0}catch{}var s=dt.call(c);return r&&(a?c[_1]=e:delete c[_1]),s}var Mt=Object.prototype,Ct=Mt.toString;function Lt(c){return Ct.call(c)}var gt="[object Null]",bt="[object Undefined]",n8=L2?L2.toStringTag:void 0;function U2(c){return c==null?c===void 0?bt:gt:n8&&n8 in Object(c)?Vt(c):Lt(c)}function _2(c){return c!=null&&typeof c=="object"}var xt="[object Symbol]";function X3(c){return typeof c=="symbol"||_2(c)&&U2(c)==xt}function h6(c,a){for(var e=-1,r=c==null?0:c.length,s=Array(r);++e<r;)s[e]=a(c[e],e,c);return s}var d2=Array.isArray,yt=1/0,i8=L2?L2.prototype:void 0,t8=i8?i8.toString:void 0;function D5(c){if(typeof c=="string")return c;if(d2(c))return h6(c,D5)+"";if(X3(c))return t8?t8.call(c):"";var a=c+"";return a=="0"&&1/c==-yt?"-0":a}var Nt=/\s/;function wt(c){for(var a=c.length;a--&&Nt.test(c.charAt(a)););return a}var St=/^\s+/;function kt(c){return c&&c.slice(0,wt(c)+1).replace(St,"")}function g2(c){var a=typeof c;return c!=null&&(a=="object"||a=="function")}var o8=NaN,At=/^[-+]0x[0-9a-f]+$/i,_t=/^0b[01]+$/i,Pt=/^0o[0-7]+$/i,Tt=parseInt;function W4(c){if(typeof c=="number")return c;if(X3(c))return o8;if(g2(c)){var a=typeof c.valueOf=="function"?c.valueOf():c;c=g2(a)?a+"":a}if(typeof c!="string")return c===0?c:+c;c=kt(c);var e=_t.test(c);return e||Pt.test(c)?Tt(c.slice(2),e?2:8):At.test(c)?o8:+c}var l8=1/0,Bt=17976931348623157e292;function $t(c){if(!c)return c===0?c:0;if(c=W4(c),c===l8||c===-l8){var a=c<0?-1:1;return a*Bt}return c===c?c:0}function G4(c){var a=$t(c),e=a%1;return a===a?e?a-e:a:0}function K3(c){return c}var Ft="[object AsyncFunction]",Rt="[object Function]",Dt="[object GeneratorFunction]",Et="[object Proxy]";function K2(c){if(!g2(c))return!1;var a=U2(c);return a==Rt||a==Dt||a==Ft||a==Et}var S4=s2["__core-js_shared__"],f8=function(){var c=/[^.]+$/.exec(S4&&S4.keys&&S4.keys.IE_PROTO||"");return c?"Symbol(src)_1."+c:""}();function Ot(c){return!!f8&&f8 in c}var It=Function.prototype,Ut=It.toString;function l1(c){if(c!=null){try{return Ut.call(c)}catch{}try{return c+""}catch{}}return""}var Wt=/[\\^$.*+?()[\]{}|]/g,Gt=/^\[object .+?Constructor\]$/,jt=Function.prototype,qt=Object.prototype,Yt=jt.toString,Xt=qt.hasOwnProperty,Kt=RegExp("^"+Yt.call(Xt).replace(Wt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Qt(c){if(!g2(c)||Ot(c))return!1;var a=K2(c)?Kt:Gt;return a.test(l1(c))}function Zt(c,a){return c==null?void 0:c[a]}function f1(c,a){var e=Zt(c,a);return Qt(e)?e:void 0}var I1=f1(s2,"WeakMap"),B3=I1&&new I1,E5=B3?function(c,a){return B3.set(c,a),c}:K3,v8=Object.create,Q3=function(){function c(){}return function(a){if(!g2(a))return{};if(v8)return v8(a);c.prototype=a;var e=new c;return c.prototype=void 0,e}}();function U1(c){return function(){var a=arguments;switch(a.length){case 0:return new c;case 1:return new c(a[0]);case 2:return new c(a[0],a[1]);case 3:return new c(a[0],a[1],a[2]);case 4:return new c(a[0],a[1],a[2],a[3]);case 5:return new c(a[0],a[1],a[2],a[3],a[4]);case 6:return new c(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new c(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var e=Q3(c.prototype),r=c.apply(e,a);return g2(r)?r:e}}var Jt=1;function co(c,a,e){var r=a&Jt,s=U1(c);function n(){var i=this&&this!==s2&&this instanceof n?s:c;return i.apply(r?e:this,arguments)}return n}function H6(c,a,e){switch(e.length){case 0:return c.call(a);case 1:return c.call(a,e[0]);case 2:return c.call(a,e[0],e[1]);case 3:return c.call(a,e[0],e[1],e[2])}return c.apply(a,e)}var ao=Math.max;function O5(c,a,e,r){for(var s=-1,n=c.length,i=e.length,t=-1,o=a.length,f=ao(n-i,0),l=Array(o+f),m=!r;++t<o;)l[t]=a[t];for(;++s<i;)(m||s<n)&&(l[e[s]]=c[s]);for(;f--;)l[t++]=c[s++];return l}var eo=Math.max;function I5(c,a,e,r){for(var s=-1,n=c.length,i=-1,t=e.length,o=-1,f=a.length,l=eo(n-t,0),m=Array(l+f),p=!r;++s<l;)m[s]=c[s];for(var h=s;++o<f;)m[h+o]=a[o];for(;++i<t;)(p||s<n)&&(m[h+e[i]]=c[s++]);return m}function ro(c,a){for(var e=c.length,r=0;e--;)c[e]===a&&++r;return r}function z6(){}var so=4294967295;function z1(c){this.__wrapped__=c,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=so,this.__views__=[]}z1.prototype=Q3(z6.prototype);z1.prototype.constructor=z1;function no(){}var U5=B3?function(c){return B3.get(c)}:no,m8={},io=Object.prototype,to=io.hasOwnProperty;function oo(c){for(var a=c.name+"",e=m8[a],r=to.call(m8,a)?e.length:0;r--;){var s=e[r],n=s.func;if(n==null||n==c)return s.name}return a}function d1(c,a){this.__wrapped__=c,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=void 0}d1.prototype=Q3(z6.prototype);d1.prototype.constructor=d1;function d6(c,a){var e=-1,r=c.length;for(a||(a=Array(r));++e<r;)a[e]=c[e];return a}function lo(c){if(c instanceof z1)return c.clone();var a=new d1(c.__wrapped__,c.__chain__);return a.__actions__=d6(c.__actions__),a.__index__=c.__index__,a.__values__=c.__values__,a}var fo=Object.prototype,vo=fo.hasOwnProperty;function $3(c){if(_2(c)&&!d2(c)&&!(c instanceof z1)){if(c instanceof d1)return c;if(vo.call(c,"__wrapped__"))return lo(c)}return new d1(c)}$3.prototype=z6.prototype;$3.prototype.constructor=$3;function mo(c){var a=oo(c),e=$3[a];if(typeof e!="function"||!(a in z1.prototype))return!1;if(c===e)return!0;var r=U5(e);return!!r&&c===r[0]}var uo=800,po=16,ho=Date.now;function W5(c){var a=0,e=0;return function(){var r=ho(),s=po-(r-e);if(e=r,s>0){if(++a>=uo)return arguments[0]}else a=0;return c.apply(void 0,arguments)}}var G5=W5(E5),Ho=/\{\n\/\* \[wrapped with (.+)\] \*/,zo=/,? & /;function Vo(c){var a=c.match(Ho);return a?a[1].split(zo):[]}var Mo=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;function Co(c,a){var e=a.length;if(!e)return c;var r=e-1;return a[r]=(e>1?"& ":"")+a[r],a=a.join(e>2?", ":" "),c.replace(Mo,`{
/* [wrapped with `+a+`] */
`)}function Lo(c){return function(){return c}}var F3=function(){try{var c=f1(Object,"defineProperty");return c({},"",{}),c}catch{}}(),go=F3?function(c,a){return F3(c,"toString",{configurable:!0,enumerable:!1,value:Lo(a),writable:!0})}:K3,V6=W5(go);function M6(c,a){for(var e=-1,r=c==null?0:c.length;++e<r&&a(c[e],e,c)!==!1;);return c}function bo(c,a,e,r){for(var s=c.length,n=e+-1;++n<s;)if(a(c[n],n,c))return n;return-1}function xo(c){return c!==c}function yo(c,a,e){for(var r=e-1,s=c.length;++r<s;)if(c[r]===a)return r;return-1}function j5(c,a,e){return a===a?yo(c,a,e):bo(c,xo,e)}function No(c,a){var e=c==null?0:c.length;return!!e&&j5(c,a,0)>-1}var wo=1,So=2,ko=8,Ao=16,_o=32,Po=64,To=128,Bo=256,$o=512,Fo=[["ary",To],["bind",wo],["bindKey",So],["curry",ko],["curryRight",Ao],["flip",$o],["partial",_o],["partialRight",Po],["rearg",Bo]];function Ro(c,a){return M6(Fo,function(e){var r="_."+e[0];a&e[1]&&!No(c,r)&&c.push(r)}),c.sort()}function q5(c,a,e){var r=a+"";return V6(c,Co(r,Ro(Vo(r),e)))}var Do=1,Eo=2,Oo=4,Io=8,u8=32,p8=64;function Y5(c,a,e,r,s,n,i,t,o,f){var l=a&Io,m=l?i:void 0,p=l?void 0:i,h=l?n:void 0,b=l?void 0:n;a|=l?u8:p8,a&=~(l?p8:u8),a&Oo||(a&=~(Do|Eo));var g=[c,a,s,h,m,b,p,t,o,f],d=e.apply(void 0,g);return mo(c)&&G5(d,g),d.placeholder=r,q5(d,c,a)}function C6(c){var a=c;return a.placeholder}var Uo=9007199254740991,Wo=/^(?:0|[1-9]\d*)$/;function X5(c,a){var e=typeof c;return a=a??Uo,!!a&&(e=="number"||e!="symbol"&&Wo.test(c))&&c>-1&&c%1==0&&c<a}var Go=Math.min;function jo(c,a){for(var e=c.length,r=Go(a.length,e),s=d6(c);r--;){var n=a[r];c[r]=X5(n,e)?s[n]:void 0}return c}var h8="__lodash_placeholder__";function W1(c,a){for(var e=-1,r=c.length,s=0,n=[];++e<r;){var i=c[e];(i===a||i===h8)&&(c[e]=h8,n[s++]=e)}return n}var qo=1,Yo=2,Xo=8,Ko=16,Qo=128,Zo=512;function L6(c,a,e,r,s,n,i,t,o,f){var l=a&Qo,m=a&qo,p=a&Yo,h=a&(Xo|Ko),b=a&Zo,g=p?void 0:U1(c);function d(){for(var M=arguments.length,C=Array(M),y=M;y--;)C[y]=arguments[y];if(h)var x=C6(d),P=ro(C,x);if(r&&(C=O5(C,r,s,h)),n&&(C=I5(C,n,i,h)),M-=P,h&&M<f){var A=W1(C,x);return Y5(c,a,L6,d.placeholder,e,C,A,t,o,f-M)}var F=m?e:this,U=p?F[c]:c;return M=C.length,t?C=jo(C,t):b&&M>1&&C.reverse(),l&&o<M&&(C.length=o),this&&this!==s2&&this instanceof d&&(U=g||U1(U)),U.apply(F,C)}return d}function Jo(c,a,e){var r=U1(c);function s(){for(var n=arguments.length,i=Array(n),t=n,o=C6(s);t--;)i[t]=arguments[t];var f=n<3&&i[0]!==o&&i[n-1]!==o?[]:W1(i,o);if(n-=f.length,n<e)return Y5(c,a,L6,s.placeholder,void 0,i,f,void 0,void 0,e-n);var l=this&&this!==s2&&this instanceof s?r:c;return H6(l,this,i)}return s}var cl=1;function al(c,a,e,r){var s=a&cl,n=U1(c);function i(){for(var t=-1,o=arguments.length,f=-1,l=r.length,m=Array(l+o),p=this&&this!==s2&&this instanceof i?n:c;++f<l;)m[f]=r[f];for(;o--;)m[f++]=arguments[++t];return H6(p,s?e:this,m)}return i}var H8="__lodash_placeholder__",k4=1,el=2,rl=4,z8=8,P1=128,d8=256,sl=Math.min;function nl(c,a){var e=c[1],r=a[1],s=e|r,n=s<(k4|el|P1),i=r==P1&&e==z8||r==P1&&e==d8&&c[7].length<=a[8]||r==(P1|d8)&&a[7].length<=a[8]&&e==z8;if(!(n||i))return c;r&k4&&(c[2]=a[2],s|=e&k4?0:rl);var t=a[3];if(t){var o=c[3];c[3]=o?O5(o,t,a[4]):t,c[4]=o?W1(c[3],H8):a[4]}return t=a[5],t&&(o=c[5],c[5]=o?I5(o,t,a[6]):t,c[6]=o?W1(c[5],H8):a[6]),t=a[7],t&&(c[7]=t),r&P1&&(c[8]=c[8]==null?a[8]:sl(c[8],a[8])),c[9]==null&&(c[9]=a[9]),c[0]=a[0],c[1]=s,c}var il="Expected a function",V8=1,tl=2,A4=8,_4=16,P4=32,M8=64,C8=Math.max;function ol(c,a,e,r,s,n,i,t){var o=a&tl;if(!o&&typeof c!="function")throw new TypeError(il);var f=r?r.length:0;if(f||(a&=~(P4|M8),r=s=void 0),i=i===void 0?i:C8(G4(i),0),t=t===void 0?t:G4(t),f-=s?s.length:0,a&M8){var l=r,m=s;r=s=void 0}var p=o?void 0:U5(c),h=[c,a,e,r,s,l,m,n,i,t];if(p&&nl(h,p),c=h[0],a=h[1],e=h[2],r=h[3],s=h[4],t=h[9]=h[9]===void 0?o?0:c.length:C8(h[9]-f,0),!t&&a&(A4|_4)&&(a&=~(A4|_4)),!a||a==V8)var b=co(c,a,e);else a==A4||a==_4?b=Jo(c,a,t):(a==P4||a==(V8|P4))&&!s.length?b=al(c,a,e,r):b=L6.apply(void 0,h);var g=p?E5:G5;return q5(g(b,h),c,a)}function K5(c,a,e){a=="__proto__"&&F3?F3(c,a,{configurable:!0,enumerable:!0,value:e,writable:!0}):c[a]=e}function Q5(c,a){return c===a||c!==c&&a!==a}var ll=Object.prototype,fl=ll.hasOwnProperty;function Z5(c,a,e){var r=c[a];(!(fl.call(c,a)&&Q5(r,e))||e===void 0&&!(a in c))&&K5(c,a,e)}function c3(c,a,e,r){var s=!e;e||(e={});for(var n=-1,i=a.length;++n<i;){var t=a[n],o=void 0;o===void 0&&(o=c[t]),s?K5(e,t,o):Z5(e,t,o)}return e}var L8=Math.max;function J5(c,a,e){return a=L8(a===void 0?c.length-1:a,0),function(){for(var r=arguments,s=-1,n=L8(r.length-a,0),i=Array(n);++s<n;)i[s]=r[a+s];s=-1;for(var t=Array(a+1);++s<a;)t[s]=r[s];return t[a]=e(i),H6(c,this,t)}}function vl(c,a){return V6(J5(c,a,K3),c+"")}var ml=9007199254740991;function c7(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=ml}function Z3(c){return c!=null&&c7(c.length)&&!K2(c)}var ul=Object.prototype;function g6(c){var a=c&&c.constructor,e=typeof a=="function"&&a.prototype||ul;return c===e}function pl(c,a){for(var e=-1,r=Array(c);++e<c;)r[e]=a(e);return r}var hl="[object Arguments]";function g8(c){return _2(c)&&U2(c)==hl}var a7=Object.prototype,Hl=a7.hasOwnProperty,zl=a7.propertyIsEnumerable,e7=g8(function(){return arguments}())?g8:function(c){return _2(c)&&Hl.call(c,"callee")&&!zl.call(c,"callee")};function dl(){return!1}var r7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,b8=r7&&typeof module=="object"&&module&&!module.nodeType&&module,Vl=b8&&b8.exports===r7,x8=Vl?s2.Buffer:void 0,Ml=x8?x8.isBuffer:void 0,s7=Ml||dl,Cl="[object Arguments]",Ll="[object Array]",gl="[object Boolean]",bl="[object Date]",xl="[object Error]",yl="[object Function]",Nl="[object Map]",wl="[object Number]",Sl="[object Object]",kl="[object RegExp]",Al="[object Set]",_l="[object String]",Pl="[object WeakMap]",Tl="[object ArrayBuffer]",Bl="[object DataView]",$l="[object Float32Array]",Fl="[object Float64Array]",Rl="[object Int8Array]",Dl="[object Int16Array]",El="[object Int32Array]",Ol="[object Uint8Array]",Il="[object Uint8ClampedArray]",Ul="[object Uint16Array]",Wl="[object Uint32Array]",q={};q[$l]=q[Fl]=q[Rl]=q[Dl]=q[El]=q[Ol]=q[Il]=q[Ul]=q[Wl]=!0;q[Cl]=q[Ll]=q[Tl]=q[gl]=q[Bl]=q[bl]=q[xl]=q[yl]=q[Nl]=q[wl]=q[Sl]=q[kl]=q[Al]=q[_l]=q[Pl]=!1;function Gl(c){return _2(c)&&c7(c.length)&&!!q[U2(c)]}function b6(c){return function(a){return c(a)}}var n7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,F1=n7&&typeof module=="object"&&module&&!module.nodeType&&module,jl=F1&&F1.exports===n7,T4=jl&&F5.process,V1=function(){try{var c=F1&&F1.require&&F1.require("util").types;return c||T4&&T4.binding&&T4.binding("util")}catch{}}(),y8=V1&&V1.isTypedArray,ql=y8?b6(y8):Gl,Yl=Object.prototype,Xl=Yl.hasOwnProperty;function i7(c,a){var e=d2(c),r=!e&&e7(c),s=!e&&!r&&s7(c),n=!e&&!r&&!s&&ql(c),i=e||r||s||n,t=i?pl(c.length,String):[],o=t.length;for(var f in c)(a||Xl.call(c,f))&&!(i&&(f=="length"||s&&(f=="offset"||f=="parent")||n&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||X5(f,o)))&&t.push(f);return t}function t7(c,a){return function(e){return c(a(e))}}var Kl=t7(Object.keys,Object),Ql=Object.prototype,Zl=Ql.hasOwnProperty;function Jl(c){if(!g6(c))return Kl(c);var a=[];for(var e in Object(c))Zl.call(c,e)&&e!="constructor"&&a.push(e);return a}function a3(c){return Z3(c)?i7(c):Jl(c)}function cf(c){var a=[];if(c!=null)for(var e in Object(c))a.push(e);return a}var af=Object.prototype,ef=af.hasOwnProperty;function rf(c){if(!g2(c))return cf(c);var a=g6(c),e=[];for(var r in c)r=="constructor"&&(a||!ef.call(c,r))||e.push(r);return e}function x6(c){return Z3(c)?i7(c,!0):rf(c)}var sf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nf=/^\w*$/;function tf(c,a){if(d2(c))return!1;var e=typeof c;return e=="number"||e=="symbol"||e=="boolean"||c==null||X3(c)?!0:nf.test(c)||!sf.test(c)||a!=null&&c in Object(a)}var G1=f1(Object,"create");function of(){this.__data__=G1?G1(null):{},this.size=0}function lf(c){var a=this.has(c)&&delete this.__data__[c];return this.size-=a?1:0,a}var ff="__lodash_hash_undefined__",vf=Object.prototype,mf=vf.hasOwnProperty;function uf(c){var a=this.__data__;if(G1){var e=a[c];return e===ff?void 0:e}return mf.call(a,c)?a[c]:void 0}var pf=Object.prototype,hf=pf.hasOwnProperty;function Hf(c){var a=this.__data__;return G1?a[c]!==void 0:hf.call(a,c)}var zf="__lodash_hash_undefined__";function df(c,a){var e=this.__data__;return this.size+=this.has(c)?0:1,e[c]=G1&&a===void 0?zf:a,this}function e1(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}e1.prototype.clear=of;e1.prototype.delete=lf;e1.prototype.get=uf;e1.prototype.has=Hf;e1.prototype.set=df;function Vf(){this.__data__=[],this.size=0}function J3(c,a){for(var e=c.length;e--;)if(Q5(c[e][0],a))return e;return-1}var Mf=Array.prototype,Cf=Mf.splice;function Lf(c){var a=this.__data__,e=J3(a,c);if(e<0)return!1;var r=a.length-1;return e==r?a.pop():Cf.call(a,e,1),--this.size,!0}function gf(c){var a=this.__data__,e=J3(a,c);return e<0?void 0:a[e][1]}function bf(c){return J3(this.__data__,c)>-1}function xf(c,a){var e=this.__data__,r=J3(e,c);return r<0?(++this.size,e.push([c,a])):e[r][1]=a,this}function P2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}P2.prototype.clear=Vf;P2.prototype.delete=Lf;P2.prototype.get=gf;P2.prototype.has=bf;P2.prototype.set=xf;var j1=f1(s2,"Map");function yf(){this.size=0,this.__data__={hash:new e1,map:new(j1||P2),string:new e1}}function Nf(c){var a=typeof c;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?c!=="__proto__":c===null}function c4(c,a){var e=c.__data__;return Nf(a)?e[typeof a=="string"?"string":"hash"]:e.map}function wf(c){var a=c4(this,c).delete(c);return this.size-=a?1:0,a}function Sf(c){return c4(this,c).get(c)}function kf(c){return c4(this,c).has(c)}function Af(c,a){var e=c4(this,c),r=e.size;return e.set(c,a),this.size+=e.size==r?0:1,this}function W2(c){var a=-1,e=c==null?0:c.length;for(this.clear();++a<e;){var r=c[a];this.set(r[0],r[1])}}W2.prototype.clear=yf;W2.prototype.delete=wf;W2.prototype.get=Sf;W2.prototype.has=kf;W2.prototype.set=Af;var _f="Expected a function";function y6(c,a){if(typeof c!="function"||a!=null&&typeof a!="function")throw new TypeError(_f);var e=function(){var r=arguments,s=a?a.apply(this,r):r[0],n=e.cache;if(n.has(s))return n.get(s);var i=c.apply(this,r);return e.cache=n.set(s,i)||n,i};return e.cache=new(y6.Cache||W2),e}y6.Cache=W2;var Pf=500;function Tf(c){var a=y6(c,function(r){return e.size===Pf&&e.clear(),r}),e=a.cache;return a}var Bf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$f=/\\(\\)?/g,Ff=Tf(function(c){var a=[];return c.charCodeAt(0)===46&&a.push(""),c.replace(Bf,function(e,r,s,n){a.push(s?n.replace($f,"$1"):r||e)}),a});function Rf(c){return c==null?"":D5(c)}function N6(c,a){return d2(c)?c:tf(c,a)?[c]:Ff(Rf(c))}var Df=1/0;function o7(c){if(typeof c=="string"||X3(c))return c;var a=c+"";return a=="0"&&1/c==-Df?"-0":a}function Ef(c,a){a=N6(a,c);for(var e=0,r=a.length;c!=null&&e<r;)c=c[o7(a[e++])];return e&&e==r?c:void 0}function w6(c,a){for(var e=-1,r=a.length,s=c.length;++e<r;)c[s+e]=a[e];return c}var N8=L2?L2.isConcatSpreadable:void 0;function Of(c){return d2(c)||e7(c)||!!(N8&&c&&c[N8])}function If(c,a,e,r,s){var n=-1,i=c.length;for(e||(e=Of),s||(s=[]);++n<i;){var t=c[n];e(t)?w6(s,t):s[s.length]=t}return s}function Uf(c){var a=c==null?0:c.length;return a?If(c):[]}function Wf(c){return V6(J5(c,void 0,Uf),c+"")}var S6=t7(Object.getPrototypeOf,Object),Gf="[object Object]",jf=Function.prototype,qf=Object.prototype,l7=jf.toString,Yf=qf.hasOwnProperty,Xf=l7.call(Object);function Kf(c){if(!_2(c)||U2(c)!=Gf)return!1;var a=S6(c);if(a===null)return!0;var e=Yf.call(a,"constructor")&&a.constructor;return typeof e=="function"&&e instanceof e&&l7.call(e)==Xf}var Qf=1,Zf=32,R3=vl(function(c,a,e){var r=Qf;if(e.length){var s=W1(e,C6(R3));r|=Zf}return ol(c,r,a,e,s)});R3.placeholder={};function Jf(c,a,e){var r=-1,s=c.length;a<0&&(a=-a>s?0:s+a),e=e>s?s:e,e<0&&(e+=s),s=a>e?0:e-a>>>0,a>>>=0;for(var n=Array(s);++r<s;)n[r]=c[r+a];return n}function cv(){this.__data__=new P2,this.size=0}function av(c){var a=this.__data__,e=a.delete(c);return this.size=a.size,e}function ev(c){return this.__data__.get(c)}function rv(c){return this.__data__.has(c)}var sv=200;function nv(c,a){var e=this.__data__;if(e instanceof P2){var r=e.__data__;if(!j1||r.length<sv-1)return r.push([c,a]),this.size=++e.size,this;e=this.__data__=new W2(r)}return e.set(c,a),this.size=e.size,this}function w1(c){var a=this.__data__=new P2(c);this.size=a.size}w1.prototype.clear=cv;w1.prototype.delete=av;w1.prototype.get=ev;w1.prototype.has=rv;w1.prototype.set=nv;function iv(c,a){return c&&c3(a,a3(a),c)}function tv(c,a){return c&&c3(a,x6(a),c)}var f7=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w8=f7&&typeof module=="object"&&module&&!module.nodeType&&module,ov=w8&&w8.exports===f7,S8=ov?s2.Buffer:void 0,k8=S8?S8.allocUnsafe:void 0;function lv(c,a){if(a)return c.slice();var e=c.length,r=k8?k8(e):new c.constructor(e);return c.copy(r),r}function fv(c,a){for(var e=-1,r=c==null?0:c.length,s=0,n=[];++e<r;){var i=c[e];a(i,e,c)&&(n[s++]=i)}return n}function v7(){return[]}var vv=Object.prototype,mv=vv.propertyIsEnumerable,A8=Object.getOwnPropertySymbols,k6=A8?function(c){return c==null?[]:(c=Object(c),fv(A8(c),function(a){return mv.call(c,a)}))}:v7;function uv(c,a){return c3(c,k6(c),a)}var pv=Object.getOwnPropertySymbols,m7=pv?function(c){for(var a=[];c;)w6(a,k6(c)),c=S6(c);return a}:v7;function hv(c,a){return c3(c,m7(c),a)}function u7(c,a,e){var r=a(c);return d2(c)?r:w6(r,e(c))}function Hv(c){return u7(c,a3,k6)}function p7(c){return u7(c,x6,m7)}var j4=f1(s2,"DataView"),q4=f1(s2,"Promise"),Y4=f1(s2,"Set"),_8="[object Map]",zv="[object Object]",P8="[object Promise]",T8="[object Set]",B8="[object WeakMap]",$8="[object DataView]",dv=l1(j4),Vv=l1(j1),Mv=l1(q4),Cv=l1(Y4),Lv=l1(I1),x2=U2;(j4&&x2(new j4(new ArrayBuffer(1)))!=$8||j1&&x2(new j1)!=_8||q4&&x2(q4.resolve())!=P8||Y4&&x2(new Y4)!=T8||I1&&x2(new I1)!=B8)&&(x2=function(c){var a=U2(c),e=a==zv?c.constructor:void 0,r=e?l1(e):"";if(r)switch(r){case dv:return $8;case Vv:return _8;case Mv:return P8;case Cv:return T8;case Lv:return B8}return a});var gv=Object.prototype,bv=gv.hasOwnProperty;function xv(c){var a=c.length,e=new c.constructor(a);return a&&typeof c[0]=="string"&&bv.call(c,"index")&&(e.index=c.index,e.input=c.input),e}var F8=s2.Uint8Array;function A6(c){var a=new c.constructor(c.byteLength);return new F8(a).set(new F8(c)),a}function yv(c,a){var e=a?A6(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.byteLength)}var Nv=/\w*$/;function wv(c){var a=new c.constructor(c.source,Nv.exec(c));return a.lastIndex=c.lastIndex,a}var R8=L2?L2.prototype:void 0,D8=R8?R8.valueOf:void 0;function Sv(c){return D8?Object(D8.call(c)):{}}function kv(c,a){var e=a?A6(c.buffer):c.buffer;return new c.constructor(e,c.byteOffset,c.length)}var Av="[object Boolean]",_v="[object Date]",Pv="[object Map]",Tv="[object Number]",Bv="[object RegExp]",$v="[object Set]",Fv="[object String]",Rv="[object Symbol]",Dv="[object ArrayBuffer]",Ev="[object DataView]",Ov="[object Float32Array]",Iv="[object Float64Array]",Uv="[object Int8Array]",Wv="[object Int16Array]",Gv="[object Int32Array]",jv="[object Uint8Array]",qv="[object Uint8ClampedArray]",Yv="[object Uint16Array]",Xv="[object Uint32Array]";function Kv(c,a,e){var r=c.constructor;switch(a){case Dv:return A6(c);case Av:case _v:return new r(+c);case Ev:return yv(c,e);case Ov:case Iv:case Uv:case Wv:case Gv:case jv:case qv:case Yv:case Xv:return kv(c,e);case Pv:return new r;case Tv:case Fv:return new r(c);case Bv:return wv(c);case $v:return new r;case Rv:return Sv(c)}}function Qv(c){return typeof c.constructor=="function"&&!g6(c)?Q3(S6(c)):{}}var Zv="[object Map]";function Jv(c){return _2(c)&&x2(c)==Zv}var E8=V1&&V1.isMap,cm=E8?b6(E8):Jv,am="[object Set]";function em(c){return _2(c)&&x2(c)==am}var O8=V1&&V1.isSet,rm=O8?b6(O8):em,sm=1,nm=2,im=4,h7="[object Arguments]",tm="[object Array]",om="[object Boolean]",lm="[object Date]",fm="[object Error]",H7="[object Function]",vm="[object GeneratorFunction]",mm="[object Map]",um="[object Number]",z7="[object Object]",pm="[object RegExp]",hm="[object Set]",Hm="[object String]",zm="[object Symbol]",dm="[object WeakMap]",Vm="[object ArrayBuffer]",Mm="[object DataView]",Cm="[object Float32Array]",Lm="[object Float64Array]",gm="[object Int8Array]",bm="[object Int16Array]",xm="[object Int32Array]",ym="[object Uint8Array]",Nm="[object Uint8ClampedArray]",wm="[object Uint16Array]",Sm="[object Uint32Array]",G={};G[h7]=G[tm]=G[Vm]=G[Mm]=G[om]=G[lm]=G[Cm]=G[Lm]=G[gm]=G[bm]=G[xm]=G[mm]=G[um]=G[z7]=G[pm]=G[hm]=G[Hm]=G[zm]=G[ym]=G[Nm]=G[wm]=G[Sm]=!0;G[fm]=G[H7]=G[dm]=!1;function k3(c,a,e,r,s,n){var i,t=a&sm,o=a&nm,f=a&im;if(e&&(i=s?e(c,r,s,n):e(c)),i!==void 0)return i;if(!g2(c))return c;var l=d2(c);if(l){if(i=xv(c),!t)return d6(c,i)}else{var m=x2(c),p=m==H7||m==vm;if(s7(c))return lv(c,t);if(m==z7||m==h7||p&&!s){if(i=o||p?{}:Qv(c),!t)return o?hv(c,tv(i,c)):uv(c,iv(i,c))}else{if(!G[m])return s?c:{};i=Kv(c,m,t)}}n||(n=new w1);var h=n.get(c);if(h)return h;n.set(c,i),rm(c)?c.forEach(function(d){i.add(k3(d,a,e,d,c,n))}):cm(c)&&c.forEach(function(d,M){i.set(M,k3(d,a,e,M,c,n))});var b=f?o?p7:Hv:o?x6:a3,g=l?void 0:b(c);return M6(g||c,function(d,M){g&&(M=d,d=c[M]),Z5(i,M,k3(d,a,e,M,c,n))}),i}function km(c){return function(a,e,r){for(var s=-1,n=Object(a),i=r(a),t=i.length;t--;){var o=i[++s];if(e(n[o],o,n)===!1)break}return a}}var Am=km();function _m(c,a){return c&&Am(c,a,a3)}function Pm(c,a){return function(e,r){if(e==null)return e;if(!Z3(e))return c(e,r);for(var s=e.length,n=-1,i=Object(e);++n<s&&r(i[n],n,i)!==!1;);return e}}var Tm=Pm(_m),B4=function(){return s2.Date.now()},Bm="Expected a function",$m=Math.max,Fm=Math.min;function X4(c,a,e){var r,s,n,i,t,o,f=0,l=!1,m=!1,p=!0;if(typeof c!="function")throw new TypeError(Bm);a=W4(a)||0,g2(e)&&(l=!!e.leading,m="maxWait"in e,n=m?$m(W4(e.maxWait)||0,a):n,p="trailing"in e?!!e.trailing:p);function h(A){var F=r,U=s;return r=s=void 0,f=A,i=c.apply(U,F),i}function b(A){return f=A,t=setTimeout(M,a),l?h(A):i}function g(A){var F=A-o,U=A-f,O=a-F;return m?Fm(O,n-U):O}function d(A){var F=A-o,U=A-f;return o===void 0||F>=a||F<0||m&&U>=n}function M(){var A=B4();if(d(A))return C(A);t=setTimeout(M,g(A))}function C(A){return t=void 0,p&&r?h(A):(r=s=void 0,i)}function y(){t!==void 0&&clearTimeout(t),f=0,r=o=s=t=void 0}function x(){return t===void 0?i:C(B4())}function P(){var A=B4(),F=d(A);if(r=arguments,s=this,o=A,F){if(t===void 0)return b(o);if(m)return clearTimeout(t),t=setTimeout(M,a),h(o)}return t===void 0&&(t=setTimeout(M,a)),i}return P.cancel=y,P.flush=x,P}function Rm(c){var a=c==null?0:c.length;return a?c[a-1]:void 0}function Dm(c){return typeof c=="function"?c:K3}function d7(c,a){var e=d2(c)?M6:Tm;return e(c,Dm(a))}var Em="[object String]";function Om(c){return typeof c=="string"||!d2(c)&&_2(c)&&U2(c)==Em}function Im(c,a){return h6(a,function(e){return c[e]})}function Um(c){return c==null?[]:Im(c,a3(c))}var Wm=Math.max;function Gm(c,a,e,r){c=Z3(c)?c:Um(c),e=e&&!r?G4(e):0;var s=c.length;return e<0&&(e=Wm(s+e,0)),Om(c)?e<=s&&c.indexOf(a,e)>-1:!!s&&j5(c,a,e)>-1}function jm(c,a){return a.length<2?c:Ef(c,Jf(a,0,-1))}function qm(c){return c==null}function Ym(c,a){return a=N6(a,c),c=jm(c,a),c==null||delete c[o7(Rm(a))]}function Xm(c){return Kf(c)?void 0:c}var Km=1,Qm=2,Zm=4,Jm=Wf(function(c,a){var e={};if(c==null)return e;var r=!1;a=h6(a,function(n){return n=N6(n,c),r||(r=n.length>1),n}),c3(c,p7(c),e),r&&(e=k3(e,Km|Qm|Zm,Xm));for(var s=a.length;s--;)Ym(e,a[s]);return e}),cu="Expected a function";function au(c,a,e){var r=!0,s=!0;if(typeof c!="function")throw new TypeError(cu);return g2(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),X4(c,a,{leading:r,maxWait:a,trailing:s})}function eu(c){return e=>d7(c,r=>e.use(r))}const v1=c=>(c.install=a=>{const e=c.name;a.component(e,c)},c);function I8(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function N(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?I8(Object(e),!0).forEach(function(r){Z(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):I8(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function D3(c){"@babel/helpers - typeof";return D3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},D3(c)}function ru(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function su(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function nu(c,a,e){return a&&su(c.prototype,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function Z(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function _6(c,a){return tu(c)||lu(c,a)||V7(c,a)||vu()}function e3(c){return iu(c)||ou(c)||V7(c)||fu()}function iu(c){if(Array.isArray(c))return K4(c)}function tu(c){if(Array.isArray(c))return c}function ou(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function lu(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,t;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(o){n=!0,t=o}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw t}}return r}}function V7(c,a){if(c){if(typeof c=="string")return K4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return K4(c,a)}}function K4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function fu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U8=function(){},P6={},M7={},C7=null,L7={mark:U8,measure:U8};try{typeof window<"u"&&(P6=window),typeof document<"u"&&(M7=document),typeof MutationObserver<"u"&&(C7=MutationObserver),typeof performance<"u"&&(L7=performance)}catch{}var mu=P6.navigator||{},W8=mu.userAgent,G8=W8===void 0?"":W8,D2=P6,X=M7,j8=C7,d3=L7;D2.document;var T2=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",g7=~G8.indexOf("MSIE")||~G8.indexOf("Trident/"),V3,M3,C3,L3,g3,w2="___FONT_AWESOME___",Q4=16,b7="fa",x7="svg-inline--fa",r1="data-fa-i2svg",Z4="data-fa-pseudo-element",uu="data-fa-pseudo-element-pending",T6="data-prefix",B6="data-icon",q8="fontawesome-i2svg",pu="async",hu=["HTML","HEAD","STYLE","SCRIPT"],y7=function(){try{return!0}catch{return!1}}(),Y="classic",Q="sharp",$6=[Y,Q];function r3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[Y]}})}var q1=r3((V3={},Z(V3,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Z(V3,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),V3)),Y1=r3((M3={},Z(M3,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Z(M3,Q,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),M3)),X1=r3((C3={},Z(C3,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Z(C3,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),C3)),Hu=r3((L3={},Z(L3,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Z(L3,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),L3)),zu=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,N7="fa-layers-text",du=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Vu=r3((g3={},Z(g3,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Z(g3,Q,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),g3)),w7=[1,2,3,4,5,6,7,8,9,10],Mu=w7.concat([11,12,13,14,15,16,17,18,19,20]),Cu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K1=new Set;Object.keys(Y1[Y]).map(K1.add.bind(K1));Object.keys(Y1[Q]).map(K1.add.bind(K1));var Lu=[].concat($6,e3(K1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q2.GROUP,Q2.SWAP_OPACITY,Q2.PRIMARY,Q2.SECONDARY]).concat(w7.map(function(c){return"".concat(c,"x")})).concat(Mu.map(function(c){return"w-".concat(c)})),R1=D2.FontAwesomeConfig||{};function gu(c){var a=X.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function bu(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(X&&typeof X.querySelector=="function"){var xu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xu.forEach(function(c){var a=_6(c,2),e=a[0],r=a[1],s=bu(gu(e));s!=null&&(R1[r]=s)})}var S7={styleDefault:"solid",familyDefault:"classic",cssPrefix:b7,replacementClass:x7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};R1.familyPrefix&&(R1.cssPrefix=R1.familyPrefix);var M1=N(N({},S7),R1);M1.autoReplaceSvg||(M1.observeMutations=!1);var T={};Object.keys(S7).forEach(function(c){Object.defineProperty(T,c,{enumerable:!0,set:function(e){M1[c]=e,D1.forEach(function(r){return r(T)})},get:function(){return M1[c]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(a){M1.cssPrefix=a,D1.forEach(function(e){return e(T)})},get:function(){return M1.cssPrefix}});D2.FontAwesomeConfig=T;var D1=[];function yu(c){return D1.push(c),function(){D1.splice(D1.indexOf(c),1)}}var R2=Q4,V2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nu(c){if(!(!c||!T2)){var a=X.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=X.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return X.head.insertBefore(a,r),c}}var wu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q1(){for(var c=12,a="";c-- >0;)a+=wu[Math.random()*62|0];return a}function S1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function F6(c){return c.classList?S1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function k7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Su(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(k7(c[e]),'" ')},"").trim()}function a4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function R6(c){return c.size!==V2.size||c.x!==V2.x||c.y!==V2.y||c.rotate!==V2.rotate||c.flipX||c.flipY}function ku(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(t)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:o,path:f}}function Au(c){var a=c.transform,e=c.width,r=e===void 0?Q4:e,s=c.height,n=s===void 0?Q4:s,i=c.startCentered,t=i===void 0?!1:i,o="";return t&&g7?o+="translate(".concat(a.x/R2-r/2,"em, ").concat(a.y/R2-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/R2,"em), calc(-50% + ").concat(a.y/R2,"em)) "):o+="translate(".concat(a.x/R2,"em, ").concat(a.y/R2,"em) "),o+="scale(".concat(a.size/R2*(a.flipX?-1:1),", ").concat(a.size/R2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var _u=`:root, :host {
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
}`;function A7(){var c=b7,a=x7,e=T.cssPrefix,r=T.replacementClass,s=_u;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(t,".".concat(r))}return s}var Y8=!1;function $4(){T.autoAddCss&&!Y8&&(Nu(A7()),Y8=!0)}var Pu={mixout:function(){return{dom:{css:A7,insertCss:$4}}},hooks:function(){return{beforeDOMElementCreation:function(){$4()},beforeI2svg:function(){$4()}}}},S2=D2||{};S2[w2]||(S2[w2]={});S2[w2].styles||(S2[w2].styles={});S2[w2].hooks||(S2[w2].hooks={});S2[w2].shims||(S2[w2].shims=[]);var z2=S2[w2],_7=[],Tu=function c(){X.removeEventListener("DOMContentLoaded",c),E3=1,_7.map(function(a){return a()})},E3=!1;T2&&(E3=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),E3||X.addEventListener("DOMContentLoaded",Tu));function Bu(c){T2&&(E3?setTimeout(c,0):_7.push(c))}function s3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?k7(c):"<".concat(a," ").concat(Su(r),">").concat(n.map(s3).join(""),"</").concat(a,">")}function X8(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var F4=function(a,e,r,s){var n=Object.keys(a),i=n.length,t=e,o,f,l;for(r===void 0?(o=1,l=a[n[0]]):(o=0,l=r);o<i;o++)f=n[o],l=t(l,a[f],f,a);return l};function $u(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function J4(c){var a=$u(c);return a.length===1?a[0].toString(16):null}function Fu(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function K8(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function c6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=K8(a);typeof z2.hooks.addPack=="function"&&!s?z2.hooks.addPack(c,K8(a)):z2.styles[c]=N(N({},z2.styles[c]||{}),n),c==="fas"&&c6("fa",a)}var b3,x3,y3,u1=z2.styles,Ru=z2.shims,Du=(b3={},Z(b3,Y,Object.values(X1[Y])),Z(b3,Q,Object.values(X1[Q])),b3),D6=null,P7={},T7={},B7={},$7={},F7={},Eu=(x3={},Z(x3,Y,Object.keys(q1[Y])),Z(x3,Q,Object.keys(q1[Q])),x3);function Ou(c){return~Lu.indexOf(c)}function Iu(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Ou(s)?s:null}var R7=function(){var a=function(n){return F4(u1,function(i,t,o){return i[o]=F4(t,n,{}),i},{})};P7=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){s[o.toString(16)]=i})}return s}),T7=a(function(s,n,i){if(s[i]=i,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){s[o]=i})}return s}),F7=a(function(s,n,i){var t=n[2];return s[i]=i,t.forEach(function(o){s[o]=i}),s});var e="far"in u1||T.autoFetchSvg,r=F4(Ru,function(s,n){var i=n[0],t=n[1],o=n[2];return t==="far"&&!e&&(t="fas"),typeof i=="string"&&(s.names[i]={prefix:t,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:t,iconName:o}),s},{names:{},unicodes:{}});B7=r.names,$7=r.unicodes,D6=e4(T.styleDefault,{family:T.familyDefault})};yu(function(c){D6=e4(c.styleDefault,{family:T.familyDefault})});R7();function E6(c,a){return(P7[c]||{})[a]}function Uu(c,a){return(T7[c]||{})[a]}function Z2(c,a){return(F7[c]||{})[a]}function D7(c){return B7[c]||{prefix:null,iconName:null}}function Wu(c){var a=$7[c],e=E6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function E2(){return D6}var O6=function(){return{prefix:null,iconName:null,rest:[]}};function e4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?Y:e,s=q1[r][c],n=Y1[r][c]||Y1[r][s],i=c in z2.styles?c:null;return n||i||null}var Q8=(y3={},Z(y3,Y,Object.keys(X1[Y])),Z(y3,Q,Object.keys(X1[Q])),y3);function r4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},Z(a,Y,"".concat(T.cssPrefix,"-").concat(Y)),Z(a,Q,"".concat(T.cssPrefix,"-").concat(Q)),a),i=null,t=Y;(c.includes(n[Y])||c.some(function(f){return Q8[Y].includes(f)}))&&(t=Y),(c.includes(n[Q])||c.some(function(f){return Q8[Q].includes(f)}))&&(t=Q);var o=c.reduce(function(f,l){var m=Iu(T.cssPrefix,l);if(u1[l]?(l=Du[t].includes(l)?Hu[t][l]:l,i=l,f.prefix=l):Eu[t].indexOf(l)>-1?(i=l,f.prefix=e4(l,{family:t})):m?f.iconName=m:l!==T.replacementClass&&l!==n[Y]&&l!==n[Q]&&f.rest.push(l),!s&&f.prefix&&f.iconName){var p=i==="fa"?D7(f.iconName):{},h=Z2(f.prefix,f.iconName);p.prefix&&(i=null),f.iconName=p.iconName||h||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!u1.far&&u1.fas&&!T.autoFetchSvg&&(f.prefix="fas")}return f},O6());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===Q&&(u1.fass||T.autoFetchSvg)&&(o.prefix="fass",o.iconName=Z2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=E2()||"fas"),o}var Gu=function(){function c(){ru(this,c),this.definitions={}}return nu(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(t){e.definitions[t]=N(N({},e.definitions[t]||{}),i[t]),c6(t,i[t]);var o=X1[Y][t];o&&c6(o,i[t]),R7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],t=i.prefix,o=i.iconName,f=i.icon,l=f[2];e[t]||(e[t]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[t][m]=f)}),e[t][o]=f}),e}}]),c}(),Z8=[],p1={},h1={},ju=Object.keys(h1);function qu(c,a){var e=a.mixoutsTo;return Z8=c,p1={},Object.keys(h1).forEach(function(r){ju.indexOf(r)===-1&&delete h1[r]}),Z8.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),D3(s[i])==="object"&&Object.keys(s[i]).forEach(function(t){e[i]||(e[i]={}),e[i][t]=s[i][t]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){p1[i]||(p1[i]=[]),p1[i].push(n[i])})}r.provides&&r.provides(h1)}),e}function a6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=p1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function s1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=p1[c]||[];s.forEach(function(n){n.apply(null,e)})}function k2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return h1[c]?h1[c].apply(null,a):void 0}function e6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||E2();if(a)return a=Z2(e,a)||a,X8(E7.definitions,e,a)||X8(z2.styles,e,a)}var E7=new Gu,Yu=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,s1("noAuto")},Xu={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T2?(s1("beforeI2svg",a),k2("pseudoElements2svg",a),k2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Bu(function(){Qu({autoReplaceSvgRoot:e}),s1("watch",a)})}},Ku={icon:function(a){if(a===null)return null;if(D3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=e4(a[0]);return{prefix:r,iconName:Z2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.cssPrefix,"-"))>-1||a.match(zu))){var s=r4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||E2(),iconName:Z2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=E2();return{prefix:n,iconName:Z2(n,a)||a}}}},m2={noAuto:Yu,config:T,dom:Xu,parse:Ku,library:E7,findIconDefinition:e6,toHtml:s3},Qu=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?X:e;(Object.keys(z2.styles).length>0||T.autoFetchSvg)&&T2&&T.autoReplaceSvg&&m2.dom.i2svg({node:r})};function s4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return s3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(T2){var r=X.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Zu(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(R6(i)&&e.found&&!r.found){var t=e.width,o=e.height,f={x:t/o/2,y:.5};s.style=a4(N(N({},n),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Ju(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(T.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},s),{},{id:i}),children:r}]}]}function I6(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,t=c.symbol,o=c.title,f=c.maskId,l=c.titleId,m=c.extra,p=c.watchable,h=p===void 0?!1:p,b=r.found?r:e,g=b.width,d=b.height,M=s==="fak",C=[T.replacementClass,n?"".concat(T.cssPrefix,"-").concat(n):""].filter(function(O){return m.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(m.classes).join(" "),y={children:[],attributes:N(N({},m.attributes),{},{"data-prefix":s,"data-icon":n,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(d)})},x=M&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/d*16*.0625,"em")}:{};h&&(y.attributes[r1]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(l||Q1())},children:[o]}),delete y.attributes.title);var P=N(N({},y),{},{prefix:s,iconName:n,main:e,mask:r,maskId:f,transform:i,symbol:t,styles:N(N({},x),m.styles)}),A=r.found&&e.found?k2("generateAbstractMask",P)||{children:[],attributes:{}}:k2("generateAbstractIcon",P)||{children:[],attributes:{}},F=A.children,U=A.attributes;return P.children=F,P.attributes=U,t?Ju(P):Zu(P)}function J8(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,t=c.watchable,o=t===void 0?!1:t,f=N(N(N({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(f[r1]="");var l=N({},i.styles);R6(s)&&(l.transform=Au({transform:s,startCentered:!0,width:e,height:r}),l["-webkit-transform"]=l.transform);var m=a4(l);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[a]}),n&&p.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),p}function cp(c){var a=c.content,e=c.title,r=c.extra,s=N(N(N({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=a4(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var R4=z2.styles;function r6(c){var a=c[0],e=c[1],r=c.slice(4),s=_6(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(Q2.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var ap={found:!1,width:512,height:512};function ep(c,a){!y7&&!T.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function s6(c,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=E2()),new Promise(function(r,s){if(k2("missingIconAbstract"),e==="fa"){var n=D7(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&R4[a]&&R4[a][c]){var i=R4[a][c];return r(r6(i))}ep(c,a),r(N(N({},ap),{},{icon:T.showMissingIcons&&c?k2("missingIconAbstract")||{}:{}}))})}var c5=function(){},n6=T.measurePerformance&&d3&&d3.mark&&d3.measure?d3:{mark:c5,measure:c5},B1='FA "6.5.2"',rp=function(a){return n6.mark("".concat(B1," ").concat(a," begins")),function(){return O7(a)}},O7=function(a){n6.mark("".concat(B1," ").concat(a," ends")),n6.measure("".concat(B1," ").concat(a),"".concat(B1," ").concat(a," begins"),"".concat(B1," ").concat(a," ends"))},U6={begin:rp,end:O7},A3=function(){};function a5(c){var a=c.getAttribute?c.getAttribute(r1):null;return typeof a=="string"}function sp(c){var a=c.getAttribute?c.getAttribute(T6):null,e=c.getAttribute?c.getAttribute(B6):null;return a&&e}function np(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(T.replacementClass)}function ip(){if(T.autoReplaceSvg===!0)return _3.replace;var c=_3[T.autoReplaceSvg];return c||_3.replace}function tp(c){return X.createElementNS("http://www.w3.org/2000/svg",c)}function op(c){return X.createElement(c)}function I7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?tp:op:e;if(typeof c=="string")return X.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(I7(i,{ceFn:r}))}),s}function lp(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var _3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(I7(s),e)}),e.getAttribute(r1)===null&&T.keepOriginalSource){var r=X.createComment(lp(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~F6(e).indexOf(T.replacementClass))return _3.replace(a);var s=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(t,o){return o===T.replacementClass||o.match(s)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(t){return s3(t)}).join(`
`);e.setAttribute(r1,""),e.innerHTML=i}};function e5(c){c()}function U7(c,a){var e=typeof a=="function"?a:A3;if(c.length===0)e();else{var r=e5;T.mutateApproach===pu&&(r=D2.requestAnimationFrame||e5),r(function(){var s=ip(),n=U6.begin("mutate");c.map(s),n(),e()})}}var W6=!1;function W7(){W6=!0}function i6(){W6=!1}var O3=null;function r5(c){if(j8&&T.observeMutations){var a=c.treeCallback,e=a===void 0?A3:a,r=c.nodeCallback,s=r===void 0?A3:r,n=c.pseudoElementsCallback,i=n===void 0?A3:n,t=c.observeMutationsRoot,o=t===void 0?X:t;O3=new j8(function(f){if(!W6){var l=E2();S1(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!a5(m.addedNodes[0])&&(T.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&a5(m.target)&&~Cu.indexOf(m.attributeName))if(m.attributeName==="class"&&sp(m.target)){var p=r4(F6(m.target)),h=p.prefix,b=p.iconName;m.target.setAttribute(T6,h||l),b&&m.target.setAttribute(B6,b)}else np(m.target)&&s(m.target)})}}),T2&&O3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fp(){O3&&O3.disconnect()}function vp(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],t=n.slice(1);return i&&t.length>0&&(r[i]=t.join(":").trim()),r},{})),e}function mp(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=r4(F6(c));return s.prefix||(s.prefix=E2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Uu(s.prefix,c.innerText)||E6(s.prefix,J4(c.innerText))),!s.iconName&&T.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function up(c){var a=S1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Q1()):(a["aria-hidden"]="true",a.focusable="false")),a}function pp(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function s5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=mp(c),r=e.iconName,s=e.prefix,n=e.rest,i=up(c),t=a6("parseNodeAttributes",{},c),o=a.styleParser?vp(c):[];return N({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:V2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},t)}var hp=z2.styles;function G7(c){var a=T.autoReplaceSvg==="nest"?s5(c,{styleParser:!1}):s5(c);return~a.extra.classes.indexOf(N7)?k2("generateLayersText",c,a):k2("generateSvgReplacementMutation",c,a)}var O2=new Set;$6.map(function(c){O2.add("fa-".concat(c))});Object.keys(q1[Y]).map(O2.add.bind(O2));Object.keys(q1[Q]).map(O2.add.bind(O2));O2=e3(O2);function n5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T2)return Promise.resolve();var e=X.documentElement.classList,r=function(m){return e.add("".concat(q8,"-").concat(m))},s=function(m){return e.remove("".concat(q8,"-").concat(m))},n=T.autoFetchSvg?O2:$6.map(function(l){return"fa-".concat(l)}).concat(Object.keys(hp));n.includes("fa")||n.push("fa");var i=[".".concat(N7,":not([").concat(r1,"])")].concat(n.map(function(l){return".".concat(l,":not([").concat(r1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var t=[];try{t=S1(c.querySelectorAll(i))}catch{}if(t.length>0)r("pending"),s("complete");else return Promise.resolve();var o=U6.begin("onTree"),f=t.reduce(function(l,m){try{var p=G7(m);p&&l.push(p)}catch(h){y7||h.name==="MissingIcon"&&console.error(h)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(p){U7(p,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),o(),l()})}).catch(function(p){o(),m(p)})})}function Hp(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G7(c).then(function(e){e&&U7([e],a)})}function zp(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:e6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:e6(s||{})),c(r,N(N({},e),{},{mask:s}))}}var dp=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?V2:r,n=e.symbol,i=n===void 0?!1:n,t=e.mask,o=t===void 0?null:t,f=e.maskId,l=f===void 0?null:f,m=e.title,p=m===void 0?null:m,h=e.titleId,b=h===void 0?null:h,g=e.classes,d=g===void 0?[]:g,M=e.attributes,C=M===void 0?{}:M,y=e.styles,x=y===void 0?{}:y;if(a){var P=a.prefix,A=a.iconName,F=a.icon;return s4(N({type:"icon"},a),function(){return s1("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(p?C["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(b||Q1()):(C["aria-hidden"]="true",C.focusable="false")),I6({icons:{main:r6(F),mask:o?r6(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:A,transform:N(N({},V2),s),symbol:i,title:p,maskId:l,titleId:b,extra:{attributes:C,styles:x,classes:d}})})}},Vp={mixout:function(){return{icon:zp(dp)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=n5,e.nodeCallback=Hp,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?X:r,n=e.callback,i=n===void 0?function(){}:n;return n5(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,t=r.prefix,o=r.transform,f=r.symbol,l=r.mask,m=r.maskId,p=r.extra;return new Promise(function(h,b){Promise.all([s6(s,t),l.iconName?s6(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var d=_6(g,2),M=d[0],C=d[1];h([e,I6({icons:{main:M,mask:C},prefix:t,iconName:s,transform:o,symbol:f,maskId:m,title:n,titleId:i,extra:p,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,t=e.styles,o=a4(t);o.length>0&&(s.style=o);var f;return R6(i)&&(f=k2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(f||n.icon),{children:r,attributes:s}}}},Mp={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return s4({type:"layer"},function(){s1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(t){Array.isArray(t)?t.map(function(o){i=i.concat(o.abstract)}):i=i.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(e3(n)).join(" ")},children:i}]})}}}},Cp={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,t=i===void 0?[]:i,o=r.attributes,f=o===void 0?{}:o,l=r.styles,m=l===void 0?{}:l;return s4({type:"counter",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),cp({content:e.toString(),title:n,extra:{attributes:f,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(e3(t))}})})}}}},Lp={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?V2:s,i=r.title,t=i===void 0?null:i,o=r.classes,f=o===void 0?[]:o,l=r.attributes,m=l===void 0?{}:l,p=r.styles,h=p===void 0?{}:p;return s4({type:"text",content:e},function(){return s1("beforeDOMElementCreation",{content:e,params:r}),J8({content:e,transform:N(N({},V2),n),title:t,extra:{attributes:m,styles:h,classes:["".concat(T.cssPrefix,"-layers-text")].concat(e3(f))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,t=null,o=null;if(g7){var f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();t=l.width/f,o=l.height/f}return T.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,J8({content:e.innerHTML,width:t,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},gp=new RegExp('"',"ug"),i5=[1105920,1112319];function bp(c){var a=c.replace(gp,""),e=Fu(a,0),r=e>=i5[0]&&e<=i5[1],s=a.length===2?a[0]===a[1]:!1;return{value:J4(s?a[0]:a),isSecondary:r||s}}function t5(c,a){var e="".concat(uu).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=S1(c.children),i=n.filter(function(F){return F.getAttribute(Z4)===a})[0],t=D2.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(du),f=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(i&&!o)return c.removeChild(i),r();if(o&&l!=="none"&&l!==""){var m=t.getPropertyValue("content"),p=~["Sharp"].indexOf(o[2])?Q:Y,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?Y1[p][o[2].toLowerCase()]:Vu[p][f],b=bp(m),g=b.value,d=b.isSecondary,M=o[0].startsWith("FontAwesome"),C=E6(h,g),y=C;if(M){var x=Wu(g);x.iconName&&x.prefix&&(C=x.iconName,h=x.prefix)}if(C&&!d&&(!i||i.getAttribute(T6)!==h||i.getAttribute(B6)!==y)){c.setAttribute(e,y),i&&c.removeChild(i);var P=pp(),A=P.extra;A.attributes[Z4]=a,s6(C,h).then(function(F){var U=I6(N(N({},P),{},{icons:{main:F,mask:O6()},prefix:h,iconName:y,extra:A,watchable:!0})),O=X.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(O,c.firstChild):c.appendChild(O),O.outerHTML=U.map(function(K){return s3(K)}).join(`