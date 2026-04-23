import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Uso de Async y Await
 * Este componente muestra la forma más moderna y legible de manejar promesas,
 * permitiendo que el código espere resultados sin usar .then() o .catch().
 * * @param {HTMLDivElement} element - Contenedor principal de la interfaz.
 */
export const asyncAwaitComponent = async (element) => {
	const d1 = "5d86371f2343e37870b91ef1"; // Hulk
	const d2 = "5d86371f25a058e5b1c8a65e"; // Iron Man

	console.log("%c[Async]: Iniciando componente...", "color: #3498db;");
	console.time("⏱️ Duración Await");

	/**
	 * EXPLICACIÓN DEL AWAIT:
	 * La palabra 'await' le dice a JavaScript: "Detente aquí. No pases a la siguiente
	 * línea hasta que la promesa de findHero se resuelva".
	 * El valor resuelto se asigna directamente a la variable.
	 */

	// El hilo de ejecución espera 1 segundo aquí...
	const hero1 = await findHero(d1);
	console.log(`%c[Paso 1]: ${hero1.name} obtenido.`, "color: #2ecc71;");

	// ... y luego espera otro segundo aquí.
	const hero2 = await findHero(d2);
	console.log(`%c[Paso 2]: ${hero2.name} obtenido.`, "color: #2ecc71;");

	// Esta línea no se ejecuta hasta que AMBOS awaits hayan terminado.
	element.innerHTML = /* html */ `
        <div style="background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #a855f7;">
            <h3 style="margin: 0; color: #a855f7;">Dúo Dinámico:</h3>
            <p style="font-size: 20px; color: #f1f5f9; margin-top: 10px;">
                ${hero1.name} <span style="color: #94a3b8;">/</span> ${hero2.name}
            </p>
        </div>
    `;

	console.timeEnd("⏱️ Duración Await");
};

/**
 * Busca un héroe por ID.
 * Al ser 'async', esta función siempre devuelve una Promesa.
 * * @param {String} id - UUID del héroe.
 * @returns {Promise<Object>} El objeto del héroe encontrado.
 * @throws {Error} Si el héroe no existe.
 */
const findHero = async (id) => {
	const hero = heroes.find((h) => h.id === id);

	// Simulamos un retraso de red (esto es necesario para apreciar el await)
	await new Promise((resolve) => setTimeout(resolve, 1000));

	if (!hero) {
		throw new Error(`Hero with id ${id} not found`);
	}

	return hero;
};
