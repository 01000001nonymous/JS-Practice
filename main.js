let textarea = document.getElementById("text"),
  count = document.getElementById("count"),
  maxLength = textarea.getAttribute("maxlength");

textarea.addEventListener("input", function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0
    ? count.classList.add("full")
    : count.classList.remove("full");
});
