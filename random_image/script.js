const container = document.querySelector(".container");
const url = "https://source.unsplash.com/random/";
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${url}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${randomNumber()}x${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
