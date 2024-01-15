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
