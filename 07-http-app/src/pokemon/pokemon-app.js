import { getPokemonById } from "./actions/get-pokemon-by-id.action";

// Nota: String.raw se mantiene para asegurar compatibilidad con formateadores/extensiones de VSCode
const html = String.raw;

/**
 * Componente principal que orquesta la aplicación de Pokémon, controlando su navegación y estado asíncrono.
 * @param {HTMLElement} element - El contenedor raíz donde se inyectará la tarjeta de información.
 * @returns {Promise<void>}
 */
export const pokemonApp = async (element) => {
	// ==========================================
	// ESTADO LOCAL DE LA APLICACIÓN
	// ==========================================
	let pokemonId = 1; // Controla el índice del Pokémon activo en la UI

	document.title = "Pokémon App 🎮";

	// Modificación del layout general preexistente
	const mainPageTitle = document.querySelector(".app-title");
	if (mainPageTitle) {
		mainPageTitle.textContent = "PokéAPI App Real-Time";
	}

	console.log(
		"%c[DOM]: Inicializando elementos reactivos en memoria...",
		"color: #3498db; font-weight: bold;",
	);

	// ==========================================
	// 1. FASE DE CREACIÓN DE NODOS (NATIVO)
	// ==========================================
	const loadingParagraph = document.createElement("p");
	const pokemonImage = document.createElement("img");
	const nextButton = document.createElement("button");
	const prevButton = document.createElement("button");

	// ==========================================
	// 2. CONFIGURACIONES DE CLASES & TEXTOS (CSS)
	// ==========================================
	// Nota: Eliminamos .style de JavaScript. Usamos clases que tu style.css controla.
	loadingParagraph.className = "loading-text";
	pokemonImage.className = "pokemon-sprite";
	nextButton.className = "btn-nav btn-next";
	prevButton.className = "btn-nav btn-prev";

	loadingParagraph.textContent = "Cargando información del Pokémon... ⏳";
	nextButton.textContent = "Siguiente Pokémon →";
	prevButton.textContent = "← Pokémon Anterior";

	// El botón anterior inicia apagado porque arrancamos en el ID 1
	prevButton.disabled = true;

	// ==========================================
	// 3. MONTAJE EN EL DOM
	// ==========================================
	element.appendChild(loadingParagraph);
	element.appendChild(pokemonImage);
	element.appendChild(prevButton);
	element.appendChild(nextButton);

	// ==========================================
	// 4. MÉTODOS DE MUTACIÓN DE INTERFAZ
	// ==========================================
	/**
	 * Hidrata los elementos del DOM usando los datos de un Pokémon específico.
	 * Cambiamos el nombre del parámetro a 'activePokemon' para mayor claridad semántica.
	 * @param {{id: Number, name: String, image: String}} activePokemon - Datos del Pokémon a renderizar.
	 */
	const renderPokemon = (activePokemon) => {
		console.log(
			`%c[UI]: Renderizando a -> ${activePokemon.name.toUpperCase()}`,
			"color: #a855f7; font-weight: bold;",
		);

		pokemonImage.src = activePokemon.image;
		pokemonImage.alt = activePokemon.name;
		loadingParagraph.textContent = `Pokémon #${activePokemon.id} - ${activePokemon.name.toUpperCase()}`;

		// Validamos el estado del botón anterior basándonos en el ID actual
		prevButton.disabled = activePokemon.id <= 1;
	};

	// ==========================================
	// 5. ESCUCHADORES DE EVENTOS (LISTENERS ASÍNCRONOS)
	// ==========================================
	nextButton.addEventListener("click", async () => {
		pokemonId++;
		console.log(
			`%c[Navegación]: Solicitando siguiente ID -> ${pokemonId}`,
			"color: #e67e22;",
		);

		try {
			loadingParagraph.textContent = "Cargando siguiente Pokémon... ⏳";

			// Renombramos la variable local a 'fetchedPokemon' para romper la confusión semántica
			const fetchedPokemon = await getPokemonById(pokemonId);
			renderPokemon(fetchedPokemon);
		} catch (error) {
			console.error(
				"%c[Error UI]: Fallo al avanzar de Pokémon.",
				"color: red;",
			);
			loadingParagraph.textContent =
				"Error al cargar los datos del Pokémon. ❌";
		}
	});

	prevButton.addEventListener("click", async () => {
		if (pokemonId <= 1) return; // Validación de seguridad antes de restar

		pokemonId--;
		console.log(
			`%c[Navegación]: Solicitando ID anterior -> ${pokemonId}`,
			"color: #e67e22;",
		);

		try {
			loadingParagraph.textContent = "Cargando Pokémon anterior... ⏳";

			const fetchedPokemon = await getPokemonById(pokemonId);
			renderPokemon(fetchedPokemon);
		} catch (error) {
			console.error(
				"%c[Error UI]: Fallo al retroceder de Pokémon.",
				"color: red;",
			);
			loadingParagraph.textContent =
				"Error al cargar los datos del Pokémon. ❌";
		}
	});

	// ==========================================
	// 6. CARGA DE INICIALIZACIÓN
	// ==========================================
	console.log("%c[Async]: Disparando consulta inicial...", "color: #3498db;");

	try {
		const initialPokemon = await getPokemonById(pokemonId);
		renderPokemon(initialPokemon);
	} catch (error) {
		console.error(
			"%c[Error UI]: Error crítico en el renderizado inicial.",
			"color: red;",
		);
		loadingParagraph.textContent =
			"Error al conectar con la base de datos de Pokémon. ❌";
	}
};
