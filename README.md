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


### Summary: JavaScript `Array.join()` Method

**Introduction:**
The `join()` method concatenates all elements of an array into a single string, separated by a specified separator.

**Syntax:**
```javascript
Array.prototype.join([separator])
```
- **separator**: An optional string to separate each pair of adjacent elements. Defaults to a comma (`,`) if not provided.

**Behavior:**
- If the array has one element, `join()` returns that element as a string without using the separator.
- If the array is empty, `join()` returns an empty string.
- Non-string elements are converted to strings before joining.
- `undefined`, `null`, and empty array elements are converted to an empty string.

**Examples:**

1. **Joining CSS Classes:**
   ```javascript
   const cssClasses = ['btn', 'btn-primary', 'btn-active'];
   const btnClass = cssClasses.join(' ');
   console.log(btnClass); // Output: "btn btn-primary btn-active"
   ```

2. **Replacing All Occurrences of a String:**
   ```javascript
   const title = 'JavaScript array join example';
   const url = title.split(' ').join('-').toLowerCase();
   console.log(url); // Output: "javascript-array-join-example"
   ```

   **Steps:**
   1. Split the title string by spaces into an array using `split()`.
   2. Join all elements of the array into a string with hyphens (`-`) using `join()`.
   3. Convert the resulting string to lowercase using `toLowerCase()`.

**Conclusion:**
The `join()` method is used to concatenate array elements into a single string with a specified separator, providing flexibility in formatting and transforming arrays into strings.

### Summary: ES6 Destructuring Assignment

**Introduction:**
ES6 introduced the destructuring assignment, which allows you to unpack properties from objects or elements from arrays into distinct variables.

**Array Destructuring:**
- Example function returning an array:
  ```javascript
  function getScores() {
     return [70, 80, 90];
  }
  ```
- Assigning array elements to variables pre-ES6:
  ```javascript
  let scores = getScores();
  let x = scores[0], y = scores[1], z = scores[2];
  ```

- Using ES6 destructuring:
  ```javascript
  let [x, y, z] = getScores();
  console.log(x); // 70
  console.log(y); // 80
  console.log(z); // 90
  ```

- Handling arrays with fewer elements:
  ```javascript
  function getScores() {
     return [70, 80];
  }
  let [x, y, z] = getScores();
  console.log(z); // undefined
  ```

- Discarding extra elements:
  ```javascript
  function getScores() {
     return [70, 80, 90, 100];
  }
  let [x, y, z] = getScores();
  ```

**Rest Syntax:**
- Capturing remaining elements:
  ```javascript
  let [x, y, ...args] = getScores();
  console.log(args); // [90, 100]
  ```

**Separate Assignment:**
- Destructuring separate from declaration:
  ```javascript
  let a, b;
  [a, b] = [10, 20];
  console.log(a); // 10
  console.log(b); // 20
  ```

**Default Values:**
- Setting default values:
  ```javascript
  function getItems() {
      return [10, 20];
  }
  let [, , thirdItem = 0] = getItems();
  console.log(thirdItem); // 0
  ```

- Handling undefined elements:
  ```javascript
  let a, b;
  [a = 1, b = 2] = [10];
  console.log(a); // 10
  console.log(b); // 2
  ```

- Handling non-iterable return values:
  ```javascript
  function getItems() {
      return null;
  }
  let [a = 10, b = 20] = getItems() || [];
  console.log(a); // 10
  console.log(b); // 20
  ```

**Nested Array Destructuring:**
- Destructuring nested arrays:
  ```javascript
  function getProfile() {
      return ['John', 'Doe', ['Red', 'Green', 'Blue']];
  }
  let [firstName, lastName, [color1, color2, color3]] = getProfile();
  console.log(color1, color2, color3); // Red Green Blue
  ```

**Applications:**
1. **Swapping Variables:**
   ```javascript
   let a = 10, b = 20;
   [a, b] = [b, a];
   console.log(a); // 20
   console.log(b); // 10
   ```

2. **Functions Returning Multiple Values:**
   ```javascript
   function stat(a, b) {
       return [a + b, (a + b) / 2, a - b];
   }
   let [sum, average, difference] = stat(20, 10);
   console.log(sum, average, difference); // 30, 15, 10
   ```

