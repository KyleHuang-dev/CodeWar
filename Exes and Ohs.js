// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let arrStr= [...str.toLowerCase()]
    for(i=0,x=0,o=0; i<arrStr.length; i++){
      arrStr[i] === 'x'? x++ : arrStr[i] === 'o'? o++ : null
    }
    return x === o? true: false
  }

// solution with filter method
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }