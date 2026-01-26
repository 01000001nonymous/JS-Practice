const modal = document.querySelector(".modal-overlay"),
  modalBtn = document.querySelector(".modal-btn"),
  closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
