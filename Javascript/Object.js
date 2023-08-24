// let name = "Elon musk";
// let age = 45;
// let country = "SA";
// let skills = ["Entrepenuer","Founder","Developer"];

let elonObject = {
    fullname:"Elon Musk",
    age:45,
    country:"SA",
    skills:["Entrepenuer","Founder","Developer"]
}

console.log(elonObject.fullname);
console.log(elonObject.skills[1]);

// create an object for shoppingcart
//[{},{},{}]

// objects are references 
const product1 = {
    name:"Keyboard",
    price:2456
}

const product2 = {
    name:"Keyboard",
    price:2456
}

console.log(product1 === product2);

// product3 = product2;

// product3.name = "Laptop";
// console.log(product2);

// let product3 = Object.assign({},product2); //clone an object
// product3.name = "Laptop";
// console.log(product2);

let product3 = {...product2}; // clone an object with spread operator
product3.name = "Laptop";
console.log(product3);
console.log(product2);

let product = {} 

product.name = "TV";
product.price = 234234;
console.log(product);

let person ={
    firstName:"Mark",
    lastName:"Zuck",
    // getFullName:function getFullName(){
    //     return `${this.firstName} ${this.lastName}`
    // }
    // getFullName:function (){
    //     return `${this.firstName} ${this.lastName}`
    // }
    getFullName(){
       return `${this.firstName} ${this.lastName}`
    },
    greet(){
        return `Hi, this is ${this.firstName}`
    }
}

console.log(person.getFullName());
console.log(person.greet());

// function Person(firstName,lastName){
//     let person = {};
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`
//      };
//     person.greet = function(){
//         return `Hi, this is ${this.firstName}`
//     }
//     return person;
// }

// let elon = Person("Elon","Musk");
// console.log(elon.greet());

const personMethods = {
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`
     },
    greet :function(){
        return `Hi, this is ${this.firstName}`
    }
}
function Person(firstName,lastName){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.getFullName = personMethods.getFullName;
    person.greet = personMethods.greet;
    return person;
}

let elon = Person("Elon","Musk");
console.log(elon.greet());