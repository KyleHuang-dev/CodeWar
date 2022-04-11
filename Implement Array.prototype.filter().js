// DESCRIPTION:
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

Array.prototype.filter = function(fn){
    var res = [];
    for (var i = 0; i<this.length; i++){
      if (fn(this[i])){
        res.push(this[i]);
      }
    }
    return res;
  }


// solution by reduce solution
Array.prototype.filter=function(fn){
    return this.reduce((s,a)=>fn(a)?(s.push(a),s):s,[]);
  }



  //Other solution by reduce solution
  Array.prototype.filter = function (fn) {
    return this.reduce((pre, val) => fn(val) ? [...pre, val] : pre, []);
   };