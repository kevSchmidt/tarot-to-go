import { data } from "./data.js";
let parsedData = JSON.parse(data);

const cardImage = document.querySelector("#cardImage");
const cardTitle = document.querySelector("#cardTitle");
const cardDescription = document.querySelector("#cardDescription");

// create card selection
parsedData.forEach((obj) => {
  let { id, backCard } = obj;
  let list = document.querySelector("#cardList");
  let cardList = `
  <li id = ${id}> 
   <img src = "${backCard}" class = "back-card"></img> 
  </li>
  `;
  list.innerHTML += cardList;
});

/*
// display image
function displayImg() {
  let card = parsedData.find((card) => card.id == this.id);
  let { name, photo } = card;
  cardImage.innerHTML = `<img id = "cardImg" src="${photo}" alt=${name} />`;
}
// display title
function displayTitle() {
  let card = parsedData.find((card) => card.id == this.id);
  let { name } = card;
  cardTitle.innerHTML = `<h2 id = "cardHeader">${name}</h2>`;
}
// display card info
function displayInfo() {
  let card = parsedData.find((card) => card.id == this.id);
  let { text } = card;
  cardDescription.innerHTML = `<p id = "cardInfo">${text}</p>`;
}
*/

function display() {
  let card = parsedData.find((card) => card.id == this.id);
  let { name, photo, text } = card;
  cardImage.innerHTML = `<img id = "cardImg" src="${photo}" alt=${name} />`;
  cardTitle.innerHTML = `<h2 id = "cardHeader">${name}</h2>`;
  cardDescription.innerHTML = `<p id = "cardInfo">${text}</p>`;
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
  /*
  item.addEventListener("click", displayImg);
  item.addEventListener("click", displayTitle);
  item.addEventListener("click", displayInfo);
  */
});

// ========== TEST ====
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const add = () => {
  // Add item
  let newItem = document.createElement("div");
  newItem.className = "divAdd";
  let newImg = document.createElement("img");
  newImg.src = `./img/major${getRandomInt(2)}${getRandomInt(10)}.jpg`;
  newImg.className = "imageAdd";
  newItem.appendChild(newImg);
  document.querySelector(".list-item").appendChild(newItem);

  let list = document.querySelectorAll(".divAdd");

  // Remove item
  let span = document.createElement("span");
  let text = document.createElement("i");
  text.className = "fas fa-times-circle";
  span.className = "close";
  span.appendChild(text);
  list.forEach((item) => {
    item.appendChild(span);
  });
  span.addEventListener("click", () => {
    newItem.remove();
  });
};
// event listener
listItems.forEach((item) => {
  item.addEventListener("click", add);
});
