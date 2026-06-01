/**
 * COMPONENTE: Async/Await - Secuencial vs Paralelo (Promise.all)
 * Este componente demuestra de forma medible la diferencia de rendimiento entre
 * esperar promesas una por una o dispararlas concurrentemente.
 * @param {HTMLDivElement} element - El contenedor donde se inyectarán los resultados.
 */
export const asyncAwait2Component = async (element) => {
	// Iniciamos un temporizador en la consola para medir la eficiencia exacta del bloque
	console.time("⏱️ Tiempo Total Componente");
	console.log(
		"%c[Sistema]: Iniciando carga de promesas...",
		"color: #3498db; font-weight: bold;",
	);

	try {
		// ==========================================
		// OPCIÓN A: EJECUCIÓN SECUENCIAL (LENTA 🐌)
		// Descomenta estas líneas y comenta el Promise.all para ver cómo tarda 4.5 segundos.
		// ==========================================
		/*
    console.warn("%c[Modo]: Ejecutando de forma secuencial (Bloqueante línea por línea)...", "color: #e67e22;");
    const value1 = await slowPromise;
    console.log("%c[Paso 1]: slowPromise resuelta.", "color: #7f8c8d;");
    
    const value2 = await mediumPromise;
    console.log("%c[Paso 2]: mediumPromise resuelta.", "color: #7f8c8d;");
    
    const value3 = await fastPromise;
    console.log("%c[Paso 3]: fastPromise resuelta.", "color: #7f8c8d;");
    */

		// ==========================================
		// OPCIÓN B: EJECUCIÓN EN PARALELO (RÁPIDA ⚡)
		// Esta opción dispara las 3 promesas al mismo tiempo. Tarda solo 2.0 segundos.
		// ==========================================
		console.log(
			"%c[Modo]: Ejecutando con Promise.all (Concurrente en paralelo)...",
			"color: #9b59b6; font-weight: bold;",
		);

		const [value1, value2, value3] = await Promise.all([
			slowPromise,
			mediumPromise,
			fastPromise,
		]);

		console.log(
			"%c[Éxito]: Todas las promesas del Promise.all han resuelto.",
			"color: #2ecc71;",
		);

		// RENDERIZADO EN LA INTERFAZ
		element.innerHTML = /* html */ `
      <div style="background: #1e293b; padding: 25px; border-radius: 12px; border: 1px solid #a855f7; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
        <h2 style="margin: 0 0 15px 0; color: #a855f7; font-size: 24px;">Async/Await 2</h2>
        <div style="display: flex; flex-direction: column; gap: 8px; color: #f1f5f9; font-size: 16px;">
          <p style="margin: 0;"><span style="color: #ef4444;">🔴</span> ${value1}</p>
          <p style="margin: 0;"><span style="color: #f59e0b;">🟡</span> ${value2}</p>
          <p style="margin: 0;"><span style="color: #10b981;">🟢</span> ${value3}</p>
        </div>
      </div>
    `;
	} catch (error) {
		// Si UNA sola promesa de Promise.all falla (reject), todo el bloque cae aquí.
		console.error(
			`%c[Error Crítico]: ${error}`,
			"color: white; background: red; padding: 2px 5px;",
		);
		element.innerHTML = /* html */ `<b style="color: #ef4444;">Error al cargar datos asíncronos.</b>`;
	} finally {
		// Finalizamos el temporizador y mostramos el veredicto de velocidad en consola
		console.timeEnd("⏱️ Tiempo Total Componente");
	}
};

/**
 * Promesa que simula una carga lenta de servidor (ej. un reporte pesado).
 * @type {Promise<String>}
 */
const slowPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Slow Promise (2000ms)");
	}, 2000);
});

/**
 * Promesa que simula una carga de velocidad media (ej. lista de usuarios).
 * @type {Promise<String>}
 */
const mediumPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Medium Promise (1500ms)");
	}, 1500);
});

/**
 * Promesa que simula una carga rápida (ej. configuración de perfil).
 * @type {Promise<String>}
 */
const fastPromise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Fast Promise (1000ms)");
	}, 1000);
});
