---
title: Oh my zsh cheatsheet
abstract: List of my most used shortcuts working with zsh
quote: If everything seems under control, you're not going fast enough.
quoteAuthor: Mario Andretti
img: 'https://source.unsplash.com/nWP9b6AjA6g'
imgAuthorName: '@derallye'
imgAuthorProfile: 'https://unsplash.com/@derallye'
date: 2020-03-28
mainTag: git
tags:
  - shell
---

Some useful shortcuts I use with git [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) plugin.

| Command | Description                                      | Notes                             |
|:--------|:-------------------------------------------------|:----------------------------------|
| `gb`    | `git branch`                                     | List of local branches            |
| `gba`   | `git branch -a`                                  | List of local and remote branches |
| `gcam`  | `git commit -am`                                 | Add all files to stage and commit |
| `gcmsg` | `git commit -m`                                  | Git commit message                |
| `gco`   | `git checkout`                                   | Change branch                     |
| `gd`    | `git diff`                                       | Files differences in staging      |
| `gfa`   | `git fetch --all --prune`                        | Align local branches to remote    |
| `gl`    | `git pull`                                       | Pull from remote                  |
| `gp`    | `git push`                                       | Push to remote                    |
| `gpsup` | `git push --set-upstream origin [currentbranch]` | Set upstream branch               |
| `gst`   | `git status`                                     | Local files to commit             |

## Add your zsh aliases

- Open zsh configuration file

```shell
nano ~/.zshrc
```

- Add aliases using the synatx
```shell
alias [name]='[command]'
```

For instance, these are my aliases in `.zshrc` file

```shell
alias gffs='git flow feature start'
alias gfff='git flow feature finish'
alias gfbs='git flow bugfix start'
alias gfbf='git flow bugfix finish'
alias gfhs='git flow hotfix start'
alias gfhf='git flow hotfix finish'

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

| Command      | Description                   | Notes                                     |
|:-------------|:------------------------------|:------------------------------------------|
| `alias gffs` | `git flow feature start`      | Start a `feature/` branch from `develop`  |
| `alias gfff` | `git flow feature finish`     | Finish a `feature/` branch from `develop` |
| `alias gfbs` | `git flow bugfix start`       | Start a `bugfix/` branch from `develop`   |
| `alias gfbf` | `git flow bugfix finish`      | Finish a `bugfix/` branch from `develop`  |
| `alias gfhs` | `git flow hotfix start`       | Start a `hotfix/` branch from `master`    |
| `alias gfhf` | `git flow hotfix finish`      | Finish a `hotfix/` branch from `master`   |
| `gbm`        | `git branch -m`               | Rename branch                             |
| `gbD`        | `git branch -D`               | Delete local branch with force option     |
| `gbuu`       | `git branch --unset-upstream` | Unset upstream branch                     |

Note that git flow comes with its [oh-my-zsh plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow) but I don't really like that shortcuts, so I made my own.

<div class="c-article-section__img c-article-section__img--small">
  <iframe src="https://giphy.com/embed/GD5xkDtFPUpY4" width="100%" height="165" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a class="u-giphy__caption" href="https://giphy.com/gifs/love-movie-film-GD5xkDtFPUpY4">via GIPHY</a>
</div>

> 📚 More info about oh-my-zsh
> [ohmyzsh cheatsheet](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)
> [ohmyzsh git flow](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-flow)
