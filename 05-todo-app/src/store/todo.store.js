import { Todo } from "../todos/models/todo.model";

/**
 * Enumeración de filtros permitidos.
 * Usamos un objeto congelado para que nadie lo pueda modificar accidentalmente.
 */
const Filters = {
	All: "all",
	Completed: "completed",
	Pending: "pending",
};

/**
 * El ESTADO GLOBAL de nuestra aplicación.
 * Es privado a este módulo; nadie desde fuera puede tocar 'state' directamente.
 */
const state = {
	todos: [
		new Todo("Learn JavaScript"),
		new Todo("Learn Vue.js"),
		new Todo("Build something awesome"),
	],
	filter: Filters.All,
};

/**
 * Inicializa el Store. Útil para debuggear o cargar datos iniciales.
 */
const InitStore = () => {
	console.log("%cStore Initialized 🥑", "color: #2ecc71; font-weight: bold;");
	console.log(state);
};

/**
 * Carga el estado desde una fuente externa (como LocalStorage).
 * @throws {Error} Si el método no ha sido implementado aún.
 */
const loadStore = () => {
	throw new Error("Method not implemented");
};

/**
 * Retorna una lista de TODOS basada en el filtro seleccionado.
 * @param {String} filter - Filtro a aplicar (all, completed, pending).
 * @returns {Array<Todo>} Arreglo de objetos tipo Todo.
 */
const getTodos = (filter = Filters.All) => {
	switch (filter) {
		case Filters.All:
			// Retornamos un nuevo arreglo usando el operador spread [...]
			// para evitar pasar la referencia directa y proteger el estado original.
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
 * Agrega un nuevo Todo al estado.
 * @param {String} descripcion - El texto de la tarea.
 */
const addTodo = (descripcion) => {
	if (!descripcion) throw new Error("Description is required");

	// Creamos la instancia del modelo y la empujamos al arreglo
	state.todos.push(new Todo(descripcion));
};

/**
 * ToggleTodo con Diccionario (Eficiencia Máxima)
 * @param {String} todoId
 */
/**
 * ToggleTodo compatible con ARREGLOS (La forma correcta para tu código actual)
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
	// 1. Buscamos el TODO dentro del arreglo usando .map
	// .map recorre la lista y nos permite crear una versión nueva con el cambio
	state.todos = state.todos.map((todo) => {
		if (todo.id === todoId) {
			// Si el ID coincide, invertimos el valor de 'done'
			todo.done = !todo.done;
		}

		return todo;
	});

	// OPCIONAL: Si quieres mantener tu "Prueba de fallo", tendrías que usar .find primero
	/*
  const existe = state.todos.find( t => t.id === todoId );
  if ( !existe ) throw new Error(`ID ${todoId} no encontrado`);
  */

	console.log(`%c[Store]: Toggle exitoso para ${todoId}`, "color: #2ecc71;");
};
/**
 * Elimina un Todo específico del estado.
 * @param {String} todoId - ID de la tarea a borrar.
 */
const deleteTodo = (todoId) => {
	// Filtramos el arreglo: "Quédate con todos los que NO tengan este ID"
	state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

/**
 * Elimina todas las tareas marcadas como completadas.
 */
const deleteCompleted = () => {
	state.todos = state.todos.filter((todo) => !todo.done);
};

/**
 * Cambia el filtro actual de visualización.
 * @param {String} newFilter - Debe ser uno de los valores de Filters.
 */
const setFilter = (newFilter = Filters.All) => {
	// Validación defensiva: Verificamos que el filtro exista en nuestro objeto Filters
	if (!Object.values(Filters).includes(newFilter)) {
		throw new Error(
			`Filter "${newFilter}" is not valid. Allowed: ${Object.values(Filters).join(", ")}`,
		);
	}
	state.filter = newFilter;
};

/**
 * Obtiene el filtro que está aplicado actualmente.
 * @returns {String}
 */
const getCurrentFilter = () => {
	return state.filter;
};

// Exportamos un objeto que contiene los métodos para manipular el estado.
// Esto es el "API" de nuestro Store.
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
