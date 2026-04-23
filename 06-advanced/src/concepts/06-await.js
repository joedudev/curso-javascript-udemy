import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Manejo de Errores con Try/Catch en Async/Await.
 * Este patrón permite capturar excepciones de forma limpia, evitando que la aplicación
 * se detenga bruscamente y ofreciendo feedback al usuario.
 * @param {HTMLDivElement} element - Contenedor principal de la interfaz.
 */
export const asyncAwaitComponent = async (element) => {
	const d1 = "5d86371f2343e37870b91ef1";
	const d2 = "5d86371f25a058e5b1c8a65e";

	console.log(
		"%c[Async]: Iniciando flujo con protección de errores...",
		"color: #3498db; font-weight: bold;",
	);
	console.time("⏱️ Duración Total");

	/**
	 * BLOQUE TRY:
	 * Aquí va todo el código "optimista". Intentamos ejecutar las tareas asíncronas
	 * asumiendo que todo saldrá bien.
	 */
	try {
		const hero1 = await findHero(d1);
		console.log(`%c[Paso 1]: ${hero1.name} cargado.`, "color: #2ecc71;");

		const hero2 = await findHero(d2);
		console.log(`%c[Paso 2]: ${hero2.name} cargado.`, "color: #2ecc71;");

		element.innerHTML = /* html */ `
            <div style="background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #a855f7;">
                <h3 style="margin: 0; color: #a855f7;">Dúo Dinámico:</h3>
                <p style="font-size: 20px; color: #f1f5f9; margin-top: 10px;">
                    ${hero1.name} <span style="color: #94a3b8;">/</span> ${hero2.name}
                </p>
            </div>
        `;
	} catch (error) {
		/**
		 * BLOQUE CATCH:
		 * Si CUALQUIER 'await' dentro del bloque 'try' falla o lanza un error (throw),
		 * el control salta inmediatamente aquí.
		 */
		console.error(
			`%c[Error Capturado]: ${error.message}`,
			"color: #ef4444; font-weight: bold;",
		);

		element.innerHTML = /* html */ `
            <div style="background: #450a0a; padding: 15px; border-radius: 10px; border: 1px solid #ef4444;">
                <b style="color: #fecaca;">🚨 Error en la petición:</b>
                <p style="color: #fca5a5; margin: 5px 0 0 0;">${error.message}</p>
            </div>
        `;
	} finally {
		/**
		 * BLOQUE FINALLY (Opcional pero recomendado):
		 * Se ejecuta siempre, haya habido error o no. Ideal para limpiar estados de carga.
		 */
		console.timeEnd("⏱️ Duración Total");
		console.log(
			"%c[Sistema]: Limpieza de proceso asíncrono.",
			"color: #7f8c8d;",
		);
	}
};

/**
 * Busca un héroe por ID con simulación de retraso.
 * @param {String} id - Identificador del héroe.
 * @returns {Promise<Object>} El héroe encontrado.
 * @throws {Error} Si el héroe no existe.
 */
const findHero = async (id) => {
	const hero = heroes.find((h) => h.id === id);

	// Simulamos latencia de red de 1 segundo
	await new Promise((resolve) => setTimeout(resolve, 1000));

	if (!hero) {
		// Al lanzar un Error aquí, el bloque 'catch' del padre se activa automáticamente
		throw new Error(`Hero with id ${id} not found`);
	}

	return hero;
};
