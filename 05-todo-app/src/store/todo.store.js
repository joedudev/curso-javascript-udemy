import { Todo } from "../todos/models/todo.model";

const Filters = {
	All: "all",
	Completed: "completed",
	Pending: "pending",
};

const state = {
	todos: [
		new Todo("Learn JavaScript"),
		new Todo("Learn Vue.js"),
		new Todo("Build something awesome"),
	],
	filter: Filters.All,
};

const InitStore = () => {
	console.log(state);
	console.log("InitStore, 🥑");
};

const loadStore = () => {
	throw new Error("Method not implemented");
};

const addTodo = () => {
	throw new Error("Method not implemented");
};

const toggleTodo = (todoId) => {
	throw new Error("Method not implemented");
};

const deleteTodo = (todoId) => {
	throw new Error("Method not implemented");
};

const deleteCompleted = (todoId) => {
	throw new Error("Method not implemented");
};

const setSelectedFilter = (newFilter = Filters.All) => {
	throw new Error("Method not implemented");
};

const getCurrentFilter = () => {
	throw new Error("Method not implemented");
};

export default {
	InitStore,
	loadStore,
	addTodo,
	toggleTodo,
	deleteTodo,
	deleteCompleted,
	setSelectedFilter,
	getCurrentFilter,
};
