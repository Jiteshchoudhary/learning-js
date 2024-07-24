### Summary: JavaScript `typeof` Operator

#### Introduction
- The `typeof` operator returns a string that represents the type of its operand.
- Syntax: `typeof operand` or `typeof(operand)`

#### Examples
- **Primitive Types**:
  ```javascript
  console.log(typeof 'Hi');          // 'string'
  console.log(typeof 100);           // 'number'
  console.log(typeof 100n);          // 'bigint'
  console.log(typeof false);         // 'boolean'
  console.log(typeof Symbol('morning')); // 'symbol'
  console.log(typeof undefined);     // 'undefined'
  ```
- **Objects**:
  ```javascript
  console.log(typeof new Date());    // 'object'
  console.log(typeof null);          // 'object' (Note: null is a primitive, but its type is reported as 'object')
  ```
- **Functions**:
  ```javascript
  function add(x, y) { return x + y; }
  console.log(typeof add);           // 'function'
  ```

#### Using `typeof` with Expressions
- Parentheses are needed to get the type of an expression:
  ```javascript
  console.log(typeof (100 + '10'));  // 'string'
  ```
- Without parentheses, `typeof` applies to only the first operand:
  ```javascript
  console.log(typeof 100 + '10');    // 'number10' (concatenation of 'number' and '10')
  ```

#### Summary
The `typeof` operator helps determine the type of a value or expression, returning a string that represents its type. Use parentheses around expressions to ensure accurate results.