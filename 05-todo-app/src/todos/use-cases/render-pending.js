/**
 * CASO DE USO: RENDERIZAR TAREAS PENDIENTES
 * Este módulo tiene la responsabilidad única de actualizar el contador
 * visual de tareas que tienen el estado de 'pendientes' en el Store.
 */

import todoStore, { Filters } from "../../store/todo.store";

/** * Referencia en memoria del elemento HTML.
 * Se declara fuera para "cachear" el selector y no buscarlo en cada renderizado.
 */
let element;

/**
 * Busca el elemento en el DOM y actualiza su contenido con el total de tareas pendientes.
 * @param {String} elementId - El selector CSS del elemento (ej: '#pending-count').
 * @throws {Error} Si el elemento no existe en el DOM.
 */
export const renderPending = (elementId) => {
	// 1. Optimización: Si la referencia 'element' está vacía, la buscamos por primera vez
	if (!element) {
		element = document.querySelector(elementId);
	}

	// 2. Validación Defensiva: Avisamos si el ID proporcionado no es válido o no existe
	if (!element) {
		const errorMsg = `No se encontró el elemento con ID ${elementId}`;
		console.error(
			`%c[Error Crítico]: ${errorMsg}`,
			"color: white; background: darkred;",
		);
		throw new Error(errorMsg);
	}

	/**
	 * 3. Lógica de Negocio:
	 * Pedimos al Store solo los TODOs que coincidan con el filtro 'Pending'
	 * y extraemos el largo del arreglo (.length).
	 */
	const pendingCount = todoStore.getTodos(Filters.Pending).length;

	// Anuncio informativo en consola sobre la actualización
	console.log(
		`%c[Contador]: Sincronizando UI con ${pendingCount} tarea(s) pendiente(s).`,
		"color: #e67e22;",
	);

	// 4. Actualización de la UI
	element.innerHTML = pendingCount;
};
