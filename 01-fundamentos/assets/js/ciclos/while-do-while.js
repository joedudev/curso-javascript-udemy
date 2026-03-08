const carros = ["Ford", "Fiat", "Honda", "Chevrolet", "Volkswagen"];

let i = 0;

console.warn("while");

while (carros[i]) {
	if (i === 1) {
		i++;
		continue;
	}
	console.log(carros[i]);
	i++;
}

console.warn("do while");

let j = 0;

do {
	console.log(carros[j]);
	j++;
} while (carros[j]);
