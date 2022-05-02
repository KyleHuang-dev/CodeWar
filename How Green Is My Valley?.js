// Input : an array of integers.

// Output : this array, but sorted in such a way that there are two wings:

// the left wing with numbers decreasing,

// the right wing with numbers increasing.

// the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

// each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

// a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
// make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
// The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].

// a = [14,14,14,14,7,14]
// make_valley(a) => [14, 14, 14, *7*, 14, 14]

// a = [14,14,14,14,14]
// make_valley(a) => [14, 14, *14*, 14, 14]

function makeValley(arr) {
    let arr1 = arr.sort((a,b)=> b-a)
    let leftArr=[];
    let rightArr =[];
    for (i = 0; i< arr1.length; i++){
       i%2 ? rightArr.unshift(arr1[i]) : leftArr.push(arr1[i])
    }
    return leftArr.concat(rightArr)
  }


// solution with forEach 
function makeValley(arr) {
    let leftArr = []
    let rightArr = [];
    
    arr.sort((a,b)=> b-a)
      .forEach((num,i) =>i%2? rightArr.unshift(num) :leftArr.push(num) )
    
    return [...leftArr, ...rightArr]
  }