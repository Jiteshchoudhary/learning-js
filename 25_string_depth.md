### JavaScript String Methods

**This guide provides methods for effective string manipulation in JavaScript:**

**1. Searching:**
- **`search()`** – Locate a substring using a regular expression.
- **`indexOf()`** – Get the index of the first occurrence of a substring.
- **`lastIndexOf()`** – Find the index of the last occurrence of a substring.
- **`includes()`** – Check if a string contains a substring.
- **`startsWith()`** – Check if a string starts with another string.
- **`endsWith()`** – Determine if a string ends with another string.

**2. Trimming:**
- **`trim()`** – Remove whitespace from both ends of a string.
- **`trimStart()`** – Remove leading whitespace.
- **`trimEnd()`** – Remove trailing whitespace.

**3. Padding:**
- **`padStart()`** – Pad a string from the start.
- **`padEnd()`** – Pad a string from the end.

**4. Extracting:**
- **`split()`** – Split a string into an array of substrings.
- **`substring()`** – Extract a substring between specified indices.
- **`slice()`** – Extract a part of a string based on start and end indices.

**5. Concatenating & Interpolating:**
- **`concat()`** – Concatenate multiple strings into a new string.
- **Template literals** – Substitute variables in a string.

**6. Replacing:**
- **`replace()`** – Replace a substring with a new one.
- **`replaceAll()`** – Replace all occurrences of a substring that matches a pattern.

**7. Changing Cases:**
- **`toUpperCase()`** – Convert all characters to uppercase.
- **`toLowerCase()`** – Convert all characters to lowercase.

### JavaScript String search()

**Summary:** This tutorial explains how to use the JavaScript `String.search()` function to locate a substring within a string using a regular expression.

**Introduction to the `search()` function:**
- The `search()` method takes a regular expression and returns the index of the first match in a string.
  
  **Syntax:**
  ```javascript
  let index = str.search(regexp);
  ```
  - `regexp`: A regular expression. If a non-RegExp is passed, it converts that value to a RegExp.
  - Returns `-1` if no match is found.

**Examples:**
1. **Finding the first capital letter:**
    ```javascript
    let re = /[A-Z]/;
    let str = 'hi There! How are you?';
    let index = str.search(re);
    console.log(index); // Output: 3
    ```
    - This returns `3`, which is the index of the capital letter "T".

2. **Finding a number in the string:**
    ```javascript
    let re = /[0-9]/;
    let str = 'Hello, JavaScript!';
    let index = str.search(re);
    console.log(index); // Output: -1
    ```
    - This returns `-1` because there is no number in the string.

**Summary:**
Use the JavaScript `String.search()` method to find the index of the first match in a string based on a regular expression. If no match is found, it returns `-1`.


### JavaScript String `indexOf()` Summary

The `indexOf()` method in JavaScript is used to find the index of the first occurrence of a substring within a string. If the substring is not found, it returns -1.

**Syntax**:
```javascript
let index = str.indexOf(substr, [, fromIndex]);
```
- `substr`: The substring to search for.
- `fromIndex` (optional): The position to start the search. Defaults to 0.

**Characteristics**:
- The search is case-sensitive.
- To find the last occurrence of a substring, use the `lastIndexOf()` method.

**Examples**:

1. **Finding the first occurrence of a substring**:
    ```javascript
    let str = 'finding substring in string';
    let index = str.indexOf('str');
    console.log(index); // Output: 11
    ```

2. **Counting occurrences of a substring**:
    ```javascript
    let str = 'You do not know what you do not know until you know.';
    let substr = 'know';

    let count = 0;
    let index = str.indexOf(substr);
    while (index !== -1) {
        count++;
        index = str.indexOf(substr, index + 1);
    }

    console.log(count); // Output: 3
    ```

3. **Case sensitivity**:
    ```javascript
    let str = 'JS indexOf';
    let substr = 'js';
    let index = str.indexOf(substr);
    console.log(index); // Output: -1
    ```

    **Case-insensitive search**:
    ```javascript
    let str = 'JS indexOf';
    let substr = 'js';
    let index = str.toLowerCase().indexOf(substr.toLowerCase());
    console.log(index); // Output: 0
    ```

**Summary**:
- `indexOf()` returns the index of the first occurrence of a substring in a string or -1 if not found.
- The search is case-sensitive. For a case-insensitive search, convert both the string and the substring to lowercase.

### JavaScript String `lastIndexOf()` Summary

