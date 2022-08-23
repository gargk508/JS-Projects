const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const val = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  const num_range = +range_width.substring(0, range_width.length - 2);
  const num_label = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    val * (num_range / max) - num_label / 2 + scale(val, min, max, 10, -10);
  console.log(left);
  label.style.left = `${left}px`;

  label.innerHTML = val;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
