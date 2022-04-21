//-------------------- OOPs in Js -----------------------//
/*
-> OOPs : Object Oriented programming . It is about creating object that contain data and methods
           both of them. It works on dry(Don't not reapet) principal. It is not programming 
           language.
          
-> It is es6 feacture
-> Class : It is the blueprint for making objects (like as blank form of jee)
-> Object : It is instance or example of class (like as filled form of jee)
-> Method : which perform some action
-> Property : It is like as height, weight for humans

Consider class = Car, object = Tata nexon, method = Drive car or Drift car, property = speed of car or name of brand

-> Constructor : It is use to construct the object and all properties define inside this. If you not define it js have by
                  default constructor.
Method of class define outside of constructor.

-> Inheritance : Inherit methods and properties from parent class to child class
-> Encapsulation : The meaningof this is to make sure that sensitive data is hidden from users.
-> Abstraction : Data abstraction is the proess of hiding complicated process from users or showing only essential
                 infromation to the users.
*/
//----------- Define classes in js -----------------//
class Students {
  // Define constructor
  constructor(name, lang) {
    // Define Properties
    this.myName = name;
    this.myLang = lang;
  }
  // Define methodes
  favlanguage() {
    console.log(
      `Hello ${this.myName} from oops and your favlanguage is ${this.myLang}.`
    );
  }
}
//--------------- Syntax of inheritance --------------------//
class Backend extends Students {
  constructor(name, lang, backendlang) {
    super(name, lang);
    this.myBackendlang = backendlang;
  }
  favlanguage() {
    console.log(
      `Hello ${this.myName} from oops and your favlanguage is ${this.myLang}. You use ${this.myBackendlang} for backend 
      development`
    );
  }
}
// Creating an object
const student1 = new Backend("Aniket", "Typescript", "Javascript");
// Call the method of class
student1.favlanguage();
