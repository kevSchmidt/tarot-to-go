import { data } from "./data.js";
let parsedData = JSON.parse(data);
// console.log(parsedData);

// SHUFFLE FUNCTION
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shuffle(parsedData);

const cardImage = document.querySelector("#cardImage"); // red border
const cardTitle = document.querySelector("#cardTitle"); // yellow border
const cardDescription = document.querySelector("#cardDescription"); // blue border

// CREATE CARDS SELECTION
parsedData.forEach((obj) => {
  let { id, backCard, attribute } = obj;
  let list = document.querySelector("#cardList");
  let cardList = `
  <li id = ${id} class= "cardSelection" name= card${attribute}>
   <img src = "${backCard}" class = "back-card"></img>
  </li>
  `;
  list.innerHTML += cardList;
});

// DISPLAY CARDS

let counter = 0;
let titleText = "";
let interText = "";

function display() {
  counter++; // each click adds a integer value to the counter variable
  let card = parsedData.find((cards) => cards.id == this.id);
  let { photo, name, text } = card;

  if (counter < 4) {
    // Add image
    let newImg = document.createElement("img");
    newImg.src = `${photo}`; // assign value to the variable coming from data.js
    newImg.className = "imageAdd"; // assign class
    cardImage.appendChild(newImg); // send newImg to the div "cardImage"
    // Add title
    titleText += `${name} - `; // send values to the empty string titleText
    // Add text
    interText += `${text} `; // send values to the empty string interText
  } else {
    console.log("it has been more than 3 choices"); // test purpose
  }

  if (counter === 3) {
    titleText += `.`; // still to be fixed, replacing the dash with a dot
    interText += `.`; // still to be fixed, replacing the dash with a dot
    setTimeout(function () {
      let textNode = document.createTextNode(titleText);
      let textNode2 = document.createTextNode(interText);
      cardTitle.appendChild(textNode);
      cardDescription.appendChild(textNode2);
    }, 3000);
  }
}


// ACTIVE ITEMS
const listItems = document.querySelectorAll("li");

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
// Design 

// round of cards 


// Center grid

let container = document.querySelector(".container");

// Intro elements

let sunCerle = document.createElement("div");
sunCerle.className = "sunCerle";
container.appendChild(sunCerle);

let eye = document.createElement("div");
eye.className = "eye";
sunCerle.appendChild(eye);

let sunImg = document.createElement("img");
sunImg.className = "sun";
sunCerle.appendChild(sunImg);
sunImg.src = "./img/sun.png";

let circleImg = document.createElement("img");
circleImg.className = "circle";
sunCerle.appendChild(circleImg);
circleImg.src = "./img/circle.png";

// Intro event

const cardDisplay = document.querySelector("#cardList");

sunCerle.addEventListener("click", () =>  {
  sunCerle.style.display = "none";
  cardDisplay.style.display = "grid";
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

