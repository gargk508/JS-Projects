const buttons = document.querySelectorAll(".ripple");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xVal = x - btnLeft;
    const yVal = y - btnTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${yVal}px`;
    circle.style.left = `${xVal}px`;

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});
