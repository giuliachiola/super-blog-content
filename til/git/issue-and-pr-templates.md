---
title: How to set GitHub issue and PR template
abstract: GitHub gives the possibility to set default issue and PR templates.
quote: Positive thinking will let you do everything better than negative thinking will.
quoteAuthor: Zig Ziglar

articleDate: 2020-04-11
mainTag: git
tags:
  - git
---

## GitHub

Create `.github` folder in project root.

**Basic**

- Add templates files. Use the content that works best for you, here there are my templates.

| Filename                   | Content                                                                              |
|----------------------------|--------------------------------------------------------------------------------------|
| `ISSUE_TEMPLATE.md`        | [GitHub gist](https://gist.github.com/giuliachiola/1f3f3274e3187b3866c9a042cf3cf8fb) |
| `PULL_REQUEST_TEMPLATE.md` | [GitHub gist](https://gist.github.com/giuliachiola/95b303c820c3253e4a3239f28ed347ad) |
| `RELEASE_TEMPLATE.md`      | [GitHub gist](https://gist.github.com/giuliachiola/96d84c5313bf66ea1034856092624c17) |

- Commit and push on `develop` this files.

- Check project on GitHub. From now on, when you will open an issue, it will be pre-compiled like with the markdown template you added.

![issue template 01](https://res.cloudinary.com/giuliachiola/image/upload/v1586637232/super-blog/til/14-issue-and-pr-templates/til-14-bug-report-01_fcauoy.jpg){.c-article-section__img--shadow}

![issue template 02](https://res.cloudinary.com/giuliachiola/image/upload/v1586637233/super-blog/til/14-issue-and-pr-templates/til-14-bug-report-02_ywp8su.jpg){.c-article-section__img--shadow}


**Advanced**

If you need different templates to choose, add folders instead of files, and add many files as you need.

```shell
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── bug-report.md
│   │   ├── feature.md
│   │   ├── nice-to-have.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── RELEASE_TEMPLATE
│   │   ├── default.md
│   │   ├── hotfix.md
```


> 📚 More info about issue and PR templates
>
> [Configuring issue templates for your repository](https://help.github.com/en/github/building-a-strong-community/configuring-issue-templates-for-your-repository)
