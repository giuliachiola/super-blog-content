---
title: Add class in Nunjuks based on if statement
abstract: There are (at least!) two syntax in Nunjuks to add a class to a DOM node
quote: If people are doubting how far you can go, go so far that you can't hear them anymore.
quoteAuthor: Michele Ruiz

date: 2020-07-20
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: T19
---

In nunjucks we can add an `if` statement _explicit_ using the {% raw %}`{% if %}`{% endraw %} keyword, or _implicit_ using the {% raw %}`{{ }}`{% endraw %} expression.

These two sintaxes have the same output:

{% raw %}
  ```twig
  {% set arr = ['🐱', '🐶', '🐺'] %}

  <div class="c-animals {{ 'has-dog' if '🐶' in arr }}">...</div>

  <div class="c-animals {% if '🐶' in arr %}has-dog{% endif %}">...</div>
  ```
{% endraw %}

_HTML_

```html
<div class="c-animals has-dog">...</div>

<div class="c-animals has-dog">...</div>
```
