import { Todo } from "../models/todo.model";
/**
 *
 * @param {Todo} todo
 */
export const creatTodoHTML = (todo) => {
	if (!todo) throw new Error("Todo is required");
	const html = `<h1>${todo.descripcion}</h1>`;
	const liElement = document.createElement("li");
	liElement.innerHTML = html;
	return liElement;
};
