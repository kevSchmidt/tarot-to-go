
import { data } from "./data.js";
let parsedData = JSON.parse(data);


// Random cards

// const nums = new Set();
// while(nums.size !== 23) {
// nums.add(Math.floor(Math.random() * 23) + 1);}

// let cardsRandom = [];
// nums.forEach(element => {
//     cardsRandom.push(element.toString());
// });

// console.log(cardsRandom, "Random numbers pushed");

// Display function

// let displayCards = document.querySelector(".displayCards")

// let display = () => {

//         for (let i=0; i < 21; i++) {   

//             let valuePro = cardsRandom[i];

//             let { id, photo } = parsedData[valuePro];
//             let card = `<div class="card"><img src=${photo}></div>`;

//             displayCards.innerHTML += card;
//     }  
//     nums = [];
//     cardsRandom = [];

// };
// display();


// document.getElementById("reload").addEventListener("click", display);


// console.log(parsedData, "This the parsedata");
// console.log(nums, "set method");

// console.log(parsedData[1].id);