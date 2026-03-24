const edu = {
	nombre: "Eduardo",
	edad: 26,
	imprimir() {
		console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
	},
};

const pedro = {
	nombre: "Pedro",
	edad: 15,
	imprimir() {
		console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
	},
};

// edu.imprimir();
// pedro.imprimir();
// melissa.imprimir();

function Persona(nombre, edad) {
	console.log("Se ejecuto esta linea");

	this.nombre = nombre;
	this.edad = edad;
	this.imprimir = function () {
		console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
	};
}

const maria = new Persona("Maria", 18);
const melisa = new Persona("Melisa", 28);
// console.log(maria);
maria.imprimir();
melisa.imprimir();
