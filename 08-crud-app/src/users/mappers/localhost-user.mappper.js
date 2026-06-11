import { User } from "../models/user";

/**
 * Mapea los datos del backend (localhost) al modelo de nuestra app (User).
 * @param {Object} localhostUser - Objeto crudo del JSON de la DB.
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {
	const { avatar, balance, first_name, gender, id, isActive, last_name } =
		localhostUser;

	// Debes pasar un OBJETO con las propiedades que el constructor espera
	return new User({
		id,
		isActive,
		balance,
		avatar,
		firstName: first_name,
		lastName: last_name,
		gender,
	});
};
