####  Higher-Order Methods
- **`map()`**: Creates a new array with transformed elements.
- **`filter()`**: Creates a new array with elements that pass a test.
- **`reduce()`**: Reduces the array to a single value.
- **`every()`**: Checks if all elements pass a test.
- **`some()`**: Checks if at least one element passes a test.
- **`sort()`**: Sorts the elements.
- **`forEach()`**: Executes a function for each element.

### JavaScript Array `map()`: Transforming Elements

#### Summary
This tutorial explains how to use the JavaScript `map()` method to transform elements in an array.

#### Introduction to `map()`
- **Purpose**: The `map()` method allows you to transform elements in an array and include the results in a new array.
- **Traditional Method**: Before `map()`, you would use a for loop to iterate, transform, and push elements into a new array.

#### Example of Traditional Method
```javascript
let circles = [10, 30, 50];
let areas = [];
for (let i = 0; i < circles.length; i++) {
    let area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas); // Output: [314, 2827, 7853]
```

#### Using `map()`
- **Cleaner Code**: With `map()`, you can achieve the same result more concisely.
```javascript
function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
let areas = circles.map(circleArea);
console.log(areas); // Output: [314, 2827, 7853]
```

- **Anonymous Function**:
```javascript
let areas = circles.map(function(radius) {
    return Math.floor(Math.PI * radius * radius);
});
console.log(areas); // Output: [314, 2827, 7853]
```

- **Arrow Function**:
```javascript
let areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
console.log(areas); // Output: [314, 2827, 7853]
```

#### `map()` Method in Detail
```javascript
arrayObject.map(callback[, contextObject]);
```
- **Arguments**:
  - `callback`: A function to execute on each element.
    - `currentElement`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array `map()` was called upon.
  - `contextObject` (optional): An object to use as `this` inside the callback.

- **Behavior**: `map()` does not change the original array but returns a new array with transformed elements.

#### More Examples
- **Using `Math.sqrt` as Callback**:
```javascript
let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results); // Output: [4, 5, 6]
```
- The new array contains the square roots of the numbers in the original array.

#### Summary
The `map()` method is a powerful way to transform elements of an array according to a provided function, resulting in cleaner and more efficient code.


### JavaScript Array `filter()`: Filtering Elements

#### Summary
This tutorial explains how to use the JavaScript `filter()` method to filter elements in an array.

#### Introduction to `filter()`
- **Purpose**: The `filter()` method creates a new array with elements that pass a specified test.
- **Example Setup**: Consider an array of city objects, each with `name` and `population` properties.

```javascript
let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];
```

#### Traditional Method (Using for Loop)
```javascript
let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);
// Output: [{ name: 'Los Angeles', population: 3792621 }, { name: 'New York', population: 8175133 }]
```

#### Using `filter()` Method
```javascript
let bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);
// Output: [{ name: 'Los Angeles', population: 3792621 }, { name: 'New York', population: 8175133 }]
```

- **Using Arrow Function**:
```javascript
let bigCities = cities.filter(city => city.population > 3000000);
console.log(bigCities);
```

#### `filter()` Method Details
```javascript
arrayObject.filter(callback, contextObject);
```
- **Arguments**:
  - `callback`: A function that tests each element.
    - `currentElement`: The current element being processed.
    - `index` (optional): The index of the current element.
    - `array` (optional): The array being traversed.
  - `contextObject` (optional): An object to use as `this` inside the callback.

- **Behavior**: The `filter()` method iterates over each element, applying the callback function. It includes elements in the new array if the callback returns `true`.

#### Example with `filter()`
```javascript
let numbers = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let range = {
    lower: 1,
    upper: 10
};

let numberInRange = numbers.filter(isInRange, range);
console.log(numberInRange); // Output: [10, 1, 5]
```

#### Chaining `filter()` with Other Methods
```javascript
cities
    .filter(city => city.population < 3000000)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ': ' + city.population));
// Output: Philadelphia: 1526006, Houston: 2099451, Chicago: 2695598
```

#### Summary
The `filter()` method is a powerful tool for creating a new array with elements that pass a test provided by a callback function, leading to cleaner and more efficient code.

### JavaScript Array `reduce()` & `reduceRight()`: Reducing an Array into a Value

