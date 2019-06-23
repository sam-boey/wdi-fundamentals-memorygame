var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipcard(cardId) {
    checkForMatch()
    if (cardsInPlay.length === 2){
    alert("Sorry,try again.");
}
else if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else{
    console.log("User flipped " + cards[cardId]);
}
};

cardsInPlay.push(cards);

flipcard([0]);
flipcard([2]);