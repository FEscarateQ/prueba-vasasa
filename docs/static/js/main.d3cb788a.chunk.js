(this["webpackJsonpprueba-vacasa-web"]=this["webpackJsonpprueba-vacasa-web"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),r=n.n(a),s=(n(12),n(2)),j=n(0),i=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),i=Object(s.a)(r,2),u=i[0],b=i[1],o=Object(c.useState)(0),l=Object(s.a)(o,2),O=l[0],d=l[1],h=Object(c.useState)(0),p=Object(s.a)(h,2),x=p[0],g=p[1];Object(c.useEffect)((function(){n.length>0?b(n.trim().split(" ").length):b(0),d(function(e){return e.match(/[aeiou\xe1\xe9\xed\xf3\xfa]/gi)?e.match(/[aeiou\xe1\xe9\xed\xf3\xfa]/gi).length:0}(n)),g(function(e){return e.match(/[^aeiou\xe1\xe9\xed\xf3\xfa ]/gi)?e.match(/[^aeiou\xe1\xe9\xed\xf3\xfa ]/gi).length:0}(n))}),[n]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("label",{children:["Ingresa cadena de texto a analizar:",Object(j.jsx)("input",{type:"text",onInput:function(e){a(e.target.value.replace(/[0-9]/g,"").trim())},input:""})]}),Object(j.jsx)("p",{children:"Cantidad de palabras: ".concat(u)}),Object(j.jsx)("p",{children:"Cantidad de vocales: ".concat(O)}),Object(j.jsx)("p",{children:"Cantidad de consonantes: ".concat(x)})]})}),Object(j.jsx)("hr",{})]})},u=n(7);function b(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),i=Object(s.a)(r,2),b=i[0],o=i[1],l=Object(c.useState)(0),O=Object(s.a)(l,2),d=O[0],h=O[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"number"===typeof b&&0!==b&&(e.target.reset(),o(0),a((function(e){return[].concat(Object(u.a)(e),[parseInt(b)])})),h(parseInt(d)+parseInt(b)))},children:[Object(j.jsxs)("label",{children:["Ingresa valor para sumar:",Object(j.jsx)("input",{type:"number",onInput:function(e){o(parseInt(e.target.value)||0)},input:b,defaultValue:""})]}),Object(j.jsx)("button",{type:"submit",children:"Agregar"}),Object(j.jsx)("button",{type:"button",onClick:function(){return a([]),o(0),void h(0)},children:"Limpiar"})]}),n.length>0&&Object(j.jsxs)("p",{children:["Se han agregado los valores:",n.map((function(e,t){return t>0?"- ".concat(e):" ".concat(e)})),Object(j.jsx)("br",{}),"La suma total es: ".concat(d)]})]}),Object(j.jsx)("hr",{})]})}var o=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Prueba de c\xf3digo Vacasa"}),Object(j.jsx)("hr",{}),Object(j.jsx)(b,{}),Object(j.jsx)(i,{})]})};r.a.render(Object(j.jsx)(o,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d3cb788a.chunk.js.map