The `lastIndexOf()` method in JavaScript is used to find the last occurrence of a substring within a string, searching backwards from a specified index or from the end of the string if no index is provided. If the substring is not found, it returns -1.

**Syntax**:
```javascript
str.lastIndexOf(substr, [, fromIndex]);
```
- `substr`: The substring to search for.
- `fromIndex` (optional): The position to start the search backwards. Defaults to +Infinity.

**Characteristics**:
- The search starts from the `fromIndex` and moves backward.
- If `fromIndex` is not provided, the search starts from the end of the string.
- If `fromIndex` is greater than or equal to `str.length`, the entire string is searched.
- If `fromIndex` is less than zero, it behaves as if `fromIndex` is zero.
- The search is case-sensitive.

**Examples**:

1. **Finding the last occurrence of a substring**:
    ```javascript
    let str = 'JavaScript';
    let index = str.lastIndexOf('a');
    console.log(index); // Output: 3
    ```

2. **Using `fromIndex` to start the search**:
    ```javascript
    let str = 'JavaScript';
    let index = str.lastIndexOf('a', 2);
    console.log(index); // Output: 1
    ```

3. **Case sensitivity**:
    ```javascript
    let str = 'Hello, World!';
    let substr = 'L';
    let index = str.lastIndexOf(substr);
    console.log(index); // Output: -1
    ```

    **Case-insensitive search**:
    ```javascript
    let str = 'Hello, World!';
    let substr = 'L';
    let index = str.toLowerCase().lastIndexOf(substr.toLowerCase());
    console.log(index); // Output: 10
    ```

**Summary**:
- `lastIndexOf()` returns the index of the last occurrence of a substring in a string or -1 if not found.
- The search is case-sensitive and searches backward from the end of the string or from the specified `fromIndex`. For a case-insensitive search, convert both the string and substring to lowercase before using `lastIndexOf()`.

### JavaScript String `includes()` Method Summary

The `includes()` method in JavaScript checks if one string contains another string, returning `true` if found and `false` otherwise.

**Syntax**:
```javascript
string.includes(searchString [, position])
```
- `searchString`: The string to search for.
- `position` (optional): The position to start searching from. Defaults to 0.

**Characteristics**:
- The search is case-sensitive.

**Examples**:

1. **Basic usage**:
    ```javascript
    let email = 'admin@example.com';
    console.log(email.includes('@')); // Output: true
    ```

2. **Case-sensitive search**:
    ```javascript
    let str = 'JavaScript String';
    console.log(str.includes('Script')); // Output: true
    console.log(str.includes('script')); // Output: false
    ```

3. **Using the position parameter**:
    ```javascript
    let str = 'JavaScript String';
    console.log(str.includes('Script', 5)); // Output: false
    ```

**Summary**:
- The `includes()` method checks if a string contains another string, returning `true` or `false`.
- It is case-sensitive and can start the search from a specified position.



### JavaScript String `startsWith()` Method Summary

The `startsWith()` method checks if a string begins with a specified substring, returning `true` if it does and `false` otherwise.

**Syntax**:
```javascript
string.startsWith(searchString [, position])
```
- `searchString`: The substring to check for at the start of the string.
- `position` (optional): The position within the string to start the search. Defaults to 0.

**Characteristics**:
- The search is case-sensitive.

**Examples**:

1. **Basic usage**:
    ```javascript
    const title = 'Jack and Jill Went Up the Hill';
    console.log(title.startsWith('Jack')); // Output: true
    ```

2. **Case sensitivity**:
    ```javascript
    console.log(title.startsWith('jack')); // Output: false
    ```

3. **Using the position parameter**:
    ```javascript
    console.log(title.startsWith('Jill', 9)); // Output: true
    ```

**Summary**:
- `startsWith()` is used to check if a string starts with a specific substring, with an optional starting position for the search. The method is case-sensitive.


### JavaScript String `endsWith()` Method Summary

The `endsWith()` method checks if a string ends with a specified substring, returning `true` if it does and `false` otherwise.

**Syntax**:
```javascript
string.endsWith(searchString [, length])
```
- `searchString`: The substring to check for at the end of the string.
- `length` (optional): The length of the string to consider for the check. Defaults to the full length of the string.

**Characteristics**:
- The search is case-sensitive.

**Examples**:

1. **Basic usage**:
    ```javascript
    const title = 'Jack and Jill Went Up the Hill';
    console.log(title.endsWith('Hill')); // Output: true
    ```

