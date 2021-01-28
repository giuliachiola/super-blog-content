---
title: Find element in array and move it to the 1st position
abstract: 
quote: 
quoteAuthor: 

date: 2021-01-27
crossPostDEV: 
crossPostHashnode: 
mainTag: 
tags:
  - 
  - 
id: T26

eleventyExcludeFromCollections: true
---

Surely there are several way to do it, this is one of them.

- get the index of the founded item using [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

From docs 📚:

> The `findIndex()` method returns the index of the **first** element in the array that satisfies the provided testing function.

```js
const arr = [1, 2, 3, '🐱', 4, 5, 6, 7, 8, 9 , 10]
const itemToFind = '🐱'

const foundIdx = arr.findIndex(el => el == itemToFind) // -> foundIdx = 3
```

- remove the item in that specific position using [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

From docs 📚:

> The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


```js
arr.splice(foundIdx, 1)
```

- add the item to the 1st position using [`unshift()`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

From docs 📚:

> The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
arr.unshift(itemToFind)
```

_Output_

```js
console.log(arr)

// (11) ["🐱", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

To sum up:

```js
const arr = [1, 2, 3, '🐱', 4, 5, 6, 7, 8, 9 , 10]
const itemToFind = '🐱'

const foundIdx = arr.findIndex(el => el == itemToFind)
arr.splice(foundIdx, 1)
arr.unshift(itemToFind)
```

> 📚 More info
>
> - [Moving Element In An Array From Index To Another](https://dev.to/jalal246/moving-element-in-an-array-from-index-to-another-464b)
