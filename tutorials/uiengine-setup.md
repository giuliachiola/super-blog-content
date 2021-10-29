---
title: UIengine project setup
abstract: Basic configuration to setup a styleguide project from scratch using UIengine as styleguide tool.
quote: Do something today that your future self <br class="u-ty-break-t">will thank you for
quoteAuthor: Sean Patrick Flanery

date: 2021-01-12

permalink: posts/uiengine-project-setup/
crossPostDEV: https://dev.to/giulia_chiola/uiengine-project-setup-2a4b
crossPostHashnode: https://giuliachiola.hashnode.dev/uiengine-project-setup

mainTag: design-system
tags:
  - design-system
  - nodejs
  - css
  - uiengine
id: 30
---

[UIengine](https://github.com/dennisreimann/uiengine) is an awesome tool I used few times to document design systems with living pattern libraries. Here it is my basic UIengine setup.

### Prerequisites

Styles configuration from scratch is available in this post [📒 styleguide setup]({{ global.siteUrl }}/posts/styleguide-setup/).

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

_module-alias_ comes in handy in _component.config.js_ files, where we need to call JS functions contained in the root folder `/scripts`:

Require `module-alias`

```javascript
const moduleAlias = require('module-alias')
```

Register the alias with the method `addAlias`

```javascript
moduleAlias.addAlias('@scripts', process.cwd() + '/scripts')
```

Example: we want to populate component fileds with data contained in _scripts/content.js_. Using  `module-alias` we can use the shortcut `@scripts` to get the content file, from anywhere we made the call.

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

Now that my basic UIengine setup is done, I can start to develop my components! 💪🏻
