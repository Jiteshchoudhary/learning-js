### Summary: JavaScript `Array.flat()` Method

**Introduction:**
The `Array.prototype.flat()` method, introduced in ES2019, creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.

**Key Points:**

- **Syntax:**
  ```javascript
  let newArray = arrayObject.flat([depth])
  ```
  - `depth`: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

- **Basic Usage:**
  - Flattens an array one level deep by default:
    ```javascript
    const numbers = [1, 2, [3, 4, 5]];
    const flatNumbers = numbers.flat();
    console.log(flatNumbers); // Output: [1, 2, 3, 4, 5]
    ```

- **Effect on Original Array:**
  - The original array remains unchanged:
    ```javascript
    console.log(numbers); // Output: [1, 2, [3, 4, 5]]
    ```

- **Specifying Depth:**
  - Flattening an array with a depth of 2:
    ```javascript
    const numbers = [1, 2, [3, 4, 5, [6, 7]]];
    const flatNumbers = numbers.flat(2);
    console.log(flatNumbers); // Output: [1, 2, 3, 4, 5, 6, 7]
    ```

  - Using `Infinity` to flatten an array of unknown depth:
    ```javascript
    const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
    const flatNumbers = numbers.flat(Infinity);
    console.log(flatNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```

- **Removing Empty Slots:**
  - The `flat()` method also removes holes in arrays:
    ```javascript
    const numbers = [1, 2, , 4, , 5];
    const sequence = numbers.flat();
    console.log(sequence); // Output: [1, 2, 4, 5]
    ```

**Conclusion:**
The `Array.prototype.flat()` method is used to flatten arrays with nested arrays. You can specify the depth level for flattening, which defaults to 1, and it also removes empty slots in arrays.


### Summary: JavaScript `Array.flatMap()` Method

**Introduction:**
The `flatMap()` method combines the functionalities of `map()` and `flat()` (with a depth of 1). It maps each element in an array using a mapping function and then flattens the result into a new array.

**Key Points:**

- **Syntax:**
  ```javascript
  let newArray = arrayObject.flatMap(callback, thisArg);
  ```
  - `callback`: The mapping function, similar to the one used in `map()`.
  - `thisArg`: Optional value to use as `this` when executing the callback.

- **Mapping Function Syntax:**
  ```javascript
  function callback(currentValue[, index, array]) { /* ... */ }
  ```

- **Behavior:**
  - `flatMap()` does not modify the original array.

**Examples:**

1. **Creating Words from Sentences:**
   - Using `map()`:
     ```javascript
     let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];
     let words = sentences.map(s => s.split(' '));
     console.log(words);
     // Output: [ ['JavaScript', 'Array', 'flatMap()'], [' '], ['is'], [' '], ['Awesome'] ]
     ```

   - Using `flatMap()`:
     ```javascript
     let words = sentences.flatMap(s => s.split(' '));
     console.log(words);
     // Output: [ 'JavaScript', 'Array', 'flatMap()', '', '', 'is', '', '', 'Awesome' ]
     ```

2. **Adding and Removing Elements During Mapping:**
   - Shopping cart example:
     ```javascript
     let cart = [
         { name: 'Smartphone', qty: 2, price: 500, freeOfCharge: false },
         { name: 'Tablet', qty: 1, price: 800, freeOfCharge: false }
     ];

     let newCart = cart.flatMap(item => {
         if (item.name === 'Smartphone') {
             return [item, { name: 'Screen Protector', qty: item.qty, price: 5, freeOfCharge: true }];
         } else {
             return [item];
         }
     });

     console.log(newCart);
     // Output: [
     //   { name: 'Smartphone', qty: 2, price: 500, freeOfCharge: false },
     //   { name: 'Screen Protector', qty: 2, price: 5, freeOfCharge: true },
     //   { name: 'Tablet', qty: 1, price: 800, freeOfCharge: false }
     // ]

     const total = newCart.reduce((sum, item) => {
         if (!item.freeOfCharge) sum += item.price * item.qty;
         return sum;
     }, 0);

     console.log({ total }); // Output: { total: 1800 }
     ```

**Conclusion:**
The `flatMap()` method is useful for creating a flattened array by mapping each element and then flattening the results. It simplifies operations where both mapping and flattening are needed, allowing for concise and readable code.