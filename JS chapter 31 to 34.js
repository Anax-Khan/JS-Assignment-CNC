//for my user inputs and for date month year they should me correct
let nam= prompt("Enter your name");

let m_date;
do {
  m_date = parseInt(prompt("Enter the day of the month you were born (1-31):"));
  
  if (m_date <= 0 || m_date > 31) {
    alert("Invalid input. Please enter a number between 1 and 31.");
  }
} while (m_date <= 0 || m_date > 31);


let m_month;
do {
  m_month = parseInt(prompt("Enter the month you were born (1-12)"));
  
  if (m_month <= 0 || m_month > 12)
  {
    alert("Invalid input. Please enter a number between 1 and 12.");
  }
} while (m_month <= 0 || m_month > 12);


let m_year;
do {
  m_year = parseInt(prompt("Enter the year you were born (1-2023):"));
  
  if (m_year <= 0 || m_year > 2023) {
    alert("Invalid input. Please enter a number between 1 and 2023.");
  }
} while (m_year <= 0 || m_year > 2023);


//for remaininy days and months
let rMonth;
let rdate;

//for current date time and all
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const year= now.getFullYear();
const month= (now.getMonth())+1;
const date= now.getDate();


//Below code is for greeting
if (hours>5 && hours<11)
{
    console.log(`Good morning ${nam}`);
}
else if (hours>11 && hours<18)
{
    console.log(`Good afternoon ${nam}`);
}
else if (hours>21 || hours<5)
{
    console.log(`Good Night ${nam}`);
}
else
{
    console.log(`Good Evening ${nam}`);
}



//Below code for DOB and ones age
console.log(`Your DOB is ${m_date}/${m_month}/${m_year}`);
const age = year- m_year;
console.log(`Your age is ${age}`);



// Below code is for remaining birthday months
if (month>m_month)
{
    rMonth =m_month + (12-month);
}
else
{
    rMonth =m_month - month;
}

//Below for remaining days
if (date >m_date)
{
    rdate=m_date + (30-date);
}
else
{
    rdate=m_date - date;
}

//printing remainy days and month
if(m_date===date && m_month===month)
{
    console.log(`Today is your birthday "Happy Birthday" `) 
}
else
{
console.log(`Your Birthday is in ${rMonth} Months and ${rdate} Days `)
}
