const box_container = document.getElementById("boxes");
const btn = document.getElementById("btn");

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 100}px ${-i * 100}px`;
      box_container.appendChild(box);
    }
  }
}

btn.addEventListener("click", () => {
  box_container.classList.toggle("big");
});

createBoxes();
