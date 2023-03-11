let sub1 = parseFloat(prompt("Enter English numbers : "));
let sub2 = parseFloat(prompt("Enter Maths numbers : "));
let sub3 = parseFloat(prompt("Enter Physics numbers : "));
let sub4 = parseFloat(prompt("Enter Chemistry numbers : "));
let sub5 = parseFloat(prompt("Enter Computer Science numbers : "));
let percentage;
let checkPercent;

function percent(sub1 , sub2 , sub3 , sub4 , sub5)
{
var obtained_marks = sub1 + sub2 + sub3 + sub4 + sub5;
var totalMarks = 500;
var percentage = obtained_marks * 100 / totalMarks ;
return percentage
}

checkPercent = parseFloat(percent(sub1 , sub2 , sub3 , sub4 , sub5));
alert(`Percentage = ${checkPercent}% `) ;
alert(typeof(checkPercent)) ;


switch(true)
{
    case checkPercent>=90 && checkPercent<=100:
        alert("You got A+ grade")
        break;

    case checkPercent>=75 && checkPercent<=89:
        alert("You got A grade")
        break;  

    case checkPercent>=60 && checkPercent<=74:
        alert("You got B grade")
        break;

    case checkPercent>=45 && checkPercent<=59:
        alert("You got C grade")
        break;

    case checkPercent>=30 && checkPercent<=44:
        alert("You got D grade")
        break;

    case checkPercent> 100:
        alert("There is an error in percentage")
        break;
        
    default:
        alert("You got F grade")
    
}