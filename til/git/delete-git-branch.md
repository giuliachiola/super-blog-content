---
title: How to rename git branch
abstract: Few commands to rename git branch locally and remotely
quote: Feel the fear and do it anyway.
quoteAuthor: Susan Jeffers

articleDate: 2020-03-31
date: Last Modified
mainTag: git
tags:
  - git
  - shell
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

## Rename also remote branch

To rename a *remote* branch is quite longer:

- Unset the upstream branch to unlink local and remote branch
```bash
git branch --unset-upstream
```

Note: you don't have to delete local branch because you already have rename it!

- Update the upstream branch to the new one and push it
```bash
git push --set-upstream origin feature/new-awesome-name
```

- Delete remote branch
```bash
git push origin --delete feature/wrong-name
```
