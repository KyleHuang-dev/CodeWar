// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//p: sentences of string
//R: return the array
//E:
//P: 

function last(x){
    let arr = x.split(' ')
    return arr.sort((a, b) => {
      if ((a[a.length -1]) < (b[b.length-1])){
        return -1
      }
    })
  }