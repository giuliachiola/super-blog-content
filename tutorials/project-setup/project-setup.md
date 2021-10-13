---
title: How I set up my environment before I start every project
abstract: Configuration list to setup a project from scratch.
quote: The only limit to your impact is your imagination and commitment
quoteAuthor: Tony Robbins

date: 2021-01-31

permalink: posts/how-i-set-up-my-environment-before-i-start-every-project/
crossPostDEV: https://dev.to/giulia_chiola/how-i-set-up-my-environment-before-i-start-every-project-51k1
crossPostHashnode: https://giuliachiola.hashnode.dev/how-i-set-up-my-environment-before-i-start-every-project

mainTag: nodejs
tags:
  - nodejs
  - git
  - vsc
id: B1
---

## Config

### Editor

- [.editorconfig](https://editorconfig.org/)

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

[🐙 GitHub snippet](https://github.com/giuliachiola/super-snippets/blob/master/config/.editorconfig)


### Visual Studio Code workspace

Adding Visual Studio Code specific colors for every project, helps to recognize them more easlily during the development.

To set up workspace colors

- open VSC settings `cmd` + `,`
- search for `workbench.colorCustomizations`
- edit the .json file using vsc-workspace-colors.json content below

[🐙 GitHub snippet](https://github.com/giuliachiola/super-snippets/blob/master/vsc/vsc-workspace-colors.json)

## Git

### Gitignore

- [.gitignore](https://git-scm.com/docs/gitignore)

> A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected; Each line in a gitignore file specifies a pattern.

[🐙 GitHub snippet](https://github.com/giuliachiola/super-snippets/blob/master/git/.gitignore)

### Issue template

The issue is more clear if we set up an _issue template_. Compile it every time you open an issue, and remove the unnecessary parts.

[🐙 GitHub snippet](https://github.com/giuliachiola/super-snippets/blob/master/git/.gitlab/issue_templates/issue-template.md)

### PR template

[🐙 GitHub snippet](https://github.com/giuliachiola/super-snippets/blob/master/git/.gitlab/merge_request_templates/mr-template.md)
