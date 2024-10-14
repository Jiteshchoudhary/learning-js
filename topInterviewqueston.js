
//here are top 50 coding question for array 
let array = [1, 2, 3, 4, 3, 4, 5, 12, 54, 6];

function reverseArray(array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        tempArray.push(array[array.length - 1 - i]);
    }
    return tempArray;
}
function largestElement(array) {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

function smallestElement(array) {
    let smallest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

function duplicate(array) {
    let duplicate = [];
    let uniqueLookUp = {}
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (!uniqueLookUp[element]) {
            uniqueLookUp[element] = true;
            duplicate = [...duplicate, element]
        }
    }
    return duplicate;
}
// console.log("reverseArray", reverseArray([1, 2, 3, 5, 5, 21]));

function checkPalindromeArray(array) {
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return false;
        }
    }
    return true
}

function flattenArray(array, items = []) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (!Array.isArray(element)) {
            items.push(element);
        } else {
            flattenArray(element, items);

        }
    }
    return items;
}
function sumOfArray(array) {
    return array.reduce((prev, next) => {
        return prev + next;
    }, 0)
}

function findIndex(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;

}

function countOccurrence(array) {
    const freq = {}
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        freq[element] = (freq[element] || 0) + 1;
    }
    return freq;
}


function countSpecificOccurrence(array, element) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (element == item) {
            count += 1;
        }
    }
    return count;
}


function secondLargestElement(array, k) {
    //first sort the array 
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    array = [...new Set(array)]
    console.log(array)
    return array[array.length - k];
}


function rotateArrayRight(array, k) {
    for (let i = 0; i < k; i++) {
        let lastElement = array.pop(); //remove last element
        array.unshift(lastElement); //add to element in first
    }
    return array;
}
function leftRotationArray(array, k) {
    for (let i = 0; i < k; i++) {
        let firstElement = array.shift(); //remove first element
        array.push(firstElement); //add element to last
    }
    return array;
}

//merged array into sorted array
function mergedSortedArray(arr1, arr2) {
    // console.log(arr1, arr2)
    let mergedArray = [...arr1, ...arr2];
    // console.log("merged sorted array@", mergedArray);
    return mergedArray;
}


function findMissingNumber(array) {
    let n = array.length + 1;
    let totalSum = array.reduce((prev, next) => {
        return prev + next;
    }, 0);
    let actualValue = (n * (n + 1)) / 2
    console.log("actual values@", actualValue);
    let missing = actualValue - totalSum;
    return missing;
}
function findIntersection(array1, array2) {
    let intersection = []
    for (let i = 0; i < array1.length; i++) {
        let element = array[i];
        if (array2.includes(element)) {
            intersection.push(element);
        }
    }
    return intersection;
    //means find intersection which are common in both array okay;

}

function unionArray(arr1, arr2) {
    let combine = [...new Set([...arr1, ...arr2])];
    console.log(combine)
}
function sumOfPositive(array) {
    let sum = 0;
    let positiveValues = array.filter((ele) => ele > 0);
    console.log("psotoive@", positiveValues)
    console.log(array.length)
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        console.log(element);
        sum += element < 0 ? element : 0;
    }
    return sum;
}
function evenArrayIndex(array) {
    return array.filter((element, index) => index % 2 === 0);

}

function findLongestString(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element.length > longest.length) {
            longest = element;
        }
    }
    return longest;
}
function sortArrayOfStringByLength(array) {
    return array.sort((a, b) => b.length - a.length)
}

function createHistogram(array) {
    let freq = {}
    let element = '';
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        freq[element] = (freq[element] || 0) + 1;
    }
    for (key in freq) {
        console.log(`${key} : ${"*".repeat(freq[key])}`)
        if (freq[key] === 1) {
            element = key;
        }
    }
    console.log("element@@", element);
}

function maxSubArraySum(arr) {
    // Initialize the maxSum to a very small number and currentSum to 0
    let maxSum = -Infinity;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        currentSum += element;
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum

}

function isSubset(arr1, arr2) {
    // Convert the first array to a Set for fast lookups
    const set = new Set(arr1);

    // Check if every element in arr2 exists in the Set
    return arr2.every(element => set.has(element));
}

