/**
 * Realiza una petición HTTP GET para obtener los detalles de un Pokémon por su ID.
 * @param {Number} id - Identificador numérico del Pokémon (ej: 1 para Bulbasaur).
 * @returns {void}
 */
export const getPokemonById = (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

	console.log(
		`%c[HTTP]: Solicitando datos a PokéAPI para el ID: ${id}...`,
		"color: #e67e22;",
	);

	/**
	 * ANATOMÍA DEL FETCH CON PROMESAS:
	 * 1. fetch(url) dispara la petición GET hacia el servidor externo.
	 * 2. El primer .then() recibe las cabeceras de la respuesta (Response).
	 * 3. El segundo .then() recibe el cuerpo transformado a objetos manipulables de JS.
	 * 4. El .catch() actúa como red de seguridad ante caídas de internet o caídas del servidor.
	 */
	fetch(url)
		.then((response) => {
			console.log(
				`%c[Servidor]: Respuesta recibida. Status Code -> ${response.status}`,
				"color: #7f8c8d;",
			);

			// Regla de Oro en Fetch: Si el servidor responde un error (ej. 404), .ok será false.
			// Debemos forzar el error manualmente para que caiga al .catch().
			if (!response.ok) {
				throw new Error(
					`No se encontró el Pokémon con ID: ${id} (Status: ${response.status})`,
				);
			}

			// El método .json() lee el flujo de bytes de la respuesta y devuelve una nueva promesa
			return response.json();
		})
		.then((data) => {
			// Aquí ya tenemos el objeto puro de JavaScript listo para ser usado
			console.log(
				"%c[Datos Recibidos]: Estructura completa del Pokémon analizada:",
				"color: #2ecc71; font-weight: bold;",
			);
			console.log(data); // Imprime el objeto gigante con habilidades, tipos y sprites

			console.log(
				`%c[Éxito]: El Pokémon es: ${data.name.toUpperCase()} 🦖`,
				"color: #2ecc71; font-weight: bold;",
			);
		})
		.catch((error) => {
			// Este bloque captura problemas de conexión de red o el error lanzado arriba
			console.error(
				"%c[Error Crítico en Acción]: Fetch fallido.",
				"color: white; background: #ef4444; padding: 2px 5px;",
				error.message,
			);
		});
};
