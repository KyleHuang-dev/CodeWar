// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    //convert string to array
    //check each world length
    let arr = s.split(' ')
    return Math.min(...(arr.map(el=> el.length)))
  }