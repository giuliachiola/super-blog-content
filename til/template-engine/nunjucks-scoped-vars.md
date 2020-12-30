---
title: Nunjuks has scoped variable declarations
abstract: We have to pay attention where we declare variables in nunjucks, because they are scoped!
quote: If opportunity doesn’t knock, <br class="u-ty-break-t">build a door.
quoteAuthor: Kurt Cobain

date: 2020-07-24
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
---

We have to pay attention where we set nunjucks variables because they are **scoped**

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}

  {% set animal = '' %}

  {% for item in animals %}
      {% set animal = item %}
  {% endfor %}

  {{ animal }}
  {# animal is NOT available #}
  ```
{% endraw %}

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}

  {% set animal = '' %}

  {% for item in animals %}
      {% set animal = item %}
  {% endfor %}

  {{ animal }}
  {# animal is available -> 🐺 #}
  ```
{% endraw %}

> 📚 More info
>
> [Twig docs - set variables](https://twig.symfony.com/doc/3.x/tags/set.html)
