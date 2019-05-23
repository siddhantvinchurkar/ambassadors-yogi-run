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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "CODE_OF_CONDUCT.md",
    "revision": "c705391b8834a912453248e4d16b2c53"
  },
  {
    "url": "CONTRIBUTING.md",
    "revision": "8c57c1b5376e195b201db907060554d4"
  },
  {
    "url": "firebase.json",
    "revision": "f606cfd0d82a8042003b20b3a84ca7b3"
  },
  {
    "url": "firestore.indexes.json",
    "revision": "7c66f9c17626f849c92bd1c0caffd514"
  },
  {
    "url": "firestore.rules",
    "revision": "fc029dbd9cab19099a150474dc715e1a"
  },
  {
    "url": "functions/index.js",
    "revision": "10be3e3e7e0ea62663880569677cc5c1"
  },
  {
    "url": "functions/package-lock.json",
    "revision": "92dfbcfb31484bc87917633a2abc53a7"
  },
  {
    "url": "functions/package.json",
    "revision": "adb6e63d8fe496f8625ee2aaba85f427"
  },
  {
    "url": "images/icons/favicon-32.png",
    "revision": "56c6b2d8ebb410422ec18375917b5c3b"
  },
  {
    "url": "images/icons/favicon-512.png",
    "revision": "981a2953f5749faa43e687699fb2445a"
  },
  {
    "url": "index.html",
    "revision": "30b2ac72769fc74b0d46ee0624c4587a"
  },
  {
    "url": "LICENSE.md",
    "revision": "36a2bfb767151986e819e88c3fa28b29"
  },
  {
    "url": "main.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "main.js",
    "revision": "20398b41303a6c69f008720129fb8502"
  },
  {
    "url": "manifest.json",
    "revision": "267d9eb8a1c3118d5e668177c9e66669"
  },
  {
    "url": "storage.rules",
    "revision": "166a8a900000c71f8e5a5cb4247fa6d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
