(this["webpackJsonpapollo-client-sample"]=this["webpackJsonpapollo-client-sample"]||[]).push([[0],{72:function(e,n,t){e.exports=t(88)},88:function(e,n,t){"use strict";t.r(n);var a,o,l,r=t(0),i=t.n(r),c=t(23),s=t.n(c),u=t(68),d=t(41),m=t(42),v=t(69),p=t(70),f=t(71),h=t(31),E=t(62),g=t(24),w=t.n(g),y=(t(63),t(30));function b(){var e=Object(E.a)(["\n    query posts($options: PageQueryOptions) {\n  posts(options: $options) {\n    data {\n      id\n      title\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n    "]);return b=function(){return e},e}!function(e){e.Asc="ASC",e.Desc="DESC"}(a||(a={})),function(e){e.Gte="GTE",e.Lte="LTE",e.Ne="NE",e.Like="LIKE"}(o||(o={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(l||(l={}));var k=w()(b());var A=function(){var e,n,t,a=(t={variables:{options:{paginate:{page:1,limit:5}}},fetchPolicy:"cache-and-network"},y.useQuery(k,t)),o=a.data,l=a.loading,r=a.error,c=a.refetch,s=function(e){return i.a.createElement(f.a,{onClick:function(){!function(e){c({options:{paginate:{page:e,limit:5}}})}(e)}},e,"\u30da\u30fc\u30b8\u76ee\u3092\u8868\u793a")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"\u30bf\u30a4\u30c8\u30eb"))),i.a.createElement("tbody",null,null===o||void 0===o||null===(e=o.posts)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.map((function(e){return i.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id},i.a.createElement("td",null,null===e||void 0===e?void 0:e.id),i.a.createElement("td",null,null===e||void 0===e?void 0:e.title))})))))),i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,s(1),s(2),s(3))))),i.a.createElement(h.a,{show:l},i.a.createElement(h.a.Body,null,i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("div",{className:"spinner-border",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading..."))))),i.a.createElement(h.a,{show:!!r},i.a.createElement(h.a.Body,null,null===r||void 0===r?void 0:r.message)))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=t(25),W=(t(86),new L.ApolloClient({uri:"https://graphqlzero.almansi.me/api",cache:new L.InMemoryCache}));s.a.render(i.a.createElement(y.ApolloProvider,{client:W},i.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(n,e)}))}}()}},[[72,1,2]]]);
//# sourceMappingURL=main.ecf3d424.chunk.js.map