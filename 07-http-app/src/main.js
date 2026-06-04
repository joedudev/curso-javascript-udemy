import "./style.css";

const html = String.raw;

document.querySelector("#app").innerHTML = html`
	<main>
		<h1>Hola mundo</h1>
		<section class="information-card">...</section>
	</main>
`;
