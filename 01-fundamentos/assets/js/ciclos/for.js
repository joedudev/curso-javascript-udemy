const heroes = [
	"Batman",
	"Superman",
	"Mujer Maravilla",
	"Flash",
	"Linterna Verde",
];

// 1. FOR TRADICIONAL
// Control total: Tú decides dónde empieza, dónde termina y el salto (i++).
console.warn("%c--- 1. For Tradicional ---", "color: red; font-weight: bold;");

for (let i = 0; i < heroes.length; i++) {
	console.log(`Índice ${i}:`, heroes[i]);
}

// 2. FOR IN (Itera sobre PROPIEDADES / LLAVES)
// En un arreglo, las "propiedades" son los índices (0, 1, 2...).
// 🚨 PELIGRO: También puede recorrer propiedades heredadas del prototipo.
console.warn(
	"%c--- 2. For In (Índices/Keys) ---",
	"color: orange; font-weight: bold;",
);

for (let i in heroes) {
	// Aquí 'i' es un STRING ("0", "1", etc.), no un número.
	console.log(`Llave encontrada: ${i} -> Valor: ${heroes[i]}`);
}

// 3. FOR OF (Itera sobre VALORES)
// Es el más moderno y limpio para Arreglos.
// Extrae directamente el contenido de cada posición.
console.warn(
	"%c--- 3. For Of (Valores/Values) ---",
	"color: #2ecc71; font-weight: bold;",
);

for (let heroe of heroes) {
	console.log("Héroe actual:", heroe);
}
