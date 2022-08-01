const tagsdiv = document.querySelector(".tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (event) => {
  createTags(event.target.value);

  if (event.key === "Enter") {
    setTimeout(() => {
      event.target.value = "";
    }, 20);

    randomSelect();
  }
});

function createTags(value) {
  const tags = value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log(tags);

  tagsdiv.innerHTML = "";

  tags.forEach((tag) => {
    const element = document.createElement("span");
    element.classList.add("tag");
    element.innerText = tag;
    tagsdiv.appendChild(element);
  });
}

function randomSelect() {
  const times = 30;
  const Interval = setInterval(() => {
    const randomTag = pickRandomTag();
    addHighlight(randomTag);

    setTimeout(() => {
      removeHighlight(randomTag);
    }, 90);
  }, 100);

  setTimeout(() => {
    clearInterval(Interval);

    setTimeout(() => {
      addHighlight(pickRandomTag());
    }, 100);

    setTimeout(() => {
      console.log("calledD");
      document.querySelector(".tags").innerHTML = "";
    }, 3000);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function addHighlight(tag) {
  tag.classList.add("highlight");
}

function removeHighlight(tag) {
  tag.classList.remove("highlight");
}
