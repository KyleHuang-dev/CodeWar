// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  
    //concat the two string to array
    //sort the array
    //push the el if its not exist
    const arr = [...s1].concat([...s2])
    
    return arr.sort().reduce( (acc,cur)=> {
      if(acc.indexOf(cur)===-1){
        acc.push(cur)
      }return acc
    },[]).join('')
  }

  // use new Set method
  function longest(s1, s2) {
    return [... new Set(s1+s2)].sort().join('')
  }