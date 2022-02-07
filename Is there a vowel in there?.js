// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
    return a.map( num => {
      let code = String.fromCharCode(num)
      if ( code ==='a'|| code ==='e'|| code==='i'||code === 'o'||code ==='u' ){
        return code
      }else{
        return num
      }
    } )
  }

  function isVow(a){
    return a.map( num => 'aeiou'.includes(  code = String.fromCharCode(num) ) ? code : num )
  }
