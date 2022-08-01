const buttons = document.querySelectorAll(".faq-toggle");
const divs = document.querySelectorAll(".faq");

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    divs[idx].classList.toggle("active");
  });
});

//Other way is to use ParentNode property which returns the parent element.

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.parentNode.classList.toggle("active");
//   });
// });
