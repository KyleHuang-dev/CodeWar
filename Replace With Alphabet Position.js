// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )



//convert the string to array
  //to upper lower case
  //the charCodeAt() should between 97- 122.
  // minus 96 to get alphabet order.
  // array, letter and punch 

  function alphabetPosition(text) {
    let lowerCaseArr = text.toLowerCase().split('');
    let numArr = lowerCaseArr.map(str=> str.charCodeAt() -96);
    return numArr.filter( el => el>= 1 && el<=26).join(' ');
    
  }