const bgcolor = "rgb(16, 6, 159)";

function add_img() {
  let img = document.createElement("img");
  img.src = "./assets/standby/white.png";
  img.className = "gif_white";

  document.querySelector(".gifContainer").appendChild(img);

  let img2 = document.createElement("img");
  img2.src = "./assets/standby/blue.png";
  img2.className = "gif_blue";
  img2.style.display = "none";

  document.querySelector(".gifContainer").appendChild(img2);
}

add_img();
const gifContainer = document.querySelector(".gifContainer");
const whiteSide = document.querySelector(".gif_white");
const blueSide = document.querySelector(".gif_blue");

function handleGif() {
  if (blueSide.style.display === "none") {
    whiteSide.style.display = "none";
    gifContainer.style.background = "white";
    blueSide.style.display = "block";
  } else {
    whiteSide.style.display = "block";
    gifContainer.style.background = bgcolor;
    blueSide.style.display = "none";
  }
}

makeGif = setInterval(function () {
  console.log("start!");
  handleGif();
}, 400);

// clearInterval(makeGif);

// function handleTitleClick(){
//   const clickedClass = "clicked"; //string을 변수에 저장하면 오류가 떠도 에러를 잡아준다.
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }

// // title에 click 이벤트가 발생하면 handleTitleClick 함수가 동작되길 원해!
// h1.addEventListener("click", handleTitleClick);
