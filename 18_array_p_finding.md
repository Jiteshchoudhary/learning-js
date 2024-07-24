####  Finding Elements
- **`indexOf()`**: Finds the index of an element.
- **`includes()`**: Checks if an element is present.
- **`find()`**: Finds the first element that satisfies a condition.
- **`findIndex()`**: Finds the index of the first element that satisfies a condition.

### JavaScript Array `indexOf` and `lastIndexOf`: Locating an Element in an Array

#### Summary
This tutorial explains how to use the JavaScript array `indexOf()` and `lastIndexOf()` methods to find the position of an element in an array.

#### `indexOf()` Method
- **Purpose**: Finds the index of the first occurrence of an element in an array. Returns `-1` if the element is not found.
- **Syntax**: 
  ```javascript
  array.indexOf(searchElement, fromIndex);
  ```
  - `searchElement`: The element to find.
  - `fromIndex` (optional): The index to start the search. Can be positive or negative.
  - Uses strict equality (`===`) for comparison.

#### Examples of `indexOf()`
- Basic usage:
  ```javascript
  var scores = [10, 20, 30, 10, 40, 20];
  console.log(scores.indexOf(10)); // 0
  console.log(scores.indexOf(30)); // 2
  console.log(scores.indexOf(50)); // -1
  console.log(scores.indexOf(20)); // 1
  ```
- Using negative `fromIndex`:
  ```javascript
  console.log(scores.indexOf(20, -1)); // 5
  console.log(scores.indexOf(20, -5)); // 1
  ```

- Finding indices of all occurrences:
  ```javascript
  function find(needle, haystack) {
      var results = [];
      var idx = haystack.indexOf(needle);
      while (idx != -1) {
          results.push(idx);
          idx = haystack.indexOf(needle, idx + 1);
      }
      return results;
  }
  console.log(find(10, scores)); // [0, 3]
  ```

#### Limitations of `indexOf()`
- Does not work with objects with similar properties:
  ```javascript
  var guests = [
      { name: 'John Doe', age: 30 },
      { name: 'Lily Bush', age: 20 },
      { name: 'William Gate', age: 25 }
  ];
  console.log(guests.indexOf({ name: 'John Doe', age: 30 })); // -1
  ```

#### `lastIndexOf()` Method
- **Purpose**: Finds the index of the last occurrence of an element in an array. Returns `-1` if the element is not found.
- **Syntax**: 
  ```javascript
  array.lastIndexOf(searchElement, fromIndex);
  ```
  - `searchElement`: The element to find.
  - `fromIndex` (optional): The index to start the search backward. Default is `array.length - 1`.

#### Examples of `lastIndexOf()`
- Basic usage:
  ```javascript
  console.log(scores.lastIndexOf(10)); // 3
  console.log(scores.lastIndexOf(20)); // 5
  console.log(scores.lastIndexOf(50)); // -1
  ```

### Conclusion
- Use `indexOf()` to find the first occurrence of an element in an array.
- Use `lastIndexOf()` to find the last occurrence of an element in an array.
- Both methods return `-1` if the element is not found.



### JavaScript Array `includes`: Check If an Element is in the Array

#### Summary
This tutorial introduces the JavaScript Array `includes()` method, which checks if an element is present in an array.

#### Introduction to the `includes()` Method
- **Purpose**: Determines whether an array contains a specified element.
- **Syntax**: 
  ```javascript
  array.includes(element, fromIndex);
  ```
  - `element`: The element to search for.
  - `fromIndex` (optional): The index to start the search from.

#### Comparison with `indexOf()`
- **`indexOf()` Example**:
  ```javascript
  let numbers = [1, 2, 3];
  if (numbers.indexOf(2) !== -1) {
    // process here
  }
  ```
  - `indexOf()` returns the index of the first occurrence or `-1` if not found.
  - Does not handle `NaN` correctly: 
    ```javascript
    [NaN].indexOf(NaN); // -1
    ```

#### `includes()` Method
- **Functionality**: Returns `true` if the array contains the element, otherwise `false`.
- **Examples**:
  ```javascript
  [1, 2, 3].includes(2); // true
  [1, 2, 3].includes(4); // false
  [1, 2, 3].includes(1, 1); // false
  [NaN].includes(NaN); // true
  [-0].includes(+0); // true
  ```

