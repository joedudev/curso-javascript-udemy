import { heroes } from "../data/heroes.js";

/**
 *
 * @param {HTMLDivElement} Element
 */
export const callbacksComponent = (element) => {
	const id = "5d86371fd55e2e2a30fe1ccb1";
	findHero(id, (hero) => {
		element.innerHTML = hero.name;
	});
};

/**
 *
 * @param {string} id
 * @param {(hero: Object => Void)} callback
 */
const findHero = (id, callback) => {
	const hero = heroes.find((hero) => hero.id === id);
	callback(hero);
};
