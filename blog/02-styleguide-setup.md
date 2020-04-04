---
title: Styleguide setup
abstract: Node packages checklist to setup a styleguide from scratch.
quote: Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.
quoteAuthor: Jamie Paolinetti
img: 'https://source.unsplash.com/bUtzPrCMj8Q'
imgAuthorName: '@kalvisuals'
imgAuthorProfile: 'https://unsplash.com/@kalvisuals'
date: 2020-03-29
mainTag: design-system
tags:
  - design-system
  - css
  - nodejs
---

Regardless of the tool we use to build our styleguide, helps a lot to have a checklist of packages we need for (almost) every project setup.

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

<script src="https://gist.github.com/giuliachiola/146d8866adf5d67dbda53d6e8615840e.js"></script>

- [stylelint](https://github.com/stylelint/stylelint)
> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

```shell
npm install stylelint stylelint-scss stylelint-order --save-dev
```

To configure stylelint, add `.stylelintrc.json` in project root folder

<script src="https://gist.github.com/giuliachiola/c93494069521ea5f20f5b76936efd710.js"></script>

- [sass-mq](https://github.com/sass-mq/sass-mq)
> A Sass mixin that helps you compose media queries in an elegant way.

```shell
npm install sass-mq --save-dev
```

Add sass-mq configuration in styles folder `src/scss/00-settings/_sass-mq-config.scss`

<script src="https://gist.github.com/giuliachiola/96e45250546172f5257fbba72c65972d.js"></script>

In a static project, as a styleguide, to use _sass-mq_ in our styles, we need to import it from _node_modules_ and add our configuration

```scss
// src/scss/00-settings/__settings.scss

@import 'node_modules/sass-mq/_mq.scss';
@import 'sass-mq-config';
```

In projects that used webpack, we could add sass-mq using this syntax

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

Create two folders, one for original SVG files `src/svg` and another for optimized SVGs `src/svgo`

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

<script src="https://gist.github.com/giuliachiola/74c01c019e5e7773ac726ae9c637dc67.js"></script>

### SVG scripts

Use _package.json_ `scripts` object to list all SVG manipulation commands

```json
"scripts": {
  "_____________________________SVG________________________________________________": "",
  "clean:svgo": "rimraf src/icons/svgo/*",
  "svg:optimize": "npm run clean:svgo && node scripts/svgo.js",
}
```
