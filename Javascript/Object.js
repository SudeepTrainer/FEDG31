// let name = "Elon musk";
// let age = 45;
// let country = "SA";
// let skills = ["Entrepenuer","Founder","Developer"];

let elonObject = {
    fullname: "Elon Musk",
    age: 45,
    country: "SA",
    skills: ["Entrepenuer", "Founder", "Developer"]
}

console.log(elonObject.fullname);
console.log(elonObject.skills[1]);

// create an object for shoppingcart
//[{},{},{}]

// objects are references 
const product1 = {
    name: "Keyboard",
    price: 2456
}

const product2 = {
    name: "Keyboard",
    price: 2456
}

console.log(product1 === product2);

// product3 = product2;

// product3.name = "Laptop";
// console.log(product2);

// let product3 = Object.assign({},product2); //clone an object
// product3.name = "Laptop";
// console.log(product2);

let product3 = { ...product2 }; // clone an object with spread operator
product3.name = "Laptop";
console.log(product3);
console.log(product2);

let product = {}

product.name = "TV";
product.price = 234234;
console.log(product);

let person = {
    firstName: "Mark",
    lastName: "Zuck",
    age: 24,
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    greet() {
        console.log(`HI, This is ${this.firstName}`)
    }
}

person.getFullName();
person.greet();

let personMethods = {
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    greet: function () {
        console.log(`HI, This is ${this.firstName}`)
    }
}

//function instantiation
// function makePerson(firstName, lastName, age) {
//     let person = Object.create(personMethods);
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.age = age;
//     // person.getFullName = function () {
//     //     console.log(`${this.firstName} ${this.lastName}`)
//     // };
//     // person.greet = function () {
//     //     console.log(`HI, This is ${this.firstName}`)
//     // };
//     // person.greet = personMethods.greet;
//     // person.getFullName = personMethods.getFullName;
//     return person;
// }
// let elonMusk = makePerson("Elon", "Musk", 23);
// elonMusk.greet();
// let billGates = makePerson("Bill", "Gates", 24);
// billGates.getFullName();

// Object.create
let parent = {};
parent.country = "India";

let child = Object.create(parent);
child.name = "Mark";

console.log(child.name);
console.log(child.country);
console.log(parent.name);

console.log(Object.prototype);

// Prototype based Inheritance
function Person(firstName, lastName, age) {
    // let person = Object.create(Person.prototype);
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}

Person.prototype.getFullName = function getFullName() {
    console.log(`${this.firstName} ${this.lastName}`)
}

Person.prototype.greet = function greet() {
    console.log(`HI, This is ${this.firstName}`)
}

let elonMusk = new Person("Elon", "Musk", 23);
elonMusk.greet();
let billGates = new Person("Bill", "Gates", 24);
billGates.getFullName();

let anArray = []
let anotherArray = new Array();
console.log(Array.prototype);
console.log(String.prototype);

class Person1 {
    constructor(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
    greet() {
        console.log(`HI, This is ${this.firstName}`)
    }
}

let elon = new Person1("Elon", "Musk", 24);
elon.greet();
elon.getFullName();

// Using function instatiation with prototype , create an Account with properties like account number
// , balance, withdraw, deposit,etc. Also, do the same with class.