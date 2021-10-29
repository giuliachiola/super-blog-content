---
title: Show console outputs based on environment
abstract: A project can be beautiful from the outside, but if the browser console is full of messy outputs it will immediately seem confusing and carelessly.
quote: If we have the attitude that it’s going to be a great day it usually is
quoteAuthor: Catherine Pulsifier

date: 2021-01-20

permalink: posts/show-console-outputs-based-on-environment/
crossPostDEV: https://dev.to/giulia_chiola/show-console-outputs-based-on-environment-4gi8
crossPostHashnode: https://giuliachiola.hashnode.dev/show-console-outputs-based-on-environment

mainTag: shell
tags:
  - shell
  - nodejs
id: 16
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
  consoleWrap = window.console
} else {
  consoleWrap = () => {}
}
```

```js
// other-file.js

consoleWrap.log('Hello!')
consoleWrap.error('This is an error message!')
```

To set the `devMode` in browser local storage, please add this line in browser console:

```js
// browser console

localStorage.devMode = 'true'

> Hello!
```

> 🧨 **!important**
>
> local storage values are strings 🤭, so we have to assign the variable as string `localStorage.devMode = 'true'` and check its value as string `localStorage.devMode === 'true'`.

## Using vue env + webpack + loglevel

In a Vue project we already have webpack installed, and do not output noisy `console.log()` in production JS bundle is an efficient way to save kilobytes! 😏

**Loglevel** to the rescue!

- [loglevel](https://github.com/pimterry/loglevel)

> Minimal lightweight simple logging for JavaScript. loglevel replaces console.log() and friends with level-based logging and filtering, with none of console's downsides.

Install it in development packages:

```shell
npm install loglevel --save-dev
```

In every JS file we would need to output something, we have to:
- import _loglevel_
- use its syntax, where `log.debug` == `console.log`

```js
import log from 'loglevel';

log.debug('This output will be in both development and production mode')
```

Why did we talk about webpack above? 😅

Well, webpack will not add into the JS bundle the code that will never be executed, as for example a condition that will never match:

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

we can add all console outputs we want to our project

```js
import log from 'loglevel';

if (process.env.VUE_APP_DEBUG) {
  log.debug('This output will be in development mode, but not in production mode')
}
```

and none of them will output in the final JS bundle! 🎉

<div class="s-giphy s-giphy--medium-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/3rgXBvnbXtxwaWmhr2/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/dancing-dinosaur-t-rex-3rgXBvnbXtxwaWmhr2">via GIPHY</a></p>
</div>