2. **Case sensitivity**:
    ```javascript
    console.log(title.endsWith('hill')); // Output: false
    ```

3. **Using the length parameter**:
    ```javascript
    console.log(title.endsWith('Up', 21)); // Output: true
    ```

**Summary**:
- `endsWith()` is used to check if a string ends with a specific substring, with an optional length parameter to specify the length of the string to be checked. The method is case-sensitive.


### JavaScript String `trim()` Method Summary

The `trim()` method removes whitespace characters from both ends of a string, returning a new string without modifying the original.

**Syntax**:
```javascript
let resultString = str.trim();
```
- Whitespace characters include spaces, tabs, and non-breaking spaces.

**Characteristics**:
- `trim()` does not alter the original string.
- For removing whitespace from only the beginning or end, use `trimStart()` or `trimEnd()`.

**Example**:
```javascript
let str = '  JS trim  ';
let result = str.trim();
console.log(result); // Output: "JS trim"
```

**Summary**:
- Use `trim()` to remove whitespace from both the start and end of a string.


### JavaScript String `trimStart()` Method Summary

The `trimStart()` method removes whitespace characters from the beginning of a string, returning a new string with the leading whitespace removed. It does not modify the original string.

**Syntax**:
```javascript
let newString = originalString.trimStart();
```
- Whitespace characters include spaces, tabs, carriage returns, new lines, vertical tabs, and form feeds.

**Characteristics**:
- `trimStart()` does not alter the original string.
- `trimLeft()` is an alias for `trimStart()` and provides the same functionality.

**Example**:
```javascript
const str = '   JavaScript   ';
const result = str.trimStart();

console.log({ str });    // Output: { str: '   JavaScript   ' }
console.log({ result }); // Output: { result: 'JavaScript   ' }
```

**Summary**:
- Use `trimStart()` to remove whitespace from the beginning of a string. `trimLeft()` can be used interchangeably with `trimStart()`.


### JavaScript String `trimEnd()` Method Summary

The `trimEnd()` method removes whitespace characters from the end of a string, returning a new string with the trailing whitespace removed. It does not modify the original string.

**Syntax**:
```javascript
let newString = originalString.trimEnd();
```
- Whitespace characters include spaces, tabs, carriage returns, new lines, vertical tabs, and form feeds.

**Characteristics**:
- `trimEnd()` does not alter the original string.
- `trimRight()` is an alias for `trimEnd()` and offers the same functionality.

**Example**:
```javascript
const str = '   JavaScript   ';
const result = str.trimEnd();

console.log({ str });    // Output: { str: '   JavaScript   ' }
console.log({ result }); // Output: { result: '   JavaScript' }
```

**Summary**:
- Use `trimEnd()` to remove whitespace from the end of a string. `trimRight()` can be used interchangeably with `trimEnd()`.

### Padding a String to a Certain Length with Another String

**Summary**: Learn how to use `padStart()` and `padEnd()` methods to pad a string to a specified length with another string.

**`String.prototype.padStart()`**:
- Pads the beginning of a string to a certain length.
- **Syntax**: `string.padStart(padLength [, padString])`
  - `padLength`: Total length of the resulting string after padding.
  - `padString` (optional): The string used for padding. Defaults to a space (`' '`). If `padString` is longer than needed, only the left-most part is used.

**Examples**:
1. Padding with zeros:
    ```javascript
    let str = '1234'.padStart(8, '0');
    console.log(str); // "00001234"
    ```
2. Padding with spaces (default padding):
    ```javascript
    let str = 'abc'.padStart(5);
    console.log(str); // "  abc"
    ```

**`String.prototype.padEnd()`**:
- Pads the end of a string to a certain length.
- **Syntax**: `string.padEnd(padLength [, padString])`
  - `padLength`: Total length of the resulting string after padding.
  - `padString` (optional): The string used for padding. Defaults to a space (`' '`). If `padString` is longer than needed, only the left-most part is used.

**Examples**:
1. Padding with spaces (default padding):
    ```javascript
    let str = 'abc'.padEnd(5);
    console.log(str); // "abc  "
    ```
2. Padding with asterisks:
    ```javascript
    let str = 'abc'.padEnd(5, '*');
    console.log(str); // "abc**"
    ```
3. Padding with a string longer than needed:
    ```javascript
    let str = 'abc'.padEnd(5, 'def');
    console.log(str); // "abcde"
    ```

