---
title: How to remove all links in JavaScript
abstract: Remove all links occurrencies concatenating two replace functions.
quote: Whenever you give up something, you must replace it with something
quoteAuthor: Lou Holtz

date: 2021-01-15
crossPostDEV: https://dev.to/giulia_chiola/how-to-remove-all-links-in-javascript-1mff
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-remove-all-links-in-javascript
tags:
  - js
  - regex
mainTag: js
id: T11
---

If you need to remove all links occurrencies in a webpage and return it as plain text:

- get the page content as string

- replace all start anchor tags using the JavaScript method [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) with the RegEx `/g` global pattern flag: it returns all matches (it does not return after first match)

```javascript
.replace(/<a href="#">/g, '')
```

- replace all end anchor tags using RegEx

```javascript
.replace(/<\/a>/g, '')
```

- concatenate the two replace functions

```javascript
const mystring = `<a href="#">The cat</a> (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family <a href="#">Felidae</a> and is often referred to as the domestic cat to distinguish it from the wild members of the family.`

mystring.replace(/<a href="#">/g, '').replace(/<\/a>/g, '')
```

_Output_

```html
The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.
```

[Live RegEx example](https://regex101.com/r/iaHby4/2)

> 📚 More info
> - [RegEx 101 playground](https://regex101.com/)
> - [A Practical Guide to Regular Expressions (RegEx) In JavaScript](https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4)
