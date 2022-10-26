const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
  counter.innerHTML = "0";

  const updateCounter = function () {
    const target = Number(counter.getAttribute("data-target"));
    const c = Number(counter.innerHTML);

    const increment = target / 400;

    if (c < target) {
      counter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };

  updateCounter();
});
