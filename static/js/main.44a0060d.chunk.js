(this["webpackJsonpmeme-app"]=this["webpackJsonpmeme-app"]||[]).push([[0],{30:function(n,e,t){},50:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var i,o,c,r,a=t(0),s=t.n(a),d=t(19),l=t.n(d),p=(t(30),t(25)),h=t(3),b=t(20),u=t(21),g=t.n(u),x=t(4),f=(t(50),t.p+"static/media/Spinner.70b56022.gif"),j=t(1),m=x.a.div(i||(i=Object(h.a)(["\n  height:100vh; \n  width:100vw; \n  display:flex; \n  align-items:center;\n  justify-content:center; \n  flex-direction:column;\n  background-color: #00DBDE;\n  background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);    \n"]))),O=x.a.button(o||(o=Object(h.a)(["\nheight:40px; \nwidth:auto;\nmargin:30px; \npadding:10px 20px;\nborder:1px solid #3498db; \nfont-size:20px; \ncursor:pointer; \nfont-family:montserrat;\n color:white;\n transition:0.8s; \n position:relative; \n overflow:hidden; \n background-color:#B53471;\n\n &:hover{\n  background-color:#9b59b6;\n  box-shadow: 1px 5px #636e72;\n }\n"]))),w=x.a.button(c||(c=Object(h.a)(["\nheight:40px; \nwidth:auto;\nmargin:30px; \npadding:10px 20px;\nborder:1px solid #3498db; \nfont-size:20px; \ncursor:pointer; \nfont-family:montserrat;\n color:white;\n transition:0.8s; \n position:relative; \n overflow:hidden; \n background-color:#B53471;\n\n &:hover{\n  background-color:#9b59b6;\n  box-shadow: 1px 5px #636e72;\n }\n"]))),v=x.a.h1(r||(r=Object(h.a)(["\n  color:#fff;\n  font-family: 'Dancing Script', cursive;\n  font-size:40px;\n  font-weight:600;\n  "])));var y=function(){var n=Object(a.useState)(""),e=Object(p.a)(n,2),t=e[0],i=e[1],o=function(){g.a.get("https://meme-api.herokuapp.com/gimme").then((function(n){i(n.data.url)})).catch((function(n){console.log(n)}))};return Object(a.useEffect)((function(){o()}),[]),0===t.length?Object(j.jsx)(m,{children:Object(j.jsx)("img",{src:f,alt:"",style:{height:"50px",width:"50px"}})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(m,{children:[Object(j.jsx)(v,{children:"Meme Generator"}),Object(j.jsx)("img",{src:t,alt:"",style:{height:"400px",width:"auto",display:"flex",alignItems:"center",justifyContent:"center"}}),Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)(O,{onClick:o,children:" Get new meme "}),Object(j.jsx)(w,{onClick:function(){Object(b.saveAs)(t,"meme.jpg")},children:" Download meme "})]})]})})},k=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),o(n),c(n),r(n)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.44a0060d.chunk.js.map