typeof YUI!="undefined"&&(YUI._YUI=YUI);var YUI=function(){var e=0,t=this,n=arguments,r=n.length,i=function(e,t){return e&&e.hasOwnProperty&&e instanceof t},s=typeof YUI_config!="undefined"&&YUI_config;i(t,YUI)?(t._init(),YUI.GlobalConfig&&t.applyConfig(YUI.GlobalConfig),s&&t.applyConfig(s),r||t._setup()):t=new YUI;if(r){for(;e<r;e++)t.applyConfig(n[e]);t._setup()}return t.instanceOf=i,t};(function(){var e,t,n="@VERSION@",r=".",i="http://yui.yahooapis.com/",s="yui3-js-enabled",o="yui3-css-stamp",u=function(){},a=Array.prototype.slice,f={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},l=typeof window!="undefined",c=l?window:null,h=l?c.document:null,p=h&&h.documentElement,d=p&&p.className,v={},m=(new Date).getTime(),g=function(e,t,n,r){e&&e.addEventListener?e.addEventListener(t,n,r):e&&e.attachEvent&&e.attachEvent("on"+t,n)},y=function(e,t,n,r){if(e&&e.removeEventListener)try{e.removeEventListener(t,n,r)}catch(i){}else e&&e.detachEvent&&e.detachEvent("on"+t,n)},b=function(){YUI.Env.windowLoaded=!0,YUI.Env.DOMReady=!0,l&&y(window,"load",b)},w=function(e,t){var n=e.Env._loader,r=["loader-base"],i=YUI.Env,s=i.mods;return n?(n.ignoreRegistered=!1,n.onEnd=null,n.data=null,n.required=[],n.loadType=null):(n=new e.Loader(e.config),e.Env._loader=n),s&&s.loader&&(r=[].concat(r,YUI.Env.loaderExtras)),YUI.Env.core=e.Array.dedupe([].concat(YUI.Env.core,r)),n},E=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},S={success:!0};p&&d.indexOf(s)==-1&&(d&&(d+=" "),d+=s,p.className=d),n.indexOf("@")>-1&&(n="3.5.0"),e={applyConfig:function(e){e=e||u;var t,n,r=this.config,i=r.modules,s=r.groups,o=r.aliases,a=this.Env._loader;for(n in e)e.hasOwnProperty(n)&&(t=e[n],i&&n=="modules"?E(i,t):o&&n=="aliases"?E(o,t):s&&n=="groups"?E(s,t):n=="win"?(r[n]=t&&t.contentWindow||t,r.doc=r[n]?r[n].document:null):n!="_yuid"&&(r[n]=t));a&&a._config(e)},_config:function(e){this.applyConfig(e)},_init:function(){var e,t,r=this,s=YUI.Env,u=r.Env,a;r.version=n;if(!u){r.Env={core:["get","features","intl-base","yui-log","yui-later"],loaderExtras:["loader-rollup","loader-yui3"],mods:{},versions:{},base:i,cdn:i+n+"/build/",_idx:0,_used:{},_attached:{},_missed:[],_yidx:0,_uidx:0,_guidp:"y",_loaded:{},_BASE_RE:/(?:\?(?:[^&]*&)*([^&]*))?\b(simpleyui|yui(?:-\w+)?)\/\2(?:-(min|debug))?\.js/,parseBasePath:function(e,t){var n=e.match(t),r,i;return n&&(r=RegExp.leftContext||e.slice(0,e.indexOf(n[0])),i=n[3],n[1]&&(r+="?"+n[1]),r={filter:i,path:r}),r},getBase:s&&s.getBase||function(t){var n=h&&h.getElementsByTagName("script")||[],i=u.cdn,s,o,a,f;for(o=0,a=n.length;o<a;++o){f=n[o].src;if(f){s=r.Env.parseBasePath(f,t);if(s){e=s.filter,i=s.path;break}}}return i}},u=r.Env,u._loaded[n]={};if(s&&r!==YUI)u._yidx=++s._yidx,u._guidp=("yui_"+n+"_"+u._yidx+"_"+m).replace(/[^a-z0-9_]+/g,"_");else if(YUI._YUI){s=YUI._YUI.Env,u._yidx+=s._yidx,u._uidx+=s._uidx;for(a in s)a in u||(u[a]=s[a]);delete YUI._YUI}r.id=r.stamp(r),v[r.id]=r}r.constructor=YUI,r.config=r.config||{bootstrap:!0,cacheUse:!0,debug:!0,doc:h,fetchCSS:!0,throwFail:!0,useBrowserConsole:!0,useNativeES5:!0,win:c,global:Function("return this")()},h&&!h.getElementById(o)?(t=h.createElement("div"),t.innerHTML='<div id="'+o+'" style="position: absolute !important; visibility: hidden !important"></div>',YUI.Env.cssStampEl=t.firstChild,h.body?h.body.appendChild(YUI.Env.cssStampEl):p.insertBefore(YUI.Env.cssStampEl,p.firstChild)):h&&h.getElementById(o)&&!YUI.Env.cssStampEl&&(YUI.Env.cssStampEl=h.getElementById(o)),r.config.lang=r.config.lang||"en-US",r.config.base=YUI.config.base||r.Env.getBase(r.Env._BASE_RE);if(!e||!"mindebug".indexOf(e))e="min";e=e?"-"+e:e,r.config.loaderPath=YUI.config.loaderPath||"loader/loader"+e+".js"},_setup:function(e){var t,n=this,r=[],i=YUI.Env.mods,s=n.config.core||[].concat(YUI.Env.core);for(t=0;t<s.length;t++)i[s[t]]&&r.push(s[t]);n._attach(["yui-base"]),n._attach(r),n.Loader&&w(n)},applyTo:function(e,t,n){if(t in f){var r=v[e],i,s,o;if(r){i=t.split("."),s=r;for(o=0;o<i.length;o+=1)s=s[i[o]],s||this.log("applyTo not found: "+t,"warn","yui");return s&&s.apply(r,n)}return null}return this.log(t+": applyTo not allowed","warn","yui"),null},add:function(e,t,n,r){r=r||{};var i=YUI.Env,s={name:e,fn:t,version:n,details:r},o={},u,a,f,l=i.versions;i.mods[e]=s,l[n]=l[n]||{},l[n][e]=s;for(f in v)v.hasOwnProperty(f)&&(a=v[f],o[a.id]||(o[a.id]=!0,u=a.Env._loader,u&&(!u.moduleInfo[e]||u.moduleInfo[e].temp)&&u.addModule(r,e)));return this},_attach:function(e,t){var n,r,i,s,o,u,a,f=YUI.Env.mods,l=YUI.Env.aliases,c=this,h,p=YUI.Env._renderedMods,d=c.Env._loader,v=c.Env._attached,m=e.length,d,g,y,b=[];for(n=0;n<m;n++){r=e[n],i=f[r],b.push(r);if(d&&d.conditions[r])for(h in d.conditions[r])d.conditions[r].hasOwnProperty(h)&&(g=d.conditions[r][h],y=g&&(g.ua&&c.UA[g.ua]||g.test&&g.test(c)),y&&b.push(g.name))}e=b,m=e.length;for(n=0;n<m;n++)if(!v[e[n]]){r=e[n],i=f[r];if(l&&l[r]&&!i){c._attach(l[r]);continue}if(!i)d&&d.moduleInfo[r]&&(i=d.moduleInfo[r],t=!0),!t&&r&&r.indexOf("skin-")===-1&&r.indexOf("css")===-1&&(c.Env._missed.push(r),c.Env._missed=c.Array.dedupe(c.Env._missed),c.message("NOT loaded: "+r,"warn","yui"));else{v[r]=!0;for(h=0;h<c.Env._missed.length;h++)c.Env._missed[h]===r&&(c.message("Found: "+r+" (was reported as missing earlier)","warn","yui"),c.Env._missed.splice(h,1));if(d&&p&&p[r]&&p[r].temp){d.getRequires(p[r]),o=[];for(h in d.moduleInfo[r].expanded_map)d.moduleInfo[r].expanded_map.hasOwnProperty(h)&&o.push(h);c._attach(o)}s=i.details,o=s.requires,u=s.use,a=s.after,s.lang&&(o=o||[],o.unshift("intl"));if(o)for(h=0;h<o.length;h++)if(!v[o[h]]){if(!c._attach(o))return!1;break}if(a)for(h=0;h<a.length;h++)if(!v[a[h]]){if(!c._attach(a,!0))return!1;break}if(i.fn)if(c.config.throwFail)i.fn(c,r);else try{i.fn(c,r)}catch(w){return c.error("Attach error: "+r,w,r),!1}if(u)for(h=0;h<u.length;h++)if(!v[u[h]]){if(!c._attach(u))return!1;break}}}return!0},_delayCallback:function(e,t){var n=this,r=["event-base"];return t=n.Lang.isObject(t)?t:{event:t},t.event==="load"&&r.push("event-synthetic"),function(){var i=arguments;n._use(r,function(){n.on(t.event,function(){i[1].delayUntil=t.event,e.apply(n,i)},t.args)})}},use:function(){var e=a.call(arguments,0),t=e[e.length-1],n=this,r=0,i=[],s,o=n.Env,u=!0;n.Lang.isFunction(t)?(e.pop(),n.config.delayUntil&&(t=n._delayCallback(t,n.config.delayUntil))):t=null,n.Lang.isArray(e[0])&&(e=e[0]);if(n.config.cacheUse){while(s=e[r++])if(!o._attached[s]){u=!1;break}if(u)return e.length,n._notify(t,S,e),n}return n._loading?(n._useQueue=n._useQueue||new n.Queue,n._useQueue.add([e,t])):n._use(e,function(n,r){n._notify(t,r,e)}),n},_notify:function(e,t,n){if(!t.success&&this.config.loadErrorFn)this.config.loadErrorFn.call(this,this,e,t,n);else if(e){this.Env._missed&&this.Env._missed.length&&(t.msg="Missing modules: "+this.Env._missed.join(),t.success=!1);if(this.config.throwFail)e(this,t);else try{e(this,t)}catch(r){this.error("use callback error",r,n)}}},_use:function(e,t){this.Array||this._attach(["yui-base"]);var r,i,s,o,u=this,a=YUI.Env,f=a.mods,l=u.Env,c=l._used,h=a.aliases,p=a._loaderQueue,d=e[0],v=u.Array,m=u.config,g=m.bootstrap,y=[],b,E=[],S=!0,x=m.fetchCSS,T=function(e,t){var r=0,i=[],s,o,u,l,p;if(!e.length)return;if(h){o=e.length;for(r=0;r<o;r++)h[e[r]]&&!f[e[r]]?i=[].concat(i,h[e[r]]):i.push(e[r]);e=i}o=e.length;for(r=0;r<o;r++){s=e[r],t||E.push(s);if(c[s])continue;u=f[s],l=null,p=null,u?(c[s]=!0,l=u.details.requires,p=u.details.use):a._loaded[n][s]?c[s]=!0:y.push(s),l&&l.length&&T(l),p&&p.length&&T(p,1)}},N=function(n){var r=n||{success:!0,msg:"not dynamic"},i,s,o=!0,a=r.data;u._loading=!1,a&&(s=y,y=[],E=[],T(a),i=y.length,i&&[].concat(y).sort().join()==s.sort().join()&&(i=!1)),i&&a?(u._loading=!0,u._use(y,function(){u._attach(a)&&u._notify(t,r,a)})):(a&&(o=u._attach(a)),o&&u._notify(t,r,e)),u._useQueue&&u._useQueue.size()&&!u._loading&&u._use.apply(u,u._useQueue.next())};if(d==="*"){e=[];for(b in f)f.hasOwnProperty(b)&&e.push(b);return S=u._attach(e),S&&N(),u}return(f.loader||f["loader-base"])&&!u.Loader&&u._attach(["loader"+(f.loader?"":"-base")]),g&&u.Loader&&e.length&&(i=w(u),i.require(e),i.ignoreRegistered=!0,i._boot=!0,i.calculate(null,x?null:"js"),e=i.sorted,i._boot=!1),T(e),r=y.length,r&&(y=v.dedupe(y),r=y.length),g&&r&&u.Loader?(u._loading=!0,i=w(u),i.onEnd=N,i.context=u,i.data=e,i.ignoreRegistered=!1,i.require(y),i.insert(null,x?null:"js")):g&&r&&u.Get&&!l.bootstrapped?(u._loading=!0,s=function(){u._loading=!1,p.running=!1,l.bootstrapped=!0,a._bootstrapping=!1,u._attach(["loader"])&&u._use(e,t)},a._bootstrapping?p.add(s):(a._bootstrapping=!0,u.Get.script(m.base+m.loaderPath,{onEnd:s}))):(S=u._attach(e),S&&N()),u},namespace:function(){var e=arguments,t,n=0,i,s,o;for(;n<e.length;n++){t=this,o=e[n];if(o.indexOf(r)>-1){s=o.split(r);for(i=s[0]=="YAHOO"?1:0;i<s.length;i++)t[s[i]]=t[s[i]]||{},t=t[s[i]]}else t[o]=t[o]||{},t=t[o]}return t},log:u,message:u,dump:function(e){return""+e},error:function(e,t,n){var r=this,i;r.config.errorFn&&(i=r.config.errorFn.apply(r,arguments));if(!i)throw t||new Error(e);return r.message(e,"error",""+n),r},guid:function(e){var t=this.Env._guidp+"_"+ ++this.Env._uidx;return e?e+t:t},stamp:function(e,t){var n;if(!e)return e;e.uniqueID&&e.nodeType&&e.nodeType!==9?n=e.uniqueID:n=typeof e=="string"?e:e._yuid;if(!n){n=this.guid();if(!t)try{e._yuid=n}catch(r){n=null}}return n},destroy:function(){var e=this;e.Event&&e.Event._unload(),delete v[e.id],delete e.Env,delete e.config}},YUI.prototype=e;for(t in e)e.hasOwnProperty(t)&&(YUI[t]=e[t]);YUI.applyConfig=function(e){if(!e)return;YUI.GlobalConfig&&this.prototype.applyConfig.call(this,YUI.GlobalConfig),this.prototype.applyConfig.call(this,e),YUI.GlobalConfig=this.config},YUI._init(),l?g(window,"load",b):b(),YUI.Env.add=g,YUI.Env.remove=y,typeof exports=="object"&&(exports.YUI=YUI)})(),YUI.add("yui-base",function(e,t){function h(e,t,n){var r,i;t||(t=0);if(n||h.test(e))try{return l.slice.call(e,t)}catch(s){i=[];for(r=e.length;t<r;++t)i.push(e[t]);return i}return[e]}function p(){this._init(),this.add.apply(this,arguments)}var n=e.Lang||(e.Lang={}),r=String.prototype,i=Object.prototype.toString,s={"undefined":"undefined",number:"number","boolean":"boolean",string:"string","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},o=/\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,u=/^\s+|\s+$/g,a=/\{\s*\[(?:native code|function)\]\s*\}/i;n._isNative=function(t){return!!(e.config.useNativeES5&&t&&a.test(t))},n.isArray=n._isNative(Array.isArray)?Array.isArray:function(e){return n.type(e)==="array"},n.isBoolean=function(e){return typeof e=="boolean"},n.isDate=function(e){return n.type(e)==="date"&&e.toString()!=="Invalid Date"&&!isNaN(e)},n.isFunction=function(e){return n.type(e)==="function"},n.isNull=function(e){return e===null},n.isNumber=function(e){return typeof e=="number"&&isFinite(e)},n.isObject=function(e,t){var r=typeof e;return e&&(r==="object"||!t&&(r==="function"||n.isFunction(e)))||!1},n.isString=function(e){return typeof e=="string"},n.isUndefined=function(e){return typeof e=="undefined"},n.isValue=function(e){var t=n.type(e);switch(t){case"number":return isFinite(e);case"null":case"undefined":return!1;default:return!!t}},n.now=Date.now||function(){return(new Date).getTime()},n.sub=function(e,t){return e.replace?e.replace(o,function(e,r){return n.isUndefined(t[r])?e:t[r]}):e},n.trim=r.trim?function(e){return e&&e.trim?e.trim():e}:function(e){try{return e.replace(u,"")}catch(t){return e}},n.trimLeft=r.trimLeft?function(e){return e.trimLeft()}:function(e){return e.replace(/^\s+/,"")},n.trimRight=r.trimRight?function(e){return e.trimRight()}:function(e){return e.replace(/\s+$/,"")},n.type=function(e){return s[typeof e]||s[i.call(e)]||(e?"object":"null")};var f=e.Lang,l=Array.prototype,c=Object.prototype.hasOwnProperty;e.Array=h,h.dedupe=function(e){var t={},n=[],r,i,s;for(r=0,s=e.length;r<s;++r)i=e[r],c.call(t,i)||(t[i]=1,n.push(i));return n},h.each=h.forEach=f._isNative(l.forEach)?function(t,n,r){return l.forEach.call(t||[],n,r||e),e}:function(t,n,r){for(var i=0,s=t&&t.length||0;i<s;++i)i in t&&n.call(r||e,t[i],i,t);return e},h.hash=function(e,t){var n={},r=t&&t.length||0,i,s;for(i=0,s=e.length;i<s;++i)i in e&&(n[e[i]]=r>i&&i in t?t[i]:!0);return n},h.indexOf=f._isNative(l.indexOf)?function(e,t,n){return l.indexOf.call(e,t,n)}:function(e,t,n){var r=e.length;n=+n||0,n=(n>0||-1)*Math.floor(Math.abs(n)),n<0&&(n+=r,n<0&&(n=0));for(;n<r;++n)if(n in e&&e[n]===t)return n;return-1},h.numericSort=function(e,t){return e-t},h.some=f._isNative(l.some)?function(e,t,n){return l.some.call(e,t,n)}:function(e,t,n){for(var r=0,i=e.length;r<i;++r)if(r in e&&t.call(n,e[r],r,e))return!0;return!1},h.test=function(e){var t=0;if(f.isArray(e))t=1;else if(f.isObject(e))try{"length"in e&&!e.tagName&&(!e.scrollTo||!e.document)&&!e.apply&&(t=2)}catch(n){}return t},p.prototype={_init:function(){this._q=[]},next:function(){return this._q.shift()},last:function(){return this._q.pop()},add:function(){return this._q.push.apply(this._q,arguments),this},size:function(){return this._q.length}},e.Queue=p,YUI.Env._loaderQueue=YUI.Env._loaderQueue||new p;var d="__",c=Object.prototype.hasOwnProperty,v=e.Lang.isObject;e.cached=function(e,t,n){return t||(t={}),function(r){var i=arguments.length>1?Array.prototype.join.call(arguments,d):String(r);if(!(i in t)||n&&t[i]==n)t[i]=e.apply(e,arguments);return t[i]}},e.getLocation=function(){var t=e.config.win;return t&&t.location},e.merge=function(){var e=0,t=arguments.length,n={},r,i;for(;e<t;++e){i=arguments[e];for(r in i)c.call(i,r)&&(n[r]=i[r])}return n},e.mix=function(t,n,r,i,s,o){var u,a,f,l,h,p,d;if(!t||!n)return t||e;if(s){s===2&&e.mix(t.prototype,n.prototype,r,i,0,o),f=s===1||s===3?n.prototype:n,d=s===1||s===4?t.prototype:t;if(!f||!d)return t}else f=n,d=t;u=r&&!o;if(i)for(l=0,p=i.length;l<p;++l){h=i[l];if(!c.call(f,h))continue;a=u?!1:h in d;if(o&&a&&v(d[h],!0)&&v(f[h],!0))e.mix(d[h],f[h],r,null,0,o);else if(r||!a)d[h]=f[h]}else{for(h in f){if(!c.call(f,h))continue;a=u?!1:h in d;if(o&&a&&v(d[h],!0)&&v(f[h],!0))e.mix(d[h],f[h],r,null,0,o);else if(r||!a)d[h]=f[h]}e.Object._hasEnumBug&&e.mix(d,f,r,e.Object._forceEnum,s,o)}return t};var f=e.Lang,c=Object.prototype.hasOwnProperty,m,g=e.Object=f._isNative(Object.create)?function(e){return Object.create(e)}:function(){function e(){}return function(t){return e.prototype=t,new e}}(),y=g._forceEnum=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"],b=g._hasEnumBug=!{valueOf:0}.propertyIsEnumerable("valueOf"),w=g._hasProtoEnumBug=function(){}.propertyIsEnumerable("prototype"),E=g.owns=function(e,t){return!!e&&c.call(e,t)};g.hasKey=E,g.keys=f._isNative(Object.keys)?Object.keys:function(e){if(!f.isObject(e))throw new TypeError("Object.keys called on a non-object");var t=[],n,r,i;if(w&&typeof e=="function")for(r in e)E(e,r)&&r!=="prototype"&&t.push(r);else for(r in e)E(e,r)&&t.push(r);if(b)for(n=0,i=y.length;n<i;++n)r=y[n],E(e,r)&&t.push(r);return t},g.values=function(e){var t=g.keys(e),n=0,r=t.length,i=[];for(;n<r;++n)i.push(e[t[n]]);return i},g.size=function(e){try{return g.keys(e).length}catch(t){return 0}},g.hasValue=function(t,n){return e.Array.indexOf(g.values(t),n)>-1},g.each=function(t,n,r,i){var s;for(s in t)(i||E(t,s))&&n.call(r||e,t[s],s,t);return e},g.some=function(t,n,r,i){var s;for(s in t)if(i||E(t,s))if(n.call(r||e,t[s],s,t))return!0;return!1},g.getValue=function(t,n){if(!f.isObject(t))return m;var r,i=e.Array(n),s=i.length;for(r=0;t!==m&&r<s;r++)t=t[i[r]];return t},g.setValue=function(t,n,r){var i,s=e.Array(n),o=s.length-1,u=t;if(o>=0){for(i=0;u!==m&&i<o;i++)u=u[s[i]];if(u===m)return m;u[s[i]]=r}return t},g.isEmpty=function(e){return!g.keys(Object(e)).length},YUI.Env.parseUA=function(t){var n=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return t++===1?"":"."}))},r=e.config.win,i=r&&r.navigator,s={ie:0,opera:0,gecko:0,webkit:0,safari:0,chrome:0,mobile:null,air:0,phantomjs:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,silk:0,accel:!1,webos:0,caja:i&&i.cajaVersion,secure:!1,os:null,nodejs:0,winjs:typeof Windows!="undefined"&&!!Windows.System,touchEnabled:!1},o=t||i&&i.userAgent,u=r&&r.location,a=u&&u.href,f;return s.userAgent=o,s.secure=a&&a.toLowerCase().indexOf("https")===0,o&&(/windows|win32/i.test(o)?s.os="windows":/macintosh|mac_powerpc/i.test(o)?s.os="macintosh":/android/i.test(o)?s.os="android":/symbos/i.test(o)?s.os="symbos":/linux/i.test(o)?s.os="linux":/rhino/i.test(o)&&(s.os="rhino"),/KHTML/.test(o)&&(s.webkit=1),/IEMobile|XBLWP7/.test(o)&&(s.mobile="windows"),/Fennec/.test(o)&&(s.mobile="gecko"),f=o.match(/AppleWebKit\/([^\s]*)/),f&&f[1]&&(s.webkit=n(f[1]),s.safari=s.webkit,/PhantomJS/.test(o)&&(f=o.match(/PhantomJS\/([^\s]*)/),f&&f[1]&&(s.phantomjs=n(f[1]))),/ Mobile\//.test(o)||/iPad|iPod|iPhone/.test(o)?(s.mobile="Apple",f=o.match(/OS ([^\s]*)/),f&&f[1]&&(f=n(f[1].replace("_","."))),s.ios=f,s.os="ios",s.ipad=s.ipod=s.iphone=0,f=o.match(/iPad|iPod|iPhone/),f&&f[0]&&(s[f[0].toLowerCase()]=s.ios)):(f=o.match(/NokiaN[^\/]*|webOS\/\d\.\d/),f&&(s.mobile=f[0]),/webOS/.test(o)&&(s.mobile="WebOS",f=o.match(/webOS\/([^\s]*);/),f&&f[1]&&(s.webos=n(f[1]))),/ Android/.test(o)&&(/Mobile/.test(o)&&(s.mobile="Android"),f=o.match(/Android ([^\s]*);/),f&&f[1]&&(s.android=n(f[1]))),/Silk/.test(o)&&(f=o.match(/Silk\/([^\s]*)\)/),f&&f[1]&&(s.silk=n(f[1])),s.android||(s.android=2.34,s.os="Android"),/Accelerated=true/.test(o)&&(s.accel=!0))),f=o.match(/(Chrome|CrMo|CriOS)\/([^\s]*)/),f&&f[1]&&f[2]?(s.chrome=n(f[2]),s.safari=0,f[1]==="CrMo"&&(s.mobile="chrome")):(f=o.match(/AdobeAIR\/([^\s]*)/),f&&(s.air=f[0]))),s.webkit||(/Opera/.test(o)?(f=o.match(/Opera[\s\/]([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),f=o.match(/Version\/([^\s]*)/),f&&f[1]&&(s.opera=n(f[1])),/Opera Mobi/.test(o)&&(s.mobile="opera",f=o.replace("Opera Mobi","").match(/Opera ([^\s]*)/),f&&f[1]&&(s.opera=n(f[1]))),f=o.match(/Opera Mini[^;]*/),f&&(s.mobile=f[0])):(f=o.match(/MSIE\s([^;]*)/),f&&f[1]?s.ie=n(f[1]):(f=o.match(/Gecko\/([^\s]*)/),f&&(s.gecko=1,f=o.match(/rv:([^\s\)]*)/),f&&f[1]&&(s.gecko=n(f[1]))))))),r&&i&&!(s.chrome&&s.chrome<6)&&(s.touchEnabled="ontouchstart"in r||"msMaxTouchPoints"in i&&i.msMaxTouchPoints>0),t||(typeof process=="object"&&process.versions&&process.versions.node&&(s.os=process.platform,s.nodejs=n(process.versions.node)),YUI.Env.UA=s),s},e.UA=YUI.Env.UA||YUI.Env.parseUA(),e.UA.compareVersions=function(e,t){var n,r,i,s,o,u;if(e===t)return 0;r=(e+"").split("."),s=(t+"").split(".");for(o=0,u=Math.max(r.length,s.length);o<u;++o){n=parseInt(r[o],10),i=parseInt(s[o],10),isNaN(n)&&(n=0),isNaN(i)&&(i=0);if(n<i)return-1;if(n>i)return 1}return 0},YUI.Env.aliases={anim:["anim-base","anim-color","anim-curve","anim-easing","anim-node-plugin","anim-scroll","anim-xy"],"anim-shape-transform":["anim-shape"],app:["app-base","app-content","app-transitions","lazy-model-list","model","model-list","model-sync-rest","router","view","view-node-map"],attribute:["attribute-base","attribute-complex"],"attribute-events":["attribute-observable"],autocomplete:["autocomplete-base","autocomplete-sources","autocomplete-list","autocomplete-plugin"],base:["base-base","base-pluginhost","base-build"],cache:["cache-base","cache-offline","cache-plugin"],collection:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"],color:["color-base","color-hsl","color-harmony"],controller:["router"],dataschema:["dataschema-base","dataschema-json","dataschema-xml","dataschema-array","dataschema-text"],datasource:["datasource-local","datasource-io","datasource-get","datasource-function","datasource-cache","datasource-jsonschema","datasource-xmlschema","datasource-arrayschema","datasource-textschema","datasource-polling"],datatable:["datatable-core","datatable-table","datatable-head","datatable-body","datatable-base","datatable-column-widths","datatable-message","datatable-mutable","datatable-sort","datatable-datasource"],"datatable-deprecated":["datatable-base-deprecated","datatable-datasource-deprecated","datatable-sort-deprecated","datatable-scroll-deprecated"],datatype:["datatype-date","datatype-number","datatype-xml"],"datatype-date":["datatype-date-parse","datatype-date-format","datatype-date-math"],"datatype-number":["datatype-number-parse","datatype-number-format"],"datatype-xml":["datatype-xml-parse","datatype-xml-format"],dd:["dd-ddm-base","dd-ddm","dd-ddm-drop","dd-drag","dd-proxy","dd-constrain","dd-drop","dd-scroll","dd-delegate"],dom:["dom-base","dom-screen","dom-style","selector-native","selector"],editor:["frame","editor-selection","exec-command","editor-base","editor-para","editor-br","editor-bidi","editor-tab","createlink-base"],event:["event-base","event-delegate","event-synthetic","event-mousewheel","event-mouseenter","event-key","event-focus","event-resize","event-hover","event-outside","event-touch","event-move","event-flick","event-valuechange","event-tap"],"event-custom":["event-custom-base","event-custom-complex"],"event-gestures":["event-flick","event-move"],handlebars:["handlebars-compiler"],highlight:["highlight-base","highlight-accentfold"],history:["history-base","history-hash","history-hash-ie","history-html5"],io:["io-base","io-xdr","io-form","io-upload-iframe","io-queue"],json:["json-parse","json-stringify"],loader:["loader-base","loader-rollup","loader-yui3"],node:["node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],pluginhost:["pluginhost-base","pluginhost-config"],querystring:["querystring-parse","querystring-stringify"],recordset:["recordset-base","recordset-sort","recordset-filter","recordset-indexer"],resize:["resize-base","resize-proxy","resize-constrain"],slider:["slider-base","slider-value-range","clickable-rail","range-slider"],template:["template-base","template-micro"],text:["text-accentfold","text-wordbreak"],widget:["widget-base","widget-htmlparser","widget-skin","widget-uievents"]}},"@VERSION@",{use:["get","features","intl-base","yui-log","yui-later"]}),YUI.add("get",function(e,t){var n=e.Lang,r,i,s;e.Get=i={cssOptions:{attributes:{rel:"stylesheet"},doc:e.config.linkDoc||e.config.doc,pollInterval:50},jsOptions:{autopurge:!0,doc:e.config.scriptDoc||e.config.doc},options:{attributes:{charset:"utf-8"},purgethreshold:20},REGEX_CSS:/\.css(?:[?;].*)?$/i,REGEX_JS:/\.js(?:[?;].*)?$/i,_insertCache:{},_pending:null,_purgeNodes:[],_queue:[],abort:function(e){var t,n,r,i,s;if(!e.abort){n=e,s=this._pending,e=null;if(s&&s.transaction.id===n)e=s.transaction,this._pending=null;else for(t=0,i=this._queue.length;t<i;++t){r=this._queue[t].transaction;if(r.id===n){e=r,this._queue.splice(t,1);break}}}e&&e.abort()},css:function(e,t,n){return this._load("css",e,t,n)},js:function(e,t,n){return this._load("js",e,t,n)},load:function(e,t,n){return this._load(null,e,t,n)},_autoPurge:function(e){e&&this._purgeNodes.length>=e&&this._purge(this._purgeNodes)},_getEnv:function(){var t=e.config.doc,n=e.UA;return this._env={async:t&&t.createElement("script").async===!0||n.ie>=10,cssFail:n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0,cssLoad:(!n.gecko&&!n.webkit||n.gecko>=9||n.compareVersions(n.webkit,535.24)>=0)&&!(n.chrome&&n.chrome<=18),preservesScriptOrder:!!(n.gecko||n.opera||n.ie&&n.ie>=10)}},_getTransaction:function(t,r){var i=[],o,u,a,f;n.isArray(t)||(t=[t]),r=e.merge(this.options,r),r.attributes=e.merge(this.options.attributes,r.attributes);for(o=0,u=t.length;o<u;++o){f=t[o],a={attributes:{}};if(typeof f=="string")a.url=f;else{if(!f.url)continue;e.mix(a,f,!1,null,0,!0),f=f.url}e.mix(a,r,!1,null,0,!0),a.type||(this.REGEX_CSS.test(f)?a.type="css":(!this.REGEX_JS.test(f),a.type="js")),e.mix(a,a.type==="js"?this.jsOptions:this.cssOptions,!1,null,0,!0),a.attributes.id||(a.attributes.id=e.guid()),a.win?a.doc=a.win.document:a.win=a.doc.defaultView||a.doc.parentWindow,a.charset&&(a.attributes.charset=a.charset),i.push(a)}return new s(i,r)},_load:function(e,t,n,r){var s;return typeof n=="function"&&(r=n,n={}),n||(n={}),n.type=e,n._onFinish=i._onTransactionFinish,this._env||this._getEnv(),s=this._getTransaction(t,n),this._queue.push({callback:r,transaction:s}),this._next(),s},_onTransactionFinish:function(){i._pending=null,i._next()},_next:function(){var e;if(this._pending)return;e=this._queue.shift(),e&&(this._pending=e,e.transaction.execute(e.callback))},_purge:function(t){var n=this._purgeNodes,r=t!==n,i,s;while(s=t.pop()){if(!s._yuiget_finished)continue;s.parentNode&&s.parentNode.removeChild(s),r&&(i=e.Array.indexOf(n,s),i>-1&&n.splice(i,1))}}},i.script=i.js,i.Transaction=s=function(t,n){var r=this;r.id=s._lastId+=1,r.data=n.data,r.errors=[],r.nodes=[],r.options=n,r.requests=t,r._callbacks=[],r._queue=[],r._reqsWaiting=0,r.tId=r.id,r.win=n.win||e.config.win},s._lastId=0,s.prototype={_state:"new",abort:function(e){this._pending=null,this._pendingCSS=null,this._pollTimer=clearTimeout(this._pollTimer),this._queue=[],this._reqsWaiting=0,this.errors.push({error:e||"Aborted"}),this._finish()},execute:function(e){var t=this,n=t.requests,r=t._state,i,s,o,u;if(r==="done"){e&&e(t.errors.length?t.errors:null,t);return}e&&t._callbacks.push(e);if(r==="executing")return;t._state="executing",t._queue=o=[],t.options.timeout&&(t._timeout=setTimeout(function(){t.abort("Timeout")},t.options.timeout)),t._reqsWaiting=n.length;for(i=0,s=n.length;i<s;++i)u=n[i],u.async||u.type==="css"?t._insert(u):o.push(u);t._next()},purge:function(){i._purge(this.nodes)},_createNode:function(e,t,n){var i=n.createElement(e),s,o;r||(o=n.createElement("div"),o.setAttribute("class","a"),r=o.className==="a"?{}:{"for":"htmlFor","class":"className"});for(s in t)t.hasOwnProperty(s)&&i.setAttribute(r[s]||s,t[s]);return i},_finish:function(){var e=this.errors.length?this.errors:null,t=this.options,n=t.context||this,r,i,s;if(this._state==="done")return;this._state="done";for(i=0,s=this._callbacks.length;i<s;++i)this._callbacks[i].call(n,e,this);r=this._getEventData(),e?(t.onTimeout&&e[e.length-1].error==="Timeout"&&t.onTimeout.call(n,r),t.onFailure&&t.onFailure.call(n,r)):t.onSuccess&&t.onSuccess.call(n,r),t.onEnd&&t.onEnd.call(n,r),t._onFinish&&t._onFinish()},_getEventData:function(t){return t?e.merge(this,{abort:this.abort,purge:this.purge,request:t,url:t.url,win:t.win}):this},_getInsertBefore:function(t){var n=t.doc,r=t.insertBefore,s,o,u;return r?typeof r=="string"?n.getElementById(r):r:(s=i._insertCache,u=e.stamp(n),(r=s[u])?r:(r=n.getElementsByTagName("base")[0])?s[u]=r:(r=n.head||n.getElementsByTagName("head")[0],r?(r.appendChild(n.createTextNode("")),s[u]=r.lastChild):s[u]=n.getElementsByTagName("script")[0]))},_insert:function(t){function c(){u._progress("Failed to load "+t.url,t)}function h(){f&&clearTimeout(f),u._progress(null,t)}var n=i._env,r=this._getInsertBefore(t),s=t.type==="js",o=t.node,u=this,a=e.UA,f,l;o||(s?l="script":!n.cssLoad&&a.gecko?l="style":l="link",o=t.node=this._createNode(l,t.attributes,t.doc)),s?(o.setAttribute("src",t.url),t.async?o.async=!0:(n.async&&(o.async=!1),n.preservesScriptOrder||(this._pending=t))):!n.cssLoad&&a.gecko?o.innerHTML=(t.attributes.charset?'@charset "'+t.attributes.charset+'";':"")+'@import "'+t.url+'";':o.setAttribute("href",t.url),s&&a.ie&&(a.ie<9||document.documentMode&&document.documentMode<9)?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&(o.onreadystatechange=null,h())}:!s&&!n.cssLoad?this._poll(t):(a.ie>=10?(o.onerror=function(){setTimeout(c,0)},o.onload=function(){setTimeout(h,0)}):(o.onerror=c,o.onload=h),!n.cssFail&&!s&&(f=setTimeout(c,t.timeout||3e3))),this.nodes.push(o),r.parentNode.insertBefore(o,r)},_next:function(){if(this._pending)return;this._queue.length?this._insert(this._queue.shift()):this._reqsWaiting||this._finish()},_poll:function(t){var n=this,r=n._pendingCSS,i=e.UA.webkit,s,o,u,a,f,l;if(t){r||(r=n._pendingCSS=[]),r.push(t);if(n._pollTimer)return}n._pollTimer=null;for(s=0;s<r.length;++s){f=r[s];if(i){l=f.doc.styleSheets,u=l.length,a=f.node.href;while(--u>=0)if(l[u].href===a){r.splice(s,1),s-=1,n._progress(null,f);break}}else try{o=!!f.node.sheet.cssRules,r.splice(s,1),s-=1,n._progress(null,f)}catch(c){}}r.length&&(n._pollTimer=setTimeout(function(){n._poll.call(n)},n.options.pollInterval))},_progress:function(e,t){var n=this.options;e&&(t.error=e,this.errors.push({error:e,request:t})),t.node._yuiget_finished=t.finished=!0,n.onProgress&&n.onProgress.call(n.context||this,this._getEventData(t)),t.autopurge&&(i._autoPurge(this.options.purgethreshold),i._purgeNodes.push(t.node)),this._pending===t&&(this._pending=null),this._reqsWaiting-=1,this._next()}}},"@VERSION@",{requires:["yui-base"]}),YUI.add("features",function(e,t){var n={};e.mix(e.namespace("Features"),{tests:n,add:function(e,t,r){n[e]=n[e]||{},n[e][t]=r},all:function(t,r){var i=n[t],s=[];return i&&e.Object.each(i,function(n,i){s.push(i+":"+(e.Features.test(t,i,r)?1:0))}),s.length?s.join(";"):""},test:function(t,r,i){i=i||[];var s,o,u,a=n[t],f=a&&a[r];return!f||(s=f.result,e.Lang.isUndefined(s)&&(o=f.ua,o&&(s=e.UA[o]),u=f.test,u&&(!o||s)&&(s=u.apply(e,i)),f.result=s)),s}});var r=e.Features.add;r("load","0",{name:"app-transitions-native",test:function(e){var t=e.config.doc,n=t?t.documentElement:null;return n&&n.style?"MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style:!1},trigger:"app-transitions"}),r("load","1",{name:"autocomplete-list-keys",test:function(e){return!e.UA.ios&&!e.UA.android},trigger:"autocomplete-list"}),r("load","2",{name:"dd-gestures",trigger:"dd-drag",ua:"touchEnabled"}),r("load","3",{name:"dom-style-ie",test:function(e){var t=e.Features.test,n=e.Features.add,r=e.config.win,i=e.config.doc,s="documentElement",o=!1;return n("style","computedStyle",{test:function(){return r&&"getComputedStyle"in r}}),n("style","opacity",{test:function(){return i&&"opacity"in i[s].style}}),o=!t("style","opacity")&&!t("style","computedStyle"),o},trigger:"dom-style"}),r("load","4",{name:"editor-para-ie",trigger:"editor-para",ua:"ie",when:"instead"}),r("load","5",{name:"event-base-ie",test:function(e){var t=e.config.doc&&e.config.doc.implementation;return t&&!t.hasFeature("Events","2.0")},trigger:"node-base"}),r("load","6",{name:"graphics-canvas",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","7",{name:"graphics-canvas-default",test:function(e){var t=e.config.doc,n=e.config.defaultGraphicEngine&&e.config.defaultGraphicEngine=="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return(!i||n)&&r&&r.getContext&&r.getContext("2d")},trigger:"graphics"}),r("load","8",{name:"graphics-svg",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","9",{name:"graphics-svg-default",test:function(e){var t=e.config.doc,n=!e.config.defaultGraphicEngine||e.config.defaultGraphicEngine!="canvas",r=t&&t.createElement("canvas"),i=t&&t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");return i&&(n||!r)},trigger:"graphics"}),r("load","10",{name:"graphics-vml",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","11",{name:"graphics-vml-default",test:function(e){var t=e.config.doc,n=t&&t.createElement("canvas");return t&&!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")&&(!n||!n.getContext||!n.getContext("2d"))},trigger:"graphics"}),r("load","12",{name:"history-hash-ie",test:function(e){var t=e.config.doc&&e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange"in e.config.win)||!t||t<8)},trigger:"history-hash"}),r("load","13",{name:"io-nodejs",trigger:"io-base",ua:"nodejs"}),r("load","14",{name:"json-parse-shim",test:function(e){function i(e,t){return e==="ok"?!0:t}var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONParse!==!1&&!!n;if(r)try{r=n.parse('{"ok":false}',i).ok}catch(s){r=!1}return!r},trigger:"json-parse"}),r("load","15",{name:"json-stringify-shim",test:function(e){var t=e.config.global.JSON,n=Object.prototype.toString.call(t)==="[object JSON]"&&t,r=e.config.useNativeJSONStringify!==!1&&!!n;if(r)try{r="0"===n.stringify(0)}catch(i){r=!1}return!r},trigger:"json-stringify"}),r("load","16",{name:"scrollview-base-ie",trigger:"scrollview-base",ua:"ie"}),r("load","17",{name:"selector-css2",test:function(e){var t=e.config.doc,n=t&&!("querySelectorAll"in t);return n},trigger:"selector"}),r("load","18",{name:"transition-timer",test:function(e){var t=e.config.doc,n=t?t.documentElement:null,r=!0;return n&&n.style&&(r=!("MozTransition"in n.style||"WebkitTransition"in n.style||"transition"in n.style)),r},trigger:"transition"}),r("load","19",{name:"widget-base-ie",trigger:"widget-base",ua:"ie"}),r("load","20",{name:"yql-nodejs",trigger:"yql",ua:"nodejs",when:"after"}),r("load","21",{name:"yql-winjs",trigger:"yql",ua:"winjs",when:"after"})},"@VERSION@",{requires:["yui-base"]}),YUI.add("intl-base",function(e,t){var n=/[, ]/;e.mix(e.namespace("Intl"),{lookupBestLang:function(t,r){function a(e){var t;for(t=0;t<r.length;t+=1)if(e.toLowerCase()===r[t].toLowerCase())return r[t]}var i,s,o,u;e.Lang.isString(t)&&(t=t.split(n));for(i=0;i<t.length;i+=1){s=t[i];if(!s||s==="*")continue;while(s.length>0){o=a(s);if(o)return o;u=s.lastIndexOf("-");if(!(u>=0))break;s=s.substring(0,u),u>=2&&s.charAt(u-2)==="-"&&(s=s.substring(0,u-2))}}return""}})},"@VERSION@",{requires:["yui-base"]}),YUI.add("yui-log",function(e,t){var n=e,r="yui:log",i="undefined",s={debug:1,info:1,warn:1,error:1};n.log=function(e,t,o,u){var a,f,l,c,h,p=n,d=p.config,v=p.fire?p:YUI.Env.globalEvents;return d.debug&&(o=o||"",typeof o!="undefined"&&(f=d.logExclude,l=d.logInclude,!l||o in l?l&&o in l?a=!l[o]:f&&o in f&&(a=f[o]):a=1),a||(d.useBrowserConsole&&(c=o?o+": "+e:e,p.Lang.isFunction(d.logFn)?d.logFn.call(p,e,t,o):typeof console!=i&&console.log?(h=t&&console[t]&&t in s?t:"log",console[h](c)):typeof opera!=i&&opera.postError(c)),v&&!u&&(v==p&&!v.getEvent(r)&&v.publish(r,{broadcast:2}),v.fire(r,{msg:e,cat:t,src:o})))),p},n.message=function(){return n.log.apply(n,arguments)}},"@VERSION@",{requires:["yui-base"]}),YUI.add("yui-later",function(e,t){var n=[];e.later=function(t,r,i,s,o){t=t||0,s=e.Lang.isUndefined(s)?n:e.Array(s),r=r||e.config.win||e;var u=!1,a=r&&e.Lang.isString(i)?r[i]:i,f=function(){u||(a.apply?a.apply(r,s||n):a(s[0],s[1],s[2],s[3]))},l=o?setInterval(f,t):setTimeout(f,t);return{id:l,interval:o,cancel:function(){u=!0,this.interval?clearInterval(l):clearTimeout(l)}}},e.Lang.later=e.later},"@VERSION@",{requires:["yui-base"]}),YUI.add("yui",function(e,t){},"@VERSION@",{use:["get","features","intl-base","yui-log","yui-later"]});
