---
title: Nunjuks has scoped variable declarations
abstract: We have to pay attention where we declare variables in nunjucks, because they are scoped!
quote: If opportunity doesn’t knock, build a door.
quoteAuthor: Kurt Cobain

articleDate: 2020-07-22
mainTag: template-engine
tags:
  - template-engine
  - nunjucks
---

We have to pay attention where we set nunjucks variables because they are **scoped**

{% raw %}
  ```twig
  {% for item in list %}
    {% set foo = item %}
  {% endfor %}

  {# foo is NOT available #}
  ```
{% endraw %}

{% raw %}
  ```twig
  {% set foo = "" %}
  {% for item in list %}
      {% set foo = item %}
  {% endfor %}

  {# foo is available #}
  ```
{% endraw %}

> 📚 More info about twig variables
>
> [Twig docs - set variables](https://twig.symfony.com/doc/3.x/tags/set.html)
