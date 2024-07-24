### Summary

This tutorial explains how to use the JavaScript `let` keyword to declare block-scoped variables.

#### Key Points:

1. **Scope with `var`:**
   - `var` variables can be global (outside a function) or local (inside a function).

2. **Introduction of `let`:**
   - `let` is similar to `var` but is block-scoped, meaning it's limited to the block where it's declared (e.g., inside `{}`).

3. **Example:**
   ```javascript
   let x = 10;
   if (x == 10) {
       let x = 20;
       console.log(x); // 20 (inside the block)
   }
   console.log(x); // 10 (outside the block)
   ```
   - Inside the `if` block, `x` is 20. Outside, `x` remains 10.

4. **Global Variables:**
   - `var` adds variables to the global object (e.g., `window` in browsers).
   - `let` does not add variables to the global object.

5. **Using `let` in Loops:**
   ```javascript
   for (let i = 0; i < 5; i++) {
       setTimeout(() => console.log(i), 1000);
   }
   ```
   - Outputs numbers 0 to 4 correctly because `let` creates a new `i` for each loop iteration.

6. **Redeclaration:**
   - `var` allows redeclaring the same variable.
   - `let` throws an error if you redeclare a variable.

7. **Hoisting and Temporal Dead Zone (TDZ):**
   - Variables declared with `let` are hoisted but not initialized, causing a ReferenceError if accessed before declaration.
   - TDZ is the period from entering the block until the variable is declared.

8. **Example of TDZ:**
   ```javascript
   {
       console.log(typeof myVar); // undefined
       console.log(typeof message); // ReferenceError
       let message; // TDZ ends
   }
   ```
   - Accessing `message` before declaration causes an error.

#### Summary:
- `let` creates block-scoped variables, which are not initialized by default or attached to the global object.
- Redeclaring with `let` causes errors.
- TDZ prevents accessing variables before they're declared.


### Summary

This tutorial explains how to define constants using the JavaScript `const` keyword introduced in ES6.

#### Key Points:

1. **Introduction to `const`:**
   - `const` is used to declare a constant, creating a read-only reference to a value.
   - Syntax: 
     ```javascript
     const CONSTANT_NAME = value;
     ```

2. **Block Scope:**
   - Like `let`, `const` variables are block-scoped.
   - Variables declared with `const` cannot be reassigned.

3. **Immutability:**
   - `const` variables are immutable, meaning they cannot be reassigned:
     ```javascript
     const RATE = 0.1;
     RATE = 0.2; // TypeError
     ```
   - `const` variables must be initialized when declared:
     ```javascript
     const RED; // SyntaxError
     ```

4. **`const` and Objects:**
   - The reference is read-only, but object properties can be modified:
     ```javascript
     const person = { age: 20 };
     person.age = 30; // OK
     ```
   - Reassigning the object is not allowed:
     ```javascript
     person = { age: 40 }; // TypeError
     ```
   - To make an object immutable, use `Object.freeze()`:
     ```javascript
     const person = Object.freeze({age: 20});
     person.age = 30; // TypeError
     ```

5. **`const` and Arrays:**
   - Array elements can be modified, but the array cannot be reassigned:
     ```javascript
     const colors = ['red'];
     colors.push('green'); // OK
     colors = []; // TypeError
     ```

6. **`const` in Loops:**
   - Works with `for...of` to create a new binding for each iteration:
     ```javascript
     let scores = [75, 80, 95];
     for (const score of scores) {
         console.log(score);
     }
     ```
   - Using `const` in an imperative `for` loop results in a TypeError:
     ```javascript
     for (const i = 0; i < scores.length; i++) { // TypeError
         console.log(scores[i]);
     }
     ```

#### Summary:
- `const` creates a read-only reference that cannot be reassigned, but the value can be changed.
- `const` variables are block-scoped and cannot be redeclared.

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


This tutorial explains the JavaScript execution context to help understand how JavaScript code is executed.

**Introduction**
- Example code is provided to illustrate JavaScript execution.

**Example Breakdown**
1. Declare and initialize the variable `x` with 10.
2. Declare the `timesTen()` function to multiply its argument by 10.
3. Call `timesTen()` with `x` and store the result in `y`.
4. Output `y` to the console (outputs 100).

**Execution Contexts**
- JavaScript creates execution contexts when executing code.
- There are two phases: the creation phase and the execution phase.

**Creation Phase**
- The global execution context is created first.
- Tasks performed:
  - Create the global object (`window` in browsers or `global` in Node.js).
  - Bind the `this` object to the global object.
  - Set up a memory heap for variables and functions.
  - Store function declarations and initialize variables to `undefined`.

**Execution Phase**
- JavaScript executes code line by line, assigns values, and executes functions.
- For each function call, a new function execution context is created.

**Function Execution Context**
- Similar to the global execution context but creates an `arguments` object for function parameters.
- During execution, parameters are assigned values and the function executes.

**Call Stack**
- JavaScript uses a call stack to keep track of all execution contexts.

**Conclusion**
- The tutorial covers the global and function execution contexts in JavaScript.

### JavaScript Call Stack

**Introduction**
- A call stack helps the JavaScript engine keep track of its place in code that calls multiple functions, identifying the currently running function and functions invoked within it.
- It manages both global and function execution contexts using a Last-In-First-Out (LIFO) principle.

**Operation**
1. **Global Execution Context**: Created and pushed onto the call stack when a script executes.
2. **Function Calls**: Each function call results in a new execution context being created and pushed onto the call stack.
3. **Nested Functions**: Function calls within functions create new execution contexts, which are also pushed onto the stack.
4. **Completion of Function**: Once a function completes, its execution context is popped off the stack.
5. **End of Execution**: The script stops when the call stack is empty.

