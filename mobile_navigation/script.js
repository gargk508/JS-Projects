const images = document.querySelectorAll(".content");
const navs = document.querySelectorAll("nav li");

navs.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    remove();
    images[idx].classList.add("show");
    navs[idx].classList.add("active");
  });
});

function remove() {
  images.forEach((img) => {
    img.classList.remove("show");
  });

  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
}
