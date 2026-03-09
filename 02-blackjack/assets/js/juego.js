import _ from "./underscore-esm.js";

/**
 * 2c = 2 de treboles (clubs)
 * 2d = 2 de diamantes (diamonds)
 * 2h = 2 de corazones (hearts)
 * 2s = 2 de espadas (spades)
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

// esta funcion crea un nuevo deck
const crearDeck = () => {
	for (let i = 2; i <= 10; i++) {
		for (let tipo of tipos) {
			deck.push(i + tipo);
		}
	}
	for (let tipo of tipos) {
		for (let esp of especiales) {
			deck.push(esp + tipo);
		}
	}
	deck = _.shuffle(deck);
	console.log(deck);
};

crearDeck();

//  esta funcion me permite pedir una carta
const pedirCarta = () => {
	if (deck.length === 0) {
		throw "No hay cartas en el deck";
	}
	let carta = deck.pop();
	console.log(deck);
	console.log(carta);
	return carta;
};

pedirCarta();
