// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.


function gap(g, m, n) {
    let numberArr=[]
    for( i = m; i<=n ;i++){
      numberArr.push(i)
    }
    
    let primeArr = numberArr.filter(num =>{
      for(i = 2; i < m; i++){
        if(num % i ===0)
          return 
      }
      return num
    })
    
    let resultArr = primeArr.reduce( (numArr, num, i, array)=>{
      if(array[i]+g === array[i+1]){
        numArr.push(array[i])
        numArr.push(array[i+1])
      }
        return numArr
    },[])
   
    
    if (primeArr.length === 0 || resultArr.length ===0) return null
    return resultArr.slice(0,2)
  }