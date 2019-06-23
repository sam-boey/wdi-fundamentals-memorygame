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

function flipcard() {
    this.getAttribute('cardId');
    checkForMatch();
    this.setAttribute('src','cards[cardId].cardImage');
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

var createBoard = function () {
    for (var i = 0 i < cards.length; i++){
        //loop through card array.
        var cardElement = document.createElement ('img');
        cardElement.setAttribute('src',"images/back.png");
        cardElement.setAttribute('data id', i);
           document.getElementById('game-board').appendChild(cardElement);
    }
    document.getElementsByTagName('flipCard')[0].addEventListener('click', cardElement);
}
createBoard();