**Conclusion:**
The ES6 destructuring assignment simplifies extracting array elements into individual variables, supports default values, handles nested arrays, and enables practical applications like variable swapping and handling functions returning multiple values.


### Summary: JavaScript Spread Operator

**Introduction:**
The JavaScript spread operator, represented by three dots (`...`), allows you to spread elements of an iterable object like an array, map, or set into a new array or function arguments.

**Key Concepts:**
- **Spread Operator Usage:**
  - Example: 
    ```javascript
    const odd = [1, 3, 5];
    const combined = [2, 4, 6, ...odd];
    console.log(combined); // [2, 4, 6, 1, 3, 5]
    ```
  - Unpacks elements of an iterable object.
  - Differs from the rest parameter, which packs elements into an array.

- **Spread Operator vs. Rest Parameter:**
  - **Spread Operator:** Unpacks elements.
  - **Rest Parameter:** Packs elements into an array.

- **Examples:**
  - Adding elements anywhere:
    ```javascript
    const odd = [1, 3, 5];
    const combined = [...odd, 2, 4, 6];
    console.log(combined); // [1, 3, 5, 2, 4, 6]
    ```

  - **Object Spread (ES2018):**
    ```javascript
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
    console.log(obj2); // { a: 1, b: 2, c: 3 }
    ```

**Applications:**
1. **Using Spread with Functions:**
   - Replacing `apply()`:
     ```javascript
     function compare(a, b) {
         return a - b;
     }
     let result = compare(...[1, 2]);
     console.log(result); // -1
     ```

2. **Array Manipulation:**
   - **Constructing Array Literals:**
     ```javascript
     let initialChars = ['A', 'B'];
     let chars = [...initialChars, 'C', 'D'];
     console.log(chars); // ["A", "B", "C", "D"]
     ```

   - **Concatenating Arrays:**
     ```javascript
     let numbers = [1, 2];
     let moreNumbers = [3, 4];
     let allNumbers = [...numbers, ...moreNumbers];
     console.log(allNumbers); // [1, 2, 3, 4]
     ```

   - **Copying Arrays:**
     ```javascript
     let scores = [80, 70, 90];
     let copiedScores = [...scores];
     console.log(copiedScores); // [80, 70, 90]
     ```

3. **Spread Operator with Strings:**
   - Example:
     ```javascript
     let chars = ['A', ...'BC', 'D'];
     console.log(chars); // ["A", "B", "C", "D"]
     ```

**Summary:**
- The spread operator (`...`) unpacks elements of iterable objects into a list.
- It can be used to clone, merge, or concatenate arrays, and to pass array elements as function arguments.
- The rest parameter also uses `...` but packs elements into an array.

### JavaScript String Methods

**This guide provides methods for effective string manipulation in JavaScript:**

**1. Searching:**
- **`search()`** – Locate a substring using a regular expression.
- **`indexOf()`** – Get the index of the first occurrence of a substring.
- **`lastIndexOf()`** – Find the index of the last occurrence of a substring.
- **`includes()`** – Check if a string contains a substring.
- **`startsWith()`** – Check if a string starts with another string.
- **`endsWith()`** – Determine if a string ends with another string.

**2. Trimming:**
- **`trim()`** – Remove whitespace from both ends of a string.
- **`trimStart()`** – Remove leading whitespace.
- **`trimEnd()`** – Remove trailing whitespace.

**3. Padding:**
- **`padStart()`** – Pad a string from the start.
- **`padEnd()`** – Pad a string from the end.

**4. Extracting:**
- **`split()`** – Split a string into an array of substrings.
- **`substring()`** – Extract a substring between specified indices.
- **`slice()`** – Extract a part of a string based on start and end indices.

**5. Concatenating & Interpolating:**
- **`concat()`** – Concatenate multiple strings into a new string.
- **Template literals** – Substitute variables in a string.

**6. Replacing:**
- **`replace()`** – Replace a substring with a new one.
- **`replaceAll()`** – Replace all occurrences of a substring that matches a pattern.

**7. Changing Cases:**
- **`toUpperCase()`** – Convert all characters to uppercase.
- **`toLowerCase()`** – Convert all characters to lowercase.

