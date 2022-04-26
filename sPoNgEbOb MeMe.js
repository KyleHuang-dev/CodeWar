// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"


function spongeMeme(sentence) {
    let arr = sentence.toLowerCase().split('')
    for ( i = 0; i < arr.length; i=i+2){
      arr[i]=arr[i].toUpperCase()
    }
    return arr.join('')
  }

// solution with map method
function spongeMeme(sentence) {
    return sentence.split('').map( (n, i)=>{
      return i%2? n.toLowerCase(): n.toUpperCase()
    }).join('')
  }