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