import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 * Orquesta la inicialización y renderizado de la aplicación de Pokémon.
 * @param {HTMLElement} element - El contenedor del DOM donde se inyectarán las tarjetas.
 */
export const pokemonApp = (element) => {
	// 1. Modificaciones estéticas iniciales de la interfaz
	document.title = "Pokémon App 🎮";

	const mainPageTitle = document.querySelector(".app-title");
	if (mainPageTitle) {
		mainPageTitle.textContent = "PokéAPI App";
	}

	console.log(
		"%c[App]: Pokémon App inicializada con éxito.",
		"color: #3498db; font-weight: bold;",
	);

	// 2. Estado Inicial de Carga en la UI usando tu extensión HTML
	element.innerHTML = /* html */ `
    <div style="color: #94a3b8; font-style: italic; text-align: center;">
      Buscando datos en el servidor... 🔍
    </div>
  `;

	// 3. Disparamos la acción de consulta (Pedimos el ID 1 de forma inicial)
	getPokemonById(1);
};
