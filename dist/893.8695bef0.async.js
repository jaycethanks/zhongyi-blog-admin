"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[893],{18893:function(Ge,Ce,i){i.d(Ce,{Z:function(){return De}});var I=i(74758),f=i(87366),xe=i(49973),ge=i(17107),K=i(38231),ye=i(58165),U=i(43899),n=i(59496),p=i(47834),M=i(58216),Pe=i(84875),H=i.n(Pe),A=i(47028),Ze=i(13999),D=i(81018),q=i(17535);function _(t){return!!(t&&t.then)}var he=function(e){var a=n.useRef(!1),o=n.useRef(null),r=(0,Ze.Z)(!1),u=(0,A.Z)(r,2),x=u[0],y=u[1],c=e.close,v=function(){c==null||c.apply(void 0,arguments)};n.useEffect(function(){var d=null;return e.autoFocus&&(d=setTimeout(function(){var s;(s=o.current)===null||s===void 0||s.focus()})),function(){d&&clearTimeout(d)}},[]);var m=function(s){_(s)&&(y(!0),s.then(function(){y(!1,!0),v.apply(void 0,arguments),a.current=!1},function(Z){console.error(Z),y(!1,!0),a.current=!1}))},l=function(s){var Z=e.actionFn;if(!a.current){if(a.current=!0,!Z){v();return}var g;if(e.emitEvent){if(g=Z(s),e.quitOnNullishReturnValue&&!_(g)){a.current=!1,v(s);return}}else if(Z.length)g=Z(c),a.current=!1;else if(g=Z(),!g){v();return}m(g)}},C=e.type,P=e.children,T=e.prefixCls,E=e.buttonProps;return n.createElement(D.Z,(0,f.Z)({},(0,q.n)(C),{onClick:l,loading:x,prefixCls:T},E,{ref:o}),P)},ee=he,j=i(42046),Te=i(36148),Ee=i(7934),te=i(20482),ke=i(72923),ne=i(5401),Oe=i(71714),be=i(89354),oe=i(58187),Ne=function(t,e){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(a[o[r]]=t[o[r]]);return a},Q,Re=function(e){Q={x:e.pageX,y:e.pageY},setTimeout(function(){Q=null},100)};(0,be.jD)()&&document.documentElement.addEventListener("click",Re,!0);var Se=function(e){var a,o,r=n.useContext(te.E_),u=r.getPopupContainer,x=r.getPrefixCls,y=r.direction,c=function(h){var O=e.onCancel;O==null||O(h)},v=function(h){var O=e.onOk;O==null||O(h)},m=e.prefixCls,l=e.footer,C=e.visible,P=e.open,T=P===void 0?!1:P,E=e.wrapClassName,d=e.centered,s=e.getContainer,Z=e.closeIcon,g=e.focusTriggerAfterClose,R=g===void 0?!0:g,k=e.width,S=k===void 0?520:k,w=Ne(e,["prefixCls","footer","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose","width"]),b=x("modal",m),L=x(),W=n.createElement(ne.Z,{componentName:"Modal",defaultLocale:(0,oe.A)()},function($){var h=e.okText,O=e.okType,X=O===void 0?"primary":O,Y=e.cancelText,z=e.confirmLoading,J=z===void 0?!1:z;return n.createElement(n.Fragment,null,n.createElement(D.Z,(0,f.Z)({onClick:c},e.cancelButtonProps),Y||$.cancelText),n.createElement(D.Z,(0,f.Z)({},(0,q.n)(X),{loading:J,onClick:v},e.okButtonProps),h!=null?h:$.okText))}),G=n.createElement("span",{className:"".concat(b,"-close-x")},Z||n.createElement(Te.Z,{className:"".concat(b,"-close-icon")})),V=H()(E,(a={},(0,M.Z)(a,"".concat(b,"-centered"),!!d),(0,M.Z)(a,"".concat(b,"-wrap-rtl"),y==="rtl"),a));return n.createElement(Oe.BR,null,n.createElement(ke.Ux,{status:!0,override:!0},n.createElement(Ee.Z,(0,f.Z)({width:S},w,{getContainer:s===void 0?u:s,prefixCls:b,wrapClassName:V,footer:l===void 0?W:l,visible:T||C,mousePosition:(o=w.mousePosition)!==null&&o!==void 0?o:Q,onClose:c,closeIcon:G,focusTriggerAfterClose:R,transitionName:(0,j.mL)(L,"zoom",e.transitionName),maskTransitionName:(0,j.mL)(L,"fade",e.maskTransitionName)}))))},ae=Se,Ie=function(e){var a=e.icon,o=e.onCancel,r=e.onOk,u=e.close,x=e.zIndex,y=e.afterClose,c=e.visible,v=e.open,m=e.keyboard,l=e.centered,C=e.getContainer,P=e.maskStyle,T=e.okText,E=e.okButtonProps,d=e.cancelText,s=e.cancelButtonProps,Z=e.direction,g=e.prefixCls,R=e.wrapClassName,k=e.rootPrefixCls,S=e.iconPrefixCls,w=e.bodyStyle,b=e.closable,L=b===void 0?!1:b,W=e.closeIcon,G=e.modalRender,V=e.focusTriggerAfterClose,$=e.okType||"primary",h="".concat(g,"-confirm"),O="okCancel"in e?e.okCancel:!0,X=e.width||416,Y=e.style||{},z=e.mask===void 0?!0:e.mask,J=e.maskClosable===void 0?!1:e.maskClosable,ve=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",Qe=H()(h,"".concat(h,"-").concat(e.type),(0,M.Z)({},"".concat(h,"-rtl"),Z==="rtl"),e.className),We=O&&n.createElement(ee,{actionFn:o,close:u,autoFocus:ve==="cancel",buttonProps:s,prefixCls:"".concat(k,"-btn")},d);return n.createElement(p.ZP,{prefixCls:k,iconPrefixCls:S,direction:Z},n.createElement(ae,{prefixCls:g,className:Qe,wrapClassName:H()((0,M.Z)({},"".concat(h,"-centered"),!!e.centered),R),onCancel:function(){return u==null?void 0:u({triggerCancel:!0})},open:v||c,title:"",footer:"",transitionName:(0,j.mL)(k,"zoom",e.transitionName),maskTransitionName:(0,j.mL)(k,"fade",e.maskTransitionName),mask:z,maskClosable:J,maskStyle:P,style:Y,bodyStyle:w,width:X,zIndex:x,afterClose:y,keyboard:m,centered:l,getContainer:C,closable:L,closeIcon:W,modalRender:G,focusTriggerAfterClose:V},n.createElement("div",{className:"".concat(h,"-body-wrapper")},n.createElement("div",{className:"".concat(h,"-body")},a,e.title===void 0?null:n.createElement("span",{className:"".concat(h,"-title")},e.title),n.createElement("div",{className:"".concat(h,"-content")},e.content)),n.createElement("div",{className:"".concat(h,"-btns")},We,n.createElement(ee,{type:$,actionFn:r,close:u,autoFocus:ve==="ok",buttonProps:E,prefixCls:"".concat(k,"-btn")},T)))))},re=Ie,Ae=[],F=Ae,Fe=function(t,e){var a={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(a[o[r]]=t[o[r]]);return a},le="";function we(){return le}function B(t){var e=document.createDocumentFragment(),a=(0,f.Z)((0,f.Z)({},t),{close:x,open:!0}),o;function r(){for(var c=arguments.length,v=new Array(c),m=0;m<c;m++)v[m]=arguments[m];var l=v.some(function(T){return T&&T.triggerCancel});t.onCancel&&l&&t.onCancel.apply(t,[function(){}].concat((0,I.Z)(v.slice(1))));for(var C=0;C<F.length;C++){var P=F[C];if(P===x){F.splice(C,1);break}}(0,U.v)(e)}function u(c){var v=c.okText,m=c.cancelText,l=c.prefixCls,C=Fe(c,["okText","cancelText","prefixCls"]);clearTimeout(o),o=setTimeout(function(){var P=(0,oe.A)(),T=(0,p.w6)(),E=T.getPrefixCls,d=T.getIconPrefixCls,s=E(void 0,we()),Z=l||"".concat(s,"-modal"),g=d();(0,U.s)(n.createElement(re,(0,f.Z)({},C,{prefixCls:Z,rootPrefixCls:s,iconPrefixCls:g,okText:v||(C.okCancel?P.okText:P.justOkText),cancelText:m||P.cancelText})),e)})}function x(){for(var c=this,v=arguments.length,m=new Array(v),l=0;l<v;l++)m[l]=arguments[l];a=(0,f.Z)((0,f.Z)({},a),{open:!1,afterClose:function(){typeof t.afterClose=="function"&&t.afterClose(),r.apply(c,m)}}),a.visible&&delete a.visible,u(a)}function y(c){typeof c=="function"?a=c(a):a=(0,f.Z)((0,f.Z)({},a),c),u(a)}return u(a),F.push(x),{destroy:x,update:y}}function ce(t){return(0,f.Z)((0,f.Z)({icon:n.createElement(K.Z,null),okCancel:!1},t),{type:"warning"})}function ie(t){return(0,f.Z)((0,f.Z)({icon:n.createElement(ye.Z,null),okCancel:!1},t),{type:"info"})}function ue(t){return(0,f.Z)((0,f.Z)({icon:n.createElement(xe.Z,null),okCancel:!1},t),{type:"success"})}function se(t){return(0,f.Z)((0,f.Z)({icon:n.createElement(ge.Z,null),okCancel:!1},t),{type:"error"})}function fe(t){return(0,f.Z)((0,f.Z)({icon:n.createElement(K.Z,null),okCancel:!0},t),{type:"confirm"})}function $e(t){var e=t.rootPrefixCls;le=e}function Be(){var t=n.useState([]),e=(0,A.Z)(t,2),a=e[0],o=e[1],r=n.useCallback(function(u){return o(function(x){return[].concat((0,I.Z)(x),[u])}),function(){o(function(x){return x.filter(function(y){return y!==u})})}},[]);return[a,r]}var Me=i(83757),je=function(e,a){var o=e.afterClose,r=e.config,u=n.useState(!0),x=(0,A.Z)(u,2),y=x[0],c=x[1],v=n.useState(r),m=(0,A.Z)(v,2),l=m[0],C=m[1],P=n.useContext(te.E_),T=P.direction,E=P.getPrefixCls,d=E("modal"),s=E(),Z=function(){c(!1);for(var R=arguments.length,k=new Array(R),S=0;S<R;S++)k[S]=arguments[S];var w=k.some(function(b){return b&&b.triggerCancel});l.onCancel&&w&&l.onCancel.apply(l,[function(){}].concat((0,I.Z)(k.slice(1))))};return n.useImperativeHandle(a,function(){return{destroy:Z,update:function(R){C(function(k){return(0,f.Z)((0,f.Z)({},k),R)})}}}),n.createElement(ne.Z,{componentName:"Modal",defaultLocale:Me.Z.Modal},function(g){return n.createElement(re,(0,f.Z)({prefixCls:d,rootPrefixCls:s},l,{close:Z,open:y,afterClose:o,okText:l.okText||(l.okCancel?g.okText:g.justOkText),direction:T,cancelText:l.cancelText||g.cancelText}))})},Le=n.forwardRef(je),de=0,ze=n.memo(n.forwardRef(function(t,e){var a=Be(),o=(0,A.Z)(a,2),r=o[0],u=o[1];return n.useImperativeHandle(e,function(){return{patchElement:u}},[]),n.createElement(n.Fragment,null,r)}));function He(){var t=n.useRef(null),e=n.useState([]),a=(0,A.Z)(e,2),o=a[0],r=a[1];n.useEffect(function(){if(o.length){var y=(0,I.Z)(o);y.forEach(function(c){c()}),r([])}},[o]);var u=n.useCallback(function(y){return function(v){var m;de+=1;var l=n.createRef(),C,P=n.createElement(Le,{key:"modal-".concat(de),config:y(v),ref:l,afterClose:function(){C==null||C()}});return C=(m=t.current)===null||m===void 0?void 0:m.patchElement(P),{destroy:function(){function E(){var d;(d=l.current)===null||d===void 0||d.destroy()}l.current?E():r(function(d){return[].concat((0,I.Z)(d),[E])})},update:function(E){function d(){var s;(s=l.current)===null||s===void 0||s.update(E)}l.current?d():r(function(s){return[].concat((0,I.Z)(s),[d])})}}}},[]),x=n.useMemo(function(){return{info:u(ie),success:u(ue),error:u(se),warning:u(ce),confirm:u(fe)}},[]);return[x,n.createElement(ze,{ref:t})]}function me(t){return B(ce(t))}var N=ae;N.useModal=He,N.info=function(e){return B(ie(e))},N.success=function(e){return B(ue(e))},N.error=function(e){return B(se(e))},N.warning=me,N.warn=me,N.confirm=function(e){return B(fe(e))},N.destroyAll=function(){for(;F.length;){var e=F.pop();e&&e()}},N.config=$e;var De=N}}]);
