/**
 * ACCIÓN: Obtener Pokémon por ID
 * Modulo encargado de la comunicación por red con la PokéAPI externa.
 * Filtra y procesa los datos crudos antes de enviarlos a la interfaz de usuario.
 */

/**
 * Realiza una petición HTTP GET para obtener los detalles mapeados de un Pokémon.
 * El prefijo 'async' garantiza que la función devuelva implícitamente una Promesa.
 * @param {Number} id - Identificador numérico del Pokémon (ej: 1 para Bulbasaur).
 * @returns {Promise<{id: Number, name: String, image: String}>} Objeto procesado con la información esencial del Pokémon.
 * @throws {Error} Si la petición de red falla o el Pokémon no existe.
 */
export const getPokemonById = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

	console.log(
		`%c[HTTP]: Iniciando petición Async/Await para el Pokémon ID: ${id}...`,
		"color: #3498db; font-weight: bold;",
	);

	try {
		// 1. Disparamos la petición de red y esperamos la respuesta inicial del servidor
		const response = await fetch(url);

		console.log(
			`%c[Servidor]: Respuesta recibida. Status: ${response.status}`,
			"color: #7f8c8d;",
		);

		// 2. Control de Errores Manual (Fetch no cae al catch automáticamente en estatus 404 o 500)
		if (!response.ok) {
			throw new Error(`No se encontró el Pokémon (Status: ${response.status})`);
		}

		// 3. Esperamos a que se termine de descargar y parsear el cuerpo del JSON
		const data = await response.json();

		// 4. Mapeo de datos (Mapeamos solo lo que la UI realmente necesita para ser eficiente)
		const pokemonData = {
			id: data.id,
			name: data.name,
			image: data.sprites.front_default,
			// Descomenta la línea de abajo si tu extensión HTML o UI requiere los tipos en el futuro:
			// types: data.types.map((typeInfo) => typeInfo.type.name),
		};

		console.log(
			"%c[Acción]: Datos procesados correctamente:",
			"color: #2ecc71; font-weight: bold;",
			pokemonData,
		);

		// El return en una función async equivale automáticamente al 'resolve' de una promesa
		return pokemonData;
	} catch (error) {
		// Captura cualquier fallo de red (ej: sin internet) o el error lanzado en el 'if'
		console.error(
			"%c[Error en Acción]: Transacción HTTP fallida.",
			"color: white; background: #ef4444; padding: 2px 5px;",
			error.message,
		);
		throw error; // Re-lanzamos el error para que el componente visual (UI) también sepa que falló
	}
};
