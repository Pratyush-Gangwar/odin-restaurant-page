import menuItems from "./assets/json/menu.json";

function loadItems(sectionElem) {
    menuItems.forEach( item => {
        const itemArticle = document.createElement("article");

        const itemTitle = document.createElement("h2");
        itemTitle.textContent = item.name;
        itemArticle.appendChild(itemTitle);

        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.description;
        itemArticle.appendChild(itemDesc);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: ${item.price}`;
        itemArticle.appendChild(itemPrice);

        sectionElem.appendChild(itemArticle);
    })
}

function loadMenu() {
    const mainElem = document.querySelector("main");

    const sectionElem = document.createElement("section");
    sectionElem.id = "description";

    const headingElem = document.createElement("h1");
    headingElem.textContent = "Menu";
    sectionElem.appendChild(headingElem);

    loadItems(sectionElem);
    mainElem.appendChild(sectionElem);
}

export {loadMenu};