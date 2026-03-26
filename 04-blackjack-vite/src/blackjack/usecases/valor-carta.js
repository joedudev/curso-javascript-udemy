/**
 * Obtiene el valor numérico de una carta.
 * @param {String} carta - Ejemplo: '2C', '10H', 'AD'
 * @returns {Number} Valor de la carta (2-11)
 * @throws {Error} Si la carta no es un string válido o está vacío.
 */
export const valorCarta = (carta) => {
	// 1. Validación de entrada (Guard Clause)
	if (!carta || typeof carta !== "string" || carta.length < 2) {
		throw new Error(
			'valorCarta: Se requiere un string de carta válido (ej: "2C")',
		);
	}

	const valor = carta.substring(0, carta.length - 1);
	return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
