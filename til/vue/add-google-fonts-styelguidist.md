---
title: How to add Google Fonts in Vue Styleguidist
abstract: Styleguidist is an awesome tool to build a styleguide. In this post I'll show how to add a Google Font link in the HTML page.
quote: Words are, of course, <br class="u-ty-break-t">the most powerful drug used by mankind
quoteAuthor: Rudyard Kipling
date: 2021-01-23

mainTag: vuejs
tags:
  - vuejs
  - styleguidist
  - js
id: T24

eleventyExcludeFromCollections: true
---

// REVIEW:

Few days ago I worked on a [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) project and I had to use a Google Font.

> **Side note**
> `vue-styleguidist` is the "Vue version" of the more famous [react-styleguidist](https://github.com/styleguidist/react-styleguidist), (cit.) a component development environment with hot reloaded dev server and a living style guide.

In a static page, I would add the font in a classic way using a `<link>` tag:

```html
<html>
  <head>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900">
    <style>
      h1 {
        font-family: 'Raleway', sans-serif;
        font-size: 48px;
      }
    </style>
  </head>
  <body>
    <h1>Whoa! I'm in Raleway 📝</h1>
  </body>
</html>
```

But hey, in styleguidist we are writing components into the "styleguidist box" 📦!

Styleguidist takes care of creating the fancy and functional box around our components, while we only have to write what is strictly necessary for the component (its structure, its styles, and its functioning)

To add a `<head>` property to the "styleguidist box" we have to use the `react-styleguidist` [template property](https://react-styleguidist.js.org/docs/configuration/#template) which lets we change HTML for the style guide app.

To find out the `template` supported properties, I digged in to the linked `mini-html-webpack-template-plugin` [extended options](https://www.npmjs.com/package/@vxna/mini-html-webpack-template#extended-options). We can add an `head` property with an array of `links`... awesome! 😼

| Name       | Type    | Default   | Description                             |
|------------|---------|-----------|-----------------------------------------|
| head.links | {Array} | undefined | Array of objects with key + value pairs |

So, to add Raleway Google Font in our project we have to add to the `styleguide.config.js` file a  `template` object like this:

```js
// styleguide.config.js

module.exports = {
  title: 'My awesome styleguide',
  components: 'components/**/[A-Z]*.vue',
  ...
  template: {
    head: {
      links: [{
        key: 'stylesheet',
        value: 'https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900',
      }, ],
    },
  },
}
```

that turns out in

```html
<head>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900">
</head>
```
