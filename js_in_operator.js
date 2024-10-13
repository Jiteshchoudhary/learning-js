//checking object propteis like a pro

const myObject = { name: "test" }
console.log("name" in myObject); //true 
console.log("age" in myObject) //false

//check array index also
const myArray = [1, 2, 3, 4];
console.log(0 in myArray); //true 
console.log(12 in myArray); //false
//create object from array
let array = [["language", "js", "python"], [
    "library", "reactjs", "antdui"
]];
const techStack = Object.fromEntries(array);
console.log(techStack)