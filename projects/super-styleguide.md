---
title: Super styleguide
quote: A good plan today is better <br class="u-ty-break-t">than a perfect plan tomorrow
quoteAuthor: George S. Patton

date: 2020-12-20
permalink: projects/super-styleguide/

mainTag: design-system
tags:
  - design-system
  - uiengine
  - nodejs
externalUrl: https://styleguide-giuliachiola.netlify.app
id: P2
---

This project is the little design system I used to build this blog.
The DS has few components and less variants as possible, because I developed just what I needed to build a simple blog like this, KISS! (a.k.a. Keep It Simple Stupid!) 😇

| Use                | Tech stack                                                                |
|:-------------------|:--------------------------------------------------------------------------|
| Presentation Layer | UIengine                                                                  |
| Template engine    | EJS                                                                       |
| Content            | Javascript                                                                |
| Documentation      | Markdown                                                                  |
| Repository         | Open source on [GitHub](https://github.com/giuliachiola/super-styleguide) |

## Project review, what I learned or improved

**Design**

I designed the pages on my own and the result is quite banal and impersonal. I reevaluated a lot designers job!

**UIengine**

I used [UIengine](https://github.com/dennisreimann/uiengine) before in a _very big_ project, with lots of components and variants, and I loved it. Here — in this little project — I loved it even more!! 😍 UIengine is very fast and easy to use, well done [Dennis](https://github.com/dennisreimann)! Bonus point: under the hood, the core is completely written in JS and the framework used is VueJS 🙌🏻 The only flaw I saw is that UIengine unfortunately does not support _Twig_ or _Nunjucks_ template engines, which I think are the more versatile template engines to use.

**EJS**

This was the first (and probably the last!) time I used _EJS_ as template engine. It was confortable to use JavaScript functions into the template, but I hate its terrible syntax with `<%=>` delimiters and for loops using functions. 🤢

All things considered I liked build this mini design system!

## Overall score

<div class="s-giphy s-giphy--medium-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/62PP2yEIAZF6g/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/swag-80s-sunglasses-62PP2yEIAZF6g">via GIPHY</a></p>
</div>
