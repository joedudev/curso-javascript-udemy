class Persona {
	nombre = "";
	codigo = "";
	frase = "";

	constructor(
		nombre = "Sin Nombre",
		codigo = "Sin codigo",
		frase = "Sin Frase",
	) {
		if (!nombre) throw Error("Necesitamos el nombre");
		this.codigo = codigo;
		this.nombre = nombre;
		this.frase = frase;
	}
}

const spiderman = new Persona(
	"Pter Parker",
	"Spiderman",
	"Soy tu amigable vecino",
);
const ironman = new Persona("Tony Stark", "IronMan", "Yo soy Ironman");
console.log(spiderman);
console.log(ironman);
