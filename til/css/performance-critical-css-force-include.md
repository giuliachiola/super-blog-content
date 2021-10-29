---
title: Force include classes in critical CSS
abstract: Using critical CSS library by Addy Osmani, force the inclusion of HTML selectors.
quote: We are less <br class="u-ty-break-t">when we don't include everyone
quoteAuthor: Stuart Milk

date: 2021-01-21

permalink: posts/force-include-classes-in-critical-css/
crossPostDEV: https://dev.to/giulia_chiola/force-include-classes-in-critical-css-bfc
crossPostHashnode: https://giuliachiola.hashnode.dev/force-include-classes-in-critical-css

mainTag: css
tags:
  - css
  - performance
id: 3
---

[Critical CSS](https://github.com/addyosmani/critical) build by [Addy Osmani](https://twitter.com/addyosmani) is a useful library that extracts and inlines critical-path CSS in HTML pages.

In the documentation page, there are a lot of configurations available _but_ they are not the only ones! 😏

Critical CSS uses as its engine [penthouse](https://github.com/pocketjoso/penthouse) which has in turn a lot of configuration options. One of them, is `forceInclude`.

`forceInclude: [...]` description from docs 📚:

> Array of css selectors to keep in critical css, even if not appearing in critical viewport. Strings or regex (f.e. ['.keepMeEvenIfNotSeenInDom', /^\.button/])

For instance, if we want to add a cta class injected via JS and not available in DOM nodes when the critical path is generated, we have to configure our critical CSS options like this:

```javascript
critical.generate({
  base: './',
  src: 'template-homepage.html',
  css: ['production/css/style-1.css' , 'production/css/style-2.css'],
  ....
  penthouse: {
    forceInclude: ['OPTIONAL-CLASS-HERE'],
  },
})
```
