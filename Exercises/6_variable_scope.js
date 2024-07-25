// /'use strict'; //to prevent global var leak

// we have three types of variables
//let const var
//let const var -> global local
//let const -> block scope inside if else for loop etc {}
var globalVar = 'global var'// it accessbile throght app
console.log(globalVar);
function simple() {
    var localVar = "local var";
    console.log(globalVar); //it will point out to global until the local var not defined inside the function
    console.log(localVar);
}

//block scope availbe only let and const 
let name = "jitesh";
let age = 23;
if (true) {
    let name = "awesome";
    let age = 24;
    console.log(name, age) //awesome 24
}
console.log(name, age); // it access global var jitesh 23

// global variable leaks
function counter() {
    count = 10;
    return count;
}
awesome = 43;
console.log(counter())//output is 10 due to global var leak
console.log(awesome); //43 
//agar global print karege usme hame awesome and count mil jayega okay

//to prevent global var leak we use use stirct
function preventLeak() {
    count = 48;
    return count;
}
console.log('prevent leak', preventLeak())
console.log(global);