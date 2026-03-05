/**
 * Dias de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Emtra a un sitio web, para consultar si esta abierto hoy

const dia = 1; // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado
const horaActual = 10;

let horaApertura; // undefined
let mensaje; // Esta Abierto, esta cerrado, hoy abrimos a las xx

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
// 	console.log("Es fin de semana");
// 	horaApertura = 9;
// } else {
// 	console.log("Es dia laboral");
// 	horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
// 	mensaje = `Esta abierto!`;
// } else {
// 	mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje =
	horaActual >= horaApertura
		? `Esta abierto!`
		: `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
