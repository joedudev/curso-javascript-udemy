function saludar(nombre) {
	// console.log([arguments]);
	// console.log("Hola " + nombre);
	return [1, 2, 3];
	console.log("soy un código muerto");
}

const saludar2 = function (nombre) {
	console.log("Hola " + nombre);
};

const saludarFlecha = () => {
	console.log("Hola flecha");
};
const saludarFlecha2 = (nombre) => {
	console.log("Hola flecha " + nombre);
};

const retornoDeSaludar = saludar("Eduardo", 27, true, "Guatemala");
console.log(
	"El retorno de saludar es: " + retornoDeSaludar[0] + retornoDeSaludar[1],
);
// saludar2("Eduardo");
// saludarFlecha();
// saludarFlecha2("Eduardo");

function sumar(a, b) {
	return a + b;
}

console.log(sumar(2, 3));

const sumar2 = (a, b) => a + b;
console.log(sumar2(5, 10));

function getAleatorio() {
	return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());
