// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


// this function works perfect in the broswer, but not in Codewar
function incrementString (string) {
  
    let numArr = string.split('').filter(el=> el == 0  || Number(el));
    let strArr = string.split('').filter(el=> !Number(el) && el != 0);
    let numLength = numArr.length
  
    if (numArr.length === 0){
      return strArr.join('') +"1"
    }else{
      numArr = +numArr.join('') + 1
      let zeroLength;
      if (numLength != 0){
        zeroLength = numLength - String(numArr).length;
      }else{
        zeroLength = 0
      }
      
      return strArr.join('') + '0'.repeat(zeroLength) + numArr
    }
    
  }