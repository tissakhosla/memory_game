var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
			alert("It's a Match!");
		} else{
			alert("Nope!");
		}
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();	
}

flipCard(0);
flipCard(3);
