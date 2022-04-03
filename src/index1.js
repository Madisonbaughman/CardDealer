import "./styles1.css";

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

var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn);
//btn.onclick = dealCards;
btn.addEventListener("click", () => {
  dealCards();
  btn.remove();
});

//Part 1:

const CARD_SUITS = ["♠", "♥", "♦", "♣"];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const DECK = [];
const dealt = new Set();

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

function pickCard() {
  let oldSize = dealt.size;
  let cardChoice = DECK[random()];
  //console.log("o" + oldSize);
  let newSize = dealt.add(cardChoice).size;
  //console.log("n" + newSize);

  if (newSize > oldSize) {
    //if (dealt.size < 5){
    //dealt.add(cardChoice);
    //if (!dealt.has(cardChoice)){
    //dealt.add(cardChoice);
    return cardChoice;
  } else {
    pickCard();
  }
}

let innerContent1 = [];

function dealCards() {
  var cardList = document.createElement("ul");
  document.body.appendChild(cardList);

  for (let n = 0; n < 5; n++) {
    let listEl = document.createElement("li");
    listEl.classList.add("card");
    listEl.id = `card-${n}`;
    //why doesnt id CSS selector work
    let innerContent = document.createElement("span");
    listEl.appendChild(innerContent);
    var num = (innerContent.innerText = "Card: " + pickCard());
    //console.log(num);
    //console.log(listEl.id);
    //listEl.setAttribute('style', 'display: none'); hides the whole li
    // WHY CANT I DO THIS?? num.setAttribute('style', 'display: none');
    innerContent.setAttribute("style", "display: none");
    cardList.appendChild(listEl);
    innerContent1.push(innerContent);
  }

  //HERE IS WHERE IT FALLS APART

  //innerContent is not defined out here... Do i need to query DOM again?
  //let spanList = document.querySelectorAll("span");
  //this gives me nodeLlist of span elements?
  //let displayC = spanList.forEach((n) => { n.style.display});
  //return displayC = "block" ;

  //if spanList.forEach(n => style.display === "none")

  cardList.addEventListener("click", function (e) {
    if (e.target.className === "card") {
      //let spanList = document.querySelectorAll("span");
      innerContent1.forEach((n) => {
        n.setAttribute("style", "display: block");
      });
    }
  });
}
//toggle the fucking carddddddd
//let spanEl = spanList.forEach(n => {innerContent.innerText});

//Part 2:
//had to look up how to create a button in JS

// var btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";
// document.body.appendChild(btn);
// //btn.onclick = dealCards;
// btn.addEventListener("click", dealCards);

//add <ul>
// add to first part of dealCard function?
// var cardList =  document.createElement("ul");
// document.body.appendChild(cardList)

// <input type="button" value="Click me" >
// const button = document.querySelector('input')
