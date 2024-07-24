### Summary

This tutorial explains the differences between the `var` and `let` keywords in JavaScript.

#### Key Differences:

1. **Variable Scopes:**
   - `var`:
     - Global when declared outside a function:
       ```javascript
       var counter;
       ```
     - Local when declared inside a function:
       ```javascript
       function increase() {
           var counter = 10;
       }
       // counter is not accessible here
       ```
     - Accessible outside loops:
       ```javascript
       for (var i = 0; i < 5; i++) {
           console.log("Inside the loop:", i);
       }
       console.log("Outside the loop:", i); // 5
       ```

   - `let`:
     - Block-scoped, only accessible within the block it's declared:
       ```javascript
       for (let i = 0; i < 5; i++) {
           console.log("Inside the loop:", i);
       }
       console.log("Outside the loop:", i); // ReferenceError
       ```

2. **Creating Global Properties:**
   - `var` variables are added as properties to the global object (e.g., `window` in browsers):
     ```javascript
     var counter = 0;
     console.log(window.counter); // 0
     ```
   - `let` variables are not added to the global object:
     ```javascript
     let counter = 0;
     console.log(window.counter); // undefined
     ```

3. **Redeclaration:**
   - `var` allows redeclaration without issues:
     ```javascript
     var counter = 10;
     var counter;
     console.log(counter); // 10
     ```
   - `let` throws an error if redeclared:
     ```javascript
     let counter = 10;
     let counter; // Error
     ```

4. **Temporal Dead Zone (TDZ):**
   - `var`:
     - Variables are initialized to `undefined` during the creation phase and assigned values during the execution phase.
   - `let`:
     - Variables are not initialized during the creation phase, causing a ReferenceError if accessed before declaration.
     - TDZ is the period from entering the block until the `let` variable is declared.

#### Summary:
- `var` variables have function or global scope, can be redeclared, and are added to the global object.
- `let` variables have block scope, cannot be redeclared, and are not added to the global object.
- `let` variables have a TDZ, preventing access before declaration.