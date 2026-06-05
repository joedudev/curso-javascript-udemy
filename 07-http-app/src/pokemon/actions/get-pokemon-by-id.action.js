/**
 * ACCIÓN: Obtener Pokémon por ID con Soporte de Caché
 * Módulo encargado de la comunicación por red con la PokéAPI externa.
 * Implementa un almacenamiento intermedio (Caché en RAM) para optimizar el rendimiento
 * y reducir el consumo de datos innecesario.
 */

/**
 * Almacenamiento intermedio en memoria RAM para registrar los Pokémon ya descargados.
 * Mapea un ID numérico con el objeto procesado del Pokémon.
 * @type {Map<Number, {id: Number, name: String, image: String}>}
 */
const pokemonCache = new Map();

/**
 * Obtiene los detalles esenciales de un Pokémon mediante una estrategia Cache-First (Caché Primero).
 * @param {Number} id - Identificador numérico del Pokémon (ej: 1 para Bulbasaur).
 * @returns {Promise<{id: Number, name: String, image: String}>} Datos optimizados del Pokémon solicitado.
 * @throws {Error} Si la petición de red falla o el Pokémon no existe en el servidor.
 */
export const getPokemonById = async (id) => {
	// =========================================================================
	// ESTRATEGIA: CACHÉ FIRST
	// =========================================================================
	// Verificamos si los datos del ID ya existen en nuestro mapa local
	if (pokemonCache.has(id)) {
		console.log(
			`%c[Caché 💾]: Pokémon ID #${id} recuperado localmente de la RAM. ¡0ms de latencia!`,
			"color: #f1c40f; font-weight: bold;",
		);

		// Retornamos el objeto inmediatamente rompiendo la ejecución de la función aquí
		return pokemonCache.get(id);
	}

	// =========================================================================
	// ESTRATEGIA: PETICIÓN DE RED (FALLBACK)
	// =========================================================================
	// Si no estaba en caché, procedemos a realizar la consulta real a internet
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

	console.log(
		`%c[Red 🌐]: ID #${id} no encontrado en memoria. Iniciando petición HTTP Fetch...`,
		"color: #3498db; font-weight: bold;",
	);

	try {
		// 1. Conexión inicial con el servidor remoto
		const response = await fetch(url);

		console.log(
			`%c[Servidor]: Respuesta de red recibida. Status HTTP: ${response.status}`,
			"color: #7f8c8d;",
		);

		// 2. Control manual de errores reactivos (Tratamiento de fallas 404/500 en Fetch)
		if (!response.ok) {
			throw new Error(
				`No se encontró el Pokémon en el servidor (Status: ${response.status})`,
			);
		}

		// 3. Descarga y procesamiento del cuerpo JSON de la respuesta
		const rawData = await response.json();

		// 4. Data Mapping: Filtrado de propiedades críticas para la UI
		const mappedPokemonData = {
			id: rawData.id,
			name: rawData.name,
			image: rawData.sprites.front_default,
			// types: rawData.types.map((typeInfo) => typeInfo.type.name),
		};

		console.log(
			"%c[Acción]: Datos mapeados con éxito. Registrando en memoria...",
			"color: #2ecc71; font-weight: bold;",
			mappedPokemonData,
		);

		// 5. REGISTRO EN CACHÉ: Almacenamos el objeto mapeado para que la próxima consulta no consuma red
		pokemonCache.set(id, mappedPokemonData);

		return mappedPokemonData;
	} catch (error) {
		// Captura problemas físicos de red o el lanzamiento manual del 'if'
		console.error(
			"%c[Error HTTP Crítico]: Fallo en la comunicación asíncrona.",
			"color: white; background: #ef4444; padding: 2px 5px;",
			error.message,
		);

		// Propagamos la excepción para que el componente visual pueda pintar la alerta de error
		throw error;
	}
};
