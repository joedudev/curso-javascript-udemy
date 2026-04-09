/**
 * MODELO DE DATOS: TODO
 * Este archivo define la estructura de datos que tendrá cada tarea
 * dentro de nuestra aplicación.
 */

import { v4 as uuidv4 } from "uuid";

/**
 * Representa una tarea individual en la aplicación.
 */
export class Todo {
	/**
	 * Crea una nueva instancia de una tarea.
	 * @param {String} description - El texto descriptivo de la tarea.
	 */
	constructor(description) {
		// 1. Identificador único: Generado automáticamente para evitar colisiones en el Store.
		this.id = uuidv4();

		// 2. Descripción: El contenido textual de la tarea proporcionado por el usuario.
		this.description = description;

		// 3. Estado: Por defecto, toda tarea nueva se crea como pendiente (false).
		this.done = false;

		// 4. Auditoría: Almacenamos la fecha exacta de creación del objeto.
		this.createdAt = new Date();

		// Anuncio en consola para debuggear la creación de objetos en tiempo real
		console.log(
			`%c[Modelo]: Nuevo Todo creado - ID: ${this.id.substring(0, 8)}...`,
			"color: #9b59b6; font-style: italic;",
		);
	}
}
