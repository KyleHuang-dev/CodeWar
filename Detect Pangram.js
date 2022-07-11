// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let letterArr = 'abcdefghijklmnopqrstuvwxyz';
    
    letterArr = letterArr.split('')
    
    let stringArr = string.toLowerCase().split('')
    
    for ( i = 0; i< string.length; i++){
        if (letterArr.indexOf(stringArr[i])>=0){
            letterArr.splice(letterArr.indexOf(stringArr[i]),1)
        }
        
    }
  
     return letterArr.length === 0 ? true: false
    
  }