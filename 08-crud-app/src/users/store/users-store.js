import { loadUsersByPage } from "../use-cases/load-users-by-page";

// Estado centralizado
const state = {
	currentPage: 0,
	users: [],
};

/**
 * Incrementa la página y carga los datos desde el servicio.
 */
const loadNextPage = async () => {
	const users = await loadUsersByPage(state.currentPage + 1);

	// Actualizamos el estado
	state.currentPage += 1;
	state.users = users;
};

const loadPreviousPage = async () => {
	throw new Error("Not implemented yet");
};

// TODO: impleementar
const onUserChage = () => {
	throw new Error("Not implemented yet");
};

const reloadPage = async () => {};

export default {
	state,
	loadNextPage,
	loadPreviousPage,
	onUserChage,
	reloadPage,

	getUser: () => [...state.users],
	getCurrentPage: () => state.currentPage,
};
