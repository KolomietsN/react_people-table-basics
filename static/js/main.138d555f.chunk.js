(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c(6),s=(c(31),c(32),c(2)),r=(c(33),c(10)),j=c.n(r),i=c(3),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:l,children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:l,children:"People"})]})})})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},h=c(4),O=c(0),x=(c(35),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),u=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"".concat(null===t||void 0===t?void 0:t.slug),className:j()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},p=function(e){var t=e.people,c=Object(s.q)().slug;function n(e){return t.find((function(t){return t.name===e}))}return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=n(e.fatherName),a=n(e.motherName);return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(u,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:a?Object(i.jsx)(u,{person:a}):e.motherName||"-"}),Object(i.jsx)("td",{children:t?Object(i.jsx)(u,{person:t}):e.fatherName||"-"})]},e.slug)}))})]})},m=function(){var e=Object(O.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(O.useState)(!1),s=Object(h.a)(a,2),r=s[0],j=s[1],l=Object(O.useState)(!1),o=Object(h.a)(l,2),b=o[0],d=o[1];Object(O.useEffect)((function(){j(!0),fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then(n).catch((function(){d(!0)})).finally((function(){j(!1)}))}),[]);var u=!b&&!r&&!c.length;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(x,{}),b&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),u&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(i.jsx)(p,{people:c})]})})]})},v=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(b,{})}),Object(i.jsx)(s.b,{path:"/home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsx)(s.b,{path:"/people",element:Object(i.jsx)(m,{}),children:Object(i.jsx)(s.b,{path:":slug"})}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)(d,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(v,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.138d555f.chunk.js.map