#### Summary
This tutorial explains how to use the JavaScript `reduce()` and `reduceRight()` methods to reduce an array to a single value.

#### Introduction to `reduce()`
- **Purpose**: To reduce an array to a single value by executing a reducer function on each element.
- **Example**: Summing the elements of an array.

**Traditional Method (Using for Loop)**
```javascript
let numbers = [1, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // Output: 6
```

**Using `reduce()` Method**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(sum); // Output: 6
```

#### `reduce()` Method Details
```javascript
array.reduce(callbackFn [, initialValue])
```
- **Arguments**:
  - `callbackFn`: The reducer function.
  - `initialValue` (optional): The initial value for the reduction.

**`callbackFn` Function Syntax**
```javascript
function callbackFn(previousValue, currentValue, currentIndex, array) { /**/ }
```
- **Arguments**:
  - `previousValue`: The value returned from the previous call of `callbackFn`.
  - `currentValue`: The value of the current array element.
  - `currentIndex`: The index of the current element.
  - `array`: The array being traversed.

**Example with `initialValue`**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}, 100);
console.log(sum); // Output: 106
```

**Example without `initialValue`**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
});
console.log(sum); // Output: 6
```

#### Example: Calculating Total Amount in Shopping Cart
```javascript
let shoppingCart = [
  { product: 'phone', qty: 1, price: 500 },
  { product: 'Screen Protector', qty: 1, price: 10 },
  { product: 'Memory Card', qty: 2, price: 20 },
];
let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);
console.log(total); // Output: 550
```

#### `reduceRight()` Method
- **Purpose**: Similar to `reduce()`, but processes the array from right to left.

**Example with `reduceRight()`**
```javascript
let numbers = [1, 2, 3];
let sum = numbers.reduceRight(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
});
console.log(`Result: ${sum}`); // Output: 6
```

**Output Explanation**
```plaintext
{ previousValue: 3, currentValue: 2 }
{ previousValue: 5, currentValue: 1 }
Result: 6
```

### Summary
In this tutorial, you learned how to use the `reduce()` and `reduceRight()` methods in JavaScript to reduce an array into a single value by applying a reducer function from left-to-right (`reduce()`) or right-to-left (`reduceRight()`).


The tutorial explains how to check if all elements in a JavaScript array pass a specific test using the `Array.prototype.every()` method.

**Using a For Loop:**
- To test if every element in an array satisfies a condition, a typical approach is to use a for loop.
- Example: Checking if all elements in an array `numbers` are greater than zero:
  ```javascript
  let numbers = [1, 3, 5];
  let result = true;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] <= 0) {
          result = false;
          break;
      }
  }
  console.log(result); // Output: true
  ```

**Using `every()` Method:**
- The `every()` method, introduced in ES5, provides a cleaner and more concise way to perform the same check.
- Example with `every()`:
  ```javascript
  let numbers = [1, 3, 5];
  let result = numbers.every(function (e) {
      return e > 0;
  });
  console.log(result); // Output: true
  ```
- With ES6 arrow functions:
  ```javascript
  let result = numbers.every(e => e > 0);
  ```

**Syntax:**
```javascript
arrayObject.every(callback[, thisArg])
```
- **callback**: Function that tests each element, with arguments `currentElement`, `index`, and `array`.
- **thisArg** (optional): Value to use as `this` when executing the callback.

**Behavior:**
- The `every()` method returns `true` if the callback returns a truthy value for every element, otherwise it returns `false`.
- The method stops iterating once it finds an element that causes the callback to return a falsy value.

**Examples:**
- Testing if all elements are even numbers:
  ```javascript
  let isEven = numbers.every(e => e % 2 == 0); // Output: false
  ```
- Testing if all elements are odd numbers:
  ```javascript
  let isOdd = numbers.every(e => Math.abs(e % 2) == 1); // Output: true
  ```
- Using `thisArg` to test if elements are within a range:
  ```javascript
  let range = { min: 0, max: 10 };
  let isInRange = numbers.every(function (e) {
      return e >= this.min && e <= this.max;
  }, range); // Output: true
  ```

**Caution:**
- The `every()` method returns `true` for any condition when called on an empty array:
  ```javascript
  let gtZero = [].every(e => e > 0); // true
  let ltZero = [].every(e => e < 0); // true
  ```

**Conclusion:**
- The `every()` method is a powerful and concise way to check if all elements in an array pass a specified test.


### JavaScript Array `some()`: Check If at Least One Element Passes a Test

#### Summary
This tutorial covers how to use the JavaScript `some()` method to check if at least one element in an array meets a specified condition.

#### Introduction to `some()`
- **Purpose**: To determine if at least one element in the array satisfies a given condition.
- **Example**: Checking if there is any element less than 5 in an array.

**Traditional Method (Using For Loop)**
```javascript
let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = false;

