import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Demostración de Funciones Generadoras Asíncronas
 * Orquesta un ciclo controlado (do-while) para consumir un flujo intermitente de datos
 * que se procesan asíncronamente en el fondo.
 * @param {HTMLDivElement} element - Contenedor principal de la interfaz.
 */
export const generatorAsyncComponent = async (element) => {
	// 1. Instanciamos el generador asíncrono.
	const heroGenerator = getHeroGenerator();
	let isFinish = false;

	console.log(
		"%c[Sistema]: Iniciando consumo del Generador Asíncrono...",
		"color: #3498db; font-weight: bold;",
	);
	console.time("⏱️ Tiempo Total de Emisión");

	/**
	 * 🧠 EXPLICACIÓN DEL CICLO DO-WHILE:
	 * Usamos 'do-while' porque necesitamos asegurar que el bloque se ejecute al menos una vez.
	 * Como cada '.next()' es una promesa, usamos 'await' para detener el ciclo hasta que
	 * el generador despierte, procese su código asíncrono y nos lance el siguiente valor.
	 */
	do {
		// El hilo se detiene aquí cada vez durante 500ms esperando al generador
		const { value, done } = await heroGenerator.next();

		isFinish = done;

		// Si 'done' es true, significa que llegamos al 'return' del generador y salimos
		if (isFinish) {
			console.log(
				`%c[Generador]: Fin de la línea -> ${value}`,
				"color: #ef4444; font-style: italic;",
			);
			break;
		}

		console.log(`%c[Stream]: Recibido -> ${value}`, "color: #a855f7;");

		// RENDERIZADO EN LA UI EN TIEMPO REAL (Usa la extensión HTML)
		element.innerHTML = /* html */ `
      <div style="background: #1e293b; padding: 25px; border-radius: 12px; border: 2px solid #a855f7; text-align: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
        <h2 style="margin: 0 0 10px 0; color: #94a3b8; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Efecto Stream (Cargando...)</h2>
        <p style="font-size: 32px; font-weight: 800; color: #f1f5f9; margin: 0; animate: pulse 1s infinite;">
          ⚡ ${value}
        </p>
      </div>
    `;
	} while (!isFinish);

	console.timeEnd("⏱️ Tiempo Total de Emisión");
};

/**
 * Función Generadora Asíncrona de Héroes.
 * Recorre la base de datos local emitiendo los nombres uno a uno con un retraso artificial.
 * @returns {AsyncGenerator<String, String, unknown>} El iterador asíncrono especial.
 */
async function* getHeroGenerator() {
	for (const hero of heroes) {
		// Pausa interna asíncrona: Esperamos a que la promesa del temporizador termine
		await sleep();

		// Expulsamos el valor actual y congelamos el ciclo 'for' en esta posición exacta
		yield hero.name;
	}

	// Mensaje de cierre cuando el bucle 'for' se agota por completo
	return "No hay más héroes";
}

/**
 * Crea una pausa artificial (latencia) basada en promesas.
 * @returns {Promise<void>} Promesa que se resuelve tras el tiempo especificado.
 */
const sleep = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 500); // 0.5 segundos de espera
	});
};
