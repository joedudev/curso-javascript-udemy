/**
 * PUNTO DE ENTRADA DE LA APLICACIÓN (ENTRY POINT)
 * Este archivo orquesta el arranque inicial: carga los estilos,
 * inicializa el almacenamiento de datos (Store) y monta la UI.
 */

import "./style.css";
import { App } from "./todos/app.js";
import todoStore from "./store/todo.store.js";

// --- ARRANQUE DE LA APLICACIÓN ---

/**
 * 1. Inicialización del Store:
 * Antes de mostrar nada al usuario, debemos asegurar que los datos
 * estén listos y cargados desde el LocalStorage.
 */
console.log(
	"%c[Main]: Inicializando persistencia de datos...",
	"color: #7f8c8d;",
);
todoStore.InitStore();

/**
 * 2. Montaje de la Interfaz:
 * Una vez que el Store está listo, llamamos a la función principal
 * de la App pasándole el selector del contenedor raíz.
 */
console.log(
	"%c[Main]: Montando interfaz en el elemento #app",
	"color: #3498db; font-weight: bold;",
);
App("#app");

// Mensaje de éxito final
console.info(
	"%c🚀 ¡Aplicación TODO lista para usarse!",
	"color: #2ecc71; font-weight: bold; border: 1px solid #2ecc71; padding: 2px;",
);
