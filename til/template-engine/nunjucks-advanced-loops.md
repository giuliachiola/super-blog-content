---
title: Nunjucks advanced loops
abstract: In Nunjucks we can loop through an array or an object, let's see how to do it.
quote: In the middle of every difficulty <br class="u-ty-break-t">lies opportunity
quoteAuthor: Albert Einstein

date: 2021-01-20

permalink: posts/nunjucks-advanced-loops/
crossPostDEV: https://dev.to/giulia_chiola/nunjucks-advanced-loops-57mc
crossPostHashnode: https://giuliachiola.hashnode.dev/nunjucks-advanced-loops

mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: 18
---

[Nunjucks](https://mozilla.github.io/nunjucks/templating.html) is a powerful template engine that allows to loop through arrays and also objects 😏

## Loop though an array

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}

  {% for item in animals %}
      Value: {{ item }}
  {% endfor %}
  ```
{% endraw %}

```html
Value: 🐱
Value: 🐶
Value: 🐺
```

## Loop though an object

{% raw %}
  ```twig
  {% set animal = {
      name: 'cat',
      emoji: '🐱'
  } %}

  {% for key, value in animal %}
      {{ key }}: {{ value }}
  {% endfor %}
  ```
{% endraw %}

Note that we have to declare the two parameters of the loop `key, value`.

```html
name: cat
emoji: 🐱
```

## The `iterable` property

In **Twig** exists an intresting property, [`iterable`](https://twig.symfony.com/doc/3.x/tests/iterable.html) that checks if a variable can be iterable in a for loop:

Loop through an array:

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}

  {% if animals is iterable %}
    {% for item in animals %}
      Value: {{ item }}
    {% endfor %}
  {% else %}
    Not iterable: {{ animal }}
  {% endif %}
  ```
{% endraw %}

```html
Value: 🐱
Value: 🐶
Value: 🐺
```

Loop through an object:

{% raw %}
  ```twig
  {% set animals = {
    name: 'cat',
    emoji: '🐱'
  } %}

  {% if animals is iterable %}
    {% for item in animals %}
      Value: {{ item }}
    {% endfor %}
  {% else %}
    Not iterable: {{ animal }}
  {% endif %}
  ```
{% endraw %}

```html
Value: cat
Value: 🐱
```

> 🧨 **!important**
>
> Please note that `iterable` is a **Twig** property and can have unexpected results in Nunjucks template engine.

In **Twig** a _string_ is **not** iterable:

{% raw %}
  ```twig
  {% set animal = 'cat' %}

  {% if animal is iterable %}
    Iterable!
    {% for item in animal %}
      Value: {{ item }}
    {% endfor %}
  {% else %}
    Not iterable!
    {{ animal }}
  {% endif %}
  ```
{% endraw %}

_Twig output_

```html
Not iterable!
cat
```

but if we run the same code in **Nunjucks**, we discover that a _string_ is iterable 🤯

_Nunjucks output_

```html
Iterable!
Value: c
Value: a
Value: t
```

## Accessing the parent loop

Nunjucks provides in its loops the `loop` property.

From the [docs](http://mozilla.github.io/nunjucks/templating.html#for) the `loop.index` is
> the current iteration of the loop (1 indexed)

But what if we have two nested loops and we want to access to the parent loop?

Workaround: save the loop index as row number! 😏

In this example we have a matrix content: two rows and each row has one ore more cells. If we want to print all cells content and position, we have to:
- loop (parent loop) through the rows
- loop (child loop) through the columns
- get the content inside each cell

{% raw %}
  ```twig
  {% set animals = [
      ['🐱', '🐶', '🐺'],
      ['🐍']
  ] %}

  <table>
    {% for row in animals %}
      {# new row #}
      <tr>
      {% set rowloop = loop %}
      {% for cell in row %}
        <td>
            row (rowloop.index):{{ rowloop.index }}
            column (loop.index): {{ loop.index }}
            cell: {{ cell }}
        </td>
      {% endfor %}
      </tr>
    {% endfor %}
  </table>
  ```
{% endraw %}

_HTML output_

```html

<table>
  {# new row #}
  <tr>
    <td>
        row (rowloop.index):1
        column (loop.index): 1
        cell: 🐱
    </td>
    <td>
        row (rowloop.index):1
        column (loop.index): 2
        cell: 🐶
    </td>
    <td>
        row (rowloop.index):1
        column (loop.index): 3
        cell: 🐺
    </td>
  </tr>
  {# new row #}
  <tr>
    <td>
        row (rowloop.index):2
        column (loop.index): 1
        cell: 🐍
    </td>
  </tr>
</table>
```

> 📚 More info
>
> - [Twig playground](https://twigfiddle.com/)
