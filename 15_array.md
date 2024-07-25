
### JavaScript Array Methods Array is collection of the elements  Overview

#### 1. Array Properties
- **`length`**: Returns the number of elements in an array.

#### 2. Adding/Removing Elements
- **`push()`**: Adds one or more elements to the end.
- **`unshift()`**: Adds one or more elements to the beginning.
- **`pop()`**: Removes the last element.
- **`shift()`**: Removes the first element.
- **`splice()`**: Adds, removes, or replaces elements at specified positions.
- **`slice()`**: Creates a shallow copy of a portion of the array.

#### 3. Finding Elements
- **`indexOf()`**: Finds the index of an element.
- **`includes()`**: Checks if an element is present.
- **`find()`**: Finds the first element that satisfies a condition.
- **`findIndex()`**: Finds the index of the first element that satisfies a condition.

#### 4. Higher-Order Methods
- **`map()`**: Creates a new array with transformed elements.
- **`filter()`**: Creates a new array with elements that pass a test.
- **`reduce()`**: Reduces the array to a single value.
- **`every()`**: Checks if all elements pass a test.
- **`some()`**: Checks if at least one element passes a test.
- **`sort()`**: Sorts the elements.
- **`forEach()`**: Executes a function for each element.

#### 5. Manipulating Arrays
- **`concat()`**: Merges two or more arrays.

#### 6. Creating Arrays
- **`of()`**: Creates a new array with given elements.
- **`from()`**: Creates an array from array-like or iterable objects.

#### 7. Flattening Arrays
- **`flat()`**: Flattens the array up to a specified depth.
- **`flatMap()`**: Maps each element and then flattens the result.

#### 8. Arrays to Strings
- **`join()`**: Joins all elements into a string, separated by a specified separator.

#### 9. Advanced Operations
- **Destructuring**: Assigns array elements to variables.
- **Spread Operator**: Expands arrays into individual elements.

#### 10. Accessing Elements
- **`at()`**: Accesses elements using positive or negative indexes.

#### 11. Reversing Elements
- **`reverse()`**: Reverses the order of elements in place.
- **`toReversed()`**: Creates a new array with elements in reversed order.

#### 12. Multidimensional Arrays
- Operations on arrays of arrays.

This overview covers various methods and properties for creating, manipulating, and accessing arrays effectively in JavaScript.

The `Array.prototype.toSorted()` method provides a way to sort array elements without altering the original array. It returns a new sorted array.

**Syntax:**
```javascript
array.toSorted(compareFn);
```
- `array`: The array on which the method is called.
- `compareFn` (Optional): A function that defines the sort order. If omitted, elements are sorted as strings according to their Unicode code points.

**How it Works:**
- `compareFn` should return:
  - A negative number if the first element should come before the second.
  - A positive number if the second element should come before the first.
  - Zero if their order doesn't matter.

**Examples:**

1. **Sorting Strings:**
   ```javascript
   const colors = ['red', 'green', 'blue'];
   const sortedColors = colors.toSorted();
   console.log(colors);      // Output: ['red', 'green', 'blue']
   console.log(sortedColors); // Output: ['blue', 'green', 'red']
   ```

2. **Sorting Numbers:**
   - Ascending:
     ```javascript
     const scores = [3, 1, 2, 7, 9];
     const sortedScores = scores.toSorted((a, b) => a - b);
     console.log(scores);      // Output: [3, 1, 2, 7, 9]
     console.log(sortedScores); // Output: [1, 2, 3, 7, 9]
     ```
   - Descending:
     ```javascript
     const sortedScoresDesc = scores.toSorted((a, b) => b - a);
     console.log(sortedScoresDesc); // Output: [9, 7, 3, 2, 1]
     ```

3. **Sorting Objects by Property:**
   ```javascript
   const books = [
     { title: 'The Great Gatsby', year: 1925 },
     { title: 'To Kill a Mockingbird', year: 1960 },
     { title: '1984', year: 1949 },
     { title: 'Brave New World', year: 1932 }
   ];
   const sortedBooks = books.toSorted((a, b) => a.year - b.year);
   console.log(sortedBooks);
   // Output: [{title: 'The Great Gatsby', year: 1925}, ...]
   ```

4. **On Non-Array Objects:**
   ```javascript
   const arrayLike = { length: 3, 0: 5, 2: 4 };
   console.log(Array.prototype.toSorted.call(arrayLike));
   // Output: [4, 5, undefined]
   ```

5. **On Sparse Arrays:**
   ```javascript
   const skills = ['JS', , 'Node.js'];
   const sortedSkills = skills.toSorted();
   console.log(sortedSkills); // Output: ['JS', 'Node.js', undefined]
   ```

**Summary:**
- `toSorted()` returns a new, sorted array without modifying the original.
- It can be used on non-array objects with a `length` property and integer-keyed properties.
- It handles sparse arrays by treating empty slots as `undefined`.

