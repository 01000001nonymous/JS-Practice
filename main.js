const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle"),
  linksContainer = document.querySelector(".links-container"),
  links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  let containerHeight = linksContainer.getBoundingClientRect().height,
    linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav"),
  topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset,
    navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1),
      ele = document.getElementById(id),
      navHeight = navbar.getBoundingClientRect().height,
      containerHeight = linksContainer.getBoundingClientRect().height,
      fixedNav = navbar.classList.contains("fixed-nav");
    let position = ele.offsetTop - navHeight;
    if (!fixedNav) position -= navHeight;
    if (navHeight > 82) position += containerHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