**Example Code**
```javascript
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
```
**Execution Steps**
1. **Global Context**: Placed on the call stack.
2. **Function Call (average)**: `average()` execution context is pushed onto the stack.
3. **Function Call (add)**: `add()` execution context is pushed onto the stack.
4. **Completion of `add()`**: `add()` context is popped off the stack.
5. **Completion of `average()`**: `average()` context is popped off the stack.
6. **Empty Stack**: The script stops as the call stack is empty.

**Stack Overflow**
- The call stack has a fixed size based on the host environment.
- Exceeding this size, such as with a recursive function without an exit condition, causes a stack overflow error.
```javascript
function fn() {
    fn();
}

fn(); // stack overflow
```

**Asynchronous JavaScript**
- JavaScript is single-threaded with one call stack, meaning it executes tasks synchronously (one at a time).
- Asynchronous tasks are managed with an event loop, allowing other tasks to be handled while waiting for a task to complete, such as fetching data from a server.

**Summary**
- The JavaScript engine uses a call stack to manage execution contexts, operating on a LIFO principle.


### JavaScript Event Loop

**Summary**: This tutorial explains the JavaScript event loop and how it enables JavaScript to handle concurrency despite being single-threaded.

**JavaScript Single-Threaded Model**
- JavaScript is single-threaded, meaning it can only execute one task at a time.
- The JavaScript engine executes scripts sequentially, managing execution contexts via the call stack.
- Blocking functions, like those with long execution times, can cause the webpage to hang.

**Blocking Function Example**
```javascript
function task(message) {
    let n = 10000000000;
    while (n > 0) {
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');
```
- The `task()` function simulates a time-consuming task, blocking other operations.
- Output: 
  ```
  Start script...
  Call an API
  Done!
  ```

**Callbacks to Prevent Blocking**
```javascript
console.log('Start script...');

setTimeout(() => {
    task('Download a file.');
}, 1000);

console.log('Done!');
```
- This uses `setTimeout` to delay the blocking task, allowing other operations to continue.
- Output:
  ```
  Start script...
  Done!
  Download a file.
  ```

**JavaScript Runtime**
- The JavaScript runtime includes the JavaScript engine and other web browser components.
- Web APIs like `setTimeout`, fetch requests, and DOM events allow for concurrent and asynchronous operations.
- `setTimeout` creates a timer and places the task in the callback queue after the specified delay.

**Event Loop**
- The event loop continuously monitors the call stack and callback queue.
- It moves functions from the callback queue to the call stack when the call stack is empty.

**Event Loop Example**
```javascript
console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.');
}, 0);

console.log('Bye!');
```
- Despite a `0` second delay, "Execute immediately" runs after "Bye!" because the event loop processes the callback queue only when the call stack is empty.
- Output:
  ```
  Hi!
  Bye!
  Execute immediately.
  ```

**Conclusion**
- The JavaScript event loop is crucial for managing concurrency by coordinating tasks between the call stack and callback queue.


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


### Summary of JavaScript `undefined`

#### What is `undefined`?
- `undefined` is a primitive type in JavaScript. It is used to represent the absence of a value and is a type with exactly one value: `undefined`.

#### Situations Where `undefined` Occurs

1. **Uninitialized Variables:**
   - When you declare a variable without initializing it, it defaults to `undefined`:
     ```javascript
     let counter;
     console.log(counter); // undefined
     ```
   - It's best practice to initialize variables:
     ```javascript
     let counter = 0;
     console.log(counter); // 0
     ```

2. **Non-Existing Object Properties:**
   - Accessing a property that doesn’t exist on an object returns `undefined`:
     ```javascript
     let counter = { current: 0 };
     console.log(counter.max); // undefined
     ```
   - Use the `in` operator or nullish coalescing operator (`??`) to handle such cases:
     ```javascript
     if ('max' in counter) {
         console.log(counter.max);
     }

     const max = counter.max ?? 100;
     console.log(max); // 100
     ```

3. **Function Parameters:**
   - Parameters that are not provided a value in function calls are `undefined`:
     ```javascript
     const formatCurrency = (amount, currency = '$') => {
       return currency === '$' ? `$${amount}` : `${amount} ${currency}`;
     };
     console.log(formatCurrency(100)); // $100
     ```

4. **Function Return Values:**
   - Functions without a return statement or with an empty return statement return `undefined`:
     ```javascript
     const log = (message) => {
       console.log(message);
     };
     const result = log('Hi');
     console.log(result); // undefined

     const add = (a, b) => {
       return;
       a + b;
     };
     console.log(add(10, 20)); // undefined
     ```
   - Automatic semicolon insertion (ASI) can also cause unexpected `undefined` returns:
     ```javascript
     const add = (a, b) => {
       return
         a + b;
     };
     console.log(add(10, 20)); // undefined
     ```

5. **Out-of-Bounds Array Elements:**
   - Accessing an element outside the bounds of an array returns `undefined`:
     ```javascript
     const colors = ['red', 'green', 'blue'];
     console.log(colors[3]); // undefined
     ```

#### Summary
- `undefined` is a primitive type representing the absence of a value.
- It is returned when accessing uninitialized variables, non-existing object properties, out-of-bounds array elements, or when functions don't explicitly return a value.


### Summary of JavaScript Primitive Wrapper Types

#### Introduction to Primitive Wrapper Types
JavaScript has three primitive wrapper types: `Boolean`, `Number`, and `String`. These wrappers allow primitive values to use methods and properties that are otherwise not available on primitive types.

