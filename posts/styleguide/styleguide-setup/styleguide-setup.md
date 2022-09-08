---
title: Styleguide setup
abstract: Node packages checklist to setup a styleguide from scratch.
quote: Limitations live only in our minds. <br class="u-ty-break-t">But if we use our imaginations, <br class="u-ty-break-t">our possibilities become limitless
quoteAuthor: Jamie Paolinetti

date: 2021-01-13

permalink: posts/styleguide-setup/
crossPostDEV: https://dev.to/giulia_chiola/styleguide-setup-3efc
crossPostHashnode: https://giuliachiola.hashnode.dev/styleguide-setup

mainTag: design-system
tags:
  - design-system
  - css
  - nodejs

category: tutorials
id: 29
---

Regardless of which tool I use to build my styleguides, it helps a lot to have a checklist of packages I need for (almost) every project setup.

## Styles

- [node sass](https://github.com/sass/node-sass)

> Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

```shell
npm install node-sass --save-dev
```

- [postcss](https://github.com/postcss/postcss)

> PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

```shell
npm install postcss postcss-cli postcss-preset-env postcss-import --save-dev
```

To configure postcss, add `.postcss.config.js` in project root folder

[🐙 GitHub snippet](https://github.com/giuliachiola/super-blog-content/blob/main/tutorials/styleguide-setup/postcss.config.js)

- [stylelint](https://github.com/stylelint/stylelint)

> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

```shell
npm install stylelint stylelint-scss stylelint-order --save-dev
```

To configure stylelint, add `.stylelintrc.json` in project root folder

[🐙 GitHub snippet](https://github.com/giuliachiola/super-blog-content/blob/main/tutorials/styleguide-setup/.stylelintrc.json)

- [sass-mq](https://github.com/sass-mq/sass-mq)

> A Sass mixin that helps you compose media queries in an elegant way.

```shell
npm install sass-mq --save-dev
```

Add sass-mq configuration in styles folder `src/scss/00-settings/_sass-mq-config.scss`

[🐙 GitHub snippet](https://github.com/giuliachiola/super-blog-content/blob/main/tutorials/styleguide-setup/sassmq-config.scss)

In a static project, as a styleguide, to use _sass-mq_ in our styles, we have to import it from `node_modules` and add our configuration

```scss
// src/scss/00-settings/__settings.scss

@import 'node_modules/sass-mq/_mq.scss';
@import 'sass-mq-config';
```

In projects that use webpack, we could add sass-mq using this syntax

```scss
// With webpack (and boilerplates such as create-react-app)
@import '~sass-mq';
```

- [normalize-scss](https://github.com/JohnAlbin/normalize-scss)

> This project is the Sass version of Normalize.css, a collection of HTML element and attribute rulesets to normalize styles across all browsers.

```shell
npm install normalize-scss --save-dev
```

Import _normalize-scss_ from _node_modules_

```scss
// src/scss/02-generic/__generic.scss

@import 'node_modules/normalize-scss/sass/_normalize.scss';
```

### Styles structure

- `scss` folder contains BEMIT SASS file structure
- `css` folder contains compiled CSS output

```shell
├── src/
│   ├── scss/
│   │   ├── 00-settings/
│   │   ├── 01-tools/
│   │   ├── 02-generic/
│   │   ├── 03-elements/
│   │   ├── 04-objects/
│   │   ├── 06-components/
│   │   ├── 07-utilities/
│   │   ├── style.scss
│   ├── css/
│   │   ├── style.css
```

> 📚 More info
>
> [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

### Styles scripts

Use _package.json_ `scripts` object to list all styles commands

```json
"scripts": {
    "_____________________________Styles_____________________________": "",
    "stylelint": "stylelint 'src/scss/**/*.scss' || echo \"Stylelint failed for some file(s).\"",
    "cleanup:dev": "rimraf dist src/css/*.css",
    "scss:to:css:dev": "node-sass --output-style expanded src/scss/ -o src/css/",
    "css:to:postcss:dev": "postcss src/css --dir dist/css",
    "styles:dev": "npm run stylelint && npm run scss:to:css:dev && npm run css:to:postcss:dev",
  },
```

## SVG

- [svgo](https://github.com/svg/svgo)

> Node.js tool for optimizing SVG files

```shell
npm install svgo --save-dev
```

Create two folders, one for original SVG files `src/svg` and a second one optimized SVGs `src/svgo`

```shell
├── src/
│   ├── svg/
│   │   git.svg
│   │   nodejs.svg
│   │   vuejs.svg
│   ├── svgo/
│   │   git.svg (optimized)
│   │   nodejs.svg (optimized)
│   │   vuejs.svg (optimized)
```

Add SVGO script configuration

[🐙 GitHub snippet](https://github.com/giuliachiola/super-blog-content/blob/main/tutorials/styleguide-setup/svgo-config.js)

### SVG scripts

Use _package.json_ `scripts` object to list all SVG manipulation commands

```json
"scripts": {
  "_____________________________SVG________________________________________________": "",
  "clean:svgo": "rimraf src/icons/svgo/*",
  "svg:optimize": "npm run clean:svgo && node scripts/svgo.js",
}
```

Ok now I am ready to develop my components and build a styleguide! 💪🏻
