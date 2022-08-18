const addBtn = document.getElementById("add");

let notes = JSON.parse(localStorage.getItem("notes"));
if (notes) notes.forEach((note) => addNote(note));

addBtn.addEventListener("click", () => addNote());

function addNote(text = "") {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteEl.innerHTML = `<div class="tools">
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class=${text ? "hidden" : ""}></textarea>`;

  const deleteBtn = noteEl.querySelector(".delete");
  const editBtn = noteEl.querySelector(".edit");
  const main = noteEl.querySelector(".main");
  const textarea = noteEl.querySelector("textarea");

  main.innerHTML = text;
  textarea.value = text;

  deleteBtn.addEventListener("click", () => {
    noteEl.remove();
    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("input", (e) => {
    main.innerHTML = marked.parse(e.target.value);
    updateLS();
  });

  document.body.appendChild(noteEl);
}

function updateLS() {
  const textareas = document.querySelectorAll("textarea");
  let notes = [];
  textareas.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
