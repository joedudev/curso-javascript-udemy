import { pokemonApp } from "./pokemon/pokemon-app";
import "./style.css";

const html = String.raw;

document.querySelector("#app").innerHTML = html`
	<main>
		<h1 class="app-title">Hola mundo</h1>
		<section class="information-card">...</section>
	</main>
`;

pokemonApp(document.querySelector(".information-card"));
