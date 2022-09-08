---
title: How to rename a git branch
abstract: Few commands to rename a git branch locally and remotely
quote: Feel the fear and do it anyway
quoteAuthor: Susan Jeffers

date: 2021-01-17

permalink: posts/how-to-rename-a-git-branch/
crossPostDEV: https://dev.to/giulia_chiola/how-to-rename-a-git-branch-81l
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-rename-a-git-branch

mainTag: git
tags:
  - git
  - shell
id: 5
---

## Rename local branch

To rename a *local* branch in git

- Move on the branch you want to rename

```shell
git checkout -b feature/wrong-name
```

- Rename it locally

```shell
git branch -m feature/new-awesome-name
```

### ⚡️ Bonus tip

If you have [ohmyzsh git plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git) installed, you can use its shortcuts

```shell
gco -b feature/wrong-name
gbm feature/new-awesome-name
```

## Rename remote branch

To rename a *remote* branch is quite longer:

- Unset the upstream branch to unlink local and remote branch

```shell
git branch --unset-upstream
```

Note: if you followed the previous step, you don't have to delete local branch because you have already renamed it!

- Update the upstream branch to the new one and push it

```shell
git push --set-upstream origin feature/new-awesome-name
```

### ⚡️ Bonus tip

If you have [ohmyzsh git plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git) installed, you can use its shortcut to set the upstream

```shell
gpsup (branch name is implicit)
```

- Delete remote branch

```shell
git push origin --delete feature/wrong-name
```

or the shortest syntax (note the space between remote name and semicolon)

```shell
git push origin :feature/wrong-name
```