#### How Primitive Wrappers Work
When you call a method on a primitive value (like a string or number), JavaScript performs the following steps:
1. Creates a temporary object of the corresponding wrapper type (`String`, `Number`, or `Boolean`).
2. Calls the method on this temporary object.
3. Deletes the temporary object immediately after the method call.

For example:
```javascript
let language = 'JavaScript';
let s = language.substring(4);
console.log(s); // Script
```
This is internally equivalent to:
```javascript
let language = 'JavaScript';
let temp = new String(language);
let s = temp.substring(4);
temp = null;
```

#### Primitive Wrappers vs. Reference Types
- **Primitive Wrappers**: Created automatically for method calls but do not persist beyond the execution of the method. For example:
  ```javascript
  let s = 'JavaScript';
  s.language = 'ECMAScript';
  console.log(s.language); // undefined
  ```
  Here, `s.language` is `undefined` because the `String` object only existed temporarily.

- **Reference Types**: Created using the `new` operator and persist in memory until they go out of scope:
  ```javascript
  let s = new String('JavaScript');
  console.log(s); // String object
  ```

#### Avoid Explicit Primitive Wrapper Creation
It’s generally not recommended to explicitly create primitive wrapper objects:
```javascript
let n = new Number(10);
let s = new String('JS');
let b = new Boolean(false);
```
Instead, use primitive values directly and understand the methods available on them.

#### Summary
- Primitive wrapper types (`Boolean`, `Number`, `String`) enable primitive values to use methods.
- Methods are called on temporary objects created for each operation and are deleted immediately after.
- Primitive wrapper objects are not persistent and should be avoided for explicit creation.


### Summary: JavaScript Boolean Object vs. Boolean Primitive Type

#### JavaScript Boolean Primitive Type
- **Primitive Values**: JavaScript has a primitive boolean type with two values: `true` and `false`.
  ```javascript
  let isPending = false;
  let isDone = true;
  ```
- **Type Check**: The `typeof` operator on a boolean primitive returns `"boolean"`.
  ```javascript
  console.log(typeof isPending); // "boolean"
  ```

#### JavaScript Boolean Object
- **Boolean() Function**: The `Boolean()` function can convert values to boolean. For example, a non-empty string is converted to `true`.
  ```javascript
  let a = Boolean('Hi');
  console.log(a); // true
  ```
- **Wrapper Object**: Using `new Boolean(false)` creates a Boolean object, not a primitive.
  ```javascript
  let b = new Boolean(false);
  console.log(b.valueOf()); // false
  console.log(b.toString()); // "false"
  ```
- **Behavior**: Boolean objects can have properties and methods, unlike primitive booleans.
  ```javascript
  let active = new Boolean(false);
  active.primitiveValue = active.valueOf();
  console.log(active.primitiveValue); // false

  let completed = true;
  completed.name = 'primitive';
  console.log(completed.name); // undefined
  ```

#### Differences Between Boolean Object and Primitive
- **Type Check**: `typeof` returns `"object"` for Boolean objects and `"boolean"` for primitives.
  ```javascript
  console.log(typeof completed); // "boolean"
  console.log(typeof active); // "object"
  ```
- **Instanceof**: `instanceof Boolean` returns `true` for Boolean objects and `false` for primitives.
  ```javascript
  console.log(completed instanceof Boolean); // false
  console.log(active instanceof Boolean); // true
  ```

#### Recommendations
- **Avoid Boolean Objects**: Using Boolean objects can cause confusion, especially in conditional statements.
  ```javascript
  let falseObj = new Boolean(false);
  if (falseObj) {
    console.log('This will be logged due to type coercion.');
  }
  ```
- **Use Primitive Types**: Prefer using boolean primitives and the `Boolean()` function for conversions rather than creating Boolean objects.

This tutorial highlighted the differences between JavaScript’s boolean primitives and Boolean objects, emphasizing the importance of using primitives to avoid unnecessary complexity.

### Summary: JavaScript Number Type and Methods

#### JavaScript Number Type
- **Primitive and Object**: JavaScript has both a primitive `number` type and a `Number` reference type. 
  - **Primitive**: Used directly for numeric values.
  - **Object**: Created using the `Number` constructor.
    ```javascript
    var numberObject = new Number(100);
    console.log(numberObject.valueOf()); // 100
    ```

#### Converting and Formatting Numbers
- **Conversion to String**: 
  - `toString()`: Converts a number to a string, with an optional radix argument for different bases (e.g., binary, hexadecimal).
    ```javascript
    var aNumber = new Number(10);
    console.log(aNumber.toString()); // "10"
    console.log(aNumber.toString(2)); // "1010"
    ```
  - `toLocaleString()`: Converts a number to a locale-specific string format.

- **Formatting Methods**:
  - **`toFixed()`**: Formats a number with a fixed number of decimal places.
    ```javascript
    var distance = 19.006;
    console.log(distance.toFixed(2)); // "19.01"
    ```
  - **`toExponential()`**: Converts a number to exponential notation.
    ```javascript
    var x = 10;
    console.log(x.toExponential()); // "1e+1"
    ```
  - **`toPrecision()`**: Formats a number to a specified number of significant digits.
    ```javascript
    let x = 9.12345;
    console.log(x.toPrecision(4)); // "9.123"
    console.log(x.toPrecision(2)); // "9.1"
    ```

#### Primitive vs. Number Object
- **Type and Instance Checks**:
  - `typeof`: `"object"` for `Number` object, `"number"` for primitive.
    ```javascript
    let numberObject = new Number(10);
    let number = 10;
    console.log(typeof numberObject); // "object"
    console.log(typeof number); // "number"
    ```
  - `instanceof`: Returns `true` for `Number` objects and `false` for primitives.
    ```javascript
    console.log(numberObject instanceof Number); // true
    console.log(number instanceof Number); // false
    ```

