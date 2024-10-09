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
