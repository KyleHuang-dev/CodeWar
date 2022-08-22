// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// string array, lower case letter, separate with space
// return the a single string or word that has the hightest scoring.
// ex: man i need a taxi
// convert the letter in the string to num by atCharCode(0) - 96(a is 97)

function high(x){
    const stringArr = x.split(' ');
    const score = stringArr.map( word => word.split('').reduce((sum,cur)=> (
      sum+= cur.charCodeAt() - 96
    ),0))
    
    let index = score.indexOf(Math.max(...score));
    return stringArr[index]
  }