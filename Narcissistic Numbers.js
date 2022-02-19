// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153
// Write a function that, given n, returns whether or not n is a Narcissistic Number.


function isNarcissistic(n) {
    let arr = String(n).split('')
    let l = arr.length
    let sum = arr.map(num => num**l).reduce((acc, cur)=> acc + cur, 0)
    return n === sum
  }
  // p: number, +, 
// R: ture or false
// E:
//234= 8+27+64 = 99 false
// P: find the length of number
//    convert the number to string to array and map each element 
//    Reduce for the sum.
//    check if n === the sum

function isNarcissistic(n) {
    let arr = String(n).split('')
    return arr.reduce((acc, cur)=> acc + cur**arr.length, 0) == n
  }
  