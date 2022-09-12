// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.




function findLongest(array){
    let length = array.map(num => String(num).length);
    return array[length.indexOf(Math.max(...length))]
 }