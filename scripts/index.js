import { data } from "./data.js";
let parsedData = JSON.parse(data);
console.log(parsedData);

let arrayObj = parsedData.splice(0, 8); // select only 8 cards from the deck
console.log(arrayObj);

// SHUFFLE FUNCTION

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shuffle(arrayObj);

// SECTIONS

const mainGrid = document.querySelector(".mainGrid");
const cardDisplay = document.querySelector("#cardList");
const results = document.querySelector(".results");
const cardImage = document.querySelector("#cardImage");
const cardTitle = document.querySelector("#cardTitle");
const cardDescription = document.querySelector("#cardDescription");

cardDescription.classList.add("text-focus"); // add class for text animation

// INTRO ELEMENTS

let sunCerle = document.createElement("div");
sunCerle.className = "sunCerle";
mainGrid.appendChild(sunCerle);

let eye = document.createElement("div");
eye.className = "eye";
sunCerle.appendChild(eye);

let sunImg = document.createElement("img");
sunImg.className = "sun";
sunCerle.appendChild(sunImg);
sunImg.src = "./img/sun.svg";

let circleImg = document.createElement("img");
circleImg.className = "circle";
sunCerle.appendChild(circleImg);
circleImg.src = "./img/circle.png";

// CREATE CARDS SELECTION

arrayObj.forEach((obj) => {
  let { id, backCard, attribute } = obj;
  let list = document.querySelector("#cardList");
  let cardList = `
  <div id = ${id} class= "cardSelection card${id}" name= card${attribute}>
   <img src = "${backCard}" class = "back-card"></img>
  </div>
  `;
  list.innerHTML += cardList;
  console.log(list);
});

// const listItems = document.querySelectorAll(".cardSelection");
// listItems.forEach((x, index) => {
//   console.log(listItems[index]);
//   listItems[index].className += ` card${index}`;
// });

// DISPLAY CARDS

let counter = 0;
let titleText = "";
let interText = "";

function display() {
  counter++; // each click adds a integer value to the counter variable
  let card = arrayObj.find((cards) => cards.id == this.id);
  let { photo, name, text } = card;
  // console.log(cards.id);
  console.log(card);
  console.log(this.id);

  if (counter < 4) {
    // Add image
    let newImg = document.createElement("img");
    newImg.src = `${photo}`; // assign value to the variable coming from data.js

    newImg.className = "imageAdd slide-in"; // assign class - Animation entrance result cards
    cardImage.appendChild(newImg); // send newImg to the div "cardImage"

    // Event Listener (add hover for image)
    newImg.addEventListener("mouseover", () => {
      newImg.classList.add("hover");
      newImg.style.cursor = "pointer";
    });
    newImg.addEventListener("mouseleave", () => {
      newImg.classList.remove("hover");
      newImg.classList.remove("slide-in-top");
    });

    // Add title
    titleText += `${name} - `; // send values to the empty string titleText
    // Add text
    interText += `${text} `;
    // send values to the empty string interText
  } else {
    console.log("it has been more than 3 choices"); // test purpose
  }

  if (counter === 3) {
    titleText += `.`; // still to be fixed, replacing the dash with a dot
    interText += `.`; // still to be fixed, replacing the dash with a dot

    // Delay

    setTimeout(function () {
      cardDisplay.style.display = "none";
      results.style.display = "grid";
      cardImage.style.display = "flex";
      let textNode = document.createTextNode(titleText);
      let textNode2 = document.createTextNode(interText);
      cardTitle.appendChild(textNode);
      cardDescription.appendChild(textNode2);
      cardTitle.style.display = "flex";
      cardDescription.style.display = "flex";
    }, 800);
  }
}

// ACTIVE ITEMS

const listItems = document.querySelectorAll(".cardSelection");
// listItems.forEach((arrayElements, index) => {
//   console.log(listItems[index]);
//   listItems[index].className += ` card${index}`;
// });

function onClick() {
  listItems.forEach(() => {
    this.classList.remove("hover");
    this.classList.add("active"); // card selected is active
    console.log(listItems);
    this.classList.add("disappear"); // card selected disappear on click

    if (counter > 2) {
      this.classList.remove("active");
      this.classList.remove("disappear");
    }
  });
}

// EVENT LISTENER

sunCerle.addEventListener("click", () => {
  sunCerle.style.display = "none";
  cardDisplay.style.display = "grid";
});

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
