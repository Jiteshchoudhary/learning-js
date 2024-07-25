//for adding and remove element from array we use 
// this method 

// - **`push()`**: Adds one or more elements to the end.
// - **`unshift()`**: Adds one or more elements to the beginning.
// - **`pop()`**: Removes the last element.
// - **`shift()`**: Removes the first element.
// - **`splice()`**: Adds, removes, or replaces elements at specified positions.
// - **`slice()`**: Creates a shallow copy of a portion of the array.

let pushArray = [];
pushArray.push(34, 3, 425, 34); // it is add element in the last 
console.log(pushArray); //output is [34,3,425,34]

// it is slow method becuase it rearange the index
pushArray.unshift(99, 1); // it is add element in the front;
console.log(pushArray);

//now to remove the value we use pop and unshfit
console.log('pop method call', pushArray.pop()); //
console.log(pushArray); //[99, 1, 34, 3, 425];

console.log('unshift method call', pushArray.unshift()); // it remove the front element from array;
console.log(pushArray)




//slice method need of array portion 
/**
 * - Returns a new array containing the extracted elements.
  - Performs a shallow copy of elements.
  - we can also copy the array using slice method also
  - Does not modify the original array.
 */
console.log(pushArray.slice(0, 2))
console.log(pushArray);


//splice method BASICALLy used to add remove and replaces elements
// - **Syntax**:
//   ```javascript
//   array.splice(start, deleteCount, item1, item2, ...);
//   ```
let array = [1, 2, 3, 5];
array.splice(1, 0, 4, 5, 6);
console.log("add element in array", array); //[1,4,5,6,2,3,5]
//now delete element from that 
array.splice(1, 3)// it retun arry with existing new data; means from delete3 element from it 
console.log(array);