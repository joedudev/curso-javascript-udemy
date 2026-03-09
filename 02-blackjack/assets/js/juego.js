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

/**
 * 1. CREACIÓN DEL DECK
 * Genera una baraja de 52 cartas mezcladas.
 */
const crearDeck = () => {
	console.log(
		"%c--- 📦 Creando Nuevo Deck ---",
		"color: #3498db; font-weight: bold;",
	);

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

	console.log("Deck Barajado:", deck);
	console.log(
		`Total de cartas: %c${deck.length}`,
		"color: #2ecc71; font-weight: bold;",
	);
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

	console.log(`%c🃏 Carta pedida: ${carta}`, "color: #9b59b6;");
	console.log(`Cartas restantes: ${deck.length}`);

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

	console.log(`%c-> Valor calculado: ${puntos}`, "color: #f1c40f;");
	return puntos;
};

// --- PRUEBA DE EJECUCIÓN ---
const cartaRobada = pedirCarta();
const puntosTotales = valorCarta(cartaRobada);

console.log(
	"%c--- 📊 Resultado Final ---",
	"color: #e74c3c; font-weight: bold;",
);
console.log({ cartaRobada, puntosTotales });
