const bgcolor = "rgb(0, 28, 152)";
console.log("업데이트 됨! 05:03");

function add_img() {
  let img = document.createElement("img");
  img.src = "./assets/standby/all_white.png";
  img.className = "gif_white";
  img.style.objectFit = "contain";
  img.style.width = "100vw";

  document.querySelector(".gifContainer").appendChild(img);

  let img2 = document.createElement("img");
  img2.src = "./assets/standby/all_blue.png";
  img2.className = "gif_blue";
  img2.style.objectFit = "contain";
  img2.style.display = "none";
  img2.style.width = "100vw";

  document.querySelector(".gifContainer").appendChild(img2);
  console.dir(img2.style);
}

function add_img_desk() {
  let img = document.createElement("img");
  img.src = "./assets/standby/desk_blue.png";
  img.className = "deskBlue";
  img.style.width = "100vw";
  img.style.display = "block";
  document.querySelector(".deskContainer").appendChild(img);

  let img2 = document.createElement("img");
  img2.src = "./assets/standby/desk_white.png";
  img2.className = "deskWhite";
  img2.style.width = "100vw";
  img2.style.display = "none";
  document.querySelector(".deskContainer").appendChild(img2);
}

window.onload = function () {
  let windowWidth = window.matchMedia("screen and (max-width: 580px)");
  if (windowWidth.matches) {
    console.log("모바일이여라");
    console.log(document.querySelector(".gifContainer"));

    const deskContainer = document.querySelector(".deskContainer");
    deskContainer.style.display = "none";

    const gifContainer = document.querySelector(".gifContainer");
    gifContainer.style.display = "flex";
    if (document.querySelector(".gif_white") == null) {
      add_img();
    }
    const whiteSide = document.querySelector(".gif_white");
    const blueSide = document.querySelector(".gif_blue");

    function handleGif() {
      if (blueSide.style.display === "none") {
        whiteSide.style.display = "none";
        gifContainer.style.background = bgcolor;
        blueSide.style.display = "block";
      } else {
        whiteSide.style.display = "block";
        gifContainer.style.background = "white";
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
  } else {
    console.log("PC 여라");
    const gifContainer = document.querySelector(".gifContainer");
    gifContainer.style.display = "none";

    if (document.querySelector(".deskBlue") == null) {
      add_img_desk();
    }

    const deskContainer = document.querySelector(".deskContainer");

    const deskBlue = document.querySelector(".deskBlue");
    const deskWhite = document.querySelector(".deskWhite");

    deskContainer.addEventListener("click", () => {
      // console.log("clasdfasuf");
      // console.log(deskBlue.style.display);
      if (deskBlue.style.display == "none") {
        deskBlue.style.display = "block";
        deskContainer.style.background = bgcolor;
        deskWhite.style.display = "none";
      } else {
        deskBlue.style.display = "none";
        deskContainer.style.background = "white";
        deskWhite.style.display = "block";
      }
    });
  }
};

window.addEventListener("resize", () => {
  window.location.reload();
});
