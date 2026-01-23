let startPoint = 15;
const count = document.getElementById("count"),
  addZero = (num) => (num < 10 ? "0" + num : num),
  countDown = setInterval(() => {
    let minutes = Math.floor(startPoint / 60),
      seconds = startPoint % 60;
    count.textContent = `${addZero(minutes)}:${addZero(seconds)}`;

    if (startPoint > 0) {
      startPoint--;
    } else {
      clearInterval(countDown);
      count.textContent = "Time's up!";
    }
  }, 1000);
