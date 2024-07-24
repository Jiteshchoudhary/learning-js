
#### 1. Adding/Removing Elements
- **`push()`**: Adds one or more elements to the end.
- **`unshift()`**: Adds one or more elements to the beginning.
- **`pop()`**: Removes the last element.
- **`shift()`**: Removes the first element.
- **`splice()`**: Adds, removes, or replaces elements at specified positions.
- **`slice()`**: Creates a shallow copy of a portion of the array.

In this tutorial, you learn about the JavaScript `Array.push()` method, which adds one or more elements to the end of an array and returns the new length of the array.

### Key Points:

1. **Syntax**:
   - `push(newElement)`
   - `push(newElement1, newElement2, ..., newElementN)`

2. **Examples**:
   - **Single Element**: `numbers.push(40)` adds 40 to the `numbers` array.
   - **Multiple Elements**: `numbers.push(40, 50)` adds both 40 and 50.
   - **Array Concatenation**: Use `for...of` loop or the spread operator (`...`) to append elements from one array to another.

3. **Array-like Objects**:
   - The `push()` method can be used with array-like objects using `call()` or `apply()`, which allows appending elements to objects that have a `length` property.

### Summary:
The `push()` method is used to add elements to the end of an array and can be applied to array-like objects.


In this tutorial, you'll learn how to use the JavaScript `Array.prototype.unshift()` method, which adds one or more elements to the beginning of an array and returns the new length of the array.

### Key Points:

- **Syntax**:
  - `unshift(element)`
  - `unshift(element1, element2, ..., elementN)`

- **Performance**: The `unshift()` method can be slow with large arrays because it requires reindexing the elements.

- **Examples**:
  1. **Prepend a Single Element**:
     ```javascript
     let numbers = [30, 40];
     const length = numbers.unshift(20);
     console.log(length); // 3
     console.log(numbers); // [20, 30, 40]
     ```
     
  2. **Prepend Multiple Elements**:
     ```javascript
     let numbers = [30, 40];
     const length = numbers.unshift(10, 20);
     console.log(length); // 4
     console.log(numbers); // [10, 20, 30, 40]
     ```
     
  3. **Add Elements from One Array to Another**:
     ```javascript
     let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
     let weekends = ['Sat', 'Sun'];
     days.unshift(...weekends);
     console.log(days); // ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
     ```

- **Working with Array-Like Objects**:
  You can use `unshift()` with array-like objects by borrowing it from an array:
  ```javascript
  let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(message) {
      [].unshift.call(this, message);
      return this.length;
    },
  };
  greetings.prepend('Good day');
  console.log(greetings);
  ```

### Summary:
The `unshift()` method adds elements to the start of an array and can be used with array-like objects through `call()` or `apply()`.

In this tutorial, you’ll learn about the JavaScript `Array.prototype.pop()` method, which removes the last element from an array and returns that element.

### Key Points:

- **Syntax**:
  ```javascript
  array.pop()
  ```

- **Behavior**:
  - The `pop()` method removes the last element from the array.
  - It returns the removed element.
  - If the array is empty, it returns `undefined`.
  - The length of the array is decreased by one.

- **Examples**:
  1. **Remove the Last Element**:
     ```javascript
     const numbers = [10, 20, 30];
     const last = numbers.pop();
     console.log(last); // 30
     console.log(numbers.length); // 2
     ```
     Here, `30` is removed from the array, and the length becomes 2.

  2. **Using `pop()` with an Empty Array**:
     ```javascript
     const numbers = [];
     const last = numbers.pop();
     console.log(last); // undefined
     console.log(numbers.length); // 0
     ```
     For an empty array, `pop()` returns `undefined` and the length remains 0.

  3. **Using `pop()` with Array-Like Objects**:
     You can use `pop()` with array-like objects using `call()` or `apply()`:
     ```javascript
     let greetings = {
       0: 'Hi',
       1: 'Hello',
       2: 'Howdy',
       length: 3,
       removeLast() {
         return [].pop.call(this);
       },
     };

     let lastGreeting = greetings.removeLast();
     console.log(lastGreeting); // 'Howdy'
     console.log(greetings);   // { 0: 'Hi', 1: 'Hello', length: 2, removeLast: [Function: removeLast] }
     ```

### Summary:
The `pop()` method removes the last element from an array and can be used with array-like objects by borrowing it with `call()` or `apply()`.


In this tutorial, you’ll learn about the JavaScript `Array.prototype.shift()` method, which removes the first element from an array and returns it.

### Key Points:

- **Syntax**:
  ```javascript
  array.shift()
  ```

- **Behavior**:
  - The `shift()` method removes the first element from the array.
  - It returns the removed element or `undefined` if the array is empty.
  - The length of the array is decreased by one.
  - `shift()` reindexes the remaining elements, making it slower than the `pop()` method.

