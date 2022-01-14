(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){},111:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(20),a=n.n(r),s=n(29),i=(n(80),n(81),n(14)),o=n(6),l=n(7),j=n(38),u=n(16),d=n(17),b=n(118),h=n(117),O=n(119),x=(n(82),n(27)),f=n.n(x),g="http://localhost:8080/user",m=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"login",value:function(e,t){f.a.post(g+"/signin",{username:e,password:t}).then((function(e){e.data.accessToken&&(localStorage.setItem("user",JSON.stringify(e.data)),console.log(window.localStorage.getItem("user")))})).catch((function(e){console.log(e)}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t){f.a.post("".concat(g,"/signup"),{username:e,password:t}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),v=n(2),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).user=m.getCurrentUser(),c.logoutUser=c.logoutUser.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"logoutUser",value:function(){return m.logout(),Object(v.jsx)(i.a,{to:"/"})}},{key:"render",value:function(){return Object(v.jsx)(b.a,{expand:"lg",variant:"light",className:"navbar",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(O.a.Link,{className:"nav-item",href:"/card",children:"Cards"}),Object(v.jsx)(O.a.Link,{className:"nav-item",href:"/",children:"Home"}),Object(v.jsx)(O.a.Link,{className:"nav-item",href:"/createCard",children:"Make a New Card"}),Object(v.jsx)(O.a.Link,{className:"nav-item",href:"/login",children:"Login"}),Object(v.jsx)(O.a.Link,{className:"nav-item",href:"/register",children:"Register"})]})})]})})}}]),n}(c.Component),y=n(4),C=(n(108),n(55)),k=n.p+"static/media/typewriter.11dc0df1.png";function w(){return Object(v.jsxs)("div",{className:"landing",children:[Object(v.jsx)("div",{className:"hero",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Create Study Cards!"}),Object(v.jsx)("a",{href:"/card",children:Object(v.jsx)("button",{children:"Get Started"})})]})}),Object(v.jsx)("div",{className:"main",children:Object(v.jsx)(N,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(S,{}),Object(v.jsx)("div",{className:"row",children:T.map((function(e,t){return Object(v.jsx)("div",{className:"column",children:Object(v.jsxs)(L,{children:[Object(v.jsx)("div",{className:"card-title",children:e.title}),Object(v.jsx)("div",{className:"card-body",children:e.description}),Object(v.jsx)(U,{ratio:e.imageRatio,src:e.image})]})})}))})]})})}),Object(v.jsx)("div",{className:"hero",children:"Share with your friends!"}),Object(v.jsxs)("div",{className:"hero2",children:[Object(v.jsxs)("p",{children:["Create cards for anything you are studying for!"," "]}),Object(v.jsx)("button",{children:"Learn More"})]}),Object(v.jsx)("footer",{})]})}function N(e){var t=e.children;return Object(v.jsx)("div",{className:"hero",children:Object(v.jsx)("div",{className:"hero-body",children:t})})}function S(){return Object(v.jsx)("div",{className:"info"})}function U(e){var t=e.ratio,n=e.src;return Object(v.jsx)("div",{className:"image-container",children:Object(v.jsx)("div",{className:"image-inner-container",children:Object(v.jsx)("div",{className:"ratio",style:{paddingTop:100*t+"%"},children:Object(v.jsx)("div",{className:"ratio-inner",children:Object(v.jsx)("img",{src:n})})})})})}function L(e){var t=e.children,n=Object(c.useRef)(),r=Object(c.useState)(!1),a=Object(y.a)(r,2),s=a[0],i=a[1],o=Object(C.useSpring)((function(){return{xys:[0,0,1],config:{mass:10,tension:400,friction:40,precision:1e-5}}})),l=Object(y.a)(o,2),j=l[0],u=l[1];return Object(v.jsx)(C.animated.div,{ref:n,className:"card",onMouseEnter:function(){return i(!0)},onMouseMove:function(e){var t=e.clientX,c=e.clientY,r=t-(n.current.offsetLeft-(window.scrollX||window.pageXOffset||document.body.scrollLeft)),a=[-(c-(n.current.offsetTop-(window.scrollY||window.pageYOffset||document.body.scrollTop))-n.current.clientHeight/2)/50,(r-n.current.clientWidth/2)/50,1.07];u({xys:a})},onMouseLeave:function(){i(!1),u({xys:[0,0,1]})},style:{zIndex:s?2:1,transform:j.xys.interpolate((function(e,t,n){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")}))},children:t})}var T=[{title:"Study Cards that are easy to access and manage.",description:"Users upload study cards for various subjects.",image:n.p+"static/media/features.94d3cf4e.png",imageRatio:1},{title:"Many Subjects and Tools",description:"Browse other user study cards, ranging from Math to Medicine!",image:k,imageRatio:839/1133}],I=(n(113),n(111),"http://localhost:8080/card"),P=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"submitCard",value:function(e,t,n){f.a.post("".concat(I,"/create"),{title:e,content:t},{headers:{"x-access-token":n}}).then((function(e){"200"==e.status&&console.log("Card was successfully submitted")})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e,t){f.a.delete(I+"/delete/"+e,{headers:{"x-access-token":t},data:e})}},{key:"getCards",value:function(){return f.a.get(I)}}]),e}());function M(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var B="http://localhost:8080/",R=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getPublicContent",value:function(){return f.a.get(B+"all")}},{key:"getUserBoard",value:function(){return f.a.get(B+"user",{headers:M()})}},{key:"getUserID",value:function(e){return f.a.get(B+"user/"+e)}}]),e}());var J=function(){var e=m.getCurrentUser(),t=Object(c.useState)(null),n=Object(y.a)(t,1)[0];n=0;var r=Object(c.useState)(null),a=Object(y.a)(r,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){P.getCards().then((function(e){var t=e.data,n=t.map((function(e){return R.getUserID(e.author).then((function(t){e.username=t.data.username}))}));Promise.all(n).then((function(){return o(t)}))}))})),Object(v.jsxs)("div",{className:"cards",children:[Object(v.jsx)("h1",{children:"Cards"}),"Like this Card Stack?",Object(v.jsxs)("div",{children:[n<1&&Object(v.jsx)("button",{onClick:n+=1,children:"+"}),Object(v.jsx)("span",{children:n}),n>-1&&Object(v.jsx)("button",{onClick:n-=1,children:"-"})]}),e&&Object(v.jsx)("button",{children:Object(v.jsx)(s.b,{className:"createCard",to:"/createCard",children:" + Card"})}),Object(v.jsx)("div",{className:"displayCards",children:i?i.map((function(e){return Object(v.jsxs)("div",{className:"blurbs",children:[Object(v.jsx)("div",{className:"cardHead",children:Object(v.jsx)("h1",{children:e.title})}),Object(v.jsx)("p",{children:e.content}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"button",value:"Delete",onClick:function(){return P.deleteCard(e._id,m.getCurrentUser().accessToken)}})})]})})):"loading"})]})};var D=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(y.a)(a,2),o=s[0],l=s[1],j=Object(i.g)();return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:" Card Submission "}),Object(v.jsxs)("form",{children:[Object(v.jsx)("label",{for:"cardTitle",children:" Title: "}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{for:"cardBody",children:" Body: "}),Object(v.jsx)("br",{}),Object(v.jsx)("textarea",{rows:"4",cols:"50",onChange:function(e){l(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"button",value:"Submit",onClick:function(){return function(){j.push("/card");var e=n,t=o,c=m.getCurrentUser().accessToken;P.submitCard(e,t,c)}()}})]})]})};var F=function(){var e=Object(i.g)(),t=Object(c.useState)(""),n=Object(y.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(y.a)(s,2),l=o[0],j=o[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Registration"}),Object(v.jsxs)("form",{children:[Object(v.jsx)("label",{for:"registerUsername",children:" Username: "}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{for:"registerPassword",children:" Password: "}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"password",onChange:function(e){j(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"button",value:"Submit",onClick:function(){return function(){e.push("/");var t=r,n=l;m.register(t,n),console.log("Username: ".concat(t," \nPassword: ").concat(n))}()}})]})]})};var X=function(){var e=Object(i.g)(),t=Object(c.useState)(""),n=Object(y.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(y.a)(s,2),l=o[0],j=o[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsxs)("form",{children:[Object(v.jsx)("label",{for:"loginUsername",children:" Username: "}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{for:"loginPassword",children:" Password: "}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"password",onChange:function(e){j(e.target.value)}}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{type:"button",value:"Submit",onClick:function(){return e.push("/"),m.login(r,l),void console.log("Username: ".concat(r," \nPassword: ").concat(l))}})]})]})};n(112);var Y=function(){return Object(v.jsxs)("div",{id:"App",children:[Object(v.jsx)(p,{}),Object(v.jsxs)(i.d,{children:[Object(v.jsx)(i.b,{exact:!0,path:"/",children:Object(v.jsx)(w,{})}),Object(v.jsx)(i.b,{component:J,path:"/card"}),Object(v.jsx)(i.b,{component:D,path:"/createCard"}),Object(v.jsx)(i.b,{path:"/register",component:F}),Object(v.jsx)(i.b,{path:"/login",component:X})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(v.jsx)(s.a,{children:Object(v.jsx)(Y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),E()},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.4d7b63fb.chunk.js.map