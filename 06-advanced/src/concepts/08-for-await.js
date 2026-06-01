import { heroes } from "../data/heroes";

/**
 * COMPONENTE: Demostración de Flujos Asíncronos Avanzados (If Await & For Await)
 * Muestra cómo evaluar condiciones basadas en promesas y cómo iterar un arreglo
 * de promesas de manera secuencial y ordenada usando 'for await...of'.
 * @param {HTMLDivElement} element - Contenedor principal de la interfaz.
 */
export const forAwaitComponent = async (element) => {
	// Limpiamos el contenedor antes de iniciar
	element.innerHTML = "";

	const id = "5d86371f1efebc31def272e2";

	console.log(
		"%c[Sistema]: Iniciando componente For-Await...",
		"color: #3498db; font-weight: bold;",
	);

	// =========================================================================
	// SECCIÓN 1: EVALUACIÓN CONDICIONAL ASÍNCRONA (IF + AWAIT)
	// =========================================================================
	console.log(
		"%c[If-Await]: Verificando existencia de héroe piloto...",
		"color: #7f8c8d;",
	);

	// El 'if' pausa su evaluación hasta que 'getHeroAsync' devuelva un valor real
	if (await getHeroAsync(id)) {
		console.log("%c[If-Await]: Éxito - El héroe existe.", "color: #2ecc71;");
		element.innerHTML += /* html */ `
            <div style="color: #2ecc71; margin-bottom: 20px; font-weight: bold;">
                ✓ Verificación: El héroe piloto existe en la base de datos.
            </div>
        `;
	} else {
		console.warn("[If-Await]: El héroe piloto NO existe.");
		element.innerHTML += /* html */ `
            <div style="color: #ef4444; margin-bottom: 20px;">
                ✗ Verificación: El héroe piloto no existe.
            </div>
        `;
	}

	// =========================================================================
	// SECCIÓN 2: ITERACIÓN ASÍNCRONA (FOR AWAIT...OF)
	// =========================================================================

	// 1. Extraemos todos los IDs para generar la simulación de peticiones masivas
	const HeroIDs = heroes.map((hero) => hero.id);

	// 2. Transformamos los IDs en un arreglo de Promesas pendientes (en estado pending)
	const heroesPromises = getHeroesAsync(HeroIDs);

	console.time("⏱️ Tiempo Total de Iteración");
	console.log(
		`%c[For-Await]: Iniciando ciclo para ${heroesPromises.length} promesas...`,
		"color: #a855f7; font-weight: bold;",
	);

	/**
	 * El ciclo 'for await...of' va a tomar el arreglo de promesas y resolverá
	 * una por una, deteniendo el ciclo en cada iteración hasta obtener los datos reales.
	 */
	let contador = 1;
	for await (const hero of heroesPromises) {
		console.log(
			`%c[Ciclo]: Procesando vuelta #${contador} -> Héroe: ${hero.name}`,
			"color: #e67e22;",
		);

		// Vamos acumulando el HTML de forma dinámica a medida que se resuelven
		element.innerHTML += /* html */ `
            <div style="background: #1e293b; padding: 12px 20px; margin-bottom: 8px; border-radius: 8px; border-left: 4px solid #a855f7; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);">
                <span style="color: #94a3b8; font-size: 14px;">Héroe #${contador}:</span>
                <strong style="color: #f1f5f9; margin-left: 10px; font-size: 18px;">${hero.name}</strong>
            </div>
        `;
		contador++;
	}

	console.timeEnd("⏱️ Tiempo Total de Iteración");
	console.log(
		"%c[Sistema]: Flujo asíncronos avanzados completado con éxito.",
		"color: #2ecc71; font-weight: bold;",
	);
};

/**
 * Toma un arreglo de identificadores y devuelve un mazo de promesas pendientes.
 * @param {Array<String>} heroIds - Colección de IDs de héroes.
 * @returns {Array<Promise<Object>>} Un arreglo donde cada elemento es una Promesa de un héroe.
 */
const getHeroesAsync = (heroIds) => {
	const heroPromises = [];

	// Mapeamos cada ID a su respectiva función asíncrona
	heroIds.forEach((id) => {
		heroPromises.push(getHeroAsync(id));
	});

	return heroPromises;
};

/**
 * Busca un héroe por ID simulando latencia de red de 1 segundo.
 * @param {String} id - Identificador único del héroe.
 * @returns {Promise<Object|undefined>} El objeto del héroe o undefined si no se encuentra.
 */
const getHeroAsync = async (id) => {
	// Forzamos una pausa artificial de 1 segundo
	await new Promise((resolve) => {
		setTimeout(() => resolve(), 1000);
	});

	return heroes.find((hero) => hero.id === id);
};
