---
title: How to add generic styles in Vue Styleguidist
abstract: Vue Styleguidist is an awesome tool I used to build styleguides with Vue components. Here it is a way to add generic styles in all app components.
quote: A quick fix for a long-standing problem <br class="u-ty-break-t">only works for the short term.
quoteAuthor: Dr. Jacinta Mpalyenkana

date: 2021-02-05

permalink: posts/how-to-add-generic-styles-in-vue-styleguidist/
crossPostDEV: https://dev.to/giulia_chiola/how-to-add-generic-styles-in-vue-styleguidist-5d9d
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-add-generic-styles-in-vue-styleguidist

mainTag: vuejs
tags:
  - vuejs
  - styleguidist
  - js
id: 24
---

At work, recently we worked on a styleguide project using [vue Styleguidist](https://github.com/vue-Styleguidist/vue-Styleguidist), the Vue little brother of [react-styleguidist](https://github.com/Styleguidist/react-Styleguidist), and we would like to organize components styles in this way:

- component specific styles would be inside the `[ComponentName].vue` file
- while all generic styles (colors, typography, and so on) would be inside a generic `styles.scss` file.

## The first (bad) idea

If we hadn't been in a Styleguidist app, but in a "normal" Vue app instead, we could have add a sass `@import` with all our generic styles at the highiest component, the `App.vue`:

```html
// App.vue

<template>
  <div id="app">
    ...
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
// generic styles
@import 'styles/styles.scss'
</style>
```

In this way, all components will have inherited our generic styles.

**But** in a Styleguidist project we have not such an high-level Vue component 😩

If we would want to import a generic file in that way, we would have to add it into **all** our components, like this:

```html
// components/MyComponent.vue

<template>
  ...
</template>

<script>
export default {
  name: 'MyComponent',
}
</script>

<style lang="scss">
// generic styles
@import 'styles/styles.scss'

// my components custom styles
.c-my-component {
  background: red;
}

...
</style>
```

Not such a great idea! 🧐

## The second (I think good?) idea

Probably there is a better way to do it, but for the moment we'll go with this! 😅

Adding a `vue.conifg.js` file to the Styleguidist project, we can tell to Styleguidist `sass-loader` which style content it has to prepend _before_ the actual component `<style>` content. This can be achieved using `sass-loader` [`additionalData`](https://webpack.js.org/loaders/sass-loader/#additionaldata) option

```js
// vue.config.js

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "assets/styles/styles.scss";
        `,
      },
    },
  },
}
```

> 🧨 **!important**
>
> In these examples I have assumed that we are using SASS (.scss) files and not simple CSS files.
> The `sass-loader` node package I mentioned before is already installed in our project because we wrote styles in SASS using the `<style lang="scss">` syntax.

### ⚡️ Bonus tip

Since we have just added the `vue.config.js` file, we also added my [`postcss`](https://github.com/postcss/postcss) configuration there:

```js
const postcssNormalize = require('postcss-normalize')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "assets/styles/styles.scss";
        `,
      },
      postcss: {
        plugins: () => [
          postcssPresetEnv({
            features: {
              'logical-properties-and-values': {
                dir: 'ltr',
              },
            },
          }),
          postcssNormalize(),
        ],
      },
    },
  },
}
```

Et voilà! 🇫🇷

With this configuration:
- component specific styles are inside the `[ComponentName].vue` file
- while all generic styles are inside a generic `styles.scss` file

Please let me know if you found a better way to import general styles in Vue Styleguidist components! 😇
