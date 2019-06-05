class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
	}

	/*   shuffleCards(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards;
  } */

	checkIfPair(card1, card2) {
		this.pairsClicked += 1;
		if (card1 === card2) {
			this.pairsGuessed += 1;
		}
		if (card1 == card2) {
			return true;
		} else {
			return false;
		}
	}

	isFinished(cards) {
		if (this.pairsGuessed * 2 === this.cards.length) {
			return true;
		} else {
			return false;
		}
	}
}

/* 
It should return false at the beggining of the game
It should return false if there still some pairs to be guessed
It should return true if all pairs were guessed
 */
