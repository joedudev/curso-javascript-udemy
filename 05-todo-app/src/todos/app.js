import html from "./app.html?raw";
import todoStore from "../store/todo.store.js";
import { renderTodos } from "./use-cases/render-todos.js";

const ElementIDs = {
	todoList: ".todo-list",
};

/**
 * @param {String} elementId
 */

export const App = (elementId) => {
	const displayTodos = () => {
		const todos = todoStore.getTodos(todoStore.getCurrentFilter());
		renderTodos(ElementIDs.todoList, todos);
	};

	(() => {
		const app = document.createElement("div");
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
		displayTodos();
	})();
};
