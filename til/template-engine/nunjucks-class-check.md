---
title: Add a class in Nunjucks using a conditional statement
abstract: There are two syntax in Nunjucks to add a class to a DOM node
quote: If people are doubting how far you can go, go so far that you can't hear them anymore
quoteAuthor: Michele Ruiz

date: 2021-01-31
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: T19
---

In _Nunjucks_ we can use a conditional statement in two ways:

1. **explicit** using the {% raw %}`{% if %}`{% endraw %} keyword,
2. or **implicit** using the {% raw %}`{{ }}`{% endraw %} expression.

Note: I did not find any refernce about these names – implicit/explicit – in the Nunjucks [official documentation 📚](https://mozilla.github.io/nunjucks/templating.html#if
), I renamed them like that to easily distinguish the two syntax in this tutorial 😇.

## Syntax n.1: explicit

Using an explicit {% raw %}`{% if %}`{% endraw %} keyword, Nunjucks check if the condition is matched

{% raw %}
```html
{% set arr = ['🐱', '🐶', '🐺'] %}

<p>{% if '🐶' in arr %}has-dog{% endif %}</p>
```
{% endraw %}

_HTML output_

```html
<p>true</p>
```

Using this method, we can add an HTML class when a specific condition is matched

{% raw %}
  ```twig
  {% set arr = ['🐱', '🐶', '🐺'] %}

  <div class="c-animals {% if '🐶' in arr %}has-dog{% endif %}">...</div>
  ```
{% endraw %}

_HTML output_

```html
<div class="c-animals has-dog">...</div>
```

## Syntax n.2: implicit

Using double curly braces, Nunjucks evalued its content:

{% raw %}
```html
{% set arr = ['🐱', '🐶', '🐺'] %}

<p>{{ if '🐶' in arr }}</p>
```
{% endraw %}

_HTML output_

```html
<p>true</p>
```

Using this method, we can add an HTML class when a specific condition is matched

{% raw %}
  ```twig
  {% set arr = ['🐱', '🐶', '🐺'] %}

  <div class="c-animals {{ 'has-dog' if '🐶' in arr }}">...</div>
  ```
{% endraw %}

_HTML output_

```html
<div class="c-animals has-dog">...</div>
```

Note that HTML output is exactly the same! 🚀

_Recap_

{% raw %}
```twig
{% set arr = ['🐱', '🐶', '🐺'] %}

// 1. explicit
<div class="c-animals {% if '🐶' in arr %}has-dog{% endif %}">...</div>

//2. implicit
<div class="c-animals {{ 'has-dog' if '🐶' in arr }}">...</div>
```
{% endraw %}

I used both syntaxes in my Nunjucks files, and to choose which one to use I go with this logic:

- if there is just one condition to match and it is quite simple, I use the _implicit_ syntax
- else I use the _explicit_ one 🤓

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/2SYc7mttUnWWaqvWz8/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://media.giphy.com/media/2SYc7mttUnWWaqvWz8/giphy.mp4">via GIPHY</a></p>
</div>
