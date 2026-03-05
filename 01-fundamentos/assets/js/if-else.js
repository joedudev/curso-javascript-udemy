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

let diasDeSemana = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sábado",
];

console.log(`Hoy es ${diasDeSemana[dia]}`);
