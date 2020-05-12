
import { data } from "./data.js";
let parsedData = JSON.parse(data);
// console.log(parsedData);

// SHUFFLE FUNCTION
function shuffleDeck(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shuffleDeck(parsedData);

const cardImage = document.querySelector("#cardImage"); // red border
const cardTitle = document.querySelector("#cardTitle"); // yellow border
const cardDescription = document.querySelector("#cardDescription"); // blue border

// CREATE CARDS SELECTION
parsedData.forEach((obj) => {
  let { id, backCard } = obj;
  let list = document.querySelector("#cardList");
  let cardList = `
  <li id = ${id} class= "cardSelection">
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

// ACTIVE ITEMS
const listItems = document.querySelectorAll("#cardList li");

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
 ****************************************** */

