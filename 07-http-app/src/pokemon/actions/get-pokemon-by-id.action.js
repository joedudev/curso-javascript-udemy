/**
 * Realiza una petición HTTP GET para obtener los detalles de un Pokémon por su ID.
 * @param {Number} id - Identificador numérico del Pokémon (ej: 1 para Bulbasaur).
 * @returns { Promise<Object>}
 */
export const getPokemonById = async (id) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await response.json();
	// console.log("Datos del Pokémon:", data);
	const pokemonData = {
		id: data.id,
		name: data.name,
		image: data.sprites.front_default,
		// types: data.types.map((typeInfo) => typeInfo.type.name),
	};
	console.log("Datos procesados del Pokémon:", pokemonData);
	return pokemonData;
};
