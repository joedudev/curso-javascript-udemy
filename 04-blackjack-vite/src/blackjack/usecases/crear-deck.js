import { shuffle } from "underscore";

/**
 * Esta funcion crea nu nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales Ejemplo ["A", "J", "Q", "K"]
 * @returns {Array<string>} retorna un uevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
	if (!tiposDeCarta || tiposDeCarta >= 0)
		throw new Error("Tipos de Carta es obligatorio como un arreglo de string");
	if (!tiposEspeciales || tiposEspeciales >= 0)
		throw new Error("Tipos de Carta es obligatorio como un arreglo de string");
	let deck = [];

	for (let i = 2; i <= 10; i++) {
		for (let tipo of tiposDeCarta) {
			deck.push(i + tipo);
		}
	}

	for (let tipo of tiposDeCarta) {
		for (let esp of tiposEspeciales) {
			deck.push(esp + tipo);
		}
	}
	// console.log( deck );
	deck = shuffle(deck);
	return deck;
};
