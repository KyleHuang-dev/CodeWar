// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.




// num, positive, whole
// return sum
// solution(10)=> 3,5,6,9 sum =23
// for loop to create the arr
// push if the num can % 3 or 5
// reduce to get sum


function solution(number){
    let numArr =[];
    for(i=1; i<number;i++){
      if(i%5===0 && i%3===0){
        numArr.push(i)
      }else if(i%3===0){
        numArr.push(i)
      }else if(i%5===0){
        numArr.push(i)
      }
    }
    return numArr.reduce((a,b)=>a+b,0)
  }