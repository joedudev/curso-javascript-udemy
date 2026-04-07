import "./style.css";
import { App } from "./todos/app.js";
import todoStore from "./store/todo.store.js";

todoStore.InitStore();

App("#app");
