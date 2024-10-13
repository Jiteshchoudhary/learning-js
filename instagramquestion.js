//output 
let x = [];
let y = [];
let z = x + y;

console.log(typeof z, "string@@", z); //string because empty array first convert into string

let s1 = 'hi';
let s2 = new String('hi');
console.log(s1 == s2);  //true checking value 
console.log(s1 === s2); //false both data type is different is one is string and one is object;

let a = Infinity;
console.log(typeof a);

let x1 = '{"b":1,"c":2}'
let y1 = JSON.parse(x1);
console.log("y1 !!@@", y1); //giving parsed object

let t1 = 1 > 2 > 3;
console.log(t1)

//find the mistake from that.
const arr = [1, 2, 3];
// arr[4] = 4;
arr[3] = 4;
//we need to change some thing then it will give us [1,2,3,4]
//just change arr[3]=4
console.log(arr)

let v1 = 0.1 + 0.2;
let v2 = 0.3;
console.log(v1, 'v333', v2);
console.log(v1 == v2) //false due to floating precession error


let a2 = { b: 1, c: 2 };
let a3 = Object.keys(a2);
console.log(a3.length);

function findMaxMistake(arr) {
    let max = arr[1]
    console.log('aray@@', arr)
    for (let i = 0; i < arr; i++) {
        console.log('length we have here@@', i);
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const values = [3, 1, 4, 1, 5];
console.log(findMaxMistake(values))

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        setTimeout(function () {
            console.log(`Hello this is name ${this.name}`);
        }, 1000);
    }
}

const person = new Person('Alice');
person.greet(); // it is giving undefined because here this is refer to global object inside the setTimeout


let testObj = {
    name: "jitesh",
    get: function () {
        setTimeout(function () { //to fix that just use the array function into that that its
            console.log('loading from that object', this.name);
        }, 1000)
    }
}
console.log(testObj.get()) //output is undefined


//output of this 
async function asyncFunc() {
    return 'Hello Coder';
}
asyncFunc().then(res => {
    console.log(res);
});

//output of that 
function outer() {
    var a = 1;
    var b = 2;

    function inner() {
    }
    console.log(b);

}
outer();

const per = {
    name: "John",
    greet: () => {
        console.log(`Hello from 104${per.name}`)
    }
}
per.greet();


//output of that 
let t = 5;
let z1 = t++;
console.log(t, z1)

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) =>
    num * 2
);
console.log("dobuled@@", doubled);

(function () {
    var av = bvc = 5;
})()
console.log('outerbbbbbbb', typeof av);
console.log('outerrrrrrrrrrrrrr', typeof bvc);



function isPalindrome(input) {
    // Convert the input to a string
    const strInput = input.toString();

    // Initialize pointers for comparison
    const length = strInput.length;
    for (let i = 0; i < length / 2; i++) {
        if (strInput[i] !== strInput[length - 1 - i]) {
            return false; // Not a palindrome
        }
    }
    return true; // It's a palindrome
}

// Example usage
console.log(isPalindrome(12321)); // true
console.log(isPalindrome('madam')); // true
console.log(isPalindrome(12345)); // false
console.log(isPalindrome('hello')); // false



function intersectionOfArray(arr1, arr2) {
    let intersection = arr1.filter((ele) => arr2.includes(ele));
    return intersection;

}
console.log(intersectionOfArray([1, 2, 3, 4, 5, 6], [1, 2, 3]))
