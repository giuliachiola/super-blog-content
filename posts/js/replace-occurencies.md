---
title: How to remove all links in JavaScript
abstract: Remove all links occurrencies concatenating two replace functions.
quote: Whenever you give up something, you must replace it with something
quoteAuthor: Lou Holtz

date: 2021-01-15

permalink: posts/how-to-remove-all-links-in-javascript/
crossPostDEV: https://dev.to/giulia_chiola/how-to-remove-all-links-in-javascript-1mff
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-remove-all-links-in-javascript
tags:
  - js
  - regex
mainTag: js

id: 11
---

If you need to remove all links occurrencies in a webpage and return it as plain text you can go with two methods:

## Basic method

If you know the content of all your `href`s you can use this basic way. In my example, the `href` content is a simple hash `#`.

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

## Advanced method

In this way, we can remove all anchor tag instances from our string, even those we do not know the `href`s.
Thanks to [@shadowtime2000](https://dev.to/shadowtime2000/comment/1afjl) for pointing that out 🙂

- create a new DOM element

```js
let elem = document.createElement('div')
```

- add the inner HTML passed as string

```js
elem.innerHTML = `<a href="https://en.wikipedia.org/wiki/Cat">The cat</a> (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family <a href="#">Felidae</a> and is often referred to as the <strong>domestic cat</strong> to distinguish it from the wild members of the family.`
```

- loop through all `<div>` children (so we are looping the HTML string we have just passed) and check if there are any `<a>` tag.

> 🧨 **!important**
>
> `tagName` returns the tag name of the element, and in HTML language it is in uppercase.

```js
Array.from(elem.children).forEach(child => {
  // if child is an HTML tag different from an anchor <a>, then skip it
  if (!(child.tagName === 'A')) return
  // else if child is an anchor tag,
  // then replace the current node with a new textNode containing the anchor text content
  // <a href="#">wow!</a> -> wow!
  child.replaceWith(document.createTextNode(child.textContent))
})
```

To sum up

```js
let elem = document.createElement('div')

elem.innerHTML = `<a href="https://en.wikipedia.org/wiki/Cat">The cat</a> (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family <a href="#">Felidae</a> and is often referred to as the <strong>domestic cat</strong> to distinguish it from the wild members of the family.`

Array.from(elem.children).forEach(child => {
  if (!(child.tagName === 'A')) return
  child.replaceWith(document.createTextNode(child.textContent));
})
```

Output: `console.log(elem)`

```html
<div>The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the <strong>domestic cat</strong> to distinguish it from the wild members of the family.</div>
```

> 📚 More info
> - [RegEx 101 playground](https://regex101.com/)
> - [A Practical Guide to Regular Expressions (RegEx) In JavaScript](https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4)
> - [`tagName` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName)
