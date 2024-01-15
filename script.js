/* PRE-LOADER FUNCTIONALITY*/
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader_sec");
  preloader.classList.remove("hidden");
  preloader.classList.add("preloader");

  void preloader.offsetWidth;

  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 500);
});

const toogleBtn = document.querySelector(".toogle_btn");
const toogleImage = document.querySelector(".toogle_btn img");
const menu = document.querySelector(".dropdown_menu");
const menuList = document.querySelectorAll(".dropdown_menu li");

toogleBtn.onclick = () => {
  if (toogleImage.src.includes("menu.svg")) {
    toogleImage.src = "./assets/close.svg";
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
    toogleImage.src = "./assets/menu.svg";
  }
};
const isClose = () => {
  menu.classList.remove("open");
  toogleImage.src = "./assets/menu.svg";
};

menuList.forEach((li) => {
  li.onclick = () => {
    isClose();
  };
});

document.onclick = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};
document.onscroll = (e) => {
  if (!toogleBtn.contains(e.target) && !menu.contains(e.target)) {
    isClose();
  }
};

/* SCROLL FUNCTIONALITY */
const animationUp = document.querySelectorAll(".animations_up");
const animationDown = document.querySelectorAll(".animations_down");
const animationLeft = document.querySelectorAll(".animations_left");
const animationRight = document.querySelectorAll(".animations_right");
const animationSpecial = document.querySelectorAll(".animations_left_special");
const animation = document.querySelectorAll(".animations");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.1 }
);

for (let i = 0; i < animationUp.length; i++) {
  const elements = animationUp[i];

  observer.observe(elements);
}
/*  */
for (let i = 0; i < animationDown.length; i++) {
  const elements = animationDown[i];

  observer.observe(elements);
}
/*  */
for (let i = 0; i < animationLeft.length; i++) {
  const elements = animationLeft[i];

  observer.observe(elements);
}
/*  */
for (let i = 0; i < animationRight.length; i++) {
  const elements = animationRight[i];

  observer.observe(elements);
}
/*  */
for (let i = 0; i < animationSpecial.length; i++) {
  const elements = animationSpecial[i];

  observer.observe(elements);
}
/*  */
for (let i = 0; i < animation.length; i++) {
  const elements = animation[i];

  observer.observe(elements);
}

const scrollLogo = document.querySelector(".nav");
const navDown = document.querySelector(".nav_down_inner");
const navDownList = document.querySelectorAll(".nav_down_inner li");
const navBottom = document.querySelector(".nav_bottom");

const handleScroll = () => {
  if (window.scrollY > 3) {
    scrollLogo.style.position = "fixed";
    navDown.style.display = "none";
    navBottom.style.position = "fixed";
    navBottom.style.top = "4.8rem";
  } else {
    scrollLogo.style.position = "relative";
    navDown.style.display = "flex";
    navBottom.style.position = "relative";
    navBottom.style.top = "0";
  }
};

window.addEventListener("scroll", handleScroll);

const toggleActive = (event, parentElement) => {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    parentElement.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });

    clickedElement.classList.add("active");
  }
};
