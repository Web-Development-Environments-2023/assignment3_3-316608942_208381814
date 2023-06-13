(()=>{var e={840:(e,t,r)=>{"use strict";r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var n=r(144),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),e._v("| "),r("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("| "+e._s(!e.$root.store.username)+" "),e.$root.store.username?r("span",[e._v(" "+e._s(e.$root.store.username)+": "),r("button",{on:{click:e.Logout}},[e._v("Logout")]),e._v("| ")]):r("span",[e._v(" Guest: "),r("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("| "),r("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")]),e._v("| ")],1)],1),r("router-view")],1)},a=[];r(7658);const i={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},s=i;var c=r(3736),u=(0,c.Z)(s,o,a,!1,null,null,null);const l=u.exports;var p=r(1939),d=r.n(p),m=r(9669),v=r.n(m),f=r(6123),h=r.n(f),g=(r(8783),r(3948),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Main Page")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onMore(t)}}}),r("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Random Recipes"}}),e.$root.store.username?e._e():r("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),r("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"50px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("More")]),r("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)}),b=[],_=r(4981),y=r(486),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),r("b-row",e._l(e.recipes,(function(e){return r("b-col",{key:e.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},k=[],x=r(532),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[r("div",{staticClass:"recipe-body"},[e.image_load?r("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}):e._e()]),r("div",{staticClass:"recipe-footer"},[r("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),r("ul",{staticClass:"recipe-overview"},[r("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),r("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])])])},$=[];const E={mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0}}},R=E;var L=(0,c.Z)(R,C,$,!1,null,"979dc5d4",null);const P=L.exports,S={name:"RecipePreviewList",components:{RecipePreview:P},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,y.Z)((0,_.Z)().mark((function t(){var r,n,o;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:n=t.sent,o=n.data,e.recipes=[],(r=e.recipes).push.apply(r,(0,x.Z)(o)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},O=S;var j=(0,c.Z)(O,w,k,!1,null,"282b2a5c",null);const Z=j.exports,T={components:{RecipePreviewList:Z},methods:{moreRandom:function(){var e=this;return(0,y.Z)((0,_.Z)().mark((function t(){return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:t.sent,console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onMore:function(){this.form.submitError=void 0,this.moreRandom()}}},A=T;var N=(0,c.Z)(A,g,b,!1,null,"097cd17f",null);const F=N.exports;var M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},I=[],q={},B=(0,c.Z)(q,M,I,!1,null,null,null);const D=B.exports;var H=[{path:"/",name:"main",component:F},{path:"/register",name:"register",component:function(){return r.e(201).then(r.bind(r,201))}},{path:"/login",name:"login",component:function(){return r.e(205).then(r.bind(r,8205))}},{path:"/search",name:"search",component:function(){return r.e(66).then(r.bind(r,3066))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e(192).then(r.bind(r,5192))}},{path:"*",name:"notFound",component:D}];const U=H;var G=r(8345),V=(r(646),r(8620)),Y=(r(1074),r(508)),K=r(7563),z=r(5053),J=r(1869),Q=r(8672),W=r(57),X=r(7929),ee=r(4063),te=r(3909),re=r(8824);n["default"].use(h()),n["default"].use(G.Z);var ne=new G.Z({routes:U});[Y.E,K.w6,z.g,J.SY,Q.xL,W.u3,X.v5,ee.F,te.m$,re.A6].forEach((function(e){return n["default"].use(e)})),n["default"].use(V.ZP),v().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),v().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(d(),v()),n["default"].config.productionTip=!1;var oe={username:localStorage.username,search_url_:localStorage.search_url,server_domain:"http://localhost:3000",login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(oe),new n["default"]({router:ne,data:function(){return{store:oe}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},646:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{66:"da9404c1",192:"b7503dbe",201:"d8c24df5",205:"455409aa"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{192:"83dc419e",201:"c17db846",205:"01f5acdb"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-3-3:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,null,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={192:1,201:1,205:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,c]=n,u=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(t&&t(n);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(840)));n=r.O(n)})();
//# sourceMappingURL=app.ccb17ede.js.map