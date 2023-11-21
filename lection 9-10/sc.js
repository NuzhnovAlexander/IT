let left = document.querySelector(".left");
let right = document.querySelector(".right");
let circle = document.querySelectorAll(".circle");
let img = document.querySelectorAll("img");

let index = 0, temp;
sliderCount = circle.length;

left.addEventListener("click", prev);
right.addEventListener("click", next);

// setInterval(wid, 1000);

// function wid(){

//   for(let i = 0; i < img.length;i++ ){
//       console.log(`${img[i].width}`);

//     if(`${img[i].width}` < 450){
//       // console.log("122");
//     }
//   }
// }

function prev() {
  index = (index - 1 + sliderCount) % sliderCount;
  move();
  // console.log(1);
}

function next(){
  index = (index + 1) % sliderCount;
  img[index].style.display = "block";
  img[index].classList.add("anima");
  img[(index - 1 + sliderCount) % sliderCount].classList.add("anima");
  setTimeout(move, 2000);
  // console.log(2);
}

function move(){
  // console.log(3);
  for( let i = 0; i <= sliderCount; i++){
    // if (index < sliderCounts - 1) {
    //   temp = img[0]
    //   img[sliderCount-1].src = 
    // }
    if (i == index) {
      
      let img_new = document.createElement("img");
      img_new = img[(index - 1 + sliderCount) % sliderCount];
      img[(index - 1 + sliderCount) % sliderCount].remove();
      document.querySelector(".sliders").appendChild(img_new);

      // img[i].style.display = "block";
      circle[i].classList.add("circle-active");
      img[i].classList.remove("anima");
      img[(index - 1 + sliderCount) % sliderCount].classList.remove("anima");

    }else{
      img[i].style.display = "none";
      circle[i].classList.remove("circle-active");
    }
  }
}
move();