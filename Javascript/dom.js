const body = document.body;
console.log(body);

const p = document.createElement("p");
p.innerText = "Hello DOM!";
body.append(p);

const header = document.getElementById("header");
header.style.backgroundColor = "orange";
console.log(header);

// const posts = document.querySelector("div");
// // console.log(posts);
// const posts = document.querySelectorAll("div");
// console.log(posts);

const posts = document.querySelectorAll(".post");
// const numbers = [1,2,3,4,5,6,7,8,9]
//numbers.forEach(number =>{console.log(`this is ${number}`)})
posts.forEach(post => {
    post.addEventListener("click", (event) => {
        console.log(event.target);
    })
})
const post = document.querySelector("div");
post.className = "featurepost"