### JavaScript String search()

**Summary:** This tutorial explains how to use the JavaScript `String.search()` function to locate a substring within a string using a regular expression.

**Introduction to the `search()` function:**
- The `search()` method takes a regular expression and returns the index of the first match in a string.
  
  **Syntax:**
  ```javascript
  let index = str.search(regexp);
  ```
  - `regexp`: A regular expression. If a non-RegExp is passed, it converts that value to a RegExp.
  - Returns `-1` if no match is found.

**Examples:**
1. **Finding the first capital letter:**
    ```javascript
    let re = /[A-Z]/;
    let str = 'hi There! How are you?';
    let index = str.search(re);
    console.log(index); // Output: 3
    ```
    - This returns `3`, which is the index of the capital letter "T".

2. **Finding a number in the string:**
    ```javascript
    let re = /[0-9]/;
    let str = 'Hello, JavaScript!';
    let index = str.search(re);
    console.log(index); // Output: -1
    ```
    - This returns `-1` because there is no number in the string.

**Summary:**
Use the JavaScript `String.search()` method to find the index of the first match in a string based on a regular expression. If no match is found, it returns `-1`.


### JavaScript String `indexOf()` Summary

The `indexOf()` method in JavaScript is used to find the index of the first occurrence of a substring within a string. If the substring is not found, it returns -1.

**Syntax**:
```javascript
let index = str.indexOf(substr, [, fromIndex]);
```
- `substr`: The substring to search for.
- `fromIndex` (optional): The position to start the search. Defaults to 0.

**Characteristics**:
- The search is case-sensitive.
- To find the last occurrence of a substring, use the `lastIndexOf()` method.

**Examples**:

1. **Finding the first occurrence of a substring**:
    ```javascript
    let str = 'finding substring in string';
    let index = str.indexOf('str');
    console.log(index); // Output: 11
    ```

2. **Counting occurrences of a substring**:
    ```javascript
    let str = 'You do not know what you do not know until you know.';
    let substr = 'know';

    let count = 0;
    let index = str.indexOf(substr);
    while (index !== -1) {
        count++;
        index = str.indexOf(substr, index + 1);
    }

    console.log(count); // Output: 3
    ```

3. **Case sensitivity**:
    ```javascript
    let str = 'JS indexOf';
    let substr = 'js';
    let index = str.indexOf(substr);
    console.log(index); // Output: -1
    ```

    **Case-insensitive search**:
    ```javascript
    let str = 'JS indexOf';
    let substr = 'js';
    let index = str.toLowerCase().indexOf(substr.toLowerCase());
    console.log(index); // Output: 0
    ```

**Summary**:
- `indexOf()` returns the index of the first occurrence of a substring in a string or -1 if not found.
- The search is case-sensitive. For a case-insensitive search, convert both the string and the substring to lowercase.

### JavaScript String `lastIndexOf()` Summary

The `lastIndexOf()` method in JavaScript is used to find the last occurrence of a substring within a string, searching backwards from a specified index or from the end of the string if no index is provided. If the substring is not found, it returns -1.

**Syntax**:
```javascript
str.lastIndexOf(substr, [, fromIndex]);
```
- `substr`: The substring to search for.
- `fromIndex` (optional): The position to start the search backwards. Defaults to +Infinity.

**Characteristics**:
- The search starts from the `fromIndex` and moves backward.
- If `fromIndex` is not provided, the search starts from the end of the string.
- If `fromIndex` is greater than or equal to `str.length`, the entire string is searched.
- If `fromIndex` is less than zero, it behaves as if `fromIndex` is zero.
- The search is case-sensitive.

**Examples**:

1. **Finding the last occurrence of a substring**:
    ```javascript
    let str = 'JavaScript';
    let index = str.lastIndexOf('a');
    console.log(index); // Output: 3
    ```

2. **Using `fromIndex` to start the search**:
    ```javascript
    let str = 'JavaScript';
    let index = str.lastIndexOf('a', 2);
    console.log(index); // Output: 1
    ```

