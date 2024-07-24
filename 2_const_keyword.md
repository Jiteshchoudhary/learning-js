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