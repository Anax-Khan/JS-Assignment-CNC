// first assignment
let num1= parseFloat(prompt("Enter 1st Number"));
let num2= parseFloat(prompt("Enter 2nd Number"));
let op= prompt("Enter the airthmatic operation from ' +  -  *  / '");
let ans;
switch(op)
{
case "+":
    ans= num1 + num2;
    break;

case "-":
    ans= num1 - num2;
    break;

case "*":
    ans= num1 * num2;
    break;

case "/":
    ans= num1 / num2;
    break;

default:
    console.log("Invalid Operator");
}

alert(`${num1} ${op} ${num2} = ${ans}`)



//2nd assignment

var sub1 = parseFloat(prompt("Enter English numbers : "));
var sub2 = parseFloat(prompt("Enter Maths numbers : "));
var sub3 = parseFloat(prompt("Enter Physics numbers : "));
var sub4 = parseFloat(prompt("Enter Chemistry numbers : "));
var sub5 = parseFloat(prompt("Enter Computer Science numbers : "));
var obtained_marks = sub1 + sub2 + sub3 + sub4 + sub5;
var totalMarks = 500;
var percentage = obtained_marks * 100 / totalMarks ;
alert(`Percentage = ${percentage}% `) ;