This tutorial covers the JavaScript `Number` type, methods for converting and formatting numbers, and the differences between `Number` objects and primitive number values.

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




### JavaScript Array Methods Array is collection of the elements  Overview

#### 1. Array Properties
- **`length`**: Returns the number of elements in an array.

#### 2. Adding/Removing Elements
- **`push()`**: Adds one or more elements to the end.
- **`unshift()`**: Adds one or more elements to the beginning.
- **`pop()`**: Removes the last element.
- **`shift()`**: Removes the first element.
- **`splice()`**: Adds, removes, or replaces elements at specified positions.
- **`slice()`**: Creates a shallow copy of a portion of the array.

#### 3. Finding Elements
- **`indexOf()`**: Finds the index of an element.
- **`includes()`**: Checks if an element is present.
- **`find()`**: Finds the first element that satisfies a condition.
- **`findIndex()`**: Finds the index of the first element that satisfies a condition.

#### 4. Higher-Order Methods
- **`map()`**: Creates a new array with transformed elements.
- **`filter()`**: Creates a new array with elements that pass a test.
- **`reduce()`**: Reduces the array to a single value.
- **`every()`**: Checks if all elements pass a test.
- **`some()`**: Checks if at least one element passes a test.
- **`sort()`**: Sorts the elements.
- **`forEach()`**: Executes a function for each element.

#### 5. Manipulating Arrays
- **`concat()`**: Merges two or more arrays.

#### 6. Creating Arrays
- **`of()`**: Creates a new array with given elements.
- **`from()`**: Creates an array from array-like or iterable objects.

#### 7. Flattening Arrays
- **`flat()`**: Flattens the array up to a specified depth.
- **`flatMap()`**: Maps each element and then flattens the result.

#### 8. Arrays to Strings
- **`join()`**: Joins all elements into a string, separated by a specified separator.

#### 9. Advanced Operations
- **Destructuring**: Assigns array elements to variables.
- **Spread Operator**: Expands arrays into individual elements.

#### 10. Accessing Elements
- **`at()`**: Accesses elements using positive or negative indexes.

#### 11. Reversing Elements
- **`reverse()`**: Reverses the order of elements in place.
- **`toReversed()`**: Creates a new array with elements in reversed order.

#### 12. Multidimensional Arrays
- Operations on arrays of arrays.

This overview covers various methods and properties for creating, manipulating, and accessing arrays effectively in JavaScript.

The `Array.prototype.toSorted()` method provides a way to sort array elements without altering the original array. It returns a new sorted array.

**Syntax:**
```javascript
array.toSorted(compareFn);
```
- `array`: The array on which the method is called.
- `compareFn` (Optional): A function that defines the sort order. If omitted, elements are sorted as strings according to their Unicode code points.

**How it Works:**
- `compareFn` should return:
  - A negative number if the first element should come before the second.
  - A positive number if the second element should come before the first.
  - Zero if their order doesn't matter.

**Examples:**

1. **Sorting Strings:**
   ```javascript
   const colors = ['red', 'green', 'blue'];
   const sortedColors = colors.toSorted();
   console.log(colors);      // Output: ['red', 'green', 'blue']
   console.log(sortedColors); // Output: ['blue', 'green', 'red']
   ```

2. **Sorting Numbers:**
   - Ascending:
     ```javascript
     const scores = [3, 1, 2, 7, 9];
     const sortedScores = scores.toSorted((a, b) => a - b);
     console.log(scores);      // Output: [3, 1, 2, 7, 9]
     console.log(sortedScores); // Output: [1, 2, 3, 7, 9]
     ```
   - Descending:
     ```javascript
     const sortedScoresDesc = scores.toSorted((a, b) => b - a);
     console.log(sortedScoresDesc); // Output: [9, 7, 3, 2, 1]
     ```

3. **Sorting Objects by Property:**
   ```javascript
   const books = [
     { title: 'The Great Gatsby', year: 1925 },
     { title: 'To Kill a Mockingbird', year: 1960 },
     { title: '1984', year: 1949 },
     { title: 'Brave New World', year: 1932 }
   ];
   const sortedBooks = books.toSorted((a, b) => a.year - b.year);
   console.log(sortedBooks);
   // Output: [{title: 'The Great Gatsby', year: 1925}, ...]
   ```

4. **On Non-Array Objects:**
   ```javascript
   const arrayLike = { length: 3, 0: 5, 2: 4 };
   console.log(Array.prototype.toSorted.call(arrayLike));
   // Output: [4, 5, undefined]
   ```

5. **On Sparse Arrays:**
   ```javascript
   const skills = ['JS', , 'Node.js'];
   const sortedSkills = skills.toSorted();
   console.log(sortedSkills); // Output: ['JS', 'Node.js', undefined]
   ```

**Summary:**
- `toSorted()` returns a new, sorted array without modifying the original.
- It can be used on non-array objects with a `length` property and integer-keyed properties.
- It handles sparse arrays by treating empty slots as `undefined`.


In this tutorial, you learn about the JavaScript Array `length` property:

**Note index start from 0 but length always pick from 1 **

1. **Definition**: The `length` property is an unsigned, 32-bit integer always greater than the highest index in the array. It can hold up to 4,294,967,296 elements.

2. **Dense Arrays**: For arrays with contiguous indexes (e.g., `['red', 'green', 'blue']`), `length` accurately reflects the number of elements. Modifying `length` updates the count or empties the array.

3. **Sparse Arrays**: For arrays with gaps in indexes (e.g., `[10, , 20, 30]`), `length` is greater than the highest index but doesn’t show the actual number of defined elements. 

