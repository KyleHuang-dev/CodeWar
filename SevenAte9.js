// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str){
    let arr = str.split('')
    return arr.filter( (num, i)=>  !(num ==9 && arr[i-1]==7 && arr[i+1]==7)).join('')
  }