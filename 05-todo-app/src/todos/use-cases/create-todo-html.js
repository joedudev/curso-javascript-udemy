/**
 * CASO DE USO: CREAR ELEMENTO HTML DE UN TODO
 * Este archivo tiene la única responsabilidad de generar el nodo del DOM
 * que representa visualmente a una tarea.
 */

import { Todo } from "../models/todo.model";

/**
 * Crea y retorna el elemento HTML (LI) que representa un TODO.
 * @param {Todo} todo - Instancia de la clase Todo que contiene la información.
 * @returns {HTMLLIElement} El elemento de lista listo para ser insertado en el DOM.
 * @throws {Error} Si no se proporciona un objeto Todo válido.
 */
export const createTodoHTML = (todo) => {
	// 1. Validación de seguridad inicial
	if (!todo) {
		const errorMsg = "Todo object is required to create HTML element";
		console.error(`%c[Error]: ${errorMsg}`, "color: white; background: red;");
		throw new Error(errorMsg);
	}

	// 2. Desestructuración de las propiedades del Todo para código más limpio
	const { done, description, id } = todo;

	console.log(
		`%c[Render]: Generando HTML para la tarea: "${description}"`,
		"color: #bdc3c7;",
	);

	/**
	 * 3. Definición del template HTML.
	 * Usamos Template Strings para manejar el estado 'checked' de forma dinámica
	 * y el texto de la descripción.
	 */
	const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? "checked" : ""}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
    `;

	// 4. Creación del contenedor principal (elemento <li>)
	const liElement = document.createElement("li");
	liElement.innerHTML = html;

	/**
	 * 5. Atributos y Clases de Estado:
	 * El 'data-id' es fundamental para la delegación de eventos en el App.js.
	 * Permite saber qué Todo queremos borrar o cambiar sin buscarlo manualmente.
	 */
	liElement.setAttribute("data-id", id);

	// Si la tarea está completada, agregamos la clase CSS correspondiente
	if (done) {
		liElement.classList.add("completed");
	}

	return liElement;
};
