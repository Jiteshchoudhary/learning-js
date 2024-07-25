// ### Summary: JavaScript `typeof` Operator

// #### Introduction
// - The `typeof` operator returns a string that represents the type of its operand.
// - Syntax: `typeof operand` or `typeof(operand)`
//primitive types 


console.log(typeof 'Hi');          // 'string'
console.log(typeof 100);           // 'number'
console.log(typeof 100n);          // 'bigint'
console.log(typeof false);         // 'boolean'
console.log(typeof Symbol('morning')); // 'symbol'
console.log(typeof undefined);

// - **Objects**:
//   ```javascript
console.log(typeof new Date());    // 'object'
console.log(typeof null);  // 'object' (Note: null is a primitive, but its type is reported as 'object')


//with function
function hi() {
    return 'hello';
}
console.log('type of function', typeof hi)

//with expression  parentess need to get type of expression
console.log(typeof (100 + '21'))
console.log(typeof 100 + '10');    // 'number10' (concatenation of 'number' and '10')