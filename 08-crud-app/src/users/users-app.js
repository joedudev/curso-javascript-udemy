import usersStore from "./store/users-store";

export const UserApp = async (element) => {
	element.innerText = `Loading...`;
	await usersStore.loadNextPage();
};
