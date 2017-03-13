(function(){var l;function ca(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
for(var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ga=["String",
"prototype","startsWith"],ha=0;ha<ga.length-1;ha++){var ia=ga[ha];ia in ea||(ea[ia]={});ea=ea[ia]}
var ja=ga[ga.length-1],ma=ea[ja],na=ma?ma:function(a,b){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");c=this+"";a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};
na!=ma&&null!=na&&da(ea,ja,{configurable:!0,writable:!0,value:na});var m=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function oa(){}
function pa(a){a.la=void 0;a.getInstance=function(){return a.la?a.la:a.la=new a}}
function qa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ra(a){return"array"==qa(a)}
function sa(a){var b=qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function t(a){return"string"==typeof a}
function ta(a){return"function"==qa(a)}
function ua(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function va(a){return a[wa]||(a[wa]=++xa)}
var wa="closure_uid_"+(1E9*Math.random()>>>0),xa=0;function ya(a,b,c){return a.call.apply(a.bind,arguments)}
function za(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function u(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=ya:u=za;return u.apply(null,arguments)}
function Aa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function Ba(a,b){for(var c in b)a[c]=b[c]}
var v=Date.now||function(){return+new Date};
function w(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.nb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ca=document,x=window;var Da=(new Date).getTime();function Ea(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Fa(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;A=n=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],n,H,c=0;80>c;c++)40>c?20>c?(n=h^d&(f^h),H=1518500249):(n=d^f^h,H=1859775393):60>c?(n=d&f|h&(d|f),H=2400959708):(n=d^f^h,H=3395469782),n=((a<<5|a>>>27)&4294967295)+n+k+H+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=n;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==n)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,A+=64;for(;d<c;)if(f[n++]=a[d++],A++,64==n)for(n=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,A+=64}
function d(){var a=[],d=8*A;56>n?c(h,56-n):c(h,64-(n-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var n,A;a();return{reset:a,update:c,digest:d,Ga:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ga=window,Ha=document,Ia=Ga.location;function Ja(){}
var Ka=/\[native code\]/;function y(a,b,c){return a[b]=a[b]||c}
function La(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ma(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function z(){var a;if((a=Object.create)&&Ka.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Na=y(Ga,"gapi",{});function Oa(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Oa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Pa(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(B,Error);B.prototype.name="CustomError";function Qa(a,b){this.width=a;this.height=b}
l=Qa.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ra(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Sa(a){var b=Ta,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ua(){var a=Va,b;for(b in a)return!1;return!0}
function Wa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Xa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function $a(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function ab(a){ab[" "](a);return a}
ab[" "]=oa;function bb(a,b){var c=cb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function db(){}
;var eb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function fb(a,b){return a<b?-1:a>b?1:0}
function gb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var hb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
m.addEventListener("test",null,b)}catch(c){}return a}();var ib={};function jb(a){return ib[a]||(ib[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function kb(a,b){return a?a.dataset?a.dataset[jb(b)]:a.getAttribute("data-"+b):null}
function lb(a){a&&(a.dataset?a.dataset[jb("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function mb(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in nb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
mb.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
mb.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
mb.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var nb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var ob=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},pb="Microsoft Internet Explorer"==navigator.appName;
function qb(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;function rb(a,b,c,d){this.f=a;this.i=b;this.g=c;this.b=d}
var sb=1;function tb(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.g&&(b.veCounter=a.g));void 0!==a.b&&(b.dataElement=tb(a.b));return b}
;var ub=null;"undefined"!=typeof XMLHttpRequest?ub=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(ub=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function vb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function C(a,b){this.version=a;this.args=b}
function wb(a){if(!a.Aa){var b={};a.call(b);a.Aa=b.version}return a.Aa}
function xb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=wb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function D(a,b){this.topic=a;this.b=b}
D.prototype.toString=function(){return this.topic};var yb=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function E(){this.f=this.f;this.G=this.G}
E.prototype.f=!1;E.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function zb(a,b){a.f?p(void 0)?b.call(void 0):b():(a.G||(a.G=[]),a.G.push(p(void 0)?u(b,void 0):b))}
E.prototype.o=function(){if(this.G)for(;this.G.length;)this.G.shift()()};
function Ab(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Bb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];sa(d)?Bb.apply(null,d):Ab(d)}}
;var F;a:{var Cb=m.navigator;if(Cb){var Db=Cb.userAgent;if(Db){F=Db;break a}}F=""}function G(a){return-1!=F.indexOf(a)}
;function Eb(a){this.b=a||{cookie:""}}
l=Eb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(v()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=eb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=eb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Fb=new Eb("undefined"==typeof document?null:document);Fb.f=3950;var Gb=!1,Hb="";function Ib(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Gb=!0,a.description)){Hb=Ib(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Gb=!0;Hb="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Gb=!(!a||!a.enabledPlugin))){Hb=Ib(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Gb=!0;Hb=Ib(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Gb=!0;Hb="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Gb=!0,Hb=Ib(b.GetVariable("$version"))}catch(c){}})();
var Jb=Gb,Kb=Hb;function Lb(a,b,c){var d=Mb();this.label=a;this.type=b;this.eventId=c;this.value=d;this.duration=0}
;var Nb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Nb,void 0);function I(a){qb(Nb,arguments)}
function J(a,b){return a in Nb?Nb[a]:b}
;function Ob(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Xa(Pb);this.assets=a.assets||{};this.attrs=a.attrs||Xa(Qb);this.params=a.params||Xa(Rb);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Pb={enablejsapi:1},Qb={},Rb={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Sb(a){a instanceof Ob||(a=new Ob(a));return a}
function Tb(a){var b=new Ob,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==qa(d)?Xa(d):d}return b}
;var Ub={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Vb(a,b){C.call(this,1,arguments)}
w(Vb,C);var Wb=new D("timing-sent",Vb);function Xb(a){C.call(this,1,arguments);this.ga=a}
w(Xb,C);function Yb(a,b){C.call(this,2,arguments);this.f=a;this.b=b}
w(Yb,C);function Zb(a,b,c,d){C.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(Zb,C);function $b(a,b){C.call(this,1,arguments);this.f=a;this.b=b||null}
w($b,C);function ac(a){C.call(this,1,arguments)}
w(ac,C);var bc=new D("ypc-core-load",Xb),cc=new D("ypc-guide-sync-success",Yb),dc=new D("ypc-purchase-success",Zb),ec=new D("ypc-subscription-cancel",ac),fc=new D("ypc-subscription-cancel-success",$b),gc=new D("ypc-init-subscription",ac);var K;K=y(Ga,"___jsl",z());y(K,"I",0);y(K,"hel",10);function hc(){var a=Ia.href,b;if(K.dpo)b=K.h;else{b=K.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ic(a){var b=y(K,"PQ",[]);K.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function jc(a){return y(y(K,"H",z()),a,z())}
;var kc=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},L=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},lc=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function mc(a,b){var c;a:{c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function nc(a,b){var c=kc(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function oc(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function pc(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(sa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function qc(a,b,c,d){return Array.prototype.splice.apply(a,rc(arguments,1))}
function rc(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function sc(){this.f=this.b=null}
var uc=new Oa(function(){return new tc},function(a){a.reset()},100);
sc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function tc(){this.next=this.scope=this.b=null}
tc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
tc.prototype.reset=function(){this.next=this.scope=this.b=null};function vc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var wc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function M(a){return a.match(wc)}
function xc(a){return a?decodeURI(a):a}
function yc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function zc(a,b,c){if(ra(b))for(var d=0;d<b.length;d++)zc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ac(a,b,c){for(c=c||0;c<b.length;c+=2)zc(b[c],b[c+1],a);return a}
function Bc(a,b){for(var c in b)zc(c,b[c],a);return a}
function Cc(a,b){return yc(2==arguments.length?Ac([a],arguments[1],0):Ac([a],arguments,1))}
;function N(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=J("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),I("ERRORS",c))}
function Dc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){N(b)}}:a}
;function O(a){return J("EXPERIMENT_FLAGS",{})[a]}
;var Ec=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",Ec,void 0);function Gc(a){qb(Ec,arguments)}
;function Hc(a){a={client:{hl:a.Oa,gl:a.Na,clientName:a.Ma,clientVersion:a.innertubeContextClientVersion}};J("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:J("DELEGATED_SESSION_ID")});return a}
function Ic(){return{apiaryHost:J("APIARY_HOST",void 0),Ea:J("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!J("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:J("GAPI_HINT_PARAMS",void 0),innertubeApiKey:J("INNERTUBE_API_KEY",void 0),innertubeApiVersion:J("INNERTUBE_API_VERSION",void 0),Ma:J("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:J("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Oa:J("INNERTUBE_CONTEXT_HL",void 0),Na:J("INNERTUBE_CONTEXT_GL",void 0),lb:J("XHR_APIARY_HOST",
void 0)}}
;function Jc(a){E.call(this);this.g=a;this.g.subscribe("command",this.xa,this);this.i={};this.j=!1}
w(Jc,E);l=Jc.prototype;l.start=function(){this.j||this.f||(this.j=!0,Kc(this.g,"RECEIVING"))};
l.xa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(t(c.event)&&(c=c.event,!(c in this.i))){var d=u(this.cb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":t(c.event)&&Lc(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Mc(a,b||{}),c=this.b[a].apply(this.b,c),(c=Nc(a,c))&&this.j&&!this.f&&Kc(this.g,a,c))}}};
l.cb=function(a,b){this.j&&!this.f&&Kc(this.g,a,this.ha(a,b))};
l.ha=function(a,b){if(null!=b)return{value:b}};
function Lc(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.o=function(){var a=this.g;a.f||Oc(a.b,"command",this.xa,this);this.g=null;for(var b in this.i)Lc(this,b);Jc.B.o.call(this)};function Pc(a,b,c){var d=[],e=[];if(1==(ra(c)?2:1))return e=[b,a],L(d,function(a){e.push(a)}),Qc(e.join(" "));
var f=[],g=[];L(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];L(d,function(a){e.push(a)});
a=Qc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Qc(a){var b=Fa();b.update(a);return b.Ga().toLowerCase()}
;var Rc=y(K,"perf",z());y(Rc,"g",z());var Sc=y(Rc,"i",z());y(Rc,"r",[]);z();z();function Tc(a,b,c){b&&0<b.length&&(b=Uc(b),c&&0<c.length&&(b+="___"+Uc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=y(Sc,"_p",z()),y(b,c,z())[a]=(new Date).getTime(),b=Rc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Uc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function Vc(){this.b="";this.f=Wc}
Vc.prototype.ka=!0;Vc.prototype.ja=function(){return this.b};
var Wc={};function Xc(){return(G("Chrome")||G("CriOS"))&&!G("Edge")}
;function Yc(){var a=Zc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{ab(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function $c(a,b,c){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)}
;function ad(){this.b=J("ALT_PREF_COOKIE_NAME","PREF");var a=Fb.get(""+this.b,void 0);if(a)for(var a=unescape(a).split("&"),b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(P[d]=c.toString())}}
pa(ad);var P=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",P,void 0);function bd(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cd(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function dd(a){a=void 0!==P[a]?P[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ad.prototype.get=function(a,b){cd(a);bd(a);var c=void 0!==P[a]?P[a].toString():null;return null!=c?c:b?b:""};
ad.prototype.set=function(a,b){cd(a);bd(a);if(null==b)throw Error("ExpectedNotNull");P[a]=b.toString()};
ad.prototype.remove=function(a){cd(a);bd(a);delete P[a]};
ad.prototype.clear=function(){P={}};function Q(a,b){ta(a)&&(a=Dc(a));return window.setTimeout(a,b)}
;function ed(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ra(b[f])?pc(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function fd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=ed(d[1]||""),e;for(e in b)d[e]=b[e];return yc(Bc([a],d))+c}
function gd(a){a=Bc([],a);a[0]="";return a.join("")}
;var hd=v().toString();var id=z(),jd=[];function R(a){throw Error("Bad hint"+(a?": "+a:""));}
jd.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?K[b]=y(K,b,[]).concat(c):y(K,b,c)}if(b=a.u)a=y(K,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var kd=/^(\/[a-zA-Z0-9_\-]+)+$/,ld=[/\/amp\//,/\/amp$/,/^\/amp$/],md=/^[a-zA-Z0-9\-_\.,!]+$/,nd=/^gapi\.loaded_[0-9]+$/,od=/^[a-zA-Z0-9,._-]+$/;function pd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=id[f],h=null;g?h=g(e,b,c,d):R("no hint processor for: "+f);h||R("failed to generate load url");b=h;c=b.match(qd);(d=b.match(rd))&&1===d.length&&sd.test(b)&&c&&1===c.length||R("failed sanity: "+a);return h}
function td(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=ud(a);nd.test(c)||R("invalid_callback");b=vd(b);d=d&&d.length?vd(d):null;return[encodeURIComponent(a.Za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ra?"/am="+e(a.ra):"",a.ya?"/rs="+e(a.ya):"",a.Ca?"/t="+e(a.Ca):"","/cb=",e(c)].join("")}
function ud(a){"/"!==a.charAt(0)&&R("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))R("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");kd.test(b)||R("invalid_prefix");c=0;for(d=ld.length;c<d;++c)ld[c].test(b)&&R("invalid_prefix");c=wd(a,
"k",!0);d=wd(a,"am");e=wd(a,"rs");a=wd(a,"t");return{Za:b,version:c,ra:d,ya:e,Ca:a}}
function vd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");od.test(e)&&b.push(e)}return b.join(",")}
function wd(a,b,c){a=a[b];!a&&c&&R("missing: "+b);if(a){if(md.test(a))return a;R("invalid: "+b)}return null}
var sd=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,rd=/\/cb=/g,qd=/\/\//g;function xd(){var a=hc();if(!a)throw Error("Bad hint");return a}
id.m=function(a,b,c,d){(a=a[0])||R("missing_hint");return"https://apis.google.com"+td(a,b,c,d)};
var yd=decodeURI("%73cript"),zd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Ad(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>La.call(b,e)&&c.push(e)}return c}
function Bd(){var a=K.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(zd)?a:K.nonce=null;var b=y(K,"us",[]);if(!b||!b.length)return K.nonce=null;for(var c=Ha.getElementsByTagName(yd),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(zd))return K.nonce=a}}return null}
function Cd(a){if("loading"!=Ha.readyState)Dd(a);else{var b=Bd(),c="";null!==b&&(c=' nonce="'+b+'"');Ha.write("<"+yd+' src="'+encodeURI(a)+'"'+c+"></"+yd+">")}}
function Dd(a){var b=Ha.createElement(yd);b.setAttribute("src",a);a=Bd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Ha.getElementsByTagName(yd)[0])?a.parentNode.insertBefore(b,a):(Ha.head||Ha.body||Ha.documentElement).appendChild(b)}
function Ed(a,b){var c=b&&b._c;if(c)for(var d=0;d<jd.length;d++){var e=jd[d][0],f=jd[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Fd(a,b,c){Gd(function(){var c;c=b===hc()?y(Na,"_",z()):z();c=y(jc(b),"_",c);a(c)},c)}
function Hd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ed(a,c);var d=a?a.split(":"):[],e=c.h||xd(),f=y(K,"ah",z());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,n=g.length&&g[g.length-1]||null,A=n;n&&n.hint==k||(A={hint:k,features:[]},g.push(A));A.features.push(h)}var H=g.length;if(1<H){var fa=c.callback;fa&&(c.callback=function(){0==--H&&fa()})}for(;d=g.shift();)Id(d.features,c,d.hint)}else Id(d||[],c,e)}
function Id(a,b,c){function d(a,b){if(H)return 0;Ga.clearTimeout(A);fa.push.apply(fa,ba);var d=((Na||{}).config||{}).update;d?d(f):f&&y(K,"cu",[]).push(f);if(b){Tc("me0",a,aa);try{Fd(b,c,n)}finally{Tc("me1",a,aa)}}return 1}
a=Ma(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,n=void 0;"function"==typeof k&&(n=k);var A=null,H=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=y(jc(c),"r",[]).sort(),fa=y(jc(c),"L",[]).sort(),aa=[].concat(k);0<g&&(A=Ga.setTimeout(function(){H=!0;h()},g));
var ba=Ad(a,fa);if(ba.length){var ba=Ad(a,k),ka=y(K,"CP",[]),la=ka.length;ka[la]=function(a){function b(){var a=ka[la+1];a&&a()}
function c(b){ka[la]=null;d(ba,a)&&ic(function(){e&&e();b()})}
if(!a)return 0;Tc("ml1",ba,aa);0<la&&ka[la-1]?ka[la]=function(){c(b)}:c(b)};
if(ba.length){var Fc="loaded_"+K.I++;Na[Fc]=function(a){ka[la](a);Na[Fc]=null};
a=pd(c,ba,"gapi."+Fc,k);k.push.apply(k,ba);Tc("ml0",ba,aa);b.sync||Ga.___gapisync?Cd(a):Dd(a)}else ka[la](Ja)}else d(ba)&&e&&e()}
function Gd(a,b){if(K.hee&&0<K.hel)try{return a()}catch(c){b&&b(c),K.hel--,Hd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Na.load=function(a,b){return Gd(function(){return Hd(a,b)})};function Jd(a){m.setTimeout(function(){throw a;},0)}
var Kd;
function Ld(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.sa;c.sa=null;a()}};
return function(a){d.next={sa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function Md(){this.b="";this.f=Nd}
Md.prototype.ka=!0;Md.prototype.ja=function(){return this.b};
function Od(a){return a instanceof Md&&a.constructor===Md&&a.f===Nd?a.b:"type_error:SafeUrl"}
var Pd=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Qd(a){if(a instanceof Md)return a;a=a.ka?a.ja():String(a);Pd.test(a)||(a="about:invalid#zClosurez");return Rd(a)}
var Nd={};function Rd(a){var b=new Md;b.b=a;return b}
Rd("about:blank");var Sd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Td(){}
Td.prototype.next=function(){throw Sd;};
Td.prototype.ba=function(){return this};
function Ud(a){if(a instanceof Td)return a;if("function"==typeof a.ba)return a.ba(!1);if(sa(a)){var b=0,c=new Td;c.next=function(){for(;;){if(b>=a.length)throw Sd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Vd(a,b){if(sa(a))try{L(a,b,void 0)}catch(c){if(c!==Sd)throw c;}else{a=Ud(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Sd)throw c;}}}
function Wd(a){if(sa(a))return oc(a);a=Ud(a);var b=[];Vd(a,function(a){b.push(a)});
return b}
;function Xd(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Xd.prototype.equals=function(a){return a instanceof Xd&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Xd.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Xd.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Xd.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};var Yd=G("Opera"),S=G("Trident")||G("MSIE"),Zd=G("Edge"),$d=G("Gecko")&&!(-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),ae=-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge"),be=G("Macintosh"),ce=G("Windows"),de=G("Android"),ee=vc(),fe=G("iPad"),ge=G("iPod");function he(){var a=m.document;return a?a.documentMode:void 0}
var ie;a:{var je="",ke=function(){var a=F;if($d)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Zd)return/Edge\/([\d\.]+)/.exec(a);if(S)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ae)return/WebKit\/(\S+)/.exec(a);if(Yd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ke&&(je=ke?ke[1]:"");if(S){var le=he();if(null!=le&&le>parseFloat(je)){ie=String(le);break a}}ie=je}var me=ie,cb={};
function T(a){return bb(a,function(){for(var b=0,c=eb(String(me)).split("."),d=eb(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=fb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||fb(0==g[2].length,0==h[2].length)||fb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var ne;var oe=m.document;ne=oe&&S?he()||("CSS1Compat"==oe.compatMode?parseInt(me,10):5):void 0;function pe(a,b){this.events=[];this.j={};this.b={};this.g=b||m;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue);this.f=null!=this.g.b?this.g.b:Math.random()<a}
function Mb(){var a=m.performance;return a&&a.now?a.now():v()}
function qe(a){return"goog_"+a.label+"_"+a.type+"_"+a.eventId}
function re(a,b){var c=a.g;c.performance&&c.performance.mark&&c.performance.mark(b)}
function se(){var a=te;L(a.events,a.i,a);$c(a.b,function(a){L(a,this.i,this)},a);
a.b={};a.events.length=0;a.f=!1}
pe.prototype.i=function(a){a=qe(a);var b=this.g.performance;b&&b.clearMarks&&(b.clearMarks(a+"_start"),b.clearMarks(a+"_end"))};
pe.prototype.start=function(a,b){if(!this.f)return null;var c=(this.j[a]||0)+1;this.j[a]=c;var c=new Lb(a,b,c),d=a+"_"+b;this.b[d]?this.b[d].push(c):this.b[d]=[c];re(this,qe(c)+"_start");return c};
pe.prototype.end=function(a,b){if(this.f){var c=a+"_"+b,d=this.b[c];d&&d.length&&(c=this.b[c].pop(),c.duration=Mb()-c.value,re(this,qe(c)+"_end"),this.events.push(c))}};function ue(a,b,c){isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Q(a,c||0)}
function ve(a,b){return ue(a,1,b)}
;function we(a,b){xe||ye();ze||(xe(),ze=!0);var c=Ae,d=uc.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var xe;function ye(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);xe=function(){a.then(Be)}}else xe=function(){var a=Be;
!ta(m.setImmediate)||m.Window&&m.Window.prototype&&!G("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Kd||(Kd=Ld()),Kd(a)):m.setImmediate(a)}}
var ze=!1,Ae=new sc;function Be(){for(var a;a=Ae.remove();){try{a.b.call(a.scope)}catch(b){Jd(b)}Pa(uc,a)}ze=!1}
;!$d&&!S||S&&9<=Number(ne)||$d&&T("1.9.1");S&&T("9");S&&T("9");!ae||T("528");$d&&T("1.9b")||S&&T("8")||Yd&&T("9.5")||ae&&T("528");$d&&!T("8")||S&&T("9");function Ce(){this.b=""}
Ce.prototype.ka=!0;Ce.prototype.ja=function(){return this.b};
function De(a){var b=new Ce;b.b=a;return b}
De("<!DOCTYPE html>");De("");De("<br>");function Ee(){}
w(Ee,db);Ee.prototype.clear=function(){var a=Wd(this.ba(!0)),b=this;L(a,function(a){b.remove(a)})};(function(){var a;return ce?(a=/Windows NT ([0-9.]+)/,(a=a.exec(F))?a[1]:"0"):be?(a=/10[_.][0-9_.]+/,(a=a.exec(F))?a[0].replace(/_/g,"."):"10"):de?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(F))?a[1]:""):ee||fe||ge?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(F))?a[1].replace(/_/g,"."):""):""})();var Fe=G("Firefox"),Ge=vc()||G("iPod"),He=G("iPad"),Ie=G("Android")&&!(Xc()||G("Firefox")||G("Opera")||G("Silk")),Je=Xc(),Ke=G("Safari")&&!(Xc()||G("Coast")||G("Opera")||G("Edge")||G("Silk")||G("Android"))&&!(vc()||G("iPad")||G("iPod"));function Le(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,k,n;if(pb)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(A){g=null}else k=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),g=k.appendChild(n);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(A){h=""}k&&n&&k.removeChild(n);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
pa(Le);function Me(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var Ne;var Oe=F,Oe=Oe.toLowerCase();if(-1!=Oe.indexOf("android")){var Pe=Oe.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Pe)Ne=Number(Pe[1]);else{var Qe={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Re=[],Se=0,Te;for(Te in Qe)Re[Se++]=Te;var Ue=Oe.match("("+Re.join("|")+")");Ne=Ue?Qe[Ue[0]]:0}}else Ne=void 0;function Ve(a,b){var c;c=b instanceof Md?b:Qd(b);a.href=Od(c)}
;function We(a){Xe();var b=new Vc;b.b=a;return b}
var Xe=oa;function U(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=oa)try{var c=this;a.call(b,function(a){Ye(c,2,a)},function(a){Ye(c,3,a)})}catch(d){Ye(this,3,d)}}
function Ze(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Ze.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var $e=new Oa(function(){return new Ze},function(a){a.reset()},100);
function af(a,b,c){var d=$e.get();d.g=a;d.f=b;d.context=c;return d}
function bf(a){if(a instanceof U)return a;var b=new U(oa);Ye(b,2,a);return b}
function cf(a){return new U(function(b,c){c(a)})}
U.prototype.then=function(a,b,c){return df(this,ta(a)?a:null,ta(b)?b:null,c)};
$a(U);U.prototype.cancel=function(a){0==this.b&&we(function(){var b=new ef(a);ff(this,b)},this)};
function ff(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?ff(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):gf(c),hf(c,e,3,b)))}a.g=null}else Ye(a,3,b)}
function jf(a,b){a.f||2!=a.b&&3!=a.b||kf(a);a.i?a.i.next=b:a.f=b;a.i=b}
function df(a,b,c,d){var e=af(null,null,null);e.b=new U(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof ef?g(b):a(e)}catch(n){g(n)}}:g});
e.b.g=a;jf(a,e);return e.b}
U.prototype.C=function(a){this.b=0;Ye(this,2,a)};
U.prototype.G=function(a){this.b=0;Ye(this,3,a)};
function Ye(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,g=a.G;if(e instanceof U)jf(e,af(f||oa,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(ua(e))try{var k=e.then;if(ta(k)){lf(e,k,f,g,a);d=!0;break a}}catch(n){g.call(a,n);d=!0;break a}d=!1}}}d||(a.w=c,a.b=b,a.g=null,kf(a),3!=b||c instanceof ef||mf(a,c))}}
function lf(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function kf(a){a.l||(a.l=!0,we(a.D,a))}
function gf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
U.prototype.D=function(){for(var a;a=gf(this);)hf(this,a,this.b,this.w);this.l=!1};
function hf(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,nf(b,c,d);else try{b.i?b.g.call(b.context):nf(b,c,d)}catch(e){of.call(null,e)}Pa($e,b)}
function nf(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function mf(a,b){a.j=!0;we(function(){a.j&&of.call(null,b)})}
var of=Jd;function ef(a){B.call(this,a)}
w(ef,B);ef.prototype.name="cancel";function V(a){E.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
w(V,E);l=V.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function Oc(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=mc(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
l.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=oa):(c&&nc(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.V=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];pf(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.L(c)}}return 0!=e}return!1};
function pf(a,b,c){we(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(L(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
l.o=function(){V.B.o.call(this);this.clear();this.i.length=0};function qf(a){this.b=a}
w(qf,Ee);l=qf.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ba=function(a){var b=0,c=this.b,d=new Td;d.next=function(){if(b>=c.length)throw Sd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function rf(a){return(a=a.exec(F))?a[1]:""}
(function(){if(Fe)return rf(/Firefox\/([0-9.]+)/);if(S||Zd||Yd)return me;if(Je)return rf(/Chrome\/([0-9.]+)/);if(Ke&&!(vc()||G("iPad")||G("iPod")))return rf(/Version\/([0-9.]+)/);if(Ge||He){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(F);if(a)return a[1]+"."+a[2]}else if(Ie)return(a=rf(/Android\s+([0-9.]+)/))?a:rf(/Version\/([0-9.]+)/);return""})();var sf;var tf=F,uf=tf.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!uf||2>uf.length)sf=void 0;else{var vf=tf.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);sf=vf&&6==vf.length?Number(vf[5].replace("_",".")):0}0<=sf&&0<=F.search("Safari")&&F.search("Version");function wf(a){var b=document;return t(a)?b.getElementById(a):a}
function xf(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function yf(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function zf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Af(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(Af,qf);function Bf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(Bf,qf);function Cf(){E.call(this);this.b=new V;zb(this,Aa(Ab,this.b))}
w(Cf,E);Cf.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
Cf.prototype.L=function(a){return this.f?!1:this.b.L(a)};
Cf.prototype.l=function(a,b){this.f||this.b.V.apply(this.b,arguments)};var Df=r("yt.pubsub.instance_")||new V;V.prototype.subscribe=V.prototype.subscribe;V.prototype.unsubscribeByKey=V.prototype.L;V.prototype.publish=V.prototype.V;V.prototype.clear=V.prototype.clear;q("yt.pubsub.instance_",Df,void 0);var Ef=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Ef,void 0);var Ff=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Ff,void 0);var Gf=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Gf,void 0);
var Hf=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Hf,void 0);function If(a,b){var c=Jf();if(c){var d=c.subscribe(a,function(){if(!Hf||Hf!=d){var c=arguments,f;f=function(){Ef[d]&&b.apply(window,c)};
try{Gf[a]?f():Q(f,0)}catch(g){N(g)}}},void 0);
Ef[d]=!0;Ff[a]||(Ff[a]=[]);Ff[a].push(d);return d}return 0}
function Kf(a){var b=Jf();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),L(a,function(a){b.unsubscribeByKey(a);delete Ef[a]}))}
function Lf(a,b){var c=Jf();return c?c.publish.apply(c,arguments):!1}
function Mf(a){Ff[a]&&(a=Ff[a],L(a,function(a){Ef[a]&&delete Ef[a]}),a.length=0)}
function Nf(a){var b=Jf();if(b)if(b.clear(a),a)Mf(a);else for(var c in Ff)Mf(c)}
function Jf(){return r("yt.pubsub.instance_")}
;var Of=r("yt.pubsub2.instance_")||new V;V.prototype.subscribe=V.prototype.subscribe;V.prototype.unsubscribeByKey=V.prototype.L;V.prototype.publish=V.prototype.V;V.prototype.clear=V.prototype.clear;q("yt.pubsub2.instance_",Of,void 0);var Pf=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Pf,void 0);var Qf=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Qf,void 0);var Rf=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Rf,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function W(a,b){var c=Sf();c&&c.publish.call(c,a.toString(),a,b)}
function X(a,b){var c=Sf();if(!c)return 0;var d=c.subscribe(a.toString(),function(c,f){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=d){var e=function(){if(Pf[d])try{if(f&&a instanceof D&&a!=c)try{f=xb(a.b,f)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(window,f)}catch(h){N(h)}};
Rf[a.toString()]?r("yt.scheduler.instance")?ve(e):Q(e,0):e()}});
Pf[d]=!0;Qf[a.toString()]||(Qf[a.toString()]=[]);Qf[a.toString()].push(d);return d}
function Tf(a){var b=Sf();b&&("number"==typeof a&&(a=[a]),L(a,function(a){b.unsubscribeByKey(a);delete Pf[a]}))}
function Sf(){return r("yt.pubsub2.instance_")}
;function Uf(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Vf=0,Wf=r("yt.dom.dom.getNextId")||function(){return++Vf};
q("yt.dom.dom.getNextId",Wf,void 0);var Xf={log_event:"events",log_interaction:"interactions"},Yf={},Zf={},$f=0,Va=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Va,void 0);function ag(a,b){Va[a.endpoint]=Va[a.endpoint]||[];var c=Va[a.endpoint];c.push(a.va);Zf[a.endpoint]=b;var d=Number(O("web_logging_max_batch")||0)||20;c.length>=d?bg():cg()}
function bg(){window.clearTimeout($f);if(!Ua()){for(var a in Va){var b=Yf[a];if(!b){b=Zf[a];if(!b)continue;b=new b;Yf[a]=b}var c=b.f();c.requestTimeMs=Math.round(ob());c[Xf[a]]=Va[a];b.g(a,c,{});delete Va[a]}Ua()||cg()}}
function cg(){window.clearTimeout($f);$f=Q(bg,J("LOGGING_BATCH_TIMEOUT",1E4))}
;var dg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,eg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function fg(a,b){var c=gg(a),d=document.getElementById(c),e=d&&kb(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=If(c,b),g=""+va(b);hg[g]=e}f||(d=ig(a,c,function(){kb(d,"loaded")||(lb(d),Lf(c),Q(Aa(Nf,c),0))}))}}
function ig(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function jg(a,b){if(a&&b){var c=""+va(b);(c=hg[c])&&Kf(c)}}
function gg(a){var b=document.createElement("a");Ve(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+gb(a)}
var hg={};function kg(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(dg,""),c=c.replace(eg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else fg(a,b)}
;var lg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function mg(a){if(window.spf){var b=a.match(lg);spf.style.load(a,b?b[1]:"",void 0)}else ng(a)}
function ng(a){var b=og(a),c=document.getElementById(b),d=c&&kb(c,"loaded");d||c&&!d||(c=pg(a,b,function(){kb(c,"loaded")||(lb(c),Lf(b),Q(Aa(Nf,b),0))}))}
function pg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=We(a);d.rel="stylesheet";d.href=a instanceof Vc&&a.constructor===Vc&&a.f===Wc?a.b:"type_error:TrustedResourceUrl";(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function og(a){var b=document.createElement("a");Ve(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+gb(a)}
;function qg(a,b,c){Cf.call(this);this.g=a;this.i=b;this.j=c}
w(qg,Cf);function Kc(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(rg(a),d.i))}}
qg.prototype.o=function(){this.i=this.g=null;qg.B.o.call(this)};function sg(a){var b=Cc("/signin?context=popup","next",document.location.protocol+"//"+document.domain+"/post_login"),b=Cc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=If("LOGGED_IN",function(b){Kf(J("LOGGED_IN_PUBSUB_KEY",void 0));I("LOGGED_IN",!0);a(b)});
I("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",Lf,void 0);var tg=!!window.google_async_iframe_id,Zc=tg&&window.parent||window;var ug=null;function vg(){var a=J("BG_I",null),b=J("BG_IU",null),c=J("BG_P",void 0);b?kg(b,function(){ug=new botguard.bg(c)}):a&&(eval(a),ug=new botguard.bg(c))}
function wg(){return null!=ug}
function xg(){return ug?ug.invoke():null}
;var yg=[],zg=!1;function Ag(){function a(){zg=!0;"google_ad_status"in window?I("DCLKSTAT",1):I("DCLKSTAT",2)}
kg("//static.doubleclick.net/instream/ad_status.js",a);yg.push(ve(function(){zg||"google_ad_status"in window||(jg("//static.doubleclick.net/instream/ad_status.js",a),I("DCLKSTAT",3))},5E3))}
function Bg(){return parseInt(J("DCLKSTAT",0),10)}
;var Ta=r("yt.events.events.listeners_")||{};q("yt.events.events.listeners_",Ta,void 0);var Cg=r("yt.events.events.counter_")||{count:0};q("yt.events.events.counter_",Cg,void 0);function Dg(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Sa(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function Eg(a,b,c){if(!a||!a.addEventListener&&!a.attachEvent)return"";var d=Dg(a,b,c);if(d)return d;var d=++Cg.count+"",e=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new mb(d);if(!zf(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new mb(b);
b.currentTarget=a;return c.call(a,b)};
f=Dc(f);a.addEventListener?("mouseenter"==b&&e?b="mouseover":"mouseleave"==b&&e?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,f,!1)):a.attachEvent("on"+b,f);Ta[d]=[a,b,c,f,!1];return d}
function Fg(a){a&&("string"==typeof a&&(a=[a]),L(a,function(a){if(a in Ta){var b=Ta[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ta[a]}}))}
;var Gg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Hg=['audio/mp4; codecs="mp4a.40.2"'];var Ig;if(tg&&!Yc()){var Jg="."+Ca.domain;try{for(;2<Jg.split(".").length&&!Yc();)Ca.domain=Jg=Jg.substr(Jg.indexOf(".")+1),Zc=window.parent}catch(a){}Yc()||(Zc=window)}Ig=Zc;var te=new pe(1,Ig);if("complete"==Ig.document.readyState)Ig.b||se();else if(te.f){var Kg=function(){Ig.b||se()};
Ig.addEventListener?Ig.addEventListener("load",Kg,hb?void 0:!1):Ig.attachEvent&&Ig.attachEvent("onload",Kg)};function Lg(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Mg(a){a=String(a);if(Lg(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Ng(a){try{return eval("("+a+")")}catch(b){throw b;}}
function rg(a){var b=[];Og(new Pg,a,b);return b.join("")}
function Pg(){}
function Og(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ra(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Og(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Qg(d,c),c.push(":"),Og(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Qg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Rg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Sg=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Qg(a,b){b.push('"',a.replace(Sg,function(a){var b=Rg[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Rg[a]=b);return b}),'"')}
;function Tg(){if(null==r("_lact",window)){var a=parseInt(J("LACT"),10),a=isFinite(a)?v()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Ug();Eg(document,"keydown",Ug);Eg(document,"keyup",Ug);Eg(document,"mousedown",Ug);Eg(document,"mouseup",Ug);If("page-mouse",Ug);If("page-scroll",Ug);If("page-resize",Ug)}}
function Ug(){null==r("_lact",window)&&(Tg(),r("_lact",window));var a=v();q("_lact",a,window);Lf("USER_ACTIVE")}
function Vg(){var a=r("_lact",window);return null==a?-1:Math.max(v()-a,0)}
;function Wg(a){this.b=a}
Wg.prototype.set=function(a,b){p(b)?this.b.set(a,rg(b)):this.b.remove(a)};
Wg.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Mg(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wg.prototype.remove=function(a){this.b.remove(a)};function Xg(a,b,c,d){E.call(this);this.i=b||null;this.C="*";this.j=c||null;this.b=null;this.channel=d||null;this.K=!!a;this.D=u(this.J,this);window.addEventListener("message",this.D)}
ca(Xg,E);Xg.prototype.J=function(a){if(!("*"!=this.j&&a.origin!=this.j||this.i&&a.source!=this.i)&&t(a.data)){var b;try{b=Mg(a.data)}catch(c){return}if(!(null==b||this.K&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.j=this.C=a.origin:N(Error("MessageEvent origin is null"),"WARNING");this.i=a.source;this.b=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.l&&(this.w&&!(0<=kc(this.w,b.func))||this.l(b.func,b.args))}}};
Xg.prototype.sendMessage=function(a,b){var c=b||this.i;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=rg(a);c.postMessage(d,this.C)}catch(e){N(e,"WARNING")}}};
Xg.prototype.o=function(){window.removeEventListener("message",this.D);E.prototype.o.call(this)};function Yg(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||ob());e[a]=b;O("web_gel_lact")&&(e.context={lastActivityMs:Vg()});ag({endpoint:"log_event",va:e},c)}
;function Zg(a,b,c,d){$g(a,{attachChild:{csn:b,parentVisualElement:tb(c),visualElements:[tb(d)]}},void 0)}
function ah(a,b,c){c=lc(c,function(a){return tb(a)});
$g(a,{visibilityUpdate:{csn:b,visualElements:c}})}
function $g(a,b,c){b.eventTimeMs=Math.round(ob());b.lactMs=Vg();c&&(b.clientData=bh(c));ag({endpoint:"log_interaction",va:b},a)}
function bh(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=lc(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function ch(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Dc(b)(k)}
var k=ub&&ub();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=dh(a,e))for(var n in e)k.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function dh(a,b){b=b||{};var c;c=void 0;c=window.location.href;var d=M(a)[1]||null,e=xc(M(a)[3]||null);d&&e?(d=c,c=M(a),d=M(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?xc(M(c)[3]||null)==e&&(Number(M(c)[4]||null)||null)==(Number(M(a)[4]||null)||null):!0;for(var f in eh){if((e=d=J(eh[f]))&&!(e=c)){var g=a,e=f,h=J("CORS_HEADER_WHITELIST")||{};e=(g=xc(M(g)[3]||null))?(h=h[g])?0<=kc(h,e):!1:!0}e&&(b[f]=d)}return b}
function fh(a,b){b.method="POST";b.A||(b.A={});gh(a,b)}
function hh(a,b){var c=J("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.pb&&(!xc(M(a)[3]||null)||b.withCredentials||xc(M(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.A&&b.A[c])}
function gh(a,b){var c=b.format||"JSON";b.La&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=J("XSRF_FIELD_NAME",void 0),e=J("XSRF_TOKEN",void 0),f=b.na;f&&(f[d]&&delete f[d],a=fd(a,f||{}));var g=b.postBody||"",f=b.A;hh(a,b)&&(f||(f={}),f[d]=e);f&&t(g)&&(d=ed(g),Za(d,f),g=b.wa&&"JSON"==b.wa?JSON.stringify(d):gd(d));var h=!1,k,n=ch(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=vb(a),e=null;if(d||400<=a.status&&
500>a.status)e=ih(c,a,b.ob);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.ma&&b.ma.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.N&&0<b.timeout&&(k=Q(function(){h||(h=!0,n.abort(),window.clearTimeout(k),b.N.call(b.context||m,n))},b.timeout))}
function ih(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Ng(a));break;case "XML":if(b=(b=b.responseXML)?jh(b):null)d={},L(b.getElementsByTagName("*"),function(a){d[a.tagName]=kh(a)})}c&&lh(d);
return d}
function lh(a){if(ua(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=De(a[b]);a[c]=d}else lh(a[b])}}
function jh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function kh(a){var b="";L(a.childNodes,function(a){b+=a.nodeValue});
return b}
var eh={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function mh(a){this.b=a||Ic();nh||(nh=oh(this.b))}
function oh(a){return(new U(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ta(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Za(d,{_c:{jsl:{h:J("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||J("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=ed(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&Za(d,{_c:{jsl:{h:h}}})}Hd("client",d)}catch(k){N(k)}})).then(function(){})}
mh.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Ea;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=J("SESSION_INDEX");a("googleapis.config/sessionIndex",b);r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
mh.prototype.f=function(){return{context:Hc(this.b)}};
mh.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=Q(function(){e||(e=!0,c.N&&c.N())},c.timeout));
ph(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function ph(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":J("VISITOR_DATA")},method:"POST",body:rg(c)},f=u(a.i,a);nh.then(function(){f();r("gapi.client.request")(e).execute(d||oa)})}
var nh=null;function qh(a,b,c){E.call(this);this.b=a;this.i=c;this.j=Eg(window,"message",u(this.l,this));this.g=new qg(this,a,b);zb(this,Aa(Ab,this.g))}
w(qh,E);qh.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,t(a))){try{a=Mg(a)}catch(d){return}a.command&&(b=this.g,b.f||b.l("command",a.command,a.data))}};
qh.prototype.o=function(){Fg(this.j);this.b=null;qh.B.o.call(this)};function rh(a){this.b=a}
w(rh,Wg);function sh(a){this.data=a}
function th(a){return!p(a)||a instanceof sh?a:new sh(a)}
rh.prototype.set=function(a,b){rh.B.set.call(this,a,th(b))};
rh.prototype.f=function(a){a=rh.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
rh.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function uh(a,b,c){Xg.call(this,a,b,c||J("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.w=this.g=this.l=null}
ca(uh,Xg);function vh(a,b,c,d,e){c={name:c||J("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||J("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=wh)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,k=!1;try{g=a.lineNumber||a.line||"Not available"}catch(H){g="Not available",k=!0}try{h=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||f}catch(H){h=
"Not available",k=!0}a=!k&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(xh[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){h=a.fileName;b={na:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},A:{url:J("PAGE_NAME",window.location.href),
file:h},method:"POST"};e&&(b.A.stack=e);for(var n in c)b.A["client."+n]=c[n];if(n=J("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var A in n)b.A[A]=n[A];gh("/error_204",b);xh[a.message]=!0;wh++}}}
var xh={},wh=0;function yh(){this.b=Ic()}
yh.prototype.f=function(){return{context:Hc(this.b)}};
yh.prototype.g=function(a,b,c){J("VISITOR_DATA")||N(Error("Missing VISITOR_DATA when sending innertube request."));b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":J("VISITOR_DATA","")},A:b,wa:"JSON",N:c.N,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=Ea(String(m.location.href)),e=m.__OVERRIDE_SID;null==e&&(e=(new Eb(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?m.__SAPISID:m.__APISID,null==d&&(d=(new Eb(document)).get(e?
"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(m.location.href);c=f&&d&&e?[e,Pc(Ea(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=J("SESSION_INDEX",0));c=this.b.lb;c.startsWith("http")||(c="//"+c);fh(""+c+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};var zh={},Ah=0;function Bh(a,b){a&&(J("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?ch(a,b):Ch(a,b))}
function Ch(a,b){var c=new Image,d=""+Ah++;zh[d]=c;c.onload=c.onerror=function(){b&&zh[d]&&b();delete zh[d]};
c.src=a}
;function Dh(){var a=Xa(Eh);return new U(function(b,c){a.F=function(a){vb(a)?b(a):c(new Fh("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new Fh("Unknown request error","net.unknown"))};
a.N=function(){c(new Fh("Request timed out","net.timeout"))};
gh("//googleads.g.doubleclick.net/pagead/id",a)})}
function Fh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
ca(Fh,B);function Gh(a){E.call(this);this.b=[];this.g=a||this}
w(Gh,E);function Hh(a,b,c,d){d=Dc(u(d,a.g));d={target:b,name:c,ga:d};b.addEventListener(c,d.ga,void 0);a.b.push(d)}
function Ih(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ga)}}
Gh.prototype.o=function(){Ih(this);Gh.B.o.call(this)};function Jh(a){this.b=a}
w(Jh,rh);Jh.prototype.set=function(a,b,c){if(b=th(b)){if(c){if(c<v()){Jh.prototype.remove.call(this,a);return}b.expiration=c}b.creation=v()}Jh.B.set.call(this,a,b)};
Jh.prototype.f=function(a,b){var c=Jh.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<v()||!!d&&d>v()}if(d)Jh.prototype.remove.call(this,a);else return c}};function Kh(a){B.call(this,a.message||a.description||a.name);this.Qa=a instanceof Lh;this.b=a instanceof ef}
w(Kh,B);Kh.prototype.name="BiscottiError";function Lh(){B.call(this,"Biscotti ID is missing from server")}
w(Lh,B);Lh.prototype.name="BiscottiMissingError";function Mh(a,b){this.f=a;this.b=b}
Mh.prototype.then=function(a,b,c){try{if(p(this.f))return a?bf(a.call(c,this.f)):bf(this.f);if(p(this.b)){if(!b)return cf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?cf(this.b):bf(d)}throw Error("Invalid Result_ state");}catch(e){return cf(e)}};
$a(Mh);var Eh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Nh=null;function Oh(){if(!Nh){var a=u(Ph,m,2),b=Dh().then(Qh);Nh=df(b,null,a,void 0)}return Nh}
function Qh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Lh;a=JSON.parse(a.substr(4)).id;Rh(a);Nh=new Mh(a);Sh(18E5,2);return a}
function Ph(a,b){var c=new Kh(b);Rh("");Nh=new Mh(void 0,c);0<a&&Sh(12E4,a-1);throw c;}
function Sh(a,b){Q(function(){var a=u(Ph,m,b),a=Dh().then(Qh,a);df(a,null,oa,void 0)},a)}
function Rh(a){q("yt.ads.biscotti.lastId_",a,void 0)}
;function Th(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&Bh(c.data.follow_on_url)}}
;function Uh(){return O("enable_youtubei_innertube")?yh:mh}
;var Vh=r("yt.logging.latency.usageStats_")||{};q("yt.logging.latency.usageStats_",Vh,void 0);var Wh=0;function Xh(a){Vh[a]=Vh[a]||{count:0};var b=Vh[a];b.count++;b.time=ob();Wh||(Wh=ue(Yh,0,5E3));return 10<b.count?(11==b.count&&vh(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function Yh(){var a=ob(),b;for(b in Vh)6E4<a-Vh[b].time&&delete Vh[b];Wh=0}
;function Zh(){var a=!!J("WIDGET_ID_ENFORCE"),a=this.f=new uh(a),b=u(this.$a,this);a.l=b;a.w=null;this.f.channel="widget";if(a=J("WIDGET_ID"))this.f.b=a;this.i=[];this.l=!1;this.j={}}
l=Zh.prototype;l.$a=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,$h(this,c)),this.j[c]=!0)}else this.Ba(a,b)};
l.Ba=function(){};
function $h(a,b){return u(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.Ha=function(){this.l=!0;this.sendMessage("initialDelivery",this.ia());this.sendMessage("onReady");L(this.i,this.za,this);this.i=[]};
l.ia=function(){return null};
function ai(a,b){a.sendMessage("infoDelivery",b)}
l.za=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function bi(a){this.b=a}
w(bi,Jh);function ci(a){a.Qa&&di("")}
function ei(a){!a||r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_")||q("yt.ads.biscotti.getId_",Oh,void 0);try{var b;try{var c=r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_");b=c?c():Oh()}catch(d){b=cf(d)}b.then(di,ci);Q(ei,18E5)}catch(d){N(d)}}
var fi=0;
function di(a){var b;a:{try{b=window.top.location.href}catch(aa){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Da,flash:Kb||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=x.history.length}catch(aa){c=0}b.u_his=c;b.u_java=!!x.navigator&&"unknown"!==typeof x.navigator.javaEnabled&&!!x.navigator.javaEnabled&&x.navigator.javaEnabled();x.screen&&(b.u_h=x.screen.height,b.u_w=x.screen.width,b.u_ah=x.screen.availHeight,b.u_aw=x.screen.availWidth,b.u_cd=x.screen.colorDepth);x.navigator&&
x.navigator.plugins&&(b.u_nplug=x.navigator.plugins.length);x.navigator&&x.navigator.mimeTypes&&(b.u_nmime=x.navigator.mimeTypes.length);b.bid=a;b.ca_type=Jb?"flash":"image";if(O("enable_server_side_search_pyv")||O("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(aa){}try{var f=a.outerWidth,g=a.outerHeight}catch(aa){}try{var h=a.innerWidth,k=a.innerHeight}catch(aa){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,h,k];var n;e=window.top||x;try{var A;if(e.document&&!e.document.body)A=new Qa(-1,-1);else{var H=(e||window).document,fa="CSS1Compat"==H.compatMode?H.documentElement:H.body;A=(new Qa(fa.clientWidth,fa.clientHeight)).round()}n=A}catch(aa){n=new Qa(-12245933,-12245933)}A=0;window.SVGElement&&document.createElementNS&&(A|=1);Ba(b,{bc:A,bih:n.height,biw:n.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Ca.webkitVisibilityState||Ca.mozVisibilityState||Ca.visibilityState||
""]||0,wgl:!!x.WebGLRenderingContext})}b.bsq=fi++;fh("//www.youtube.com/ad_data_204",{La:!1,A:b})}
;function gi(){if(!hi&&!ii||!window.JSON)return null;var a;try{a=hi.get("yt-player-two-stage-token")}catch(b){}if(!t(a))try{a=ii.get("yt-player-two-stage-token")}catch(b){}if(!t(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var ii,ji=new Af;ii=ji.isAvailable()?new bi(ji):null;var hi,ki=new Bf;hi=ki.isAvailable()?new bi(ki):null;function li(){var a=J("ROOT_VE_TYPE",void 0);return a?new rb(void 0,a,void 0):null}
function mi(){var a=J("client-screen-nonce",void 0);a||(a=J("EVENT_ID",void 0));return a}
;function ni(a){C.call(this,1,arguments);this.b=a}
w(ni,C);function Y(a){C.call(this,1,arguments);this.b=a}
w(Y,C);function oi(a,b,c){C.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
w(oi,C);function pi(a,b,c,d,e){C.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
w(pi,C);function qi(a,b,c){C.call(this,1,arguments);this.b=a;this.subscriptionId=b}
w(qi,C);function ri(a,b,c,d,e,f,g){C.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.i=e||null;this.g=f||null;this.source=g||null}
w(ri,C);
var si=new D("subscription-batch-subscribe",ni),ti=new D("subscription-batch-unsubscribe",ni),ui=new D("subscription-subscribe",pi),vi=new D("subscription-subscribe-loading",Y),wi=new D("subscription-subscribe-loaded",Y),xi=new D("subscription-subscribe-success",qi),yi=new D("subscription-subscribe-external",pi),zi=new D("subscription-unsubscribe",ri),Ai=new D("subscription-unsubscirbe-loading",Y),Bi=new D("subscription-unsubscribe-loaded",Y),Ci=new D("subscription-unsubscribe-success",Y),Di=new D("subscription-external-unsubscribe",
ri),Ei=new D("subscription-enable-ypc",Y),Fi=new D("subscription-prefs",oi),Gi=new D("subscription-prefs-success",oi),Hi=new D("subscription-prefs-failure",oi);var Z=null,Ii=[];function Ji(a){return{externalChannelId:a.externalChannelId,Pa:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Ki(a){a&&a.externalChannelId&&Li(Ji(a))}
function Li(a){var b=J("PLAYER_CONFIG");b&&b.args&&void 0!==b.args.authuser||J("SESSION_INDEX")||J("LOGGED_IN")?(W(ui,new pi(a.externalChannelId,a.Pa?{itemType:"U",itemId:a.externalChannelId}:null)),a=gd({event:"subscribe",source:a.source}),Bh("/gen_204?"+a,void 0)):Mi(a)}
function Mi(a){sg(function(b){b.subscription_ajax&&Li(a)})}
function Ni(a){a&&a.externalChannelId&&(a=Ji(a),W(zi,new ri(a.externalChannelId,a.subscriptionId,null)),a=gd({event:"unsubscribe",source:a.source}),Bh("/gen_204?"+a,void 0))}
function Oi(a){Z&&Z.channelSubscribed(a.b,a.subscriptionId)}
function Pi(a){Z&&Z.channelUnsubscribed(a.b)}
;function Qi(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Ri(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Si(a)}
function Si(a,b,c){if(ua(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Ti(a,b,c,d){if(ua(a)&&!ra(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Ui(a){var b=a.video_id||a.videoId;if(t(b)){var c=gi()||{},d=gi()||{};p(void 0)?d[b]=void 0:delete d[b];var e=v()+3E5,f=ii;if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var Vi={vc:!0},Wi={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},Xi="ap c cver ei yt_fss yt_li".split(" "),Yi=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Zi=u(yb.clearResourceTimings||yb.webkitClearResourceTimings||yb.mozClearResourceTimings||yb.msClearResourceTimings||yb.oClearResourceTimings||
oa,yb);
function $i(a){if("_"!=a[0]){var b=a;yb.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),yb.mark(b))}var b=aj(),c=ob();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;bj()["tick_"+a]=void 0;ob();O("csi_on_gel")?(b=cj(),"_start"==a?Xh("baseline_"+b)||Yg("latencyActionBaselined",{clientActionNonce:b},yh,void 0):Xh("tick_"+a+"_"+b)||Yg("latencyActionTicked",{tickName:a,clientActionNonce:b},yh,void 0),a=!0):a=!1;if(a=!a)a=!r("yt.timing.pingSent_");if(a&&(b=J("TIMING_ACTION",void 0),a=aj(),
r("yt.timing.ready_")&&b&&a._start&&dj())){b=!0;c=J("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&ej()}}
function fj(){var a=gj().info.yt_lt="hot_bg";bj().info_yt_lt=a;if(O("csi_on_gel"))if("yt_lt"in Wi){var b={},c=Wi.yt_lt;0<=kc(Yi,c)&&(a=!!a);b[c]=a;a=cj();c=Object.keys(b).join("");Xh("info_"+c+"_"+a)||(b.clientActionNonce=a,Yg("latencyActionInfo",b,yh))}else"yt_lt"in Xi||N(Error("Unknown label yt_lt logged with GEL CSI."))}
function dj(){var a=aj();if(a.aft)return a.aft;for(var b=J("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ej(){if(!O("csi_on_gel")){var a=aj(),b=gj().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ra(a[d])){var e=d.slice(1);if(e in Vi){var f=lc(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))hj(f,e),ij(),Zi(),jj(!1,void 0),J("TIMING_ACTION")&&I("PREVIOUS_ACTION",J("TIMING_ACTION")),I("TIMING_ACTION","")}else{var g=J("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:J("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+r("ytplayer.config.assets.js");(k=yb.getEntriesByName?yb.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=dj();kj()&&"youtube"==g&&(fj(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=ob();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,n.push(d+"."+g));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);hj(f,e,void 0);W(Wb,new Vb(b.aft+(h||0),void 0))}}}
function hj(a,b,c){if(O("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Bh(a,void 0)}catch(f){Bh(a,void 0)}else Bh(a);jj(!0,c)}
function cj(){var a=gj().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=v();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(hd)for(c=1,d=0;d<hd.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^hd.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");gj().nonce=a}return a}
function aj(){return gj().tick}
function bj(){var a=gj();"gel"in a||(a.gel={});return a.gel}
function gj(){return r("ytcsi.data_")||ij()}
function ij(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function jj(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function kj(){var a=aj(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==gj().info.yt_pvis}
;var lj=!1,mj=[],nj=[];function oj(a){a.b?lj?W(yi,a):W(bc,new Xb(function(){W(gc,new ac(a.b))})):pj(a.f,a.i,a.g,a.source)}
function qj(a){a.b?lj?W(Di,a):W(bc,new Xb(function(){W(ec,new ac(a.b))})):rj(a.f,a.subscriptionId,a.i,a.g,a.source)}
function sj(a){tj(oc(a.b))}
function uj(a){vj(oc(a.b))}
function wj(a){xj(a.g,a.f,a.b)}
function yj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&W(xi,new qi(b,c,a.b.channelInfo))}
function zj(a){var b=a.b;Ra(a.f,function(a,d){W(xi,new qi(d,a,b[d]))})}
function Aj(a){W(Ci,new Y(a.f.itemId));a.b&&a.b.length&&(Bj(a.b,Ci),Bj(a.b,Ei))}
function pj(a,b,c,d){var e=new Y(a);W(vi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=J("PLAYBACK_ID"))&&(c.plid=d);(d=J("EVENT_ID"))&&(c.ei=d);b&&Cj(b,c);gh("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",na:f,A:c,F:function(b,c){var d=c.response;W(xi,new qi(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Lf("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Th(d.actions)},
ma:function(){W(wi,e)}})}
function rj(a,b,c,d,e){var f=new Y(a);W(Ai,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=J("PLAYBACK_ID"))&&(d.plid=a);(a=J("EVENT_ID"))&&(d.ei=a);c&&Cj(c,d);gh("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",na:g,A:d,F:function(a,b){var c=b.response;W(Ci,f);c.actions&&Th(c.actions)},
ma:function(){W(Bi,f)}})}
function xj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new oi(a,b,c);gh("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",A:d,onError:function(){W(Hi,e)},
F:function(){W(Gi,e)}})}}
function tj(a){if(a.length){var b=qc(a,0,40);W("subscription-batch-subscribe-loading");Bj(b,vi);var c={};c.a=b.join(",");var d=function(){W("subscription-batch-subscribe-loaded");Bj(b,wi)};
gh("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",A:c,F:function(c,f){d();var e=f.response,h=e.id;if(ra(h)&&h.length==b.length){var k=e.channel_info_map;L(h,function(a,c){var d=b[c];W(xi,new qi(d,a,k[d]))});
a.length?tj(a):W("subscription-batch-subscribe-finished")}},
onError:function(){d();W("subscription-batch-subscribe-failure")}})}}
function vj(a){if(a.length){var b=qc(a,0,40);W("subscription-batch-unsubscribe-loading");Bj(b,Ai);var c={};c.c=b.join(",");var d=function(){W("subscription-batch-unsubscribe-loaded");Bj(b,Bi)};
gh("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",A:c,F:function(){d();Bj(b,Ci);a.length&&vj(a)},
onError:function(){d()}})}}
function Bj(a,b){L(a,function(a){W(b,new Y(a))})}
function Cj(a,b){var c=ed(a);Ba(b,c)}
;function Dj(a,b){E.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.Z=this.S=null;this.U=new V;zb(this,Aa(Ab,this.U));this.j={};this.J=this.$=this.i=this.fa=this.b=null;this.W=!1;this.K=this.D=this.P=this.R=null;this.aa={};this.Da=["onReady"];this.X=new Gh(this);zb(this,Aa(Ab,this.X));this.da=null;this.pa=NaN;this.Y={};Ej(this);this.H("onDetailedError",u(this.Ta,this));this.H("onTabOrderChange",u(this.Fa,this));this.H("onTabAnnounce",u(this.qa,this));this.H("WATCH_LATER_VIDEO_ADDED",u(this.Ua,
this));this.H("WATCH_LATER_VIDEO_REMOVED",u(this.Va,this));Fe||(this.H("onMouseWheelCapture",u(this.Ra,this)),this.H("onMouseWheelRelease",u(this.Sa,this)));this.H("onAdAnnounce",u(this.qa,this));this.M=new Gh(this);zb(this,Aa(Ab,this.M));this.ea=!1;this.ca=null}
w(Dj,E);var Fj=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=Dj.prototype;l.oa=function(a,b){this.f||(Gj(this,a),Hj(this,b),this.C&&Ij(this))};
function Gj(a,b){a.fa=b;a.b=Tb(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.$||(a.$=Jj(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=Uf(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=Uf(Number(c)||c)}
l.Ia=function(){return this.fa};
function Ij(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Kj(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Me(Le.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Lj(a,b){if((!b||(5!=(Ub[b.errorCode]||5)?0:-1!=Fj.indexOf(b.errorCode)))&&Kj(a)){var c=Mj(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Sb(c));d.args.autoplay=1;d.args.html5_unavailable="1";Gj(a,d);Hj(a,"flash")}}
function Hj(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Kj(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Ne)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Gg:Hg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Nj(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Kj(a)?"flash":"unsupported":"html5"}("flash"==b?a.jb:a.kb).call(a)}}
function Nj(a){var b=!0,c=Mj(a);c&&a.b&&(a=a.b,b=kb(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.kb=function(){if(!this.W){var a=Nj(this);a&&"html5"==Oj(this)?(this.J="html5",this.C||this.O()):(Pj(this),this.J="html5",a&&this.P?(this.l.appendChild(this.P),this.O()):(this.b.loaded=!0,this.R=u(function(){var a=this.l,c=Tb(this.b);r("yt.player.Application.create")(a,c);this.O()},this),this.W=!0,a?this.R():(kg(this.b.assets.js,this.R),mg(this.b.assets.css))))}};
l.jb=function(){var a=Tb(this.b);if(!this.D){var b=Mj(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,Hh(this.X,this.D,"focus",this.ta),this.K=document.createElement("SPAN"),this.K.tabIndex=0,Hh(this.X,this.K,"focus",this.ta),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.K,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Oj(this))this.J="flash",this.C||this.O();else{Pj(this);this.J=
"flash";this.b.loaded=!0;var b=Le.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Me(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=t(b)?wf(b):b,d=Xa(a.attrs);d.tabindex=0;var e=Xa(a.params);e.flashvars=gd(a.args);if(pb){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var k in e)a.setAttribute(k,e[k])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.O()}};
l.ta=function(){Mj(this).focus()};
function Mj(a){var b=wf(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
l.O=function(){if(!this.f){var a=Mj(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.W=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Lj(this);else{Ej(this);this.C=!0;a=Mj(this);a.addEventListener&&(this.S=Qj(this,a,"addEventListener"));a.removeEventListener&&(this.Z=Qj(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Qj(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);Ij(this);this.$&&this.$(this.g);this.U.V("onReady",this.g)}else this.pa=Q(u(this.O,this),50)}};
function Qj(a,b,c){var d=b[c];return function(){try{return a.da=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.da=e,N(e,"WARNING"))}}}
function Ej(a){a.C=!1;if(a.Z)for(var b in a.j)a.Z(b,a.j[b]);for(var c in a.Y)window.clearTimeout(parseInt(c,10));a.Y={};a.S=null;a.Z=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=u(a.H,a);a.g.removeEventListener=u(a.ab,a);a.g.destroy=u(a.dispose,a);a.g.getLastError=u(a.Ja,a);a.g.getPlayerType=u(a.Ka,a);a.g.getCurrentVideoConfig=u(a.Ia,a);a.g.loadNewVideoConfig=u(a.oa,a);a.g.isReady=u(a.mb,a)}
l.mb=function(){return this.C};
l.H=function(a,b){if(!this.f){var c=Jj(this,b);if(c){if(!(0<=kc(this.Da,a)||this.j[a])){var d=Rj(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&Q(Aa(c,this.g),0)}}};
l.ab=function(a,b){if(!this.f){var c=Jj(this,b);c&&Oc(this.U,a,c)}};
function Jj(a,b){var c=b;if("string"==typeof b){if(a.aa[b])return a.aa[b];c=function(){var a=r(b);a&&a.apply(m,arguments)};
a.aa[b]=c}return c?c:null}
function Rj(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;m[c]=function(c){var d=Q(function(){if(!a.f){a.U.V(b,c);var e=a.Y,g=String(d);g in e&&delete e[g]}},0);
Wa(a.Y,String(d))};
return c}
l.Fa=function(a){a=a?yf:xf;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.K||(b.focus(),b!=document.activeElement));)b=a(b)};
l.qa=function(a){Lf("a11y-announce",a)};
l.Ta=function(a){Lj(this,a)};
l.Ua=function(a){Lf("WATCH_LATER_VIDEO_ADDED",a)};
l.Va=function(a){Lf("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ra=function(){if(!this.ea){if(Je){var a=document,b=a.scrollingElement?a.scrollingElement:ae||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.ca=S&&T("10")&&a.pageYOffset!=b.scrollTop?new Xd(b.scrollLeft,b.scrollTop):new Xd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Hh(this.M,window,"scroll",this.Ya);Hh(this.M,this.l,"touchmove",this.Xa)}else Hh(this.M,this.l,"mousewheel",this.ua),Hh(this.M,this.l,"wheel",this.ua);this.ea=!0}};
l.Sa=function(){Ih(this.M);this.ea=!1};
l.ua=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Ya=function(){window.scrollTo(this.ca.b,this.ca.f)};
l.Xa=function(a){a.preventDefault()};
l.Ka=function(){return this.J||Oj(this)};
l.Ja=function(){return this.da};
function Oj(a){return(a=Mj(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Pj(a){$i("dcp");a.cancel();Ej(a);a.J=null;a.b&&(a.b.loaded=!1);var b=Mj(a);"html5"==Oj(a)?a.P=b:b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Ih(a.X);a.D=null;a.K=null}
l.cancel=function(){this.R&&jg(this.b.assets.js,this.R);window.clearTimeout(this.pa);this.W=!1};
l.o=function(){Pj(this);if(this.P&&this.b)try{this.P.destroy()}catch(b){N(b)}this.aa=null;for(var a in this.j)m[this.j[a]]=null;this.fa=this.b=this.g=null;delete this.l;delete this.w;Dj.B.o.call(this)};function Sj(a,b){Jc.call(this,b);this.b=a;this.start()}
w(Sj,Jc);Sj.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Sj.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Mc(a,b){switch(a){case "loadVideoById":return b=Si(b),Ui(b),[b];case "cueVideoById":return b=Si(b),Ui(b),[b];case "loadVideoByPlayerVars":return Ui(b),[b];case "cueVideoByPlayerVars":return Ui(b),[b];case "loadPlaylist":return b=Ti(b),Ui(b),[b];case "cuePlaylist":return b=Ti(b),Ui(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Nc(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Sj.prototype.ha=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Sj.B.ha.call(this,a,b)};
Sj.prototype.o=function(){Sj.B.o.call(this);delete this.b};function Tj(a){Zh.call(this);this.b=a;this.g=[];this.addEventListener("onReady",u(this.Wa,this));this.addEventListener("onVideoProgress",u(this.hb,this));this.addEventListener("onVolumeChange",u(this.ib,this));this.addEventListener("onApiChange",u(this.bb,this));this.addEventListener("onPlaybackQualityChange",u(this.eb,this));this.addEventListener("onPlaybackRateChange",u(this.fb,this));this.addEventListener("onStateChange",u(this.gb,this))}
w(Tj,Zh);l=Tj.prototype;l.Ba=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Qi(a)){var c;c=b;if(ua(c[0])&&!ra(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Si.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Ri.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Ti.apply(window,c)}c=d}Ui(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Qi(a)&&ai(this,this.ia())}};
l.Wa=function(){var a=u(this.Ha,this);this.f.g=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ia=function(){if(!this.b)return null;var a=this.b.getApiInterface();nc(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=v()/1E3;return b};
l.gb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());ai(this,a)};
l.eb=function(a){ai(this,{playbackQuality:a})};
l.fb=function(a){ai(this,{playbackRate:a})};
l.bb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],n=this.b.getOption(e,k);b[e][k]=n}}this.sendMessage("apiInfoDelivery",b)};
l.ib=function(){ai(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.hb=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:v()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());ai(this,a)};
l.dispose=function(){Tj.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Uj(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=J("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=J("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=xc(M(window.location.href)[3]||null);f&&e.push(f);f=xc(M(d)[3]||null);if(0<=kc(e,f)||!f&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(e=document.createElement("a"),Ve(e,d),d=e.href),d){var f=M(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
mi();d="ST-"+gb(d).toString(36);e=b?gd(b):"";Fb.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new rb(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h,k;h=void 0===h?{}:h;k=void 0===k?"":k;c=window.location;a=yc(Bc([a],h))+k;a=a instanceof Md?a:Qd(a);c.href=Od(a)}return!0}
;var Vj={},Wj="player_uid_"+(1E9*Math.random()>>>0);function Xj(a,b){a=t(a)?wf(a):a;b=Sb(b);var c=Wj+"_"+va(a),d=Vj[c];if(d)return d.oa(b),d.g;d=new Dj(a,c);Vj[c]=d;Lf("player-added",d.g);zb(d,Aa(Yj,d));Q(function(){d.oa(b)},0);
return d.g}
function Yj(a){Vj[a.T]=null}
function Zj(a){a=wf(a);if(!a)return null;var b=Wj+"_"+va(a),c=Vj[b];c||(c=new Dj(a,b),Vj[b]=c);return c.g}
;var ak=r("yt.abuse.botguardInitialized")||wg;q("yt.abuse.botguardInitialized",ak,void 0);var bk=r("yt.abuse.invokeBotguard")||xg;q("yt.abuse.invokeBotguard",bk,void 0);var ck=r("yt.abuse.dclkstatus.checkDclkStatus")||Bg;q("yt.abuse.dclkstatus.checkDclkStatus",ck,void 0);var dk=r("yt.player.exports.navigate")||Uj;q("yt.player.exports.navigate",dk,void 0);var ek=r("yt.player.embed")||Xj;q("yt.player.embed",ek,void 0);var fk=r("yt.player.getPlayerByElement")||Zj;q("yt.player.getPlayerByElement",fk,void 0);
var gk=r("yt.util.activity.init")||Tg;q("yt.util.activity.init",gk,void 0);var hk=r("yt.util.activity.getTimeSinceActive")||Vg;q("yt.util.activity.getTimeSinceActive",hk,void 0);var ik=r("yt.util.activity.setTimestamp")||Ug;q("yt.util.activity.setTimestamp",ik,void 0);var jk=null,kk=null,lk=null,mk={};function nk(a){Yg(a.payload_name,a.payload,O("enable_youtubei_innertube")?yh:mh,void 0)}
function ok(a){var b=a.id;a=a.ve_type;var c=sb++;a=new rb(void 0,a,c,void 0);mk[b]=a;b=mi();c=li();b&&c&&Zg(Uh(),b,c,a)}
function pk(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(I("client-screen-nonce",b),I("ROOT_VE_TYPE",a),a=li()))for(var c in mk){var d=b,e=a,f=mk[c];Zg(Uh(),d,e,f)}}
function qk(a){mk[a.id]=new rb(a.tracking_params)}
function rk(a){var b=mi();a=mk[a.id];if(b&&a){var c=Uh();$g(c,{click:{csn:b,visualElement:tb(a)}},void 0)}}
function sk(a){a=a.ids;var b=mi();if(b){for(var c=[],d=0;d<a.length;d++){var e=mk[a[d]];e&&c.push(e)}c.length&&ah(Uh(),b,c)}}
function tk(){var a=jk;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",I,void 0);q("yt.config.set",I,void 0);q("yt.setMsg",Gc,void 0);q("yt.msgs.set",Gc,void 0);q("yt.logging.errors.log",vh,void 0);
q("writeEmbed",function(){var a=J("PLAYER_CONFIG",void 0);"1"!=a.privembed&&ei(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=J("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);J("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Ui(a.args);jk=a=Xj("player",a);a.addEventListener("onScreenChanged",pk);a.addEventListener("onLogClientVeCreated",ok);a.addEventListener("onLogServerVeCreated",qk);a.addEventListener("onLogToGel",
nk);a.addEventListener("onLogVeClicked",rk);a.addEventListener("onLogVesShown",sk);a.addEventListener("onReady",tk);b=J("POST_MESSAGE_ID","player");J("ENABLE_JS_API")?lk=new Tj(a):J("ENABLE_POST_API")&&t(b)&&t(c)&&(kk=new qh(window.parent,b,c),lk=new Sj(a,kk.g));J("BG_P")&&(J("BG_I")||J("BG_IU"))&&vg();Ag();Z=a;Z.addEventListener("SUBSCRIBE",Ki);Z.addEventListener("UNSUBSCRIBE",Ni);Ii.push(X(xi,Oi),X(Ci,Pi))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){Bh(a+"mac_204?action_fcts=1");return!0},void 0);
var uk=Dc(function(){$i("ol");lj=!0;nj.push(X(ui,oj),X(zi,qj));lj||nj.push(X(yi,oj),X(Di,qj),X(si,sj),X(ti,uj),X(Fi,wj),X(dc,yj),X(fc,Aj),X(cc,zj));var a=ad.getInstance(),b=1<window.devicePixelRatio;if(!!((dd("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=dd(c)||0,d=b?d|67108864:d&-67108865;0==d?delete P[c]:P[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in P)b.push(e+"="+escape(P[e]));Fb.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),vk=Dc(function(){var a=
jk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();J("PL_ATT")&&(ug=null);for(var a=0,b=yg.length;a<b;a++){var c=yg[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}yg.length=0;a=gg("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Nf(a),b.parentNode.removeChild(b);zg=!1;I("DCLKSTAT",0);Kf(mj);mj.length=0;Tf(nj);nj.length=0;lj=!1;Z&&(Z.removeEventListener("SUBSCRIBE",Li),Z.removeEventListener("UNSUBSCRIBE",Ni));Z=null;Tf(Ii);
Ii.length=0;Bb(lk,kk);if(a=jk)a.removeEventListener("onScreenChanged",pk),a.removeEventListener("onLogClientVeCreated",ok),a.removeEventListener("onLogServerVeCreated",qk),a.removeEventListener("onLogToGel",nk),a.removeEventListener("onLogVeClicked",rk),a.removeEventListener("onLogVesShown",sk),a.removeEventListener("onReady",tk),a.destroy();mk={}});
window.addEventListener?(window.addEventListener("load",uk),window.addEventListener("unload",vk)):window.attachEvent&&(window.attachEvent("onload",uk),window.attachEvent("onunload",vk));}).call(this);
