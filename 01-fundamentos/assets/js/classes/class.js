class Persona {
	nombre = "";
	codigo = "";
	frase = "";
	comida = "";
	constructor(
		nombre = "Sin Nombre",
		codigo = "Sin codigo",
		frase = "Sin Frase",
	) {
		if (!nombre) throw Error("Necesitamos el nombre");
		this.nombre = nombre;
		this.codigo = codigo;
		this.frase = frase;
	}

	set setComidaFavorita(comida) {
		this.comida = comida.toUpperCase();
	}
	get getComidaFavorita() {
		return `La comida favorita de ${this.nombre} es ${this.comida}`;
	}

	quienSoy() {
		console.log(
			`%c[quienSoy]: Soy ${this.codigo} y mi identidad es ${this.nombre}`,
			"color: #3498db;",
		);
	}

	miFrase() {
		this.quienSoy();
		console.log(
			`%c[miFrase]: ${this.codigo} dice: ${this.frase}`,
			"color: #9b59b6;",
		);
	}
}

// Heroes

const spiderman = new Persona(
	"Peter Parker",
	"Spiderman",
	"Soy tu amigable vecino",
);

const ironman = new Persona("Tony Stark", "IronMan", "Yo soy Ironman");

spiderman.setComidaFavorita = "El pie de cereza de la tia May";

// spiderman.comida = "Duende verde";

console.log(spiderman);
console.log(spiderman.getComidaFavorita);
