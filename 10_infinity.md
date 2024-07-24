### Summary of JavaScript Infinity

#### Introduction
- **Infinity** is a global property representing an infinite value:
  - `Infinity` (positive infinity) is greater than any finite number.
  - `-Infinity` (negative infinity) is smaller than any finite number.
- The type of `Infinity` is `number`:
  ```javascript
  const result = typeof (Infinity);
  console.log(result); // number
  ```

#### Checking for Infinity
- Use `Number.isFinite(value)` to check if a value is finite:
  ```javascript
  console.log(Number.isFinite(100)); // true
  console.log(Number.isFinite(Infinity)); // false
  console.log(Number.isFinite(-Infinity)); // false
  ```
- Comparison:
  ```javascript
  let counter = 100;
  console.log(counter === Infinity); // false
  console.log(Infinity === Infinity); // true
  ```

#### Pitfalls of Infinity
1. **`parseFloat()` Function:**
   - `parseFloat('Infinity')` returns `Infinity`.
   - `parseInt('Infinity')` returns `NaN` as it doesn't recognize 'Infinity'.
   - It’s good practice to validate inputs to prevent 'Infinity' strings.
     ```javascript
     let weight = parseFloat('Infinity');
     console.log(weight); // Infinity
     ```

2. **JSON Serialization:**
   - `JSON.stringify()` serializes `Infinity` to `null`.
     ```javascript
     const resource = { amount: Infinity };
     let result = JSON.stringify(resource);
     console.log(result); // {"amount":null}
     ```

3. **Math Methods:**
   - `Math.min()` returns `Infinity` for an empty array.
     ```javascript
     let ratings = [];
     let max = Math.min(...ratings);
     console.log(max); // Infinity
     ```

#### Summary
- **Infinity** represents an infinite value in JavaScript.
- It’s a global variable and is greater than any finite number, while `-Infinity` is less.
- Special functions like `parseFloat` and `JSON.stringify` handle `Infinity` differently, so it's essential to validate and manage such values properly.