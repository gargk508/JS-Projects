const inputs = document.querySelectorAll(".code");

inputs[0].focus();
inputs.forEach((input, idx) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      if (input.nextElementSibling)
        setTimeout(() => inputs[idx + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        inputs[idx - 1].focus();
        inputs[idx - 1].select();
      }, 10);
    }
  });
});
