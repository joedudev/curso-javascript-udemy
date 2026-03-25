class Rectangulo {
	// 1. Declaración obligatoria: Los campos privados deben declararse antes del constructor
	#area = 0;

	constructor(base = 0, altura = 0) {
		this.base = base;
		this.altura = altura;
		// 2. Solo se puede acceder a #area DENTRO de estas llaves { }
		this.#area = base * altura;
	}

	// 3. Única forma de ver el área desde fuera (Getter)
	get calcularArea() {
		return this.#area;
	}
}

const rectangulo = new Rectangulo(10, 15);

// INTENTO DE MODIFICACIÓN ACCIDENTAL
rectangulo.area = 100; // Esto crea una propiedad pública "area" (sin #)

console.log(
	"%c--- Análisis de Seguridad ---",
	"color: #3498db; font-weight: bold;",
);
console.log("Propiedad pública (intento de hack):", rectangulo.area); // 100
console.log("Área real protegida (vía Getter):", rectangulo.calcularArea); // 150

// console.log(rectangulo.#area); // ❌ Si quitas el comentario, el programa EXPLOTA (Syntax Error)

console.log("%cEstructura del objeto:", "color: #2ecc71;");
console.log(rectangulo); // Verás que el #area no aparece o aparece como "private" dependiendo del navegador
