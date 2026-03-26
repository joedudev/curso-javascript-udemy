import { shuffle } from "underscore";

/**
 * Esta función crea un nuevo mazo de cartas (Deck).
 * @param {Array<string>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<string>} Retorna un nuevo mazo de cartas barajado.
 * @throws {Error} Si los argumentos no son válidos o están vacíos.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
	// 1. Validaciones de Seguridad (Early Returns / Guard Clauses)
	// Usamos Array.isArray para asegurar que recibimos el tipo de dato correcto.
	if (
		!tiposDeCarta ||
		!Array.isArray(tiposDeCarta) ||
		tiposDeCarta.length === 0
	) {
		throw new Error(
			"tiposDeCarta es obligatorio y debe ser un arreglo de strings con contenido.",
		);
	}

	if (
		!tiposEspeciales ||
		!Array.isArray(tiposEspeciales) ||
		tiposEspeciales.length === 0
	) {
		throw new Error(
			"tiposEspeciales es obligatorio y debe ser un arreglo de strings con contenido.",
		);
	}

	let deck = [];

	// 2. Creación de cartas numéricas (2 al 10)
	for (let i = 2; i <= 10; i++) {
		for (let tipo of tiposDeCarta) {
			deck.push(i + tipo);
		}
	}

	// 3. Creación de cartas especiales (A, J, Q, K)
	for (let tipo of tiposDeCarta) {
		for (let esp of tiposEspeciales) {
			deck.push(esp + tipo);
		}
	}

	// 4. Barajado del deck
	// Usamos shuffle para desordenar el arreglo original y devolver la nueva referencia
	console.log(
		"%c--- Deck creado exitosamente ---",
		"color: green; font-weight: bold;",
	);

	return shuffle(deck);
};