function findCommonElements(arr1, arr2, arr3) {
    let firstUnique = new Set(arr1);
    let commonWithSecond = arr2.filter((ele) => firstUnique.has(ele));
    let commandUnique = new Set(commonWithSecond);
    let finalSubset = arr3.filter((ele) => commandUnique.has(ele));
    return finalSubset;
}

function getUniqueElement(array, key) {
    const seen = {};
    const uniqueItem = [];
    for (let item of array) {
        let value = item[key];
        if (!seen[value]) {
            seen[value] = true;
            uniqueItem.push(item);
        }
    }
    return uniqueItem;
}

const objectsArray = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' },
    { id: 2, name: 'Bob' },
];

const uniqueById = getUniqueElement(objectsArray, 'id');
console.log(uniqueById);

function hasConsecutiveElements(array) {
    if (array.length === 0) return true; // Empty array is considered consecutive

    // Find the minimum and maximum values in the array
    const min = Math.min(...array);
    const max = Math.max(...array);

    // Check if the range is equal to the length of the array minus one
    return max - min === array.length - 1;
}


function isBalancedParentheses(array) {
    let stack = [];
    let openPair = ['(', '{', '['];
    let closePair = [')', '}', ']'];
    for (let char of array) {
        if (openPair.includes(char)) {
            stack.push(char);
        } else if (closePair.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            let lastElement = stack.pop();
            if (openPair.indexOf(lastElement) !== closePair.indexOf(char)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Example usage:
console.log(isBalancedParentheses(['(', ')', '{', '}', '[', ']'])); // Output: true
console.log(isBalancedParentheses(['(', '{', '}', '[', ')']));      // Output: false
console.log(isBalancedParentheses(['(', '[', ']', '}', ')']));      // Output: false
console.log(isBalancedParentheses(['(', '[', '{', '}', ']', ')'])); // Output: true


// Example usage:
// console.log(hasConsecutiveElements([1, 2, 3, 4, 5])); // Output: true
// console.log(hasConsecutiveElements([3, 2, 5, 4, 6])); // Output: true
// console.log(hasConsecutiveElements([1, 3, 4, 5]));    // Output: false
// console.log(hasConsecutiveElements([-2, -1, 0, 1, 2])); // Output: true
// console.log(hasConsecutiveElements([])); // Output: true (empty array is considered consecutive)

// console.log(findCommonElements([1, 2, 3], [2, 3, 4], [3, 4, 5])); // Output: [3]
// console.log(findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd'], ['c', 'd', 'e'])); // Output: ['c']
// console.log(findCommonElements([10, 20, 30], [20, 30, 40], [30, 40, 50])); // Outpu

// Example usage:
// console.log(isSubset([1, 2, 3, 4], [2, 3])); // Output: true
// console.log(isSubset([1, 2, 3, 4], [2, 5])); // Output: false
// console.log(isSubset([], [2])); // Output: true (empty array is a subset of any array)


// Example usage:
// console.log(maxSubArraySum([1, -2, 3, 4, -1, 2, 1, -5, 4])); // Output: 9

// console.log(createHistogram([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// console.log("sorted", sortArrayOfStringByLength(["jitesh", "awwwwwwwddddddddddcv", "awesone", "hashNode"]))

// console.log("findLongestString", findLongestString(["jitesh", "awesone", "hashNode"]))
// console.log(evenArrayIndex([12, 21, 21, 423, 53, 312]))
// console.log('sum of positive', sumOfPositive([-4, -4, 2, 4, 3]))
// console.log(unionArray([1, 2, 4], [3, 8, 4, 7]))
// console.log(findIntersection([1, 2, 5], [1, 2, 4]))
// console.log(findMissingNumber([1, 2, 4, 5]));
// console.log(mergedSortedArray(array, [91, 86, 95, 36, 12, 52]))
// console.log(rotateArrayRight(array, 3));
// console.log(leftRotationArray(array, 3))
// console.log(secondLargestElement(array, 2));
// console.log(countSpecificOccurrence(array, 3))
// console.log(findIndex(array, 6))
// console.log("countFreq", countOccurrence(array));
// console.log(sumOfArray(array));
// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray));
// console.log(checkPalindromeArray([1, 2, 3, 2, 1, 6]))
// console.log(largestElement(array));
// console.log(smallestElement([1, , -312, 4, 5 - 2, -21, -0]));
// console.log(duplicate([1, 1, 1, 1, 3, 4, 3, 5, 3, 2, 5, 453]));