/**
 * 1. Retorno implícito de Objetos
 * Al rodear las llaves con paréntesis ({}), JS entiende que no es el
 * cuerpo de la función, sino un objeto que queremos devolver.
 * Usamos "Shorthand properties": si la clave y el valor se llaman igual,
 * solo se pone una vez. (nombre: nombre -> nombre)
 */
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona1 = crearPersona("Juan", "Pérez");
console.log("%c--- Objeto Persona ---", "color: cyan; font-weight: bold;");
console.log("Persona 1:", persona1);

/**
 * 2. Diferencia entre arguments (Objeto) y Rest (Array)
 */
function imprimeArgumentos() {
	// arguments es un objeto "Array-like", no tiene métodos de array.
	console.log("%c--- Objeto 'arguments' (Viejo) ---", "color: orange;");
	console.log(arguments);
}
imprimeArgumentos(1, "Hola", true);

/**
 * 3. Operador REST (...args) y Desestructuración de ARREGLOS
 * El primer valor (10) se guarda en 'edad'.
 * TODO lo demás se guarda en un ARRAY real llamado 'args'.
 */
const imprimeArgumentos2 = (edad, ...args) => {
	return args; // Retorna: [true, false, "Eduardo", "hola"]
};

// Aquí extraemos valores del array por su POSICIÓN
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
	10, // Se va para 'edad' y se pierde porque la función no lo retorna
	true, // Índice 0 -> casado
	false, // Índice 1 -> vivo
	"Eduardo", // Índice 2 -> nombre
	"hola", // Índice 3 -> saludo
);

console.log("%c--- Desestructuración de Array ---", "color: green;");
// Usamos {} en el log para ver el nombre de la variable y su valor
console.log({ casado, vivo, nombre, saludo });

/**
 * 4. Desestructuración de OBJETOS con Renombrado
 * Aquí está tu duda: { propiedadOriginal: nuevoNombreVariable }
 */
const { apellido: nuevoApellido } = crearPersona("Juan", "Pérez");

console.log("%c--- Renombrado de Variable ---", "color: yellow;");
console.log("¿Es 'nuevoApellido' una variable?: Sí ✅");
console.log("Valor de nuevoApellido:", nuevoApellido);

// Si intentaras hacer console.log(apellido), daría ERROR ❌
// porque la variable ahora se llama 'nuevoApellido'.

const tony = {
	nombre: "Tony Stark",
	codeName: "Ironman",
	vivo: false,
	// edad: 40, <--- Nota que la edad está comentada (no existe en el objeto)
	coords: {
		lat: 34.034,
		lng: -118.7,
	},
	trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

/**
 * EXPLICACIÓN DEL "PRO-TIP":
 * En lugar de: const imprime = (personaje) => { console.log(personaje.nombre) }
 * Usamos:      const imprime = ({ nombre }) => { console.log(nombre) }
 * * 1. { nombre, ... }: Sacamos las propiedades directamente.
 * 2. edad = 15: Valor por defecto. Si el objeto NO tiene edad, usa 15.
 */
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
	console.log(
		"%c--- 📦 Datos Desestructurados ---",
		"color: #3498db; font-weight: bold;",
	);

	// Usamos {} en el console.log para ver la etiqueta del dato (Shorthand Property Name)
	console.log({ nombre }); // Imprime -> { nombre: "Tony Stark" }
	console.log({ codeName }); // Imprime -> { codeName: "Ironman" }
	console.log({ vivo }); // Imprime -> { vivo: false }

	// Aquí ocurre la magia del valor por defecto
	console.log("%c--- 💡 Valor por defecto aplicado ---", "color: #f1c40f;");
	console.log({ edad }); // Imprime -> { edad: 15 } porque Tony no tiene edad definida

	console.log("%c--- 👗 Listado de Trajes ---", "color: #e74c3c;");
	console.log({ trajes }); // Imprime el Array completo
};

// Ejecución
imprimePropiedades(tony);
