const textarea = document.getElementById("textarea"),
  form = document.getElementById("form");

const div = document.createElement("div");
form.appendChild(div);

textarea.addEventListener("input", () => {
  div.textContent = textarea.value;
});
