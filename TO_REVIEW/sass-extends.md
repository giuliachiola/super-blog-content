---
title: Sass placeholder and its limits
abstract: Sass placeholder it's a powerful way to write reusable code, but unfortunately it is not always applicable.
quote: 
quoteAuthor: 

articleDate: 2020-07-22
mainTag: css
tags:
  - css
---

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

output

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

------

```scss
%colors-mobile {
  background: yellow;
}

%colors-tablet {
  background: green;
}

.colors-viewport {
  @extend %colors-mobile;
  
  @media (min-width: 768px) {
    @extend %colors-tablet;
  }
}
```

```shell
You may not @extend an outer selector from within @media.
You may only @extend selectors within the same directive.
```


https://sass-lang.com/documentation/style-rules/placeholder-selectors
