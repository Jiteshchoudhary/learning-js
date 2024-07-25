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