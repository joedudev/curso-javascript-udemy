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
	console.log(deck);
	deck = _.shuffle(deck);
	console.log(deck);
};

crearDeck();
