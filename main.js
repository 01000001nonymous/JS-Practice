let input = document.getElementById("password");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide Password";
  } else {
    input.type = "password";
    btn.textContent = "Show Password";
  }
});
