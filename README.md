# Super blog content

My [tech blog](https://github.com/giuliachiola/super-blog-11ty) is built using 11ty and its content is all markdown plain files stored in this repo.

Note that this repo is a **git submodule** of the [blog repo](https://github.com/giuliachiola/super-blog-11ty).

<!--
| \                | \                                                                                                                                                                      |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pipeline         | [![Netlify Status](https://api.netlify.com/api/v1/badges/418bc946-0474-46c4-9bc3-48031743a7ef/deploy-status)](https://app.netlify.com/sites/blog-giuliachiola/deploys) |
| Deploy preview   | deploylink                                                                                                                                                             |
| Project typology | Personal/Work/Step by step from tutorial                                                                                                                               |

![project preview](docs/project-preview.png)
-->

## 🔥 Tech stack

| Purpose       | Technology |
|:--------------|:-----------|
| Documentation | Markdown   |

## 🌿 Branches

| Branch name | Use                                       |
|:------------|:------------------------------------------|
| `main`      | production (also used by super-blog-11ty) |


## How to update content in `super-blog-content` repository

Run the alias inside this `super-blog-11ty` folder from the `main` branch:

```shell
~/Sites/super-blog-11ty/super-blog-content > main > blog-update
```

in `.zshrc` you should have this line:

```sh
alias blog-update='cp -a ~/Sites/super-blog-11ty/content/. ~/Sites/super-blog-content/ && cd ~/Sites/super-blog-content/ && gcam "content: upate content from main blog repo" && gp && cd ~/Sites/super-blog-11ty/content/'
```

<!-- This alias will:

- push last commits
- go to the blog local folder
- checkout to the develop branch
- update submodules (this one included)
- create a commit with a message
- push the commit with the updated submodules -->