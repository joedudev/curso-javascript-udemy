let a = 5;

if (a >= 10) {
	console.log("a es mayor o igual que 10");
} else {
	console.log("a es menor que 10");
}

// console.log("Fin del programa");

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
	console.log("Domingo");
} else if (dia === 1) {
	console.log("Lunes");
} else if (dia === 2) {
	console.log("Martes");
} else if (dia === 3) {
	console.log("Miércoles");
} else if (dia === 4) {
	console.log("Jueves");
} else if (dia === 5) {
	console.log("Viernes");
} else if (dia === 6) {
	console.log("Sábado");
} else {
	console.log("No es un día válido");
}
