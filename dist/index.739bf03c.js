// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVgJb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
// // GET
// const BASE_URL = 'http://localhost:3000';
// function fetchQuotes() {
//   return fetch(`${BASE_URL}/quotes`)
//     .then(response => response.json())
//     .then(console.log);
// }
// fetchQuotes();
//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';
// async function fetchQuotes() {
//   try {
//     const res = await fetch(`${BASE_URL}/quotes`);
//     const quotes = await res.json();
//     return quotes;
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchQuotes().then(console.log);
// const BASE_URL = 'http://localhost:3000';
// function fetchQuoteById(id) {
//   return fetch(`${BASE_URL}/quotes/${id}`)
//     .then(response => response.json())
//     .then(console.log);
// }
// fetchQuoteById(15);
//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';
// async function fetchQuoteById(id) {
//   try {
//     const res = await fetch(`${BASE_URL}/quotes/${id}`);
//     const quotes = await res.json();
//     return quotes;
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchQuoteById(15).then(console.log);
// // POST
// const BASE_URL = 'http://localhost:3000';
// // при методі POST і всіх інших окрім GET, потрібно передати опції,
// // щоби уточнити, який метод фетчу нас цікавить, бо за замовчуванням
// // у фетчі стоїть мутод GET(тому ми його при GET - запитах не ставимо)
// const newQuote = {
//   quote: 'Співаючи ідуть дівчата',
//   translate: 'Плугатарі з плугами йдуть',
// };
// const newQuote2 = {
//   quote: 'Не думанно не гадано забігла в глухомань',
//   translate: 'Де сосни пахнуть ладаном в кадильницяях світань',
// };
// function addQuote(quote) {
//   const options = {
//     method: 'POST',
//     // також, нам потрібно передати хедер із контент-тайпом,
//     // в якому вказати бекенду, який тип контенту ми передаємо
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // ну власне, сам об'єкт, яки ми передаємо у вигляді BODY в форматі строки
//     body: JSON.stringify(quote),
//   };
//   return fetch(`${BASE_URL}/quotes`, options).then(response => response.json());
// }
// addQuote(newQuote).then(r => console.log(r));
// addQuote(newQuote2).then(r => console.log(r));
//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';
// const newQuote2 = {
//   quote: 'Не думанно не гадано забігла в АСИНХРОННУ глухомань',
//   translate: 'Де сосни пахнуть ладаном в АСИНХРОННИХ кадильницяях світань',
// };
// async function addQuote(quote) {
//   const options = {
//     method: 'POST',
//     // також, нам потрібно передати хедер із контент-тайпом,
//     // в якому вказати бекенду, який тип контенту ми передаємо
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // ну власне, сам об'єкт, яки ми передаємо у вигляді BODY в форматі строки
//     body: JSON.stringify(quote),
//   };
//   // ми можемо відловлювати помилки тут, але швидше за все, більш доцільно буде хз відловлювати у зовнішньому коді
//   // тому тут можемо  try...catch забрати
//   const res = await fetch(`${BASE_URL}/quotes`, options);
//   const addedQuote = await res.json();
//   return addedQuote;
// }
// // наприклад до цієї строки після then ми можемо додати catch, за таким же принципом ми можемо використати try...catch у зовнішньому коді(але try...catch ми можемо використовувати лише всередині функції, а якщо ми хочемо зачейнитись до результату асинхронної функції у зовнішньому коді - тоді використовуємо then...catch)
// addQuote(newQuote2).then(r => console.log(r));
// // PUT & PATCH
// // PUT бере об'єкт із заданим айдішником і повністю замінює його
// // PATCH оновлює конкретні влвстивості
// // put працює швидше, ніж patch, тому що повністю замінити об'єкт простіше, ніж оновлювати його
// const BASE_URL = 'http://localhost:3000';
// function updateQuote(update, quoteId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };
//   return fetch(`${BASE_URL}/quotes/${quoteId}`, options).then(res => res.json());
// }
// updateQuote({ translate: 'there were dances in the village' }, 17).then(console.log);
//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';
// async function updateQuote(update, quoteId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };
//   const res = await fetch(`${BASE_URL}/quotes/${quoteId}`, options);
//   const updatedQuote = await res.json();
//   return updatedQuote;
// }
// updateQuote(
//   { translate: 'Де сосни пахнуть ладаном в АСИНХРОННИХ ПРОПАТЧЕНИХ кадильницях світань' },
//   18
// ).then(console.log);
// // DELETE
// const BASE_URL = 'http://localhost:3000';
// function removeQuote(quoteId) {
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch(`${BASE_URL}/quotes/${quoteId}`, options).then(res => res.json());
// }
// removeQuote(19).then(res => {
//   if (res.ok) {
//     return res.json();
//   }
//   throw new Error(res.statusText);
// });
//////////////////////async version/////////////////////////
// const BASE_URL = 'http://localhost:3000';
// async function removeQuote(quoteId) {
//   const options = {
//     method: 'DELETE',
//   };
//   const res = await fetch(`${BASE_URL}/quotes/${quoteId}`, options);
//   return res;
// }
// removeQuote(19).then(console.log);
///////////////ВИКОРИСТАННЯ У ЗОВНІШНЬОМУ КОДІ//////////////////////////
async function addAndRenderQuote() {
    try {
        const quote = await addQuote();
        console.log(quote);
    } catch (error) {
        console.log(error);
    }
} /////////////////////////ASYNC/AWAIT/////////////////////////////////
 // try...catch
 // try {
 //   console.log('before myVar');
 //   myVar;
 //   console.log('after myVar');
 // } catch (error) {
 //   console.log(error.stack);
 // }
 // // де використовуємо try...catch
 // // try...catch використовуємо для того, щоб відловлювати runtime errors
 // // (помилки парсу JSON, коли витягуємо щось із local storage etc...)
 // const validJSON = '{ "name": "Mango", "age": 3 }';
 // const invalidJSON = '{backend sent something like this}';
 // // console.log(JSON.parse(validJSON));
 // try {
 //   console.log(1);
 //   console.log(JSON.parse(validJSON));
 // //   myVar;
 //   console.log(2);
 // } catch (error) {
 //   if (error.name === 'SyntaxError') {
 //     console.log('here we have json parse error');
 //   } else {
 //     console.log('some other problem');
 //   }
 // }
 // console.log('after try...catch');
 // async functions
 // async function ffn() {}
 // const fn = async function () {};
 // const arr = async () => {};
 // const x = {
 //   async getname() {},
 // };
 // class y {
 //   async getName() {}
 // }
 // // асинхронна функція ЗАВЖДИ ПОВЕРТАЄ ПРОМІС
 // async function getFruit(name) {
 //   const fruits = {
 //     strawberry: 'полуничка',
 //     kiwi: 'ківі',
 //     apple: 'апличко',
 //   };
 //   //   return Promise.resolve(fruits[name]);
 //   return 5;
 // }
 // // відповідно, до реузультату асинхронної функції можемо чейнити then
 // // щоби отримати результат асинхронної функції
 // function getFruit(name) {
 //   const fruits = {
 //     strawberry: 'полуничка',
 //     kiwi: 'ківі',
 //     apple: 'апличко',
 //   };
 //   return new Promise(resolve => {
 //     setTimeout(() => {
 //       resolve(fruits[name]);
 //     }, getRandomTime(10, 20));
 //   });
 // }
 // getFruit('apple').then(console.log);
 // function getRandomTime(min, max) {
 //   return Math.floor(Math.random() * (max - min + 1) + min);
 // }
 // // результат фетчу буде рандомний, тому що ми не можемо бути впевнені, коли який проміс виконається
 // function makeSmoothie() {
 //   getFruit('apple').then(console.log);
 //   getFruit('kiwi').then(console.log);
 //   getFruit('strawberry').then(console.log);
 // }
 // makeSmoothie();
 // // якщо результатом виклику промісу будемо викликати наступний проміс
 // // тоді зможемо контролювати порядок виведення результатів:
 // function makeSmoothie() {
 //   getFruit('apple').then(r => {
 //     console.log(r);
 //     getFruit('kiwi').then(r => {
 //       console.log(r);
 //       getFruit('strawberry').then(r => {
 //         console.log(r);
 //       });
 //     });
 //   });
 // }
 // makeSmoothie();
 // а тепер та ж функція, але із ситнтаксисом ASYNC...AWAIT
 // порядок виконання коду гарантується місцем рядка в коді
 // наступний await буде виконано тоді, коли резоланеться (або реджектнеться) попередній
 // async function makeSmoothie() {
 //   const apple = await getFruit('apple').then(console.log);
 //   const kiwi = await getFruit('kiwi').then(console.log);
 //   const srawberry = await getFruit('strawberry').then(console.log);
 // }
 // makeSmoothie();
 // // PROMISE.ALL
 // function getFruit(name) {
 //   const fruits = {
 //     strawberry: 'полуничка',
 //     kiwi: 'ківі',
 //     apple: 'апличко',
 //   };
 //   return new Promise((resolve, reject) => {
 //     setTimeout(() => {
 //       resolve(fruits[name]);
 //       reject('something went wrong');
 //     }, 1000);
 //   });
 // }
 // // виконання цієї функції буде відбуватись 3000ms
 // // тому що на виконання кожного промісу поставлений таймаут в 1000ms
 // async function makeSmoothie() {
 //   console.time('makeSmoothie');
 //   const apple = await getFruit('apple').then(console.log);
 //   const kiwi = await getFruit('kiwi').then(console.log);
 //   const srawberry = await getFruit('strawberry').then(console.log);
 //   console.timeEnd('makeSmoothie');
 // }
 // makeSmoothie();
 // // але ми можемо повернути всі проміси за один захід, тоді час виконання такого коду
 // // буде займати час виконання найдовшого промісу (в нашому випадку - це буде 1000ms)
 // // Promise.all дозволяє робити паралельні запити, він чекає, коли виконаються всі і тоді повертає їх
 // //  пр чому, всі виконубться
 // async function makeSmoothie() {
 //   console.time('makeSmoothie');
 //   const apple = getFruit('apple');
 //   const kiwi = getFruit('kiwi');
 //   const strawberry = getFruit('strawberry');
 //   const fruits = await Promise.all([apple, kiwi, strawberry]);
 //   console.log(fruits);
 //   console.timeEnd('makeSmoothie');
 // }
 // makeSmoothie();
 // // try...catch
 // async function makeSmoothie() {
 //   try {
 //     console.time('makeSmoothie');
 //     const apple = getFruit('apple');
 //     const kiwi = getFruit('kiwi');
 //     const strawberry = getFruit('strawberry');
 //     const fruits = await Promise.all([apple, kiwi, strawberry]);
 //     console.timeEnd('makeSmoothie');
 //     return fruits;
 //   } catch (error) {
 //     console.log(error);
 //   }
 // }
 // makeSmoothie().then(console.log);

},{}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequire7f71")

//# sourceMappingURL=index.739bf03c.js.map
