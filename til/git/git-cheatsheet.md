---
title: Git cheatsheet
abstract: Few commands to speed up development using git.
quote: Keep looking up… that’s the secret of life.
quoteAuthor: Charlie Brown
articleDate: 2020-04-12

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
| `git merge --strategy-option theirs [branch]`                      | merge branch into current branch, keeping their work in conflicts |
| `git branch --unset-upstream`                                      | remove upstream branch                                                       |
| `git reset myfile.js`                                              | remove from staging area                                                     |
| `git commit --amend --no-edit`                                     | amend without edit message                                                   |
| `git checkout -`                                                   | switch to previous branch                                                    |
| `git checkout [branch] -- path/to/file.scss`                       | get file from another branch and copy to current branch                                                    |
| `git stash -u`                                                     | stash all files (also untracked ones)                                        |
| `git reset --soft A`                                               | remove files, but still available in staging area                            |
| `git reset --mixed A`                                              | `git reset A` (default) remove files also in staging area                    |
| `git reset --hard`                                                 | remove files as they never existed                                           |
| `git stash clear`                                                  | delete all stashes                                                           |
| `git fetch origin; git reset --hard origin/master`                 | restore as remote master branch                                              |
| `git log --tags --simplify-by-decoration --pretty="format:%ci %d"` | show tags details                                                            |
| `git log --graph --abbrev-commit --decorate`                       | show commits with decorative branches                                     |
| `git diff --name-only | uniq | xargs $EDITOR`                      | opens all modified files                                                     |
| `git push origin :feature/branchname`                              | delete remote branch                                                         |
| `git push origin --delete feature/branchname`                      | delete remote branch                                                         |
| `git push origin --all`                                            | push all local branches                                                      |
| `git fetch --prune --prune-tags`                                   | remove local tags, align tags to remotes                                     |
| `git ls-remote --tags origin`                                      | list all remote tags                                     |


<div class="s-giphy s-giphy--small-d">
  <div style="width:100%;height:0;padding-bottom:54%;position:relative;"><iframe src="https://giphy.com/embed/wTrXRamYhQzsY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/funny-wTrXRamYhQzsY">via GIPHY</a></p>
</div>
