import usersStore from "./store/users-store";

/**
 * @param {HTMLDivElement} element
 */
export const UserApp = async (element) => {
	element.innerText = `Loading...`;

	// Solicitamos al store que cargue la primera página
	await usersStore.loadNextPage();

	// Nota: Aquí luego agregaremos el renderizado de la tabla
};
