import { loadHome } from "./scripts/home.js";
import { loadMenu } from "./scripts/menu.js";
import { loadContact } from "./scripts/contact.js";

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
    loadContact();
});