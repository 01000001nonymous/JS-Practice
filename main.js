const btn = document.querySelector(".switch-btn"),
  video = document.querySelector(".video-container"),
  preload = document.querySelector(".preload");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

window.addEventListener("load", () => preload.classList.add("hide-preload"));
