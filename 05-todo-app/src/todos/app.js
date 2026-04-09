import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store.js";
import { renderTodos, renderPending } from "./use-cases/index.js";

const ElementIDs = {
	todoList: ".todo-list",
	NewTodoInput: "#new-todo-input",
	ClearCompleted: ".clear-completed",
	todoFilters: ".filtro",
	PendingCountLabel: "#pending-count",
};

/**
 * @param {String} elementId
 */

export const App = (elementId) => {
	const updatePendingCount = () => {
		renderPending(ElementIDs.PendingCountLabel);
	};

	const displayTodos = () => {
		const todos = todoStore.getTodos(todoStore.getCurrentFilter());
		renderTodos(ElementIDs.todoList, todos);
		updatePendingCount();
	};

	(() => {
		const app = document.createElement("div");
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
		displayTodos();
	})();

	//  Refrencias HTML

	const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput),
		todoListElement = document.querySelector(ElementIDs.todoList),
		clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted),
		filtersUL = document.querySelectorAll(ElementIDs.todoFilters);

	// Listeners
	newDescriptionInput.addEventListener("keyup", (event) => {
		// Usar .key es el estándar actual
		if (event.key !== "Enter") return;

		if (newDescriptionInput.value.trim().length === 0) return;

		todoStore.addTodo(newDescriptionInput.value);
		displayTodos();
		newDescriptionInput.value = "";
	});

	todoListElement.addEventListener("click", (event) => {
		const element = event.target.closest("[data-id]");
		todoStore.toggleTodo(element.getAttribute("data-id"));
		displayTodos();
	});

	// Funcion para borrar TODOs
	todoListElement.addEventListener("click", (event) => {
		if (!event.target.classList.contains("destroy")) return;

		const element = event.target.closest("[data-id]");
		todoStore.deleteTodo(element.getAttribute("data-id"));
		displayTodos();
	});

	clearCompletedButton.addEventListener("click", () => {
		todoStore.deleteCompleted();
		displayTodos();
	});

	// Listeners de Filtros
	filtersUL.forEach((element) => {
		element.addEventListener("click", (event) => {
			event.preventDefault();

			filtersUL.forEach((el) => el.classList.remove("selected"));
			element.classList.add("selected");

			const text = event.target.text;

			switch (text) {
				case "Todos":
					todoStore.setFilter(Filters.All);
					break;
				case "Pendientes":
					todoStore.setFilter(Filters.Pending);
					break;
				case "Completados":
					todoStore.setFilter(Filters.Completed);
					break;
				default:
					// Ahora 'text' ya no será undefined
					throw new Error(`Filtro desconocido: ${text}`);
			}

			displayTodos();
		});
	});
};
