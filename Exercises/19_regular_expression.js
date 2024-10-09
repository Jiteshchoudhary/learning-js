function containSubString(str, substring) {
    let regex = new RegExp(substring);
    return regex.test(str);
}

function countVowelString(str) {
    let regex = /ab/gi;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

console.log("count vowel string", countVowelString('qwefsdabfgaergabababababababbabaab'))


//validate hexadecimal color code.
function isValidHexColor(hex) {
    const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return regex.test(hex);
}

// Example usage
console.log(isValidHexColor("#fff")); // true
console.log(isValidHexColor("#123456")); // true
console.log(isValidHexColor("#12345g")); // false


//count consonants 

function countConsonant(str) {
    //extract all digits from the string 
    let digits = /\d+/g //extract all digits from thats.
    let words = /\b[a-zA-Z]+\b/g
    console.log("str words", str.match(words));
    return str.match(digits);
}
console.log("count consonants please okay got it", countConsonant('34dgbt'))


function replaceMultipleSpaces(str) {
    return str.replace(/\s+/g, ' ').trim();
}

// Example usage
console.log(replaceMultipleSpaces("This   is  a     test.")); // "This is a test."


function replaceNonNumeric(str) {
    let regex = /[^a-zA-Z]/g
    let vowel = /[aeiou]/gi;

    console.log('bbbbbbbbbb', str.match(vowel));
    let consnants = str.match(/[^aeiou]\^d/gi);
    console.log('constants we have here@@', consnants);
    return str.replace(regex, '');
}
console.log(replaceNonNumeric("abc@123!#")); // "abc123"

function getAllDigits(String) {
    return String.match(/\d+/g)
}
console.log(getAllDigits('jkgfnhj34838'))

function countOccurence(str, char) {
    let pattern = new RegExp(char, 'g');
    return str.match(pattern).length;
}
console.log("count occuerence we have here@@", countOccurence("jiteshji", 'j'))