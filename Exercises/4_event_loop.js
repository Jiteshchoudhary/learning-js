/***### JavaScript Event Loop

**Summary**: This tutorial explains the JavaScript event loop and how it enables JavaScript to handle concurrency despite being single-threaded.

**JavaScript Single-Threaded Model**
- JavaScript is single-threaded, meaning it can only execute one task at a time.
- The JavaScript engine executes scripts sequentially, managing execution contexts via the call stack.
- Blocking functions, like those with long execution times, can cause the webpage to hang.

**Blocking Function Example**
```javascript */
// this function is blocked the single thread
function task(message) {
    let n = 1000000000;
    while (n > 0) {
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');

// /**
// **Callbacks to Prevent Blocking**
// ```javascript **/
console.log('Start script...');

setTimeout(() => {
    task('Download a file.');
}, 1000);

console.log('Done!');
// ```
// - This uses `setTimeout` to delay the blocking task, allowing other operations to continue.
// - Output:
//   ```
//   Start script...
// Done!
//   Download a file.
//   ```

// **JavaScript Runtime**
// - The JavaScript runtime includes the JavaScript engine and other web browser components.
// - Web APIs like `setTimeout`, fetch requests, and DOM events allow for concurrent and asynchronous operations.
// - `setTimeout` creates a timer and places the task in the callback queue after the specified delay.

// **Event Loop**
// - The event loop continuously monitors the call stack and callback queue.
// - It moves functions from the callback queue to the call stack when the call stack is empty.

// **Event Loop Example**
// ```javascript
// console.log('Hi!');

// setTimeout(() => {
//     console.log('Execute immediately.');
// }, 0);

// console.log('Bye!');
// ```
// - Despite a `0` second delay, "Execute immediately" runs after "Bye!" because the event loop processes the callback queue only when the call stack is empty.
// - Output:
//   ```
// Hi!
// Bye!
//   Execute immediately.
//   ```

// **Conclusion**
// - The JavaScript event loop is crucial for managing concurrency by coordinating tasks between the call stack and callback queue.