---
title: 'Super blog'
date: 2020-04-11
mainTag: 11ty
tags:
  - 11ty
  - nodejs
# externalUrl: '/'
id: P1
---

This blog is built using [11ty](https://github.com/11ty/eleventy) static site generator.

| Use             | Tech stack                 |
|:----------------|:---------------------------|
| Template engine | Nunjucks                   |
| Build tool      | 11ty                       |
| Content         | Markdown                   |
| Repository      | Open source on [GitLab](https://gitlab.com/giuliach/super-blog-11ty) |

## Project review, what I learned or improved

**11ty**

This was the first time I used _[11ty](https://www.11ty.io/)_ as static site generator and it was _amazing_! ✨

11ty supports _[Nunjucks](https://mozilla.github.io/nunjucks/)_ as template engine, and desprite the [nunjucks documentation](https://mozilla.github.io/nunjucks/templating.html) is not exaustive, I found everything I needed in forums, stackoverflow and so on. I also wrote [some posts]({{ global.siteUrl }}/tags/nunjucks/) about what I discovered! 😏

Here is a list of really useful 11ty plugins I used in this blog:

- [eleventy-navigation](https://github.com/11ty/eleventy-navigation): easily builds navigation between markdown pages
- [eleventy-plugin-syntaxhighlight](https://github.com/11ty/eleventy-plugin-syntaxhighlight): adds syntax highlighted code in markdown pages (it uses PrismJS)
- [eleventy-plugin-nesting-toc](https://github.com/JordanShurmer/eleventy-plugin-toc): adds table of contents at the top of each article
- [eleventy-plugin-reading-time](https://github.com/johanbrook/eleventy-plugin-reading-time): adds reading time calculated on article length
- [eleventy-plugin-social-images](https://github.com/5t3ph/eleventy-plugin-social-images): creates social images for all posts getting post titles and using a custom template (it uses Puppeteer)
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor): adds anchor on markdown headings, and also add links to them
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs): adds classes and ids to markdown content, to improve layout consistency with other components in page
- [luxon](https://github.com/moment/luxon): formats dates in human readable format

**Nunjucks**

Unfortunately, _UIengine_ (the framework I used to build my styleguide, read more about it in [projects]({{ global.siteUrl }}/projects/ -> Super Styleguide)) does not support Nunjucks as template engine, in fact I had to copy by hand all _EJS_ templates in _Nunjucks_ language. I searched for a node package to automatically convert components from EJS to Nunjucks, but I didn't find any.

**Git submodules**

For the first time, I worked with _git submodules_: one for the [content repository](https://gitlab.com/giuliach/super-blog-content) and another for the [stylegudie repository](https://gitlab.com/giuliach/super-styleguide). At the beginning was quite hard to understand how to keep aligned (or voluntarily disaligned) all the pieces, but I understood how to use them over time... and now I am satisfied to use this repository structure.

**Netlify**

I never used [Netlify](https://www.netlify.com/) before, and it was... wow! 😍 I never gone into something so quick to setup and I really *love* its great documentation. I set automatic deploy on merge requests and push on `master` branch, so now on I will have a new preview version of my blog for every feature or fix I will do, and it is stunning!

### Next up 💪🏻

As they say (or at least, as _I_ say) _"A website has no end."_. There are lot of features (and some tricky bugs 🐛) I'd like to update in this blog as soon as I understand _how_ to do them!

## Overall score

<div class="s-giphy s-giphy--medium-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/m8WzRSb4xDcMx2WbkV/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/smallfootmovie-omg-crazy-m8WzRSb4xDcMx2WbkV">via GIPHY</a></p>
</div>
