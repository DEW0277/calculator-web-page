// console.log("hello world !");

// const mydiv = document.querySelector("div");

// setInterval(()=>{
//     mydiv.classList.toggle("nimadir");
// }, 1000);

// click

// document.addEventListener("click", (e)=>{
//     console.log(e);
// })

// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const inchild = document.querySelector(".inchild");

// inchild.addEventListener("click", (e)=>{
//     e.stopPropagation();
//     console.log("inchild clicked");
// })
// child.addEventListener("click", (nimadir)=>{
//     nimadir.stopPropagation();
//     console.log("child clicked");
// }, false)
// parent.addEventListener("click", ()=>{
//     console.log("parent clicked");
// },false)

const allBtn = document.querySelectorAll(".btn"),
  menu = document.querySelector(".menu-bar"),
  equal = document.querySelector(".equal"),
  clear = document.querySelector("#clear");
allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.value += btn.textContent;
  });
});
clear.addEventListener("click", () => {
  menu.value = "";
});
equal.addEventListener("click", () => {
  menu.value = eval(menu.value);
});
const calc = document.querySelector(".calc");
document.body.appendChild = calc;
const h1 = document.querySelectorAll("h1");

const redBtn = document.getElementById("red").addEventListener("click", () => {
  document.body.style.background = "red";
  calc.style.background = "black";
  h1.forEach((h1Color) => {
    h1Color.style.background = "orangered";
    h1Color.style.color = "white"
  });
});
const blueBtn = document
  .getElementById("blue")
  .addEventListener("click", () => {
    document.body.style.background = "blue";
    calc.style.background = "green";
    h1.forEach((h1Color) => {
      h1Color.style.background = "red"
      h1Color.style.color = "white"
    });
  });
const greenBtn = document
  .getElementById("green")
  .addEventListener("click", () => {
    document.body.style.background = "green";
    calc.style.background = "orangered";
    h1.forEach((h1Color) => {
      h1Color.style.background = "white"
      h1Color.style.color = "black"
    });
  });
