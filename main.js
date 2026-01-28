const slides = document.querySelectorAll(".slide"),
  prevBtn = document.querySelector(".prev-btn"),
  nextBtn = document.querySelector(".next-btn"),
  carousel = () => {
    if (i < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }

    if (i > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }

    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${i * 100}%)`;
    });
  };

prevBtn.style.display = "none";

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let i = 0;
prevBtn.addEventListener("click", () => {
  i--;
  carousel();
});
nextBtn.addEventListener("click", () => {
  i++;
  carousel();
});
