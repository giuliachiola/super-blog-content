---
title: Oh my zsh git plugin cheatsheet
abstract: List of my most used shortcuts working with zsh git plugin.
quote: If everything seems under control, <br class="u-ty-break-t">you're not going fast enough
quoteAuthor: Mario Andretti

date: 2021-01-18

permalink: posts/oh-my-zsh-git-plugin-cheatsheet/
crossPostDEV: https://dev.to/giulia_chiola/oh-my-zsh-cheatsheet-3all
crossPostHashnode: https://giuliachiola.hashnode.dev/oh-my-zsh-git-plugin-cheatsheet

mainTag: git
tags:
  - shell
id: 9
---

Some useful shortcuts I use with [oh-my-zsh git plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git).

| Alias   | Command                                          | Notes                                                        |
|:--------|:-------------------------------------------------|:-------------------------------------------------------------|
| `gb`    | `git branch`                                     | List of local branches                                       |
| `gba`   | `git branch -a`                                  | List of local and remote branches                            |
| `gcam`  | `git commit -am`                                 | Add all files to stage and commit                            |
| `gcmsg` | `git commit -m`                                  | Git commit message                                           |
| `gco`   | `git checkout`                                   | Change branch                                                |
| `gco -` | `git checkout` to the previous branch            | Change branch to the previous one                            |
| `gd`    | `git diff`                                       | Files differences in staging                                 |
| `gfa`   | `git fetch --all --prune`                        | Fetch all remote branches, delete branch if upstream is gone |
| `gl`    | `git pull`                                       | Pull from remote                                             |
| `gp`    | `git push`                                       | Push to remote                                               |
| `gpsup` | `git push --set-upstream origin [currentbranch]` | Set upstream branch                                          |
| `gst`   | `git status`                                     | Local files to commit                                        |

## Add your zsh aliases

- Open zsh configuration file

```shell
nano ~/.zshrc
```

- Add aliases using the syntax
```shell
alias [name]='[command]'
```

For instance, these are my aliases in `.zshrc` file

```shell
alias gflbs='git flow bugfix start'
alias gflbf='git flow bugfix finish'

alias gbm='git branch -m'
alias gbD='git branch -D'
alias gbuu='git branch --unset-upstream'
```

To apply these changes, you should close the tab and open a new one **or** you can run

```shell
source ~/.zshrc
```

or shorter version

```shell
. ~/.zshrc
```

### My aliases

Here are some shortcuts I added compared to the ones came with [oh-my-zsh plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow)

| Alias   | Command                       | Notes                                    |
|:--------|:------------------------------|:-----------------------------------------|
| `gflbs` | `git flow bugfix start`       | Start a `bugfix/` branch from `develop`  |
| `gflbf` | `git flow bugfix finish`      | Finish a `bugfix/` branch from `develop` |
| `gbm`   | `git branch -m`               | Rename branch                            |
| `gbD`   | `git branch -D`               | Delete local branch with force option    |
| `gbuu`  | `git branch --unset-upstream` | Unset upstream branch                    |

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/GD5xkDtFPUpY4/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/love-movie-film-GD5xkDtFPUpY4">via GIPHY</a></p>
</div>

> 📚 More info
> - [Oh My Zsh cheatsheet](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)
> - [Oh My Zsh Commands Aliases Cheat Sheet](https://ohmycheatsheet.com/oh-my-zsh-commands-cheat-sheet/)
> - [Oh My Zsh Git-Flow plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow)
