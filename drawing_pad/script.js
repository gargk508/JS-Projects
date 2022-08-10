const canvas = document.getElementById("canvas");
const dec = document.getElementById("decrease");
const inc = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const inputEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const cxt = canvas.getContext("2d");

let size = 20;
let color = "black";
let x, y;
let isPressed = false;

dec.addEventListener("click", () => {
  size = size - 5;
  if (size < 5) size = 5;
  sizeEl.innerText = size;
});

inc.addEventListener("click", () => {
  size = size + 5;
  if (size > 50) size = 50;
  sizeEl.innerText = size;
});

inputEl.addEventListener("input", () => {
  color = inputEl.value;
});

clearEl.addEventListener("click", () => {
  cxt.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  cxt.beginPath();
  cxt.arc(x, y, size, 0, Math.PI * 2);
  cxt.fillStyle = color;
  cxt.fill();
}

function drawLine(x1, y1, x2, y2) {
  cxt.beginPath();
  cxt.moveTo(x1, y1);
  cxt.lineTo(x2, y2);
  cxt.strokeStyle = color;
  cxt.lineWidth = size * 2;
  cxt.stroke();
}
