---
title: Add a class in Nunjuks based on if statement
abstract: There are two syntax in Nunjuks to add a class to a DOM node
quote: If people are doubting how far you can go, go so far that you can't hear them anymore
quoteAuthor: Michele Ruiz

date: 2021-01-18
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: T19
---

In _Nunjucks_ we can add an `if` statement:
- **explicit** using the {% raw %}`{% if %}`{% endraw %} keyword,
- or **implicit** using the {% raw %}`{{ }}`{% endraw %} expression.

These two sintaxes have the same output:

{% raw %}
  ```twig
  {% set arr = ['🐱', '🐶', '🐺'] %}

  <div class="c-animals {{ 'has-dog' if '🐶' in arr }}">...</div>

  <div class="c-animals {% if '🐶' in arr %}has-dog{% endif %}">...</div>
  ```
{% endraw %}

_HTML output_

```html
<div class="c-animals has-dog">...</div>

<div class="c-animals has-dog">...</div>
```
