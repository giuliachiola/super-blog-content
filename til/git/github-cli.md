---
title: How to speed up development with GitHub CLI
abstract: GitHub comes with an easy to use CLI, with awesome features in it.
quote: Man cannot discover new oceans unless he has the courage to lose sight of the shore.
quoteAuthor: Andre Gide

date: 2022-09-01

permalink: posts/github-cli/
crossPostDEV: https://dev.to/giulia_chiola/how-to-speed-up-development-with-github-cli-3m61
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-speed-up-development-with-github-cli

mainTag: git
tags:
  - github
  - shell
id: 31
---

## Wait, what?!

I was today years old when I found out that GitHub has a command line interface 🤯.

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/zMpHQobxFfCE0/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://media.giphy.com/media/zMpHQobxFfCE0/giphy.gif">via GIPHY</a></p>
</div>

In the [official docs](https://cli.github.com/) the instructions to install and use it are quite clear to follow.

## Installation

I use _brew_ to install GitHub CLI, so

```shell
brew install gh
```

did the magic in less then a minute.

## Authorization

You have to authorize this application in order to use your GitHub account from the CLI:

```shell
gh auth login
```

Answer few questions about CLI configuration, here's mines:

```shell
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations? SSH
? Upload your SSH public key to your GitHub account? /Users/giulia/.ssh/id_ed25519.pub
? Title for your SSH key: GitHub CLI
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: XXXX-XXXX
Press Enter to open github.com in your browser...
```

In your browser will appear this screen to confirm the authorization

![authorize-github-cli](https://res.cloudinary.com/giuliachiola/image/upload/v1662011978/super-blog/031-github-cli/authorize-github-cli_wzm6r5.png)

and you have to add your `one-time code: XXXX-XXXX` the prompt just gived to you

![device-activation](https://res.cloudinary.com/giuliachiola/image/upload/v1662011978/super-blog/031-github-cli/device-activation_zsdjcw.png)

Just few confirmation from the shell and we are almost done:

```shell
Press Enter to open github.com in your browser...
✓ Authentication complete.
- gh config set -h github.com git_protocol ssh
✓ Configured git protocol
```

![congratulations](https://res.cloudinary.com/giuliachiola/image/upload/v1662011978/super-blog/031-github-cli/congratulations_a4rz5a.png)

Ok, awesome! ✨

## Let's run some commands!

To see all CLI configurations and options, just type

```shell
gh
```

that returns a list of useful commands divided into subgroups

```shell
CORE COMMANDS
  auth:        Authenticate gh and git with GitHub
  browse:      Open the repository in the browser
  codespace:   Connect to and manage codespaces
  gist:        Manage gists
  issue:       Manage issues
  pr:          Manage pull requests
  release:     Manage releases
  repo:        Manage repositories
```

As you can see above, you can manage **lot of things** from command line 😈 Below I listed my favourite ones.

### Create a new repo

To create a new GitHub repository, run

```shell
gh repo create test-repository --private

✓ Created repository giuliachiola/test-repository on GitHub
```

![test-repository-github](https://res.cloudinary.com/giuliachiola/image/upload/v1662012410/super-blog/031-github-cli/test-repository-github_hshmkm.png)


Note: you have to specify if you want the repo private or public.

### GitHub repo list

```shell
gh repo list
```

This is useful when you need to check on the fly a repo slug, url, or if it is private or not

```shell
Showing 30 of 47 repositories in @giuliachiola

giuliachiola/super-blog-11ty                       Blog built using 11ty static site generator, based on super-styleguide               public   2d
giuliachiola/super-blog-content                    Blog markdown content where documentation rules 📚                                    public   2d
giuliachiola/giuliachiola                                                                                                                public   9d
giuliachiola/eleventy-styleguide                   Custom pattern library tool using 11ty static site generator.                         public   9d
giuliachiola/super-notes                           Personal tech notes, not always well organized 😇                                     public   9d
giuliachiola/super-styleguide                      Personal blog styleguide built using UIengine as presentation layer                   public   Mar  5, 2022
giuliachiola/react-ts-ecommerce                    📒 Step by step from tutorial "React shopping cart with TypeScript | React Ecomme...  public   Mar  5, 2022
giuliachiola/dotfiles                              🛠.files - for fast MacBook setup                                                     public   Mar  5, 2022
giuliachiola/react-movies                          📒 Step by step from tutorial "React JS Course for Beginners 2021 Tutorial - free...  public   Oct  7, 2021
giuliachiola/react-ts-quiz-app                     📒 Step by step from tutorial "React / Typescript Tutorial - Build a Quiz App - W...  public   Oct  1, 2021
giuliachiola/react-typescript-herrington           📒 Step by step from tutorial "Typescript for React Components From Beginners to ...  public   Oct  1, 2021
...
```

### Change repo visibility

Change repo visibility is quite annoying from the browser, as you have to sift through lots of tabs and panels on the UI. Change visibility from the CLI instead, is nearly instantaneous:

```shell
gh repo edit <repo-name> --visibility <visibility-string>
```

For instance:

```shell
gh repo edit giuliachiola/super-blog-11ty --visibility private

✓ Edited repository giuliachiola/super-blog-11ty
```

### Sync repo

To pull everything in one go, you can also sync all your repo branches and config:

```shell
gh repo sync

✓ Synced the "main" branch from giuliachiola/super-blog-11ty to local repository
```

### Create new gist

[Gist](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) are a sort of "snippet" you can store on your GitHub account. They are quite useful to save one-shot configurations, and you can also save others gists in your favourites!

```shell
gh create gist
```

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/ndSat6hAmqXnO/giphy-loop.mp4" type="video/mp4">
  </video>
  <p><a href="https://media0.giphy.com/media/ndSat6hAmqXnO/giphy-loop.mp4?cid=dda24d5093e1b63df6c1b63cb6c71ec256c24d915cb35226\u0026rid=giphy-loop.mp4\u0026ct=g">via GIPHY</a></p>
</div>

> 📚 More info
>
> [GitHub CLI Manual](https://cli.github.com/manual/)

