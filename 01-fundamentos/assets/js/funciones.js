function saludar(nombre) {
	console.log([arguments]);
	console.log("Hola " + nombre);
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

saludar("Eduardo", 27, true, "Guatemala");
saludar2("Eduardo");
saludarFlecha();
saludarFlecha2("Eduardo");
