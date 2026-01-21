document.body.classList.add(localStorage.getItem("pageColor") || "red");

let el = document.querySelectorAll(".color-switcher li");
let classesList = [];

el.forEach((el) => {
  classesList.push(el.getAttribute("data-color"));
  el.addEventListener("click", function () {
    document.body.classList.remove(...classesList);
    document.body.classList.add(this.getAttribute("data-color"));
    localStorage.setItem("pageColor", this.getAttribute("data-color"));
  });
});

localStorage.removeItem("pageColor");
