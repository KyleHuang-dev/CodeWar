// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

function toNumberArray(stringarray){
    return stringarray.map(str=> Number(str))
}

function toNumberArray(stringarray){
    return stringarray.map(Number)
}