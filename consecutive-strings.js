// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

const longestConsec = (strArr, k)=>{
    if (k<=0 || k>strArr.length)
      return ''
    
    let temp ='';
    let longest= '';
    for (i =0; i < strArr.length ; i++){
      temp= strArr.slice(i,i+k).join('')
      
      if (temp.length > longest.length){
        longest = temp
      }
    }
    return longest
  }


    // reduce method
    function longestConsec(strarr, k) {
      if (k<=0 || k>strarr.length)
        return ''
    
      return strarr.reduce( (longest, cur, i)=>{
        let currentStr = strarr.slice(i,i+k).join('')
        return currentStr.length >longest.length
                  ?longest = currentStr
                  :longest;
      },"")
  }