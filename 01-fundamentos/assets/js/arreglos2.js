let juegos = ["Zelda", "Mario", "Metroid", "Castlevania"];
console.log("Largo:", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
	console.log({ elemento, indice, arr });
});

let nuevaLongiud = juegos.push("F-Zero");
console.log({ nuevaLongiud, juegos });

nuevaLongiud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongiud, juegos });

let juegoBorardo = juegos.pop();
console.log({ juegoBorardo, juegos });

console.log(juegos);

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf("Metroid");
console.log({ metroidIndex });
