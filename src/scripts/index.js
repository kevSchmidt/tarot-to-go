import { data } from "./data.js";
let parsedData = JSON.parse(data);
console.log(parsedData);
let arrayObj = parsedData.splice(0, 8);
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
const cardImage = document.querySelector("#cardImage"); // red border
const cardTitle = document.querySelector("#cardTitle"); // yellow border
const cardDescription = document.querySelector("#cardDescription"); // blue border

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
  <div id = ${id} class= "cardSelection" name= card${attribute}>
   <img src = "${backCard}" class = "back-card"></img>
  </div>
  `;
  list.innerHTML += cardList;
});

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
    newImg.className = "imageAdd"; // assign class
    cardImage.appendChild(newImg);
    // send newImg to the div "cardImage"
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
    }, 3000);
  }
}

// ACTIVE ITEMS

const listItems = document.querySelectorAll(".cardSelection");
console.log(listItems);
function onClick() {
  listItems.forEach(() => {
    this.classList.remove("hover");
    this.classList.add("active");
    if (counter > 2) {
      this.classList.remove("active");
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
 ****************************************** 
//removed

    // Add title
    // let newTitle = document.createElement("div");
    // newTitle.className = "titleAdd";
    // newTitle.innerHTML = `${name}`;

    // Add text
    // let newDescription = document.createElement("div");
    // newDescription.className = "descriptionAdd";
    // newDescription.innerHTML = `${text}`;


******************************************


// const list = [...parsedData].reduce(
//   (acc, a) =>
//     acc + `<p class="cardDescription__text" id="${a.text}">${a.text}</p>`,
//   ""
// );
// console.log(list);



/* ======= Gabriela comment ========================
 // Add title
 let newTitle = document.createElement("div");
 newTitle.className = "titleAdd";
 newTitle.innerHTML = `${name}`;
 // Add text
 let newDescription = document.createElement("div");
 newDescription.className = "descriptionAdd";
 newDescription.innerHTML = `${text}`;
 // Gabriela function
 const list = [...parsedData].reduce(
   (acc, a) =>
     acc + `<p class="cardDescription__text" id="${a.text}">${a.text}</p>`,
   ""
 );
 console.log(list);
============================== */
