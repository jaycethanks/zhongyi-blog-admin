"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[471],{98305:function(ae,U,a){a.d(U,{Z:function(){return s}});var O=a(57213),Z=a.n(O),z=a(25359),y=a.n(z),W=a(49811),w=a.n(W),J=a(54306),I=a.n(J),T=a(90463),F=a(36742),P=a(59496),E=a(14933),S=a(88531),D={"form-item-cover":"form-item-cover___GJ9RL","upload-wrapper":"upload-wrapper___tgFAB","top-level-desc":"top-level-desc___yH6Ib","form-item-cover-square":"form-item-cover-square___rW3P6"},p=a(4637),L=function(x){return new Promise(function(M,A){var C=new FileReader;C.readAsDataURL(x),C.onload=function(){return M(C.result)},C.onerror=function(B){return A(B)}})},H=T.Z.Dragger,$=function(x){var M=x.value,A=x.onChange,C=x.square,B=x.title,G=x.subTitlt,V=x.UploadProp,K=(0,P.useState)(),N=I()(K,2),Q=N[0],R=N[1];(0,P.useEffect)(function(){R(M)},[M]);var X=function(){var v=w()(y()().mark(function e(t){return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(!t.url&&!t.preview)){l.next=4;break}return l.next=3,L(t.originFileObj);case 3:t.preview=l.sent;case 4:R(t.url||t.preview);case 5:case"end":return l.stop()}},e)}));return function(t){return v.apply(this,arguments)}}(),Y={name:"file",multiple:!1,action:"/api/file/upload",headers:{Authorization:"Bearer "+E.Z.get()},onChange:function(e){console.log("[info]: ",e);var t=e.file.status;if(t!=="uploading"&&console.log(e.file,e.fileList),t==="done"){var n=e.file.response;X(e.file),A==null||A(n),F.ZP.success("".concat(e.file.name," file uploaded successfully."))}else t==="error"&&F.ZP.error("".concat(e.file.name," file upload failed."))},onDrop:function(e){console.log("Dropped files",e.dataTransfer.files)}},k="".concat(C?D["form-item-cover-square"]:""," ").concat(D["form-item-cover"]);return(0,p.jsx)(H,Z()(Z()(Z()({accept:""},Y),{},{className:k},V),{},{children:(0,p.jsx)("div",{className:D["upload-wrapper"],style:{backgroundImage:"url(".concat(Q,")")},children:(0,p.jsxs)("div",{className:D["top-level-desc"],children:[(0,p.jsx)("p",{style:{fontSize:"2.5rem"},children:(0,p.jsx)(S.Z,{color:"#fff"})}),(0,p.jsx)("p",{style:{fontSize:"1.6rem",fontWeight:500},children:B!=null?B:"\u4E0A\u4F20\u5C01\u9762"}),(0,p.jsx)("p",{style:{fontSize:"0.8rem"},children:G!=null?G:"\u5EFA\u8BAE\u5C3A\u5BF8: 1303*734px"})]})})}))},s=$},26377:function(ae,U,a){a.r(U),a.d(U,{default:function(){return k}});var O=a(57213),Z=a.n(O),z=a(25359),y=a.n(z),W=a(49811),w=a.n(W),J=a(54306),I=a.n(J),T=a(56194),F=a(66461),P=a(36742),E=a(81018),S=a(59496),D=a(93525),p=a.n(D),L={"link-item":"link-item___lUB5k","preview-box":"preview-box___GDgdO","preview-link":"preview-link___FUIjj"},H=a(12342),$=a.n(H),s=a(4637),b=["children"];function x(v){var e={x:1/0,y:1/0,width:0,height:0},t=v.getBoundingClientRect();e.x=0,e.y=0,e.width=t.width,e.height=t.height;for(var n=0,l=0;l<v.children.length;l++){var m=v.children[l];if(m instanceof SVGGraphicsElement&&m.getBBox){var f=m.getBBox(),d=m.getBoundingClientRect(),h=d.left-t.left,i=d.top-t.top,g=f.width,r=f.height;e.x=Math.min(e.x,h),e.y=Math.min(e.y,i),e.width=Math.max(e.width,h+g),e.height=Math.max(e.height,i+r),n=Math.max(n,g,r)}if(m.children.length>0){var o=x(m),u=o.split(" ").map(parseFloat),c=I()(u,4),j=c[0],q=c[1],_=c[2],ee=c[3];e.x=Math.min(e.x,j),e.y=Math.min(e.y,q),e.width=Math.max(e.width,j+_),e.height=Math.max(e.height,q+ee),n=Math.max(n,_,ee)}}return e.width=Math.max(n,e.width,0),e.height=Math.max(n,e.height,0),"".concat(e.x," ").concat(e.y," ").concat(e.width," ").concat(e.height)}var M=function(e){var t=e.children,n=$()(e,b),l=n.className,m=n.color,f=n.height,d=n.width,h=n.style,i=h===void 0?{fill:"#888888"}:h,g=(0,S.useState)("0 0 24 24"),r=I()(g,2),o=r[0],u=r[1],c=(0,S.useRef)(null);return(0,S.useEffect)(function(){c.current&&u(x(c.current))},[c.current]),(0,s.jsx)("svg",{ref:c,viewBox:o,className:l,color:m,height:f,width:d,style:i,dangerouslySetInnerHTML:{__html:t}},t)},A=M,C=function(e){var t=e.value,n=e.onChange,l=(0,S.useState)([]),m=I()(l,2),f=m[0],d=m[1];(0,S.useEffect)(function(){var r=t?JSON.parse(t):[];d(r)},[t]);var h=function(){d([].concat(p()(f),[{icon:"",title:"",url:""}]))},i=function(o){var u=p()(f);u.splice(o,1),d(p()(u)),n==null||n(JSON.stringify(u))},g=function(o,u){var c=o.target.attributes["data-type"].value;f[u][c]=o.target.value.trim(),d(p()(f)),n==null||n(JSON.stringify(f))};return(0,s.jsxs)("span",{children:[f.map(function(r,o){return(0,s.jsxs)("div",{className:"".concat(L["link-item"]),children:["Title:",(0,s.jsx)(T.Z,{type:"text","data-type":"title",value:r.title,onChange:function(c){return g(c,o)}}),"Icon Path:",(0,s.jsx)(T.Z,{type:"text","data-type":"icon",value:r.icon,onChange:function(c){return g(c,o)}}),"Url:",(0,s.jsx)(T.Z,{type:"text","data-type":"url",value:r.url,onChange:function(c){return g(c,o)}}),(0,s.jsx)("li",{className:"".concat(L["preview-box"]),children:(0,s.jsx)("a",{title:r.title,href:r.url,target:"_blank",className:"".concat(L["preview-link"]),children:(0,s.jsx)(A,{children:r.icon},o)},o)},o),(0,s.jsx)(E.Z,{onClick:function(){return i(o)},type:"link",children:"\u5220\u9664"})]},o)}),(0,s.jsx)(E.Z,{type:"primary",onClick:h,children:"\u65B0\u589E"})]})},B=C,G=a(98305),V=a(8176);function K(v,e){return N.apply(this,arguments)}function N(){return N=w()(y()().mark(function v(e,t){return y()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,V.request)("/api/admin/about/upsert",Z()({method:"POST",headers:{"Content-Type":"application/json"},data:e},t||{})));case 1:case"end":return l.stop()}},v)})),N.apply(this,arguments)}function Q(){return R.apply(this,arguments)}function R(){return R=w()(y()().mark(function v(){return y()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,V.request)("/api/admin/about/getAbout",{method:"GET"}));case 1:case"end":return t.stop()}},v)})),R.apply(this,arguments)}var X=T.Z.TextArea,Y=function(){var e=F.Z.useForm(),t=I()(e,1),n=t[0],l=function(){console.warn("modal validate failed")},m=function(){var d=w()(y()().mark(function h(){var i;return y()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Q();case 2:i=r.sent,i.code===0?n.setFieldsValue(i.data):P.ZP.error(i.message);case 4:case"end":return r.stop()}},h)}));return function(){return d.apply(this,arguments)}}();m();var f=function(){var d=w()(y()().mark(function h(){var i,g,r,o,u;return y()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,n.validateFields();case 2:return j.next=4,n.getFieldsValue();case 4:return i=j.sent,g=i.avatar,r=i.msg,o=i.links,j.next=8,K({avatar:g,msg:r,links:o});case 8:u=j.sent,u.code===0?P.ZP.success(u.message):P.ZP.error(u.message);case 10:case"end":return j.stop()}},h)}));return function(){return d.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(F.Z,{initialValues:{visible:!0},form:n,name:"basic",labelCol:{span:4},wrapperCol:{span:20},onFinish:function(h){var i;return onValidateFinish(Z()({colid:(i=initialValues)===null||i===void 0?void 0:i.colid},h))},onFinishFailed:l,autoComplete:"off",children:[(0,s.jsx)(F.Z.Item,{label:"\u5934\u50CF",name:"avatar",children:(0,s.jsx)(G.Z,{square:!0,title:"\u4E0A\u4F20",subTitlt:"\u5EFA\u8BAE\u5C3A\u5BF8",UploadProp:{maxCount:1}})}),(0,s.jsx)(F.Z.Item,{label:"\u4E13\u680F\u7B80\u4ECB",name:"msg",rules:[{required:!0,message:"\u4E13\u680F\u7B80\u4ECB\u672A\u586B\u5199"}],children:(0,s.jsx)(X,{maxLength:1e3,showCount:!0,autoSize:{minRows:6,maxRows:8}})}),(0,s.jsx)(F.Z.Item,{label:"\u793E\u533A\u94FE\u63A5",name:"links",rules:[{required:!1}],children:(0,s.jsx)(B,{})})]}),(0,s.jsx)("p",{style:{textAlign:"right"},children:(0,s.jsx)(E.Z,{type:"primary",onClick:f,children:"\u4FDD\u5B58\u66F4\u6539"})})]})},k=Y}}]);
