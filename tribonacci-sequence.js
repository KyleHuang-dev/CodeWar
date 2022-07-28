
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

// n is the array length, array[0] is siganature [0]
// if i > 2, array[i] = array[i-3] + array[i-2] + array[i-1]

function tribonacci(s,n){
    let result = [];
    for ( let i = 0; i < n; i++){
      if (i<3){
        result.push(s[i])
      }else{
        result.push(result[i-3] + result[i-2] + result[i-1])
      }
    }
    return result;
  }