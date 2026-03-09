import _ from "./underscore-esm.js";

/**
 * Nomenclatura de cartas:
 * 2C = Two of Clubs (Tréboles)
 * 10S = Ten of Spades (Espadas)
 * AD = Ace of Diamonds (Diamantes)
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

// Refrencias del HTMNL

const btnPedir = document.querySelector("#btnPedirCarta");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevoJuego = document.querySelector("#btnNuevoJuego");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");
const puntosHTML = document.querySelectorAll("small");
/**
 * 1. CREACIÓN DEL DECK
 * Genera una baraja de 52 cartas mezcladas.
 */
const crearDeck = () => {
	// Cartas numéricas (2 al 10)
	for (let i = 2; i <= 10; i++) {
		for (let tipo of tipos) {
			deck.push(i + tipo);
		}
	}

	// Cartas especiales (Letras)
	for (let tipo of tipos) {
		for (let esp of especiales) {
			deck.push(esp + tipo);
		}
	}

	// Mezclamos usando Underscore.js
	deck = _.shuffle(deck);
};

crearDeck();

/**
 * 2. PEDIR CARTA
 * Extrae la última carta del arreglo (LIFO - Last In, First Out).
 * @returns {String} Retorna la carta extraída (ej: '2C')
 */
const pedirCarta = () => {
	if (deck.length === 0) {
		// throw detiene la ejecución del programa, ideal para errores críticos.
		throw new Error("No hay más cartas en el deck");
	}

	const carta = deck.pop(); // Sacamos la última del arreglo

	return carta;
};

/**
 * 3. VALOR DE LA CARTA
 * Transforma el string de la carta en su valor numérico para el juego.
 * @param {String} carta
 * @returns {Number} Valor de la carta (2-11)
 */
const valorCarta = (carta) => {
	/**
	 * .substring(0, carta.length - 1)
	 * Si la carta es '10S', corta desde el índice 0 hasta antes del último carácter.
	 * Resultado: '10'
	 */
	const valor = carta.substring(0, carta.length - 1);

	/**
	 * Lógica de puntuación:
	 * 1. isNaN(valor): ¿El recorte NO es un número? (A, J, Q, K)
	 * 2. Si no es número: ¿Es As? Vale 11. ¿Es J, Q, K? Valen 10.
	 * 3. Si es número: Multiplicamos por 1 para convertir String a Number.
	 */
	const puntos = isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
	return puntos;
};

// Eventos
btnPedir.addEventListener("click", () => {
	const carta = pedirCarta();
	puntosJugador += valorCarta(carta);

	// Actualizamos el primer <small> (índice 0) con los puntos
	puntosHTML[0].innerText = puntosJugador;

	// Crear la imagen de la carta dinámicamente
	const imgCarta = document.createElement("img");
	imgCarta.src = `assets/cartas/${carta}.png`;
	imgCarta.classList.add("carta");
	divCartasJugador.appendChild(imgCarta);

	// Lógica de control de juego
	if (puntosJugador > 21) {
		console.warn(
			"%cLo siento, perdiste con " + puntosJugador,
			"color: white; background: red; padding: 3px;",
		);
		btnPedir.disabled = true; // ¡Ahora sí funcionará!
	} else if (puntosJugador === 21) {
		console.warn(
			"%c21, ¡Genial!",
			"color: white; background: green; padding: 3px;",
		);
		btnPedir.disabled = true;
	}
});
