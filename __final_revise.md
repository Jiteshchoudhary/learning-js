JavaScript Data Types: JavaScript supports several data types, broadly categorized into two categories: primitive and reference types.

Primitive Data Types: These are immutable data types, meaning their values cannot be altered once created.
Primitve Data Types (Number, String, Boolean,null, undefined, Symbol)
primitive are stored in stack and it is immutiable that means value remain same.
for example Primitives support call by values.
let x = 10;
let y = x; // y is now 10, but it is a separate copy
y = 20;    // Changing y does not affect x
console.log(x); // Outputs: 10


Reference DataTypes (object, Array, Function)
they are stored in the heap memory and its value can be changed it is mutable in the nature. they used call by reference

mutability 
let person = { name: "Alice", age: 30 };
person.age = 31; // Mutating the object
console.log(person.age); // Outputs: 31

they reference the same object when you reassign them.
let a = { value: 10 };
let b = a; // Both variables reference the same object
b.value = 20; // Mutating the object through b
console.log(a.value); // Outputs: 20 (a is also affected)

more example of call by reference 
let arr1 = [1, 2, 3];
let arr2 = arr1;  // arr2 gets a reference to the same array as arr1

arr2.push(4); // Modifying arr2 affects arr1

console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is modified)
console.log(arr2); // Output: [1, 2, 3, 4] (arr2 also points to the modified array)



here are sine tricky questions based on primitive and non-primitive type
### Object and Array Manipulation
   let a = { value: 1 };
   let b = a;
   b.value = 2;
   console.log(a.value);

2. **What will be the output of the following code?**
   let obj1 = { x: 1 };
   let obj2 = { y: 2 };
   let obj3 = Object.assign({}, obj1, obj2);
   obj1.x = 3;
   console.log(obj3.x);

3. **What will be the output of the following code?**
   const arr1 = [1, 2, 3];
   const arr2 = arr1.slice();
   arr2[0] = 99;
   console.log(arr1[0]);

4. **What will be the output of the following code?**
   let objA = { a: 1 };
   let objB = { a: 1 };
   console.log(objA === objB);
   ```

5. **What will be the output of the following code?**
   ```javascript
   let arr = [1, 2, 3];
   arr.length = 2;
   console.log(arr);
   ```

6. **What will be the output of the following code?**
   ```javascript
   let x = [1, 2, 3];
   let y = x;
   y.push(4);
   console.log(x);
   ```

7. **What will be the output of the following code?**
   ```javascript
   let user = { name: "Alice", age: 25 };
   let copy = { ...user };
   copy.age = 30;
   console.log(user.age);
   ```

8. **What will be the output of the following code?**
   ```javascript
   let obj = { a: 1, b: { c: 2 } };
   let shallowCopy = { ...obj };
   shallowCopy.b.c = 3;
   console.log(obj.b.c);
   ```

9. **What will be the output of the following code?**
   ```javascript
   const original = [1, 2, 3];
   const clone = original.concat();
   clone.push(4);
   console.log(original);
   ```

10. **What will be the output of the following code?**
    ```javascript
    let obj1 = { key: "value" };
    let obj2 = obj1;
    obj2.key = "newValue";
    console.log(obj1.key);
    ```

### Function Arguments
11. **What will be the output of the following code?**
    ```javascript
    function changeObject(obj) {
        obj.prop = "changed";
    }
    const myObj = { prop: "original" };
    changeObject(myObj);
    console.log(myObj.prop);
    ```

12. **What will be the output of the following code?**
    ```javascript
    function modifyArray(arr) {
        arr.push(4);
    }
    let numbers = [1, 2, 3];
    modifyArray(numbers);
    console.log(numbers);
    ```

13. **What will be the output of the following code?**
    ```javascript
    function updateValue(obj) {
        obj.value = 5;
        obj = { value: 10 }; // New object assignment
    }
    let myObj = { value: 0 };
    updateValue(myObj);
    console.log(myObj.value);
    ```

14. **What will be the output of the following code?**
    ```javascript
    function addProp(obj) {
        obj.newProp = "new";
    }
    const item = {};
    addProp(item);
    console.log(item.newProp);
    ```

15. **What will be the output of the following code?**
    ```javascript
    function changeArray(arr) {
        arr = [4, 5, 6]; // New array assignment
    }
    const myArray = [1, 2, 3];
    changeArray(myArray);
    console.log(myArray);
    ```

### Nested Objects
16. **What will be the output of the following code?**
    ```javascript
    let person = {
        name: "John",
        address: {
            city: "New York"
        }
    };
    let newPerson = JSON.parse(JSON.stringify(person)); // Deep copy
    newPerson.address.city = "Los Angeles";
    console.log(person.address.city);
    ```

17. **What will be the output of the following code?**
    ```javascript
    let user = { name: "Alice", preferences: { color: "blue" } };
    let copy = { ...user, preferences: { ...user.preferences } };
    copy.preferences.color = "red";
    console.log(user.preferences.color);
    ```

18. **What will be the output of the following code?**
    ```javascript
    let data = { a: { b: { c: 1 } } };
    let copyData = JSON.parse(JSON.stringify(data));
    copyData.a.b.c = 2;
    console.log(data.a.b.c);
    ```

19. **What will be the output of the following code?**
    ```javascript
    let person = { name: "Alice", skills: ["JavaScript", "Python"] };
    let copy = { ...person };
    copy.skills.push("Java");
    console.log(person.skills);
    ```

20. **What will be the output of the following code?**
    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const shallowCopy = Object.assign({}, original);
    shallowCopy.b.c = 3;
    console.log(original.b.c);
    ```

