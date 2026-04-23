import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Uso de funciones Async
 * Demuestra cómo consumir una función marcada con 'async'.
 * @param {HTMLDivElement} element - Contenedor donde se mostrará el nombre del héroe.
 */
export const asyncComponent = (element) => {
	// ID de prueba (puedes cambiarlo para probar el catch)
	const id1 = "5d86371fd55e2e2a30fe1ccb";

	console.log("%c[Async]: Llamando a findHero...", "color: #3498db;");

	/**
	 * Aunque findHero es 'async', se consume exactamente igual que una Promesa
	 * manual usando .then() y .catch().
	 */
	findHero(id1)
		.then(({ name }) => {
			console.log(`%c[Éxito]: Héroe "${name}" cargado.`, "color: #2ecc71;");
			element.innerHTML = /* html */ `
                <div style="padding: 15px; border-left: 4px solid #a855f7; background: #1e293b;">
                    <span style="color: #94a3b8;">El héroe es:</span> 
                    <strong style="color: #a855f7;">${name}</strong>
                </div>
            `;
		})
		.catch((error) => {
			console.error(`%c[Error]: ${error}`, "color: #ef4444;");
			element.innerHTML = /* html */ `
                <b style="color: #ef4444; border: 1px solid; padding: 10px;">
                    🚨 Error: ${error}
                </b>
            `;
		});
};

/**
 * Busca un héroe por ID de forma asíncrona.
 * El prefijo 'async' transforma el retorno de la función en una Promesa.
 * @param {String} id - UUID del héroe.
 * @returns {Promise<Object>} Promesa que resuelve al objeto del héroe encontrado.
 * @throws {String} Mensaje de error si el héroe no existe.
 */
const findHero = async (id) => {
	const hero = heroes.find((hero) => hero.id === id);

	// En una función async, si lanzas un error con 'throw',
	// automáticamente se dispara el .catch() de quien la consume.
	if (!hero) {
		throw `Héroe con ID ${id} no encontrado en la base de datos.`;
	}

	// El 'return' equivale al 'resolve' en una promesa manual.
	return hero;
};
