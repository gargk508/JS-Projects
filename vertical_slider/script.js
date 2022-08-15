const slider = document.querySelector(".slider-container");
const right_slide = document.querySelector(".right-slide");
const left_slide = document.querySelector(".left-slide");
const btn_up = document.querySelector(".up-button");
const btn_down = document.querySelector(".down-button");
const slidesLen = right_slide.querySelectorAll("div").length;

let activeSlide = 0;

left_slide.style.top = `-${(slidesLen - 1) * 100}vh`;

btn_up.addEventListener("click", () => slide("up"));
btn_down.addEventListener("click", () => slide("down"));

function slide(dir) {
  const height = slider.clientHeight;
  if (dir === "up") {
    activeSlide++;
    if (activeSlide > slidesLen - 1) {
      activeSlide = 0;
    }
  } else {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slidesLen - 1;
    }
  }
  right_slide.style.transform = `translateY(-${activeSlide * height}px)`;
  left_slide.style.transform = `translateY(${activeSlide * height}px)`;
}
