// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let newArr = word.toLowerCase().split('').map((letter,i,arr) =>{
       if (arr.filter(el=> el === letter).length > 1)
         letter =')'
       else 
         letter = '('
      return letter
     })
    return newArr.join('')
   }
   

// use indexOf and lastIndexOf to check if there are repeat element
function duplicateEncode(word){
    return word.toLowerCase().split('').map((letter,i,arr)=>{
      letter = arr.indexOf(letter) === arr.lastIndexOf(letter) ? "(" : ")";
      return letter
    }).join('')
}
