import _ from "underscore";
import {
	crearDeck,
	pedirCarta,
	valorCarta,
	turnoComputadora,
	crearCartaHTML,
	gestionarBotones,
} from "./usecases";

let deck = [];
const tipos = ["C", "D", "H", "S"],
	especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir"),
	btnDetener = document.querySelector("#btnDetener"),
	btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugador = document.querySelector("#jugador-cartas"),
	divCartasComputadora = document.querySelector("#computadora-cartas"),
	puntosHTML = document.querySelectorAll("small");

deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener("click", () => {
	const carta = pedirCarta(deck);

	puntosJugador += valorCarta(carta);
	puntosHTML[0].innerText = puntosJugador;

	const imgCarta = crearCartaHTML(carta);
	divCartasJugador.append(imgCarta);

	if (puntosJugador >= 21) {
		gestionarBotones(true, btnPedir, btnDetener);
		turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
	}
});

btnDetener.addEventListener("click", () => {
	gestionarBotones(true, btnPedir, btnDetener);
	turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener("click", () => {
	deck = crearDeck(tipos, especiales);
	puntosJugador = 0;
	puntosHTML[0].innerText = 0;
	puntosHTML[1].innerText = 0;
	divCartasComputadora.innerHTML = "";
	divCartasJugador.innerHTML = "";

	gestionarBotones(false, btnPedir, btnDetener);
});
