const list = [
  {
    id: 1,
    title: "rtx 5090",
    category: "gpu",
    price: "1,999",
    img: "./imgs/gpu/5090.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 2,
    title: "rtx 5080",
    category: "gpu",
    price: "1,499",
    img: "./imgs/gpu/5080.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 3,
    title: "rtx 5070",
    category: "gpu",
    price: "999",
    img: "./imgs/gpu/5070.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 4,
    title: "rtx 5060",
    category: "gpu",
    price: "799",
    img: "./imgs/gpu/5060.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 5,
    title: "ryzen 5",
    category: "cpu",
    price: "109",
    img: "./imgs/cpu/r5.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 6,
    title: "ryzen 7",
    category: "cpu",
    price: "399",
    img: "./imgs/cpu/r7.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 7,
    title: "ryzen 9",
    category: "cpu",
    price: "799",
    img: "./imgs/cpu/r9.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 8,
    title: "a520i ac",
    category: "mb",
    price: "149",
    img: "./imgs/mb/m1.webp",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 9,
    title: "h410m s2h v2",
    category: "mb",
    price: "75",
    img: "./imgs/mb/m2.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
  {
    id: 10,
    title: "h610m s2h v2",
    category: "mb",
    price: "89",
    img: "./imgs/mb/m3.jfif",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          repellendus! Quod, aperiam. Totam, laudantium earum.`,
  },
];

const container = document.querySelector(".container");

const titleSection = document.createElement("h2");
titleSection.textContent = "our list";
container.appendChild(titleSection);

const btns = document.createElement("div");
btns.className = "list";
container.appendChild(btns);

const items = document.createElement("div");
items.className = "items";
container.appendChild(items);

let displayListBtns = () => {
  const categories = list.reduce(
    (val, item) => {
      if (!val.includes(item.category)) {
        val.push(item.category);
      }
      return val;
    },
    ["all"],
  );
  let displayBtns = categories.map((category) => {
    return `<button class="filter-btn" data-id=${category}>${category}</button>`;
  });
  displayBtns = displayBtns.join("");
  btns.innerHTML = displayBtns;
};

let displayListItems = (listItems) => {
  let displayList = listItems.map((item) => {
    return `<div class="item">
      <img src=${item.img} alt=${item.title} />
      <div class="item-info">
      <div class="header">
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      </div>
      <p>${item.desc}</p>
      </div>
      </div>`;
  });
  displayList = displayList.join("");
  items.innerHTML = displayList;
};

window.addEventListener("DOMContentLoaded", () => {
  displayListBtns();
  displayListItems(list);

  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id,
        listCategory = list.filter(
          (item) => item.category === category && item,
        );
      if (category === "all") {
        displayListItems(list);
      } else {
        displayListItems(listCategory);
      }
    });
  });
});
