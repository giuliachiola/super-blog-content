---
title: Nunjucks advanced loops
abstract: In nunjucks we can loop through an array or an object, let's see how to do it.
quote: In the middle of every difficulty <br class="u-ty-break-t">lies opportunity
quoteAuthor: Albert Einstein

date: 2020-07-23
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: T18
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

## Loop though an object

Note that we have to declare the two parameters of the loop `key, value`:

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

```html
name: cat
emoji: 🐱
```

## The `iterable` property

In **twig** exist an intresting property, [`iterable`](https://twig.symfony.com/doc/3.x/tests/iterable.html) that checks if a variable is an array or an object:

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

> 🧨 **!important**
>
> Please note that `iterable` is a **twig** property and can have unexpected results in nunjucks template engine.

In **twig** a _string_ is not iterable:

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

_twig output_

```html
Not iterable!
cat
```

but if we run the same code in **nunjucks**, we discover that also a _string_ is iterable 🤯

_nunjucks output_

```html
Iterable!
Value: c
Value: a
Value: t
```

## Accessing the parent loop

Save the loop index as row number:

{% raw %}
  ```twig
  {% set animals = [
      ['🐱', '🐶', '🐺'],
      ['🐍']
  ] %}

  <table>
    {% for row in animals %}
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
> - [Nunjucks playground](https://np.bauke.xyz/)
