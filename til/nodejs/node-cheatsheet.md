---
title: Nodejs cheatsheet
abstract: Few commands to speed up development using node.
quote: We are what we repeatedly do. <br class="u-ty-break-t">Excellence, then, is not an act, but a habit
quoteAuthor: Aristotle

date: 2021-01-21
mainTag: shell
tags:
  - shell
id: T14
---

Few commands I found very useful during development.

| Command                                 | Description                                                                        |
|-----------------------------------------|:-----------------------------------------------------------------------------------|
| `npm list`                              | show a tree of every package found in the current folder                           |
| `npm list -g`                           | same as above ^^, but search also in global packages                               |
| `npm list -g --depth=0`                 | same as above ^^, but do not show every package’s dependencies                         |
| `npm list [package name]`               | show a tree of every instance found in the current folder of that specific package |
| `npm install`                           | install all packages in `package.json`                                     |
| `npm install [package name]`            | install a package                                                                  |
| `npm install [package name] --save`     | install a package as dependency                                                    |
| `npm install [package name] --save-dev` | install a package as dev dependency                                                |
| `npm uninstall [package name]`          | uninstall a package                                                |
| `npm install --save username/repo#branch-name-or-commit-or-tag` | install package from GitHub repository |

## Alias

| Alias                      | Command                                  |
|----------------------------|:-----------------------------------------|
| `npm i`                    | `npm install`                            |
| `npm i [package name] -D`  | `npm install [package name] --save-dev ` |

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
