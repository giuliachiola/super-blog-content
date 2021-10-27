---
title: How I organize my posting process
abstract: What it means crossposting and how I use it.
quote: Life is really simple, <br>but men insist on making it complicated.
quoteAuthor: Confucius

date: 2021-10-26
crossPostDEV: 
crossPostHashnode: 
mainTag: productivity
tags:
  - 11ty
  - productivity
id: T27
---

## What it means "crossposting"

> Crossposting is the act of posting the same message to multiple information channels; forums, mailing lists, or newsgroups.
> -- <cite>Wikipedia</cite>

## What I actually do for crossposting an article

First of all, I am a total newbie about having a blog, posting articles and I have just few followers, so... surely I am not the best at doing it, but as far as a friend asked me which steps I make to post blog articles, I'd like to share how my process works! 💪🏻 😄

Here it is my process flow chart:

<img loading="lazy" src="https://res.cloudinary.com/giuliachiola/image/upload/v1635316461/super-blog/27-cross-posting/crossposting-flowchart_ei50t2.svg" alt="flow chart" width="50%" height="">

### 1. Organize ideas

I do not stare at the screen praying myself to have a brilliant idea for a new post. Surprisingly, ideas come to me doing my everyday work 🙃 When I find myself in some tricky bug or issue to resolve, I take notes about the problem, how I approached it and finally how I solved it (yep, also if it is just a workaround!).

