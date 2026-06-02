/**
 * COMPONENTE: Generador de IDs Únicos con Funciones Generadoras
 * Demuestra un caso de uso real en Frontend: mantener un estado persistente e infinito
 * de IDs correlativos que solo avanzan cuando el usuario interactúa con la UI.
 * @param {HTMLDivElement} element - Contenedor principal de la interfaz donde se montará el botón.
 */
export const generatorFunctionsComponent = (element) => {
	// 1. Inicializamos el iterador del generador de IDs.
	const genID = idGenerator();

	console.log(
		"%c[Sistema]: Generador de IDs listo y escuchando clicks.",
		"color: #3498db; font-weight: bold;",
	);

	// 2. Creamos un contenedor dinámico usando el marcador de tu extensión
	const container = document.createElement("div");
	container.innerHTML = /* html */ `
    <div style="background: #1e293b; padding: 25px; border-radius: 12px; border: 1px solid #a855f7; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); text-align: center;">
      <h2 style="margin: 0 0 15px 0; color: #a855f7; font-size: 22px;">Generador de IDs Infinito 🆔</h2>
      <button id="btn-generator" style="background: #a855f7; color: white; border: none; padding: 12px 24px; font-size: 16px; font-weight: bold; border-radius: 8px; cursor: pointer; transition: background 0.2s;">
        Generar ID
      </button>
    </div>
  `;

	element.appendChild(container);

	// 3. Capturamos la referencia del botón recién inyectado
	const button = container.querySelector("#btn-generator");

	/**
	 * Orquesta la extracción del siguiente ID y actualiza el texto del botón.
	 */
	const renderButton = () => {
		// Extraemos únicamente el 'value' usando desestructuración.
		// Omitimos 'done' porque al ser un ciclo infinito, siempre será false.
		const { value } = genID.next();

		console.log(
			`%c[UI]: Nuevo ID emitido -> ${value}`,
			"color: #2ecc71; font-weight: bold;",
		);

		// Actualizamos el texto aplicando la extensión HTML en cadenas si fuera necesario,
		// o simplemente inyectando la variable de forma limpia.
		button.innerText = `Generar ID (Último: ${value})`;
	};

	// 4. Asignamos el Listener al evento click del botón
	button.addEventListener("click", renderButton);
};

/**
 * Función Generadora de IDs correlativos.
 * Produce una secuencia infinita de identificadores formateados sin peligro de bloquear
 * el hilo principal de ejecución gracias a la pausa controlada del 'yield'.
 * @returns {Generator<String, void, unknown>} El objeto iterador que emite los IDs.
 */
function* idGenerator() {
	let currentId = 0;

	/**
	 * 🧠 EXPLICACIÓN DEL WHILE(TRUE):
	 * En una función normal, esto causaría un "Bucle Infinito" que colapsaría el navegador.
	 * Aquí, cada vez que llega a la palabra 'yield', la función entra en animación suspendida,
	 * guardando el valor actual de 'currentId' en memoria y esperando al siguiente '.next()'.
	 */
	while (true) {
		yield `2026 - ${currentId++}`;
	}
}
