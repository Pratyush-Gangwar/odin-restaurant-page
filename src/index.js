import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";

const mainElem = document.querySelector("main");
loadHome();

const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
    mainElem.replaceChildren();
    loadHome();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => {
    mainElem.replaceChildren();
    loadMenu();
});

const contactBtn = document.querySelector("#contact");
contactBtn.addEventListener("click", () => {
    mainElem.replaceChildren();
});