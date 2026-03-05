const regresaTrue = () => {
	console.log("Regresa true");
	return true;
};

const regresaFalse = () => {
	console.log("Regresa false");
	return false;
};

console.warn("Not o Negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse()); // true
console.log(!regresaTrue()); // false

// And - Regresa true si ambos operandos son true

console.warn("And");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true && !false); // true
console.log(!false && true); // true
console.log(!false && !false); // true

console.log("=============================");
console.log("Regresa false", regresaFalse() && regresaTrue()); // false
console.log("Regresa true", regresaTrue() && regresaTrue()); // true

console.log("============ && =============");
regresaFalse() && regresaTrue(); // false

console.log("4 condiciones", true && true && true && false); // false

console.warn("Or");
console.log(true || true);
console.log(true || false);

console.log("4 condiciones", true || true || true || false); // true

console.warn("Asignaciones");
