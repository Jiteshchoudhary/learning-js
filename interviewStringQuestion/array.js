//find max and minimum from array
// Find the Maximum and Minimum in an Array:
function max(array) {
    let maxiumu = array[0];
    let minimum = array[0];
    for (const arrays of array) {
        if (arrays > maxiumu) {
            maxiumu = arrays;
        }
    }

    for (const arrays of array) {
        if (arrays < minimum) {
            minimum = arrays;
        }
    }
    return { maxiumu, minimum }
}

console.log(max([2, 4, 34, 1, 34, 7, 81]));