3. **Case sensitivity**:
    ```javascript
    let str = 'Hello, World!';
    let substr = 'L';
    let index = str.lastIndexOf(substr);
    console.log(index); // Output: -1
    ```

    **Case-insensitive search**:
    ```javascript
    let str = 'Hello, World!';
    let substr = 'L';
    let index = str.toLowerCase().lastIndexOf(substr.toLowerCase());
    console.log(index); // Output: 10
    ```

**Summary**:
- `lastIndexOf()` returns the index of the last occurrence of a substring in a string or -1 if not found.
- The search is case-sensitive and searches backward from the end of the string or from the specified `fromIndex`. For a case-insensitive search, convert both the string and substring to lowercase before using `lastIndexOf()`.

### JavaScript String `includes()` Method Summary

The `includes()` method in JavaScript checks if one string contains another string, returning `true` if found and `false` otherwise.

**Syntax**:
```javascript
string.includes(searchString [, position])
```
- `searchString`: The string to search for.
- `position` (optional): The position to start searching from. Defaults to 0.

**Characteristics**:
- The search is case-sensitive.

**Examples**:

1. **Basic usage**:
    ```javascript
    let email = 'admin@example.com';
    console.log(email.includes('@')); // Output: true
    ```

2. **Case-sensitive search**:
    ```javascript
    let str = 'JavaScript String';
    console.log(str.includes('Script')); // Output: true
    console.log(str.includes('script')); // Output: false
    ```

3. **Using the position parameter**:
    ```javascript
    let str = 'JavaScript String';
    console.log(str.includes('Script', 5)); // Output: false
    ```

**Summary**:
- The `includes()` method checks if a string contains another string, returning `true` or `false`.
- It is case-sensitive and can start the search from a specified position.



### JavaScript String `startsWith()` Method Summary

The `startsWith()` method checks if a string begins with a specified substring, returning `true` if it does and `false` otherwise.

**Syntax**:
```javascript
string.startsWith(searchString [, position])
```
- `searchString`: The substring to check for at the start of the string.
- `position` (optional): The position within the string to start the search. Defaults to 0.

**Characteristics**:
- The search is case-sensitive.

**Examples**:

1. **Basic usage**:
    ```javascript
    const title = 'Jack and Jill Went Up the Hill';
    console.log(title.startsWith('Jack')); // Output: true
    ```

2. **Case sensitivity**:
    ```javascript
    console.log(title.startsWith('jack')); // Output: false
    ```

3. **Using the position parameter**:
    ```javascript
    console.log(title.startsWith('Jill', 9)); // Output: true
    ```

**Summary**:
- `startsWith()` is used to check if a string starts with a specific substring, with an optional starting position for the search. The method is case-sensitive.


### JavaScript String `endsWith()` Method Summary

The `endsWith()` method checks if a string ends with a specified substring, returning `true` if it does and `false` otherwise.

**Syntax**:
```javascript
string.endsWith(searchString [, length])
```
- `searchString`: The substring to check for at the end of the string.
- `length` (optional): The length of the string to consider for the check. Defaults to the full length of the string.

**Characteristics**:
- The search is case-sensitive.

**Examples**:

1. **Basic usage**:
    ```javascript
    const title = 'Jack and Jill Went Up the Hill';
    console.log(title.endsWith('Hill')); // Output: true
    ```

2. **Case sensitivity**:
    ```javascript
    console.log(title.endsWith('hill')); // Output: false
    ```

3. **Using the length parameter**:
    ```javascript
    console.log(title.endsWith('Up', 21)); // Output: true
    ```

**Summary**:
- `endsWith()` is used to check if a string ends with a specific substring, with an optional length parameter to specify the length of the string to be checked. The method is case-sensitive.


### JavaScript String `trim()` Method Summary

The `trim()` method removes whitespace characters from both ends of a string, returning a new string without modifying the original.

**Syntax**:
```javascript
let resultString = str.trim();
```
- Whitespace characters include spaces, tabs, and non-breaking spaces.

**Characteristics**:
- `trim()` does not alter the original string.
- For removing whitespace from only the beginning or end, use `trimStart()` or `trimEnd()`.

**Example**:
```javascript
let str = '  JS trim  ';
let result = str.trim();
console.log(result); // Output: "JS trim"
```

