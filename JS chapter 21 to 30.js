/*let num = prompt("Enter any decimal number");
let text="This is my dummy text";
let Reverse="";

num = Math.ceil(num);
sliceTxt = text.slice(0, num);
for(var i=num-1; i>= 0 ;i--)
{ 
    Reverse += sliceTxt[i];
}
    alert(Reverse);


*/


//2nd assignment
var inputValue=prompt("Enter a line");
let txt="";
for (let x = 0; x < inputValue.length ; x++) 
{
  if(x === 0)
  {
    txt += (inputValue[x]).toUpperCase();  
  } 
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
alert(txt);