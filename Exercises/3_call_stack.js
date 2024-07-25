/***
 * ### JavaScript Call Stack

**Introduction**
- The call stack helps the JavaScript engine keep track of its place in code, identifying the currently running function and the functions invoked within it.
- It manages both global and function execution contexts using a Last-In-First-Out (LIFO) principle.

**Operation**
1. **Global Execution Context**: Created and pushed onto the call stack when a script executes.
2. **Function Calls**: Each function call results in a new execution context being created and pushed onto the call stack.
3. **Nested Functions**: Function calls within functions create new execution contexts, which are also pushed onto the stack.
4. **Completion of Function**: Once a function completes, its execution context is popped off the stack.
5. **End of Execution**: The script stops when the call stack is empty.

**Example Code 1: Basic Function Calls**
```javascript
***/
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);
console.log(x); // 15

/**
**Execution Steps**
1. **Global Context**: Placed on the call stack.
2. **Function Call (average)**: `average()` execution context is pushed onto the stack.
3. **Function Call (add)**: `add()` execution context is pushed onto the stack.
4. **Completion of `add()`**: `add()` context is popped off the stack.
5. **Completion of `average()`**: `average()` context is popped off the stack.
6. **Empty Stack**: The script stops as the call stack is empty.
***/

/**Example Code 2: Stack Overflow** **/
// ```javascript
function fn() {
    fn();
}

fn(); // stack overflow
/**
```
- The call stack has a fixed size based on the host environment.
- Exceeding this size, such as with a recursive function without an exit condition, causes a stack overflow error.

**Asynchronous JavaScript**
- JavaScript is single-threaded with one call stack, meaning it executes tasks synchronously (one at a time).
- Asynchronous tasks are managed with an event loop, allowing other tasks to be handled while waiting for a task to complete, such as fetching data from a server.

**Summary**
- The JavaScript engine uses a call stack to manage execution contexts, operating on a LIFO principle.
- When the stack is empty, the script stops.
- Exceeding the stack size results in a stack overflow error.
- Asynchronous tasks are managed by an event loop, allowing for non-blocking operations.

**/