- **Examples**:
  1. **Remove the First Element**:
     ```javascript
     const numbers = [10, 20, 30];
     let number = numbers.shift();
     console.log(number); // 10
     console.log(numbers); // [20, 30]
     console.log(numbers.length); // 2
     ```
     The first element (`10`) is removed, and the array length becomes 2.

  2. **Remove All Elements Using a Loop**:
     ```javascript
     const numbers = [10, 20, 30];
     let number;
     while ((number = numbers.shift()) != undefined) {
       console.log(number);
     }
     ```
     This loop removes and logs each element until the array is empty.

  3. **Using `shift()` with Array-Like Objects**:
     ```javascript
     let greetings = {
       0: 'Hi',
       1: 'Hello',
       2: 'Howdy',
       length: 3,
       removeFirst() {
         return [].shift.call(this);
       },
     };

     const greeting = greetings.removeFirst();
     console.log(greeting); // 'Hi'
     console.log(greetings); // { 0: 'Hello', 1: 'Howdy', length: 2, removeFirst: [Function: removeFirst] }
     ```
     Here, `shift()` is used with an array-like object by borrowing it with `call()`.

### Summary:
The `shift()` method removes and returns the first element from an array. It can also be applied to array-like objects using `call()` or `apply()`.


In this tutorial, you’ll learn how to use the JavaScript `Array.prototype.splice()` method to delete, insert, and replace elements in an array.

### Key Points:

- **Syntax**:
  ```javascript
  array.splice(start, deleteCount, item1, item2, ...);
  ```

- **Deleting Elements**:
  - Use `splice(position, num)` to delete elements from an array.
  - `position` specifies where to start deleting, and `num` specifies how many elements to delete.
  - The method returns an array of the deleted elements and modifies the original array.

  Example:
  ```javascript
  let scores = [1, 2, 3, 4, 5];
  let deletedScores = scores.splice(0, 3);
  console.log(scores); // [4, 5]
  console.log(deletedScores); // [1, 2, 3]
  ```

- **Inserting Elements**:
  - Use `splice(position, 0, new_element1, new_element2, ...)` to insert elements.
  - The second argument is `0`, indicating no elements will be deleted.
  - New elements are inserted starting from the specified `position`.

  Example:
  ```javascript
  let colors = ['red', 'green', 'blue'];
  colors.splice(2, 0, 'purple');
  console.log(colors); // ["red", "green", "purple", "blue"]

  colors.splice(1, 0, 'yellow', 'pink');
  console.log(colors); // ["red", "yellow", "pink", "green", "purple", "blue"]
  ```

- **Replacing Elements**:
  - Use `splice(position, num, new_element1, new_element2, ...)` to replace elements.
  - The `num` specifies how many elements to delete, and the new elements replace them starting from the `position`.

  Example:
  ```javascript
  let languages = ['C', 'C++', 'Java', 'JavaScript'];
  languages.splice(1, 1, 'Python');
  console.log(languages); // ["C", "Python", "Java", "JavaScript"]

  languages.splice(2, 1, 'C#', 'Swift', 'Go');
  console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
  ```

### Summary:
The `splice()` method allows you to delete, insert, and replace elements in an array. It modifies the original array and returns an array of deleted elements.


### 3 Pragmatic Uses of JavaScript Array `slice()` Method

The JavaScript `Array.prototype.slice()` method allows you to extract subset elements of an array and add them to a new array. Here are its practical uses:

### Introduction to `slice()` Method

- **Syntax**: 
  ```javascript
  array.slice(start, stop);
  ```
  - `start` (optional): The zero-based index to start extraction. Defaults to `0` if undefined.
  - `stop` (optional): The zero-based index to end extraction. Extracts up to `stop - 1`. If omitted, defaults to the array's length.

- **Characteristics**:
  - Returns a new array containing the extracted elements.
  - Performs a shallow copy of elements.
  - Does not modify the original array.

### Uses of `slice()` Method

1. **Cloning an Array**:
   - You can use `slice()` to create a shallow copy of an array.
   ```javascript
   var numbers = [1, 2, 3, 4, 5];
   var newNumbers = numbers.slice();
   // newNumbers is [1, 2, 3, 4, 5]
   ```

2. **Copying a Portion of an Array**:
   - Extract a portion of an array without modifying the original array.
   ```javascript
   var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
   var rgb = colors.slice(0, 3);
   console.log(rgb); // ["red", "green", "blue"]
   ```

3. **Converting Array-like Objects into Arrays**:
   - Convert `arguments` object or `NodeList` into a proper array.
   ```javascript
   function toArray() {
     return Array.prototype.slice.call(arguments);
   }
   var classification = toArray('A', 'B', 'C');
   console.log(classification); // ["A", "B", "C"]

   var p = document.querySelectorAll('p');
   var list = Array.prototype.slice.call(p);
   // list is now an array of <p> elements
   ```

### Summary

The `slice()` method is versatile for:
- Cloning arrays.
- Extracting portions of arrays.
- Converting array-like objects into arrays.

It is a powerful tool for manipulating arrays without affecting the original data.