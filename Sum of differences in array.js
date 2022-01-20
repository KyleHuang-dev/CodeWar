// //

// our task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell). 

function sumOfDifferences(arr) {
    if (arr.length < 2) return 0
    
    let newArr = arr.sort((a, b) => b-a);
    let sum = 0
    for (i = 0 ; i < newArr.length -1 ; i++){
      sum += (newArr[i] - newArr[i+1])
    }
    return sum
  }


  // other solution

  function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}