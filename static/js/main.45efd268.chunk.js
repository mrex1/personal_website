(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),o=a.n(c),i=a(17),l=a.n(i),u=(a(25),a(1)),s=a(7),m=a(2),b=a(10),d=a(19),v=(a(26),a(27),function(e){var t=e.bgColor,a=e.textColor;return o.a.createElement("div",{className:"logo",style:{backgroundColor:t,color:a}},o.a.createElement(s.b,{to:"/"},"REX M0"))});function y(e){return e.replace("/","")}!function(e){e.home="",e.about="about",e.skill="skill",e.experience="experience",e.project="project",e.contact="contact"}(n||(n={}));var E,f=(r={},Object(u.a)(r,n.home,{primary:"#FFAA00",secondary:"white",textPrimary:"black",textSecondary:"#0022FF",inactive:"#A3A3A3",logoBack:"black",logoText:"#FFAA00"}),Object(u.a)(r,n.about,{primary:"#FFAEAE",secondary:"white",textPrimary:"black",textSecondary:"#FF0000",inactive:"#F1F1F1",logoBack:"#FFAEAE",logoText:"white"}),Object(u.a)(r,n.skill,{primary:"white",secondary:"#0022FF",textPrimary:"black",textSecondary:"white",inactive:"#DCDCDC",logoBack:"#0022FF",logoText:"white"}),Object(u.a)(r,n.experience,{primary:"#9FECFF",secondary:"white",textPrimary:"black",textSecondary:"#034150",inactive:"white",logoBack:"#9FECFF",logoText:"white"}),Object(u.a)(r,n.project,{primary:"#60026E",secondary:"white",textPrimary:"black",textSecondary:"#3acd4a",inactive:"#DCDCDC",logoBack:"black",logoText:"#60026E"}),Object(u.a)(r,n.contact,{primary:"#61B48B",secondary:"white",textPrimary:"black",textSecondary:"#034150",inactive:"white",logoBack:"#61B48B",logoText:"white"}),r),j=function(e){var t=e.tabs,a=Object(c.useState)({}),n=Object(d.a)(a,2),r=n[0],i=n[1],l=y(Object(m.f)().pathname),E=Object(c.useCallback)((function(e){return function(){return i((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(u.a)({},e,!0))}))}}),[]),j=Object(c.useCallback)((function(e){return function(){i((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(u.a)({},e,!1))}))}}),[]),p=f[l];return o.a.createElement("div",{className:"navbar-container"},o.a.createElement(v,{bgColor:p.logoBack,textColor:p.logoText}),o.a.createElement("div",{className:"navbar-space"}),o.a.createElement("div",{className:"navbar-tabs"},t.map((function(e){return o.a.createElement(s.b,{style:{color:!0===r[e]||l===e?p.textSecondary:p.inactive},to:e,key:e,onMouseOver:E(e),onMouseLeave:j(e)},e)}))))},p=(a(33),a(14)),O=function(e){var t=e.reversed,a=y(Object(m.f)().pathname),n=f[a];return o.a.createElement("div",{className:"Background animate__animated animate__fadeIn",style:{background:n.primary}},o.a.createElement("div",{className:Object(p.a)("bottom-eclipse animate__animated animate__fadeInUp",{reversed:t}),style:{background:n.secondary}}),o.a.createElement("div",{className:Object(p.a)("top-eclipse animate__animated animate__fadeInDown",{reversed:t}),style:{background:n.secondary}}))},k=function(e){e.history;return o.a.createElement("div",null,o.a.createElement(O,null))},h=function(e){return o.a.createElement("div",null,o.a.createElement(O,{reversed:!0}))},g=function(e){return o.a.createElement("div",null,o.a.createElement(O,null))},x=function(e){return o.a.createElement("div",null,o.a.createElement(O,{reversed:!0}))},w=function(e){return o.a.createElement("div",null,o.a.createElement(O,null))},F=function(e){return o.a.createElement("div",null,o.a.createElement(O,{reversed:!0}))},C=(E={},Object(u.a)(E,n.home,k),Object(u.a)(E,n.about,h),Object(u.a)(E,n.skill,g),Object(u.a)(E,n.experience,x),Object(u.a)(E,n.project,w),Object(u.a)(E,n.contact,F),E),B={};Object.keys(C).map((function(e){return Object.assign(B,Object(u.a)({},"/"+e.toLowerCase(),C[e]))}));var _=B,A=(a(34),Object.values(n).filter((function(e){return""!==e}))),S={};Object.values(n).map((function(e){return Object.assign(S,Object(u.a)({},e,"/"+e))}));var N=function(){return o.a.createElement(s.a,{routes:S},o.a.createElement("div",{className:"App"},o.a.createElement(j,{tabs:A}),o.a.createElement(m.c,null,Object.keys(_).reverse().map((function(e){var t=_[e];return o.a.createElement(m.a,{path:e,key:e},(function(e){return o.a.createElement(t,e)}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.45efd268.chunk.js.map