const container = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const squares = 400;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = `${
      colors[Math.floor(Math.random() * colors.length)]
    }`;
  });

  square.addEventListener("mouseleave", () => {
    square.style.backgroundColor = "#1d1d1d";
  });
  container.appendChild(square);
}
