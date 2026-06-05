import { getPokemonById } from "./actions/get-pokemon-by-id.action";

// Nota: String.raw se mantiene para asegurar compatibilidad con formateadores/extensiones de VSCode
const html = String.raw;

/**
 * Orquesta la inicialización, la creación de nodos en el DOM y el renderizado dinámico de Pokémon.
 * @param {HTMLElement} element - El contenedor raíz donde se inyectará la tarjeta de información.
 * @returns {Promise<void>}
 */
export const pokemonApp = async (element) => {
	document.title = "Pokémon App 🎮";

	// 1. Modificación de elementos preexistentes en el layout global
	const mainPageTitle = document.querySelector(".app-title");
	if (mainPageTitle) {
		mainPageTitle.textContent = "PokéAPI App Real-Time";
	}

	console.log(
		"%c[DOM]: Creando elementos reactivos en memoria...",
		"color: #3498db; font-weight: bold;",
	);

	// ==========================================
	// 2. FASE DE CREACIÓN DE ELEMENTOS (NATIVO)
	// ==========================================
	const loadingParagraph = document.createElement("p");
	const pokemonImage = document.createElement("img");
	const nextButton = document.createElement("button");
	const prevButton = document.createElement("button");

	// Estilos rápidos en línea (Opcional, combinando con tu tema oscuro)
	loadingParagraph.style.color = "#94a3b8";
	loadingParagraph.style.fontStyle = "italic";
	pokemonImage.style.width = "150px";
	pokemonImage.style.height = "150px";

	// ==========================================
	// 3. CONFIGURACIONES INICIALES (ESTADO DE CARGA)
	// ==========================================
	loadingParagraph.textContent = "Cargando información del Pokémon... ⏳";
	nextButton.textContent = "Siguiente Pokémon →";
	prevButton.textContent = "← Pokémon Anterior";

	// Deshabilitado inicialmente porque arrancamos en el ID 1 (No hay ID 0)
	prevButton.disabled = true;

	// ==========================================
	// 4. INSERCIÓN EN EL DOM (MOSTRAR AL USUARIO)
	// ==========================================
	// Insertamos los nodos vacíos. El usuario ya ve los botones y el indicador de carga.
	element.appendChild(loadingParagraph);
	element.appendChild(pokemonImage);
	element.appendChild(prevButton); // Orden lógico: Anterior primero, luego Siguiente
	element.appendChild(nextButton);

	// ==========================================
	// 5. MÉTODOS DE ACTUALIZACIÓN DE LA UI
	// ==========================================
	/**
	 * Modifica las propiedades de los nodos ya inyectados en el DOM con la información real.
	 * @param {{id: Number, name: String, image: String}} pokemon - Objeto procesado por la acción.
	 */
	const renderPokemon = (pokemon) => {
		console.log(
			`%c[UI]: ¡Datos listos! Hidratando el DOM con: ${pokemon.name.toUpperCase()}`,
			"color: #a855f7; font-weight: bold;",
		);

		// Inyectamos las propiedades directamente sobre los nodos existentes en memoria
		pokemonImage.src = pokemon.image;
		pokemonImage.alt = pokemon.name;

		// Aplicamos interpolación limpia de variables
		loadingParagraph.textContent = `Pokémon #${pokemon.id} - ${pokemon.name.toUpperCase()}`;
		loadingParagraph.style.fontStyle = "normal";
		loadingParagraph.style.color = "#f1f5f9";
	};

	// ==========================================
	// 6. Escuchador de eventos para navegación entre Pokémon
	// ==========================================

	// ==========================================
	// 7. PETICIÓN HTTP & DISPARO DE RENDER
	// ==========================================
	console.log(
		"%c[Async]: Esperando respuesta del servidor externo...",
		"color: #e67e22;",
	);

	try {
		// El hilo de ejecución de la app se detiene aquí hasta que el objeto Pokémon sea devuelto
		const pokemonInicial = await getPokemonById(1);

		// Ejecutamos la hidratación del HTML con los datos reales
		renderPokemon(pokemonInicial);
	} catch (error) {
		console.error(
			"%c[Error en App]: No se pudo realizar el renderizado inicial.",
			"color: red;",
		);
		loadingParagraph.textContent =
			"Error al conectar con la base de datos de Pokémon. ❌";
		loadingParagraph.style.color = "#ef4444";
	}
};