### Array Behavior
21. **What will be the output of the following code?**
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1];
    arr2[0] = 99;
    console.log(arr1[0]);
    ```

22. **What will be the output of the following code?**
    ```javascript
    const array1 = [1, 2, 3];
    const array2 = array1.map(num => num * 2);
    console.log(array1);
    ```

23. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    arr.splice(1, 1);
    console.log(arr);
    ```

24. **What will be the output of the following code?**
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = arr1;
    arr2.length = 0; // Emptying arr2
    console.log(arr1);
    ```

25. **What will be the output of the following code?**
    ```javascript
    const numbers = [1, 2, 3];
    const newNumbers = numbers.filter(num => num > 1);
    console.log(numbers.length);
    ```

### Object Comparison
26. **What will be the output of the following code?**
    ```javascript
    const obj1 = { a: 1 };
    const obj2 = obj1;
    const obj3 = { a: 1 };
    console.log(obj1 === obj2); // true
    console.log(obj1 === obj3); // false
    ```

27. **What will be the output of the following code?**
    ```javascript
    const obj = { a: 1 };
    const objCopy = { a: 1 };
    console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
    ```

28. **What will be the output of the following code?**
    ```javascript
    const objA = { a: 1 };
    const objB = { b: 1 };
    const merged = { ...objA, ...objB };
    console.log(merged);
    ```

29. **What will be the output of the following code?**
    ```javascript
    let obj1 = { x: 1, y: 2 };
    let obj2 = { x: 1, y: 2 };
    console.log(obj1 == obj2);
    ```

30. **What will be the output of the following code?**
    ```javascript
    let obj1 = { name: "John" };
    let obj2 = { name: "John", age: 30 };
    console.log(obj1.name === obj2.name);
    ```

### Additional Questions
31. **What will be the output of the following code?**
    ```javascript
    let a = { name: "Alice" };
    let b = a;
    b = { name: "Bob" };
    console.log(a.name);
    ```

32. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.map(num => num + 1);
    console.log(arr);
    ```

33. **What will be the output of the following code?**
    ```javascript
    let data = [1, 2, 3];
    let dataCopy

 = [...data];
    dataCopy.push(4);
    console.log(data.length);
    ```

34. **What will be the output of the following code?**
    ```javascript
    const obj = { a: 1, b: 2 };
    const obj2 = Object.assign({}, obj);
    obj2.a = 10;
    console.log(obj.a);
    ```

35. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    arr.push(arr);
    console.log(arr.length);
    ```

36. **What will be the output of the following code?**
    ```javascript
    const obj = { x: { y: 1 } };
    const shallowCopy = { ...obj };
    shallowCopy.x.y = 2;
    console.log(obj.x.y);
    ```

37. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.reverse();
    console.log(arr);
    ```

38. **What will be the output of the following code?**
    ```javascript
    let arr = [1, 2, 3];
    arr[10] = 11;
    console.log(arr.length);
    ```

39. **What will be the output of the following code?**
    ```javascript
    let obj = { a: 1, b: 2 };
    delete obj.a;
    console.log(obj);
    ```

40. **What will be the output of the following code?**
    ```javascript
    const array = [1, 2, 3];
    const array2 = array;
    array2[0] = 10;
    console.log(array[0]);
    ```

41. **What will be the output of the following code?**
    ```javascript
    const person = { name: "Alice" };
    const person2 = { ...person };
    person2.name = "Bob";
    console.log(person.name);
    ```

42. **What will be the output of the following code?**
    ```javascript
    const data = { a: { b: 2 } };
    const copy = JSON.parse(JSON.stringify(data));
    copy.a.b = 3;
    console.log(data.a.b);
    ```

43. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    const shallowCopy = arr.slice();
    shallowCopy[1] = 99;
    console.log(arr[1]);
    ```

44. **What will be the output of the following code?**
    ```javascript
    let obj1 = { a: 1 };
    let obj2 = Object.assign({}, obj1);
    obj2.a = 2;
    console.log(obj1.a);
    ```

45. **What will be the output of the following code?**
    ```javascript
    const obj = { x: 1, y: 2 };
    const newObj = Object.assign({}, obj);
    newObj.y = 3;
    console.log(obj.y);
    ```

46. **What will be the output of the following code?**
    ```javascript
    let a = [1, 2, 3];
    let b = a;
    b[0] = 10;
    console.log(a[0]);
    ```

47. **What will be the output of the following code?**
    ```javascript
    let array = [1, 2, 3];
    let newArray = array.concat(4, 5);
    console.log(array.length);
    ```

48. **What will be the output of the following code?**
    ```javascript
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    console.log(obj1.a === obj2.a);
    ```

49. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    const result = arr.map(num => num * 2);
    console.log(arr);
    ```

50. **What will be the output of the following code?**
    ```javascript
    const obj = { name: "Alice", age: 25 };
    const clone = Object.assign({}, obj);
    clone.name = "Bob";
    console.log(obj.name);
    ```

These questions can help in assessing knowledge and understanding of non-primitive types in JavaScript, object references, and behavior with arrays and functions.Here’s a list of 50 coding interview questions focusing on non-primitive types (reference types) in JavaScript. These questions cover various concepts, including object manipulation, array behavior, function arguments, and more.

### Object and Array Manipulation
1. **What will be the output of the following code?**
   ```javascript
   let a = { value: 1 };
   let b = a;
   b.value = 2;
   console.log(a.value);
   ```

2. **What will be the output of the following code?**
   ```javascript
   let obj1 = { x: 1 };
   let obj2 = { y: 2 };
   let obj3 = Object.assign({}, obj1, obj2);
   obj1.x = 3;
   console.log(obj3.x);
   ```

3. **What will be the output of the following code?**
   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = arr1.slice();
   arr2[0] = 99;
   console.log(arr1[0]);
   ```

4. **What will be the output of the following code?**
   ```javascript
   let objA = { a: 1 };
   let objB = { a: 1 };
   console.log(objA === objB);
   ```

5. **What will be the output of the following code?**
   ```javascript
   let arr = [1, 2, 3];
   arr.length = 2;
   console.log(arr);
   ```

6. **What will be the output of the following code?**
   ```javascript
   let x = [1, 2, 3];
   let y = x;
   y.push(4);
   console.log(x);
   ```

7. **What will be the output of the following code?**
   ```javascript
   let user = { name: "Alice", age: 25 };
   let copy = { ...user };
   copy.age = 30;
   console.log(user.age);
   ```

8. **What will be the output of the following code?**
   ```javascript
   let obj = { a: 1, b: { c: 2 } };
   let shallowCopy = { ...obj };
   shallowCopy.b.c = 3;
   console.log(obj.b.c);
   ```

9. **What will be the output of the following code?**
   ```javascript
   const original = [1, 2, 3];
   const clone = original.concat();
   clone.push(4);
   console.log(original);
   ```

10. **What will be the output of the following code?**
    ```javascript
    let obj1 = { key: "value" };
    let obj2 = obj1;
    obj2.key = "newValue";
    console.log(obj1.key);
    ```

### Function Arguments
11. **What will be the output of the following code?**
    ```javascript
    function changeObject(obj) {
        obj.prop = "changed";
    }
    const myObj = { prop: "original" };
    changeObject(myObj);
    console.log(myObj.prop);
    ```

12. **What will be the output of the following code?**
    ```javascript
    function modifyArray(arr) {
        arr.push(4);
    }
    let numbers = [1, 2, 3];
    modifyArray(numbers);
    console.log(numbers);
    ```

13. **What will be the output of the following code?**
    ```javascript
    function updateValue(obj) {
        obj.value = 5;
        obj = { value: 10 }; // New object assignment
    }
    let myObj = { value: 0 };
    updateValue(myObj);
    console.log(myObj.value);
    ```

14. **What will be the output of the following code?**
    ```javascript
    function addProp(obj) {
        obj.newProp = "new";
    }
    const item = {};
    addProp(item);
    console.log(item.newProp);
    ```

15. **What will be the output of the following code?**
    ```javascript
    function changeArray(arr) {
        arr = [4, 5, 6]; // New array assignment
    }
    const myArray = [1, 2, 3];
    changeArray(myArray);
    console.log(myArray);
    ```

### Nested Objects
16. **What will be the output of the following code?**
    ```javascript
    let person = {
        name: "John",
        address: {
            city: "New York"
        }
    };
    let newPerson = JSON.parse(JSON.stringify(person)); // Deep copy
    newPerson.address.city = "Los Angeles";
    console.log(person.address.city);
    ```

17. **What will be the output of the following code?**
    ```javascript
    let user = { name: "Alice", preferences: { color: "blue" } };
    let copy = { ...user, preferences: { ...user.preferences } };
    copy.preferences.color = "red";
    console.log(user.preferences.color);
    ```

18. **What will be the output of the following code?**
    ```javascript
    let data = { a: { b: { c: 1 } } };
    let copyData = JSON.parse(JSON.stringify(data));
    copyData.a.b.c = 2;
    console.log(data.a.b.c);
    ```

19. **What will be the output of the following code?**
    ```javascript
    let person = { name: "Alice", skills: ["JavaScript", "Python"] };
    let copy = { ...person };
    copy.skills.push("Java");
    console.log(person.skills);
    ```

20. **What will be the output of the following code?**
    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const shallowCopy = Object.assign({}, original);
    shallowCopy.b.c = 3;
    console.log(original.b.c);
    ```

