// When passed a single number, it creates an array with that length:
let array = new Array(2); // it will create an array of length two without elements
console.log(array, "length->", array.length) //[<2 empty items> ]

//When passed a non-number, it creates an array with that element:
let array2 = new Array('2');
console.log(array2, 'length we have here', array2.length); //output is ['2']


//Array.of()` does not treat a single numeric value specially and always creates an array containing the values passed to it:
//basically it is create array of that length with its value
let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3

let multiValue = Array.of("A", "B", "C", "D");
console.log("multi value we have here@@", multiValue);
console.log("length of multi value", multiValue.length);
let iterableArray = Array.of([2, "awesemes"]);
console.log(iterableArray); //it will created nested array of it.

// The `Array.of()` method simplifies array construction by consistently treating all arguments as elements of the new array, regardless of their type or quantity.

//Array.from allow use to create array from array-like or iterable object also
//allow use to create a array and use of iteral also 
//generate a square array of 
/**
 * 
 *  Array.from(target[, mapFn[, thisArg]])
    ```
    - `target`: The array-like or iterable object to convert.
    - `mapFn`: Optional map function to call on every element.
    - `thisArg`: Optional value to use as `this` when executing `mapFn`.} a  
 */

//array from arguments 
function arrayFromArguments() {
    return Array.from(arguments);
}

console.log('array from arguments', arrayFromArguments(1, 2, 3, 4, "Awesome"));

//array from arguments with map function
function arrayFromArgumentsWithMap() {
    return Array.from(arguments, x => x * 2);
}
console.log('using from map', arrayFromArgumentsWithMap(1, 2, 3));

// The `Array.from()` method simplifies the creation of arrays from array-like or iterable objects, offering additional functionality such as mapping and context binding.