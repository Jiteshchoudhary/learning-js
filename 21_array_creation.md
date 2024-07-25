## array creation array.of() and array.from()
### Summary: JavaScript `Array.of()` Method

**Introduction:**
The `Array.of()` method in ES6 provides a more intuitive way to create arrays compared to the ES5 Array constructor, avoiding the pitfalls of the latter's behavior when handling numeric arguments.

**Key Points:**

- **ES5 Array Constructor Issues:**
  - When passed a single number, it creates an array with that length:
    ```javascript
    let numbers = new Array(2);
    console.log(numbers.length); // 2
    console.log(numbers[0]); // undefined
    ```
  - When passed a non-number, it creates an array with that element:
    ```javascript
    numbers = new Array("2");
    console.log(numbers.length); // 1
    console.log(numbers[0]); // "2"
    ```

- **Solution with `Array.of()`:**
  - `Array.of()` does not treat a single numeric value specially and always creates an array containing the values passed to it:
    ```javascript
    let numbers = Array.of(3);
    console.log(numbers.length); // 1
    console.log(numbers[0]); // 3
    ```

- **Examples:**
  - Single numeric value:
    ```javascript
    let numbers = Array.of(3);
    console.log(numbers.length); // 1
    console.log(numbers[0]); // 3
    ```
  - Multiple values:
    ```javascript
    let chars = Array.of('A', 'B', 'C');
    console.log(chars.length); // 3
    console.log(chars); // ['A','B','C']
    ```

- **Polyfill for Unsupported Environments:**
  ```javascript
  if (!Array.of) {
      Array.of = function() {
          return Array.prototype.slice.call(arguments);
      };
  }
  ```

**Conclusion:**
The `Array.of()` method simplifies array construction by consistently treating all arguments as elements of the new array, regardless of their type or quantity.


### Summary: JavaScript `Array.from()` Method

**Introduction:**
The `Array.from()` method in ES6 allows you to create a new array from an array-like or iterable object, providing a more straightforward approach compared to ES5 methods.

**Key Points:**

- **ES5 Approach:**
  - Manually iterate over elements to convert an array-like object to an array:
    ```javascript
    function arrayFromArgs() {
        var results = [];
        for (var i = 0; i < arguments.length; i++) {
            results.push(arguments[i]);
        }
        return results;
    }
    var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
    console.log(fruits); // Output: [ 'Apple', 'Orange', 'Banana' ]
    ```

  - Using `Array.prototype.slice` for conciseness:
    ```javascript
    function arrayFromArgs() {
        return Array.prototype.slice.call(arguments);
    }
    var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
    console.log(fruits); // Output: [ 'Apple', 'Orange', 'Banana' ]
    ```

- **ES6 `Array.from()` Method:**
  - Creates a new array from an array-like or iterable object:
    ```javascript
    Array.from(target[, mapFn[, thisArg]])
    ```
    - `target`: The array-like or iterable object to convert.
    - `mapFn`: Optional map function to call on every element.
    - `thisArg`: Optional value to use as `this` when executing `mapFn`.

- **Examples:**

  1. **Create an array from an array-like object:**
     ```javascript
     function arrayFromArgs() {
         return Array.from(arguments);
     }
     console.log(arrayFromArgs(1, 'A')); // Output: [ 1, 'A' ]
     ```

  2. **Using a mapping function:**
     ```javascript
     function addOne() {
         return Array.from(arguments, x => x + 1);
     }
     console.log(addOne(1, 2, 3)); // Output: [ 2, 3, 4 ]
     ```

  3. **Using a `this` value:**
     ```javascript
     let doubler = {
         factor: 2,
         double(x) {
             return x * this.factor;
         }
     };
     let scores = [5, 6, 7];
     let newScores = Array.from(scores, doubler.double, doubler);
     console.log(newScores); // Output: [ 10, 12, 14 ]
     ```

  4. **Create an array from an iterable object:**
     ```javascript
     let even = {
         *[Symbol.iterator]() {
             for (let i = 0; i < 10; i += 2) {
                 yield i;
             }
         }
     };
     let evenNumbers = Array.from(even);
     console.log(evenNumbers); // Output: [ 0, 2, 4, 6, 8 ]
     ```

**Conclusion:**
The `Array.from()` method simplifies the creation of arrays from array-like or iterable objects, offering additional functionality such as mapping and context binding.