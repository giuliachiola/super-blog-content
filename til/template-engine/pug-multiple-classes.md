---
title: Add multiple classes in pug
abstract: Pug has many ways to add classes, here are few examples.
quote: Knowing is not enough, we must apply. Willing is not enough, we must do.
quoteAuthor: Johann Wolfgang von Goethe

articleDate: 2020-04-11
date: Last Modified
mainTag: template-engine
tags:
  - template-engine
  - pug
---

[Pug](https://github.com/pugjs/pug), _time ago known as [Jade](http://jade-lang.com/)_, is a template engine based on JavaScript render.

If we have a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to choose which classes we want, we can write the conditionals in three ways:

_pug_

```pug
- var cond1 = true
- var cond2= false

.c-component(class=cond1 ? 'cond1-TRUE' : 'cond1-FALSE' class=cond2 ? 'cond2-TRUE' : 'cond2-FALSE')

.c-component(class=cond1 ? 'cond1-TRUE' : 'cond1-FALSE', class=cond2 ? 'cond2-TRUE' : 'cond2-FALSE')

.c-component(class=cond1 ? 'cond1-TRUE' : 'cond1-FALSE')(class=cond2 ? 'cond2-TRUE' : 'cond2-FALSE')
```


_HTML output_

```html
<div class="c-component cond1-TRUE cond2-FALSE"></div>

<div class="c-component cond1-TRUE cond2-FALSE"></div>

<div class="c-component cond1-TRUE cond2-FALSE"></div>
```

If we have a ternary option with the second operand empty, we could simplify the pug syntax writing

```pug
- var cond1 = true
- var cond2= false

.c-component(class=cond1 && 'cond1-TRUE' class=cond2 && 'cond2-TRUE')
```

that it is exactly the same as

```pug
- var cond1 = true
- var cond2= false

.c-component(class=cond1 ? 'cond1-TRUE' : '' class=cond2 ? 'cond2-TRUE' : '')
```

_HTML output_

```html
<div class="c-component cond1-TRUE"></div>
```

Live Codepen example [here](https://codepen.io/giuliachiola/pen/xxGGBgW).

See the [pug class attributes docs](https://pugjs.org/language/attributes.html#class-attributes).

> 📚 More info about pug
>
> [Pug documentation](https://pugjs.org/api/getting-started.html)
> [Jade to HTML coverter](https://jsonformatter.org/jade-to-html)
> [HTML to Jade coverter](https://html2jade.org/)




