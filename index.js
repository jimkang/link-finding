!function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var u=r[s]={exports:{}};e[s][0].call(u.exports,function(t){var r=e[s][1][t];return i(r?r:t)},u,u.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){function n(t,e){i(t,e,!0)}function i(t,e,r){s(),0===h.roll(5)&&a();var n=document.querySelector("#thing"),i=decodeURIComponent(t);if(n.src=i,n.alt=decodeURIComponent(e),0===h.roll(8)&&n.classList.add("flipped"),0===h.roll(10)){var c=document.querySelector("#link");c.src="static/link-both-arms-up.png"}r&&setTimeout(o,500)}function o(){var t=document.querySelector("#thing"),e=document.querySelector("#link"),r=t.clientWidth;r<e.clientWidth+u&&(r=e.clientWidth+u);var n=t.clientHeight+e.clientHeight,i=document.querySelector("html");document.body.style.width=r,document.body.style.height=n,i.style.width=r,i.style.height=n}function s(){document.body.classList.add(l.roll())}function a(){var t=d.roll(),e=document.getElementById(t);e.classList.remove("hide")}var c=t("director"),h=t("probable"),u=32,f={"/thing/:imgurl/desc/:desc":i,"/thing/:imgurl/desc/:desc/trim/":n},l=h.createTableFromDef({"0-59":"background-white","60-89":"background-black","90-99":"background-overworld"}),d=h.createTableFromDef({"0-24":"fires","25-29":"grave","30-39":"woods-a","40-44":"woods-b","45-47":"woods-c","48-49":"grumble","50-54":"old-man-cave","55-59":"old-woman-cave","60-74":"shop","75-76":"fairy-pool"});!function(){var t=c.Router(f);t.init()}()},{director:2,probable:3}],2:[function(t,e,r){!function(t){function e(){return""===h.hash||"#"===h.hash}function r(t,e){for(var r=0;r<t.length;r+=1)if(e(t[r],r,t)===!1)return}function n(t){for(var e=[],r=0,n=t.length;n>r;r++)e=e.concat(t[r]);return e}function i(t,e,r){if(!t.length)return r();var n=0;!function i(){e(t[n],function(e){e||e===!1?(r(e),r=function(){}):(n+=1,n===t.length?r():i())})}()}function o(t,e,r){r=t;for(var n in e)if(e.hasOwnProperty(n)&&(r=e[n](t),r!==t))break;return r===t?"([._a-zA-Z0-9-%()]+)":r}function a(t,e){for(var r,n=0,i="";r=t.substr(n).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/);)n=r.index+r[0].length,r[0]=r[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),i+=t.substr(0,r.index)+r[0];t=i+=t.substr(n);var s,a,c=t.match(/:([^\/]+)/gi);if(c){a=c.length;for(var h=0;a>h;h++)s=c[h],t="::"===s.slice(0,2)?s.slice(1):t.replace(s,o(s,e))}return t}function c(t,e,r,n){var i,o=0,s=0,a=0,r=(r||"(").toString(),n=(n||")").toString();for(i=0;i<t.length;i++){var c=t[i];if(c.indexOf(r,o)>c.indexOf(n,o)||~c.indexOf(r,o)&&!~c.indexOf(n,o)||!~c.indexOf(r,o)&&~c.indexOf(n,o)){if(s=c.indexOf(r,o),a=c.indexOf(n,o),~s&&!~a||!~s&&~a){var h=t.slice(0,(i||1)+1).join(e);t=[h].concat(t.slice((i||1)+1))}o=(a>s?a:s)+1,i=0}else o=0}return t}var h=document.location,u={mode:"modern",hash:h.hash,history:!1,check:function(){var t=h.hash;t!=this.hash&&(this.hash=t,this.onHashChanged())},fire:function(){"modern"===this.mode?this.history===!0?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(t,e){function r(t){for(var e=0,r=f.listeners.length;r>e;e++)f.listeners[e](t)}var n=this;if(this.history=e,f.listeners||(f.listeners=[]),"onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7))this.history===!0?setTimeout(function(){window.onpopstate=r},500):window.onhashchange=r,this.mode="modern";else{var i=document.createElement("iframe");i.id="state-frame",i.style.display="none",document.body.appendChild(i),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){"location"===event.propertyName&&n.check()}),window.setInterval(function(){n.check()},50),this.onHashChanged=r,this.mode="legacy"}return f.listeners.push(t),this.mode},destroy:function(t){if(f&&f.listeners)for(var e=f.listeners,r=e.length-1;r>=0;r--)e[r]===t&&e.splice(r,1)},setHash:function(t){return"legacy"===this.mode&&this.writeFrame(t),this.history===!0?(window.history.pushState({},document.title,t),this.fire()):h.hash="/"===t[0]?t:"/"+t,this},writeFrame:function(t){var e=document.getElementById("state-frame"),r=e.contentDocument||e.contentWindow.document;r.open(),r.write("<script>_hash = '"+t+"'; onload = parent.listener.syncHash;<script>"),r.close()},syncHash:function(){var t=this._hash;return t!=h.hash&&(h.hash=t),this},onHashChanged:function(){}},f=t.Router=function(t){return this instanceof f?(this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=null!=(null!=window.history?window.history.pushState:null),this.configure(),void this.mount(t||{})):new f(t)};f.prototype.init=function(t){var r,n=this;return this.handler=function(t){var e=t&&t.newURL||window.location.hash,r=n.history===!0?n.getPath():e.replace(/.*#/,"");n.dispatch("on","/"===r.charAt(0)?r:"/"+r)},u.init(this.handler,this.history),this.history===!1?e()&&t?h.hash=t:e()||n.dispatch("on","/"+h.hash.replace(/^(#\/|#|\/)/,"")):(this.convert_hash_in_init?(r=e()&&t?t:e()?null:h.hash.replace(/^#/,""),r&&window.history.replaceState({},document.title,r)):r=this.getPath(),(r||this.run_in_init===!0)&&this.handler()),this},f.prototype.explode=function(){var t=this.history===!0?this.getPath():h.hash;return"/"===t.charAt(1)&&(t=t.slice(1)),t.slice(1,t.length).split("/")},f.prototype.setRoute=function(t,e,r){var n=this.explode();return"number"==typeof t&&"string"==typeof e?n[t]=e:"string"==typeof r?n.splice(t,e,s):n=[t],u.setHash(n.join("/")),n},f.prototype.insertEx=function(t,e,r,n){return"once"===t&&(t="on",r=function(t){var e=!1;return function(){return e?void 0:(e=!0,t.apply(this,arguments))}}(r)),this._insert(t,e,r,n)},f.prototype.getRoute=function(t){var e=t;if("number"==typeof t)e=this.explode()[t];else if("string"==typeof t){var r=this.explode();e=r.indexOf(t)}else e=this.explode();return e},f.prototype.destroy=function(){return u.destroy(this.handler),this},f.prototype.getPath=function(){var t=window.location.pathname;return"/"!==t.substr(0,1)&&(t="/"+t),t};var l=/\?.*/;f.prototype.configure=function(t){t=t||{};for(var e=0;e<this.methods.length;e++)this._methods[this.methods[e]]=!0;return this.recurse=t.recurse||this.recurse||!1,this.async=t.async||!1,this.delimiter=t.delimiter||"/",this.strict="undefined"==typeof t.strict?!0:t.strict,this.notfound=t.notfound,this.resource=t.resource,this.history=t.html5history&&this.historySupport||!1,this.run_in_init=this.history===!0&&t.run_handler_in_init!==!1,this.convert_hash_in_init=this.history===!0&&t.convert_hash_in_init!==!1,this.every={after:t.after||null,before:t.before||null,on:t.on||null},this},f.prototype.param=function(t,e){":"!==t[0]&&(t=":"+t);var r=new RegExp(t,"g");return this.params[t]=function(t){return t.replace(r,e.source||e)},this},f.prototype.on=f.prototype.route=function(t,e,r){var n=this;return r||"function"!=typeof e||(r=e,e=t,t="on"),Array.isArray(e)?e.forEach(function(e){n.on(t,e,r)}):(e.source&&(e=e.source.replace(/\\\//gi,"/")),Array.isArray(t)?t.forEach(function(t){n.on(t.toLowerCase(),e,r)}):(e=e.split(new RegExp(this.delimiter)),e=c(e,this.delimiter),void this.insert(t,this.scope.concat(e),r)))},f.prototype.path=function(t,e){var r=this.scope.length;t.source&&(t=t.source.replace(/\\\//gi,"/")),t=t.split(new RegExp(this.delimiter)),t=c(t,this.delimiter),this.scope=this.scope.concat(t),e.call(this,this),this.scope.splice(r,t.length)},f.prototype.dispatch=function(t,e,r){function n(){o.last=s.after,o.invoke(o.runlist(s),o,r)}var i,o=this,s=this.traverse(t,e.replace(l,""),this.routes,""),a=this._invoked;return this._invoked=!0,s&&0!==s.length?("forward"===this.recurse&&(s=s.reverse()),i=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last],i&&i.length>0&&a?(this.async?this.invoke(i,this,n):(this.invoke(i,this),n()),!0):(n(),!0)):(this.last=[],"function"==typeof this.notfound&&this.invoke([this.notfound],{method:t,path:e},r),!1)},f.prototype.invoke=function(t,e,n){var o,s=this;this.async?(o=function(r,n){return Array.isArray(r)?i(r,o,n):void("function"==typeof r&&r.apply(e,(t.captures||[]).concat(n)))},i(t,o,function(){n&&n.apply(e,arguments)})):(o=function(n){return Array.isArray(n)?r(n,o):"function"==typeof n?n.apply(e,t.captures||[]):void("string"==typeof n&&s.resource&&s.resource[n].apply(e,t.captures||[]))},r(t,o))},f.prototype.traverse=function(t,e,r,n,i){function o(t){function e(t){for(var r=[],n=0;n<t.length;n++)r[n]=Array.isArray(t[n])?e(t[n]):t[n];return r}function r(t){for(var e=t.length-1;e>=0;e--)Array.isArray(t[e])?(r(t[e]),0===t[e].length&&t.splice(e,1)):i(t[e])||t.splice(e,1)}if(!i)return t;var n=e(t);return n.matched=t.matched,n.captures=t.captures,n.after=t.after.filter(i),r(n),n}var s,a,c,h,u=[];if(e===this.delimiter&&r[t])return h=[[r.before,r[t]].filter(Boolean)],h.after=[r.after].filter(Boolean),h.matched=!0,h.captures=[],o(h);for(var f in r)if(r.hasOwnProperty(f)&&(!this._methods[f]||this._methods[f]&&"object"==typeof r[f]&&!Array.isArray(r[f]))){if(s=a=n+this.delimiter+f,this.strict||(a+="["+this.delimiter+"]?"),c=e.match(new RegExp("^"+a)),!c)continue;if(c[0]&&c[0]==e&&r[f][t])return h=[[r[f].before,r[f][t]].filter(Boolean)],h.after=[r[f].after].filter(Boolean),h.matched=!0,h.captures=c.slice(1),this.recurse&&r===this.routes&&(h.push([r.before,r.on].filter(Boolean)),h.after=h.after.concat([r.after].filter(Boolean))),o(h);if(h=this.traverse(t,e,r[f],s),h.matched)return h.length>0&&(u=u.concat(h)),this.recurse&&(u.push([r[f].before,r[f].on].filter(Boolean)),h.after=h.after.concat([r[f].after].filter(Boolean)),r===this.routes&&(u.push([r.before,r.on].filter(Boolean)),h.after=h.after.concat([r.after].filter(Boolean)))),u.matched=!0,u.captures=h.captures,u.after=h.after,o(u)}return!1},f.prototype.insert=function(t,e,r,n){var i,o,s,c,h;if(e=e.filter(function(t){return t&&t.length>0}),n=n||this.routes,h=e.shift(),/\:|\*/.test(h)&&!/\\d|\\w/.test(h)&&(h=a(h,this.params)),e.length>0)return n[h]=n[h]||{},this.insert(t,e,r,n[h]);if(h||e.length||n!==this.routes){if(o=typeof n[h],s=Array.isArray(n[h]),n[h]&&!s&&"object"==o)switch(i=typeof n[h][t]){case"function":return void(n[h][t]=[n[h][t],r]);case"object":return void n[h][t].push(r);case"undefined":return void(n[h][t]=r)}else if("undefined"==o)return c={},c[t]=r,void(n[h]=c);throw new Error("Invalid route context: "+o)}switch(i=typeof n[t]){case"function":return void(n[t]=[n[t],r]);case"object":return void n[t].push(r);case"undefined":return void(n[t]=r)}},f.prototype.extend=function(t){function e(t){n._methods[t]=!0,n[t]=function(){var e=1===arguments.length?[t,""]:[t];n.on.apply(n,e.concat(Array.prototype.slice.call(arguments)))}}var r,n=this,i=t.length;for(r=0;i>r;r++)e(t[r])},f.prototype.runlist=function(t){var e=this.every&&this.every.before?[this.every.before].concat(n(t)):n(t);return this.every&&this.every.on&&e.push(this.every.on),e.captures=t.captures,e.source=t.source,e},f.prototype.mount=function(t,e){function r(e,r){var i=e,o=e.split(n.delimiter),s=typeof t[e],a=""===o[0]||!n._methods[o[0]],h=a?"on":i;return a&&(i=i.slice((i.match(new RegExp("^"+n.delimiter))||[""])[0].length),o.shift()),a&&"object"===s&&!Array.isArray(t[e])?(r=r.concat(o),void n.mount(t[e],r)):(a&&(r=r.concat(i.split(n.delimiter)),r=c(r,n.delimiter)),void n.insert(h,r,t[e]))}if(t&&"object"==typeof t&&!Array.isArray(t)){var n=this;e=e||[],Array.isArray(e)||(e=e.split(n.delimiter));for(var i in t)t.hasOwnProperty(i)&&r(i,e.slice(0))}}}("object"==typeof r?r:window)},{}],3:[function(t,e,r){function n(t){function e(t){return Math.floor(w()*t)}function r(t){return 0===t?0:e(t)+1}function n(t){function r(t){return i(s,t)}function n(){var t=r(e(a));return"function"!=typeof t||"probable_rollOnTable"!==t.name&&"probable_pick"!==t.name?t:t()}function o(){return s}var s=t,a=s[s.length-1][0][1]-s[0][0][0]+1;return{outcomeAtIndex:r,roll:n,length:a,getRangesAndOutcomesArray:o}}function i(t,e){e=+e;for(var r=0;r<t.length;++r){var n=t[r],i=n[0];if(e>=i[0]&&e<=i[1])return n[1]}}function o(t){return n(s(t))}function s(t){var e=[],r=-1,n=a(t);return n=n.sort(c),n.forEach(function(t){var n=t[0],i=t[1],o=r+1,s=o+n-1;e.push([[o,s],i]),r=s}),e}function a(t){var e=[];for(var r in t){var n=t[r];e.push([n,r])}return e}function c(t,e){return t[0]>e[0]?-1:1}function h(t){var e=u(t);return n(e)}function u(t){var e=[];for(var r in t){var n=l(r),i=t[r];if("object"==typeof i)if(Array.isArray(i))i=p(i);else{var o=h(i);"function"==typeof o.roll&&(i=o.roll)}e.push([n,i])}return e.sort(f)}function f(t,e){return t[0][0]<e[0][0]?-1:1}function l(t){var e=t.split("-");if(!(e.length>2))return 1===e.length?[+t,+t]:[+e[0],+e[1]]}function d(t,r){return!t||"number"!=typeof t.length||t.length<1?r:t[e(t.length)]}function p(t,e){return function(){return d(t,e)}}function y(t,e){var r=[];return t.forEach(function(t){e.forEach(function(e){Array.isArray(t)||Array.isArray(e)?r.push(t.concat(e)):r.push([t,e])})}),r}function v(t){return t.slice(1).reduce(y,t[0])}function m(t){for(var r,n=t.length,i=Array(n),o=0;n>o;o++)r=e(o+1),r!==o&&(i[o]=i[r]),i[r]=t[o];return i}function g(t,e){return m(t).slice(0,e)}var w=Math.random;return t&&t.random&&(w=t.random),{roll:e,rollDie:r,createRangeTable:n,createRangeTableFromDict:o,createTableFromDef:h,convertDictToRangesAndOutcomePairs:s,pickFromArray:d,crossArrays:y,getCartesianProduct:v,shuffle:m,sample:g}}var i=n();"object"==typeof e&&(e.exports=i,e.exports.createProbable=n)},{}]},{},[1]);