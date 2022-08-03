const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    console.log("called");
    const target = +counter.getAttribute("count");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
    } else {
      counter.innerText = target;
      clearInterval(interval);
    }
  };

  const interval = setInterval(updateCounter, 1);
});
