//flating the array

//aray flat method is used for flat the array 

const nestedArray = [12, [23, [4343, [34]]]];

//now flat the array 
const flattenArray = nestedArray.flat(Infinity); //need to specify the depth
console.log("flattenArray", flattenArray);


//we can also flat the nested Array with the help of the recuression

function flatArray(array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (Array.isArray(element)) {
            flatArray(element);
        } else {
            tempArray.push(element);
        }
    }
    return tempArray;
}
console.log("flatArray", flatArray(flattenArray));


// ### Summary: JavaScript `Array.flatMap()` Method

//     ** Introduction:**
//         The`flatMap()` method combines the functionalities of `map()` and`flat()`(with a depth of 1). It maps each element in an array using a mapping function and then flattens the result into a new array.

// ** Key Points:**

// - ** Syntax:**
//     ```javascript
//   let newArray = arrayObject.flatMap(callback, thisArg);
//   ```
//     - `callback`: The mapping function, similar to the one used in `map()`.
//   - `thisArg`: Optional value to use as `this` when executing the callback.

// - ** Mapping Function Syntax:**
//     ```javascript
//   function callback(currentValue[, index, array]) { /* ... */ }
//   ```

//     - ** Behavior:**
//         - `flatMap()` does not modify the original array.

// ** Examples:**

//     1. ** Creating Words from Sentences:**
//         - Using`map()`:
// ```javascript
//      let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];
//      let words = sentences.map(s => s.split(' '));
//      console.log(words);
//      // Output: [ ['JavaScript', 'Array', 'flatMap()'], [' '], ['is'], [' '], ['Awesome'] ]
//      ```

//     - Using`flatMap()`:
// ```javascript
//      let words = sentences.flatMap(s => s.split(' '));
//      console.log(words);
//      // Output: [ 'JavaScript', 'Array', 'flatMap()', '', '', 'is', '', '', 'Awesome' ]
//      ```

// 2. ** Adding and Removing Elements During Mapping:**
//     - Shopping cart example:
// ```javascript
//      let cart = [
//          { name: 'Smartphone', qty: 2, price: 500, freeOfCharge: false },
//          { name: 'Tablet', qty: 1, price: 800, freeOfCharge: false }
//      ];

//      let newCart = cart.flatMap(item => {
//          if (item.name === 'Smartphone') {
//              return [item, { name: 'Screen Protector', qty: item.qty, price: 5, freeOfCharge: true }];
//          } else {
//              return [item];
//          }
//      });

//      console.log(newCart);
//      // Output: [
//      //   { name: 'Smartphone', qty: 2, price: 500, freeOfCharge: false },
//      //   { name: 'Screen Protector', qty: 2, price: 5, freeOfCharge: true },
//      //   { name: 'Tablet', qty: 1, price: 800, freeOfCharge: false }
//      // ]

//      const total = newCart.reduce((sum, item) => {
//          if (!item.freeOfCharge) sum += item.price * item.qty;
//          return sum;
//      }, 0);

//      console.log({ total }); // Output: { total: 1800 }
//      ```

//     // ** Conclusion:**
//     //     The`flatMap()` method is useful for creating a flattened array by mapping each element and then flattening the results.It simplifies operations where both mapping and flattening are needed, allowing for concise and readable code.