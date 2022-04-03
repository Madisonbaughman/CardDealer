import "./styles.css";

/* 
Exercise: Card Dealer

const CARD_SUITS = ["♠", "♥", "♦", "♣"];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

Using vanilla JS (no React!):

1. Create a deck of cards
2. When the user clicks a button, deal 5 cards randomly.
3. When the user clicks on a card, show what the card is.
//DONT LET CARD REPLICATE.
*/

document.getElementById("app").innerHTML = `
<h1>Deck of Cards!</h1>

`;

//Part 1:

const CARD_SUITS = ["♠", "♥", "♦", "♣"];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let DECK = [];

function deckOfCards() {
  for (let i = 0; i < CARD_SUITS.length; i++) {
    for (let j = 0; j < CARD_VALUES.length; j++) {
      DECK.push(CARD_SUITS[i] + CARD_VALUES[j]);
    }
  }
  return DECK;
}
deckOfCards();

function random() {
  return Math.floor(Math.random() * 52);
}

function showCard(n) {
  console.log(`.card.card-${n}`);
  document.querySelector(`.card.card-${n}`).innerText = DECK[random()];
}

function dealCards() {
  //for (let i = 0; i < 5; i ++) {
  let n = 0;
  while (n < 5) {
    n++;
    let element = document.createElement("div");
    element.classList.add("card");
    element.classList.add(`card-${n}`);
    element.innerText = "WHAT CARD SHALL I DEAL?";

    //DECK[random()];
    const w = (x) => () => showCard(x);
    //element.addEventListener("click", ()=>console.log('LOGGED'));
    document.body.append(element);
    element.addEventListener("click", w(n));
  }
}

//console.log(random())

//Part 2:
//had to look up how to create a button in JS

var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn);
//btn.onclick = dealCards;
btn.addEventListener("click", dealCards);

// <input type="button" value="Click me" >
// const button = document.querySelector('input');
// button.addEventListener('click', dealCards);
