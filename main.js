const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'],
btn = document.querySelector('.change'),
span = document.querySelector('.color'),
randomNumber = () => Math.floor(Math.random() * colors.length);

btn.addEventListener('click', () => {
  let hexColor = '#';
  for(let i=0; i<6; i++) {
    hexColor += colors[randomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
  span.style.color = hexColor;
});
