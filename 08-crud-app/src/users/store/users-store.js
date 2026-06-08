const state = {
	currentPage: 0,
	users: [],
};

const loadNextPage = async () => {
	throw new Error("Not implemented yet");
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
