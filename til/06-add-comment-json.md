---
title: Add comments in JSON file
abstract: A trick to add "comments" to create beauty and tidy JSON files.
quote: We may encounter many defeats, but we must not be defeated.
quoteAuthor: Maya Angelou
img: 'https://source.unsplash.com/xgAcJZRk9_8'
imgAuthorName: '@scottwebb'
imgAuthorProfile: 'https://unsplash.com/@scottwebb'
date: 2020-03-23
mainTag: nodejs
tags:
  - json
  - nodejs
---

Spoiler: I lied.

<div class="c-article-section__img c-article-section__img--small">
  <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/10wuTDLxgXIuuQ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><a class="u-giphy__caption" href="https://giphy.com/embed/10wuTDLxgXIuuQ">via GIPHY</a>
</div>

As you know, you cannot and will never can add comments in JSON file **but** you can add something that *seems* a comment 😈:

```json
"_____________________________CSS_____________________________": "",
```

Using this key:value pair separator you can tidy a long and complex JSON as _scripts_ in `package.json`

```json
{
  "name": "super-styleguide",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "_____________________________CSS_____________________________": "",
    "stylelint": "stylelint 'src/scss/**/*.scss' || echo \"Stylelint failed for some file(s).\"",
    "scss-to-css-dev": "node-sass --output-style expanded src/scss/styles/develop -o src/css/",
    "css-to-postcss-dev": "postcss src/css --dir dist/css",
    "styles-dev": "npm run stylelint && npm run scss-to-css-dev && npm run css-to-postcss-dev",
    "_____________________________SVG_____________________________": "",
    "clean-svgo": "rimraf src/icons/svgo/*",
    "svg-optimize": "npm run clean-svgo && node scripts/svgo.js",
    "_____________________________Webpack bundle__________________": "",
    "bundle": "webpack --env.production",
    "bundle:uiengine:chunk": " cross-env NODE_ENV=production webpack --env.production --config webpack.uiengine.config.js",
    ...
    ...
  },
```

> 📚 More info about JSON
> [JavaScript Object Notation (JSON) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