I take notes with [Notion](https://www.notion.so/), an awesome tool a ~~collegue~~ friend recommended for taking notes, to-do lists, tables and a million other things to organize all your life.

I've always been a big fan of Google Sheets and its spreadsheets, so I created a table in Notion to keep all my posts organized.

The table is quite simple, each row is a post and has some attributes:

- action (we will see it in a moment)
- post title
- status
- some checkboxes options
- notes

![Notion posts list](https://res.cloudinary.com/giuliachiola/image/upload/v1635230196/super-blog/27-cross-posting/posts-notion_fuu6ha.png)

When I discover something that worth a blog post, I add a row in my Notion table and I write down a quick recap of what was the problem and what was the solution to solve it.

### 2. Write down the post

I love writing in plain markdown with a basic distraction-free app, so use to write my post using [Visual Studio Code](https://code.visualstudio.com/download) as markdown editor.

#### ⚡️ Bonus tip

To check the markdown final result, I use the built-in Markdown Preview:

`cmd` + `shift` + `p` -> `Markdown: Open Preview` 😎

### 3. Add the post permalink

Then I choose a `permalink` for my blog post, and add it to the front matter.

In this way,
- it doesn't matter if I will change the post title or its enclosing folder later, as far as the `permalink` is freezed and it is not based on post title or path.
- I now have a ready-to-share permalink to my blog post, though the post is not publiblished yet! I am going to use it in the next step.

Example:

```md
---
title: ...
abstract: ...
quoteAuthor: ...
date: ...

permalink: posts/add-html-classes-to-11ty-markdown-content/
...
---
```

the front matter above will create a post with this URL:

```shell
https://giuliachiola.dev/posts/add-html-classes-to-11ty-markdown-content/
```

### 5. Crosspost on DEV&#46;to and Hashnode

[DEV.to](https://dev.to/) and [Hashnode](https://hashnode.com/) are awesome free developer blogging platforms. Posting there allows to keep in touch with other developers. I learned a lot out there! 😍

Posting my articles even in these two platforms, allows me to expose further my posts, and it gives the possibility for other developers to easily comment on my articles, in order to receive feedback 🔥

#### Canonical URL

The only thing to pay attention when cross posting is to indicate in the "cloned-post" the link of the original article. I have to do it as far as Google does not like duplicated content with the same "relevance", but it allows to have a copy elsewhere if I declare which one is the original.

To do it, I have to indicate in the platform configurations which is the original post (my blog), and therefore accordingly which is the secondary one.

Both on dev.to and hashnode, is possible to indicate the "original" URL – technically called _canonical url_ adding it the full `permalink` URL I choose in step 3:

![dev.to canonical](https://res.cloudinary.com/giuliachiola/image/upload/v1635230198/super-blog/27-cross-posting/cross-devto_mmirqz.png)

![Hashnode canonical](https://res.cloudinary.com/giuliachiola/image/upload/v1635230201/super-blog/27-cross-posting/cross-hashnode_vk90ay.png)

#### DEV&#46;to and Hashnode URLs

When I publish on these two blogging platforms, my posts have a custom URL hosting there.

I copy these URLs and paste them into the front matter of my personal blog, where I created two specific properties with 11ty.

```md
---
title: ...
abstract: ...
quoteAuthor: ...
date: ...

permalink: posts/add-html-classes-to-11ty-markdown-content/
crossPostDEV: https://dev.to/giulia_chiola/add-html-classes-to-11ty-markdown-content-18ic
crossPostHashnode: https://giuliachiola.hashnode.dev/add-html-classes-to-11ty-markdown-content

...
---
```

In this way, I can use these two links at the bottom of my post to link to the crosspost articles.

![crosspost bottom post](https://res.cloudinary.com/giuliachiola/image/upload/v1635317253/super-blog/27-cross-posting/crossposting-post-bottom_pvcjui.png){.u-shadow}

{% raw %}
```html
<div class="c-article-section__bottom-links">
  {% if crossPostDEV and crossPostHashnode %}
  <p>
    Comment on
    <a href="{{ crossPostDEV }}" target="_blank" rel="noopener">DEV</a>
    or
    <a href="{{ crossPostHashnode }}" target="_blank" rel="noopener">Hashnode</a>
  </p>
  {% endif %}
</div>
```
{% endraw %}

Why I would do that? Because I really appreciate feedback from other devs, and if a developer has a _dev.to_ or _hashnode_ account, can comment my content easily there.

### 6. Publish the post on my blog

#### Store the blog content

I store my blog contents in a public [repository](https://github.com/giuliachiola/super-blog-content) on GitHub, for mainly two reasons:
1. I want to separate content from the "preview layer". Right now I am using [11ty](https://www.11ty.dev/) as Static Site Generator, and it gets my content repository as submodule, but who knows what I would like to do in the future, maybe I will change my mind about 11ty and I will use another SSR 🧐 In this way, separating contents from the preview layer, I can change the preview layer without affecting the content.
2. I want to keep the content public, so open for suggestions. When someone find out a typo or an incorrect explanation in a post, he/she can go to the bottom of the article at "Edit this page on GitHub" and open me a pull request about the suggestion changes.

#### How to update the live blog

To post content on my blog, as far as it is a GitHub submodule of another project, I have to:
- from inside the content resository, push the updated markdown
- from inside the blog repo, go to the content submodule folder and pull the updated content
- push the updated blog on `develop` branch

To do it quickly, I added an alias to my `.zshrc` config file:

```shell
alias blog-update='gp && cd ~/path/to/blog && gco develop && git submodule update --recursive --remote && gcam "content: update submodule" && gp'
```

Then I do a quick check running the project, and if everything is fine I merge `develop` into `main` branch.

Pushing the `main` branch will trigger a [Netlify](https://app.netlify.com/) build pipeline that will deploy my updated blog ✨.

![Netlify deploy](https://res.cloudinary.com/giuliachiola/image/upload/v1635230199/super-blog/27-cross-posting/netlify-deploy_ka9rdq.png)

Ok now the blog is updated live! ✨

### 7. Share on twitter

The last step is to share on my [Twitter](https://twitter.com/giulia_chiola) account my last post published.

## Final thoughts

Yep, I think this process is really exhausting 😩 but for now I haven't found a better method to get both:
- contents on my own platform
- a little bit of visibility and give the opportunity to easily send me feedback

Therefore for now I'll go with these steps! 🔥 Let me know if you found a more manageable approach.