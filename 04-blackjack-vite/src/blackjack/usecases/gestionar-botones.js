/**
 * Cambia el estado (disabled) de una lista de botones
 * @param {Boolean} estado - true para desactivar, false para activar
 * @param {Array<HTMLButtonElement>} botones - Lista de botones a modificar
 */
export const gestionarBotones = (estado = false, ...botones) => {
	// Validación de seguridad
	if (botones.length === 0) return;

	console.log(
		`%c[UI]: Cambiando estado de botones a: ${estado ? "DESACTIVADO" : "ACTIVADO"}`,
		"color: #7f8c8d;",
	);

	// Recorremos cada botón recibido y le aplicamos el estado
	botones.forEach((boton) => {
		if (boton) boton.disabled = estado;
	});
};
