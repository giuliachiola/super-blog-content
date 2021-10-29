---
title: Nunjucks scoped variable declarations
abstract: We have to pay attention where we declare variables in Nunjucks, because they are scoped!
quote: If opportunity doesn’t knock, <br class="u-ty-break-t">build a door
quoteAuthor: Kurt Cobain

date: 2021-01-20

permalink: posts/nunjucks-scoped-variable-declarations/
# Crossposting urls are wrong (nunjuks instead of nunjucks) ooops! :)
crossPostDEV: https://dev.to/giulia_chiola/nunjuks-scoped-variable-declarations-59ef
crossPostHashnode: https://giuliachiola.hashnode.dev/nunjuks-scoped-variable-declarations

mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: 21
---

We have to pay attention where we set Nunjucks variables because they are **scoped**

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}

  {% for item in animals %}
    {% set animal = item %}
  {% endfor %}

  {{ animal }}
  {# animal -> ERROR #}
  {# animal declared INSIDE the loop is NOT available #}
  ```
{% endraw %}

{% raw %}
  ```twig
  {% set animals = ['🐱', '🐶', '🐺'] %}

  {# note this declaration #}
  {% set animal = '' %}

  {% for item in animals %}
    {% set animal = item %}
  {% endfor %}

  {{ animal }}
  {# animal declared OUTSIDE the loop is available #}
  {# animal -> 🐺 (last array item) #}
  ```
{% endraw %}

> 📚 More info
>
> [Twig docs - set variables](https://twig.symfony.com/doc/3.x/tags/set.html)
