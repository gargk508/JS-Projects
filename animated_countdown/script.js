const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMsg = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "IN" && idx != nums.length - 1) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "OUT" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMsg.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  counter.classList.remove("hide");
  finalMsg.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
});
