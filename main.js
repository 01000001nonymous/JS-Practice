let text = "Hello, World!",
  btn = document.getElementById("btn");

btn.onclick = () => {
  let i = 0;
  let typeWriter = setInterval(() => {
    document.getElementById("type").textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typeWriter);
  }, 100);
};
