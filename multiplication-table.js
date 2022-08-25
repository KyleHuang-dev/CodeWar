// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


// prameter : number 
// return : array of the values

// the input number is rows and column of the return
// nested loop 

multiplicationTable = function(size) {
    const arr = [];
    for ( let i = 1; i < size + 1; i ++){
      const subArr = [];
      for ( let j = 1; j< size +1 ; j++){
        subArr.push(i*j);
      }
      arr.push(subArr); 
    }
    return arr
  }
  