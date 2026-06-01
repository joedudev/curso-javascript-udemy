/**
 * COMPONENTE: Demostración de Funciones Generadoras
 * Ilustra cómo controlar el flujo de una función especial capaz de pausar
 * su ejecución y entregar valores de forma controlada a través del método .next().
 * @param {HTMLDivElement} element - Contenedor principal de la interfaz.
 */
export const generatorFunctionsComponent = (element) => {
	// 1. Instanciamos el generador.
	// ¡OJO!: Invocar la función NO ejecuta el código interno, solo crea el iterador listo para usar.
	const myGenerator = myFirstGeneratorFuncion();

	console.log(
		"%c[Sistema]: Generador inicializado. Listo para iterar.",
		"color: #3498db; font-weight: bold;",
	);

	// 2. Primer giro de perilla: Corre el código hasta el primer 'yield'
	const step1 = myGenerator.next();
	console.log("%c[Paso 1]:", "color: #a855f7;", step1); // { value: "Primer Valor", done: false }

	// 3. Segundo giro de perilla: Reanuda desde donde se quedó y va al segundo 'yield'
	const step2 = myGenerator.next();
	console.log("%c[Paso 2]:", "color: #a855f7;", step2); // { value: "Segundo Valor", done: false }

	// 4. Tercer giro de perilla: Va al tercer 'yield'
	const step3 = myGenerator.next();
	console.log("%c[Paso 3]:", "color: #a855f7;", step3); // { value: "Tercer Valor", done: false }

	// 5. Cuarto giro de perilla: Se topa con el 'return'. Finaliza el generador.
	const step4 = myGenerator.next();
	console.warn("[Paso 4 - Finalizado]:", step4); // { value: "No hay valores", done: true }

	// 6. Quinto giro de perilla: El generador ya murió. Todo lo subsecuente dará undefined.
	const step5 = myGenerator.next();
	console.log("%c[Paso 5 - Agotado]:", "color: #7f8c8d;", step5); // { value: undefined, done: true }

	// RENDERIZADO EN LA INTERFAZ CON LA EXTENSIÓN HTML
	element.innerHTML = /* html */ `
    <div style="background: #1e293b; padding: 25px; border-radius: 12px; border: 1px solid #a855f7; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);">
      <h2 style="margin: 0 0 15px 0; color: #a855f7; font-size: 24px;">Funciones Generadoras 🍬</h2>
      
      <div style="display: flex; flex-direction: column; gap: 10px; color: #f1f5f9; font-size: 16px;">
        <p style="margin: 0; padding: 8px; background: rgba(255,255,255,0.03); border-radius: 6px;">
          <b style="color: #a855f7;">Giro 1:</b> ${step1.value} <span style="color: #94a3b8; font-size: 13px;">(done: ${step1.done})</span>
        </p>
        <p style="margin: 0; padding: 8px; background: rgba(255,255,255,0.03); border-radius: 6px;">
          <b style="color: #a855f7;">Giro 2:</b> ${step2.value} <span style="color: #94a3b8; font-size: 13px;">(done: ${step2.done})</span>
        </p>
        <p style="margin: 0; padding: 8px; background: rgba(255,255,255,0.03); border-radius: 6px;">
          <b style="color: #a855f7;">Giro 3:</b> ${step3.value} <span style="color: #94a3b8; font-size: 13px;">(done: ${step3.done})</span>
        </p>
        <p style="margin: 0; padding: 8px; background: rgba(69, 10, 10, 0.4); border: 1px dashed #ef4444; border-radius: 6px;">
          <b style="color: #ef4444;">Giro 4:</b> ${step4.value} <span style="color: #fca5a5; font-size: 13px;">(done: ${step4.done})</span>
        </p>
      </div>
    </div>
  `;
};

/**
 * Función Generadora Piloto.
 * Se identifica por el asterisco (*) después de la palabra 'function'.
 * Proporciona una serie ordenada de valores pausando el hilo de ejecución en cada palabra 'yield'.
 * @returns {Generator<String, String, unknown>} Objeto iterador especial del generador.
 */
function* myFirstGeneratorFuncion() {
	// La palabra reservada 'yield' pausa la función y expulsa el valor hacia el exterior
	yield "Primer Valor";
	yield "Segundo Valor";
	yield "Tercer Valor";

	// El 'return' termina la función generadora permanentemente y marca 'done: true'
	return "No hay valores";

	// ADVERTENCIA DE CÓDIGO MUERTO:
	// Esta línea jamás se ejecutará porque está después del 'return'.
	yield "Cuarto Valor";
}
