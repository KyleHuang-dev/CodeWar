// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


// parameter num will be whole number and always +
// return string 
// split the num to array
// loop the array, if not 0, num will concat with 0s.
// if it is 0, ""

function expandedForm(num) {
    const numArr = String(num).split('');
    let digit = numArr.length;
    let result = "";
    for ( i = 0 ; i < digit; i++){
      if (numArr[i] === "0")
        result += "";
      else if (i === 0)
        result += numArr[i] + '0'.repeat(digit - 1)
      else
        result += " + " + numArr[i] + '0'.repeat(digit - 1 - i ) 
    }
    return result;
  }