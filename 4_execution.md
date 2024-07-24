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