#### Object Example with `includes()`
- **Example**:
  ```javascript
  let bmw = { name: 'BMW' }, 
      toyota = { name: 'Toyota' },
      ford = { name: 'Ford' };

  let cars = [ford, toyota];

  console.log(cars.includes(ford)); // true
  console.log(cars.includes(bmw)); // false
  ```
  - `includes()` works for object references, checking if the exact object instance is present in the array.

### Conclusion
- The `includes()` method is a straightforward way to check if an array contains an element.
- Unlike `indexOf()`, `includes()` handles `NaN` correctly and does not distinguish between `+0` and `-0`.




### JavaScript Array `find()` Method

#### Summary
This tutorial explains how to use the JavaScript `find()` method to search for the first element in an array that satisfies a specified test.

#### Introduction to the `find()` Method
- **ES5 Limitation**: The `indexOf()` and `lastIndexOf()` methods only return the index of the first matching element.
- **ES6 Enhancement**: The `find()` method, added to the `Array.prototype` object, returns the first element that passes a test function.

#### Syntax
```javascript
array.find(callback(element[, index[, array]])[, thisArg])
```
- **Arguments**:
  - `callback`: Function to execute on each element.
    - `element`: The current element.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array on which `find()` was called.
  - `thisArg` (optional): Object to use as `this` inside the callback function.

#### Return Value
- **Behavior**: Executes the callback for each element until it returns a truthy value.
  - **If found**: Returns the first element that passes the test.
  - **If not found**: Returns `undefined`.
- **Find Index**: Use `findIndex()` to find the index of the found element.

#### Examples
- **Finding the First Even Number**:
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  console.log(numbers.find(e => e % 2 == 0)); // Output: 2
  ```

- **Finding a Customer with Credit Greater Than 100**:
  ```javascript
  let customers = [
      { name: 'ABC Inc', credit: 100 },
      { name: 'ACME Corp', credit: 200 },
      { name: 'IoT AG', credit: 300 }
  ];
  console.log(customers.find(c => c.credit > 100)); 
  // Output: { name: 'ACME Corp', credit: 200 }
  ```

#### Conclusion
- Use the `find()` method to locate the first element in an array that satisfies a specified test function.



### JavaScript Array `findIndex()` Method

#### Summary
This tutorial explains how to use the JavaScript `findIndex()` method to find the index of the first element in an array that satisfies a provided test function.

#### Introduction to `findIndex()`
- **ES6 Addition**: The `findIndex()` method was introduced in ES6.
- **Purpose**: It returns the index of the first element that satisfies the test function or `-1` if no element passes the test.

#### Syntax
```javascript
array.findIndex(testFn(element[, index[, array]])[, thisArg])
```
- **Arguments**:
  - `testFn`: A function to execute on each element.
    - `element`: The current element.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `findIndex()` was called upon.
  - `thisArg` (optional): Object to use as `this` inside `testFn`. If omitted, `thisArg` is `undefined`.

#### Behavior
- Executes `testFn` on each element until it finds one where `testFn` returns a truthy value.
- Returns the index of the first element that passes the test.
- If no element passes the test, returns `-1`.

#### Examples

1. **Simple Array Example**:
   ```javascript
   let ranks = [1, 5, 7, 8, 10, 7];
   let index = ranks.findIndex(rank => rank === 7);
   console.log(index); // Output: 2
   ```

2. **Complex Condition**:
   ```javascript
   let ranks = [1, 5, 7, 8, 10, 7];
   let index = ranks.findIndex((rank, index) => rank === 7 && index > 2);
   console.log(index); // Output: 5
   ```

3. **Array of Objects**:
   ```javascript
   const products = [
     { name: 'Phone', price: 999 },
     { name: 'Computer', price: 1999 },
     { name: 'Tablet', price: 995 },
   ];
   const index = products.findIndex(product => product.price > 1000);
   console.log(index); // Output: 1
   ```

#### Conclusion
- Use the `findIndex()` method to find the index of the first element in an array that meets a specific test condition.