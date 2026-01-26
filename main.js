const reviews = [
  {
    id: 1,
    img: "./imgs/team-01.png",
    name: "anonymous",
    job: "web full stack",
    text: "I wake up, programming, play video games, work and sleep.",
  },
  {
    id: 2,
    img: "./imgs/team-02.png",
    name: "susan Ahmed",
    job: "web developer",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    img: "./imgs/team-03.png",
    name: "mohammed hussan",
    job: "intern",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    img: "./imgs/team-04.png",
    name: "alaa Mahmoud",
    job: "web designer",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 5,
    img: "./imgs/team-05.png",
    name: "sara ibrahem",
    job: "ux&ui designer",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const personImg = document.getElementById("img"),
  personName = document.querySelector(".name"),
  personJob = document.querySelector(".job"),
  personInfo = document.querySelector(".info"),
  prevBtn = document.querySelector(".prev-btn"),
  nextBtn = document.querySelector(".next-btn"),
  randomBtn = document.querySelector(".random-one");

let i = 0;

const showTeam = () => {
  const { img, name, job, text } = reviews[i];
  personImg.src = img;
  personName.textContent = name;
  personJob.textContent = job;
  personInfo.textContent = text;
};

window.addEventListener("DOMContentLoaded", () => {
  showTeam();
});

nextBtn.addEventListener("click", () => {
  i++;
  if (i > reviews.length - 1) i = 0;
  showTeam(i);
});

prevBtn.addEventListener("click", () => {
  i--;
  if (i < 0) i = reviews.length - 1;
  showTeam(i);
});

randomBtn.addEventListener("click", () => {
  i = Math.floor(Math.random() * reviews.length);
  showTeam();
});
