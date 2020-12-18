/**
 * @popperjs/core v2.0.0-rc.1
 */

"use strict";!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Popper={})}(this,(function(e){function t(e){return{width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function r(e){return"[object Window]"!=={}.toString.call(e)?(e=e.ownerDocument)?e.defaultView:window:e}function n(e){return{scrollLeft:(e=r(e)).pageXOffset,scrollTop:e.pageYOffset}}function o(e){return e instanceof r(e).Element}function i(e){return e instanceof r(e).HTMLElement}function a(e){return e?(e.nodeName||"").toLowerCase():null}function s(e){return r(e).getComputedStyle(e)}function f(e){return e=i(e)?s(e):{},{top:parseFloat(e.borderTopWidth)||0,right:parseFloat(e.borderRightWidth)||0,bottom:parseFloat(e.borderBottomWidth)||0,left:parseFloat(e.borderLeftWidth)||0}}function c(e,o,s){void 0===s&&(s=!1),e=t(e);var c={scrollLeft:0,scrollTop:0},p=0,u=0;return s||("body"!==a(o)&&(c=o!==r(o)&&i(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:n(o)),i(o)&&(s=t(o),o=f(o),p=s.x+o.left,u=s.y+o.top)),{x:e.left+c.scrollLeft-p,y:e.top+c.scrollTop-u,width:e.width,height:e.height}}function p(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function u(e){return"html"===a(e)?e:e.parentNode||e.host||document.ownerDocument||document.documentElement}function d(e,t,n){void 0===t&&(t="scroll"),void 0===n&&(n=[]);var o=function e(t,r){if(void 0===r&&(r="scroll"),["html","body","#document"].includes(a(t)))return t.ownerDocument.body;if(i(t)){var n=s(t),o="scroll"===r?/visible|hidden/:/visible/;if(""!==(n=n.overflow+n.overflowY+n.overflowX)&&!o.test(n))return t}return e(u(t),r)}(e,t);return o=(e="body"===a(o))?r(o):o,n=n.concat(o),e?n:n.concat(d(u(o),t))}function l(e){var t;return!i(e)||!(t=e.offsetParent)||void 0!==window.InstallTrigger&&"fixed"===s(t).position?null:t}function m(e){var t=r(e);for(e=l(e);e&&["table","td","th"].includes(a(e));)e=l(e);return e&&"body"===a(e)&&"static"===s(e).position?t:e||t}function h(e){var t=new Map,r=new Set,n=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||function e(o){r.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(n){r.has(n)||(n=t.get(n))&&e(n)})),n.push(o)}(e)})),n}function v(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}function b(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function g(e){void 0===e&&(e={});var t=e.defaultModifiers,r=void 0===t?[]:t,n=void 0===(e=e.defaultOptions)?C:e;return function(e,t,i){function a(){f.forEach((function(e){return e()})),f=[]}void 0===i&&(i=n);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},C,{},n),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],u={state:s,setOptions:function(i){a(),s.options=Object.assign({},n,{},i),s.scrollParents={reference:o(e)?d(e,"scroll"):[],popper:d(t,"scroll")},s.orderedModifiers=function(e){var t=h(e);return R.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}([].concat(s.options.modifiers.filter((function(e){return!r.find((function(t){return t.name===e.name}))})),r.map((function(e){return Object.assign({},e,{},s.options.modifiers.find((function(t){return t.name===e.name})))})))),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options;r=void 0===r?{}:r;var n=e.effect;e.enabled&&"function"==typeof n&&(e=n({state:s,name:t,instance:u,options:r}),f.push(e||function(){}))}))},forceUpdate:function(){var e=s.elements,t=e.reference;if(b(t,e=e.popper))for(s.rects={reference:c(t,m(e),"fixed"===s.options.strategy),popper:p(e)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)})),t=0;t<s.orderedModifiers.length;t++)if(!0===s.reset)s.reset=!1,t=-1;else{var r=(e=s.orderedModifiers[t]).fn,n=e.options;n=void 0===n?{}:n;var o=e.name;e.enabled&&"function"==typeof r&&(s=r({state:s,options:n,name:o,instance:u})||s)}},update:v((function(){return new Promise((function(e){u.forceUpdate(),e(s)}))})),destroy:function(){a()}};return b(e,t)?(u.setOptions(i),u.update(),u):u}}function y(e){return e.split("-")[0]}function w(e){return["top","bottom"].includes(e)?"x":"y"}function x(e){var t=e.reference,r=e.element,n=(e=e.placement)?y(e):null;e=e?e.split("-")[1]:null;var o=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2;switch(n){case"top":o={x:o,y:t.y-r.height};break;case"bottom":o={x:o,y:t.y+t.height};break;case"right":o={x:t.x+t.width,y:i};break;case"left":o={x:t.x-r.width,y:i};break;default:o={x:t.x,y:t.y}}if(null!=(n=n?w(n):null))switch(i="y"===n?"height":"width",e){case"start":o[n]=Math.floor(o[n])-Math.floor(t[i]/2-r[i]/2);break;case"end":o[n]=Math.floor(o[n])+Math.ceil(t[i]/2-r[i]/2)}return o}function O(e){var t=e.offsets,r=e.position,n=e.gpuAcceleration,o=window.devicePixelRatio;e=Math.round(t.x*o)/o||0,o=Math.round(t.y*o)/o||0;var i=t.hasOwnProperty("x");return t=t.hasOwnProperty("y"),n?{position:r,top:t?"0":"",left:i?"0":"",transform:2>window.devicePixelRatio?"translate("+e+"px, "+o+"px)":"translate3d("+e+"px, "+o+"px, 0)"}:{position:r,top:t?o+"px":"",left:i?e+"px":"",transform:""}}function M(e){return e.replace(/left|right|bottom|top/g,(function(e){return I[e]}))}function D(e){return e.replace(/start|end/g,(function(e){return F[e]}))}function E(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function j(e,o){if("viewport"===o)e=E({width:(e=r(e)).innerWidth,height:e.innerHeight,x:0,y:0});else if(i(o))e=t(o);else{var a=e.ownerDocument.documentElement;e=r(a),o=n(a),(a=c(a.ownerDocument.documentElement,e)).height=Math.max(a.height,e.innerHeight),a.width=Math.max(a.width,e.innerWidth),a.x=-o.scrollLeft,a.y=-o.scrollTop,e=E(a)}return e}function P(e,t,r){return t="clippingParents"===t?function(e){var t=d(e,"clipping"),r=["absolute","fixed"].includes(s(e).position)&&i(e)?m(e):e;return o(r)?t.filter((function(e){return o(e)&&e.contains(r)})):[]}(e):[].concat(t),(r=(r=[].concat(t,[r])).reduce((function(t,r){var n=j(e,r);if(i(r)){var o=f(r);r={top:o.top,right:r.offsetWidth-(r.clientWidth+o.right),bottom:r.offsetHeight-(r.clientHeight+o.bottom),left:o.left}}else r={top:0,right:0,bottom:0,left:0};return t.top=Math.max(n.top+r.top,t.top),t.right=Math.min(n.right-r.right,t.right),t.bottom=Math.min(n.bottom-r.bottom,t.bottom),t.left=Math.max(n.left+r.left,t.left),t}),j(e,r[0]))).width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function L(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},e)}function k(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function B(e,r){void 0===r&&(r={});var n=r;r=void 0===(r=n.placement)?e.placement:r;var i=n.boundary,a=void 0===i?"clippingParents":i,s=void 0===(i=n.rootBoundary)?"viewport":i;i=void 0===(i=n.elementContext)?"popper":i;var f=n.altBoundary,c=void 0!==f&&f;n=L("number"!=typeof(n=void 0===(n=n.padding)?0:n)?n:k(n,A));var p=e.elements.reference;f=e.rects.popper,a=P(o(c=e.elements[c?"popper"===i?"reference":"popper":i])?c:e.elements.popper.ownerDocument.documentElement,a,s),c=x({reference:s=t(p),element:f,strategy:"absolute",placement:r}),f=E(Object.assign({},f,{},c)),s="popper"===i?f:s;var u={top:a.top-s.top+n.top,bottom:s.bottom-a.bottom+n.bottom,left:a.left-s.left+n.left,right:s.right-a.right+n.right};if(e=e.modifiersData.offset,"popper"===i&&e){var d=e[r];Object.keys(u).forEach((function(e){var t=["right","bottom"].includes(e)?1:-1,r=["top","bottom"].includes(e)?"y":"x";u[e]+=d[r]*t}))}return u}function W(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function q(e){return["top","right","bottom","left"].some((function(t){return 0<=e[t]}))}var A=["top","bottom","right","left"],T=A.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),S=[].concat(A,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),R="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),C={placement:"bottom",modifiers:[],strategy:"absolute"};g();var H={passive:!0},I={left:"right",right:"left",bottom:"top",top:"bottom"},F={start:"end",end:"start"},V=[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=(e=e.options).scroll,i=void 0===o||o,a=void 0===(e=e.resize)||e,s=r(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",n.update,H)})),a&&s.addEventListener("resize",n.update,H),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",n.update,H)})),a&&s.removeEventListener("resize",n.update,H)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=x({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state;e=void 0===(e=e.options.gpuAcceleration)||e,t.styles.popper=Object.assign({},t.styles.popper,{},O({offsets:t.modifiersData.popperOffsets,position:t.options.strategy,gpuAcceleration:e})),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,{},O({offsets:t.modifiersData.arrow,position:"absolute",gpuAcceleration:e}))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];i(o)&&a(o)&&(Object.assign(o.style,r),Object.entries(n).forEach((function(e){var t=e[0];!1===(e=e[1])?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(e){var t=e.state;return Object.assign(t.elements.popper.style,{position:"absolute",left:"0",top:"0"}),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],n=Object.keys(t.styles.hasOwnProperty(e)?Object.assign({},t.styles[e]):{});e=t.attributes[e]||{},n=n.reduce((function(e,t){var r;return Object.assign({},e,((r={})[String(t)]="",r))}),{}),i(r)&&a(r)&&(Object.assign(r.style,n),Object.keys(e).forEach((function(e){return r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.name,n=void 0===(e=e.options.offset)?[0,0]:e,o=(e=S.reduce((function(e,r){var o=t.rects,i=y(r),a=["left","top"].includes(i)?-1:1,s="function"==typeof n?n(Object.assign({},o,{placement:r})):n;return o=(o=s[0])||0,s=((s=s[1])||0)*a,i=["left","right"].includes(i)?{x:s,y:o}:{x:o,y:s},e[r]=i,e}),{}))[t.placement],i=o.y;t.modifiersData.popperOffsets.x+=o.x,t.modifiersData.popperOffsets.y+=i,t.modifiersData[r]=e}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options;e=r.fallbackPlacements;var n=r.padding,o=r.boundary,i=r.rootBoundary,a=void 0===(r=r.flipVariations)||r,s=y(r=t.options.placement);e=e||(s===r?[M(r)]:function(e){if(e.includes("auto"))return[];var t=M(e);return[D(e),t,D(t)]}(r)),e=function(e,t){var r=new Set;return e.filter((function(e){if(e=t(e),!r.has(e))return r.add(e),!0}))}([r].concat(e).reduce((function(e,r){return r.includes("auto")?e.concat(function(e,t){void 0===t&&(t={});var r=t.boundary,n=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.placement.split("-")[1],s=(a?i?T:T.filter((function(e){return e.includes(a)})):A).reduce((function(t,i){return t[i]=B(e,{placement:i,boundary:r,rootBoundary:n,padding:o})[y(i)],t}),{});return Object.keys(s).sort((function(e,t){return s[e]-s[t]}))}(t,{placement:r,boundary:o,rootBoundary:i,padding:n,flipVariations:a})):e.concat(r)}),[]),(function(e){return e}));var f=t.rects.reference,c=t.rects.popper,p=e.reduce((function(e,r){var a=y(r),s=r.includes("start"),p=["top","bottom"].includes(a),u=p?"width":"height",d=B(t,{placement:r,boundary:o,rootBoundary:i,padding:n});return s=p?s?"right":"left":s?"bottom":"top",f[u]>c[u]&&(s=M(s)),u=M(s),e[r]=[0>=d[a],0>=d[s],0>=d[u]],e}),{}),u=a?3:1;for(r=e[0],s=u;0<=s;u--){var d=e.find((function(e){return p[e].slice(0,u).every((function(e){return e}))}));if(d){r=d;break}}t.placement!==r&&(t.placement=r,t.reset=!0)},requiresIfExists:["offset"]},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options;e=e.name;var n=r.mainAxis,o=void 0===n||n;n=void 0!==(n=r.altAxis)&&n;var i=r.tether;i=void 0===i||i;var a=r.tetherOffset,s=void 0===a?0:a;r=B(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding}),a=y(t.placement);var f=t.placement.split("-")[1],c=!f,u=w(a);a="x"===u?"y":"x";var d=t.modifiersData.popperOffsets,l=t.rects.reference,m=t.rects.popper,h="function"==typeof s?s(Object.assign({},t.rects,{placement:t.placement})):s;if(s={x:0,y:0},o){var v="y"===u?"top":"left",b="y"===u?"bottom":"right",g="y"===u?"height":"width";o=d[u];var x=d[u]+r[v],O=d[u]-r[b],M=i?-m[g]/2:0,D="start"===f?l[g]:m[g];f="start"===f?-m[g]:-l[g],m=t.elements.arrow,m=i&&m?p(m):{width:0,height:0};var E=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};v=E[v],b=E[b],m=Math.max(0,Math.min(Math.abs(l[g]-m[g]),m[g])),D=t.modifiersData.popperOffsets[u]+(c?l[g]/2-M-m-v-h:D-m-v-h),c=t.modifiersData.popperOffsets[u]+(c?-l[g]/2+M+m+b+h:f+m+b+h),i=Math.max(i?Math.min(x,D):x,Math.min(o,i?Math.max(O,c):O)),t.modifiersData.popperOffsets[u]=i,s[u]=i-o}n&&(n=d[a],i=Math.max(n+r["x"===u?"top":"left"],Math.min(n,n-r["x"===u?"bottom":"right"])),t.modifiersData.popperOffsets[a]=i,s[a]=i-n),t.modifiersData[e]=s},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state;e=e.name;var n=r.elements.arrow,o=r.modifiersData.popperOffsets,i=y(r.placement),a=w(i);if(i=["left","right"].includes(i)?"height":"width",n){var s=r.modifiersData[e+"#persistent"].padding;n=p(n),o=Math.max(s["y"===a?"top":"left"],Math.min(r.rects.popper[i]/2-n[i]/2+((r.rects.reference[i]+r.rects.reference[a]-o[a]-r.rects.popper[i])/2-(o[a]-r.rects.reference[a])/2),r.rects.popper[i]-n[i]-s["y"===a?"bottom":"right"])),r.modifiersData[e]=((t={})[a]=o,t)}},effect:function(e){var t=e.state,r=e.options;e=e.name;var n=r.element;n=void 0===n?"[data-popper-arrow]":n,r=void 0===(r=r.padding)?0:r,("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&t.elements.popper.contains(n)&&(t.elements.arrow=n,t.modifiersData[e+"#persistent"]={padding:L("number"!=typeof r?r:k(r,A))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var r=t.rects.reference,n=t.rects.popper,o=t.modifiersData.preventOverflow,i=B(t,{elementContext:"reference"}),a=B(t,{altBoundary:!0});r=W(i,r),n=W(a,n,o),o=q(r),a=q(n),t.modifiersData[e]={referenceClippingOffsets:r,popperEscapeOffsets:n,isReferenceHidden:o,hasPopperEscaped:a},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":a})}}],z=g({defaultModifiers:V});e.createPopper=z,e.defaultModifiers=V,e.popperGenerator=g,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper.min.js.map