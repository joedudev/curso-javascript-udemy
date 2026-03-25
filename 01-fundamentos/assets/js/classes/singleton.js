class Singleton {
	// 1. El "bolsillo" de la clase donde guardaremos al único elegido.
	static instancia;
	nombre = "";

	constructor(nombre = "") {
		// 2. ¿Ya tenemos a alguien en el bolsillo? (!! transforma a booleano)
		if (!!Singleton.instancia) {
			console.log(
				`%c[Aviso]: Ya existe una instancia. Devolviendo a: ${Singleton.instancia.nombre}`,
				"color: orange;",
			);
			// Si ya existe, regresamos al que ya teníamos guardado.
			// Ignoramos por completo el "this" nuevo.
			return Singleton.instancia;
		}

		// 3. Si llegamos aquí, es porque el bolsillo estaba vacío (undefined).
		console.log(
			`%c[Creación]: No hay nadie. Guardando a ${nombre} en el bolsillo.`,
			"color: green;",
		);

		// Guardamos este objeto (this) en la propiedad estática de la CLASE.
		Singleton.instancia = this;
		this.nombre = nombre;

		// Opcional: El constructor devuelve el 'this' implícitamente,
		// pero aquí ya quedó guardado en Singleton.instancia.
	}
}

// PRUEBA DE FUEGO
const instancia1 = new Singleton("Ironman"); // Se crea el objeto
const instancia2 = new Singleton("Spiderman"); // Intenta crear, pero recibe a Ironman
const instancia3 = new Singleton("BlackPanther"); // Intenta crear, pero recibe a Ironman

console.log("%c--- Resultados ---", "font-weight: bold;");
console.log(`Instancia 1: ${instancia1.nombre}`); // Ironman
console.log(`Instancia 2: ${instancia2.nombre}`); // Ironman
console.log(`Instancia 3: ${instancia3.nombre}`); // Ironman

// ¿Son exactamente el mismo objeto en memoria?
console.log("¿Instancia 1 es igual a la 2?:", instancia1 === instancia2); // true
