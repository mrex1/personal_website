(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(17),i=a.n(o),l=(a(25),a(7)),u=a(1),s=a(2),m=a(10),b=a(19);a(26),a(27);function d(e){return"/personal_website/"+e}function v(e){var t=e.replace(/\/personal_website/,"").replace("/","");return alert(t),t}!function(e){e.home="",e.about="about",e.skill="skill",e.experience="experience",e.project="project",e.contact="contact"}(n||(n={}));var p,f,y=function(e){var t=e.bgColor,a=e.textColor;return c.a.createElement("div",{className:"logo",style:{backgroundColor:t,color:a}},c.a.createElement(l.b,{to:d(n.home)},"REX M0"))},E=(p={},Object(s.a)(p,n.home,{primary:"#FFAA00",secondary:"white",textPrimary:"black",textSecondary:"#0022FF",inactive:"#A3A3A3",logoBack:"black",logoText:"#FFAA00"}),Object(s.a)(p,n.about,{primary:"#FFAEAE",secondary:"white",textPrimary:"black",textSecondary:"#FF0000",inactive:"#F1F1F1",logoBack:"#FFAEAE",logoText:"white"}),Object(s.a)(p,n.skill,{primary:"white",secondary:"#0022FF",textPrimary:"black",textSecondary:"white",inactive:"#DCDCDC",logoBack:"#0022FF",logoText:"white"}),Object(s.a)(p,n.experience,{primary:"#9FECFF",secondary:"white",textPrimary:"black",textSecondary:"#034150",inactive:"white",logoBack:"#9FECFF",logoText:"white"}),Object(s.a)(p,n.project,{primary:"#60026E",secondary:"white",textPrimary:"black",textSecondary:"#3acd4a",inactive:"#DCDCDC",logoBack:"black",logoText:"#60026E"}),Object(s.a)(p,n.contact,{primary:"#61B48B",secondary:"white",textPrimary:"black",textSecondary:"#034150",inactive:"white",logoBack:"#61B48B",logoText:"white"}),p),j=function(e){var t=e.tabs,a=Object(r.useState)({}),n=Object(b.a)(a,2),o=n[0],i=n[1],p=v(Object(u.f)().pathname),f=Object(r.useCallback)((function(e){return function(){return i((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(s.a)({},e,!0))}))}}),[]),j=Object(r.useCallback)((function(e){return function(){i((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(s.a)({},e,!1))}))}}),[]),k=E[p];return c.a.createElement("div",{className:"navbar-container"},c.a.createElement(y,{bgColor:k.logoBack,textColor:k.logoText}),c.a.createElement("div",{className:"navbar-space"}),c.a.createElement("div",{className:"navbar-tabs"},t.map((function(e){return c.a.createElement(l.b,{style:{color:!0===o[e]||p===e?k.textSecondary:k.inactive},to:d(e),key:e,onMouseOver:f(e),onMouseLeave:j(e)},e)}))))},k=(a(33),a(14)),h=function(e){var t=e.reversed,a=v(Object(u.f)().pathname),n=E[a];return c.a.createElement("div",{className:"Background animate__animated animate__fadeIn",style:{background:n.primary}},c.a.createElement("div",{className:Object(k.a)("bottom-eclipse animate__animated animate__fadeInUp",{reversed:t}),style:{background:n.secondary}}),c.a.createElement("div",{className:Object(k.a)("top-eclipse animate__animated animate__fadeInDown",{reversed:t}),style:{background:n.secondary}}))},O=function(e){e.history;return c.a.createElement("div",null,c.a.createElement(h,null))},g=function(e){return c.a.createElement("div",null,c.a.createElement(h,{reversed:!0}))},x=function(e){return c.a.createElement("div",null,c.a.createElement(h,null))},w=function(e){return c.a.createElement("div",null,c.a.createElement(h,{reversed:!0}))},F=function(e){return c.a.createElement("div",null,c.a.createElement(h,null))},_=function(e){return c.a.createElement("div",null,c.a.createElement(h,{reversed:!0}))},C=(f={},Object(s.a)(f,n.home,O),Object(s.a)(f,n.about,g),Object(s.a)(f,n.skill,x),Object(s.a)(f,n.experience,w),Object(s.a)(f,n.project,F),Object(s.a)(f,n.contact,_),f),B={};Object.values(n).map((function(e){return Object.assign(B,Object(s.a)({},d(e),C[e]))}));var A=B,S=(a(34),Object.keys(n).filter((function(e){return"home"!==e})).map((function(e){return n[e]})));var N=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(j,{tabs:S}),c.a.createElement(u.c,null,Object.keys(A).reverse().map((function(e){var t=A[e];return c.a.createElement(u.a,{path:e,key:e},(function(e){return c.a.createElement(t,e)}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e42ad8b2.chunk.js.map