for (let index = 0; index < marks.length; index++) {
    if (marks[index] < 5) {
        lessThanFive = true;
        break;
    }
}

console.log(lessThanFive); // Output: true
```

**Using `some()` Method**
```javascript
let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = marks.some(e => e < 5);
console.log(lessThanFive); // Output: true
```

#### `some()` Method Details
```javascript
arrayObject.some(callback[, thisArg])
```
- **Arguments**:
  - `callback`: The function that tests each element. If it returns `true` for any element, `some()` returns `true` immediately.
  - `thisArg` (optional): A value to use as `this` inside the callback function.

**Callback Function Syntax**
```javascript
function callback(currentElement[, currentIndex], array) { /**/ }
```
- **Arguments**:
  - `currentElement`: The current element being processed.
  - `currentIndex` (optional): The index of the current element.
  - `array` (optional): The array `some()` was called upon.

#### Examples

1. **Check if an Element Exists**
   ```javascript
   function exists(value, array) {
       return array.some(e => e === value);
   }

   let marks = [4, 5, 7, 9, 10, 2];
   console.log(exists(4, marks)); // Output: true
   console.log(exists(11, marks)); // Output: false
   ```

2. **Check if an Element is in a Range**
   ```javascript
   let marks = [4, 5, 7, 9, 10, 2];
   const range = { min: 8, max: 10 };

   let result = marks.some(function (e) {
       return e >= this.min && e <= this.max;
   }, range);

   console.log(result); // Output: true
   ```
   - **Note**: Using arrow functions in this example would not work as `this` would refer to the global context instead of the `range` object.

3. **Empty Arrays**
   ```javascript
   let result = [].some(e => e > 0);
   console.log(result); // Output: false

   result = [].some(e => e <= 0);
   console.log(result); // Output: false
   ```

### Summary
The `some()` method checks if at least one element in an array meets a condition defined by a callback function. It provides a more concise and readable way to perform this check compared to traditional looping methods.

The `Array.prototype.forEach()` method in JavaScript allows you to execute a function on every element of an array. Unlike traditional `for` loops, `forEach()` provides a more functional approach to iterate over array elements.

**Syntax:**
```javascript
array.forEach(callback [, thisArg]);
```

**Parameters:**
1. **callback**: A function that is called for each element in the array.
   - `currentElement`: The current element being processed.
   - `index` (Optional): The index of the current element.
   - `array` (Optional): The array `forEach` was called upon.

2. **thisArg** (Optional): Value to use as `this` when executing the callback.

**Key Points:**
- `forEach()` executes the callback function once per element in the array.
- It returns `undefined` and is not chainable like other methods such as `map()` or `filter()`.
- `forEach()` does not support `break` or `continue` statements. To exit early, you must throw an exception within the callback.

**Examples:**

1. **Basic Usage:**
   ```javascript
   let ranks = ['A', 'B', 'C'];
   ranks.forEach(function (e) {
       console.log(e);
   });
   // Output: A, B, C
   ```

2. **Using `thisArg`:**
   ```javascript
   function Counter() {
       this.count = 0;
       let self = this;
       return {
           increase: function () {
               self.count++;
           },
           current: function () {
               return self.count;
           },
           reset: function () {
               self.count = 0;
           }
       }
   }

   var counter = new Counter();
   var numbers = [1, 2, 3];
   var sum = 0;
   numbers.forEach(function (e) {
       sum += e;
       this.increase();
   }, counter);

   console.log(sum); // Output: 6
   console.log(counter.current()); // Output: 3
   ```

**Summary:**
- `forEach()` is used to execute a callback function on each element of an array.
- It is useful for performing operations on array elements without modifying the array.
- The method does not return a new array or support breaking out of the loop, unlike other array methods.