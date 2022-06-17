// DESCRIPTION:
// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

//while loop works, but take too long
function triangular( n ) {
    let sum =0 
    let i=1
    while(i<=n){
      sum += i
      i++
    }
    return sum
  }

// because loop take too long
var max_n = Math.floor(Math.sqrt(Number.MAX_VALUE));

function triangular(n) {
  if (n < 1 || n >= max_n) return 0;
  
  return (n * (n + 1)) / 2;
}