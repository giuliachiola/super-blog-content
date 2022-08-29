# Super blog content

My [tech blog](https://github.com/giuliachiola/super-blog-11ty) is built using 11ty and its content is all markdown plain files stored in this repo.

Note that this repo is a **git submodule** of the [blog repo](https://github.com/giuliachiola/super-blog-11ty).

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
alias blog-update='cp -a ~/Sites/super-blog-11ty/content/. ~/Sites/super-blog-content/ && cd ~/Sites/super-blog-content/ && gcam "content: upate content from main blog repo" && gp && cd ~/Sites/super-blog-11ty/'
```

This alias will:

- go to the blog local folder `content/`
- copy all content files to the local repo `super-blog-content/`
- commit and push to `super-blog-content` repo