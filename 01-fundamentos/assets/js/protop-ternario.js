const elMayor = (a, b) => (a > b ? a : b);
console.log(elMayor(20, 15));

const tieneMembresia = (miembro) => (miembro ? "2 dolates" : "10 dolares");
console.log(tieneMembresia(true));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
	"Peter",
	"Tony",
	"Dr. Strange",
	amigo ? "Thor" : "Loki",
	(() => "Nick Fury")(),
	elMayor(10, 20),
];
console.log(amigosArr);

const notas = 82.5;
const grado =
	notas >= 95
		? "A+"
		: notas >= 90
			? "A"
			: notas >= 85
				? "B+"
				: notas >= 80
					? "B"
					: notas >= 75
						? "C+"
						: notas >= 70
							? "C"
							: notas >= 65
								? "D+"
								: notas >= 60
									? "D"
									: "F";
console.log(grado);
