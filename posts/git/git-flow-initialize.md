---
title: Git flow initialize
abstract: How to fast initialize git flow with one simple command.
quote: Tidying your physical space allows you to tend to your psychological space
quoteAuthor: Marie Kondo

date: 2021-01-23

permalink: posts/git-flow-initialize/
crossPostDEV: https://dev.to/giulia_chiola/git-flow-initialize-21ai
crossPostHashnode: https://giuliachiola.hashnode.dev/git-flow-initialize

mainTag: git
tags:
  - git
  - shell
id: 7
---

To inizialize **git flow** with default branches configuration, run

```shell
git flow init -d
```

It will create a git flow structure to your project

```shell
Initialized empty Git repository in /Users/giulia/Sites/giulia/test/.git/
Using default branch names.
No branches exist yet. Base branches must be created now.
Branch name for production releases: [main]
Branch name for "next release" development: [develop]
.git/hooks/post-commit: line 8: git-stats: command not found

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [/Users/giulia/Sites/giulia/test/.git/hooks]
```

> 📚 More info
>
> - [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
> - [Git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
> - [A collection of Git-flow extensions](https://github.com/nvie/gitflow)
