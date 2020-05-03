---
title: Git cheatsheet
abstract: Few commands to speed up development using git.
quote: Keep looking up… that’s the secret of life.
quoteAuthor: Charlie Brown
date: 2020-04-12
readingTime: 1 mins
mainTag: git
tags:
  - git
---

Few commands I found very useful during development.

| Command                                                            | Description                                                                  |
|--------------------------------------------------------------------|------------------------------------------------------------------------------|
| `git commit -am "message"`                                         | add and commit all trakced files                                             |
| `git fetch --all --prune`                                          | fetch all remotes, delete remote branches which are dead                     |
| `git reset --merge`                                                | abort merge, reset as before (also if there are local commit not pushed yet) |
| `git branch --unset-upstream`                                      | remove upstream branch                                                       |
| `git reset myfile.js`                                              | remove from staging area                                                     |
| `git commit --amend --no-edit`                                     | amend without edit message                                                   |
| `git checkout -`                                                   | switch to previous branch                                                    |
| `git stash -u`                                                     | stash all files (also untracked ones)                                        |
| `git reset --soft A`                                               | remove files, but still available in staging area                            |
| `git reset --mixed A`                                              | `git reset A` (default) remove files also in staging area                    |
| `git reset --hard`                                                 | remove files as they never existed                                           |
| `git stash clear`                                                  | delete all stashes                                                           |
| `git fetch origin; git reset --hard origin/master`                 | restore as remote master branch                                              |
| `git log --tags --simplify-by-decoration --pretty="format:%ci %d"` | show tags details                                                            |
| `git diff --name-only | uniq | xargs $EDITOR`                      | opens all modified files                                                     |
| `git push origin :feature/nomebranch`                              | delete remote branch                                                         |
| `git push origin --delete feature/nomebranch`                      | delete remote branch                                                         |
| `git push origin --all`                                            | push all local branches                                                      |
| `git fetch --prune --prune-tags`                                   | Remove local tags, align tags to remotes                                     |