**Summary**:
- `padStart()` pads the beginning of a string.
- `padEnd()` pads the end of a string.
- Both methods ensure the final string reaches the specified length and use the provided padding string or a default space if none is provided.

### JavaScript String `split()` Method Summary

**Purpose**: The `split()` method divides a string into an array of substrings based on a specified separator.

**Syntax**:
```javascript
string.split([separator, [, limit]]);
```
- **separator** (optional): Specifies where to split the string. Can be a string or a regular expression. If omitted or not found, the entire string is returned as a single element.
- **limit** (optional): An integer that limits the number of substrings in the resulting array. If `limit` is 0, returns an empty array. If `limit` is 1, returns an array with the original string.

**Examples**:

1. **Splitting into Words**:
   ```javascript
   let str = 'JavaScript String split()';
   let substrings = str.split(' ');
   console.log(substrings); // ["JavaScript", "String", "split()"]
   ```
   - Splits the string into an array of words using a space as the separator.

2. **Limiting Number of Substrings**:
   ```javascript
   let str = 'JavaScript String split()';
   let substrings = str.split(' ', 2);
   console.log(substrings); // ["JavaScript", "String"]
   ```
   - Limits the result to the first two substrings.

3. **Using Regular Expressions**:
   ```javascript
   let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
   let sentences = paragraph.split(/[!,?,.]/);
   console.log(sentences); // ["Good Morning", " How are you", " This is John", " John is my friend", ""]
   ```
   - Splits the string based on punctuation marks.

4. **Including Matched Results**:
   ```javascript
   let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
   let sentences = paragraph.split(/([!,?,.])/);
   console.log(sentences); // ["Good Morning", "!", " How are you", "?", " This is John", ".", " John is my friend", ".", ""]
   ```
   - Includes punctuation marks in the resulting array.

**Summary**:
- Use `split()` to break a string into an array of substrings using a separator.
- The `limit` parameter controls the number of substrings returned.


### JavaScript String `substring()` Method Summary

**Purpose**: The `substring()` method extracts a portion of a string between two specified indexes.

**Syntax**:
```javascript
str.substring(startIndex [, endIndex]);
```

- **`startIndex`**: The index of the first character to include in the substring.
- **`endIndex`** (optional): The index of the first character to exclude from the substring. If omitted, the substring extends to the end of the string.

**Behavior**:
- If `startIndex` equals `endIndex`, an empty string is returned.
- If `startIndex` is greater than `endIndex`, the method swaps them.
- If `startIndex` or `endIndex` is less than 0 or greater than the string’s length, it is treated as 0 or the string’s length, respectively.
- If any parameter is `NaN`, it is treated as 0.

**Examples**:

1. **Extracting a Substring from the Beginning**:
   ```javascript
   let str = 'JavaScript Substring';
   let substring = str.substring(0, 10);
   console.log(substring); // "JavaScript"
   ```

2. **Extracting a Substring to the End**:
   ```javascript
   let str = 'JavaScript Substring';
   let substring = str.substring(11);
   console.log(substring); // "Substring"
   ```

3. **Extracting Domain from an Email**:
   ```javascript
   let email = 'john.doe@gmail.com';
   let domain = email.substring(email.indexOf('@') + 1);
   console.log(domain); // "gmail.com"
   ```

**Summary**:
- Use `substring()` to get a part of a string between specified start and end indexes.
- If no end index is provided, the substring extends to the end of the string.

### JavaScript String `slice()` Method Summary

**Purpose**: The `slice()` method extracts a portion of a string and returns it as a new substring.

**Syntax**:
```javascript
str.slice(start [, end]);
```

**Parameters**:
- **`start`**: The zero-based index where extraction begins. If negative, it starts from `str.length + start`.
- **`end`** (optional): The zero-based index where extraction ends (excluding this index). If negative, it is treated as `str.length + end`. If omitted or greater than the string length, extraction goes to the end of the string.

**Behavior**:
- If `start` is omitted or not a number, extraction starts from the beginning of the string.
- If `end` is omitted, extraction extends to the end of the string.
- If `start` is greater than or equal to the string length, or `end` is before `start`, the result is an empty string.

**Examples**:

1. **Extracting from a Specific Start**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(3);
   console.log(substr); // "lo"
   ```

2. **Using Negative Start**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(-3);
   console.log(substr); // "llo"
   ```

