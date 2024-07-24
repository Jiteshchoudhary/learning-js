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