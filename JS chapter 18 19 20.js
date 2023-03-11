let courses = [];
alert('Enter 5 courses names');

for (var i = 0; i <= 4; i++)
{
let course = prompt("Course"+ i + ": " );
courses.push(course);
}
alert(courses);

let Upcourse;
for (var i = 0; i <= 4; i++)
{
Upcourse = prompt("Update Course" (i+1)+ ":"+ courses[i]);
if (Upcourse){ courses.splice(i , 1, Upcourse );}
Upcourse=0;
}


alert(courses);



