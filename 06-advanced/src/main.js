import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { enviromentsComponents } from "./concepts/01-enviroments.js";
import { callbacksComponent } from "./concepts/02-callbacks.js";
import { promiseComponent } from "./concepts/03-promises.js";

document.querySelector("#app").innerHTML = /* html */ `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src=${viteLogo} class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
  </div>
  <div class="card"></div>
</section>`;

const element = document.querySelector(".card");

// enviromentsComponents(element);
// callbacksComponent(element);
promiseComponent(element);
