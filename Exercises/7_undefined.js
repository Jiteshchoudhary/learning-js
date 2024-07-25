//there will be 5 case
//you get undefined basically it is 
//primitive data type in javascript 

//uninitlization var 
let a;
console.log(a); //undefined

console.log(b); //undefined
var b = 45;

//acces non existing property of object 

const user = {
    name: "jitesh"
}
console.log(user.age)// undefined


//functional parameters 
//if return not speifcic then function always return undefined as type
function hello(a) {
    console.log('aa', a);
    return a;
}
hello();


//access array of out of bond
let array = [1, 2, 3];
console.log(array[5])