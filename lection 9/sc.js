let left = document.querySelector(".left");
let right = document.querySelector(".right");
let circle = document.querySelectorAll(".circle");
let img = document.querySelectorAll("img");

let index = 0;
sliderCount = circle.length;

left.addEventListener("click", prev);
right.addEventListener("click", next);



function prev() {
  index = (index - 1 + sliderCount) % sliderCount;
  move();
  // console.log(1);
}

function next(){
  index = (index + 1) % sliderCount;
  img[index].style.display = "block";
  img[index].classList.add("anima");
  img[index-1].classList.add("anima");
  setTimeout(move, 2000);
  // console.log(2);
}

function move(){
  // console.log(3);
  for( let i = 0; i <= sliderCount; i++){
    if (i == index) {
      img[i].style.display = "block";
      circle[i].classList.add("circle-active");
      img[i].classList.remove("anima");
      img[i-1].classList.remove("anima");

    }else{
      img[i].style.display = "none";
      circle[i].classList.remove("circle-active");
    }
  }
}


move();