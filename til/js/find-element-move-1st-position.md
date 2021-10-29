---
title: Find element in array and move it to the first position
abstract: How to find an element in JavaScript and move it to the first position.
quote: You always pass failure on the way to success.
quoteAuthor: Mickey Rooney

date: 2021-02-05

permalink: posts/find-element-in-array-and-move-it-to-the-first-position/
crossPostDEV: https://dev.to/giulia_chiola/find-element-in-array-and-move-it-to-the-1st-position-1mk5
crossPostHashnode: https://giuliachiola.hashnode.dev/how-to-find-an-element-in-javascript-and-move-it-to-the-first-position

mainTag: js
tags:
  - js
id: 26
---

Surely there are several way to do it, this is just one of them. Let me know if you know a better way to do it 💪🏻

To find an element into an array and move to be the first, you have to:

- get the index of the founded item using [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

> 📚 The `findIndex()` method returns the index of the **first** element in the array that satisfies the provided testing function.

```js
const arr = [1, 2, 3, '🐱', 4, 5, 6, 7, 8, 9 , 10]
const itemToFind = '🐱'

const foundIdx = arr.findIndex(el => el == itemToFind) // -> foundIdx = 3
```

- remove the item in that specific position using [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

> 📚 The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


```js
arr.splice(foundIdx, 1)

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start = foundIdx
// deleteCount = 1 = number of elements in the array to remove from start
```

- add the item to the 1st position using [`unshift()`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

> 📚 The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

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
> [Moving Element In An Array From Index To Another](https://dev.to/jalal246/moving-element-in-an-array-from-index-to-another-464b)
