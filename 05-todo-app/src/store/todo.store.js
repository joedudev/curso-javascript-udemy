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

export default {
	InitStore,
};
