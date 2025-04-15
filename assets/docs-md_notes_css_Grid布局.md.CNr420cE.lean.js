import{d as A,h as f,k as U,c as a,o,ai as j,m as e,an as W,F as q,E as M,q as V,s as B,_ as y,y as H,al as C,e as G,Q as L,p as J,J as x,a as D}from"./chunks/framework.exr04lwe.js";const T=s=>(V("data-v-69f922e9"),s=s(),B(),s),O={class:"box"},Q=T(()=>e("label",null,"设置子元素数量",-1)),K=T(()=>e("div",null,"单列布局",-1)),Z={class:"parent"},ee=T(()=>e("div",null,"多列布局",-1)),te={class:"parent2"},se=T(()=>e("div",null,"repeat 实现重复分配",-1)),ae={class:"parent3"},oe=A({__name:"demo1",setup(s){const n=f(3),u=U(()=>{let v=Math.abs(n.value);return v>5?5:Math.ceil(v)});return(v,h)=>(o(),a("div",O,[Q,j(e("input",{"onUpdate:modelValue":h[0]||(h[0]=i=>n.value=i),type:"number"},null,512),[[W,n.value]]),K,e("div",Z,[(o(!0),a(q,null,M(u.value,i=>(o(),a("div",{key:i,class:"child"}))),128))]),ee,e("div",te,[(o(!0),a(q,null,M(u.value,i=>(o(),a("div",{key:i,class:"child2"}))),128))]),se,e("div",ae,[(o(!0),a(q,null,M(u.value,i=>(o(),a("div",{key:i,class:"child3"}))),128))])]))}}),ie=y(oe,[["__scopeId","data-v-69f922e9"]]),F=s=>(V("data-v-f8adc082"),s=s(),B(),s),de={class:"box"},ne={class:"code-display"},le={class:"code"},ce=C('<div class="origin" data-v-f8adc082> .parent { </div><div class="grid-demo-color2" data-v-f8adc082> display: grid; </div><div class="grid-demo-color2" data-v-f8adc082> grid-template-columns: repeat(4, 1fr); </div><div class="grid-demo-color2" data-v-f8adc082> grid-template-rows:repeat(4, 1fr); </div><div class="origin" data-v-f8adc082> } </div><div class="origin" style="margin-top:20px;" data-v-f8adc082> .child { </div>',6),re=["innerHTML"],ue=F(()=>e("div",{class:"origin"}," } ",-1)),ve={class:"container"},_e=["onClick"],he={class:"square-list"},pe=F(()=>e("div",{class:"square-inner"},null,-1)),me=[pe],fe=A({__name:"demo2",setup(s){let n=0,u=0;const v=f(Array.from({length:16},()=>({selected:!1}))),h=f(!1),i=f({}),p=f([]),k=f(""),l=f("");H(()=>p.value,t=>{t.length>0&&(k.value=E(t,4))});function E(t,c){if(t.length==1){let b=Math.floor(t[0]/c)+1,P=t[0]%c+1;return l.value=`grid-row: ${b}; grid-column: ${P};`,` <div class="grid-demo-color2">grid-row: ${b}; </div><div class="grid-demo-color2">grid-column: ${P};</div>`}let d=t[0],m=t[t.length-1],r=Math.floor(d/c)+1,g=Math.floor(m/c)+1,_=d%c+1,$=m%c+1;return r==g?(l.value=`grid-row: ${r}; grid-column: ${_} / ${$+1};`,` <div class="grid-demo-color2">grid-row: ${r};</div> <div class="grid-demo-color2">grid-column: ${_} / ${$+1};</div>`):_==$?(l.value=`grid-row: ${r} / ${g+1}; grid-column: ${_};`,` <div class="grid-demo-color2">grid-row: ${r} / ${g+1};</div> <div class="grid-demo-color2">grid-column: ${_};</div>`):(l.value=`grid-row: ${r} / ${g+1}; grid-column: ${_} / ${$+1};`,` <div class="grid-demo-color2">grid-row: ${r} / ${g+1};</div> <div class="grid-demo-color2">grid-column: ${_} / ${$+1};</div>`)}function w(){v.value.forEach(t=>t.selected=!1),p.value=[],k.value="",l.value=""}function R(t,c){t.value=!0,p.value=[c]}function N(t){if(t.target.classList.contains("square")){h.value=!0;const c=t.target.parentElement.getBoundingClientRect();n=t.clientX-c.left,u=t.clientY-c.top,v.value.forEach(d=>d.selected=!1)}}function Y(t){if(h.value){const d=t.target.parentElement.getBoundingClientRect();let m=Math.min(t.clientX-d.left,n),r=Math.min(t.clientY-d.top,u),g=Math.abs(t.clientX-d.left-n),_=Math.abs(t.clientY-d.top-u);i.value={left:`${m}px`,top:`${r}px`,width:`${g}px`,height:`${_}px`},p.value=[],v.value.forEach(($,b)=>{let S=document.getElementsByClassName("square")[b].getBoundingClientRect(),X=S.right>d.left+m&&S.left<d.left+m+g&&S.bottom>d.top+r&&S.top<d.top+r+_;$.selected=X,X&&p.value.push(b)})}}function z(){h.value=!1,i.value={}}return(t,c)=>(o(),a("div",de,[e("div",{class:"reset-btn",onClick:w}," 重置 "),e("div",ne,[e("div",le,[ce,e("div",{innerHTML:k.value},null,8,re),ue]),e("div",ve,[e("div",{class:"square-bg",onMousedown:N,onMousemove:Y,onMouseup:z},[(o(!0),a(q,null,M(v.value,(d,m)=>(o(),a("div",{key:m,class:"square",onClick:r=>R(d,m)},null,8,_e))),128))],32),e("div",he,[l.value?(o(),a("div",{key:0,class:"square",style:L(l.value)},me,4)):G("",!0)]),h.value?(o(),a("div",{key:0,class:"selection-box",style:L(i.value)},null,4)):G("",!0)])])]))}}),ge=y(fe,[["__scopeId","data-v-f8adc082"]]),I=s=>(V("data-v-9e4701a3"),s=s(),B(),s),$e={class:"box"},ke={class:"display-box"},be=C('<div class="child" data-v-9e4701a3> 1 </div><div class="child" data-v-9e4701a3> 2 </div><div class="child" data-v-9e4701a3> 3 </div><div class="child" data-v-9e4701a3> 4 </div><div class="child" data-v-9e4701a3> 5 </div><div class="child" data-v-9e4701a3> 6 </div><div class="child" data-v-9e4701a3> 7 </div><div class="child" data-v-9e4701a3> 8 </div>',8),xe=[be],ye={class:"line"},Ee={ref:"codeRef",class:"code"},we=I(()=>e("div",{class:"origin"}," .parent { ",-1)),Se=I(()=>e("div",{class:"color2"}," display: grid; ",-1)),qe=I(()=>e("div",{class:"color2"}," grid-template-columns:repeat(auto-fit, minmax(100px, 1fr)); ",-1)),Me=I(()=>e("div",{class:"origin"}," } ",-1)),Ce=[we,Se,qe,Me],Te=A({__name:"demo3",setup(s){const n=f(450),u=f(null);function v(){let i=0,p=0;function k(l){function E(R){const N=R.clientX-p;n.value=i+N}function w(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",w)}document.addEventListener("mousemove",E),document.addEventListener("mouseup",w),p=l.clientX,i=u.value.offsetWidth}return{mounted(l){l.addEventListener("mousedown",k)},beforeUnmount(l){l.removeEventListener("mousedown",k)}}}const h=v();return(i,p)=>(o(),a("div",$e,[e("div",ke,[e("div",{ref_key:"displayRef",ref:u,class:"parent",style:L({width:n.value+"px"})},xe,4),j(e("div",ye,null,512),[[J(h)]]),e("div",Ee,Ce,512)])]))}}),Ie=y(Te,[["__scopeId","data-v-9e4701a3"]]),Re={};function Ne(s,n){return o(),a("div",null,"1")}const Pe=y(Re,[["render",Ne]]),Le={};function Ae(s,n){return o(),a("div",null,"1")}const Ve=y(Le,[["render",Ae]]),Be=C("",5),De=e("h2",{id:"子项分配",tabindex:"-1"},[D("子项分配 "),e("a",{class:"header-anchor",href:"#子项分配","aria-label":'Permalink to "子项分配"'},"​")],-1),Xe=C("",5),Ge=e("h2",{id:"复杂布局案例",tabindex:"-1"},[D("复杂布局案例 "),e("a",{class:"header-anchor",href:"#复杂布局案例","aria-label":'Permalink to "复杂布局案例"'},"​")],-1),je=e("h2",{id:"对齐方式",tabindex:"-1"},[D("对齐方式 "),e("a",{class:"header-anchor",href:"#对齐方式","aria-label":'Permalink to "对齐方式"'},"​")],-1),ze=JSON.parse('{"title":"Grid布局","description":"","frontmatter":{},"headers":[],"relativePath":"docs-md/notes/css/Grid布局.md","filePath":"docs-md/notes/css/Grid布局.md","lastUpdated":1744707690000}'),Fe={name:"docs-md/notes/css/Grid布局.md"},Ue=Object.assign(Fe,{setup(s){return(n,u)=>(o(),a("div",null,[Be,x(ie),De,x(ge),Xe,x(Ie),Ge,x(Pe),je,x(Ve)]))}});export{ze as __pageData,Ue as default};
