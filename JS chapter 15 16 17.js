let courses = [];
alert('Enter 5 courses names');
var course1 = prompt("Course 1 : "  );
var course2 = prompt("Course 2 : "  );
var course3 = prompt("Course 3 : "  );
var course4 = prompt("Course 4 : "  );
var course5 = prompt("Course 5 : "  );
courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);
alert(courses);

Upcourse1 = prompt("Update Course 1: ", courses[0]);
Upcourse2 = prompt("Update Course 2: ", courses[1]);
Upcourse3 = prompt("Update Course 3: ", courses[2]);
Upcourse4 = prompt("Update Course 4: ", courses[3]);
Upcourse5 = prompt("Update Course 5: ", courses[4]);

if (Upcourse1){ courses.splice(0, 1, Upcourse1 );}
if (Upcourse2){ courses.splice(1, 1, Upcourse2 );}
if (Upcourse3){ courses.splice(2, 1, Upcourse3 );}
if (Upcourse4){ courses.splice(3, 1, Upcourse4 );}
if (Upcourse5){ courses.splice(4, 1, Upcourse5 );}

alert(courses);



