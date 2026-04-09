/**
 * ARCHIVO DE BARRIL (BARREL FILE) - USE CASES
 * Este archivo centraliza todas las exportaciones de la carpeta 'use-cases'.
 * Permite simplificar las importaciones en otros archivos (como app.js),
 * evitando múltiples líneas de importación y manteniendo un código más limpio.
 */

// Anuncio informativo en consola sobre la carga de módulos
console.log(
	"%c[Sistema]: Cargando Casos de Uso de la Interfaz...",
	"color: #9b59b6; font-weight: bold;",
);

/** * Exportación de la lógica de renderizado principal de la lista de tareas.
 */
export { renderTodos } from "./render-todos";

/** * Exportación de la lógica para generar el marcado HTML individual de cada tarea.
 */
export { createTodoHTML } from "./create-todo-html";

/** * Exportación de la lógica para actualizar el contador de tareas pendientes.
 */
export { renderPending } from "./render-pending";

// Mensaje final de confirmación de carga
console.info("%c✨ Casos de uso listos para operar.", "color: #8e44ad;");