**Summary**:
- Use `trim()` to remove whitespace from both the start and end of a string.


### JavaScript String `trimStart()` Method Summary

The `trimStart()` method removes whitespace characters from the beginning of a string, returning a new string with the leading whitespace removed. It does not modify the original string.

**Syntax**:
```javascript
let newString = originalString.trimStart();
```
- Whitespace characters include spaces, tabs, carriage returns, new lines, vertical tabs, and form feeds.

**Characteristics**:
- `trimStart()` does not alter the original string.
- `trimLeft()` is an alias for `trimStart()` and provides the same functionality.

**Example**:
```javascript
const str = '   JavaScript   ';
const result = str.trimStart();

console.log({ str });    // Output: { str: '   JavaScript   ' }
console.log({ result }); // Output: { result: 'JavaScript   ' }
```

**Summary**:
- Use `trimStart()` to remove whitespace from the beginning of a string. `trimLeft()` can be used interchangeably with `trimStart()`.


### JavaScript String `trimEnd()` Method Summary

The `trimEnd()` method removes whitespace characters from the end of a string, returning a new string with the trailing whitespace removed. It does not modify the original string.

**Syntax**:
```javascript
let newString = originalString.trimEnd();
```
- Whitespace characters include spaces, tabs, carriage returns, new lines, vertical tabs, and form feeds.

**Characteristics**:
- `trimEnd()` does not alter the original string.
- `trimRight()` is an alias for `trimEnd()` and offers the same functionality.

**Example**:
```javascript
const str = '   JavaScript   ';
const result = str.trimEnd();

console.log({ str });    // Output: { str: '   JavaScript   ' }
console.log({ result }); // Output: { result: '   JavaScript' }
```

**Summary**:
- Use `trimEnd()` to remove whitespace from the end of a string. `trimRight()` can be used interchangeably with `trimEnd()`.

### Padding a String to a Certain Length with Another String

**Summary**: Learn how to use `padStart()` and `padEnd()` methods to pad a string to a specified length with another string.

**`String.prototype.padStart()`**:
- Pads the beginning of a string to a certain length.
- **Syntax**: `string.padStart(padLength [, padString])`
  - `padLength`: Total length of the resulting string after padding.
  - `padString` (optional): The string used for padding. Defaults to a space (`' '`). If `padString` is longer than needed, only the left-most part is used.

**Examples**:
1. Padding with zeros:
    ```javascript
    let str = '1234'.padStart(8, '0');
    console.log(str); // "00001234"
    ```
2. Padding with spaces (default padding):
    ```javascript
    let str = 'abc'.padStart(5);
    console.log(str); // "  abc"
    ```

**`String.prototype.padEnd()`**:
- Pads the end of a string to a certain length.
- **Syntax**: `string.padEnd(padLength [, padString])`
  - `padLength`: Total length of the resulting string after padding.
  - `padString` (optional): The string used for padding. Defaults to a space (`' '`). If `padString` is longer than needed, only the left-most part is used.

**Examples**:
1. Padding with spaces (default padding):
    ```javascript
    let str = 'abc'.padEnd(5);
    console.log(str); // "abc  "
    ```
2. Padding with asterisks:
    ```javascript
    let str = 'abc'.padEnd(5, '*');
    console.log(str); // "abc**"
    ```
3. Padding with a string longer than needed:
    ```javascript
    let str = 'abc'.padEnd(5, 'def');
    console.log(str); // "abcde"
    ```

**Summary**:
- `padStart()` pads the beginning of a string.
- `padEnd()` pads the end of a string.
- Both methods ensure the final string reaches the specified length and use the provided padding string or a default space if none is provided.

### JavaScript String `split()` Method Summary

**Purpose**: The `split()` method divides a string into an array of substrings based on a specified separator.

**Syntax**:
```javascript
string.split([separator, [, limit]]);
```
- **separator** (optional): Specifies where to split the string. Can be a string or a regular expression. If omitted or not found, the entire string is returned as a single element.
- **limit** (optional): An integer that limits the number of substrings in the resulting array. If `limit` is 0, returns an empty array. If `limit` is 1, returns an array with the original string.

**Examples**:

