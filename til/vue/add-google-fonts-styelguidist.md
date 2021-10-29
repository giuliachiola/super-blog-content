---
title: How to add Google Fonts in Vue Styleguidist
abstract: Styleguidist is an awesome tool to build a styleguide. In this post I'll show how to add a Google Font link in the HTML page.
quote: Words are, of course, <br class="u-ty-break-t">the most powerful drug used by mankind
quoteAuthor: Rudyard Kipling

date: 2021-01-31

permalink: posts/how-to-add-google-fonts-in-vue-styleguidist/
crossPostDEV: https://dev.to/giulia_chiola/how-to-add-google-fonts-in-vue-styleguidist-5f44
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-add-google-fonts-in-vue-styleguidist

mainTag: vuejs
tags:
  - vuejs
  - styleguidist
  - js
id: 25
---

Few days ago I worked on a [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) project and I had to use a Google Font.

**Side note**: `vue-styleguidist` is the "Vue version" of the more famous [react-styleguidist](https://github.com/styleguidist/react-styleguidist), _a component development environment with hot reloaded dev server and a living style guide_.

In a static page, I would add the font in a classic way using a `<link>` tag:

```html
<html>
  <head>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:100,400,800">
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

But hey, in Styleguidist we are writing components into the "Styleguidist box" 📦!

Styleguidist takes care of creating the fancy and functional box around our components, while we only have to write what is strictly necessary for the component (its structure, its styles, and its logic)

To add a `<head>` property to the "Styleguidist box" we have to use the `react-styleguidist` [template property](https://react-styleguidist.js.org/docs/configuration/#template) which lets us change the HTML of the Styleguidist application.

To find out `template` supported properties, I deep dive into `mini-html-webpack-template-plugin` [extended options](https://www.npmjs.com/package/@vxna/mini-html-webpack-template#extended-options). There I found that it is possible to add an `head` property with an array of `links`... awesome! 😼

| Name         | Type      | Default     | Description                             |
|--------------|-----------|-------------|-----------------------------------------|
| `head.links` | `{Array}` | `undefined` | Array of objects with key + value pairs |

So, to add Raleway Google Font in our project we have to add to the `styleguide.config.js` file a  `template` object:

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
        value: 'https://fonts.googleapis.com/css?family=Raleway:100,400,800',
      }, ],
    },
  },
}
```

that turns out in

```html
<head>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Raleway:100,400,800">
</head>
```

Now, in our components files we can use the Google Font 😏

```html
// My component.vue

<template>
  <h1>My awesome title</h1>
</template>

<script>
  export default {
    name: 'MyComponent',
  }
</script>

<style>
  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 48px;
  }
</style>
```

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/3oKIPsgVPHyPPG5p3a/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://media.giphy.com/media/3oKIPsgVPHyPPG5p3a/giphy.mp4">via GIPHY</a></p>
</div>
