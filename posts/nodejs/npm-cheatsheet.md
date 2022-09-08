---
title: Npm cheatsheet
abstract: Few commands to speed up development using npm
quote: We are what we repeatedly do. <br class="u-ty-break-t">Excellence, then, is not an act, but a habit
quoteAuthor: Aristotle

date: 2021-01-31

permalink: posts/npm-cheatsheet/
crossPostDEV: https://dev.to/giulia_chiola/node-js-cheatsheet-25k0
crossPostHashnode: https://giuliachiola.hashnode.dev/npm-cheatsheet

mainTag: shell
tags:
  - shell
  - node
  - npm
id: 14
---

Few `npm` commands I found very useful during development.

| Command                                                         | Description                                                                        |
|-----------------------------------------------------------------|:-----------------------------------------------------------------------------------|
| `npm -v`                                                        | show current `npm` version installed                                               |
| `npm init`                                                      | inizialize npm project into the current folder, creates `package.json`             |
| `npm --help`                                                    | show npm help manual page                                                          |
| `npm list`                                                      | show a tree of every package found in the current folder                           |
| `npm list -g`                                                   | same as above ^^, but search also in global packages                               |
| `npm list -g --depth=0`                                         | same as above ^^, but do not show every package’s dependencies                     |
| `npm list [package name]`                                       | show a tree of every instance found in the current folder of that specific package |
| `npm install`                                                   | install all packages in `package.json`                                             |
| `npm install [package name]`                                    | install a package as dependency*                                                   |
| `npm install [package name] --save`                             | install a package as dependency (same as above)                                    |
| `npm install [package name] --save-dev`                         | install a package as dev dependency                                                |
| `npm install --save username/repo#branch-name-or-commit-or-tag` | install package from GitHub repository                                             |
| `npm uninstall [package name]`                                  | uninstall a package                                                                |
| `npm update`                                                    | update top level packages                                                          |
| `npm update --depth [number of levels]`                         | update dependencies of dependencies packages                                       |
| `npm update [package name] -g`                                  | update global package installation                                                 |
| `npm docs [package name]`                                       | show README, official website, of the given package                                |
| `npm outdated`                                                  | show packages that should be updated                                               |


> 🧨 **!important**
> By default, in node@5 the `--save` flag is implicit.

Therefore running these two commands you will have the same result:

```shell
npm i lodash

# is the same as
npm i lodash --save
```

they add a new line in your `package.json` into the `dependecies` object:

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Giulia Chiola",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

## Aliases

| Alias                     | Command                                  |
|---------------------------|:-----------------------------------------|
| `npm i`                   | `npm install`                            |
| `npm i [package name] -D` | `npm install [package name] --save-dev ` |
| `npm ls`                  | `npm list`                               |
| `npm up [package name]`   | `npm update [package name]`              |
| `npm un [package name]`   | `npm uninstall [package name]`           |

## Config

Set initial values for npm projects:

```shell
npm config set init-author-name "Your name"
npm config set init-author-email "your@email.com"
npm config set init-license MIT
```

### ⚡️ Bonus tip

[npm-check](https://github.com/dylang/npm-check) is a useful tool to _check for outdated, incorrect, and unused dependencies_

> 📚 More info
>
> - [How to list npm user-installed packages - StackOverflow](https://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages)
> - [npm cheatsheet - DevHints](https://devhints.io/npm)
> - [Use Github branch as dependency in package.json](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/d0NnEG1WnnXqg/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="http://gph.is/2biY0lt">via GIPHY</a></p>
</div>
