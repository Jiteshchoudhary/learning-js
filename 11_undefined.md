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