/**
 * Clase que representa la entidad de Usuario dentro de nuestra aplicación.
 */
export class User {
	/**
	 * Crea una instancia de Usuario.
	 * @param {Object} userData - Los datos brutos provenientes del backend.
	 * @param {String|Number} userData.id - Identificador único.
	 * @param {Boolean} userData.isActive - Estado de actividad del usuario.
	 * @param {Number} userData.balance - Saldo disponible.
	 * @param {String} userData.avatar - URL de la imagen de perfil.
	 * @param {String} userData.firstName - Nombre del usuario.
	 * @param {String} userData.lastName - Apellido del usuario.
	 * @param {String} userData.gender - Género del usuario.
	 */
	constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
		this.id = id;
		this.isActive = isActive;
		this.balance = balance;
		this.avatar = avatar;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
	}
}
