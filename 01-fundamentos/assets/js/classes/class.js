/**
 * CLASE: Es el "molde" o "plano" de construcción.
 * No es el objeto en sí, sino las instrucciones de cómo debe ser.
 */
class Persona {
	// Propiedades de clase (opcionales declararlas aquí, pero es buena práctica)
	nombre = "";
	codigo = "";
	frase = "";

	/**
	 * CONSTRUCTOR: Es el primer método que se ejecuta al hacer "new Persona()".
	 * Sirve para inicializar los valores del objeto.
	 */
	constructor(
		nombre = "Sin Nombre",
		codigo = "Sin codigo",
		frase = "Sin Frase",
	) {
		console.log(
			"%c--- Constructor Ejecutado ---",
			"color: #f39c12; font-weight: bold;",
		);

		// Validación lógica
		if (!nombre) throw Error("Necesitamos el nombre");

		/**
		 * 'this': Hace referencia a la INSTANCIA específica que estamos creando.
		 * Es como decir: "A ESTE objeto que estoy fabricando, ponle este nombre".
		 */
		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;

		console.log(
			`%c✔ Instancia de ${this.codigo} creada correctamente`,
			"color: #2ecc71;",
		);
	}

	// MÉTODO: Una función que define el comportamiento del objeto
	quienSoy() {
		console.log(
			`%c[quienSoy]: Soy ${this.codigo} y mi identidad es ${this.nombre}`,
			"color: #3498db;",
		);
	}

	miFrase() {
		// Podemos llamar a otros métodos de la misma clase usando 'this'
		this.quienSoy();
		console.log(
			`%c[miFrase]: ${this.codigo} dice: ${this.frase}`,
			"color: #9b59b6;",
		);
	}
}

// INSTANCIACIÓN: Crear objetos reales a partir del molde (Clase)
console.log(
	"%c\nSOLICITANDO NUEVOS HÉROES...",
	"background: #222; color: #bada55; padding: 5px;",
);

const spiderman = new Persona(
	"Peter Parker",
	"Spiderman",
	"Soy tu amigable vecino",
);

const ironman = new Persona("Tony Stark", "IronMan", "Yo soy Ironman");

// Imprimimos los objetos completos para ver su estructura
console.log(
	"%c\nESTADO DE LOS OBJETOS EN MEMORIA:",
	"font-weight: bold; text-decoration: underline;",
);
console.table({ spiderman, ironman }); // console.table es genial para comparar objetos

// Ejecución de métodos
spiderman.miFrase();
ironman.miFrase();