### Array Behavior
21. **What will be the output of the following code?**
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1];
    arr2[0] = 99;
    console.log(arr1[0]);
    ```

22. **What will be the output of the following code?**
    ```javascript
    const array1 = [1, 2, 3];
    const array2 = array1.map(num => num * 2);
    console.log(array1);
    ```

23. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    arr.splice(1, 1);
    console.log(arr);
    ```

24. **What will be the output of the following code?**
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = arr1;
    arr2.length = 0; // Emptying arr2
    console.log(arr1);
    ```

25. **What will be the output of the following code?**
    ```javascript
    const numbers = [1, 2, 3];
    const newNumbers = numbers.filter(num => num > 1);
    console.log(numbers.length);
    ```

### Object Comparison
26. **What will be the output of the following code?**
    ```javascript
    const obj1 = { a: 1 };
    const obj2 = obj1;
    const obj3 = { a: 1 };
    console.log(obj1 === obj2); // true
    console.log(obj1 === obj3); // false
    ```

27. **What will be the output of the following code?**
    ```javascript
    const obj = { a: 1 };
    const objCopy = { a: 1 };
    console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
    ```

28. **What will be the output of the following code?**
    ```javascript
    const objA = { a: 1 };
    const objB = { b: 1 };
    const merged = { ...objA, ...objB };
    console.log(merged);
    ```

29. **What will be the output of the following code?**
    ```javascript
    let obj1 = { x: 1, y: 2 };
    let obj2 = { x: 1, y: 2 };
    console.log(obj1 == obj2);
    ```

30. **What will be the output of the following code?**
    ```javascript
    let obj1 = { name: "John" };
    let obj2 = { name: "John", age: 30 };
    console.log(obj1.name === obj2.name);
    ```

### Additional Questions
31. **What will be the output of the following code?**
    ```javascript
    let a = { name: "Alice" };
    let b = a;
    b = { name: "Bob" };
    console.log(a.name);
    ```

32. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.map(num => num + 1);
    console.log(arr);
    ```

33. **What will be the output of the following code?**
    ```javascript
    let data = [1, 2, 3];
    let dataCopy

 = [...data];
    dataCopy.push(4);
    console.log(data.length);
    ```

34. **What will be the output of the following code?**
    ```javascript
    const obj = { a: 1, b: 2 };
    const obj2 = Object.assign({}, obj);
    obj2.a = 10;
    console.log(obj.a);
    ```

35. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    arr.push(arr);
    console.log(arr.length);
    ```

36. **What will be the output of the following code?**
    ```javascript
    const obj = { x: { y: 1 } };
    const shallowCopy = { ...obj };
    shallowCopy.x.y = 2;
    console.log(obj.x.y);
    ```

37. **What will be the output of the following code?**
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.reverse();
    console.log(arr);
    ```

38. **What will be the output of the following code?**
let arr = [1, 2, 3];
arr[10] = 11;
console.log(arr.length);
What will be the output of the following code?
javascript
Copy code
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj);
What will be the output of the following code?

javascript
Copy code
const array = [1, 2, 3];
const array2 = array;
array2[0] = 10;
console.log(array[0]);
What will be the output of the following code?

What will be the output of the following code?

javascript
Copy code
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj);
What will be the output of the following code?

javascript
Copy code
const array = [1, 2, 3];
const array2 = array;
array2[0] = 10;
console.log(array[0]);
What will be the output of the following code?