3. **Extracting with Start and End**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(0, 2);
   console.log(substr); // "He"
   ```

4. **Using Negative End**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(0, -2);
   console.log(substr); // "Hel"
   ```

5. **Extracting with Out of Range End**:
   ```javascript
   const str = 'Hello';
   const substr = str.slice(2, 6);
   console.log(substr); // "llo"
   ```

6. **Practical Example (Email Local Part)**:
   ```javascript
   let email = 'john@example.com';
   let localPart = email.slice(0, email.indexOf('@'));
   console.log(localPart); // "john"
   ```

**Summary**:
- Use `slice()` to extract a substring from a string between specified start and end indexes.


### JavaScript String `concat()` Method Summary

**Purpose**: The `concat()` method combines multiple strings into a single new string.

**Syntax**:
```javascript
string.concat(str1, [...strN]);
```

**Behavior**:
- **Parameters**: Accepts one or more strings to concatenate.
- **Non-String Arguments**: Converts non-string arguments to strings before concatenating.

**Recommendations**:
- For better performance, use the `+` or `+=` operator for string concatenation instead of `concat()`.

**Examples**:

1. **Concatenating Strings**:
   ```javascript
   let greeting = 'Hi';
   let message = greeting.concat(' ', 'John');
   console.log(message); // "Hi John"
   ```

2. **Concatenating an Array of Strings**:
   ```javascript
   let colors = ['Blue', ' ', 'Green', ' ', 'Teal'];
   let result = ''.concat(...colors);
   console.log(result); // "Blue Green Teal"
   ```

3. **Concatenating Non-String Arguments**:
   ```javascript
   let str = ''.concat(1, 2, 3);
   console.log(str); // "123"
   ```

**Summary**:
- The `concat()` method joins a list of strings into one new string.
- Prefer using `+` or `+=` for string concatenation for better performance.


### JavaScript String `repeat()` Method Summary

**Purpose**: The `repeat()` method creates a new string by repeating the original string a specified number of times.

**Syntax**:
```javascript
str.repeat(count)
```

**Parameters**:
- **count**: An integer specifying the number of times to repeat the string. It must be greater than 0 and less than +Infinity.

**Behavior**:
- If `count` is `0`, the method returns an empty string.
- If `count` is negative or +Infinity, the method throws a `RangeError`.

**Examples**:

1. **Basic Usage**:
   ```javascript
   let result = '*'.repeat(1);
   console.log(result); // "*"

   result = '*'.repeat(3);
   console.log(result); // "***"

   result = '*'.repeat(0);
   console.log(result); // ""
   ```

2. **Handling Negative Count**:
   ```javascript
   let result = '*'.repeat(-1);
   // Throws: RangeError: Invalid count value
   ```

3. **Using with Non-String Objects**:
   ```javascript
   const message = {
     toString() {
       return 'Hi';
     },
   };

   const result = String.prototype.repeat.call(message, 3);
   console.log(result); // "HiHiHi"
   ```

**Summary**:
- Use `repeat()` to repeat a string a specified number of times.
- The method is versatile and can be applied to objects with a `toString()` method.


### JavaScript String `replace()` Method Summary

- **Purpose**: The `replace()` method is used to create a new string by replacing a specified substring with a new one.
- **Syntax**: `let newStr = str.replace(substr, newSubstr);`
  - `str`: The original string.
  - `substr`: The substring to be replaced.
  - `newSubstr`: The new substring that will replace `substr`.

- **Behavior**:
  - The method returns a new string and does not modify the original string.
  - By default, only the first occurrence of the substring is replaced.

- **Example**:
  ```javascript
  let str = 'JS will, JS will rock you!';
  let newStr = str.replace('JS', 'JavaScript');
  console.log(newStr); // Output: 'JavaScript will, JS will rock you!'
  ```

- **Replacing All Occurrences**:
  - Use regular expressions with the global flag (`g`).
  - **Example**:
    ```javascript
    let newStr = str.replace(/JS/g, 'JavaScript');
    console.log(newStr); // Output: 'JavaScript will, JavaScript will rock you!'
    ```

- **Case-Insensitive Replacement**:
  - Use the ignore flag (`i`) in regular expressions.
  - **Example**:
    ```javascript
    let newStr = str.replace(/JS/gi, 'JavaScript');
    console.log(newStr); // Output: 'JavaScript will, JavaScript will rock you!'
    ```

