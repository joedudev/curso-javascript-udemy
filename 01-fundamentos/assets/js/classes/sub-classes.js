class Persona {
	static _conteo = 0;
	// ... (tus otros métodos estáticos)

	constructor(
		nombre = "Sin Nombre",
		codigo = "Sin codigo",
		frase = "Sin Frase",
	) {
		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;
		Persona._conteo++;
	}

	quienSoy() {
		console.log(
			`%c[Padre]: Soy ${this.codigo} y mi identidad es ${this.nombre}`,
			"color: #3498db;",
		);
	}
}

/**
 * HERENCIA: Heroe extiende de Persona.
 * Heroe es la subclase (hija) y Persona es la superclase (padre).
 */
class Heroe extends Persona {
	clan = "Sin Clan";

	constructor(nombre, codigo, frase) {
		/**
		 * REGLA DE ORO 1: super()
		 * Debes llamar a super() antes de usar 'this'.
		 * super() invoca al constructor de la clase padre (Persona).
		 */
		console.log(
			"%c--- Constructor del Hijo (Heroe) ---",
			"color: #f1c40f; font-weight: bold;",
		);
		super(nombre, codigo, frase);

		this.clan = "Los Vengadores"; // Ahora sí podemos usar 'this'
	}

	/**
	 * SOBREESCRITURA (Override)
	 * Estamos redefiniendo el método quienSoy() que ya existía en Persona.
	 */
	quienSoy() {
		console.log(
			`%c[Hijo]: Soy ${this.nombre}, del clan: ${this.clan}`,
			"color: #2ecc71;",
		);

		/**
		 * REGLA DE ORO 2: Acceso al padre
		 * Si queremos ejecutar la lógica original del padre, usamos super.metodo()
		 */
		super.quienSoy();
	}
}

// --- EJECUCIÓN ---
const spiderman = new Heroe("Peter Parker", "Spiderman", "Tu amigable vecino");

console.log("%cObjeto final en memoria:", "font-weight: bold;");
console.log(spiderman);

// Al llamar a este método, se ejecuta la versión del HIJO, que a su vez llama al PADRE.
spiderman.quienSoy();
