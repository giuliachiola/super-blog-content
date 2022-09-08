---
title: How to set up GitHub/GitLab issue and PR templates
abstract: GitHub and GitLab give the possibility to set default issue and PR templates.
quote: Positive thinking will let you do everything better <br class="u-ty-break-t">than negative thinking will
quoteAuthor: Zig Ziglar

date: 2021-01-20

permalink: posts/how-to-set-up-githubgitlab-issue-and-pr-templates/
crossPostDEV: https://dev.to/giulia_chiola/how-to-set-up-github-gitlab-issue-and-pr-templates-1499
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-set-up-githubgitlab-issue-and-pr-templates

mainTag: git
tags:
  - git
id: 8
---

## Templates for both GitLab and GitHub

Use the content that works best for you, here there are mine.

| Template                     | Snippet                                                                                                                            |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| issue                        | [🐙 GitHub snippet](https://github.com/giuliachiola/super-blog-content/blob/main/til/git/issue-and-pr-templates/_snippet-template-issue.md)      |
| pull request / merge request | [🐙 GitHub snippet](https://github.com/giuliachiola/super-blog-content/blob/main/til/git/issue-and-pr-templates/_snippet-template-mr.md) |
| release                      | [🐙 GitHub snippet](https://github.com/giuliachiola/super-blog-content/blob/main/til/git/issue-and-pr-templates/_snippet-template-release.md)  |

## Basic
### GitHub

- Create `.github` folder in project root.
- Add templates files following this folder structure

```shell
├── .gitlab/
│   ├── ISSUE_TEMPLATE/
│   │   ├── issue-templates.md
│   ├── PULL_REQUEST_TEMPLATE/
│   │   ├── merge-request-templates.md
│   ├── RELEASE_TEMPLATE/
│   │   ├── release-templates.md
```

- Commit and push on our default branch.

- Check our project on GitHub. From now on, when we will open an issue, it will be pre-compiled with the markdown template we added.

<img class="u-shadow" loading="lazy" src="https://res.cloudinary.com/giuliachiola/image/upload/v1586637232/super-blog/008-issue-and-pr-templates/bug-report-01_fcauoy.jpg" alt="issue template 01" width="1440" height="341">

<img class="u-shadow" loading="lazy" src="https://res.cloudinary.com/giuliachiola/image/upload/v1586637233/super-blog/008-issue-and-pr-templates/bug-report-02_ywp8su.jpg" alt="issue template 02" width="1168" height="744">

### GitLab

In GitLab is pretty much the same, but here we have to create a folder named `.gitlab`, and add this folders structure:

```shell
├── .gitlab/
│   ├── issue_templates/
│   │   ├── issue-templates.md
│   ├── merge_request_templates/
│   │   ├── merge-request-templates.md
│   ├── release_templates/
│   │   ├── release-templates.md
```

## Advanced

If we need different templates to choose, we have to add folders instead of files, and add many files as we need.

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

> 📚 More info
>
> - [Configuring templates for GitHub](https://help.github.com/en/github/building-a-strong-community/configuring-issue-templates-for-your-repository)
> - [Configuring templates for GitLab](https://docs.gitlab.com/ee/user/project/description_templates.html)
