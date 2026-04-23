import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Demostración de Promise Hell (Anidación excesiva)
 * Este componente ilustra cómo NO deberíamos encadenar promesas cuando
 * necesitamos resultados dependientes o múltiples.
 * * @param {HTMLDivElement} element - Elemento del DOM donde se renderizará el resultado.
 */
export const promiseComponent = (element) => {
	/**
	 * Renderiza el nombre de un único héroe.
	 * @param {Object} hero - El objeto del héroe.
	 */
	const renderHero = (hero) => {
		element.innerHTML = hero.name;
	};

	/**
	 * Renderiza los nombres de dos héroes.
	 * @param {Object} hero1 - Primer héroe encontrado.
	 * @param {Object} hero2 - Segundo héroe encontrado.
	 */
	const renderTwoHeros = (hero1, hero2) => {
		console.log(
			`%c[UI]: Renderizando pareja -> ${hero1.name} & ${hero2.name}`,
			"color: #a855f7; font-weight: bold; border-bottom: 1px solid;",
		);
		element.innerHTML = `
            <ul style="list-style: none; padding: 0;">
                <li><strong>Héroe 1:</strong> ${hero1.name}</li>
                <li><strong>Héroe 2:</strong> ${hero2.name}</li>
            </ul>
        `;
	};

	/**
	 * Renderiza un mensaje de error visual.
	 * @param {String} error - El mensaje de error.
	 */
	const renderError = (error) => {
		console.error(
			`%c[UI Error]: ${error}`,
			"color: #ef4444; background: #2a0000;",
		);
		element.innerHTML = `<h3 style="color: #ef4444;">🚨 Error: ${error}</h3>`;
	};

	const id1 = "5d86371f25a058e5b1c8a65e"; // Iron Man
	const id2 = "5d86371f9f80b591f499df32"; // Spider-Man

	/**
	 * 🚩 ADVERTENCIA: PROMISE HELL (Infierno de Promesas)
	 * Estamos anidando un .then() dentro de otro. Si necesitáramos 5 héroes,
	 * el código se desplazaría hacia la derecha creando una "pirámide".
	 */
	console.warn(
		"%c[Sistema]: Iniciando carga anidada (Promise Hell)...",
		"color: #f39c12; font-weight: bold;",
	);

	findHero(id1)
		.then((hero1) => {
			// Segunda promesa dentro de la primera (Nivel 2 de anidación)
			findHero(id2)
				.then((hero2) => {
					// Solo aquí tenemos acceso a ambos resultados
					renderTwoHeros(hero1, hero2);
				})
				.catch(renderError); // Manejo de error para la segunda promesa
		})
		.catch(renderError) // Manejo de error para la primera promesa
		.finally(() => {
			console.log(
				"%c[Sistema]: Intento de carga finalizado.",
				"color: #7f8c8d; font-style: italic;",
			);
		});
};

/**
 * Busca un héroe por su ID simulando una petición asíncrona.
 * @param {String} id - Identificador único del héroe.
 * @returns {Promise<Object>} Promesa que resuelve al objeto Hero o rechaza si no existe.
 */
const findHero = (id) => {
	return new Promise((resolve, reject) => {
		console.log(
			`%c[Promise]: Buscando ID ${id.substring(0, 5)}...`,
			"color: #3498db;",
		);

		// Simulamos latencia de red (1 segundo)
		setTimeout(() => {
			const hero = heroes.find((hero) => hero.id === id);

			if (hero) {
				resolve(hero);
			} else {
				reject(`Héroe con el id ${id} no fue encontrado`);
			}
		}, 1000);
	});
};
