const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let active = 1;

prev.addEventListener("click", () => {
  active--;
  update();
});

next.addEventListener("click", () => {
  active++;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < active) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");

  let width = ((activeCircles.length - 1) / (circles.length - 1)) * 100;

  progress.style.width = width + "%";

  if (active === circles.length) {
    next.disabled = true;
  } else if (active === 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
