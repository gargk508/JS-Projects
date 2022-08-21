const ratings = document.querySelectorAll(".rating");
const rating_container = document.querySelector(".rating-container");
const panel = document.querySelector("#panel");
const sendBtn = document.getElementById("btn");
let selected = "Satisfied";

rating_container.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selected = e.target.nextElementSibling.innerHTML;
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selected}</strong>
        <p>We will use your feedback to improve our customer support</p>
    `;
});
