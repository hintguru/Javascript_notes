//In dom all elemnets are node/object and the have properties on them
// DOM = Document Object Model (All object / All node)
// BOM = Broswer Object Model (location, history, url)
//---------------------Selector of html elements-------------------------//
// 1. getElementById
// const heading = document.getElementById("heading");
// console.log(heading);

// 2. getElementsByTagName
// const heading = document.getElementsByTagName("h1"); -- get all html collection
// console.log(heading[0]);   -- to get first index tag

// 3. getElementsByClassName
// const heading = document.getElementsByClassName("heading"); -- it also get html collection
// console.log(heading[0]);

// 4. querySelector
// const heading = document.querySelector(".heading");
// console.log(heading);
// const heading1 = document.querySelector(".heading");
// console.log(heading1);

// 5 . querySelectorAll
// const heading = document.querySelectorAll(".heading"); -- it get nodeList
// console.log(heading);

//-------------------------Traverse DOM------------------------------//

// 1.parentNode
// const child = document.querySelector(".child");
// const parent = child.parentNode;
// console.log(parent);

// 2. childNodes
// const parent = document.querySelector(".parent");
// const child = parent.childNodes;
// console.log(child);

//--------------------------Manipulation-----------------------//

//__manipulate the html tags

// const heading = document.querySelector(".heading");
// heading.innerHTML = "hello world";
// heading.style.color = "red";
// heading.style.fontSize = "100px";
// heading.classList.add("title");
// heading.classList.remove("title");

//__create elements
// const heading = document.createElement("h1");
// heading.innerHTML = "Javascript is awesome!";

//__To append or put in div

// const parent = document.querySelector(".parent");
// parent.appendChild(heading);
// parent.setAttribute("id", "parent"); -----To add attributes in html tag (like id, src,etc.)
// parent.setAttribute("src", "#");

// console.log(heading);

//-------------------------Events in DOM---------------------------//
// const heading = document.querySelector(".heading");
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (event) => {
//   heading.style.color = "white";
//   heading.style.backgroundColor = "red";
//   heading.style.fontSize = "5rem";
//   console.log("clicked");
// });
