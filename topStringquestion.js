//reverse a string 
function reverseString(string) {
    let rev = '';
    for (let i = 0; i < string.length; i++) {
        rev += string[string.length - 1 - i];
    }
    return rev;
}
function palindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true
}

function countVowels(str) {
    str = str.toLowerCase();
    let vowelRe = /[aeiou]/gi;
    return str.match(vowelRe).length;
}
function checkAngram(str1, str2) {
    //apply to lowercase on both
    //check length first
    //then count frequency both of them
    //then access the key property match it is same or not
}

function capitalizeWords(str) {
    return str.split(' ').map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1));
}
function stringCompression(string) {
    let freq = {};
    let finalString = '';
    for (let i = 0; i < string.length; i++) {
        let element = string[i];
        freq[element] = (freq[element] || 0) + 1;
    }
    for (let key in freq) {
        finalString += `${key}${freq[key]}`
    }
    return finalString;
}

function rotateString(str, n) {
    const index = n % str.length;
    let leftRotation = str.slice(0, index) + str.slice(index);
    console.log("left totations @@", leftRotation)
    return str.slice(index) + str.slice(0, index);

}

function arrayRotation(arr, k, direction) {
    // Normalize the value of k to handle cases where k is larger than array length
    k = k % arr.length;

    if (direction === 'left') {
        // For left rotation
        return [...arr.slice(k), ...arr.slice(0, k)];
    } else if (direction === 'right') {
        // For right rotation
        return [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)];
    } else {
        throw new Error("Invalid direction! Use 'left' or 'right'.");
    }
}

function longestSubstringWithoutRepeating(str) {
    let longest = '';
    let current = '';

    for (let char of str) {
        if (current.includes(char)) {
            current = current.slice(current.indexOf(char) + 1);
        }
        current += char;
        longest = current.length > longest.length ? current : longest;
    }

    return longest;
}

console.log(longestSubstringWithoutRepeating('abcabcbb')); // Output: 'abc'

// Example usage:
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayRotation(arr, 2, 'left'));  // Output: [3, 4, 5, 6, 1, 2]
// console.log(arrayRotation(arr, 2, 'right')); // Output: [5, 6, 1, 2, 3, 4]

// console.log(rotateString('abcdef', 3)); // Output: 'defabc'

// console.log(stringCompression('abababacabade'))
// console.log("capitalizeWords @@", capitalizeWords("hELLO coder awesome"))
// console.log("vowels", countVowels("hello"))
// console.log("reverse", reverseString("reverse"));
// console.log("palindrom", palindrome('aba'));
// console.log("palindrom", palindrome("abacad"))