// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let arr = ['a','e','i','o','u']
    for (i=0, j=0; i < str.length;i++){
      if(arr.includes(str[i])){
        j++
      }
      
    }
    return j
  }