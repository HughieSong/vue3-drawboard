(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],f=0,b=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2263:function(e,t,n){"use strict";n("ffe1")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["createTextVNode"])("画笔"),o=Object(r["createTextVNode"])("橡皮擦"),c={class:"cavnas-container"},u={ref:"canvasRef",width:"710",height:"710"},i=Object(r["createTextVNode"])("重画"),l=Object(r["createTextVNode"])("导出图片"),d=Object(r["createTextVNode"])("更新画笔宽度"),f=Object(r["createTextVNode"])("更新橡皮擦宽度");function b(e,t,n,b,p,s){var h=Object(r["resolveComponent"])("van-radio"),O=Object(r["resolveComponent"])("van-radio-group"),v=Object(r["resolveComponent"])("van-field"),j=Object(r["resolveComponent"])("van-slider"),m=Object(r["resolveComponent"])("van-button");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(v,{label:"操作"},{input:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{modelValue:e.dropType,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.dropType=t}),direction:"horizontal"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{name:"brush"},{default:Object(r["withCtx"])((function(){return[a]})),_:1}),Object(r["createVNode"])(h,{name:"eraser"},{default:Object(r["withCtx"])((function(){return[o]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),Object(r["createVNode"])(v,{label:"画笔宽度"},{input:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.lineWidth,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.lineWidth=t})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(v,{label:"橡皮擦宽度"},{input:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{modelValue:e.eraserWidth,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.eraserWidth=t})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])("div",c,[Object(r["createVNode"])("canvas",u,null,512)]),Object(r["createVNode"])("div",null,[Object(r["createVNode"])(m,{style:{margin:"10px"},onClick:e.clearCanvas},{default:Object(r["withCtx"])((function(){return[i]})),_:1},8,["onClick"]),Object(r["createVNode"])(m,{onClick:e.handletoDataURL},{default:Object(r["withCtx"])((function(){return[l]})),_:1},8,["onClick"])]),Object(r["createVNode"])("div",null,[Object(r["createVNode"])(m,{style:{margin:"10px"},onClick:t[4]||(t[4]=function(t){return e.updateLineWidth(24)})},{default:Object(r["withCtx"])((function(){return[d]})),_:1}),Object(r["createVNode"])(m,{onClick:t[5]||(t[5]=function(t){return e.updateEraserWidth(24)})},{default:Object(r["withCtx"])((function(){return[f]})),_:1})])],64)}n("9a83");var p,s=n("f564"),h=n("ade3"),O=(n("66b9"),n("b650")),v=(n("be7f"),n("565f")),j=(n("5fe4"),n("8ad4")),m=(n("4ddd"),n("9f14")),g=(n("a44c"),n("e27c")),C=(n("b0c0"),n("cb29"),n("16ce"));function V(){var e=Object(r["ref"])(null),t=Object(r["ref"])("brush"),n=Object(r["ref"])(14),a=Object(r["ref"])(14),o=Object(r["ref"])(!1),c=function(e){e.width=2*e.offsetWidth,e.height=2*e.offsetWidth},u=function(){var t=Object(r["unref"])(e);if(t){var u=t.getContext("2d"),i=[],l=!1;c(t);var d=t.width,f=(t.height,t.getBoundingClientRect()),b=d/f.width;u.lineCap="round",u.lineJoin="round",Object(C["b"])(t,(function(){c(t)})),Object(C["a"])(t,"touchstart",(function(e){var t=e.touches[0];l=!1,i=[t.pageX-f.left,t.pageY-f.top],u.beginPath(),e.preventDefault()})),Object(C["a"])(t,"touchmove",(function(e){if(i.length&&0!==n.value){var t=e.touches[0];l=!0;var c=[t.pageX-f.left,t.pageY-f.top];u.strokeStyle="#000",u.lineWidth=Object(r["unref"])(o)?a.value:n.value,u.lineTo(c[0]*b,c[1]*b),u.stroke(),e.preventDefault()}})),Object(C["a"])(t,"touchend",(function(e){i.length&&(l||(u.moveTo(i[0]*b,i[1]*b),u.beginPath(),u.fillStyle="#000",u.arc(i[0]*b,i[1]*b,Object(r["unref"])(o)?a.value:n.value/2,0,2*Math.PI),u.fill()),i=[],l=!1,e.preventDefault())}))}},i=function(e){return n.value=e},l=function(e){return a.value=e},d=function(){var t;return null===(t=e.value)||void 0===t?void 0:t.toDataURL("image/png",1)},f=function(){var t=Object(r["unref"])(e);if(t){var n=t.getContext("2d");n.clearRect(0,0,t.width,t.height)}};return Object(r["watch"])(t,(function(t){var n=Object(r["unref"])(e);if(n){var a=n.getContext("2d");"brush"===t?(o.value=!1,a.globalCompositeOperation="source-over"):(o.value=!0,a.globalCompositeOperation="destination-out")}})),Object(r["onMounted"])((function(){u()})),{canvasRef:e,dropType:t,lineWidth:n,eraserWidth:a,updateLineWidth:i,updateEraserWidth:l,toDataURL:d,clearCanvas:f}}var y=Object(r["defineComponent"])({components:(p={},Object(h["a"])(p,g["a"].name,g["a"]),Object(h["a"])(p,m["a"].name,m["a"]),Object(h["a"])(p,j["a"].name,j["a"]),Object(h["a"])(p,v["a"].name,v["a"]),Object(h["a"])(p,O["a"].name,O["a"]),p),setup:function(){var e=V(),t=e.canvasRef,n=e.dropType,r=e.lineWidth,a=e.eraserWidth,o=e.clearCanvas,c=e.toDataURL,u=e.updateLineWidth,i=e.updateEraserWidth,l=function(){Object(s["a"])({type:"primary",message:"请在控制台查看打印结果"}),console.log(c())};return{canvasRef:t,dropType:n,lineWidth:r,eraserWidth:a,clearCanvas:o,updateLineWidth:u,updateEraserWidth:i,handletoDataURL:l}}});n("2263");y.render=b;var x=y;Object(r["createApp"])(x).mount("#app")},ffe1:function(e,t,n){}});