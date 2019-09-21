var cards = [
	{
		rank: "queen",
		suit: "hearts",
		file: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		file: "images/queen-of-diamonds.png"
	}, 
	{
		rank: "king",
		suit: "hearts",
		file: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		file: "images/king-of-diamonds.png"
	}
	];

var cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
			alert("It's a Match!");
		} else(alert("Sorry, try again!"))
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit)
	console.log(cards[cardId].file);
		
}

flipCard(0);
flipCard(2);
checkForMatch();



