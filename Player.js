class Player {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.tokens = {
			diamonds: 0,
			sapphires: 0,
			emeralds: 0,
			rubies: 0,
			onyx: 0,
			gold: 0,
			total: 0
		};
		this.cards = {
			diamonds: 0,
			sapphires: 0,
			emeralds: 0,
			rubies: 0,
			onyx: 0,
			total: 0
		};
		this.points = 0;
	}

	addPoints(pts) {
		this.points += pts;
	}

	getTokens(tokens) {
		for (let token of tokens) {
			this.tokens[token]++;
			this.tokens.total++;
		}

		return this.tooManyTokens();
	}

	spendTokens(tokens) {
		for (let token of tokens) {
			if (this.tokens[token] > 0) {
				this.tokens[token]--;
				this.tokens.total--;
			} else {
				return false;
			}
		}

		return true;
	}

	canPurchase(card) {
		for (let gem in card.price) {
			if (card.price[gem] > this.tokens[gem]) {
				let diff = card.price[gem] - this.tokens[gem];
				if (this.tokens.gold >= diff) {
					this.tokens.gold -= diff;
					this.tokens[gem] += diff;
				} else {
					return false;
				}
			}
		}
		return true;
	}

	tooManyTokens() {
		return this.tokens.total > 10;
	}

	getCard(cardType) {
		this.cards[cardType]++;
	}
}

module.exports = Player;