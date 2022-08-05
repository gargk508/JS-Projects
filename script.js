const cups = document.querySelectorAll(".cup.small");
const remained = document.querySelector(".cup .remained");
const filled = document.querySelector(".cup .filled");
let currentActive = 0;

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    toggleClass(idx);
  });
});

function toggleClass(idx) {
  if (idx == cups.length - 1 && cups[idx].classList.contains("full")) idx--;
  else if (
    cups[idx].classList.contains("full") &&
    !cups[idx + 1].classList.contains("full")
  )
    idx--;

  cups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateLargeCup(idx);
}

function updateLargeCup(idx) {
  let val = ((idx + 1) / cups.length) * 100;
  filled.style.height = `${val}%`;
  remained.style.height = `${100 - val}%`;
  filled.childNodes[1].innerText = `${val}%`;
  remained.childNodes[1].innerText = `${2 - 2 * (val / 100)}L`;
  console.log(val);
}