- **Using a Replacement Function**:
  - Pass a function instead of a string as the second argument to dynamically determine the replacement.
  - **Example**:
    ```javascript
    let newStr = str.replace(/apples|bananas/gi, (match) => match.toUpperCase());
    console.log(newStr); // Output: 'I like to eat, eat, eat APPLES and BANANAS'
    ```

- **Summary**:
  - Use `replace()` to substitute a substring with a new one.
  - For multiple replacements or pattern matching, use regular expressions.


  ### JavaScript String `replaceAll()` Method Summary

- **Purpose**: The `replaceAll()` method replaces all occurrences of a substring or pattern in a string with a new string.

- **Syntax**: `String.prototype.replaceAll(pattern, replacement)`
  - `pattern`: Can be a string or a regular expression (with a global flag `g` if it's a regex).
  - `replacement`: Can be a string or a callback function that determines the replacement.

- **Behavior**:
  - Returns a new string with all matches of the pattern replaced.
  - Does not modify the original string.

- **Callback Function**:
  - If `replacement` is a function, it receives three arguments:
    - `match`: The matched substring.
    - `offset`: The position of the match within the original string.
    - `str`: The original string.

- **Examples**:

  1. **Simple Replacement**:
     ```javascript
     let str = 'JS will, JS will, JS will rock you.';
     let newStr = str.replaceAll('JS', 'JavaScript');
     console.log(newStr); // Output: 'JavaScript will, JavaScript will, JavaScript will rock you.'
     ```

  2. **Using a Callback Function**:
     ```javascript
     let str = 'JS will, Js will, js will rock you.';
     let pattern = /js/gi;

     let newStr = str.replaceAll(pattern, (match, offset, str) => {
         if (match === 'JS') return 'JavaScript';
         if (match === 'Js') return 'Javascript';
         if (match === 'js') return 'javascript';
         return '';
     });

     console.log(newStr); // Output: 'JavaScript will, Javascript will, javascript will rock you.'
     ```

- **Summary**: Use `replaceAll()` to replace every occurrence of a substring or pattern with a new string, providing a straightforward way to perform global replacements.


### JavaScript `toUpperCase()` Method Summary

- **Purpose**: The `toUpperCase()` method converts all characters in a string to uppercase and returns a new string.

- **Syntax**: `str.toUpperCase()`
  - `str`: The original string to be converted.

- **Behavior**:
  - Returns a new string with all characters in uppercase.
  - The original string remains unchanged, as strings are immutable.

- **Example**:
  ```javascript
  const message = 'Hello';
  const newMessage = message.toUpperCase();
  console.log(newMessage); // Output: 'HELLO'
  ```

- **Handling `null` or `undefined`**:
  - Calling `toUpperCase()` on `null` or `undefined` throws a `TypeError`.
  - To avoid errors, use optional chaining:
    ```javascript
    console.log(getUserRanking(-1)?.toUpperCase()); // Output: undefined
    ```

- **Converting Non-Strings**:
  - You can use `toUpperCase()` on non-string values by using `String.prototype.toUpperCase.call()`:
    ```javascript
    const completed = true;
    const result = String.prototype.toUpperCase.call(completed);
    console.log(result); // Output: 'TRUE'
    ```

- **Summary**: Use the `toUpperCase()` method to convert all characters in a string to uppercase.

### JavaScript `toLowerCase()` Method Summary

- **Purpose**: The `toLowerCase()` method converts all characters in a string to lowercase and returns a new string.

- **Syntax**: `str.toLowerCase()`
  - `str`: The original string to be converted.

- **Behavior**:
  - Returns a new string with all characters in lowercase.
  - The original string remains unchanged, as strings are immutable.

- **Example**:
  ```javascript
  const message = 'Hi';
  const newMessage = message.toLowerCase();
  console.log(newMessage); // Output: 'hi'
  ```

- **Handling `null` or `undefined`**:
  - Calling `toLowerCase()` on `null` or `undefined` throws a `TypeError`.
  - To avoid errors, use optional chaining:
    ```javascript
    console.log(findUserById(-1)?.toLowerCase()); // Output: undefined
    ```

- **Converting Non-Strings**:
  - You can use `toLowerCase()` on non-string values by using `String.prototype.toLowerCase.call()`:
    ```javascript
    const user = {
      username: 'JOE',
      toString() {
        return this.username;
      },
    };

    const username = String.prototype.toLowerCase.call(user);
    console.log(username); // Output: 'joe'
    ```

- **Summary**: Use the `toLowerCase()` method to convert all characters in a string to lowercase.