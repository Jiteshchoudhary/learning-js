//js has 3 types of primitve wrapper
//String Boolean Number

//javascript primitive has two value true or false either 1 or 0

const isPending = false;
const isDone = true;
console.log(isDone, isPending, typeof isDone, "and pending", typeof isPending);

// - ** Boolean() Function **: The `Boolean()` function can convert values to boolean.For example, a non - empty string is converted to`true`.
//   ```javascript
let a = Boolean('Hi');
console.log(a); // true 
let b = Boolean('');
console.log(b); //false



// - **Behavior**: Boolean objects can have properties and methods, unlike primitive booleans.
//   ```javascript
let active = new Boolean(false);
active.primitiveValue = active.valueOf();
console.log(active.primitiveValue); // false

let completed = true;
completed.name = 'primitive';
console.log(completed.name); // undefined
//   ```

// #### Differences Between Boolean Object and Primitive
// - **Type Check**: `typeof` returns `"object"` for Boolean objects and `"boolean"` for primitives.
//   ```javascript
console.log(typeof completed); // "boolean"
console.log(typeof active); // "object"
//   ```



// #### JavaScript Number Type
// - **Primitive and Object**: JavaScript has both a primitive `number` type and a `Number` reference type.
//   - **Primitive**: Used directly for numeric values.
//   - **Object**: Created using the `Number` constructor.
//     ```javascript
var numberObject = new Number(100);
console.log(numberObject.valueOf()); // 100

var aNumber = new Number(10);
console.log(aNumber.toString()); // "10"
console.log(aNumber.toString(2)); // "1010"

// - ** Formatting Methods **:
//   - ** `toFixed()` **: Formats a number with a fixed number of decimal places.
// ```javascript
var distance = 19.006;
console.log(distance.toFixed(2)); // "19.01"
// ```
// - ** `toExponential()` **: Converts a number to exponential notation.
// ```javascript
var x = 10;
console.log(x.toExponential()); // "1e+1"
// ```
//     - ** `toPrecision()` **: Formats a number to a specified number of significant digits.
// ```javascript
let x = 9.12345;
console.log(x.toPrecision(4)); // "9.123"
console.log(x.toPrecision(2)); // "9.1"
// ```

// #### Primitive vs.Number Object
// - ** Type and Instance Checks **:
// - `typeof`: `"object"` for `Number` object, `"number"` for primitive.
// ```javascript
let numberObject = new Number(10);
let number = 10;
console.log(typeof numberObject); // "object"
console.log(typeof number); // "number"
// ```
// - `instanceof`: Returns `true` for `Number` objects and`false` for primitives.
// ```javascript
console.log(numberObject instanceof Number); // true
console.log(number instanceof Number); // false
// ```
//
// This tutorial covers the JavaScript `Number` type, methods for converting and formatting numbers, and the differences between `Number` objects and primitive number values.