### Summary: JavaScript `Array.join()` Method

**Introduction:**
The `join()` method concatenates all elements of an array into a single string, separated by a specified separator.

**Syntax:**
```javascript
Array.prototype.join([separator])
```
- **separator**: An optional string to separate each pair of adjacent elements. Defaults to a comma (`,`) if not provided.

**Behavior:**
- If the array has one element, `join()` returns that element as a string without using the separator.
- If the array is empty, `join()` returns an empty string.
- Non-string elements are converted to strings before joining.
- `undefined`, `null`, and empty array elements are converted to an empty string.

**Examples:**

1. **Joining CSS Classes:**
   ```javascript
   const cssClasses = ['btn', 'btn-primary', 'btn-active'];
   const btnClass = cssClasses.join(' ');
   console.log(btnClass); // Output: "btn btn-primary btn-active"
   ```

2. **Replacing All Occurrences of a String:**
   ```javascript
   const title = 'JavaScript array join example';
   const url = title.split(' ').join('-').toLowerCase();
   console.log(url); // Output: "javascript-array-join-example"
   ```

   **Steps:**
   1. Split the title string by spaces into an array using `split()`.
   2. Join all elements of the array into a string with hyphens (`-`) using `join()`.
   3. Convert the resulting string to lowercase using `toLowerCase()`.

**Conclusion:**
The `join()` method is used to concatenate array elements into a single string with a specified separator, providing flexibility in formatting and transforming arrays into strings.