4. **Modifying Length**:
   - Setting `length` to zero empties the array.
   - Reducing `length` removes elements beyond the new length.
   - Increasing `length` makes the array sparse by adding empty slots.

**Summary**: The `length` property shows the number of elements in dense arrays and the highest index + 1 in sparse arrays. You can adjust `length` to modify array contents or structure.



#### 1. Adding/Removing Elements
- **`push()`**: Adds one or more elements to the end.
- **`unshift()`**: Adds one or more elements to the beginning.
- **`pop()`**: Removes the last element.
- **`shift()`**: Removes the first element.
- **`splice()`**: Adds, removes, or replaces elements at specified positions.
- **`slice()`**: Creates a shallow copy of a portion of the array.

In this tutorial, you learn about the JavaScript `Array.push()` method, which adds one or more elements to the end of an array and returns the new length of the array.

### Key Points:

1. **Syntax**:
   - `push(newElement)`
   - `push(newElement1, newElement2, ..., newElementN)`

2. **Examples**:
   - **Single Element**: `numbers.push(40)` adds 40 to the `numbers` array.
   - **Multiple Elements**: `numbers.push(40, 50)` adds both 40 and 50.
   - **Array Concatenation**: Use `for...of` loop or the spread operator (`...`) to append elements from one array to another.

3. **Array-like Objects**:
   - The `push()` method can be used with array-like objects using `call()` or `apply()`, which allows appending elements to objects that have a `length` property.

### Summary:
The `push()` method is used to add elements to the end of an array and can be applied to array-like objects.


In this tutorial, you'll learn how to use the JavaScript `Array.prototype.unshift()` method, which adds one or more elements to the beginning of an array and returns the new length of the array.

### Key Points:

- **Syntax**:
  - `unshift(element)`
  - `unshift(element1, element2, ..., elementN)`

- **Performance**: The `unshift()` method can be slow with large arrays because it requires reindexing the elements.

- **Examples**:
  1. **Prepend a Single Element**:
     ```javascript
     let numbers = [30, 40];
     const length = numbers.unshift(20);
     console.log(length); // 3
     console.log(numbers); // [20, 30, 40]
     ```
     
  2. **Prepend Multiple Elements**:
     ```javascript
     let numbers = [30, 40];
     const length = numbers.unshift(10, 20);
     console.log(length); // 4
     console.log(numbers); // [10, 20, 30, 40]
     ```
     
  3. **Add Elements from One Array to Another**:
     ```javascript
     let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
     let weekends = ['Sat', 'Sun'];
     days.unshift(...weekends);
     console.log(days); // ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
     ```

- **Working with Array-Like Objects**:
  You can use `unshift()` with array-like objects by borrowing it from an array:
  ```javascript
  let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(message) {
      [].unshift.call(this, message);
      return this.length;
    },
  };
  greetings.prepend('Good day');
  console.log(greetings);
  ```

### Summary:
The `unshift()` method adds elements to the start of an array and can be used with array-like objects through `call()` or `apply()`.

In this tutorial, you’ll learn about the JavaScript `Array.prototype.pop()` method, which removes the last element from an array and returns that element.

### Key Points:

- **Syntax**:
  ```javascript
  array.pop()
  ```

- **Behavior**:
  - The `pop()` method removes the last element from the array.
  - It returns the removed element.
  - If the array is empty, it returns `undefined`.
  - The length of the array is decreased by one.

- **Examples**:
  1. **Remove the Last Element**:
     ```javascript
     const numbers = [10, 20, 30];
     const last = numbers.pop();
     console.log(last); // 30
     console.log(numbers.length); // 2
     ```
     Here, `30` is removed from the array, and the length becomes 2.

  2. **Using `pop()` with an Empty Array**:
     ```javascript
     const numbers = [];
     const last = numbers.pop();
     console.log(last); // undefined
     console.log(numbers.length); // 0
     ```
     For an empty array, `pop()` returns `undefined` and the length remains 0.

  3. **Using `pop()` with Array-Like Objects**:
     You can use `pop()` with array-like objects using `call()` or `apply()`:
     ```javascript
     let greetings = {
       0: 'Hi',
       1: 'Hello',
       2: 'Howdy',
       length: 3,
       removeLast() {
         return [].pop.call(this);
       },
     };

     let lastGreeting = greetings.removeLast();
     console.log(lastGreeting); // 'Howdy'
     console.log(greetings);   // { 0: 'Hi', 1: 'Hello', length: 2, removeLast: [Function: removeLast] }
     ```

### Summary:
The `pop()` method removes the last element from an array and can be used with array-like objects by borrowing it with `call()` or `apply()`.


In this tutorial, you’ll learn about the JavaScript `Array.prototype.shift()` method, which removes the first element from an array and returns it.

### Key Points:

- **Syntax**:
  ```javascript
  array.shift()
  ```

- **Behavior**:
  - The `shift()` method removes the first element from the array.
  - It returns the removed element or `undefined` if the array is empty.
  - The length of the array is decreased by one.
  - `shift()` reindexes the remaining elements, making it slower than the `pop()` method.

