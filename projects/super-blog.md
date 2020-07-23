---
title: 'Super blog'
articleDate: 2020-04-11
mainTag: 11ty
tags:
  - 11ty
  - nodejs
externalUrl: '/'
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

11ty supports _[Nunjucks](https://mozilla.github.io/nunjucks/)_ as template engine, and desprite the [nunjucks documentation](https://mozilla.github.io/nunjucks/templating.html) is not exaustive, I found everything I needed in forums, stackoverflow and so on. I also wrote few _TIL_ posts about what I discovered! 😏

**Nunjucks**

Unfortunately, _UIengine_ does not support Nunjucks as template engine, in fact I have had to hand-write all _EJS_ templates in Nunjucks language. I searched for a node package to automatically convert components from EJS to Nunjucks, but I didn't find one.

**Git submodules**

For the first time, I worked with _git submodules_, one for the [content repository](https://gitlab.com/giuliach/super-blog-content) and another for the [stylegudie repository](https://gitlab.com/giuliach/super-styleguide). At the beginning was quite hard to understand how to keep aligned (or voluntarily disaligned) all the pieces, but I understood how to use them over time... and now I am very happy to use this repository structure.

At the end I handled all structure and templating issues, and I really like the result!

**Netlify**

I never used [Netlify](https://www.netlify.com/) before this project, and it was... wow! 😍 I never gone into something so quick to setup and I really *love* its great documentation. I set automatic deploy on merge requests and push on `master` branch, so now on I will have a new preview version of my blog for every feature or fix I will do, and it is awesome!

## Overall score

<div class="s-giphy s-giphy--medium-d">
  <div style="width:100%;height:0;padding-bottom:79%;position:relative;"><iframe title="gif-overall-score" src="https://giphy.com/embed/m8WzRSb4xDcMx2WbkV" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/smallfootmovie-omg-crazy-m8WzRSb4xDcMx2WbkV">via GIPHY</a></p>
</div>
