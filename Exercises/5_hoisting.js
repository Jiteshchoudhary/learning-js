/**
 * **JavaScript Hoisting:**
   - Hoisting moves variable and function declarations to the top of the code during the creation phase of the execution context.
 */

//var hoisting

//before creation phase in execution
console.log(name);   //undefined
var name = "jitesh";

// it become like that
//var name
//console.log(name);
//name=jitesh

hello() //function is also hoisted
function hello() {
    console.log("Hello world")
}
console.log('dddddddddddd', c); //give undefined
console.log(add()) //it will give error that it is not defined because function as expression is not hoisted.

// function as expression is not hoisted similarly the arrow function also not hoisted
var c = function add(a, b) {
    return a + b;
}

// let is also hoisted in tempered zone 
console.log(surname); // give an error not defined becuase it is not in tempared zone
console.log(age); // give error can not access before initalization
let age = 23;
