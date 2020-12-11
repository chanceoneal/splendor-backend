function shuffle(d1, d2, d3) {
	for (let i = d1.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[d1[i - 1], d1[j]] = [d1[j], d1[i - 1]];
	}

	for (let i = d2.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[d2[i - 1], d2[j]] = [d2[j], d2[i - 1]];
	}

	for (let i = d3.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[d3[i - 1], d3[j]] = [d3[j], d3[i - 1]];
	}
}

function checkTokens(players, tokens) {
	if (players === 3) {
		for (let gem in tokens) {
			if (gem !== "gold" && gem !== "totalTokens") {
				tokens[gem] -= 2;
				tokens.totalTokens -= 2;
			}
		}
	} else if (players === 2) {
		for (let gem in tokens) {
			if (gem !== "gold" && gem !== "totalTokens") {
				tokens[gem] -= 3;
				tokens.totalTokens -= 3;
			}
		}
	}
}

function chooseNobles(nobles, players) {
	const nobleJSON = require("./assets/json/nobles");
	const nobleNames = [
		"Anne of Brittany", "Catherine de Medici", "Charles V", "Elisabeth of Austria", "Francis I of France", "Henry VIII", "Isabella I of Castille", "Niccolo Machiavelli", "Suleiman the Magnificent"
	];

	for (let i = 0; i < players + 1; i++) {
		let j = Math.floor(Math.random() * nobleNames.length);
		let noble = nobleNames[j];
		nobles.push({
			name: noble,
			price: nobleJSON[noble]
		});
		nobleNames.splice(j, 1);
	}
}

function purchaseable(data) {
	for (let gem in data.card.price) {
		if (data.card.price[gem] > data.resources[gem]) {
			let diff = data.card.price[gem] - data.resources[gem];
			if (data.resources.gold >= diff) {
				data.resources.gold -= diff;
				data.resources[gem] += diff;
			} else {
				return false;
			}
		}
	}
	return true;
}

module.exports = {
	shuffle,
	checkTokens,
	chooseNobles,
	purchaseable
};