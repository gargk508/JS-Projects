const main = document.querySelector(".main");
const times = document.getElementById("times");

main.addEventListener("dblclick", (e) => createHeart(e));

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  let x = e.clientX;
  let y = e.clientY;
  const top = e.target.offsetTop;
  const left = e.target.offsetLeft;

  x = x - left;
  y = y - top;

  console.log(x, y);

  heart.style.top = `${y}px`;
  heart.style.left = `${x}px`;
  main.append(heart);

  let timesVal = +times.innerText;
  timesVal++;
  times.innerText = `${timesVal}`;

  setTimeout(() => heart.remove(), 450);
}
