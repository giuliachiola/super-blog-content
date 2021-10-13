/* ==========================================================================
  OBJECT ARRAYS, REMOVE DUPLICATES
========================================================================== */

const obj = {
  arr1: ['a', 'b', 'c' ],
  arr2: ['a','b', 'd', 'e', 'f' ],
}

const allItems = [].concat(obj.arr1, obj.arr2)

// using filter()
const unique_filter = allItems.filter((item, pos) => allItems.indexOf(item) === pos)

// using Set()
const unique_set1 = [...new Set(allItems)]
const unique_set2 = Array.from(new Set(allItems))

console.log(allItems) // (8) ["a", "b", "c", "a", "b", "d", "e", "f"]

console.log(unique_filter) // (6) ["a", "b", "c", "d", "e", "f"]
console.log(unique_set1) // (6) ["a", "b", "c", "d", "e", "f"]
console.log(unique_set2) // (6) ["a", "b", "c", "d", "e", "f"]