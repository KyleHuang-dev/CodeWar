// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


// prameter string that separate with - or _ no numbers
// return string in camelCasing
// ex: A-B-C ABC
// ex: this is example => thisIsExample

// split the string to array by - or _
// the arr[0] stay the some the first letter of arr[1 and up] is upperCase

function toCamelCase(str){
    const strArr = str.includes('-') ? str.split('-'): str.split('_')
    
    return strArr.map((word, i)=>{
      if (i === 0)
        return word
      else
        return word[0].toUpperCase() + word.slice(1)
    }).join('')
  }