- **Examples**:
  1. **Remove the First Element**:
     ```javascript
     const numbers = [10, 20, 30];
     let number = numbers.shift();
     console.log(number); // 10
     console.log(numbers); // [20, 30]
     console.log(numbers.length); // 2
     ```
     The first element (`10`) is removed, and the array length becomes 2.

  2. **Remove All Elements Using a Loop**:
     ```javascript
     const numbers = [10, 20, 30];
     let number;
     while ((number = numbers.shift()) != undefined) {
       console.log(number);
     }
     ```
     This loop removes and logs each element until the array is empty.

  3. **Using `shift()` with Array-Like Objects**:
     ```javascript
     let greetings = {
       0: 'Hi',
       1: 'Hello',
       2: 'Howdy',
       length: 3,
       removeFirst() {
         return [].shift.call(this);
       },
     };

     const greeting = greetings.removeFirst();
     console.log(greeting); // 'Hi'
     console.log(greetings); // { 0: 'Hello', 1: 'Howdy', length: 2, removeFirst: [Function: removeFirst] }
     ```
     Here, `shift()` is used with an array-like object by borrowing it with `call()`.

### Summary:
The `shift()` method removes and returns the first element from an array. It can also be applied to array-like objects using `call()` or `apply()`.


In this tutorial, you’ll learn how to use the JavaScript `Array.prototype.splice()` method to delete, insert, and replace elements in an array.

### Key Points:

- **Syntax**:
  ```javascript
  array.splice(start, deleteCount, item1, item2, ...);
  ```

- **Deleting Elements**:
  - Use `splice(position, num)` to delete elements from an array.
  - `position` specifies where to start deleting, and `num` specifies how many elements to delete.
  - The method returns an array of the deleted elements and modifies the original array.

  Example:
  ```javascript
  let scores = [1, 2, 3, 4, 5];
  let deletedScores = scores.splice(0, 3);
  console.log(scores); // [4, 5]
  console.log(deletedScores); // [1, 2, 3]
  ```

- **Inserting Elements**:
  - Use `splice(position, 0, new_element1, new_element2, ...)` to insert elements.
  - The second argument is `0`, indicating no elements will be deleted.
  - New elements are inserted starting from the specified `position`.

  Example:
  ```javascript
  let colors = ['red', 'green', 'blue'];
  colors.splice(2, 0, 'purple');
  console.log(colors); // ["red", "green", "purple", "blue"]

  colors.splice(1, 0, 'yellow', 'pink');
  console.log(colors); // ["red", "yellow", "pink", "green", "purple", "blue"]
  ```

- **Replacing Elements**:
  - Use `splice(position, num, new_element1, new_element2, ...)` to replace elements.
  - The `num` specifies how many elements to delete, and the new elements replace them starting from the `position`.

  Example:
  ```javascript
  let languages = ['C', 'C++', 'Java', 'JavaScript'];
  languages.splice(1, 1, 'Python');
  console.log(languages); // ["C", "Python", "Java", "JavaScript"]

  languages.splice(2, 1, 'C#', 'Swift', 'Go');
  console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
  ```

### Summary:
The `splice()` method allows you to delete, insert, and replace elements in an array. It modifies the original array and returns an array of deleted elements.


### 3 Pragmatic Uses of JavaScript Array `slice()` Method

The JavaScript `Array.prototype.slice()` method allows you to extract subset elements of an array and add them to a new array. Here are its practical uses:

### Introduction to `slice()` Method

- **Syntax**: 
  ```javascript
  array.slice(start, stop);
  ```
  - `start` (optional): The zero-based index to start extraction. Defaults to `0` if undefined.
  - `stop` (optional): The zero-based index to end extraction. Extracts up to `stop - 1`. If omitted, defaults to the array's length.

- **Characteristics**:
  - Returns a new array containing the extracted elements.
  - Performs a shallow copy of elements.
  - Does not modify the original array.

### Uses of `slice()` Method

1. **Cloning an Array**:
   - You can use `slice()` to create a shallow copy of an array.
   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var newNumbers = numbers.slice();
   // newNumbers is [1, 2, 3, 4, 5]
   ```

2. **Copying a Portion of an Array**:
   - Extract a portion of an array without modifying the original array.
   ```javascript
   var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
   var rgb = colors.slice(0, 3);
   console.log(rgb); // ["red", "green", "blue"]
   ```

3. **Converting Array-like Objects into Arrays**:
   - Convert `arguments` object or `NodeList` into a proper array.
   ```javascript
   function toArray() {
     return Array.prototype.slice.call(arguments);
   }
   var classification = toArray('A', 'B', 'C');
   console.log(classification); // ["A", "B", "C"]

   var p = document.querySelectorAll('p');
   var list = Array.prototype.slice.call(p);
   // list is now an array of <p> elements
   ```

### Summary

The `slice()` method is versatile for:
- Cloning arrays.
- Extracting portions of arrays.
- Converting array-like objects into arrays.

It is a powerful tool for manipulating arrays without affecting the original data.


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


####  Higher-Order Methods
- **`map()`**: Creates a new array with transformed elements.
- **`filter()`**: Creates a new array with elements that pass a test.
- **`reduce()`**: Reduces the array to a single value.
- **`every()`**: Checks if all elements pass a test.
- **`some()`**: Checks if at least one element passes a test.
- **`sort()`**: Sorts the elements.
- **`forEach()`**: Executes a function for each element.

### JavaScript Array `map()`: Transforming Elements

#### Summary
This tutorial explains how to use the JavaScript `map()` method to transform elements in an array.

#### Introduction to `map()`
- **Purpose**: The `map()` method allows you to transform elements in an array and include the results in a new array.
- **Traditional Method**: Before `map()`, you would use a for loop to iterate, transform, and push elements into a new array.

#### Example of Traditional Method
```javascript
let circles = [10, 30, 50];
let areas = [];
for (let i = 0; i < circles.length; i++) {
    let area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas); // Output: [314, 2827, 7853]
```

#### Using `map()`
- **Cleaner Code**: With `map()`, you can achieve the same result more concisely.
```javascript
function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
let areas = circles.map(circleArea);
console.log(areas); // Output: [314, 2827, 7853]
```

- **Anonymous Function**:
```javascript
let areas = circles.map(function(radius) {
    return Math.floor(Math.PI * radius * radius);
});
console.log(areas); // Output: [314, 2827, 7853]
```

- **Arrow Function**:
```javascript
let areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
console.log(areas); // Output: [314, 2827, 7853]
```

#### `map()` Method in Detail
```javascript
arrayObject.map(callback[, contextObject]);
```
- **Arguments**:
  - `callback`: A function to execute on each element.
    - `currentElement`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `map()` was called upon.
  - `contextObject` (optional): An object to use as `this` inside the callback.

- **Behavior**: `map()` does not change the original array but returns a new array with transformed elements.

#### More Examples
- **Using `Math.sqrt` as Callback**:
```javascript
let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results); // Output: [4, 5, 6]
```
- The new array contains the square roots of the numbers in the original array.

#### Summary
The `map()` method is a powerful way to transform elements of an array according to a provided function, resulting in cleaner and more efficient code.


### JavaScript Array `filter()`: Filtering Elements

#### Summary
This tutorial explains how to use the JavaScript `filter()` method to filter elements in an array.

#### Introduction to `filter()`
- **Purpose**: The `filter()` method creates a new array with elements that pass a specified test.
- **Example Setup**: Consider an array of city objects, each with `name` and `population` properties.

```javascript
let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];
```

#### Traditional Method (Using for Loop)
```javascript
let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);
// Output: [{ name: 'Los Angeles', population: 3792621 }, { name: 'New York', population: 8175133 }]
```

#### Using `filter()` Method
```javascript
let bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);
// Output: [{ name: 'Los Angeles', population: 3792621 }, { name: 'New York', population: 8175133 }]
```

- **Using Arrow Function**:
```javascript
let bigCities = cities.filter(city => city.population > 3000000);
console.log(bigCities);
```

#### `filter()` Method Details
```javascript
arrayObject.filter(callback, contextObject);
```
- **Arguments**:
  - `callback`: A function that tests each element.
    - `currentElement`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array being traversed.
  - `contextObject` (optional): An object to use as `this` inside the callback.

- **Behavior**: The `filter()` method iterates over each element, applying the callback function. It includes elements in the new array if the callback returns `true`.

#### Example with `filter()`
```javascript
let numbers = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let range = {
    lower: 1,
    upper: 10
};

let numberInRange = numbers.filter(isInRange, range);
console.log(numberInRange); // Output: [10, 1, 5]
```

#### Chaining `filter()` with Other Methods
```javascript
cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ': ' + city.population));
// Output: Philadelphia: 1526006, Houston: 2099451, Chicago: 2695598
```

#### Summary
The `filter()` method is a powerful tool for creating a new array with elements that pass a test provided by a callback function, leading to cleaner and more efficient code.

### JavaScript Array `reduce()` & `reduceRight()`: Reducing an Array into a Value

#### Summary
This tutorial explains how to use the JavaScript `reduce()` and `reduceRight()` methods to reduce an array to a single value.

#### Introduction to `reduce()`
- **Purpose**: To reduce an array to a single value by executing a reducer function on each element.
- **Example**: Summing the elements of an array.

**Traditional Method (Using for Loop)**
```javascript
let numbers = [1, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // Output: 6
```

**Using `reduce()` Method**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(sum); // Output: 6
```

#### `reduce()` Method Details
```javascript
array.reduce(callbackFn [, initialValue])
```
- **Arguments**:
  - `callbackFn`: The reducer function.
  - `initialValue` (optional): The initial value for the reduction.

**`callbackFn` Function Syntax**
```javascript
function callbackFn(previousValue, currentValue, currentIndex, array) { /**/ }
```
- **Arguments**:
  - `previousValue`: The value returned from the previous call of `callbackFn`.
  - `currentValue`: The value of the current array element.
  - `currentIndex`: The index of the current element.
  - `array`: The array being traversed.

**Example with `initialValue`**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}, 100);
console.log(sum); // Output: 106
```

**Example without `initialValue`**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
});
console.log(sum); // Output: 6
```

#### Example: Calculating Total Amount in Shopping Cart
```javascript
let shoppingCart = [
  { product: 'phone', qty: 1, price: 500 },
  { product: 'Screen Protector', qty: 1, price: 10 },
  { product: 'Memory Card', qty: 2, price: 20 },
];
let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);
console.log(total); // Output: 550
```

#### `reduceRight()` Method
- **Purpose**: Similar to `reduce()`, but processes the array from right to left.

