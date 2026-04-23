/**
 * COMPONENTE: Uso de Promise.race
 * Este componente demuestra cómo manejar una competencia de promesas,
 * donde solo el resultado de la promesa más rápida es tomado en cuenta.
 * * @param {HTMLDivElement} element - El contenedor donde se mostrará el ganador de la carrera.
 */
export const promiseRaceComponent = (element) => {
	element.innerHTML = /* html */ `
        <div style="color: #94a3b8; font-style: italic;">Esperando al ganador... 🏁</div>
    `;

	/**
	 * Renderiza el valor de la promesa ganadora.
	 * @param {String} value - El mensaje de la promesa más rápida.
	 */
	const renderValue = (value) => {
		console.log(
			`%c[Carrera]: ¡Tenemos un ganador! -> ${value}`,
			"color: #f39c12; font-weight: bold;",
		);

		element.innerHTML = /* html */ `
            <div style="background: #1e293b; padding: 20px; border-radius: 12px; border: 2px solid #a855f7;">
                <h2 style="margin: 0; color: #a855f7;">🥇 Ganador:</h2>
                <p style="font-size: 24px; margin-top: 10px;">${value}</p>
            </div>
        `;
	};

	console.time("⏱️ Tiempo de Carrera");
	console.warn("%c[Sistema]: Iniciando Promise.race...", "color: #3498db;");

	/**
	 * PROMISE.RACE:
	 * Recibe un arreglo de promesas y retorna una nueva promesa que se resuelve o rechaza
	 * tan pronto como UNA de las promesas del arreglo se resuelva o rechace.
	 */
	Promise.race([slowPromise, mediumPromise, fastPromise])
		.then(renderValue)
		.catch((error) => {
			console.error(
				`%c[Error]: La promesa más rápida falló: ${error}`,
				"color: #ef4444;",
			);
			element.innerHTML = /* html */ `<b style="color: red;">Error: ${error}</b>`;
		})
		.finally(() => {
			console.timeEnd("⏱️ Tiempo de Carrera");
		});
};

/**
 * Promesa que resuelve en 2 segundos.
 * @type {Promise<String>}
 */
const slowPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Slow Promise (2000ms)");
	}, 2000);
});

/**
 * Promesa que resuelve en 1.5 segundos.
 * @type {Promise<String>}
 */
const mediumPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Medium Promise (1500ms)");
	}, 1500);
});

/**
 * Promesa que resuelve en 1 segundo.
 * @type {Promise<String>}
 */
const fastPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Fast Promise (1000ms)");
	}, 1000);
});