javascript
Copy code
const person = { name: "Alice" };
const person2 = { ...person };
person2.name = "Bob";
console.log(person.name);
What will be the output of the following code?

javascript
Copy code
const data = { a: { b: 2 } };
const copy = JSON.parse(JSON.stringify(data));
copy.a.b = 3;
console.log(data.a.b);
What will be the output of the following code?

javascript
Copy code
const arr = [1, 2, 3];
const shallowCopy = arr.slice();
shallowCopy[1] = 99;
console.log(arr[1]);
What will be the output of the following code?

javascript
Copy code
let obj1 = { a: 1 };
let obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a);
What will be the output of the following code?

javascript
Copy code
const obj = { x: 1, y: 2 };
const newObj = Object.assign({}, obj);
newObj.y = 3;
console.log(obj.y);
What will be the output of the following code?

javascript
Copy code
let a = [1, 2, 3];
let b = a;
b[0] = 10;
console.log(a[0]);
What will be the output of the following code?

javascript
Copy code
let array = [1, 2, 3];
let newArray = array.concat(4, 5);
console.log(array.length);
What will be the output of the following code?

javascript
Copy code
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1.a === obj2.a);
What will be the output of the following code?

javascript
Copy code
const arr = [1, 2, 3];
const result = arr.map(num => num * 2);
console.log(arr);
What will be the output of the following code?

javascript
Copy code
const obj = { name: "Alice", age: 25 };
const clone = Object.assign({}, obj);
clone.name = "Bob";
console.log(obj.name);


variable declaration 
Feature	     var	           let 	   const
Scope	    Function/global	   Block	Block
Hoisting	Yes	               Yes(TDZ)  Yes(TDZ)
Re-declaration	Yes	               No	  No
Re-assignment	Yes              	Yes  	No
Temporal Dead Zone	No 	             Yes	Yes


var: Rarely recommended because it can lead to bugs due to hoisting and lack of block-scoping.
let: Use when the variable's value needs to be reassigned or updated later in the code.
const: Use for variables that should not be reassigned, especially for constants or immutable references.

# JavaScript `var`, `let`, and `const` Tricky Questions

This document contains a collection of tricky JavaScript interview questions focused on variable declarations using `var`, `let`, and `const`. Each question includes the expected output and an explanation.

## Questions

