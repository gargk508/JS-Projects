const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Hello World!!";
let idx = 1;
let speed;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) idx = 1;
  speed = 500 / speedEl.value;
  setTimeout(writeText, speed);
}
