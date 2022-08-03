

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)


// assign your RegExp to REGEXP

//solution with withou REGEXP
function doTest(str){
    let sixChar = false;
    let lowerLetter = false;
    let upperLetter = false;
    let digit = false;
    let onlyLetterNumber = false;
    
    let strArr = str.split('')
    
    if (strArr.length >= 6)
      sixChar = true;
    
    if (strArr.some(el => el>='a'&&el<='z'))
      lowerLetter = true;
    
    if (strArr.some(el => el>='A'&&el<='Z'))
      upperLetter = true;  
  
    if (strArr.some(el => el>='0'&&el<='9'))
      digit = true;  
    
    if (strArr.every(el => el>='A'&&el<='Z'||  el>='a'&&el<='z'|| el>='0'&&el<='9'))
      onlyLetterNumber = true;  
    
    return (sixChar && lowerLetter && upperLetter && digit && onlyLetterNumber)
  }
  
  
  console.log(doTest('fjd3IR9') )//, true);)
          console.log(doTest('ghdfj32'))//, false);)
          console.log(doTest('DSJKHD23'))//, false);)
          console.log(doTest('dsF43'))//, false);)
          console.log(doTest('4fdg5Fj3'))//, true);)
          console.log(doTest('DHSJdhjsU'))//)