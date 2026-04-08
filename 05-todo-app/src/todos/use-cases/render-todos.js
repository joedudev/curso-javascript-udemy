import { Todo } from "../models/todo.model";
import { creatTodoHTML } from "./create-todo-html";

let element;

/**
 *
 * @param {String} elementID
 * @param {Todo} todos
 */
export const renderTodos = (elementID, todos = []) => {
	if (!element) {
		element = document.querySelector(elementID);
	}
	if (!element) throw new Error(`Element with ID ${elementID} not found`);
	todos.forEach((todo) => {
		element.append(creatTodoHTML(todo));
	});
};
