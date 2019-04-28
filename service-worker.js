/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(":/janetye.github.io/set-game/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: ":/janetye.github.io/set-game/workbox-v3.6.3"});

importScripts(
  ":/janetye.github.io/set-game/precache-manifest.9c425e8a9bc45fd7b91aa96121741655.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(":/janetye.github.io/set-game/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
