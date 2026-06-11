/**
 * Realiza una petición GET al servidor para obtener usuarios paginados.
 * @param {number} page - La página a consultar.
 * @returns {Promise<Array>} Listado de usuarios.
 * @throws {Error} Si la petición falla.
 */
export const loadUsersByPage = async (page = 1) => {
	// Usamos la variable de entorno configurada en Vite
	const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;

	const res = await fetch(url);
	const data = await res.json();

	console.log("%c[API]: Usuarios cargados:", "color: #2ecc71;", data);
	return data;
};
