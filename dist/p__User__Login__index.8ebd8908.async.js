"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[366],{81228:function(V,m,e){e.r(m),e.d(m,{default:function(){return G}});var x=e(25359),l=e.n(x),A=e(57213),v=e.n(A),P=e(49811),h=e.n(P),T=e(54306),p=e.n(T),Z=e(36742),S=e(59496),M=e(87995),N=e(33874),R=e(14933),$=e(65071),F=e(68057),z=e(25098),y=e(86980),j=e(8176),d={container:"container___REQAy",lang:"lang___DAjLY",content:"content___IkUx1",icon:"icon___fqAhh"},a=e(4637),Y=function(g){var f=g.content;return _jsx(Alert,{style:{marginBottom:24},message:f,type:"error",showIcon:!0})},C=function(){var g=(0,S.useState)({}),f=p()(g,2),H=f[0],J=f[1],B=(0,S.useState)("account"),L=p()(B,2),K=L[0],W=L[1],U=(0,j.useModel)("@@initialState"),u=U.initialState,D=U.setInitialState;console.log("[initialState]: ",u);var E=function(){var c=h()(l()().mark(function s(){var r,t;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,u==null||(r=u.fetchUserInfo)===null||r===void 0?void 0:r.call(u);case 2:t=o.sent,t&&(0,M.flushSync)(function(){D(function(I){return v()(v()({},I),{},{currentUser:t})})});case 4:case"end":return o.stop()}},s)}));return function(){return c.apply(this,arguments)}}(),Q=function(){var c=h()(l()().mark(function s(r){var t,i,o;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("[values]: ",r),n.prev=1,n.next=4,(0,N.x4)(v()({},r));case 4:if(t=n.sent,!(t.code===0&&t.data)){n.next=13;break}return i=t.data.access_token,R.Z.save(i),n.next=10,E();case 10:return o=new URL(window.location.href).searchParams,j.history.push(o.get("redirect")||"/"),n.abrupt("return");case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),Z.ZP.error("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");case 18:case"end":return n.stop()}},s,null,[[1,15]])}));return function(r){return c.apply(this,arguments)}}();return(0,a.jsx)("div",{className:d.container,children:(0,a.jsx)("div",{className:d.content,children:(0,a.jsx)(z.U,{initialValues:{account:"",password:""},onFinish:function(){var c=h()(l()().mark(function s(r){return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Q(r);case 2:case"end":return i.stop()}},s)}));return function(s){return c.apply(this,arguments)}}(),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.Z,{name:"account",fieldProps:{size:"large",prefix:(0,a.jsx)($.Z,{className:d.prefixIcon})},placeholder:"\u7528\u6237\u540D: admin or user",rules:[{required:!0,message:"\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879\uFF01"}]}),(0,a.jsx)(y.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,a.jsx)(F.Z,{className:d.prefixIcon})},placeholder:"\u5BC6\u7801: ant.design",rules:[{required:!0,message:"\u5BC6\u7801\u662F\u5FC5\u586B\u9879\uFF01"}]})]})})})})},G=C}}]);