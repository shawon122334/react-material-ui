(this["webpackJsonpreact-material-ui"]=this["webpackJsonpreact-material-ui"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),o=a.n(r),i=(a(96),a(65)),s=a(11),l=a(66),j=a.n(l),d=a(76),b=a(12),u=a(158),h=a(82),O=a(148),x=a(152),f=a(154),p=a(178),m=a(155),g=a(157),v=a(33),y=a(156),N=a(151),w=a(59),C=a(57),S=a(58),k=a(5),D=Object(O.a)({avatar:{backgroundColor:function(e){return"work"==e.category?N.a[700]:"money"==e.category?w.a[500]:"reminder"==e.category?C.a[500]:S.a[500]}}});function M(e){var t=e.note,a=e.handleDelete,c=D(t);return Object(k.jsx)("div",{children:Object(k.jsxs)(x.a,{elevation:2,className:c.test,children:[Object(k.jsx)(f.a,{avatar:Object(k.jsx)(p.a,{className:c.avatar,children:t.category[0].toUpperCase()}),action:Object(k.jsx)(m.a,{onClick:function(){return a(t.id)},children:Object(k.jsx)(y.a,{})}),title:t.title,subheader:t.category}),Object(k.jsx)(g.a,{children:Object(k.jsx)(v.a,{variant:"body2",color:"textSecondary",children:t.details})})]})})}function T(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){fetch("http://localhost:8000/notes").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);var r=function(){var e=Object(d.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/notes/"+t,{method:"DELETE"});case 2:c=a.filter((function(e){return e.id!=t})),n(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(u.a,{children:Object(k.jsx)(h.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:a.map((function(e){return Object(k.jsx)("div",{children:Object(k.jsx)(M,{note:e,handleDelete:r})},e.id)}))})})}var B=a(163),W=a(80),E=a.n(W),F=a(174),L=a(175),I=a(179),J=a(162),P=a(159),q=a(160),R=Object(O.a)({field:{marginTop:20,marginBottom:20,display:"block"}});function z(){var e=R(),t=Object(s.f)(),a=Object(c.useState)(""),n=Object(b.a)(a,2),r=n[0],o=n[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),j=l[0],d=l[1],h=Object(c.useState)(!1),O=Object(b.a)(h,2),x=O[0],f=O[1],p=Object(c.useState)(!1),m=Object(b.a)(p,2),g=m[0],y=m[1],N=Object(c.useState)("money"),w=Object(b.a)(N,2),C=w[0],S=w[1];return Object(k.jsxs)(u.a,{size:"sm",children:[Object(k.jsx)(v.a,{variant:"h6",color:"textSecondary",component:"h2",gutterBottom:!0,children:"Create a New Note"}),Object(k.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),f(!1),y(!1),""==r&&f(!0),""==j&&y(!0),r&&j&&fetch("http://localhost:8000/notes",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({title:r,details:j,category:C})}).then((function(){return t.push("/")}))},children:[Object(k.jsx)(F.a,{className:e.field,onChange:function(e){return o(e.target.value)},label:"Note Title",variant:"outlined",color:"secondary",fullWidth:!0,required:!0,error:x}),Object(k.jsx)(F.a,{className:e.field,onChange:function(e){return d(e.target.value)},label:"Details",variant:"outlined",color:"secondary",multiline:!0,rows:4,fullWidth:!0,required:!0,erro:!0,r:g}),Object(k.jsxs)(P.a,{className:e.field,children:[Object(k.jsx)(q.a,{children:"Note Category"}),Object(k.jsxs)(I.a,{value:C,onChange:function(e){return S(e.target.value)},children:[Object(k.jsx)(J.a,{value:"money",control:Object(k.jsx)(L.a,{}),label:"Money"}),Object(k.jsx)(J.a,{value:"todos",control:Object(k.jsx)(L.a,{}),label:"Todos"}),Object(k.jsx)(J.a,{value:"reminders",control:Object(k.jsx)(L.a,{}),label:"Reminders"}),Object(k.jsx)(J.a,{value:"work",control:Object(k.jsx)(L.a,{}),label:"Work"})]})]}),Object(k.jsx)(B.a,{type:"submit",color:"secondary",variant:"contained",endIcon:Object(k.jsx)(E.a,{}),children:"Submit"})]})]})}var G=a(81),Q=a(172),U=a(171),V=a(166),Y=a(167),_=a(177),A=a(161),H=a(168),K=a(169),X=a(170),Z=a(164),$=a(165),ee=a(173),te=Object(O.a)((function(e){return{page:{backgroundColor:"#f9f9f9",width:"100%",padding:e.spacing(3)},drawer:{width:240},paperDrawer:{width:240},root:{display:"flex"},active:{background:"#f4f4f4"},title:{padding:e.spacing(2)},appBar:{width:"calc(100% - ".concat(240,"px)")},toolbar:e.mixins.toolbar,date:{flexGrow:1},avatar:{marginLeft:e.spacing(2)}}}));function ae(e){var t=e.children,a=te(),c=[{text:"My Notes",icon:Object(k.jsx)(Z.a,{color:"primary"}),path:"/"},{text:"Create Notes",icon:Object(k.jsx)($.a,{color:"primary"}),path:"/create"}],n=Object(s.f)(),r=Object(s.g)();return Object(k.jsxs)("div",{className:a.root,children:[Object(k.jsx)(V.a,{className:a.appBar,children:Object(k.jsxs)(Y.a,{children:[Object(k.jsxs)(v.a,{className:a.date,children:["Today is ",Object(ee.a)(new Date,"do MMMM Y")]}),Object(k.jsx)(v.a,{children:"Sabbir"}),Object(k.jsx)(p.a,{src:"/mario-av.png",className:a.avatar})]})}),Object(k.jsxs)(_.a,{className:a.drawer,variant:"permanent",anchor:"left",classes:{paper:a.paperDrawer},children:[Object(k.jsx)("div",{children:Object(k.jsx)(v.a,{variant:"h5",className:a.title,children:"Ninja Notes"})}),Object(k.jsx)(A.a,{children:c.map((function(e){return Object(k.jsxs)(H.a,{button:!0,onClick:function(){return n.push(e.path)},className:r.pathname==e.path?a.active:null,children:[Object(k.jsx)(K.a,{children:e.icon}),Object(k.jsx)(X.a,{primary:e.text})]},e.text)}))})]}),Object(k.jsxs)("div",{className:a.page,children:[Object(k.jsx)("div",{className:a.toolbar}),t]})]})}var ce=Object(G.a)({palette:{secondary:{main:"#9c27b0"},primary:U.a},typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700}});var ne=function(){return Object(k.jsx)(Q.a,{theme:ce,children:Object(k.jsx)(i.a,{children:Object(k.jsx)(ae,{children:Object(k.jsxs)(s.c,{children:[Object(k.jsx)(s.a,{exact:!0,path:"/",children:Object(k.jsx)(T,{})}),Object(k.jsx)(s.a,{path:"/create",children:Object(k.jsx)(z,{})}),Object(k.jsx)(s.a,{path:"/notes",children:Object(k.jsx)(T,{})})]})})})})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,181)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};o.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(ne,{})}),document.getElementById("root")),re()},96:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.d857cfbf.chunk.js.map