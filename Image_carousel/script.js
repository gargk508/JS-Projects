const imgContainer = document.querySelector(".image-container");
const prev = document.getElementById("left");
const next = document.getElementById("right");
const images = document.querySelectorAll("img");

let active = 0;

next.addEventListener("click", () => {
  active++;
  if (active > images.length - 1) active = 0;

  imgContainer.style.transform = `translateX(-${500 * active}px)`;
  clearInterval(interval);
  interval = setInterval(runCarousel, 2000);
});

prev.addEventListener("click", () => {
  active--;
  if (active < 0) active = images.length - 1;

  imgContainer.style.transform = `translateX(-${500 * active}px)`;
  clearInterval(interval);
  interval = setInterval(runCarousel, 2000);
});

let interval = setInterval(runCarousel, 2000);

function runCarousel() {
  active++;
  if (active > images.length - 1) active = 0;

  imgContainer.style.transform = `translateX(-${500 * active}px)`;
}
