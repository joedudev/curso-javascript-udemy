/**
 * Esta función extrae la última carta del mazo (deck).
 * @param {Array<String>} deck - Un arreglo de strings que representa la baraja.
 * @returns {String} Retorna la carta extraída del mazo.
 * @throws {Error} Lanza un error si el deck no es válido o está vacío.
 */
export const pedirCarta = (deck) => {
	// Validamos que el deck exista y sea un arreglo antes de operar
	// Si no es un arreglo o su longitud es 0, lanzamos el error
	if (!deck || deck.length === 0) {
		const errorMsg = "No hay cartas en el deck o el mazo no es válido";
		console.error(
			`%cError en pedirCarta: ${errorMsg}`,
			"color: red; font-weight: bold;",
		);
		throw new Error(errorMsg);
	}

	const carta = deck.pop();

	// Debug opcional para ver el estado en consola
	console.log(
		`%cCarta extraída: ${carta}. Quedan: ${deck.length}`,
		"color: #2ecc71;",
	);

	return carta;
};
