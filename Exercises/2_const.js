//let and const are provide block scoped also not allowed redecalre same var in the same scope;
//const must be initalized as declreation because it is not allow
//to reassgin it 
// const name; // it will through and error SyntaxError: Missing initializer in const declaration
const age = 21; // it is valid 
const obj = { name: "Jitesh", age: 21 };
obj.age = 34;
console.log(obj); //not we can modified the properties not object

//how to prevent the modification of obj
const fixedObj = Object.freeze({ name: "jitesh", age: 29 }); //now if you change object property it throw error
fixedObj.age = 38 //it will not throw any error but value is remain unchanged
console.log(fixedObj);

const ids = [];
ids.push(21) //single element insertion
ids.push(23, 42, 34, 32) // multi element insertion
console.log(ids);
ids = [] // it will throw error assignment to constant variable

