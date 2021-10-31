---
title: '11ty setup'
abstract: '...'
quote: '...'
quoteAuthor: '...'

date: 1990-04-04
mainTag: 11ty
tags:
  - 11ty
---

// REVIEW:

```
npm install @11ty/eleventy --save-dev
```

```
npm install luxon --save-dev
```

```json
"scripts": {
    "dev": "rm -rf _site && npx @11ty/eleventy --serve",
    "dev:debug": "DEBUG=Eleventy* npm run dev",
    "build": "rm -rf _site && npx @11ty/eleventy"
  },
  ```

add folder
  ```
  /includes/layouts/base.njk
  ```

add `.eleventy.js`

```js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('admin')

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yy");
  });

};
```

add `index.njk`

```
---
layout: layouts/base.njk
permalink: /
---
Hello! Welcome to the Eleventy + Netlify from scratch homepage.
```
