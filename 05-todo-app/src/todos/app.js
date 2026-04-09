/**
 * ARCHIVO PRINCIPAL DE LA APLICACIÓN (UI)
 * Este archivo gestiona la lógica de la interfaz de usuario,
 * los listeners de eventos y la comunicación con el Store.
 */

import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store.js";
import { renderTodos, renderPending } from "./use-cases/index.js";

/**
 * Diccionario de selectores CSS para evitar el uso de strings
 * directamente en las funciones (Centralización de constantes).
 */
const ElementIDs = {
	todoList: ".todo-list",
	NewTodoInput: "#new-todo-input",
	ClearCompleted: ".clear-completed",
	todoFilters: ".filtro",
	PendingCountLabel: "#pending-count",
};

/**
 * Función principal para inicializar la aplicación de TODOs.
 * @param {String} elementId - El selector del elemento donde se renderizará la app.
 */
export const App = (elementId) => {
	/**
	 * Actualiza el contador de tareas pendientes en la UI.
	 */
	const updatePendingCount = () => {
		renderPending(ElementIDs.PendingCountLabel);
	};

	/**
	 * Orquesta el renderizado completo de la lista de tareas y el contador.
	 */
	const displayTodos = () => {
		const todos = todoStore.getTodos(todoStore.getCurrentFilter());
		renderTodos(ElementIDs.todoList, todos);
		updatePendingCount();
	};

	// --- BLOQUE DE INICIALIZACIÓN ---
	(() => {
		console.log(
			"%c🚀 TODO App: Iniciando...",
			"color: #3498db; font-weight: bold;",
		);
		const app = document.createElement("div");
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
		displayTodos();
	})();

	// --- REFERENCIAS HTML (DOM SELECTORS) ---
	const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput),
		todoListElement = document.querySelector(ElementIDs.todoList),
		clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted),
		filtersUL = document.querySelectorAll(ElementIDs.todoFilters);

	// --- LISTENERS (EVENTOS DE USUARIO) ---

	/**
	 * Evento para agregar un nuevo TODO al presionar Enter.
	 */
	newDescriptionInput.addEventListener("keyup", (event) => {
		if (event.key !== "Enter") return;
		if (newDescriptionInput.value.trim().length === 0) return;

		console.log(
			`%c[Acción]: Agregando tarea: ${newDescriptionInput.value}`,
			"color: #2ecc71;",
		);
		todoStore.addTodo(newDescriptionInput.value);
		displayTodos();
		newDescriptionInput.value = "";
	});

	/**
	 * Evento para alternar el estado (completado/pendiente) de un TODO.
	 * Se usa delegación de eventos a través del data-id.
	 */
	todoListElement.addEventListener("click", (event) => {
		const element = event.target.closest("[data-id]");
		if (!element) return;

		todoStore.toggleTodo(element.getAttribute("data-id"));
		displayTodos();
	});

	/**
	 * Evento para borrar un TODO específico al hacer clic en el botón 'destroy'.
	 */
	todoListElement.addEventListener("click", (event) => {
		if (!event.target.classList.contains("destroy")) return;

		const element = event.target.closest("[data-id]");
		const id = element.getAttribute("data-id");

		console.warn(`[Advertencia]: Eliminando tarea con ID: ${id}`);
		todoStore.deleteTodo(id);
		displayTodos();
	});

	/**
	 * Evento para limpiar todos los TODOs completados.
	 */
	clearCompletedButton.addEventListener("click", () => {
		console.info("[Info]: Limpiando tareas completadas...");
		todoStore.deleteCompleted();
		displayTodos();
	});

	/**
	 * Listeners para los botones de filtrado (Todos, Pendientes, Completados).
	 */
	filtersUL.forEach((element) => {
		element.addEventListener("click", (event) => {
			event.preventDefault();

			// Gestión visual de la clase CSS 'selected'
			filtersUL.forEach((el) => el.classList.remove("selected"));
			element.classList.add("selected");

			const text = event.target.text;

			// Mapeo del texto del botón con el filtro del Store
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
					throw new Error(`Filtro desconocido: ${text}`);
			}

			console.log(`%c[Filtro]: Cambiado a "${text}"`, "color: #f39c12;");
			displayTodos();
		});
	});
};
