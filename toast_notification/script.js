const btn = document.getElementById("btn");
const toasts = document.querySelector(".toasts");

btn.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = `Notification!!!`;
  toasts.appendChild(toast);
  setTimeout(() => removeNotification(toast), 3000);
});

function removeNotification(toast) {
  toast.remove();
}
