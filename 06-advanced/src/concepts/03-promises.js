import { heroes } from "../data/heroes";

/**
 *
 * @param {*} Element
 */
export const promiseComponent = (element) => {};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
	return new Promise((resolve, reject) => {
		const hero = heroes.find((hero) => hero.id === id);
		if (hero) {
			resolve(hero);
			return;
		} else {
			reject(`Héroe con el id ${id} no fue encontrado`);
		}
	});
};