**Example with `reduceRight()`**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduceRight(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
});
console.log(`Result: ${sum}`); // Output: 6
```

**Output Explanation**
```plaintext
{ previousValue: 3, currentValue: 2 }
{ previousValue: 5, currentValue: 1 }
Result: 6
```

### Summary
In this tutorial, you learned how to use the `reduce()` and `reduceRight()` methods in JavaScript to reduce an array into a single value by applying a reducer function from left-to-right (`reduce()`) or right-to-left (`reduceRight()`).


The tutorial explains how to check if all elements in a JavaScript array pass a specific test using the `Array.prototype.every()` method.

**Using a For Loop:**
- To test if every element in an array satisfies a condition, a typical approach is to use a for loop.
- Example: Checking if all elements in an array `numbers` are greater than zero:
  ```javascript
  let numbers = [1, 3, 5];
  let result = true;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] <= 0) {
          result = false;
          break;
      }
  }
  console.log(result); // Output: true
  ```

**Using `every()` Method:**
- The `every()` method, introduced in ES5, provides a cleaner and more concise way to perform the same check.
- Example with `every()`:
  ```javascript
  let numbers = [1, 3, 5];
  let result = numbers.every(function (e) {
      return e > 0;
  });
  console.log(result); // Output: true
  ```
- With ES6 arrow functions:
  ```javascript
  let result = numbers.every(e => e > 0);
  ```

**Syntax:**
```javascript
arrayObject.every(callback[, thisArg])
```
- **callback**: Function that tests each element, with arguments `currentElement`, `index`, and `array`.
- **thisArg** (optional): Value to use as `this` when executing the callback.

**Behavior:**
- The `every()` method returns `true` if the callback returns a truthy value for every element, otherwise it returns `false`.
- The method stops iterating once it finds an element that causes the callback to return a falsy value.

**Examples:**
- Testing if all elements are even numbers:
  ```javascript
  let isEven = numbers.every(e => e % 2 == 0); // Output: false
  ```
- Testing if all elements are odd numbers:
  ```javascript
  let isOdd = numbers.every(e => Math.abs(e % 2) == 1); // Output: true
  ```
- Using `thisArg` to test if elements are within a range:
  ```javascript
  let range = { min: 0, max: 10 };
  let isInRange = numbers.every(function (e) {
      return e >= this.min && e <= this.max;
  }, range); // Output: true
  ```

**Caution:**
- The `every()` method returns `true` for any condition when called on an empty array:
  ```javascript
  let gtZero = [].every(e => e > 0); // true
  let ltZero = [].every(e => e < 0); // true
  ```

**Conclusion:**
- The `every()` method is a powerful and concise way to check if all elements in an array pass a specified test.


### JavaScript Array `some()`: Check If at Least One Element Passes a Test

#### Summary
This tutorial covers how to use the JavaScript `some()` method to check if at least one element in an array meets a specified condition.

#### Introduction to `some()`
- **Purpose**: To determine if at least one element in the array satisfies a given condition.
- **Example**: Checking if there is any element less than 5 in an array.

**Traditional Method (Using For Loop)**
```javascript
let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = false;

for (let index = 0; index < marks.length; index++) {
    if (marks[index] < 5) {
        lessThanFive = true;
        break;
    }
}

console.log(lessThanFive); // Output: true
```

**Using `some()` Method**
```javascript
let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = marks.some(e => e < 5);
console.log(lessThanFive); // Output: true
```

#### `some()` Method Details
```javascript
arrayObject.some(callback[, thisArg])
```
- **Arguments**:
  - `callback`: The function that tests each element. If it returns `true` for any element, `some()` returns `true` immediately.
  - `thisArg` (optional): A value to use as `this` inside the callback function.

**Callback Function Syntax**
```javascript
function callback(currentElement[, currentIndex], array) { /**/ }
```
- **Arguments**:
  - `currentElement`: The current element being processed.
  - `currentIndex` (optional): The index of the current element.
  - `array` (optional): The array `some()` was called upon.

#### Examples

1. **Check if an Element Exists**
   ```javascript
   function exists(value, array) {
       return array.some(e => e === value);
   }

   let marks = [4, 5, 7, 9, 10, 2];
   console.log(exists(4, marks)); // Output: true
   console.log(exists(11, marks)); // Output: false
   ```

2. **Check if an Element is in a Range**
   ```javascript
   let marks = [4, 5, 7, 9, 10, 2];
   const range = { min: 8, max: 10 };

   let result = marks.some(function (e) {
       return e >= this.min && e <= this.max;
   }, range);

   console.log(result); // Output: true
   ```
   - **Note**: Using arrow functions in this example would not work as `this` would refer to the global context instead of the `range` object.

3. **Empty Arrays**
   ```javascript
   let result = [].some(e => e > 0);
   console.log(result); // Output: false

   result = [].some(e => e <= 0);
   console.log(result); // Output: false
   ```

### Summary
The `some()` method checks if at least one element in an array meets a condition defined by a callback function. It provides a more concise and readable way to perform this check compared to traditional looping methods.

The `Array.prototype.forEach()` method in JavaScript allows you to execute a function on every element of an array. Unlike traditional `for` loops, `forEach()` provides a more functional approach to iterate over array elements.

**Syntax:**
```javascript
array.forEach(callback [, thisArg]);
```

**Parameters:**
1. **callback**: A function that is called for each element in the array.
   - `currentElement`: The current element being processed.
   - `index` (Optional): The index of the current element.
   - `array` (Optional): The array `forEach` was called upon.

2. **thisArg** (Optional): Value to use as `this` when executing the callback.

**Key Points:**
- `forEach()` executes the callback function once per element in the array.
- It returns `undefined` and is not chainable like other methods such as `map()` or `filter()`.
- `forEach()` does not support `break` or `continue` statements. To exit early, you must throw an exception within the callback.

**Examples:**

1. **Basic Usage:**
   ```javascript
   let ranks = ['A', 'B', 'C'];
   ranks.forEach(function (e) {
       console.log(e);
   });
   // Output: A, B, C
   ```

2. **Using `thisArg`:**
   ```javascript
   function Counter() {
       this.count = 0;
       let self = this;
       return {
           increase: function () {
               self.count++;
           },
           current: function () {
               return self.count;
           },
           reset: function () {
               self.count = 0;
           }
       }
   }

   var counter = new Counter();
   var numbers = [1, 2, 3];
   var sum = 0;
   numbers.forEach(function (e) {
       sum += e;
       this.increase();
   }, counter);

   console.log(sum); // Output: 6
   console.log(counter.current()); // Output: 3
   ```

**Summary:**
- `forEach()` is used to execute a callback function on each element of an array.
- It is useful for performing operations on array elements without modifying the array.
- The method does not return a new array or support breaking out of the loop, unlike other array methods.




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
