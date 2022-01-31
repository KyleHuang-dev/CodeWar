// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// // As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(array, n) {
    let res = [];
    
    for(let i = 0; i < array.length; i++){
      res.push(array.slice(i,i + n));
    }
    //if the array = [1,2,3,4,5,6], and n = 3
    //res.push(array.slice(i,i + n)); will return 
    // 0: (3) [1, 2, 3]
    // 1: (3) [2, 3, 4]
    // 2: (3) [3, 4, 5]
    // 3: (3) [4, 5, 6]
    // 4: (2) [5, 6]
    // 5: [6]
    // length: 6

    return res.filter(e => e.length === n);
  }