
#### Manipulating Arrays
- **`concat()`**: Merges two or more arrays.

The `Array.prototype.concat()` method in JavaScript is used to merge two or more arrays into a single array without altering the original arrays. Here’s a summary of how it works:

**Syntax:**
```javascript
array.concat([value1[, value2[, ...]]])
```

**Key Points:**
- **Basic Usage:** 
  ```javascript
  let odds = [1, 3, 5];
  let evens = [2, 4, 6];
  let combined = odds.concat(evens);
  console.log(combined); // Output: [1, 3, 5, 2, 4, 6]
  ```
  - The `concat()` method returns a new array with elements from the original arrays merged.

- **Concatenating with an Empty Array:**
  ```javascript
  let combined = [].concat(odds, evens);
  console.log(combined); // Output: [1, 3, 5, 2, 4, 6]
  ```

- **Concatenating Multiple Arrays:**
  ```javascript
  let upper = ['A', 'B', 'C'];
  let lower = ['a', 'b', 'c'];
  let digits = [1, 2, 3];
  let alphanumerics = upper.concat(lower, digits);
  console.log(alphanumerics); // Output: ['A', 'B', 'C', 'a', 'b', 'c', 1, 2, 3]
  ```

- **Cloning an Array:**
  ```javascript
  let colors = ['red', 'green', 'blue'];
  let rgb = colors.concat();
  console.log(rgb); // Output: ['red', 'green', 'blue']
  ```

- **Concatenating Non-Array Values:**
  ```javascript
  let rgb = ['red', 'green', 'blue'];
  let moreColors = rgb.concat('yellow', 'magenta');
  console.log(moreColors); // Output: ['red', 'green', 'blue', 'yellow', 'magenta']
  ```

- **Using Spread Operator (ES6):**
  ```javascript
  let combined = [...odds, ...evens];
  console.log(combined); // Output: [1, 3, 5, 2, 4, 6]
  ```
  - The spread operator provides a concise way to merge arrays.

**Summary:**
- The `concat()` method merges arrays and returns a new array, leaving the original arrays unchanged.
- It can concatenate multiple arrays and non-array values.
- In ES6, the spread operator (`...`) offers a modern alternative for merging arrays.