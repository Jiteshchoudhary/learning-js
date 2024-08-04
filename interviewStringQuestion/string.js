//write a function to reverse string 
function reverseString(string) {
    let temp = '';
    for (let i = string.length - 1; i >= 0; i--) {
        let element = string[i];
        temp += element;
    }
    return temp;
}

// console.log(reverseString("jitesh"))

function checkPalindrome(string) {
    let revStr = reverseString(string);
    return revStr == string;
    //string is same if we reverse it aba =>aba

}
// console.log(checkPalindrome("aba"));

// function lengthOfLongestSubstring(str) {
//     //problem -> 'aabvavwxyz'
//     console.log("orignal string is ", str);
//     let start = 0;
//     let end = 0;
//     let maxLength = 0;
//     let subStr = new Set();
//     while (end < str.length) {
//         let element = str[end];
//         if (!subStr.has(element)) {
//             subStr.add(element);
//             maxLength = Math.max(maxLength, subStr.size);
//             console.log(subStr.values());
//             end++;
//         } else {
//             subStr.delete(element);
//             start++;
//         }
//     }
//     return maxLength;
// }

function lengthOfLongestSubstring(str) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    let subStr = new Set();
    //loop chalo
    while (end < str.length) {
        let element = str[end];
        console.log("element", element);
        if (!subStr.has(element)) {
            subStr.add(element);
            maxLength = Math.max(maxLength, subStr.size);
            end++;
        } else {
            subStr.delete(element)
            start++;
        }
    }
    return maxLength;
}
// Example usage:
// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

function nonRepeatingCharacter(string) {
    let freq = {};
    for (const s of string) {
        freq[s] = freq[s] !== undefined ? freq[s] + 1 : 1
    }
    for (const s of string) {
        if (freq[s] === 1) {
            return s;
        }
    }
    return null;
    // return freq;
}
// Find the First Non-Repeating Character:
// console.log("nonRepeatingCharacter", nonRepeatingCharacter("awesome"))

function checkAnagramString(str1, str2) {
    const stringFreq = {};
    const strFreq2 = {};
    //means we are check two string is anagarm or not okay
    if (str1.length !== str2.length) {
        return false;
    } else {
        for (const s of str1) {
            stringFreq[s] = (stringFreq[s] || 0) + 1;

        }

        for (const s of str2) {
            strFreq2[s] = (strFreq2[s] || 0) + 1;
        }
        console.log(stringFreq, strFreq2);
        for (const s of str1) {
            //now check the frequency of each 
            console.log('string freq 1', stringFreq[s], strFreq2[s]);
            if (stringFreq[s] != strFreq2[s]) {
                return false;
            }
        }
    }
    return true;
}

// console.log("checkAnagramString", checkAnagramString("silents", "listens"))

function countVowelAndConstants(string) {
    let vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let constantCount = 0;
    for (let s of string) {
        if (vowels.includes(s)) {
            vowelCount += 1;
        } else {
            constantCount += 1;
        }
    }
    return { vowelCount, constantCount }
}
// console.log(countVowelAndConstants("jiteshaweseome sv"))

function removeDuplicateCharString(string) {
    let uniqueString = '';
    for (let i = 0; i < string.length; i++) {
        let element = string[i];
        if (!uniqueString.includes(element)) {
            uniqueString += element;
        }
    }
    // let str = [... new Set(string)];
    // str = str.join('')
    return uniqueString;

}
// console.log(removeDuplicateCharString('jiteshjichoudaery'));

function checkParenthesesValid(str) {
    let stack = [];
    let parenthess = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    for (let char of str) {
        if (char in parenthess) {
            if (stack.length === 0 || stack[stack.length - 1] !== parenthess[char]) {
                return false;
            }
            stack.pop();
        } else if (char == '{' || char == '[' || char == '(') {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log("checkParenthesesValid", checkParenthesesValid('[{()}]'))