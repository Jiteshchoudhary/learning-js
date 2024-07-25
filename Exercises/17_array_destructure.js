//es6 introduced destructure
//destructure allow to extract properties from object and element from array

function hello() {
    return [1, 2, 3]
}
let score = hello();
let x = score[0]; //before we access like that 
let [a, b, c, d] = hello();// after es6 destructure
console.log(a, b, c);
console.log(a, b, c, d); // here d print undefined

//rest syntax ... to capture the rest variable
let [k, ...v] = hello();
console.log(k, v);

let items = () => null;

//we can handle non iterable return values
let [i = 10, j = 20] = items() || [];
console.log(i, j);

//nested destructuring array
function nestedArray() {
    return [1, 2, 4, [5, 9]];
}
let [q, w, e, [r, t]] = nestedArray();
console.log('nested array', q, w, e, r, t)


// - **Spread Operator:** Unpacks elements.
// - **Rest Parameter:** Packs elements into an array.
//spread operator allow us to merge the element or properties
let array1 = [434, 34, 545];
let array2 = [76, 45, 767, ...array1];
console.log(array2);


// - The spread operator (`...`) unpacks elements of iterable objects into a list.
// - It can be used to clone, merge, or concatenate arrays, and to pass array elements as function arguments.
// - The rest parameter also uses `...` but packs elements into an array.
