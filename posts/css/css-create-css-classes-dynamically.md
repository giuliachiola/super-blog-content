---
title: Create CSS classes dynamically
abstract: How to create CSS classes dinamically using SASS interpolation functions, SASS variables and SASS arrays.
quote: Well done is better than well said
quoteAuthor: Benjamin Franklin

date: 2021-01-20

permalink: posts/create-css-classes-dynamically/
crossPostDEV: https://dev.to/giulia_chiola/create-css-classes-dynamically-2ooo
crossPostHashnode: https://giuliachiola.hashnode.dev/create-css-classes-dynamically

mainTag: css
tags:
  - css
id: 2
---

**SASS interpolation** is an useful tool that comes in handy when we have to create CSS classes name dynamically from an array.

For the first version of this blog, I wanted different gradients based on post tag (git, vsc, nodejs...). Each tag is append to the main card class in order to create a modifier

{% raw %}
```html
// card.njk

<article class="c-card c-card--{{ tag }}"> ... </div>
```
{% endraw %}

and its CSS was this

```scss
// card.scss

$co_card-gradient-git: #eb3349, #f45c43;
$co_card-gradient-vsc: #1a2980, #26d0ce;
$co_card-gradient-nodejs: #36582f, #7ab659;

.c-card--git {
  background: linear-gradient(to right, $co_card-gradient-git);
}

.c-card--vsc {
  background: linear-gradient(to right, $co_card-gradient-vsc);
}

.c-card--nodejs {
  background: linear-gradient(to right, $co_card-gradient-nodejs);
}

```

In attempt to remove repetitions and have a DRY (Don't Repeat Yourself) code, I tried to loop through a SASS list and generate classes

```scss
$tags: git, vsc, nodejs;

@each $tag in $tags {
  .c-card--#{$tag} {
    background: linear-gradient(to right, $co_card-gradient-#{tag});
  }
}
```

but unfortunately SASS **does not support** variable name interpolation at the moment! 💔

If you try to compile the snippet above, you will get

```shell
Sass Error: Undefined variable: "$co_card-gradient-"
```

[Read more about sass interpolation](https://sass-lang.com/documentation/interpolation)

## The workaround

- create a `mixin` using SASS conditionals with all cases you need

```scss
@mixin card-gradient($tag) {
  @if $tag == 'git' {
    background: linear-gradient($co_card-gradient-git);
  }

  @else if $tag == 'vsc' {
    background: linear-gradient($co_card-gradient-vsc);
  }

  @else if $tag == 'nodejs' {
    background: linear-gradient($co_card-gradient-nodejs);
  }
}
```

- use the tag list to dynamically generate classes names

```scss
$tags: git, vsc, nodejs;

@each $tag in $tags {
  .c-card--#{$tag} {
    @include card-gradient($tag);
  }
}
```

[🖥 Codepen example](https://codepen.io/giuliachiola/pen/VwLVVRy)

## Dynamic classes using CSS vars

Note that if we use **CSS vars** instead of _SASS vars_ we can interpolate the class name with `#{}` syntax.

1. Declare the CSS var

```scss
:root {
  --co_palette-1: #ef476f;
  /* ... */
}
```

2. Use the interpolation where it is called, for example in a `@for` loop

```scss
@for $i from 1 through 5 {
  .t-palette-color--#{$i} {
    background-color: var(--co_palette-#{$i});
  }
}
```

If we need to mantain SASS vars (in my code, I needed to use `darken` and `lighten` SASS function) we could interpolate classes name like this:

```scss
$co_palette-1: #ef476f;
$co_palette-2: #ffc233;
$co_palette-3: #06d6a0;
$co_palette-4: #1b98e0;
$co_palette-5: #ff9f1c;

:root {
  --co_palette-1: #{$co_palette-1};
  --co_palette-2: #{$co_palette-2};
  --co_palette-3: #{$co_palette-3};
  --co_palette-4: #{$co_palette-4};
  --co_palette-5: #{$co_palette-5};

  --co_palette-1--lighten: #{lighten($co_palette-1, 10%)};
  --co_palette-2--lighten: #{lighten($co_palette-2, 10%)};
  --co_palette-3--lighten: #{lighten($co_palette-3, 10%)};
  --co_palette-4--lighten: #{lighten($co_palette-4, 10%)};
  --co_palette-5--lighten: #{lighten($co_palette-5, 10%)};
}
```

```scss
@for $i from 1 through 5 {
  .t-palette-color--#{$i} .c-card::before {
    background-color: var(--co_palette-#{$i});
    color: var(--co_palette-#{$i}--lighten);
  }
}
```

Output:

```css
.t-palette-color--1 .c-card::before {
  background-color: var(--co_palette-1);
  color: var(--co_palette-1--lighten);
}

.t-palette-color--2 .c-card::before {
  background-color: var(--co_palette-2);
  color: var(--co_palette-2--lighten);
}

.t-palette-color--3 .c-card::before {
  background-color: var(--co_palette-3);
  color: var(--co_palette-3--lighten);
}

.t-palette-color--4 .c-card::before {
  background-color: var(--co_palette-4);
  color: var(--co_palette-4--lighten);
}

.t-palette-color--5 .c-card::before {
  background-color: var(--co_palette-5);
  color: var(--co_palette-5--lighten);
}
```