1. **Splitting into Words**:
   ```javascript
   let str = 'JavaScript String split()';
   let substrings = str.split(' ');
   console.log(substrings); // ["JavaScript", "String", "split()"]
   ```
   - Splits the string into an array of words using a space as the separator.

2. **Limiting Number of Substrings**:
   ```javascript
   let str = 'JavaScript String split()';
   let substrings = str.split(' ', 2);
   console.log(substrings); // ["JavaScript", "String"]
   ```
   - Limits the result to the first two substrings.

3. **Using Regular Expressions**:
   ```javascript
   let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
   let sentences = paragraph.split(/[!,?,.]/);
   console.log(sentences); // ["Good Morning", " How are you", " This is John", " John is my friend", ""]
   ```
   - Splits the string based on punctuation marks.

4. **Including Matched Results**:
   ```javascript
   let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
   let sentences = paragraph.split(/([!,?,.])/);
   console.log(sentences); // ["Good Morning", "!", " How are you", "?", " This is John", ".", " John is my friend", ".", ""]
   ```
   - Includes punctuation marks in the resulting array.

**Summary**:
- Use `split()` to break a string into an array of substrings using a separator.
- The `limit` parameter controls the number of substrings returned.


### JavaScript String `substring()` Method Summary

**Purpose**: The `substring()` method extracts a portion of a string between two specified indexes.

**Syntax**:
```javascript
str.substring(startIndex [, endIndex]);
```

- **`startIndex`**: The index of the first character to include in the substring.
- **`endIndex`** (optional): The index of the first character to exclude from the substring. If omitted, the substring extends to the end of the string.

**Behavior**:
- If `startIndex` equals `endIndex`, an empty string is returned.
- If `startIndex` is greater than `endIndex`, the method swaps them.
- If `startIndex` or `endIndex` is less than 0 or greater than the string’s length, it is treated as 0 or the string’s length, respectively.
- If any parameter is `NaN`, it is treated as 0.

**Examples**:

1. **Extracting a Substring from the Beginning**:
   ```javascript
   let str = 'JavaScript Substring';
   let substring = str.substring(0, 10);
   console.log(substring); // "JavaScript"
   ```

2. **Extracting a Substring to the End**:
   ```javascript
   let str = 'JavaScript Substring';
   let substring = str.substring(11);
   console.log(substring); // "Substring"
   ```

3. **Extracting Domain from an Email**:
   ```javascript
   let email = 'john.doe@gmail.com';
   let domain = email.substring(email.indexOf('@') + 1);
   console.log(domain); // "gmail.com"
   ```

**Summary**:
- Use `substring()` to get a part of a string between specified start and end indexes.
- If no end index is provided, the substring extends to the end of the string.

### JavaScript String `slice()` Method Summary

**Purpose**: The `slice()` method extracts a portion of a string and returns it as a new substring.

**Syntax**:
```javascript
str.slice(start [, end]);
```

**Parameters**:
- **`start`**: The zero-based index where extraction begins. If negative, it starts from `str.length + start`.
- **`end`** (optional): The zero-based index where extraction ends (excluding this index). If negative, it is treated as `str.length + end`. If omitted or greater than the string length, extraction goes to the end of the string.

**Behavior**:
- If `start` is omitted or not a number, extraction starts from the beginning of the string.
- If `end` is omitted, extraction extends to the end of the string.
- If `start` is greater than or equal to the string length, or `end` is before `start`, the result is an empty string.

**Examples**:

1. **Extracting from a Specific Start**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(3);
   console.log(substr); // "lo"
   ```

2. **Using Negative Start**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(-3);
   console.log(substr); // "llo"
   ```

3. **Extracting with Start and End**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(0, 2);
   console.log(substr); // "He"
   ```

4. **Using Negative End**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(0, -2);
   console.log(substr); // "Hel"
   ```

