### Summary of JavaScript NaN

#### Introduction
- **NaN** stands for "Not-a-Number" and represents an invalid or unrepresentable number in JavaScript.
- It is a special property of the global object:
  - `window.NaN` in web browsers
  - `global.NaN` in Node.js
- The type of NaN is `number`.

#### Checking for NaN
- Use the global function `isNaN(value)` to check if a value is NaN.
  ```javascript
  const result = 100 + 0 / 0;
  console.log(isNaN(result)); // true
  ```

#### Why Use NaN
- **NaN** indicates failed numerical operations or invalid inputs:
  1. **Parsing Numbers:**
     - When converting strings to numbers, if the conversion fails, NaN is returned.
     ```javascript
     const num = parseInt('X100'); // NaN
     if (isNaN(num)) {
         num = 0; // Handle failure
     }
     console.log(num); // 0
     ```
  
  2. **Using Undefined:**
     - Operations involving `undefined` return NaN.
     ```javascript
     console.log(undefined * 2); // NaN
     ```
  
  3. **Using NaN in Operations:**
     - Any operation involving NaN results in NaN.
     ```javascript
     const result = 10 + 1 / NaN;
     console.log(result); // NaN
     ```
  
  4. **Indeterminate Forms:**
     - Operations like `0 / 0` yield NaN.
     ```javascript
     const result = 10 + 0 / 0;
     console.log(result); // NaN
     ```
  
  5. **Invalid Arguments in Math Functions:**
     - Math functions return NaN with invalid arguments.
     ```javascript
     const result = Math.sqrt(-1);
     console.log(result); // NaN
     ```

#### Summary
- NaN is a special value indicating a failed numerical operation.
- Use `isNaN()` to check if a value is NaN and handle it appropriately.