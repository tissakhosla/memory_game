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
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];

var cardsInPlay = [];
var goodPicks = 0;
var badPicks = 0;

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		goodPicks++;
		alert("It's a Match! " + goodPicks + "/" + badPicks);
	} else{
		badPicks++;
		alert("Sorry try again. " + goodPicks + "/" + badPicks);
	}
}

function flipCard(){
		var cardId = this.getAttribute('data-id');

		this.setAttribute('src', cards[cardId].cardImage);

		cardsInPlay.push(cards[cardId].rank);

		if(cardsInPlay.length === 2){
			setTimeout(function(){checkForMatch();}, 333);
		}
	}

function randomIndex() {
	return Math.floor(cards.length * Math.random());
}

function createBoard(){
	var allCards = [];

	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		var nextCard = randomIndex();
		var c;

		for (c = 0; c < allCards.length; c++){ //check all cards so far
			if (allCards[c] === nextCard){ //found
				nextCard = randomIndex() //generate anouther card
				c = -1; //check from the top
			}
		}
		if(c === allCards.length){ //not found in allCards
			allCards.push(nextCard); // add to allCards
		}

		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', nextCard);

		document.getElementById('game-board').appendChild(cardElement);

		cardElement.addEventListener('click', flipCard);
		}
}

function reset(){
	var board = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++){
		board.removeChild(board.firstChild);
	}

	cardsInPlay = [];
	createBoard();
}

document.getElementById('reset').addEventListener('click', reset);

createBoard();
