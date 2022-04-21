//--------------------ES6--------------------//
//___before es6
// var productName = "laptop";

//It polute the code
//It is global scope

//__after es6
// let productName = "laptop"
// const productName = "laptop" --we don't reassign it value and bugs minimaze

//-----------------------arrow function-------------------------//
//___before es6
// function greet() {
//   console.log("good morning");
// }
//___after es6
// const greet = () =>{
//     console.log("good morning")
// }

//---------------what is this keyword in js-----------------//
// see on thapa

//---------------------Template literals--------------------//
//__before
// const firstName = "Aniket";
// const lastName = "Gaikwad";
// console.log(firstName + " " + lastName);

//__after
// const firstName = "Aniket";
// const lastName = "Gaikwad";
// console.log(`${firstName} ${lastName}`);

//---------------------Destructuring----------------------//
//______________________Object destructuring______________________________ //
// const user = {
//   name: "Aniket",
//   age: "16",
// };
// const { name, age } = user;
// console.log(name);
// console.log(age);
// const { name: myName, age } = user;
// console.log(myName);

//_________________Array destructuring______________________ //
// const data = ["Aniket", 16, "cse"];
// const [name, age, profession] = data;
// console.log(name);
// console.log(age);
// console.log(profession);

//-----------Default parameters---------------------//
// const register = (name, password, image = "test.png") => {
//   console.log(name, password, image);
// };
// register("aniket", "xyz"); --we can pass or not image value but test.png is by default value

//----------------Spread operator(...)--------------------//
//To clone array or object
//____________________array clone_______________________ //
// const languages = ["html", "css", "javascript"];
// const newLanguages = [...languages];
// const newLanguages = [...languages, "typescript"];
// const newLanguages = ["typescript", ...languages];
// console.log(newLanguages);

//___________________object clone________________________ //
// const settings = {
//   volume: 10,
//   brightness: 80,
// };
// const newSettings = { ...settings };
// const newSettings = { ...settings, volume: 30 };
// const newSettings = { ...settings, contrast: 50 };
// const newSettings = { ...settings, volume: 50 };
// console.log(newSettings);

//-------------------for of loop on object-------------------------//
// const person = {
//   name: "Aniket",
//   city: "Malegaon",
//   brand: "asus",
// };

// for (const entries of Object.entries(person)) {
//   console.log(entries);
// }

//-------------find(array method)------------------------//

// const users = [{ name: "aniket" }, { name: "sarthak" }];
// const user = users.find((user) => {
//   return user.name === "aniket";
// });
// console.log(user); -- here we get object

//_______________findIndex_______________________ //
// const users = [{ name: "aniket" }, { name: "sarthak" }];
// const user = users.findIndex((user) => {
//   return user.name === "aniket";
// });
// console.log(user);  -- here we get index of matching object

//--------------------Es6 Modules-----------------//
// we use export and import in normal in js and also in js libary
// we export/import any thing
// we import object and array from export.js

// import { person, languages } from "./lib";
// console.log(person);
// console.log(languages);

//--------- What is this keyowrd -----------//
/* 
-> The js this keyword refers to the object it brlongs to.
It has differ values depending on where it is use
-> Alone, this refers to the global object
console.log(this)
-> In regular function, this refers to the global object
*/
// console.log(this); // It log window object
// const myfun = () => {
//   console.log(this);
// };
// myfun(); // It log window object
