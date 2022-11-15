const studentImg = [
  "chw_01.jpg",
  "chw_02.jpg",
  "hsh_01.jpg",
  "hsh_02.jpg",
  "jsh_01.jpg",
  "jsh_02.png",
  "jsw_01.png",
  "jsw_02.jpg",
  "khm_01.png",
  "khm_02.png",
  "kjm_01.png",
  "kjm_02.png",
  "kky_01.png",
  "kky_02.png",
  "ldh_01.jpg",
  "ldh_02.jpg",
  "lhj_01.jpeg",
  "lhj_02.jpeg",
  "lsg_01.jpg",
  "lsg_02.png",
  "mju_03.jpeg",
  "mju_02.jpg",
  "pjs_01.png",
  "pjs_02.png",
  "shk_01.jpg",
  "shk_02.png",
  "ujw_01.png",
  "ujw_02.jpeg",
  "yje_01.jpeg",
  "yje_02.png",
  "ysh_01.png",
  "ysh_02.png",
  "lsy_01.jpg",
  "lsy_02.jpg",
  "sjy_01.png",
  "sjy_02.png",
];

let firstImg = [
  "chw_02.jpg",
  "hsh_01.jpg",
  "hsh_02.jpg",
  "jsh_02.png",
  "khm_02.png",
  "kjm_02.png",
  "kky_01.png",
  "ldh_01.jpg",
  "lhj_01.jpeg",
  "lhj_02.jpeg",
  "lsg_01.jpg",
  "lsg_02.png",
  "pjs_01.png",
  "pjs_02.png",
  "shk_01.jpg",
  "shk_02.png",
  "ujw_01.png",
  "ujw_02.jpeg",
  "yje_01.jpeg",
  "yje_02.png",
  "ysh_01.png",
  "ysh_02.png",
  "lsy_01.jpg",
  "lsy_02.jpg",
  "sjy_02.png",
];

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 60);
};

const randWidthPc = ["55vw", "50vw", "45vw"];
const randMarginLeftPc = [
  ["0vw", "35vw"],
  ["0vw", "40vw"],
  ["0vw", "35vw"],
];

const randWidthMoblie = ["85vw", "80vw", "75vw"];
const randMarginLeftMobile = [
  ["0vw", "5vw"],
  ["0vw", "10vw"],
  ["0vw", "15vw"],
];

let randWidth = [];
let randMarginLeft = [];

let windowWidth = window.matchMedia("screen and (max-width: 580px)");
if (windowWidth.matches) {
  console.log("모바일이여라");
  randWidth = [...randWidthMoblie];
  randMarginLeft = [...randMarginLeftMobile];
} else {
  console.log("PC 여라");
  randWidth = [...randWidthPc];
  randMarginLeft = [...randMarginLeftPc];
}

window.addEventListener(
  "resize",
  function (event) {
    let windowWidth = window.matchMedia("screen and (max-width: 580px)");
    if (windowWidth.matches) {
      console.log("모바일이여라");
      randWidth = [...randWidthMoblie];
      randMarginLeft = [...randMarginLeftMobile];
      console.log(randWidth, randMarginLeft);
    } else {
      console.log("PC 여라");
      randWidth = [...randWidthPc];
      randMarginLeft = [...randMarginLeftPc];
      console.log(randWidth, randMarginLeft);
    }
  },
  true
);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function add_img() {
  shuffle(firstImg);
  // console.log(studentImg);
  const first = firstImg.shift();
  // console.log(first);
  for (var i = 0; i < studentImg.length; i++) {
    if (studentImg[i] === first) {
      studentImg.splice(i, 1);
      i--;
    }
  }

  let img = document.createElement("img");
  img.src = "./assets/image/" + first;
  img.className = "works";
  let randIdx = Math.round(Math.random() * (randWidth.length - 1));
  img.style.width = randWidth[randIdx];
  img.style.marginLeft = randMarginLeft[randIdx][Math.round(Math.random() * 1)];

  document.querySelector(".imageContainer").appendChild(img);

  shuffle(studentImg);
  for (let i = 0; i < studentImg.length; i++) {
    let img = document.createElement("img");
    img.src = "./assets/image/" + studentImg[i];
    img.className = "works";
    let randIdx = Math.round(Math.random() * (randWidth.length - 1));
    img.style.width = randWidth[randIdx];
    img.style.marginLeft =
      randMarginLeft[randIdx][Math.round(Math.random() * 1)];

    document.querySelector(".imageContainer").appendChild(img);
  }
  // console.log(studentImg);
}

add_img();

const txtBox = document.querySelectorAll(".txt_en_box img");
const underline = document.querySelector(".underLine");

const body = document.querySelector("body");

let scrollValue = 0;
let delay = 100;
document.addEventListener("scroll", function () {
  let currentScrollValue = document.documentElement.scrollTop;
  for (let i = 0; i < txtBox.length; i++) {
    txtBox[i].style.opacity = 1;
    // txtBox[i].style.opacity =
    //   1 - ((currentScrollValue - delay * i) / body.scrollHeight) * 30;
    // if (i === 3) {
    //   underline.style.opacity =
    //     1 - ((currentScrollValue - delay * i) / body.scrollHeight) * 30;
    // }
  }
});

const addressLink = document.querySelector(".txt_en_box a");
addressLink.addEventListener("click", () => {
  // addressLink.style.display = "block";
  addressLink.rel = "noopener noreferrer";
  addressLink.href =
    "https://m.place.naver.com/place/1945589123/location?subtab=location";

  addressLink.target = "_blank";
});

const mainLogo = document.querySelector(".logo");
mainLogo.addEventListener("click", () => {
  window.location.reload();
});

const addressLink2 = document.querySelector(".map_link img");
addressLink2.addEventListener("click", () => {
  addressLink2.rel = "noopener noreferrer";
  addressLink2.href =
    "https://m.place.naver.com/place/1945589123/location?subtab=location";

  addressLink2.target = "_blank";
});

const addressLink3 = document.querySelector(".insta_link");
addressLink3.addEventListener("click", () => {
  addressLink3.rel = "noopener noreferrer";
  addressLink3.href = "https://instagram.com/uosvd_2022?igshid=YmMyMTA2M2Y=";

  addressLink3.target = "_blank";
});
