---
title: UIengine project setup
abstract: Basic configuration to setup a styleguide project from scratch using UIengine as styleguide tool.
quote: Do something today that your future self will thank you for.
quoteAuthor: Sean Patrick Flanery
img: 'https://source.unsplash.com/d2R5WxJ4i4M'
imgAuthorName: '@sonson'
imgAuthorProfile: 'https://unsplash.com/@sonson'
date: 2020-03-29
mainTag: design-system
tags:
  - design-system
  - nodejs
  - css
---

Styles configuration from scratch is available in [this post](http://localhost:8080/content/blog/02-styleguide-setup/).

## UIengine

- [UIengine](https://github.com/dennisreimann/uiengine)

> Workbench for UI-driven development: A tool for developers and designers to build and document web sites and apps.

```shell
npm install @uiengine/core --save-dev
```

UIengine supports lot of [template languages](https://uiengine.uix.space/adapters/). After choosing one of them, for instance _EJS_, we have to install the adapter for this language

```shell
npm install @uiengine/adapter-ejs --save-dev
```

- [module-alias](https://github.com/ilearnio/module-alias)
> Create aliases of directories and register custom module paths in NodeJS like a boss!

```shell
npm install module-alias --save-dev
```

_module-alias_ comes in handy in _component.config.js_ files, where we need to call JS functions in `/scripts` folder outside:

Require `module-alias`

```javascript
const moduleAlias = require('module-alias')
```

Register the alias with the method `addAlias`

```javascript
moduleAlias.addAlias('@scripts', process.cwd() + '/scripts')
```

Here I am calling from _content.js_ file some content data to populate the component fields. With `module-alias` we can use the shortcut `@scripts` to go to the `/scripts` folder.

```javascript
// Debug to run it in nodeJS
const moduleAlias = require('module-alias')
moduleAlias.addAlias('@scripts', process.cwd() + '/scripts')
// Config
const content = require('@scripts/content.js')
```


## Run parallel tasks

- [npm-run-all](https://github.com/mysticatea/npm-run-all)
> A CLI tool to run multiple npm-scripts in parallel or sequential.

```shell
npm install npm-run-all --save-dev
```

- [nodemon](https://github.com/remy/nodemon)
> nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```shell
npm install nodemon --save-dev
```

### Dev scripts

- _nodemon_ checks if any file has changed
- UIengine runs in `--serve` mode to hot-reload changes
- _npm-run-all_ runs in parallel UIengine build and styles build

```json
"scripts": {
  "_____________________________Dev_______________________________": "",
  "watcher": "nodemon -e scss -x \"npm run styles:dev\"",
  "build:serve": "node ./scripts/uiengine build --watch --serve",
  "dev": "npm-run-all -l clean:dev --parallel build:serve watcher"
}
```

## UIengine configuration

- Add CSS file to customize UIengine layout

```javascript
// uiengine.config.js

customStylesFile: '/css/uiengine.css',
```
