const bgcolor = "rgb(16, 6, 159)";

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
}

window.addEventListener(
  "resize",
  function (event) {
    let windowWidth = window.matchMedia("screen and (max-width: 580px)");
    if (windowWidth.matches) {
      console.log("모바일이여라");
      console.log(document.querySelector(".gifContainer"));

      const gifContainer = document.querySelector(".gifContainer");
      gifContainer.style.display = "block";
      if (document.querySelector(".gif_white") == null) {
        add_img();
      }
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
    } else {
      clearInterval(makeGif);
      console.log("PC 여라");
      const gifContainer = document.querySelector(".gifContainer");
      gifContainer.style.display = "none";

      let img = document.createElement("img");
      img.src = "./assets/standby/desk_blue.png";
      img.class = "deskBlue";
      img.style = "display: block";
      document.querySelector(".gifContainer").appendChild(img);

      let img2 = document.createElement("img");
      img2.src = "./assets/standby/desk_white.png";
      img2.class = "deskWhite";
      img2.style = "display: none";
      document.querySelector(".gifContainer").appendChild(img2);

      const deskContainer = document.querySelector(".deskContainer");
      deskContainer.style.background = bgcolor;

      const deskBlue = document.querySelector(".deskBlue");
      const deskWhite = document.querySelector(".deskWhite");

      deskContainer.addEventListener("click", () => {
        if ((deskContainer.style.background = bgcolor)) {
          deskBlue.style.display = "block";
          deskContainer.style.background = bgcolor;
          deskWhite.style.display = "none";
        } else {
          deskBlue.style.display = "none";
          deskContainer.style.background = bgcolor;
          deskWhite.style.display = "block";
        }
      });
    }
  },
  true
);
