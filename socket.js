const socket = io => {
	const Player = require("./Player");
	const {
		shuffle,
		checkTokens,
		chooseNobles,
		purchaseable
	} = require("./functions");
	const {
		deck1,
		deck2,
		deck3
	} = require("./assets/json/decks");
	const players = [];
	const gemNames = ["diamonds", "sapphires", "emeralds", "rubies", "onyx"];
	const nobles = [];
	const tokens = {
		diamonds: 7,
		sapphires: 7,
		emeralds: 7,
		rubies: 7,
		onyx: 7,
		gold: 5,
		totalTokens: 35
	};

	var turns = 0;
	var lastTurn = false;
	var currentWinnerID = null;
	var currentWinnerUsername = null;
	var highestScore = 0;
	var fewestCards;
	var gameInProgress = false;

	const NUM_DISPLAY = 4; // number of cards to display from each deck

	io.on("connection", client => {
		console.log("New connection");
		client.on("new player", (name) => {
			if (players.length === 4) {
				// emit error
				return;
			}
			// client.join(/* room id */);
			client.username = name;
			client.hasTakenGem = false;
			client.gemsTaken = [];
			client.points = 0;
			client.cards = 0;
			players.push(new Player(client.id, client.username));
			io.emit("new player", players.length, client.id);
		});

		client.on("disconnect", () => {
			console.log("Player disconnected");
			players.splice(players.findIndex(player => player.id === client.id), 1);
			io.emit("disconnected player", players.length, client.id);
			/**
			 * @todo Look into incorporating a timeout for users to reconnect instead of just ending the game.
			 */
			io.emit("end game", players.length);
		});

		client.on("new game", () => {
			if (players.length <= 1) {
				// emit error
				return;
			}

			initialization();
			io.emit("start game");
		});

		client.on("get card", (data) => {
			if (!isPlayerTurn(socket.id)) {
				client.emit("alert", "error", "It's not your turn!");
				return;
			}

			if (client.hasTakenGem) {
				client.emit("alert", "error", "You can't take a card after you've taken a token.");
				return;
			}

			if (!validate(data)) {
				client.emit("alert", "error", "You are unable to purchase this card.");
				return;
			}

			client.points 

		});

		client.on("reserve card", (data) => {

		});

		client.on("validate", (data) => {

		});

		client.on("get token", (data, double) => {

		});

		client.on("replace tokens", (tokens) => {

		});

		client.on("check nobles", (cards) => {

		});

		client.on("next turn", () => {

		});

		client.on("get token", gem => {
			console.log("Grabbed token:", gem);
			io.emit("message", `User took a ${gem}`);
		});
	});


	/*******************************************************************/


	function initialization() {
		shuffle(deck1, deck2, deck3);
		chooseNobles(nobles, players.length);
		checkTokens(players.length, tokens);

		// Display cards
		displayCards();

		// Display nobles
		io.emit("show nobles", nobles);
		io.emit("disable new game button");
		io.emit("show board");
		gameInProgress = true;
		whoseTurn();
	}

	function displayCards() {
		for (let i = 0; i < NUM_DISPLAY; i++) {
			io.emit("display card", "deck1", deck1.pop());
		}

		for (let i = 0; i < NUM_DISPLAY; i++) {
			io.emit("display card", "deck2", deck2.pop());
		}

		for (let i = 0; i < NUM_DISPLAY; i++) {
			io.emit("display card", "deck3", deck3.pop());
		}
	}

	function whoseTurn() {
		const player = players[turns % players.length];
		io.to(player.id).emit("notify");
	}

	function isPlayerTurn(id) {
		return id === players[turns % players.length].id;
	}

	function validate(data) {
		const isPurchaseable = purchaseable(data);
		const playerTurn = isPlayerTurn(client.id);
		return {
			validated: isPurchaseable && playerTurn,
			error: !playerTurn ? "It's not your turn." : !isPurchaseable ? "You cannot afford this card. To reserve the card, hold the SHIFT key while clicking it." : null
		};
	}

	function gameOver() {
		turns = 0;
		gameInProgress = false;
		tokens = {
			diamond: 7,
			sapphire: 7,
			emerald: 7,
			ruby: 7,
			onyx: 7,
			gold: 5,
			totalTokens: 35
		};

		io.emit("clear board");
		io.emit("enable new game button");
		io.emit("nobles button", true);
		io.emit("clear nobles");
	}
}

module.exports = socket;