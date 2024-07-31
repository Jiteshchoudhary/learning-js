function reverseWord(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}


function reverseString(str) {
    let reverseString = '';
    let word = ''
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        if (element === ' ') {
            reverseString += reverseWord(word) + ' ';
            word = '';
            // word += element;
        } else {
            word += str[i];
        }
    }
    reverseString += reverseWord(word);
    // console.log("word ", word, "reverse string", reverseString);
    return reverseString;
}

console.log(reverseString('awesome hello'))
// //javascript searching methods
// //search indexof lastIndexof inculdes startsWith endsWith
// let str = "jitesh choudhary";
// console.log(str.search("jitesh")); //its give the index of first matched


// //index of is also matched the substring okay and return it
// console.log(str.indexOf("jiteshji"));
// console.log(str.indexOf("ary"))

// function longestUniqueSubstring(str) {
//     let longest = ""; // To store the longest unique substring
//     let current = ""; // To store the current substring being checked

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         // Check if the character is already in the current substring
//         if (current.indexOf(char) !== -1) {
//             // If it is, update the current substring by slicing off the part before the duplicate
//             current = current.slice(current.indexOf(char) + 1);
//         }

//         // Add the current character to the current substring
//         current += char;

//         // Update the longest substring if current is longer
//         // console.log("current string", current, "longest", longest);
//         if (current.length > longest.length) {
//             longest = current;
//         }
//     }

//     console.log("longest string is", longest);
//     return longest.length;
// }

// // Example usage:
// let str1 = "abcabcbb";
// console.log(longestUniqueSubstring(str1)); // Output: 3 ("abc")

// let str2 = "bbbbb";
// console.log(longestUniqueSubstring(str2)); // Output: 1 ("b")

// let str3 = "pwwkew";
// console.log(longestUniqueSubstring(str3)); // Output: 3 ("wke")


function checkAngramString(str1, str2) {
    if (str1.length === str2.length) {
        //okay string check karo pehle okay phir karte he age ka okay.
        //ek tarike ya he ki frequency count kar lo aur dusri me check kar lo okay
        //mtlb dono object ki properties same he ki nahi
        const firstString = {};
        const secondStringCount = {};
        for (const char of str1) {
            if (!firstString[char]) {
                firstString[char] = 1;
            } else {
                firstString[char] = firstString[char] + 1;
            }
        }
        //aab second me check karo ki woh properites utni exists karti he ki nahi;
        for (const char of str2) {
            if (!secondStringCount[char]) {
                secondStringCount[char] = 1;
            } else {
                secondStringCount[char] = secondStringCount[char] + 1;
            }
        }
        //now again check it with for loop okay
        for (const char of str1) {
            if (firstString[char] !== secondStringCount[char]) {
                return false;
            }
        }
        return true;
    }
    console.log("firstString", firstString);

    //means both string are of same range
}
console.log(checkAngramString("abac", "abac"))