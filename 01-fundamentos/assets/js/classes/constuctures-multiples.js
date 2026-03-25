class Persona {
	/**
	 * PRO-TIP: MÉTODO ESTÁTICO "FACTORY"
	 * Este método no necesita que la clase esté instanciada para usarse.
	 * Recibe un objeto y aplica DESESTRUCTURACIÓN en los argumentos.
	 */
	static crearPorObjeto({ nombre, apellido, pais }) {
		console.log(
			"%c--- 🏭 Fábrica: Creando persona desde un objeto ---",
			"color: #f39c12;",
		);

		// El método estático se encarga de llamar al constructor real
		// y pasarle los datos en el orden correcto.
		return new Persona(nombre, apellido, pais);
	}

	constructor(nombre, apellido, pais) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.pais = pais;
		console.log(
			`%c[Constructor]: Datos asignados a ${this.nombre}`,
			"color: #2ecc71;",
		);
	}

	getInfo() {
		console.log(
			`%cInfo: ${this.nombre} ${this.apellido} de ${this.pais}`,
			"color: #3498db;",
		);
	}
}

// --- CASO 1: Forma tradicional ---
// Tienes que recordar el orden exacto: (nombre, apellido, pais)
const persona1 = new Persona("Melisa", "Flores", "Honduras");
persona1.getInfo();

// --- CASO 2: El Pro-Tip (Uso de la Fábrica) ---
// Imagina que estos datos vienen de una base de datos o una API (Node.js)
const datosDesdeAPI = {
	apellido: "Reyes",
	nombre: "Eduardo",
	pais: "Guatemala",
};

/**
 * ¡Aquí está la magia!
 * No importa el orden de las propiedades en 'datosDesdeAPI'.
 * El método estático se encarga de acomodarlos.
 */
const persona2 = Persona.crearPorObjeto(datosDesdeAPI);
persona2.getInfo();
