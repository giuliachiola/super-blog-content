---
title: Add comments in JSON file
abstract: A trick to add "comments" to create beauty and tidy JSON files.
quote: I'm not upset that you lied to me, <br class="u-ty-break-t">I'm upset that from now on I can't believe you.
quoteAuthor: Friedrich Nietzsche

date: 2021-01-19

permalink: posts/add-comments-in-json-file/
crossPostDEV: https://dev.to/giulia_chiola/add-comments-in-json-file-23hd
crossPostHashnode: https://giuliachiola.hashnode.dev/add-comments-in-json-file

mainTag: nodejs
tags:
  - json
  - nodejs
id: 13
---

Spoiler: I lied.

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/rigB6iCSm8F68/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/bill-paxton-rigB6iCSm8F68">via GIPHY</a></p>
</div>

As you know, you cannot and will never can add comments in JSON file **but** you can add something that *seems* a comment 😈:

```json
"_____________________________CSS_____________________________": "",
```

Using this `key:value` pair separator you can tidy a long and complex JSON, for example _"scripts"_ object in `package.json`

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

> 📚 More info
>
> [JavaScript Object Notation (JSON) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
