/**
 * Pokemon App
 * @param {HTMLElement} element - The HTML element where the app will be rendered.
 * @returns {void}
 * @description This function initializes the Pokemon App by rendering the necessary HTML structure and setting up any required event listeners or state management. The app will allow users to search for and display information about different Pokemon.
 */
export const pokemonApp = (element) => {
	document.title = "Pokemon App";
	const mainPageTitle = document.querySelector(".app-title");
	if (mainPageTitle) {
		mainPageTitle.textContent = "Pokemon App";
	}

	console.log("Pokemon App initialized");
	console.log("Element:", element);
};
