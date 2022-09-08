---
title: Add items to an array in Nunjucks
abstract: Using push() method, add items at the end of the array with Nunjucks template engine.
quote: Whether you think you can <br class="u-ty-break-t">or think you can’t, you’re right
quoteAuthor: Henry Ford

date: 2021-01-23

permalink: posts/add-items-to-an-array-in-nunjucks/
crossPostDEV: https://dev.to/giulia_chiola/add-items-to-an-array-in-nunjucks-482e
crossPostHashnode: https://giuliachiola.hashnode.dev/add-items-to-an-array-in-nunjucks

mainTag: template-engine
tags:
  - template-engine
  - nunjucks
id: 20
---

To add items in Nunjucks, use the `.push()` function.


{% raw %}
  ```twig
  {% set arr = [1,2] %}
  {% set arr = (arr.push(3), arr) %}
  ```
{% endraw %}

Final array:

```md
arr = [1,2,3]
```

Unfortunately, I did not found any references in the official [Nunjucks documentation](https://mozilla.github.io/nunjucks/templating.html) for this useful function 🤷🏻‍♀️

{% raw %}
  ```twig
  {% set animals = ['cat 🐱', 'dog 🐶', 'lion 🦁'] %}
  {% set domesticAnimals = [] %}
  {% for animal in animals %}
    {% if animal !== 'lion' %}
      {% set domesticAnimals = (domesticAnimals.push(animal), domesticAnimals) %}
    {% endif %}
  {% endfor %}
  ```
{% endraw %}

Final array:

```md
domesticAnimals = ['cat 🐱', 'dog 🐶']
```

> 🧨 **!important**
>
> If you use {% raw %}`{% set .... %}`{% endraw %} inside a for-loop block, pay attention to have defined it **outside** before entering the loop.
> I wrote a post about it: [📒 Nunjucks scoped variable declarations]({{ global.siteUrl }}/posts/nunjucks-scoped-variable-declarations/)

<br/>

> 📚 _More info_
>
> Docs about [Twig 'push' filter](https://www.branchcms.com/learn/docs/developer/twig/filters/item/push). Note that this filter is not present into the official [Twig documentation](https://twig.symfony.com/doc/3.x/) 🤷🏻‍♀️