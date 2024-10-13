function normalFunc() {
    let counter = 0;
    counter += 1;
    return counter;
}
function closer() {
    let counter = 0;
    return function () {
        counter++;
        console.log
        return counter;
    }
}
console.log(normalFunc())
console.log(normalFunc());
console.log(closer()());
console.log(closer()())

//differnece is that it not required all params
//currying in multiple function 

function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

console.log(multiply)
console.log(multiply(2));
console.log(multiply(2)(3));
console.log(multiply(2)(3)(4));