5. **Extracting with Out of Range End**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(2, 6);
   console.log(substr); // "llo"
   ```

6. **Practical Example (Email Local Part)**:
   ```javascript
   let email = 'john@example.com';
   let localPart = email.slice(0, email.indexOf('@'));
   console.log(localPart); // "john"
   ```

**Summary**:
- Use `slice()` to extract a substring from a string between specified start and end indexes.


### JavaScript String `concat()` Method Summary

**Purpose**: The `concat()` method combines multiple strings into a single new string.

**Syntax**:
```javascript
string.concat(str1, [...strN]);
```

**Behavior**:
- **Parameters**: Accepts one or more strings to concatenate.
- **Non-String Arguments**: Converts non-string arguments to strings before concatenating.

**Recommendations**:
- For better performance, use the `+` or `+=` operator for string concatenation instead of `concat()`.

**Examples**:

1. **Concatenating Strings**:
   ```javascript
   let greeting = 'Hi';
   let message = greeting.concat(' ', 'John');
   console.log(message); // "Hi John"
   ```

2. **Concatenating an Array of Strings**:
   ```javascript
   let colors = ['Blue', ' ', 'Green', ' ', 'Teal'];
   let result = ''.concat(...colors);
   console.log(result); // "Blue Green Teal"
   ```

3. **Concatenating Non-String Arguments**:
   ```javascript
   let str = ''.concat(1, 2, 3);
   console.log(str); // "123"
   ```

**Summary**:
- The `concat()` method joins a list of strings into one new string.
- Prefer using `+` or `+=` for string concatenation for better performance.


### JavaScript String `repeat()` Method Summary

**Purpose**: The `repeat()` method creates a new string by repeating the original string a specified number of times.

**Syntax**:
```javascript
str.repeat(count)
```

**Parameters**:
- **count**: An integer specifying the number of times to repeat the string. It must be greater than 0 and less than +Infinity.

**Behavior**:
- If `count` is `0`, the method returns an empty string.
- If `count` is negative or +Infinity, the method throws a `RangeError`.

**Examples**:

1. **Basic Usage**:
   ```javascript
   let result = '*'.repeat(1);
   console.log(result); // "*"

   result = '*'.repeat(3);
   console.log(result); // "***"

   result = '*'.repeat(0);
   console.log(result); // ""
   ```

2. **Handling Negative Count**:
   ```javascript
   let result = '*'.repeat(-1);
   // Throws: RangeError: Invalid count value
   ```

3. **Using with Non-String Objects**:
   ```javascript
   const message = {
     toString() {
       return 'Hi';
     },
   };

   const result = String.prototype.repeat.call(message, 3);
   console.log(result); // "HiHiHi"
   ```

**Summary**:
- Use `repeat()` to repeat a string a specified number of times.
- The method is versatile and can be applied to objects with a `toString()` method.


### JavaScript String `replace()` Method Summary

- **Purpose**: The `replace()` method is used to create a new string by replacing a specified substring with a new one.
- **Syntax**: `let newStr = str.replace(substr, newSubstr);`
  - `str`: The original string.
  - `substr`: The substring to be replaced.
  - `newSubstr`: The new substring that will replace `substr`.

- **Behavior**:
  - The method returns a new string and does not modify the original string.
  - By default, only the first occurrence of the substring is replaced.

- **Example**:
  ```javascript
  let str = 'JS will, JS will rock you!';
  let newStr = str.replace('JS', 'JavaScript');
  console.log(newStr); // Output: 'JavaScript will, JS will rock you!'
  ```

- **Replacing All Occurrences**:
  - Use regular expressions with the global flag (`g`).
  - **Example**:
    ```javascript
    let newStr = str.replace(/JS/g, 'JavaScript');
    console.log(newStr); // Output: 'JavaScript will, JavaScript will rock you!'
    ```

- **Case-Insensitive Replacement**:
  - Use the ignore flag (`i`) in regular expressions.
  - **Example**:
    ```javascript
    let newStr = str.replace(/JS/gi, 'JavaScript');
    console.log(newStr); // Output: 'JavaScript will, JavaScript will rock you!'
    ```

- **Using a Replacement Function**:
  - Pass a function instead of a string as the second argument to dynamically determine the replacement.
  - **Example**:
    ```javascript
    let newStr = str.replace(/apples|bananas/gi, (match) => match.toUpperCase());
    console.log(newStr); // Output: 'I like to eat, eat, eat APPLES and BANANAS'
    ```

- **Summary**:
  - Use `replace()` to substitute a substring with a new one.
  - For multiple replacements or pattern matching, use regular expressions.


  ### JavaScript String `replaceAll()` Method Summary

- **Purpose**: The `replaceAll()` method replaces all occurrences of a substring or pattern in a string with a new string.

- **Syntax**: `String.prototype.replaceAll(pattern, replacement)`
  - `pattern`: Can be a string or a regular expression (with a global flag `g` if it's a regex).
  - `replacement`: Can be a string or a callback function that determines the replacement.

- **Behavior**:
  - Returns a new string with all matches of the pattern replaced.
  - Does not modify the original string.

- **Callback Function**:
  - If `replacement` is a function, it receives three arguments:
    - `match`: The matched substring.
    - `offset`: The position of the match within the original string.
    - `str`: The original string.

- **Examples**:

  1. **Simple Replacement**:
     ```javascript
     let str = 'JS will, JS will, JS will rock you.';
     let newStr = str.replaceAll('JS', 'JavaScript');
     console.log(newStr); // Output: 'JavaScript will, JavaScript will, JavaScript will rock you.'
     ```

  2. **Using a Callback Function**:
     ```javascript
     let str = 'JS will, Js will, js will rock you.';
     let pattern = /js/gi;

     let newStr = str.replaceAll(pattern, (match, offset, str) => {
         if (match === 'JS') return 'JavaScript';
         if (match === 'Js') return 'Javascript';
         if (match === 'js') return 'javascript';
         return '';
     });

     console.log(newStr); // Output: 'JavaScript will, Javascript will, javascript will rock you.'
     ```

- **Summary**: Use `replaceAll()` to replace every occurrence of a substring or pattern with a new string, providing a straightforward way to perform global replacements.


### JavaScript `toUpperCase()` Method Summary

- **Purpose**: The `toUpperCase()` method converts all characters in a string to uppercase and returns a new string.

- **Syntax**: `str.toUpperCase()`
  - `str`: The original string to be converted.

- **Behavior**:
  - Returns a new string with all characters in uppercase.
  - The original string remains unchanged, as strings are immutable.

- **Example**:
  ```javascript
  const message = 'Hello';
  const newMessage = message.toUpperCase();
  console.log(newMessage); // Output: 'HELLO'
  ```

- **Handling `null` or `undefined`**:
  - Calling `toUpperCase()` on `null` or `undefined` throws a `TypeError`.
  - To avoid errors, use optional chaining:
    ```javascript
    console.log(getUserRanking(-1)?.toUpperCase()); // Output: undefined
    ```

- **Converting Non-Strings**:
  - You can use `toUpperCase()` on non-string values by using `String.prototype.toUpperCase.call()`:
    ```javascript
    const completed = true;
    const result = String.prototype.toUpperCase.call(completed);
    console.log(result); // Output: 'TRUE'
    ```

- **Summary**: Use the `toUpperCase()` method to convert all characters in a string to uppercase.

### JavaScript `toLowerCase()` Method Summary

- **Purpose**: The `toLowerCase()` method converts all characters in a string to lowercase and returns a new string.

- **Syntax**: `str.toLowerCase()`
  - `str`: The original string to be converted.

- **Behavior**:
  - Returns a new string with all characters in lowercase.
  - The original string remains unchanged, as strings are immutable.

- **Example**:
  ```javascript
  const message = 'Hi';
  const newMessage = message.toLowerCase();
  console.log(newMessage); // Output: 'hi'
  ```

- **Handling `null` or `undefined`**:
  - Calling `toLowerCase()` on `null` or `undefined` throws a `TypeError`.
  - To avoid errors, use optional chaining:
    ```javascript
    console.log(findUserById(-1)?.toLowerCase()); // Output: undefined
    ```

- **Converting Non-Strings**:
  - You can use `toLowerCase()` on non-string values by using `String.prototype.toLowerCase.call()`:
    ```javascript
    const user = {
      username: 'JOE',
      toString() {
        return this.username;
      },
    };

    const username = String.prototype.toLowerCase.call(user);
    console.log(username); // Output: 'joe'
    ```

- **Summary**: Use the `toLowerCase()` method to convert all characters in a string to lowercase.