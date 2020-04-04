---
title: Create CSS classes dynamically
abstract: Using SASS interpolation functions, SASS variables and SASS arrays, create CSS classes dinamically.
quote: Well done is better than well said.
quoteAuthor: Benjamin Franklin
img: 'https://source.unsplash.com/myvVYJhCG-c'
imgAuthorName: '@rdehamer'
imgAuthorProfile: 'https://unsplash.com/@rdehamer'
date: 2020-03-26
mainTag: css
tags:
  - css
---

**SASS interpolation** is an useful tool that comes in handy when you have to create CSS classes name dynamically from an array.

For this blog, I wanted different gradients based on post tag (git, vsc, nodejs...). Each tag is append to the main card class in order to create a modifier

{% raw %}
```html
<article class="c-card c-card--{{ tag }}"> ... </div>
```
{% endraw %}

and its CSS was like below

```scss
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

In attempt to remove repetitions, I tried to loop through a SASS list and generate classes

```scss
$tags: git, vsc, nodejs;

@each $tag in $tags {
  .c-card--#{$tag} {
    background: linear-gradient(to right, $co_card-gradient-#{tag});
  }
}
```

but unfortunately SASS **does not support** variable name interpolation at the moment! 💔

If you try to compile this you will get

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

[Live Codepen example](https://codepen.io/giuliachiola/pen/VwLVVRy)
