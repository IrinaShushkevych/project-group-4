parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"C1P0":[function(require,module,exports) {
(()=>{const e=document.querySelectorAll(".anim-item");if(e.length>0){function t(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+n}}function n(){for(let n=0;n<e.length;n++){const i=e[n],o=i.offsetHeight,s=t(i).top,c=4;let l=window.innerHeight-o/c;o>window.innerHeight&&(l=window.innerHeight-window.innerHeight/c),pageYOffset>s-l&&pageYOffset<s+o?i.classList.add("active-anim"):i.classList.contains("anim-no-hide")||i.classList.remove("active-anim")}}window.addEventListener("scroll",n),n()}})();
},{}]},{},["C1P0"], null)
//# sourceMappingURL=/project-group-4/animation.38c8973b.js.map