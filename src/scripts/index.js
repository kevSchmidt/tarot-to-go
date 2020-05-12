
import { data } from "./data.js";
let parsedData = JSON.parse(data);


const cardImage = document.querySelector("#cardImage");
const cardTitle = document.querySelector("#cardTitle");
const cardDescription = document.querySelector("#cardDescription");

/* ******
// LIST CARDS
const nums = new Set();
while (nums.size !== 22) {
  nums.add(Math.floor(Math.random() * 22) + 1);
}
let cardsRandom = [];
nums.forEach((element) => {
  cardsRandom.push(element);
});
console.log(cardsRandom, "this is cardsRandom");
***** */

// CREATE CARDS SELECTION
let alreadyUsed = [];
let result = Math.floor(Math.random() * 22) + 1;
function myFunction() {
  alreadyUsed.push(result);
  if (!alreadyUsed.includes(result)) {
    return parseInt(result, 10);
    // return result;
  }
  console.log(alreadyUsed);
  console.log(parseInt(result, 10));
}

parsedData.forEach((obj) => {
  let { id, backCard } = obj;
  let list = document.querySelector("#cardList");

  let cardList = `
  <li id = ${result} class= "cardSelection">
   <img src = "${backCard}" class = "back-card"></img>
  </li>
  `;
  list.innerHTML += cardList;
});

// DISPLAY CARDS
function display() {
  let card = parsedData.find((cards) => cards.id == this.id);
  let { name, photo, text } = card;

  // Add image
  let newImg = document.createElement("img");
  newImg.src = `${photo}`;
  newImg.className = "imageAdd";
  cardImage.appendChild(newImg);

  // Add title
  let newTitle = document.createElement("div");
  newTitle.className = "titleAdd";
  newTitle.innerHTML = `${name}`;
  cardTitle.appendChild(newTitle);

  // Add text
  let newDescription = document.createElement("div");
  newDescription.className = "descriptionAdd";
  newDescription.innerHTML = `${text}`;
  cardDescription.appendChild(newDescription);
}
const listItems = document.querySelectorAll("#cardList li");

// ACTIVE ITEMS
function onClick() {
  listItems.forEach((card) => {
    this.classList.remove("hover");
    this.classList.add("active");
  });
}

// EVENT LISTENER
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

document.getElementById("cardButton").addEventListener("click", myFunction);

/* ******************************************************
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
 ********* */

/* ******************************************************
// Random cards

const nums = new Set();
while (nums.size !== 23) {
  nums.add(Math.floor(Math.random() * 23) + 1);
}

let cardsRandom = [];
nums.forEach((element) => {
  cardsRandom.push(element.toString());
});

console.log(cardsRandom, "Random numbers pushed");

// Display function

let cardList;
let displayCards = document.querySelector("#cardList");

let display2 = () => {
  for (let i = 0; i < 21; i++) {
    let valuePro = cardsRandom[i];

    let { id, photo } = parsedData[valuePro];
    cardList = `<div class="card"><img src=${photo}></div>`;

    displayCards.innerHTML += card;
  }
  nums = [];
  cardsRandom = [];
};
display2();
*********************/

