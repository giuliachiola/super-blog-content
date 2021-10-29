---
title: Sass placeholder and its limits
abstract: Sass placeholder is a powerful way to write reusable code, but unfortunately it is not always applicable.
quote: Great things are done by a series of small things brought together
quoteAuthor: Vincent Van Gogh

date: 2021-01-20

permalink: posts/sass-placeholder-and-its-limits/
crossPostDEV: https://dev.to/giulia_chiola/sass-placeholder-and-its-limits-4ba3
crossPostHashnode: https://giuliachiola.hashnode.dev/sass-placeholder-and-its-limits

mainTag: css
tags:
  - css
id: 4
---

From the official [📚 Sass documentation](https://sass-lang.com/documentation/style-rules/placeholder-selectors)

> Sass has a special kind of selector known as a “placeholder”. It looks and acts a lot like a class selector, but it starts with a % and it's not included in the CSS output. In fact, any complex selector (the ones between the commas) that even contains a placeholder selector isn't included in the CSS, nor is any style rule whose selectors all contain placeholders.

We can write a placeholder for reusable pieces of code prefixed by the `%` keyword:

```scss
// colors.scss

%colors-per-viewport {
  background: red;

  @media (min-width: 768px) {
    background: blue;
  }
}
```

and call the placeholder using the syntax `@extend %[placeholder-name]`

```scss
// component.scss

.colors {
  @extend %colors-per-viewport;
}
```

CSS output:

```css
.colors {
  background: red;
}
@media (min-width: 768px) {
  .colors {
    background: blue;
  }
}
```

As seen above, we could also declare a code snippet with mediaquery inside.

### The small matter

Unfortunately, we cannot call a placeholder declaration **inside** a mediaquery 😩

For instance, if we try to declare two placeholders and call them inside a media query

```scss
%colors-mobile {
  background: yellow;
}

%colors-tablet {
  background: green;
}
```

```scss
.colors-viewport {
  @extend %colors-mobile; // ok!

  @media (min-width: 768px) {
    @extend %colors-tablet; // nope!
  }
}
```

The code above will throw an error 😭

```shell
You may not @extend an outer selector from within @media.
You may only @extend selectors within the same directive.
```

So, if we really need to reuse a code snipped inside a mediaquery, we can use a `mixin` declaration.

I know, it is not the correct use of the `mixin` function... but it's a desperate measure! 😅


```scss
@mixin colors-mobile {
  background: yellow;
}

@mixin colors-tablet {
  background: green;
}
```

```scss
.colors-viewport {
  @include colors-mobile; // ok!

  @media (min-width: 768px) {
    @include colors-tablet; // yasss!
  }
}
```

> 📚 More info
>
> - [Sass lang - placeholder selectors](https://sass-lang.com/documentation/style-rules/placeholder-selectors)
> - [Sass - mixin or placeholder](https://www.sitepoint.com/sass-mixin-placeholder/)
