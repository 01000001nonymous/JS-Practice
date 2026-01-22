const classList = ["red", "blue", "green", "yellow", "orange", "purple"],
  div = document.querySelector("div"),
  btn = document.getElementById("btn"),
  randomNumber = () => Math.floor(Math.random() * classList.length),
  genrateNewClass = () => div.classList.add(classList[randomNumber()]);

genrateNewClass();

btn.addEventListener("click", () => {
  if (div.hasAttribute("class")) div.removeAttribute("class");
  genrateNewClass();
});
