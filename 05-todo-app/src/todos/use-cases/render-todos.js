import { Todo } from "../models/todo.model";
import { creatTodoHTML } from "./create-todo-html";

let element;

/**
 * @param {String} elementID
 * @param {Todo[]} todos // Nota: el tipo es un arreglo de Todo
 */
export const renderTodos = (elementID, todos = []) => {
	// 1. Buscamos el elemento si no existe
	if (!element) {
		element = document.querySelector(elementID);
	}
	if (!element) throw new Error(`Element with ID ${elementID} not found`);

	// 2. LA SOLUCIÓN: Limpiar el contenido actual del HTML
	// Esto borra todos los <li> que existían antes de pintar los nuevos.
	element.innerHTML = "";

	// 3. Pintar los TODOs actuales (la lista fresca del Store)
	todos.forEach((todo) => {
		element.append(creatTodoHTML(todo));
	});
};
