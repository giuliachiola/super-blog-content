---
title: Project setup
abstract: Configuration list to setup a project from scratch.
quote: The only limit to your impact is your imagination and commitment.
quoteAuthor: Tony Robbins

date: 2020-05-03
readingTime: 2 mins
mainTag: nodejs
tags:
  - nodejs
  - git
  - vsc
---

## Config

### Editor

- [.editorconfig](https://editorconfig.org/)

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles.

[🦊Gitlab snippet](https://gitlab.com/giuliach/super-snippets/-/blob/ddd5ada971279ed6f0440a52dbaf0b4ac2df13eb/config/.editorconfig)


### Visual Studio Code workspace

Adding Visual Studio Code specific colors for every project, helps to recognize them more easlily during the development.

To set up workspace colors

- open VSC settings `cmd` + `,`
- search for `workbench.colorCustomizations`
- edit the .json file using vsc-workspace-colors.json content below

[🦊Gitlab snippet](https://gitlab.com/giuliach/super-snippets/-/blob/ddd5ada971279ed6f0440a52dbaf0b4ac2df13eb/vsc/vsc-workspace-colors.json)

## Git

### Gitignore

- [.gitignore](https://git-scm.com/docs/gitignore)

> A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected; Each line in a gitignore file specifies a pattern.

[🦊Gitlab snippet](https://gitlab.com/giuliach/super-snippets/-/blob/ddd5ada971279ed6f0440a52dbaf0b4ac2df13eb/git/.gitignore)

### Issue template

The issue is more clear if we set up an _issue template_. Compile it every time you open an issue, and remove the unnecessary parts.

[🦊Gitlab snippet](https://gitlab.com/giuliach/super-snippets/-/blob/ddd5ada971279ed6f0440a52dbaf0b4ac2df13eb/git/issue-template.md)


### PR template

[🦊Gitlab snippet](https://gitlab.com/giuliach/super-snippets/-/blob/ddd5ada971279ed6f0440a52dbaf0b4ac2df13eb/git/pr-template.md)
