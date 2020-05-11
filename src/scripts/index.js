import { data } from "./data.js";
let parsedData = JSON.parse(data);

const cardDescription = document.querySelector("#cardDescription");

// create card selection
parsedData.forEach((obj) => {
  let { id, number } = obj;
  let list = document.querySelector("#cardList");
  let cardList = `<li id = ${id}> ${number} </li>`;
  list.innerHTML += cardList;
});

// Cards info
function display() {
  let card = parsedData.find((card) => card.id == this.id);
  let { name, photo, text } = card;
  cardDescription.innerHTML = `
  <h2 id = "cardHeader">${name}</h2>
  <img id = "cardImg" src="${photo}" alt=${name} />
  <p id = "cardInfo">${text}</p>
  `;
}

const listItems = document.querySelectorAll("#cardList li");

// active item
function onClick() {
  listItems.forEach((card) => {
    if (card.classList.contains("active")) {
      card.classList.remove("active");
    }
    this.classList.remove("hover");
    this.classList.add("active");
  });
}

// event listener
listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
  });
  item.addEventListener("click", onClick);
  item.addEventListener("click", display);
});
