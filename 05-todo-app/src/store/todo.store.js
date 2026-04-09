/**
 * STORE CENTRAL DE LA APLICACIÓN
 * Este módulo gestiona el estado global, la persistencia en LocalStorage
 * y todas las mutaciones permitidas sobre los datos de los TODOs.
 */

import { Todo } from "../todos/models/todo.model";

/**
 * Enumeración de filtros permitidos para la visualización.
 * @enum {String}
 */
export const Filters = {
	All: "all",
	Completed: "completed",
	Pending: "pending",
};

/**
 * ESTADO PRIVADO: La verdad absoluta de la aplicación.
 * Solo es accesible y modificable a través de las funciones exportadas del Store.
 * @type {Object}
 */
const state = {
	todos: [
		new Todo("Learn JavaScript"),
		new Todo("Learn Vue.js"),
		new Todo("Build something awesome"),
		new Todo("Learn React"),
		new Todo("Learn Angular"),
	],
	filter: Filters.All,
};

/**
 * Inicializa el Store y sincroniza con el almacenamiento local si existe.
 */
const InitStore = () => {
	loadStore();
	console.log(
		"%c[Store]: Inicializado y Sincronizado 🥑",
		"color: #2ecc71; font-weight: bold;",
	);
};

/**
 * Carga el estado guardado en el LocalStorage del navegador.
 */
const loadStore = () => {
	if (!localStorage.getItem("todo-app-state")) return;

	// Desestructuramos los datos recuperados del JSON
	const { todos = [], filter = Filters.All } = JSON.parse(
		localStorage.getItem("todo-app-state"),
	);

	state.todos = todos;
	state.filter = filter;

	console.info("[Store]: Datos cargados desde LocalStorage exitosamente.");
};

/**
 * Persiste el estado actual en el LocalStorage.
 * Se debe llamar después de cada mutación del estado (add, delete, toggle).
 */
const saveStateToLocalStorage = () => {
	localStorage.setItem("todo-app-state", JSON.stringify(state));
	console.log(
		"%c[Persistence]: Estado guardado en disco.",
		"color: #7f8c8d; font-style: italic;",
	);
};

/**
 * Retorna una colección de tareas basada en el filtro activo.
 * @param {Filters} filter - El criterio de búsqueda.
 * @returns {Array<Todo>} Un nuevo arreglo con las tareas filtradas.
 */
const getTodos = (filter = Filters.All) => {
	switch (filter) {
		case Filters.All:
			// Regresamos una copia para evitar mutaciones accidentales desde la UI
			return [...state.todos];

		case Filters.Completed:
			return state.todos.filter((todo) => todo.done);

		case Filters.Pending:
			return state.todos.filter((todo) => !todo.done);

		default:
			throw new Error(`Option ${filter} is not valid`);
	}
};

/**
 * Crea una nueva tarea y la añade al mazo global.
 * @param {String} description - Texto de la tarea.
 */
const addTodo = (description) => {
	if (!description) throw new Error("Description is required");

	state.todos.push(new Todo(description));
	console.log(
		`%c[Store]: Tarea añadida -> "${description}"`,
		"color: #3498db;",
	);

	saveStateToLocalStorage();
};

/**
 * Alterna el estado de una tarea (Completada <-> Pendiente).
 * Implementado bajo el concepto de inmutabilidad (.map).
 * @param {String} todoId - Identificador único de la tarea.
 */
const toggleTodo = (todoId) => {
	// Verificamos si existe el ID antes de operar (Seguridad)
	if (!state.todos.some((t) => t.id === todoId)) {
		console.error(`[Error]: ID ${todoId} no encontrado para toggle.`);
		return;
	}

	state.todos = state.todos.map((todo) => {
		if (todo.id === todoId) {
			todo.done = !todo.done;
		}
		return todo;
	});

	console.log(
		`%c[Store]: Estado cambiado para el ID: ${todoId}`,
		"color: #2ecc71;",
	);
	saveStateToLocalStorage();
};

/**
 * Elimina una tarea específica del arreglo.
 * @param {String} todoId - ID de la tarea a remover.
 */
const deleteTodo = (todoId) => {
	state.todos = state.todos.filter((todo) => todo.id !== todoId);
	console.warn(`[Store]: Tarea eliminada: ${todoId}`);

	saveStateToLocalStorage();
};

/**
 * Purga todas las tareas marcadas como completadas.
 */
const deleteCompleted = () => {
	const totalOriginal = state.todos.length;
	state.todos = state.todos.filter((todo) => !todo.done);

	const eliminados = totalOriginal - state.todos.length;
	console.info(
		`[Store]: Limpieza masiva ejecutada. ${eliminados} tareas borradas.`,
	);

	saveStateToLocalStorage();
};

/**
 * Actualiza el filtro global de visualización.
 * @param {Filters} newFilter - El nuevo filtro a aplicar.
 */
const setFilter = (newFilter = Filters.All) => {
	// Validación de integridad: ¿El filtro existe en nuestra enumeración?
	if (!Object.values(Filters).includes(newFilter)) {
		throw new Error(`Filter "${newFilter}" is not valid.`);
	}

	state.filter = newFilter;
	console.log(
		`%c[Filtro]: Cambiado a modo "${newFilter}"`,
		"color: #f39c12; font-weight: bold;",
	);

	saveStateToLocalStorage();
};

/**
 * Retorna el filtro que está actualmente en uso.
 * @returns {String}
 */
const getCurrentFilter = () => {
	return state.filter;
};

// EXPORTACIÓN DEL API DEL STORE
export default {
	addTodo,
	deleteCompleted,
	deleteTodo,
	getCurrentFilter,
	getTodos,
	InitStore,
	loadStore,
	setFilter,
	toggleTodo,
};
