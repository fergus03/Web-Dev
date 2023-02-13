function pow(x,n) //figure bracket should be in this line, space between arguments
{
  let result=1; //space before and after = 
  for(let i=0;i<n;i++) {result*=x;} // space
  //result*=x should be here
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // should be in 2 lines, no space
if (n<=0) // bracket should be here, and no space, should be extra line above it
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
  //write into multilines to make it more readable
}
else
{//brackets should be above
  alert(pow(x,n)) //space
}

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}