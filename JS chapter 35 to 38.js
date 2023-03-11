let inputValue=prompt("Enter a line");
let txt="";

function correct(inputValue)
{
for (let x = 0; x < inputValue.length ; x++) 
{
    //for first letter of line
  if(x === 0)
  {
    txt += (inputValue[x]).toUpperCase();  
  } 
  //for other letters
  else
  { 
    if (inputValue.slice(x,x+1)=== " ")
    { 
        txt += inputValue[x];
        txt += (inputValue[x+1]).toUpperCase();
        x++;
    }
    else
    {
        txt += (inputValue[x]).toLowerCase() ; 
    }
  } 
}
console.log(txt);
}

correct(inputValue);




//2nd assignment
let num=parseFloat(prompt("Enter a number to find its factorial"));
let fact=1;

function factorial(num)
{
for (let x = num; x > 0; x--) 
{
    fact *= x;    
}
return fact;
}

console.log(`factorial of ${num} is ${factorial(num)}`)
