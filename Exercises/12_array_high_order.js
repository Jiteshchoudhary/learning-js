// //high order function are function that take function as call back
// - **`map()`**: Creates a new array with transformed elements.
// - **`filter()`**: Creates a new array with elements that pass a test.
// - **`reduce()`**: Reduces the array to a single value.
// - **`every()`**: Checks if all elements pass a test.
// - **`some()`**: Checks if at least one element passes a test.
// - **`sort()`**: Sorts the elements.
// - **`forEach()`**: Executes a function for each element.
const items = [1, 2, 3, 4];
const square = items.map((ele) => ele * ele);
console.log(square); //it does not modified the old array it return new array

//so basically filter will not transform it just check condition

//filter it is used to filter on thecondition it returns new array
const even = items.filter((ele) => ele * ele);
console.log(even);

//reduce basically it is used for single element 
const sum = items.reduce((prev, curent) => {
    console.log("prevous", prev, "current", curent);
    return prev + curent;
}, 0);
console.log("sum we have here@@", sum)

let shoppingCart = [
    { product: 'phone', qty: 1, price: 500 },
    { product: 'Screen Protector', qty: 1, price: 10 },
    { product: 'Memory Card', qty: 2, price: 20 },
];

//used reduce insted of for loop okay 
let totalAmount = shoppingCart.reduce(function (prev, current) {
    console.log(prev);
    console.log("current we have here", current);
    return current.price + prev;
}, 0);
console.log("total amount", totalAmount);