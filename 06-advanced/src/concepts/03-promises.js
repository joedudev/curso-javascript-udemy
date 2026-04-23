import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Promesas Encadenadas (Promise Chaining)
 * Este componente muestra cómo manejar múltiples tareas asíncronas de forma secuencial
 * manteniendo el código limpio y legible.
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
	const renderTwoHeros = (hero1, hero2) => {
		console.log(
			`%c[UI]: Renderizando pareja secuencial.`,
			"color: #a855f7; font-weight: bold;",
		);

		element.innerHTML = /* html */ `
            <ul style="list-style: none; padding: 0;">
                <li><strong>Héroe 1:</strong> ${hero1.name}</li>
                <li><strong>Héroe 2:</strong> ${hero2.name}</li>
            </ul>
        `;
	};

	const renderError = (error) => {
		console.error(`%c[Error]: ${error}`, "color: #ef4444;");
		element.innerHTML = /* html */ `<h3 style="color: #ef4444;">🚨 Error: ${error}</h3>`;
	};

	const id1 = "5d86371f25a058e5b1c8a65e";
	const id2 = "5d86371f9f80b591f499df32";

	let hero1;

	console.log(
		"%c[Sistema]: Iniciando cadena de promesas...",
		"color: #f39c12;",
	);

	/**
	 * FLUJO SECUENCIAL:
	 * 1. Buscamos al primer héroe.
	 * 2. PASO CLAVE: Retornamos la llamada de findHero(id2).
	 * 3. El siguiente .then() recibe el resultado de esa segunda llamada.
	 */
	findHero(id1)
		.then((hero) => {
			hero1 = hero;
			console.log("%c[Paso 1]: Héroe 1 obtenido.", "color: #2ecc71;");

			// Retornamos una nueva promesa. El próximo .then esperará a que se resuelva.
			return findHero(id2);
		})
		.then((hero2) => {
			console.log(
				"%c[Paso 2]: Héroe 2 obtenido. Renderizando...",
				"color: #2ecc71;",
			);
			renderTwoHeros(hero1, hero2);
		})
		.catch(renderError) // Un solo .catch atrapa errores de CUALQUIERA de las promesas de la cadena.
		.finally(() => {
			console.info(
				"%c[Finalizado]: Flujo de cadena completado.",
				"color: #7f8c8d;",
			);
		});
};

/**
 * Busca un héroe por su ID.
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const hero = heroes.find((hero) => hero.id === id);
			hero ? resolve(hero) : reject(`Héroe con el id ${id} no encontrado`);
		}, 1000);
	});
};
