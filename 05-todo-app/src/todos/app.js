import html from "./app.html?raw";

/**
 * @parem {String} elementId
 */

export const App = (elementId) => {
	(() => {
		const app = document.createElement("div");
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
	})();
};
