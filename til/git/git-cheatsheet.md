---
title: Git cheatsheet
abstract: Some git commands that I find very useful.
quote: Keep looking up…<br class="u-ty-break-t"> that’s the secret of life
quoteAuthor: Charlie Brown

date: 2021-01-25

permalink: posts/git-cheatsheet/
crossPostDEV: https://dev.to/giulia_chiola/git-cheatsheet-3ffl
crossPostHashnode: https://giuliachiola.hashnode.dev/git-cheatsheet

mainTag: git
tags:
  - git
id: 6
---

Few commands I found very useful during development.

| Command                                                                           | Description                                                                  |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| `git commit -am "message"`                                                        | add and commit all trakced files                                             |
| `git fetch --all --prune`                                                         | fetch all remotes, delete remote branches which are dead                     |
| `git reset --merge`                                                               | abort merge, reset as before (also if there are local commit not pushed yet) |
| `git merge --strategy-option theirs [branch]`                                     | merge branch into current branch, keeping their work in conflicts            |
| `git branch --unset-upstream`                                                     | remove upstream branch                                                       |
| `git reset myfile.js`                                                             | remove from staging area                                                     |
| `git commit --amend --no-edit`                                                    | amend without edit message                                                   |
| `git commit --amend --no-edit --patch`                                            | amend without edit message + choose interactively which changes to commit    |
| `git checkout -`                                                                  | switch to previous branch                                                    |
| `git checkout [branch] -- path/to/file.scss`                                      | get file from another branch and copy to current branch                      |
| `git stash -u`                                                                    | stash all files (also untracked ones)                                        |
| `git reset --soft A`                                                              | remove files, but still available in staging area                            |
| `git reset --mixed A`                                                             | `git reset A` (default) remove files also in staging area                    |
| `git reset --hard`                                                                | remove files as they never existed                                           |
| `git stash clear`                                                                 | delete all stashes                                                           |
| `git fetch origin; git reset --hard origin/main`                                  | restore as remote main branch                                                |
| `git log --tags --simplify-by-decoration --pretty="format:%ci %d"`                | show tags details                                                            |
| `git log --graph --abbrev-commit --decorate`                                      | show commits with decorative branches                                        |
| `git log --decorate --oneline --graph --date-order master@{"4 days ago"}..master` | show commits of the last 4 days in a compact graph                           |
| `git diff --name-only | uniq | xargs $EDITOR`                                     | open all modified files                                                      |
| `git push origin :feature/branchname`                                             | delete remote branch                                                         |
| `git push origin --delete feature/branchname`                                     | delete remote branch                                                         |
| `git push origin --all`                                                           | push all local branches                                                      |
| `git fetch --prune --prune-tags`                                                  | remove local tags, align tags to remotes                                     |
| `git ls-remote --tags origin`                                                     | list all remote tags                                                         |

### ⚡️ Bonus tip

If there is a command you use often, you can save it as a **global git alias**.

```shell
git config --global alias.fixup 'commit --amend --no-edit'
```

and then using it

```shell
git fixup
```

Thanks to [DarkWiiPlayer](https://dev.to/darkwiiplayer/comment/1ak6o) for pointing that out. 😎

## Rename a git tag

```shell
git tag [new] [old]
git tag -d [old]
git push origin :refs/tags/[old]
git push --tags
```

When you fetch remote tags, be sure you have the updated tags

```shell
git pull --prune --tags
```

## GitLab branch compare

- Open the left sidebar
- Click on `Repository` > `Compare`

```md
https://github.com/giuliachiola/super-blog-11ty/compare/[source]...[target]
```

Example:

```md
https://github.com/giuliachiola/super-blog-11ty/compare/main...develop
```

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/wTrXRamYhQzsY/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/funny-wTrXRamYhQzsY">via GIPHY</a></p>
</div>
