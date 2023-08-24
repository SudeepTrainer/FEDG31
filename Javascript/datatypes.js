console.log("Testing");
//String Number Boolean undefined null Object Symbol
//SNOBNUS

var firstName = "Mark";
var $$$$ = "Elon";
console.log($$$$);

//ES1 1997
//ES6 2015 --> major change
let fname = "Elon";
let lname = "Musk";
console.log(fname);
console.log(lname);
// lname = "Zuck";

// var is globally scoped
// let and const is block scoped
for(var i=0;i<10;i++){
    // console.log(i);
}
console.log("i is "+i);
for(let j=0;j<10;j++){
    // console.log(j);
}
// console.log(j);

//String
let msg1 = 'Your\'s truly';
let msg2 = "This is a \"quote\"";
let msg3 = `Your's truly.This is a "quote"`;
console.log(msg3);

let fullname = "Firstname:" + " " + fname + "Lastname: "+ lname;
let myName = `Firstname: ${fname.toUpperCase()} 
                Lastname: ${lname}`;
console.log(myName);

// Number

let num1 = 324;
let num2 = 11.32423;

console.log(1/0);
console.log(-1/0);
console.log(0/0);
console.log(200 ** 2000);
console.log(10/"Mark");

console.log(Math.pow(200, 2000));
console.log(Math.max(10,20));
console.log(Date.now());
//https://www.epochconverter.com/


//Boolean

let flag = false;
// let isAdult = age>17;
console.log(10==10);
console.log(10=="10");
console.log("10"=="10");

console.log(10===10);
console.log(10==="10");
console.log("10"==="10");

// undefined and null
let aVar;
console.log(aVar);

let anotherVar = null;
console.log(anotherVar);

let myFirstName = "Sudeep";
let myLastName = "Jha";




myLastName = null;
console.log(`${myFirstName} ${myLastName}`);


