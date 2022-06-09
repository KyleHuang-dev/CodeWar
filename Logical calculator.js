// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True

const logicalCalc = (array, op) => {
    return array.reduce((acc, cur) => {
      if (op === 'AND') return acc && cur;
      if (op === 'OR') return acc || cur;
      if (op === 'XOR') return acc != cur;
    });
  };

  //Other solution, with object

  var ops = {
    'AND': (a, b) => a && b,
    'OR': (a, b) =>  a || b,
    'XOR': (a, b) => a !== b
  }
  
  
  function logicalCalc(array, op){
    return array.reduce(ops[op]);
  }