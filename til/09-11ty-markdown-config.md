---
title: Add HTML classes to 11ty markdown content
abstract: Add HTML classes to style your markdown content in 11ty, using markdown-it-attrs plugin.
quote: There are so many beautiful reasons to be happy today.
quoteAuthor: Anonimous
img: 'https://source.unsplash.com/Oh029rfI2Mg'
imgAuthorName: '@the_phope'
imgAuthorProfile: 'https://unsplash.com/@the_phope'
date: 2020-01-23
mainTag: static-site-generator
tags:
  - 11ty
  - static-site-generator
---

11ty comes with some useful plugins for markdown manipulation, one of these is `markdown-it-attrs`.

This plugin should be used combined with its big brother the markdown parser [markdown-it](https://github.com/markdown-it/markdown-it), which is already added during 11ty basic installation.

[markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) uses `markdown-it` and add the possibility to add attributes to HTML nodes generated from markdown.

To use it, add this plugin to the `.eleventy` configuration file:

- require `markdown-it`

```javascript
const markdownIt = require("markdown-it")
```

- require `markdown-it-attrs`

```javascript
const markdownItAttrs = require('markdown-it-attrs')
```

- define basic configuration options
```javascript
const options = {
  html: true,
  breaks: true,
  linkify: true
}
```

- set `markdown-it-attrs` as `markdown-it` usage options
```javascript
const markdownLib = markdownIt(options).use(markdownItAttrs)
```

- set as eleventy configuration the new markdown configuration
```javascript
eleventyConfig.setLibrary("md", markdownLib)
```

To sum up:

```javascript
// .eleventy.js

const markdownIt = require("markdown-it")
const markdownItAttrs = require('markdown-it-attrs')
const options = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt(options).use(markdownItAttrs)
eleventyConfig.setLibrary("md", markdownLib)
```

### Example of usage

```md
# This is a title {.c-article-section__title}
This is a paragraph with data-state {data-state=important}

Another text with attributes {.c-article-section__disclaimer #articleId attr=value attr2="spaced value"}
```

will output

```html
<h1 class="c-article-section__title">This is a title</h1>
<p data-state=important>This is a paragraph with data-state</p>
<p class="c-article-section__disclaimer" id="articleId" attr=value attr2="spaced value">Another text with attributes</p>
```

Side note: unfortunately, I did not find a way to add attributes to markdown _tables_ and _blockquote_ 😢

> 📚 More info about 11ty markdown config
>
> [11ty Markdown Attributes](https://dev.to/iarehilton/11ty-markdown-attributes-2dl3)
