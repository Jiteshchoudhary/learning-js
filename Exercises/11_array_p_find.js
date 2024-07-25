// ####  Finding Elements
// - **`indexOf()`**: Finds the index of an element.
// - **`includes()`**: Checks if an element is present.
// - **`find()`**: Finds the first element that satisfies a condition.
// - **`findIndex()`**: Finds the index of the first element that satisfies a condition.
const array = [1, 4, 35, 546, 21, 4];

//indexof () method give if found index other return -1
console.log(array.indexOf(43)); // if not pass then by default 0
console.log(array.indexOf(43, 1))// from 1 index 
console.log(array.indexOf(4))
console.log(array.indexOf(34, -4)) //it also support negative index
//limitation of index of does not work similar in case of array of object

console.log(array.lastIndexOf(4)) // find last element index of occurence


// - Use `indexOf()` to find the first occurrence of an element in an array.
// - Use `lastIndexOf()` to find the last occurrence of an element in an array.
// - Both methods return `-1` if the element is not found.

//# includes method this is simple straight forward methods 
console.log(array.includes(4)); // either true or false

console.log(array.find((ele) => ele == 5)); // if it is found then return element other wise give undefined

let itemAt = [4, 5, 6, 7, 8];
console.log('with negative index', itemAt[-1]);
console.log('with method', itemAt.at(-2))