---
title: Add multiple classes in pug
abstract: Pug has many ways to add classes, here are few examples.
quote: Knowing is not enough, we must apply. <br class="u-ty-break-t">Willing is not enough, we must do
quoteAuthor: Johann Wolfgang von Goethe

date: 2021-01-22

permalink: posts/add-multiple-classes-in-pug/
crossPostDEV: https://dev.to/giulia_chiola/add-multiple-classes-in-pug-3aag
crossPostHashnode: https://giuliachiola.hashnode.dev/add-multiple-classes-in-pug

mainTag: template-engine
tags:
  - template-engine
  - pug
id: 22
---

[Pug](https://github.com/pugjs/pug), formerly known as [Jade](http://jade-lang.com/), is a template engine thas uses a JavaScript render engine. Sometimes we have to add a class conditionally based on a variable, here I go with some tricky solutions I found.

## One condition to check

The easiest way to check a class in _pug_ is using the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```pug
- var cond1 = true
.c-component(class=cond1 ? 'cond1-TRUE' : 'cond1-FALSE' )
```

_HTML output_

```html
<div class="c-component cond1-true"></div>
```

But there are other two ways to write the same exact condition in pug:

```pug
- var cond1 = true

//- (1)
.c-component(class={'cond1-true': cond1 === true})

//- (2)
.c-component(class={cond1True: cond1 === true})
```

### Important

> 🧨 **!important**
> (1) kebab-case class `cond1-true` must be wrapped in quotes
> (2) camelCase class `cond1True` can skip wrapper quotes

_HTML output_

```html
<div class="c-component cond1-true"></div>
<div class="c-component cond1True"></div>
```

## More than one condition to check

If we have to check _two_ condintions, we can go also in this case with the ternary operator to choose which classes we want.

We can write the conditionals in three ways:

1. using two `class` attributes separated by space

```pug
(class=cond1 ? 'cond1-TRUE' : 'cond1-FALSE' class=cond2 ? 'cond2-TRUE' : 'cond2-FALSE')
```

2. using two `class` attributes separated by comma

```pug
(class=cond1 ? 'cond1-TRUE' : 'cond1-FALSE', class=cond2 ? 'cond2-TRUE' : 'cond2-FALSE')
```

3. using two `class` attributes, one for each parentesis
```pug
(class=cond1 ? 'cond1-TRUE' : 'cond1-FALSE')(class=cond2 ? 'cond2-TRUE' : 'cond2-FALSE')
```

All three:

_pug_

```pug
- var cond1 = true
- var cond2 = false

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

If we have a ternary option with the second operand **empty**, we could simplify the pug syntax:

```pug
- var cond1 = true
- var cond2 = false

.c-component(class=cond1 && 'cond1-TRUE' class=cond2 && 'cond2-TRUE')
//- or more explicit
.c-component(class=cond1 ? 'cond1-TRUE' : '' class=cond2 ? 'cond2-TRUE' : '')

```

_HTML output_

```html
<div class="c-component cond1-TRUE"></div>
```

[🖥 Codepen example](https://codepen.io/giuliachiola/pen/xxGGBgW).

> 📚 More info
>
> - [Pug class attributes docs](https://pugjs.org/language/attributes.html#class-attributes)
> - [Pug documentation](https://pugjs.org/api/getting-started.html)
> - [Jade to HTML coverter](https://jsonformatter.org/jade-to-html)
> - [HTML to Jade coverter](https://html2jade.org/)
> - [Pug playground](https://pug.now.sh/)



