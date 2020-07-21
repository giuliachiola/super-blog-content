---
title: Add console outputs only in production mode
abstract: A project can be beautiful from the outside, but if the browser console is full of messy outputs it will immediately seem confusing and carelessly
quote: If we have the attitude that it’s going to be a great day it usually is.
quoteAuthor: Catherine Pulsifier

articleDate: 2020-05-03
mainTag: shell
tags:
  - shell
  - nodejs
---

A project can be beautiful from the outside, but if the browser console is full of messy outputs it will immediately seem confusing and carelessly 😅

## Using the local storange + custom script

In this script we:
- assign the `window.console` to a custom variable named `consoleWrap`
- create a "state" variable `devMode` and save it in the browser local storage. We will use it to determinate if we are in development or production mode!
- instead of use the default `console.log()` function, use the new `consoleWrap.debug.log()` instead, as it will be shown in browser console only when `devMode` local storage var is `'true'`.

```js
// main.js

let consoleWrap = {};

if (localStorage.devMode && localStorage.devMode === 'true') {
  consoleWrap.debug = window.console
} else {
  consoleWrap.debug = () => {}
}
```

```js
// other-file.js
consoleWrap.debug.log('Hello!')
```

To set the `devMode` in browser local storage, please add thise line in browser console:

```js
// browser console

localStorage.devMode = 'true'

> Hello!
```

Note: local storage values are strings 🤭, so we have to assign the variable as string `localStorage.devMode = 'true'` and check its value as string `localStorage.devMode === 'true'`.

## Using vue env + webpack + loglevel

In a Vue project we already have webpack installed, and do not output `console.log()` debug prints in production JS bundle is an efficient way to save kilobytes! 😏

Loglevel to the rescue!

- [loglevel](https://github.com/pimterry/loglevel)

> Minimal lightweight simple logging for JavaScript. loglevel replaces console.log() and friends with level-based logging and filtering, with none of console's downsides.

Install it in development packages:

```shell
npm install loglevel --save-dev
```

In every JS file we need to output something, we have to:
- import loglevel
- use its syntax `log.debug` == `console.log`

```js
import log from 'loglevel';

log.debug('This output will be in both development and production mode')
```

Why did we talk about webpack above? 😅

Well, webpack will not add to the JS bundle the code that will never be executed, as for example a condition that will never match:

```js
if ((2 + 2) === 5) {
  // This code will never see the sunlight! 😢
}
```

so if we use node `ENV` variables settings:

```shell
# .env

VUE_APP_DEBUG=true
```

```shell
# .env.production

VUE_APP_DEBUG=false
```

we can add all console outputs we want to our project, and none of them will output in the final JS bundle! 🎉

```js
import log from 'loglevel';

if (process.env.VUE_APP_DEBUG) {
  log.debug('This output will be in development mode, but not in production mode')
}
```

<div class="s-giphy s-giphy--medium-d">
  <div style="width:100%;height:0;padding-bottom:78%;position:relative;"><iframe src="https://giphy.com/embed/3rgXBvnbXtxwaWmhr2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/dancing-dinosaur-t-rex-3rgXBvnbXtxwaWmhr2">via GIPHY</a></p>
</div>
