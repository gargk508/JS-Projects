const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const len = input.length;

  background.style.filter = `blur(${16 - len * 2}px)`;
});
