var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank:"king",
    suits:"diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = []

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipcard(cardId) {
    checkForMatch();
    if (cardsInPlay.length === 2)
     alert("Sorry,try again.");
     if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else{
    console.log("User flipped " + cards[cardID].rank);
}
    cardsInPlay.push(cards[cardId].rank) ;
}
{
console.log(cards[cardId].cardImage);
}
{
console.log (cards[cardId].suit);
}




flipcard(0);
flipcard(2);