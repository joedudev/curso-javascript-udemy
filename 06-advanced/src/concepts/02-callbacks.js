import { heroes } from "../data/heroes.js";

/**
 * Componente para demostrar el uso de Callbacks.
 * @param {HTMLDivElement} element - El elemento del DOM donde se renderizará el resultado.
 */
export const callbacksComponent = (element) => {
	const id = "5d86371fd55e2e2a30fe1ccb12";

	console.log("%c[Componente]: Buscando héroe...", "color: #3498db;");

	// Invocamos la función con el patrón Error-First
	findHero(id, (error, hero) => {
		// Si el callback recibe un error, lo mostramos y detenemos la ejecución
		if (error) {
			console.error(`%c[Error]: ${error}`, "color: #ef4444;");
			element.innerHTML = /* html */ `<b style="color: red;">${error}</b>`;
			return;
		}

		// Si todo sale bien, mostramos el nombre del héroe
		console.log(`%c[Éxito]: Héroe encontrado: ${hero.name}`, "color: #2ecc71;");
		element.innerHTML = hero.name;
	});
};

/**
 * Busca un héroe en la base de datos local de forma síncrona/asíncrona vía callback.
 * * @param {String} id - El UUID o identificador único del héroe.
 * @param { (error: String|null, hero: Object|null) => void } callback -
 * Función que se ejecuta al terminar la búsqueda.
 * Sigue el patrón (error, data).
 */
const findHero = (id, callback) => {
	// Validación de seguridad: ¿Se proporcionó un ID?
	if (!id) {
		callback("Se requiere un ID válido para la búsqueda", null);
		return;
	}

	const hero = heroes.find((hero) => hero.id === id);

	// Si el héroe no existe en el arreglo
	if (!hero) {
		callback(`Héroe con el id ${id} no fue encontrado`, null);
		return;
	}

	// Si el héroe existe, el primer argumento (error) es null
	callback(null, hero);
};
