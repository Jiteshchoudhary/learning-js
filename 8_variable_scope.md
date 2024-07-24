### Summary of JavaScript Variable Scopes

#### Overview
This tutorial covers the visibility and accessibility of variables in JavaScript, explaining the different types of scopes: global, local, and block scope (introduced in ES6).

#### Key Points

1. **Global Scope:**
   - Variables declared outside of any function are in the global scope and are accessible throughout the script.
   - Example:
     ```javascript
     var message = 'Hi';
     console.log(message); // Accessible globally
     ```

2. **Local Scope:**
   - Variables declared inside a function are local to that function.
   - Example:
     ```javascript
     var message = 'Hi';

     function say() {
         var message = 'Hello';
         console.log(message); // Outputs: Hello
     }

     say();
     console.log(message); // Outputs: Hi
     ```
   - Variables inside `say()` are in the function execution context, separate from the global context.

3. **Scope Chain:**
   - JavaScript resolves variables by looking in the current scope first and then moving up to outer scopes.
   - Example:
     ```javascript
     var message = 'Hi';

     function say() {
         console.log(message); // Outputs: Hi
     }

     say();
     ```

4. **More Scope Chain Example:**
   - Inner functions access outer variables if not found in their own scope.
   - Example:
     ```javascript
     var y = 20;

     function bar() {
         var y = 200;

         function baz() {
             console.log(y); // Outputs: 200
         }

         baz();
     }

     bar();
     ```

5. **Global Variable Leaks:**
   - Assigning a value to an undeclared variable creates a global variable, causing potential issues.
   - Example:
     ```javascript
     function getCounter() {
         counter = 10; // No var, let, or const
         return counter;
     }

     console.log(getCounter()); // Outputs: 10
     ```
   - To prevent this, use `'use strict'` mode.
     ```javascript
     'use strict';

     function getCounter() {
         counter = 10; // ReferenceError in strict mode
         return counter;
     }

     console.log(getCounter());
     ```

6. **Block Scope:**
   - `let` and `const` introduce block scope, limiting the variable's accessibility to within the curly braces `{}`.
   - Example:
     ```javascript
     function say(message) {
         if (!message) {
             let greeting = 'Hello'; // Block scope
             console.log(greeting); // Outputs: Hello
         }
         console.log(greeting); // ReferenceError
     }

     say();
     ```

#### Conclusion
The tutorial explains JavaScript variable scopes including global scope, function (local) scope, and block scope, and highlights the importance of understanding scope chains and preventing global variable leaks.