import _ from "./underscore-esm.js";

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
	puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedirCarta"),
	btnDetener = document.querySelector("#btnDetener"),
	btnNuevoJuego = document.querySelector("#btnNuevoJuego");

const puntosHTML = document.querySelectorAll("small"),
	divCartasJugador = document.querySelector("#jugador-cartas"),
	divCartasComputadora = document.querySelector("#computadora-cartas");

// Función para inicializar/resetear el juego
const inicializarJuego = () => {
	console.clear();
	console.log(
		"%c--- 🆕 Nuevo Juego Iniciado ---",
		"color: blue; font-weight: bold;",
	);

	deck = crearDeck(); // Ahora crearDeck retorna un valor
	puntosJugador = 0;
	puntosComputadora = 0;

	puntosHTML[0].innerText = 0;
	puntosHTML[1].innerText = 0;

	divCartasJugador.innerHTML = "";
	divCartasComputadora.innerHTML = "";

	btnPedir.disabled = false;
	btnDetener.disabled = false;
};

const crearDeck = () => {
	deck = [];
	for (let i = 2; i <= 10; i++) {
		for (let tipo of tipos) deck.push(i + tipo);
	}
	for (let tipo of tipos) {
		for (let esp of especiales) deck.push(esp + tipo);
	}
	return _.shuffle(deck); //
};

const pedirCarta = () => {
	if (deck.length === 0) throw new Error("No hay cartas");
	return deck.pop(); //
};

const valorCarta = (carta) => {
	const valor = carta.substring(0, carta.length - 1);
	return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; //
};

// Lógica mejorada de la Computadora
const turnoComputadora = (puntosMinimos) => {
	do {
		const carta = pedirCarta();
		puntosComputadora += valorCarta(carta);
		puntosHTML[1].innerText = puntosComputadora;

		const imgCarta = document.createElement("img");
		imgCarta.src = `assets/cartas/${carta}.png`;
		imgCarta.classList.add("carta");
		divCartasComputadora.appendChild(imgCarta);

		// Si el jugador ya perdió, la computadora solo necesita una carta para ganar
		if (puntosMinimos > 21) break;
	} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

	// Mensajes de victoria/derrota después de que termine el ciclo
	setTimeout(() => {
		if (puntosComputadora === puntosMinimos) alert("Nadie gana :(");
		else if (puntosMinimos > 21) alert("Computadora gana");
		else if (puntosComputadora > 21) alert("Jugador Gana");
		else alert("Computadora Gana");
	}, 100);
};

// Eventos
btnPedir.addEventListener("click", () => {
	const carta = pedirCarta();
	puntosJugador += valorCarta(carta);
	puntosHTML[0].innerText = puntosJugador;

	const imgCarta = document.createElement("img");
	imgCarta.src = `assets/cartas/${carta}.png`;
	imgCarta.classList.add("carta");
	divCartasJugador.appendChild(imgCarta);

	if (puntosJugador > 21) {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugador);
	} else if (puntosJugador === 21) {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugador);
	}
});

btnDetener.addEventListener("click", () => {
	btnPedir.disabled = true;
	btnDetener.disabled = true;
	turnoComputadora(puntosJugador);
});

btnNuevoJuego.addEventListener("click", () => {
	inicializarJuego();
});

// Iniciamos la primera vez
inicializarJuego();
