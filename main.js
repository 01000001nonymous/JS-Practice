const input = document.querySelector("input");
let placeholder = input.getAttribute("placeholder");

input.onfocus = () => input.removeAttribute("placeholder", true);
input.onblur = () => input.setAttribute("placeholder", placeholder);
