const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

const todosLS = JSON.parse(localStorage.getItem("todos"));
if (todosLS) {
  todosLS.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const listItem = document.createElement("li");

    if (todo && todo.completed) {
      listItem.classList.add("completed");
    }

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
      updateLS();
    });

    listItem.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      listItem.remove();
      updateLS();
    });

    listItem.innerText = todoText;
    todos.appendChild(listItem);
    input.value = "";

    updateLS();
  }
}

function updateLS() {
  listItems = document.querySelectorAll("li");

  const todos = [];

  listItems.forEach((item) => {
    todos.push({
      text: item.innerText,
      completed: item.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
