const personaje = {
	nombre: "Tony Stark",
	codeName: "Ironman",
	vivo: false,
	edad: 40,
	coords: {
		lat: 34.034,
		lng: -118.7,
	},
	trajes: ["Mark I", "Mark V", "Hulkbuster"],
	direccion: {
		zip: "10880, 90265",
		ubicacion: "Malibu, California",
	},
	"ultima-pelicula": "Infinity War",
};

console.log(personaje);
console.log("Nombre del personaje:", personaje.nombre);
console.log("Nombre del personaje:", personaje["nombre"]);
console.log("Edad del personaje:", personaje["edad"]);
console.log("Coors del personaje:", personaje.coords);
console.log("Latitud del personaje:", personaje.coords.lat);
// ejercicio
console.log("Número de trajes:", personaje.trajes.length);
console.log("Último traje:", personaje.trajes[personaje.trajes.length - 1]);
const x = "vivo";
console.log("Vivo:", personaje[x]);
console.log("Última película:", personaje["ultima-pelicula"]);
// mas detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;

console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 1000000000;
personaje.casado = false;
delete personaje.direccion;

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);
