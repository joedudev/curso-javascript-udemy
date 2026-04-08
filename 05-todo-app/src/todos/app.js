import html from "./app.html?raw";
import todoStore from "../store/todo.store.js";
import { renderTodos } from "./use-cases/render-todos.js";

const ElementIDs = {
	todoList: ".todo-list",
	NewTodoInput: "#new-todo-input",
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

	//  Refrencias HTML

	const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

	// Listeners
	newDescriptionInput.addEventListener("keyup", (event) => {
		// Usar .key es el estándar actual
		if (event.key !== "Enter") return;

		if (newDescriptionInput.value.trim().length === 0) return;

		todoStore.addTodo(newDescriptionInput.value);
		displayTodos();
		newDescriptionInput.value = "";
	});
};
