import { shuffle } from "underscore";

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
	for (let i = 2; i <= 10; i++) {
		for (let tipo of tiposDeCarta) {
			deck.push(i + tipo);
		}
	}

	for (let tipo of tipos) {
		for (let esp of tiposEspeciales) {
			deck.push(esp + tipo);
		}
	}
	// console.log( deck );
	deck = shuffle(deck);
	console.log(deck);
	return deck;
};
