(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),i=c(4),a=c.n(i),j=(c(9),c(2)),o=(c(10),c(0)),r=function(){var t=Object(n.useState)(""),e=Object(j.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)(""),a=Object(j.a)(i,2),r=a[0],b=a[1],l=Object(n.useState)(1),u=Object(j.a)(l,2),d=u[0],O=u[1],g=Object(n.useState)(""),x=Object(j.a)(g,2),h=x[0],p=x[1],f=function(t){return Object(o.jsx)("button",{className:"digits",onClick:function(){var e;e=t.digit,0===d?(s("".concat(e)),O(1)):1===d?s("".concat(c)+"".concat(e)):(b("".concat(r)+"".concat(e)),O(3))},children:t.digit})},m=function(t){return Object(o.jsx)("button",{className:"operatorButton",onClick:function(){var e;e=t.sign,p(e),O(2)},children:t.sign})};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Kamen's Calculator"}),d>=3?Object(o.jsx)("h2",{children:r}):Object(o.jsx)("h2",{children:c}),Object(o.jsx)("div",{className:"clear",children:Object(o.jsx)("button",{className:"clearButton",onClick:function(){return s(""),b(""),O(0),void p("")},children:"Clear"})}),Object(o.jsxs)("div",{className:"numberButtons",children:[Object(o.jsx)(f,{digit:1}),Object(o.jsx)(f,{digit:2}),Object(o.jsx)(f,{digit:3}),Object(o.jsx)(f,{digit:4}),Object(o.jsx)(f,{digit:5}),Object(o.jsx)(f,{digit:6}),Object(o.jsx)(f,{digit:7}),Object(o.jsx)(f,{digit:8}),Object(o.jsx)(f,{digit:9}),Object(o.jsx)(f,{digit:0}),Object(o.jsx)(f,{digit:"."})]}),Object(o.jsxs)("div",{className:"operatorButtonsArray",children:[Object(o.jsx)(m,{sign:"+"}),Object(o.jsx)(m,{sign:"-"}),Object(o.jsx)(m,{sign:"*"}),Object(o.jsx)(m,{sign:"/"}),Object(o.jsx)("button",{className:"operatorButton",onClick:function(){"+"===h?(s(parseFloat(c)+parseFloat(r)),b(""),O(0)):"-"===h?(s(parseFloat(c)-parseFloat(r)),b(""),O(0)):"*"===h?(s(parseFloat(c)*parseFloat(r)),b(""),O(0)):"/"===h?(s(parseFloat(c)/parseFloat(r)),b(""),O(0)):(s("Something went wrong, try again."),O(0))},children:"="})]})]})},b=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),i(t),a(t)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(r,{})}),document.getElementById("root")),b()},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.b990f0f4.chunk.js.map