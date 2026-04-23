import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Uso de Promise.all
 * Este componente demuestra cómo ejecutar múltiples promesas de forma simultánea (paralelo),
 * reduciendo drásticamente el tiempo de espera total de la aplicación.
 * * @param {HTMLDivElement} element - Contenedor principal de la interfaz.
 */
export const promiseComponent = (element) => {
	/**
	 * Renderiza la información de múltiples héroes en el DOM.
	 * @param {Object} hero1 - Datos del primer héroe.
	 * @param {Object} hero2 - Datos del segundo héroe.
	 */
	const renderTwoHeros = (hero1, hero2) => {
		console.log(
			`%c[UI]: Renderizando resultados simultáneos.`,
			"color: #a855f7; font-weight: bold;",
		);

		element.innerHTML = /* html */ `
            <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-left: 5px solid #a855f7;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 10px;">
                        <span style="color: #a855f7;">⚡</span> <strong>Héroe 1:</strong> ${hero1.name}
                    </li>
                    <li>
                        <span style="color: #a855f7;">⚡</span> <strong>Héroe 2:</strong> ${hero2.name}
                    </li>
                </ul>
            </div>
        `;
	};

	/**
	 * Gestiona y muestra visualmente cualquier error ocurrido en el conjunto de promesas.
	 * @param {String} error - Mensaje descriptivo del fallo.
	 */
	const renderError = (error) => {
		console.error(
			`%c[Error Crítico]: Una o más promesas fallaron.`,
			"color: #ef4444; font-weight: bold;",
		);
		element.innerHTML = /* html */ `
            <div style="border: 2px dashed #ef4444; padding: 15px; border-radius: 8px;">
                <h3 style="color: #ef4444; margin: 0;">🚨 Error: ${error}</h3>
                <p style="color: #94a3b8; margin-top: 5px;">Asegúrate de que los IDs existan en la base de datos.</p>
            </div>
        `;
	};

	const id1 = "5d86371f25a058e5b1c8a65e";
	const id2 = "5d86371f9f80b591f499df32";

	console.time("⏱️ Tiempo Total");
	console.log(
		"%c[Sistema]: Iniciando peticiones paralelas...",
		"color: #3498db;",
	);

	/**
	 * PROMISE.ALL:
	 * Recibe un arreglo de promesas.
	 * - Si todas se resuelven: dispara el .then() con un arreglo de resultados.
	 * - Si UNA SOLA falla: dispara el .catch() con el error de la que falló.
	 */
	Promise.all([findHero(id1), findHero(id2)])
		.then(([hero1, hero2]) => {
			// Usamos desestructuración [h1, h2] para capturar los valores del arreglo resultante
			console.log(
				"%c[Éxito]: Todos los héroes obtenidos en paralelo.",
				"color: #2ecc71;",
			);
			renderTwoHeros(hero1, hero2);
		})
		.catch(renderError)
		.finally(() => {
			console.timeEnd("⏱️ Tiempo Total");
		});
};

/**
 * Busca un héroe por su identificador único (Simulación de API).
 * @param {String} id - UUID del héroe.
 * @returns {Promise<Object>} Promesa que resuelve al objeto del héroe encontrado.
 */
const findHero = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const hero = heroes.find((hero) => hero.id === id);

			if (hero) {
				console.log(
					`%c[Servidor]: ID ${id.substring(0, 5)} encontrado.`,
					"color: #7f8c8d;",
				);
				resolve(hero);
			} else {
				reject(`Héroe con el id ${id} no encontrado`);
			}
		}, 1000); // Todas tardan 1 segundo
	});
};
