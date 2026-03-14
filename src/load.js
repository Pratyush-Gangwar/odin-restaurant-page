import description from "./assets/text/lorem.txt";
import restaurantImg from "./assets/img/restaurant.webp";

function loadText(sectionElem) {
    description
        .split("\n")
        .forEach( line => {
            const paraElem = document.createElement("p");
            paraElem.textContent = line;
            sectionElem.appendChild(paraElem);
        } );
}

function loadImg(mainElem) {
    const imgElem = document.createElement("img");
    imgElem.src = restaurantImg;
    mainElem.appendChild(imgElem);
}

function loadPage() {
    const mainElem = document.querySelector("main");

    const sectionElem = document.createElement("section");
    sectionElem.id = "description";

    const headingElem = document.createElement("h1");
    headingElem.textContent = "My Restaurant";
    sectionElem.appendChild(headingElem);

    loadText(sectionElem);

    mainElem.appendChild(sectionElem);
    loadImg(mainElem);
}

export {loadPage};