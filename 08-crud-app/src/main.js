import "./style.css";
import { UserApp } from "./users/users-app";

const html = String.raw;
const appElement = document.querySelector("#app");

appElement.innerHTML = html` <h1>CRUD APP</h1> `;

// Inyectamos la aplicación en el elemento principal
UserApp(appElement);
