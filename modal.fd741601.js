parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
(()=>{const e=document.querySelector("body"),t=document.querySelectorAll("[data-certificate-button]"),c=document.querySelectorAll("[data-order-button]"),o=document.querySelectorAll("[data-contact-button]"),l=document.querySelectorAll("[data-modal]"),a=document.querySelectorAll("[data-certificate]"),s=document.querySelectorAll("[data-order]"),r=document.querySelectorAll("[data-contact]"),d=t=>{t.preventDefault(),e.classList.toggle("lock"),l.forEach(e=>{e.classList.toggle("is-hidden")}),a.forEach(e=>{e.classList.toggle("is-open")})},i=()=>{e.classList.toggle("lock"),l.forEach(e=>{e.classList.toggle("is-hidden")}),s.forEach(e=>{e.classList.toggle("is-open")})},n=()=>{e.classList.toggle("lock"),l.forEach(e=>{e.classList.toggle("is-hidden")}),r.forEach(e=>{e.classList.toggle("is-open")})};t.forEach(e=>{e.addEventListener("click",d)}),c.forEach(e=>{e.addEventListener("click",i)}),o.forEach(e=>{e.addEventListener("click",n)})})();
},{}]},{},["RSqK"], null)
//# sourceMappingURL=/project-group-4/modal.fd741601.js.map