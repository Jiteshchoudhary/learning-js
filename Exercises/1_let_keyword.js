/**
 * blocked scope with does not work because var is 
 * only global declare on top of function and local inside function
 */
var age = 21;
if (true) {
    console.log(age); //21 because var not has scope declaration
    var age = 28;
    console.log(age); //28
}
console.log(age);

function varTest() {
    console.log(age); // undefined 
    var age = 28;
    console.log(age); //28
}

varTest();

/**
 * blocked scope with let 
 */
let name = "jitesh";
if (true) {
    let name = "jitesh ji"; //block scope
    console.log(name); //jitesh ji
}
console.log(name); //jitesh 