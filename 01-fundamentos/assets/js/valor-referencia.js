// ==========================================
// 1. PRIMITIVOS (Paso por Valor)
// ==========================================
let a = 10;
let b = a; // Aquí se crea una COPIA física del 10.
a = 30;

console.log(
	"%c--- 💎 Primitivos (Valores Independientes) ---",
	"color: #3498db; font-weight: bold;",
);
console.log({ a, b }); // { a: 30, b: 10 } -> 'b' no cambió.

// ==========================================
// 2. OBJETOS (Rompiendo Referencia con Spread)
// ==========================================
let juan = { nombre: "Juan" };

// 🚩 Mal: let ana = juan; (Ambos apuntarían al mismo espacio de memoria)
// ✅ Bien: Usamos el operador Spread (...) para "esparcir" las propiedades en un nuevo objeto.
let ana = { ...juan };
ana.nombre = "Ana";

console.log(
	"%c--- 📦 Objetos (Referencia Rota) ---",
	"color: #e67e22; font-weight: bold;",
);
console.log({ juan, ana }); // Juan sigue siendo Juan, Ana es Ana. ✅

// ==========================================
// 3. FUNCIONES (El Pro-Tip de Desestructuración)
// ==========================================
/**
 * Aquí hacemos magia: ({ ...persona })
 * Al poner los tres puntos dentro de las llaves en el argumento,
 * estamos clonando el objeto justo en el momento de recibirlo.
 */
const cambiaNombre = ({ ...persona }) => {
	persona.nombre = "Tony";
	return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter); // 'peter' entra, pero 'persona' es una copia nueva.

console.log(
	"%c--- 🦸‍♂️ Funciones (Copia en Argumentos) ---",
	"color: #9b59b6; font-weight: bold;",
);
console.log({ peter, tony }); // Peter se salvó de ser Tony. ✅

// ==========================================
// 4. ARREGLOS (Slice vs Spread)
// ==========================================
const frutas = ["Manzana", "Pera", "Piña"];

console.log(
	"%c--- 🍎 Arreglos (Rendimiento) ---",
	"color: #2ecc71; font-weight: bold;",
);

// Método Antiguo: .slice() (Corta el arreglo y devuelve uno nuevo)
console.time("⏱️ Tiempo con slice");
const otrasFrutas = frutas.slice();
console.timeEnd("⏱️ Tiempo con slice");

// Método Moderno: Spread [...] (Más legible y estándar actual)
console.time("⏱️ Tiempo con spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("⏱️ Tiempo con spread");

otrasFrutas.push("Mango");

// console.table es GENIAL para ver arreglos y objetos de forma limpia
console.table({ frutas, otrasFrutas });
