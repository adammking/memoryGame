const cards= document.querySelectorAll(".container");
const games = document.querySelectorAll(".gameboard");
const imgs = document.querySelectorAll(".back")
let scoreBoard = document.querySelector(".counter")
let scoreCounter = 0;
let flippedCounter = 0;
let currentCard;
let flipped = [];
let matched = [];
let cardFlipped = true;




 //This function shuffles the cards by randomly sorting the containers the cards are in

function shuffleCards() {
  cards.forEach(card => { 
    let random = Math.floor(Math.random() * 12)
    card.style.order = random;
  })
}
shuffleCards();

//Adds an event listener for every card on the page 
for (let c of cards) {
c.addEventListener("click", clickLogic)

function clickLogic(e) {
    currentCard = e.target.parentElement;
    
   // This function is supposed to check if a card has been flipped and if it has not it will flip it. Also adds the flipped card to an array to be compared.
    if (currentCard.classList !== "is-flipped") {
        currentCard.cardFlipped = false;
        scoreCounter++;
        scoreBoard.innerText = "Score: " + scoreCounter;
        if (!currentCard.cardFlipped){
        currentCard.classList.add("is-flipped")
        currentCard.cardFlipped = true;
        console.log(currentCard.cardFlipped);
        flipped.push(currentCard);
        flippedCounter++;
        console.log(flippedCounter);
        } else {
          return;
        }
        }
   
// This statement checks two cards added to the array to see if they match. If they do it pushes the cards to another array, if not it flips them over
    if ( flippedCounter === 2 || flipped.length === 2) {
      if (flipped[0].firstElementChild.dataset.band !== flipped[1].firstElementChild.dataset.band) {
          setTimeout (function () {
          flipped[0].classList.remove("is-flipped");
          flipped[1].classList.remove("is-flipped");
          flipped = [];
          flippedCounter = 0;
        }, 1000)
        } else { 
          flipped[0].removeEventListener("click", clickLogic);
          flipped[1].removeEventListener("click", clickLogic);
          matched.push(flipped[0]);
          matched.push(flipped[1]);
          flippedCounter = 0
          flipped = [];
          }
        }
    }}
//Game functions, but I still need to find a way to make sure you can not select the same card twice and match it with itself. 