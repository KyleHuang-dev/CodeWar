// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

//P: numbers, + , whole, up tp 500000
//R: return number
//E: 4=> 3(1,2,4)
//P: loop the number % 

function getDivisorsCnt(num){
    for(i=1, j=0; i<=num; i++){
      if (num % i ===0){
        j++
      }
    }
    return j
  }