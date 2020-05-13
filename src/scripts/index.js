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

// SECTIONS
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
    console.log(counter); // test purpose
    console.log(newImg); // test purpose
    // Add title
    titleText += `${name} - `; // send values to the empty string titleText
    console.log(name); // test purpose
    // Add text
    interText += `${text} `; // send values to the empty string interText
    console.log(text); // test purpose
  } else {
    console.log("it has been more than 3 choices"); // test purpose
  }

  if (counter === 3) {
    titleText += `.`; // still to be fixed, replacing the dash with a dot
    interText += `.`; // still to be fixed, replacing the dash with a dot
    console.log("puh"); // test purpose
    setTimeout(function () {
      let textNode = document.createTextNode(titleText);
      let textNode2 = document.createTextNode(interText);
      cardTitle.appendChild(textNode);
      cardDescription.appendChild(textNode2);
    }, 3000);
  }
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


*/
