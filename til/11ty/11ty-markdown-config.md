---
title: Add HTML classes to 11ty markdown content
abstract: Add HTML classes to style your markdown content in 11ty, using markdown-it-attrs plugin.
quote: There are so many beautiful reasons<br class="u-ty-break-t"> to be happy today
quoteAuthor: Anonimous

date: 2021-01-22

permalink: posts/add-html-classes-to-11ty-markdown-content/
crossPostDEV: https://dev.to/giulia_chiola/add-html-classes-to-11ty-markdown-content-18ic
crossPostHashnode: https://giuliachiola.hashnode.dev/add-html-classes-to-11ty-markdown-content

mainTag: static-site-generator
tags:
  - 11ty
  - static-site-generator
id: 1
---

[11ty](https://www.11ty.dev/docs/) comes with some useful plugins for markdown manipulation, one of these is [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs).

This plugin should be used combined with its big brother, the markdown parser [markdown-it](https://github.com/markdown-it/markdown-it), which is already added in 11ty basic installation.

**markdown-it-attrs** uses `markdown-it` and adds the possibility to add attributes to HTML nodes generated from markdown.

To use it, add this plugin to the `.eleventy` configuration file:

- require `markdown-it`

```javascript
const markdownIt = require('markdown-it')
```

- require `markdown-it-attrs`

```javascript
const markdownItAttrs = require('markdown-it-attrs')
```

- define basic `markdown-it` configuration options

```javascript
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
```

- set `markdown-it-attrs` as `markdown-it` usage options

```javascript
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
```

- set as eleventy configuration the new markdown configuration

```javascript
eleventyConfig.setLibrary('md', markdownLib)
```

To sum up:

```javascript
// .eleventy.js

const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
eleventyConfig.setLibrary('md', markdownLib)
```

### Example of usage

```md
# This is a title {.c-article-section__title}
This is a paragraph with data-state {data-state=important}

Another text with attributes {.c-article-section__disclaimer #articleId attr=value attr2="spaced value"}

![Alt text](image.jpg){.u-shadow}

[Link in a new tab](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a){target="_blank" rel="noopener"}
```

will output

```html
<h1 class="c-article-section__title">This is a title</h1>
<p data-state=important>This is a paragraph with data-state</p>
<p class="c-article-section__disclaimer" id="articleId" attr=value attr2="spaced value">Another text with attributes</p>

<img class="u-shadow" src="image.jpg" alt="Alt text">
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank" rel="noopener">Link in a new tab</a>
```

> 🧨 **!important**
>
> Note the last line where I added the `target="_blank"` attribute to the link to open it in a new browser tab. It's ok open a link in a new tab, but for security reasons it has to have also the `rel="noopener"` attribute.

Side note: unfortunately, I did not find a way to add attributes to markdown _tables_ and _blockquotes_ 😢

> 📚 More info
>
> - [11ty Markdown Attributes](https://dev.to/iarehilton/11ty-markdown-attributes-2dl3)
> - [When to use target="_blank” by Chris Coyer](https://css-tricks.com/use-target_blank/)
> - [rel="noopener" - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener)
