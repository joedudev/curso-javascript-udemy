const miModulo = (() => {
	"use strict";
	let e = [],
		t = ["C", "D", "H", "S"],
		r = ["A", "J", "Q", "K"],
		l = [],
		s = document.querySelector("#btnPedir"),
		n = document.querySelector("#btnDetener"),
		i = document.querySelectorAll(".divCartas"),
		a = document.querySelectorAll("small"),
		d = (t = 2) => {
			((e = o()),
				(l = Array(t).fill(0)),
				a.forEach((e) => (e.innerText = 0)),
				i.forEach((e) => (e.innerHTML = "")),
				(s.disabled = !1),
				(n.disabled = !1));
		},
		o = () => {
			e = [];
			for (let l = 2; l <= 10; l++) for (let s of t) e.push(l + s);
			for (let n of t) for (let i of r) e.push(i + n);
			return _.shuffle(e);
		},
		c = () => {
			if (0 === e.length) throw Error("No cards left in the deck");
			return e.pop();
		},
		u = (e) => {
			let t = e.substring(0, e.length - 1);
			return isNaN(t) ? ("A" === t ? 11 : 10) : Number(t);
		},
		$ = (e, t) => ((l[t] += u(e)), (a[t].innerText = l[t]), l[t]),
		f = (e, t) => {
			let r = document.createElement("img");
			((r.src = `assets/cartas/${e}.png`),
				r.classList.add("carta"),
				i[t].append(r));
		},
		h = () => {
			let [e, t] = l;
			setTimeout(() => {
				t === e
					? alert("It is a draw! :(")
					: e > 21
						? alert("Computer wins!")
						: t > 21
							? alert("Player Wins!")
							: alert("Computer Wins!");
			}, 100);
		},
		b = (e) => {
			let t = 0,
				r = l.length - 1;
			do {
				let s = c();
				((t = $(s, r)), f(s, r));
			} while (t < e && e <= 21);
			h();
		};
	return (
		s.addEventListener("click", () => {
			let e = c(),
				t = $(e, 0);
			(f(e, 0), t >= 21 && ((s.disabled = !0), (n.disabled = !0), b(t)));
		}),
		n.addEventListener("click", () => {
			((s.disabled = !0), (n.disabled = !0), b(l[0]));
		}),
		{ nuevoJuego: d }
	);
})();
