// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let noZeroArr = arr.filter(el => el !== 0)
    let zeros = arr.length - noZeroArr.length
    for( let i = 0; i < zeros; i++){
      noZeroArr.push(0)
    }
    return noZeroArr;
  }

//other solution with concat
function moveZeros(arr) {
    return arr.filter(el => el !== 0).concat(arr.filter(el => el ===0))
  }

//rest operator
var moveZeros = function (arr) {
    return [
      ...(arr.filter(n => n !== 0)),
      ...(arr.filter(n => n === 0))
    ];
  }