// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.

function titleCase(title, minorWords="") {
    // convert the strings to array
    // loop the array, replace the string to proper case
  //   if (title.length === 0)
  //     return ''
    
    if (minorWords==='')
      return title.split(' ').map(str=> properCase(str)).join(' ')
    
    const minorArr = minorWords.toLowerCase().split(' ')
    let [first,...rest] = title.toLowerCase().split(' ')
      
     first = properCase(first)
     rest = rest.map(str => minorArr.indexOf(str)>-1 ? str : properCase(str)).join(' ')
     return first + " "+ rest
    
  }
  
  function properCase(str){
      return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }