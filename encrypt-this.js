// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    return text.split(' ').map(word => singleWord(word)).join(' ')
}

function singleWord (text){
if (text.length < 2)
    return text.charCodeAt(0)
else{
    let temp = ''
    return text.split('').map( (letter, i ,arr)=>{
        if (i === 0)
            letter = letter.charCodeAt(0)
        if (i === 1){
            temp = letter
            letter = arr[arr.length-1]
        }
        if (i === arr.length -1)
            letter = temp
        return letter
    }).join('')
}
}

// Reg Exp
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
