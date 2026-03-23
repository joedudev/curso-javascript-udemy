/**
 * Module Pattern to protect our game logic scope.
 * We only expose 'nuevoJuego' to the outside world.
 */
const miModulo = (() => {
	"use strict";

	let deck = [];
	const tipos = ["C", "D", "H", "S"],
		especiales = ["A", "J", "Q", "K"];

	let puntosJugadores = [];

	// HTML References
	const btnPedir = document.querySelector("#btnPedir"),
		btnDetener = document.querySelector("#btnDetener");

	const divCartasJugadores = document.querySelectorAll(".divCartas"),
		puntosHTML = document.querySelectorAll("small");

	/**
	 * Initializes the game state.
	 * Default is 2 players (Player + Computer).
	 */
	const inicializarJuego = (numJugadores = 2) => {
		deck = crearDeck();

		// Optimization: Cleanly initialize scores for any number of players
		puntosJugadores = Array(numJugadores).fill(0);

		puntosHTML.forEach((elem) => (elem.innerText = 0));
		divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

		btnPedir.disabled = false;
		btnDetener.disabled = false;
	};

	/**
	 * Generates a shuffled deck using logical concatenation
	 */
	const crearDeck = () => {
		deck = [];
		// Populate deck with numbers 2-10 and types
		for (let i = 2; i <= 10; i++) {
			for (let tipo of tipos) deck.push(i + tipo);
		}
		// Populate deck with special figures and types
		for (let tipo of tipos) {
			for (let esp of especiales) deck.push(esp + tipo);
		}
		return _.shuffle(deck);
	};

	// Takes the last card from the deck
	const pedirCarta = () => {
		if (deck.length === 0) throw new Error("No cards left in the deck");
		return deck.pop();
	};

	// Calculates card value using ternary operators
	const valorCarta = (carta) => {
		const valor = carta.substring(0, carta.length - 1);
		return isNaN(valor) ? (valor === "A" ? 11 : 10) : Number(valor);
	};

	// Turn: 0 = first player, last = computer
	const acumularPuntos = (carta, turno) => {
		puntosJugadores[turno] += valorCarta(carta);
		puntosHTML[turno].innerText = puntosJugadores[turno];
		return puntosJugadores[turno];
	};

	const crearCarta = (carta, turno) => {
		const imgCarta = document.createElement("img");
		imgCarta.src = `assets/cartas/${carta}.png`;
		imgCarta.classList.add("carta");
		divCartasJugadores[turno].append(imgCarta);
	};

	const determinarGanador = () => {
		// Destructuring the first two scores
		const [puntosMinimos, puntosComputadora] = puntosJugadores;

		setTimeout(() => {
			if (puntosComputadora === puntosMinimos) alert("It is a draw! :(");
			else if (puntosMinimos > 21) alert("Computer wins!");
			else if (puntosComputadora > 21) alert("Player Wins!");
			else alert("Computer Wins!");
		}, 100);
	};

	/**
	 * Computer AI logic: Draws cards until it beats player or busts
	 */
	const turnoComputadora = (puntosMinimos) => {
		let puntosComputadora = 0;
		const computerIndex = puntosJugadores.length - 1;

		do {
			const carta = pedirCarta();
			puntosComputadora = acumularPuntos(carta, computerIndex);
			crearCarta(carta, computerIndex);
		} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

		determinarGanador();
	};

	// Events
	btnPedir.addEventListener("click", () => {
		const carta = pedirCarta();
		const puntosJugador = acumularPuntos(carta, 0);
		crearCarta(carta, 0);

		if (puntosJugador >= 21) {
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora(puntosJugador);
		}
	});

	btnDetener.addEventListener("click", () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugadores[0]);
	});

	// Public exposure
	return {
		nuevoJuego: inicializarJuego,
	};
})();
