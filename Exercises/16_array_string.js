//Array join method it is used to convert array into string by separator
// **Syntax:**
// ```javascript
// Array.prototype.join([separator])
// ```
// - **separator**: An optional string to separate each pair of adjacent elements. Defaults to a comma (`,`) if not provided.

// **Behavior:**
// - If the array has one element, `join()` returns that element as a string without using the separator.
// - If the array is empty, `join()` returns an empty string.
// - Non-string elements are converted to strings before joining.
// - `undefined`, `null`, and empty array elements are converted to an empty string.

const itemList = ['btn', 'btn-primary', 'btn-active'];
console.log(itemList.join(''));
// The `join()` method is used to concatenate array elements into a single string with a specified separator, providing flexibility in formatting and transforming arrays into strings.