### 1. 
**What will be the output of the following code?**
```javascript
var x = 5;
function test() {
  console.log(x);
  var x = 10;
}
test();


let y = 5;
function test() {
  console.log(y);
  let y = 10;
}
test();

Answer: ReferenceError: Cannot access 'y' before initialization
Explanation: let variables are hoisted but remain in the "temporal dead zone" until they are initialized. Hence, accessing y before declaration results in a ReferenceError

console.log(a);
var a = 10;
Answer: undefined
Explanation: The declaration of var a is hoisted to the top, but its initialization happens after the console.log, so it outputs undefined.

console.log(b);
let b = 20;

Answer: ReferenceError: Cannot access 'b' before initialization
Explanation: let does not allow access before initialization due to the "temporal dead zone".

const x = 10;
x = 20;
console.log(x);

Answer: TypeError: Assignment to constant variable
Explanation: const does not allow reassignment, and any attempt to reassign a const variable will throw a TypeError.

var a = 1;
let b = 2;
const c = 3;

{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a, b, c);
Explanation: var a is function-scoped, so the outer a is overwritten inside the block. But let b and const c are block-scoped, so their values remain the same outside the block.


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
Answer: 3 3 3
Explanation: var is function-scoped, and the same i variable is used inside the loop. By the time the setTimeout executes, the loop has completed and i is 3.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

Answer: 0 1 2
Explanation: let is block-scoped, so a new i is created for each iteration of the loop, preserving its value inside each setTimeout.

const obj = { a: 1 };
obj = { b: 2 };
console.log(obj);
Answer: TypeError: Assignment to constant variable
Explanation: You cannot reassign a const object reference. Once it's defined, the object reference cannot be changed.


console.log(a);
var a;

Answer: undefined
Explanation: var declarations are hoisted to the top, but their assignment is not. So the variable a is undefined.


const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Answer: [1, 2, 3, 4]
Explanation: Even though arr is declared with const, the contents of the array can still be modified.

let x;
console.log(x);
x = 10;

Answer: undefined
Explanation: The variable x is declared but not initialized when logged, so it is undefined

var a = 10;
let b = 20;

function scopeTest() {
  var a = 30;
  let b = 40;
  console.log(a, b);
}

scopeTest();
console.log(a, b);

Answer: 30, 40 and then 10, 20
Explanation: Inside the scopeTest function, the variables a and b are local to that function. Outside the function, the outer a and b remain unchanged.

let a = 5;
const b = 10;

function testScope() {
  a = 15;
  console.log(a, b);
}

testScope();

Answer: 15, 10
Explanation: The function updates the value of a but cannot modify b, so it logs the updated value of a and the constant value of b.


var x = 1;
function outer() {
  var x = 2;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
Answer: 2
Explanation: The inner function accesses the x from its closure (inside outer).


console.log(foo);
var foo = function() {
  return 1;
};

Answer: undefined
Explanation: The variable declaration is hoisted, but the function expression is not. So foo is undefined at the time of logging.



const array = [1, 2, 3];
array.length = 0;
console.log(array);
Answer: []
Explanation: Setting the length of an array to 0 clears the array

var x = 1;
function f() {
  var x = 2;
  g();
}
function g() {
  console.log(x);
}
f();
Answer: 1
Explanation: The function g logs the x from the global scope, which is 1

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);

Answer: [1, 2, 3, 4]
Explanation: Both a and b reference the same array, so modifying b also modifies a.

const a = 1;
const a = 2;
console.log(a);

Answer: SyntaxError: Identifier 'a' has already been declared
Explanation: const does not allow redeclaration of the same variable.

let x = 1;
console.log(x++);
console.log(x);
Answer: 1, 2
Explanation: The first console.log logs the value before increment, and the second logs the incremented value


# JavaScript Operators - Tricky Questions

## Arithmetic Operators

### 1. What will be the output of the following code?
console.log(5 + '5');
Answer: 55
Explanation: The number 5 is coerced into a string, resulting in string concate


console.log(5 - '2');
Answer: 3
Explanation: The string '2' is coerced into a number, resulting in subtraction

console.log(3 * null);

Answer: 0
Explanation: null is coerced to 0, and the result of 3 * 0 is 0.

console.log(3 + 4 + '5');
Answer: 75

console.log('5' - 2);
Answer: 3

let a = 10;
a += 5;
console.log(a);

Answer: 15

let x = 1;
let y = x++;
console.log(x, y);
Answer: 2 1
Explanation: The post-increment operator returns the original value before incrementing.

let b = 5;
b *= 2 + 2;
console.log(b);
Answer: 20
Explanation: The expression 2 + 2 is evaluated first, resulting in 4, and then b is multiplied by 4.


Comparison Operators

console.log(0 == false);
Answer: true
Explanation: The == operator performs type coercion, and 0 is considered equal to false.

console.log(0 === false);
Answer: false
Explanation: The === operator checks for both value and type, and 0 (number) is not the same type as false (boolean).

console.log('1' == 1);

Answer: true
Explanation: The string '1' is coerced to the number 1, resulting in equality.

console.log(null == undefined);
Answer: true
Explanation: Both null and undefined are considered equal with == due to type coercion.

console.log(null === undefined);
Answer: false
Explanation: The === operator checks for both value and type; they are of different types.

Logical Operators
console.log(true && false);
Answer: false
Explanation: Both conditions must be true for && to return true.

console.log(true || false);
Answer: true
Explanation: At least one condition must be true for || to return true.

console.log(!true);
Answer: false
Explanation: The ! operator negates the value.

console.log(false || false && true);
Answer: false
Explanation: The && operator is evaluated first, and false && true is false, resulting in false.

console.log(true && false || true);
Answer: true
Explanation: The expression evaluates true && false to false, and false || true to true.

console.log((false || true) && false);
Answer: false
Explanation: The expression evaluates false || true to true, and true && false to false.

Mixed Operators

console.log(1 + 2 + '3' + 4);
Answer: 334


console.log(5 + (10 * 2) - 4);
Answer: 21
Explanation: The multiplication is performed first, resulting in 20, and then 5 + 20 - 4 equals 21.

console.log('5' + 2 - 1);
answer: 51

let x = 5;
console.log(x++);

Answer: 5
Explanation: The post-increment operator returns the original value before incrementing.

let y = 10;
console.log(++y);

Answer: 11
Explanation: The pre-increment operator increments y first and then returns the new value.

Special Cases

console.log(5 * 'a');
Answer: NaN
Explanation: Multiplying a number by a non-numeric string results in NaN (Not a Number).

console.log('5' - '3');
Answer: 2
Explanation: Both strings are coerced into numbers, resulting in 5 - 3.

console.log(1 + 2 + '3' + 4 - 1);
answer 33

Edge Cases
console.log(5 + null);
Answer: 5
Explanation: null is coerced to 0, and 5 + 0 is 5

console.log(5 + undefined);
Answer: NaN
Explanation: undefined cannot be coerced into a number, leading to NaN.

console.log([] + 1);
Answer: 1
Explanation: The empty array is coerced to an empty string, resulting in '' + 1 which equals '1'.

console.log(1 + [2]);

Answer: 12
Explanation: The array [2] is coerced into the string '2', resulting in string concatenation.

console.log([1, 2] == '1,2');
Answer: true
Explanation: The array is coerced into a string, which matches the string '1,2'.

console.log(!!null);
Answer: false
Explanation: null is falsy, and applying the !! operator returns false.

console.log(!!'');
Answer: false
Explanation: An empty string is falsy, resulting in false when coerced to a boolean.

console.log('2' + '2' == '22');
Answer: true
Explanation: The strings '2' and '2' are concatenated to '22', resulting in equality.

console.log('5' - '2' + '3');
Answer: 33
Explanation: The strings are coerced to numbers, resulting in 3, which is then concatenated with '3'.

console.log([] + {});
Answer: "[object Object]"
Explanation: The empty array is coerced to an empty string, and the empty object is coerced to "[object Object]".


Control  structure
Conditional statements (if, else, else if, switch).

basically if if used to manage the certain condition 

for loops tricky questions 
for of (for normal)
for in (for object)

for (let k = 0; k < 5; k++) {
    if (k === 2) continue;
    console.log(k);
}
//output is 0,1,3,4

for (let l = 0; l < 5; l++) {
    if (l === 3) break;
    console.log(l);
}
//output is 0,1,2

for (let m = 0; m < 2; m++) {
    for (let n = 0; n < 2; n++) {
        console.log(`m: ${m}, n: ${n}`);
    }
}

//output is m: 0, n: 0
// m: 0, n: 1
// m: 1, n: 0
// m: 1, n: 1

for (var o = 0; o < 3; o++) {
    setTimeout(() => console.log(o), 100);
}
// 3,3,3

for (let p = 0; p < 3; p++) {
    for (let q = 0; q < 3; q++) {
        if (q === 1) break;
        console.log(`p: ${p}, q: ${q}`);
    }
}

//output is 
// p: 0, q: 0
// p: 1, q: 0
// p: 2, q: 0

for (let r = 0; r < 3; r++) {
    for (let s = 0; s < 3; s++) {
        if (s === 1) continue;
        console.log(`r: ${r}, s: ${s}`);
    }
}

//output is 
// r: 0, s: 0
// r: 0, s: 2
// r: 1, s: 0
// r: 1, s: 2
// r: 2, s: 0
// r: 2, s: 2

const obj = { a: 1, b: 2 };
for (let key in obj) {
    console.log(key);
}
//output  Explanation: The for...in loop iterates over the keys of the object.
// a
// b


const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value);
}

// 10
// 20
// 30

let output = '';
for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 2; y++) {
        output += `${x}${y} `;
    }
}
console.log(output);
//output 
// 11 12 21 22 31 32 
//Explanation: The outer loop runs for x and the inner for y, creating combinations.

const array = ['a', 'b', 'c'];
for (let index in array) {
    console.log(index);
}

// 0
// 1
// 2

const data = { x: 1, y: 2, z: 3 };
for (let prop in data) {
    console.log(`${prop}: ${data[prop]}`);
}

//output 
// x: 1
// y: 2
// z: 3

for (let e = 0; e < 5; e++) {
    if (e === 2) {
        continue;
    }
    if (e === 4) {
        break;
    }
    console.log(e);
}

//output 0 1 3

let f = 0;
for (let g = 0; g < 5; g++) {
    f++;
    console.log(f);
}
console.log(f);

//output 1 2 3 4 5 5 
//Explanation: f is incremented each time, and its final value after the loop is 5.

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}

//output 
// 0
// 1
// 2

let k = 0;
for (let l = 0; l < 5; l++) {
    k += l; //here we are adding 2+3+5 like that 
}
console.log(k);
//output is 10

const str = 'hello';
for (let char of str) {
    console.log(char);
}

// output is 
// h
// e
// l
// l
// o

for (let n = 0; n < 3; n++) {
    if (n === 0 || n === 2) {
        console.log(n);
    }
}
//output is 
// 0
// 2

const arr2 = [1, 2, 3];
for (let p = 0; p <= arr2.length; p++) {
    console.log(arr2[p]);
}

//output 
// 1
// 2
// 3
// undefined


let q = 5;
for (let r = 0; r < 5; r++) {
    let q = r; // Shadowing outer q
    console.log(q);
}
console.log(q);

//output
// 0
// 1
// 2
// 3
// 4
// 5

//reverse a loop 
for (let t = 5; t >= 0; t--) {
    console.log(t);
}

//5 4 3 2 1 0 

const obj2 = { x: 1, y: 2 };
for (const key of Object.keys(obj2)) {
    console.log(key);
}
//output is 
// x
// y

in js we have function of two way we can create it 
using arrow function or using normal function keywords

A. Traditional Function Declaration (function)
A function declaration defines a function that can be called anywhere in the scope of its declaration, and it’s hoisted (which means it’s available before it’s declared in the code).
function sayHello() {
    console.log("Hello!");
}

B function as  expression 
const greet = function() {
    console.log("Hello!");
};

C arrow functions 
const greet = () => {
    console.log("Hello!");
};


here are some tricky output based questions

// function hoisting

console.log(sayHello()); // ?
function sayHello() {
    return "Hello!";
}
output //Hello

//function expression hoisting 
console.log(sayHello()); // ?
const sayHello = function() {
    return "Hello!";
};
//output error typeRrror sayHello is not function

//arrow function and this 
const obj = {
    name: "Alice",
    greet: () => {
        return `Hello, ${this.name}`;
    }
};
console.log(obj.greet()); // ? //Hello undefined


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // ? //10

//closer
function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const increment = outer();
console.log(increment());  // ?
console.log(increment());  // ?
console.log(increment());  // ?


//function as parameters
function applyOperation(a, b, operation) {
    return operation(a, b);
}
function multiply(x, y) {
    return x * y;
}
console.log(applyOperation(5, 4, multiply)); // ?


function makeMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}
const double = makeMultiplier(2);
console.log(double(5));  // ? 10
console.log(double(10)); // ? 20


let name = "Global";

function printName() {
    let name = "Local";
    console.log(name);
}
printName();  // ?
console.log(name);  // ?

//output local global

function testBlockScope() {
    if (true) {
        let message = "Inside block";
        console.log(message); // ?
    }
    console.log(message); // ?
}
testBlockScope();
//output // Inside block
// ReferenceError: message is not defined

const regular = function() {
    console.log(arguments);
};

const arrow = () => {
    console.log(arguments);
};

regular(1, 2, 3); // ? // [1,2,3]
arrow(1, 2, 3);   // ? // Reference error 

(function() {
    console.log("I am an IIFE");
})();

//output 
// I am an IIFE


if (false) {
    function sayHello() {
        console.log("Hello from inside if!");
    }
}
sayHello(); // ?
TypeError: sayHello is not a function



function test(a, b = a + 1) {
    return a + b;
}
console.log(test(5));    // ? 11
console.log(test(5, 10)); // ? 15
// 11
// 15

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000); //after here delay of 3 second
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j);
    }, j * 1000); delay of 3 second
}

output 
3
3
3
0
1
2

const obj = {
    a: 10,
    b: () => console.log(this.a)
};
obj.b();  // ?

undefined


for (var i = 0; i < 3; i++) {
    function logIndex() {
        console.log(i);
    }
    logIndex();
}
//output is 0 1 2 

//recerivse function with closers 
function createCounter() {
    let count = 0;
    return function increment() {
        count++;
        console.log(count);
        if (count < 5) increment();
    };
}
const counter = createCounter();
counter();

1
2
3
4
5


function outer(x) {
    return function inner(y) {
        return function deepest(z) {
            return x + y + z;
        };
    };
}

console.log(outer(1)(2)(3)); // ?

// 6

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5));  // ?


var x = function(a) {
    return a + 5;
}
console.log(x(2));  // ?
7


function test() {
    console.log(1);
}

var test = function() {
    console.log(2);
};

test(); // ?
2


function createCounter() {
    let count = 0;
    return function() {
        count++;
        setTimeout(() => console.log(count), 1000);
    };
}
const counter = createCounter();
counter();
counter();
counter();

1
2
3


function sum() {
    let sum = () => {
        return arguments[0] + arguments[1];
    };
    return sum();
}

console.log(sum(1, 2));  // ?

3

Explanation: Although arrow functions don’t have their own arguments object, they can still access arguments from the surrounding regular function (sum).




// prototypical inheritance in js we can inherit object properties also 

const animal ={
  color:function(){
    return 'Animal color function'
  }
}

const dog = Object.create(animal);
dog['height'] = function(){
return  "hi iam height methods"
}
console.log(dog.color());
console.log(dog.height());

//polyfills means add backward compatibility 
//example es6 introduced the include method and previous older version do not have then how we can add using poly fill for backward compatibility purpose okay.
if(!Array.prototype.includes){
    Array.prototype.includes = function(value){
        return this.indexOf(value) !==-1;
    }
}
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}

// Usage
const arr = [1, 2, 3];
console.log(arr.includes(2)); // Output: true
console.log(arr.includes(4)); // Output: false
