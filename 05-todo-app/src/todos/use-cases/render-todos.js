/**
 * CASO DE USO: RENDERIZAR LISTA DE TODOS
 * Este módulo se encarga de vaciar el contenedor actual y reconstruir
 * la lista de tareas basada en la información más reciente del Store.
 */

import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

/** * Referencia en memoria del contenedor de la lista (UL).
 * Se mantiene fuera de la función para evitar múltiples consultas al DOM.
 */
let element;

/**
 * Renderiza la colección de TODOs en un elemento específico del DOM.
 * @param {String} elementID - El selector CSS del contenedor (ej: '.todo-list').
 * @param {Todo[]} todos - Un arreglo de instancias de la clase Todo a renderizar.
 */
export const renderTodos = (elementID, todos = []) => {
	// 1. GESTIÓN DE REFERENCIA: Si no tenemos el elemento, lo buscamos y lo guardamos
	if (!element) {
		element = document.querySelector(elementID);
	}

	// Validación de seguridad para evitar fallos si el selector es incorrecto
	if (!element) {
		const errorMsg = `Element with ID ${elementID} not found`;
		console.error(`%c[Error]: ${errorMsg}`, "color: white; background: red;");
		throw new Error(errorMsg);
	}

	console.time("⏱️ Tiempo de Renderizado");
	console.log(
		`%c[Render]: Actualizando lista con ${todos.length} elementos...`,
		"color: #3498db;",
	);

	// 2. LIMPIEZA: Eliminamos el contenido previo para evitar duplicados en la UI
	// Esta es la "solución" que evita que la lista crezca infinitamente al agregar tareas.
	element.innerHTML = "";

	// 3. CONSTRUCCIÓN: Generamos el HTML para cada tarea y lo insertamos en el contenedor
	todos.forEach((todo) => {
		// Delegamos la creación del HTML a otro caso de uso especializado
		element.append(createTodoHTML(todo));
	});

	console.timeEnd("⏱️ Tiempo de Renderizado");
};
