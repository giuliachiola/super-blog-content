---
title: Remove duplicates in object arrays
abstract: Snippet to remove duplicates in JavaScript, when you have objects with multiple arrays inside it.
quote: Yesterday is not ours to recover, but tomorrow is ours to win or lose.
quoteAuthor: Lyndon B. Johnson
articleDate: 2020-04-12
date: Last Modified
readingTime: 3 min
mainTag: js
tags:
  - js
---

We have an object with multiple arrays inside it, and we need to remove duplicates between these arrays.

```javascript
const obj = {
  arr1: ['a', 'b', 'c' ],
  arr2: ['a','b', 'd', 'e', 'f' ],
}
```

- First of all, we have to get the two arrays and merge their items with the [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method. As the documentation says, we can use this function on arrays only, not on objects!

- We use this trick: we call an empty array `[]` and then we apply the `concat()` method to it

```javascript
const allItems = [].concat(obj.arr1, obj.arr2)
```

that will return

```javascript
console.log(allItems) // (8) ["a", "b", "c", "a", "b", "d", "e", "f"]
```

## Remove duplicates from an array

### Method 1: filter()

Let's filter our array with all items inside, just to be without duplicates.

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method use this condition: "for every item I loop through, I will check if the current index (`pos`) is the same as the `indexOf(item)`, and it this condition is true I will return the item.".

[Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method _returns the first index at which a given element can be found in the array, or -1 if it is not present_, so the filter condition is satisfied only for the first time the item pass the loop because loop `index` and `indexOf` are the same.

To be more clear let's make a table of the loop:

| Item | Loop index | indexOf* | Condition                                    | Saved into unique array |
|------|------------|----------|----------------------------------------------|-------------------------|
| 'a'  | 0          | 0        | ok, 0 == 0 so this will return `true`        | yes                     |
| 'b'  | 1          | 1        | ok, 1 == 1 so this will return `true`        | yes                     |
| 'c'  | 2          | 2        | ok, 2 == 2 so this will return `true`        | yes                     |
| 'a'  | 3          | 0        | whoa, 3 != 0 so this will return **`false`** | **nope!**               |
| 'b'  | 4          | 1        | whoa, 4 != 1 so this will return **`false`** | **nope!**               |
| 'd'  | 5          | 5        | ok, 5 == 5 so this will return `true`        | yes                     |
| 'e'  | 6          | 6        | ok, 6 == 6 so this will return `true`        | yes                     |
| 'f'  | 7          | 7        | ok, 7 == 7 so this will return `true`        | yes                     |

*indexOf = first position the item is present

```javascript
const unique = allItems.filter((item, pos) => allItems.indexOf(item) === pos)
```

```javascript
console.log(unique) // (6) ["a", "b", "c", "d", "e", "f"]
```

### Method 2: Set()

[Set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) is an object lets you store unique values of any type.

- create a new `Set()` to return the unique values
- spread `...` its items inside the `Set` object
- wrap all in square brackets to return an array `[object]`

```javascript
const unique = [...new Set(allItems)]
```

or we can use this syntax (I prefer this one! It seems more clear to me that we are manipulating something that will become an array using the [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method)

- create a new `Set()` to return the unique values
- convert the Set object to an array using `Array.from()`

```javascript
const unique = Array.from(new Set(allItems))
```

and the result is exactly the same as above using `filter()`.

```javascript
console.log(unique) // (6) ["a", "b", "c", "d", "e", "f"]
```

[🦊Gitlab snippet](https://gitlab.com/giuliach/super-snippets/-/blob/21cdd935d236809ed68ec6bd79bce6cc7c2ed9f8/js/object-arrays-remove-duplicates.js)


> 📚 More info about remove array duplicates
>
> [How to Remove Array Duplicates in ES6](https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c)
