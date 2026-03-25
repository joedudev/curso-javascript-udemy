class Persona {
	// 1. PROPIEDAD ESTÁTICA: Es global para todas las personas creadas.
	static _conteo = 0;

	// GETTER ESTÁTICO: Informa sobre la clase, no sobre un heroe.
	static get conteo() {
		return Persona._conteo + ` instancias creadas en memoria`;
	}

	static mensaje() {
		console.log(
			"%c[Static Method]: Los métodos estáticos no pueden acceder a 'this.nombre' porque la Clase no tiene nombre personal.",
			"color: orange;",
		);
		console.log("Hola a todos, soy un metodo estático");
	}

	// Propiedades de instancia (Cada objeto tendrá las suyas)
	nombre = "";
	codigo = "";
	frase = "";
	comida = "";

	constructor(
		nombre = "Sin Nombre",
		codigo = "Sin codigo",
		frase = "Sin Frase",
	) {
		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;

		// Accedemos a la propiedad estática para contar cuántos hemos fabricado
		Persona._conteo++;
		console.log(
			`%c[Constructor]: Fabricando a ${nombre}. Total: ${Persona._conteo}`,
			"color: #2ecc71;",
		);
	}

	// SETTER: Filtra y procesa la entrada
	set setComidaFavorita(comida) {
		console.log(`%c[Setter]: Procesando comida: ${comida}`, "color: #f1c40f;");
		this.comida = comida.toUpperCase(); // Lo guardamos siempre en mayúsculas
	}

	// GETTER: Formatea la salida
	get getComidaFavorita() {
		return `La comida favorita de ${this.nombre} es ${this.comida}`;
	}
}

// --- EJECUCIÓN ---

const spiderman = new Persona(
	"Peter Parker",
	"Spiderman",
	"Tu amigable vecino",
);
const ironman = new Persona("Tony Stark", "IronMan", "Yo soy Ironman");

// USANDO EL SETTER: ¡Ojo! No se usa como función (), se usa como asignación =
spiderman.setComidaFavorita = "Pizza de Pepperoni";

// USANDO EL GETTER: No se usan paréntesis
console.log(
	"%c" + spiderman.getComidaFavorita,
	"font-weight: bold; color: #3498db;",
);

// ACCESO ESTÁTICO
console.log(
	"%cAcceso Estático Directo:",
	"color: white; background: black;",
	Persona.conteo,
);

// PROPIEDAD EXTERNA: Añadida dinámicamente
Persona.versionDelJuego = "1.0.2";
console.log(`Versión añadida fuera de la clase: ${Persona.versionDelJuego}`);

console.table({
	Instancia_1: spiderman,
	Instancia_2: ironman,
});
