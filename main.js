addZero = (num) => (num < 10 ? "0" + num : num);
showTime = () => {
  const now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();
  const formattedTime = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  document.getElementById("clock").innerText = formattedTime;
};

setInterval(showTime, 1000);
showTime();
