### Summary

This tutorial explains JavaScript hoisting, detailing how variable and function declarations are handled by the JavaScript engine during execution.

#### Key Points:

1. **JavaScript Hoisting:**
   - Hoisting moves variable and function declarations to the top of the code during the creation phase of the execution context.

2. **Variable Hoisting:**
   - **`var` Keyword:**
     ```javascript
     console.log(counter); // undefined
     var counter = 1;
     ```
     - The `var` declaration is hoisted, initializing `counter` to `undefined` before assigning it a value.
   - **`let` Keyword:**
     ```javascript
     console.log(counter); // ReferenceError
     let counter = 1;
     ```
     - The `let` declaration is hoisted but not initialized, causing a ReferenceError if accessed before declaration.

3. **Function Hoisting:**
   - **Function Declarations:**
     ```javascript
     let result = add(20, 10); 
     console.log(result); // 30

     function add(a, b) {
         return a + b;
     }
     ```
     - Function declarations are hoisted, making them callable before their definition.
   - **Function Expressions:**
     ```javascript
     let result = add(20, 10); // ReferenceError
     console.log(result);

     let add = function(x, y) {
         return x + y;
     }
     ```
     - Function expressions are not hoisted, leading to a ReferenceError if called before their definition.
   - **Arrow Functions:**
     ```javascript
     let result = add(20, 10); // ReferenceError
     console.log(result);

     let add = (x, y) => x + y;
     ```
     - Arrow functions behave like function expressions and are not hoisted.

#### Summary:
- Hoisting in JavaScript moves variable and function declarations to the top of the code.
- `var` declarations are hoisted and initialized to `undefined`, while `let` declarations are hoisted but not initialized.
- Function declarations are hoisted and can be called before their definition, but function expressions and arrow functions are not hoisted.