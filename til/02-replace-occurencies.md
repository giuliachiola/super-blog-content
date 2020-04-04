---
title: 'How to remove all links in JavaScript'
abstract: 'Remove all links occurrencies concatenating two replace functions.'
quote: 'Whenever you give up something, you must replace it with something.'
quoteAuthor: 'Lou Holtz'
img: 'https://source.unsplash.com/-zZAfE-QBHQ'
imgAuthorName: '@devjustesen'
imgAuthorProfile: 'https://unsplash.com/@devjustesen'
date: 2020-03-26
tags:
  - js
  - regex
mainTag: js
---

If you need to remove all links occurrencies in a webpage and transform them in plain text:

- get the page content as string

- replace all start anchor tags using RegEx

Global pattern flags:
  - g modifier: global. All matches (don't return after first match)

```javascript
.replace(/<a href="#">/g, '')
```

- replace all end anchor tags using RegEx

```javascript
.replace(/<\/a>/g, '')
```

- concatenate the two replace functions

```javascript
const mystring = `<a href="#">CR7</a> regala alla Juve il pari a sei minuti dal novantesimo, recuperando la rete segnata da Lukic nel primo tempo su errore di Pjanic. Il Toro manca l'aggancio al quarto posto <a href='#'>Champions</a>, e rimane sesta a -1 dalla Roma e a -2 dall'Atalanta. Per Ronaldo gol numero 601 in carriera coi club`

mystring.replace(/<a href="#">/g, '').replace(/<\/a>/g, '');
```

[Live RegEx example](https://regex101.com/r/iaHby4/1)

> 📚 More info about RegEx
> [RegEx 101 playground](https://regex101.com/)
> [A Practical Guide to Regular Expressions (RegEx) In JavaScript](https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4)
