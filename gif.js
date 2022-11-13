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

gifContainer.addEventListener("click", () => {
  clearInterval(makeGif);
  gifContainer.rel = "noopener noreferrer";
  gifContainer.href = "https://naver.me/FXHu9h6y";
});
