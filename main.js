let capitalizeLetters = (string) => {
  let words = string.split(" "),
    newArray = [];

  words.forEach((word) => {
    newArray.push(`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  });
  return newArray.join(" ");
};

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const div = document.createElement("div");
  div.innerText = capitalizeLetters(input.value);
  document.body.appendChild(div);
  input.value = "";
});
