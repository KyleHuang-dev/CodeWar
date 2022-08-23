// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'



//convert string to array
// map through the array replace the a to b, b to a
// return string

function switcheroo(x){
    return x.split('').map(letter => {
      if(letter === 'a')
        letter = 'b';
      else if (letter === 'b')
        letter = 'a'
      return letter
    }).join('')
  }

  //Regex solution
  const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")
