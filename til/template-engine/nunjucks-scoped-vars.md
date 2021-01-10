---
title: Nunjuks scoped variable declarations
abstract: We have to pay attention where we declare variables in Nunjucks, because they are scoped!
quote: If opportunity doesn’t knock, <br class="u-ty-break-t">build a door
quoteAuthor: Kurt Cobain

date: 2020-07-24
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: T21
---

We have to pay attention where we set Nunjucks variables because they are **scoped**

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}

  {% for item in animals %}
    {% set animal = item %}
  {% endfor %}

  {{ animal }}
  {# animal declared INSIDE the loop is NOT available #}
  ```
{% endraw %}

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}
  {% set animal = '' %}

  {% for item in animals %}
    {# get the last one, just for example purpose #}
    {% set animal = item %}
  {% endfor %}

  {{ animal }}
  {# animal declared OUTSIDE the loop is available #}
  {# animal -> 🐺 #}
  ```
{% endraw %}

> 📚 More info
>
> [Twig docs - set variables](https://twig.symfony.com/doc/3.x/tags/set.html)
