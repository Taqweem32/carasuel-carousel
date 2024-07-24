const arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let img = document.getElementById("img");
let btn1 = document.getElementById("pre");
let btn2 = document.getElementById("next");
let counter = 0;

btn1.addEventListener("click", preclick);
btn2.addEventListener("click", nextclick);

function preclick() {
  counter--;
  if (counter < 0) {
    counter = arr.length - 1;
  }
  img.src = arr[counter];
}

function nextclick() {
  counter++;
  if (counter >= arr.length) {
    counter = 0;
  }
  img.src = arr[counter];
}
