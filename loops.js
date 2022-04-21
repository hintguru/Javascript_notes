// const students = [
//   {
//     name: "aniket",
//     favlang: "javascipt",
//     marks: 25,
//   },
//   {
//     name: "rutuja",
//     favlang: "css",
//     marks: 20,
//   },
//   {
//     name: "sarthak",
//     favlang: "html",
//     marks: 15,
//   },
// ];

//----------------------for loop--------------------------//
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
//   console.log(students[i].name);
//   console.log(students[i].favlang);
// }

//--------------------------forEach loop--------------------------//
// students.forEach((student) => {
//   console.log(student);
//   console.log(student.name);
//   console.log(student.favlang);
// });

//------------------------for of loop-------------------------------//

// for (let student of students) {
//   console.log(student);
//   console.log(student.name);
//   console.log(student.favlang);
// }

// const favlanguages = ["css", "javascript", "python"];
// for (const languages of favlanguages) {
//   console.log(languages);
// }

//--------------------------filter method------------------------//
//To add fliter

// const failed = students.filter((students) => {
//   return true; ------ here we return true then it give the outputs
//   if (students.marks < 20) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(failed);

//-----------------------find method----------------------//
//To find a spefices

// const myMarks = students.find((student) => {
//   if (student.marks === 25) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(myMarks);
