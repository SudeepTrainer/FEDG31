function add(a,b){
    // let a = 10;
    // let b = 12;
    return a + b;
    // console.log(a+b);
}
console.log(add(10,12));

// functions are first class citizens

// function expression
let product = function multiply(a,b){
    return a * b;
}

console.log(product(4,3));

// anonymous function
// const square = function (a){
//     return a * a;
// }

// console.log(square(5));

// let addFunc = function sum(a,b){
//     let result = a + b;
//     return result;
// }

// Step 1: Remove the function keyword and add =>
// let addFunc = sum(a,b) => {
//     return a + b;
// }
//Step 2 : Make it anonymous function.Remove the function name
// let addFunc = (a,b) => {
//     return a + b;
// }
// Step 3 : Bring it in the same line 
// let addFunc = (a,b) => { return a + b;}
// Step 4: If we have only a return statement, it can be removed
// let addFunc = (a,b) => { a+ b };
// Step 5: Remove the curly braces
let addFunc = (a,b) => a + b;
console.log(addFunc(3,14));

// const square = function (a){
//     return a * a;
// }
// Step 1: Add the fat arrrow and remove function keyword
// const square = (a) =>{
//     return a * a;
// }
// Step 2: Remove return and curly braces if it is the only statement

// const square = (a) =>{ return a * a};
const square = a => a * a;

const makeAPerson = (name,age,gender) =>({name:name,age:age,gender:gender})
console.log(makeAPerson("Mark",24,"Male"));

console.log(`${2+3}`);
console.log('${2+3}');