---
title: How to rename git branch
abstract: Few commands to rename git branch locally and remotely
quote: Feel the fear and do it anyway
quoteAuthor: Susan Jeffers

date: 2021-01-17
mainTag: git
tags:
  - git
  - shell
id: T5
---

## Rename local branch

To rename a *local* branch in git

- Move on the branch you want to rename
```shell
git checkout -b feature/wrong-name
```

- Rename it locally
```bash
git branch -m feature/new-awesome-name
```

> ⚡️ Bonus tip
>
> If you have [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) installed, you can use its shortcut `gbm`.

## Rename remote branch

To rename a *remote* branch is quite longer:

- Unset the upstream branch to unlink local and remote branch
```bash
git branch --unset-upstream
```

Note: if you followed the previous step, you don't have to delete local branch because you have already renamed it!

- Update the upstream branch to the new one and push it
```bash
git push --set-upstream origin feature/new-awesome-name
```

- Delete remote branch
```bash
git push origin --delete feature/wrong-name
```
