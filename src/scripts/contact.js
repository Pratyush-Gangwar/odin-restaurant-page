function loadCard(sectionElem) {
    const articleElem = document.createElement("article");

    const headingElem = document.createElement("h2");
    headingElem.textContent = "Charlotte";
    articleElem.appendChild(headingElem);

    const designationElem = document.createElement("p");
    designationElem.textContent = "Owner";
    articleElem.appendChild(designationElem);

    const phoneElem = document.createElement("p");
    phoneElem.textContent = "Phone: 1234567890";
    articleElem.appendChild(phoneElem);

    const emailElem = document.createElement("p");
    emailElem.textContent = "Email: charlotte@fakegmail.com";
    articleElem.appendChild(emailElem);

    sectionElem.append(articleElem);
}

function loadContact() {
    const mainElem = document.querySelector("main");

    const sectionElem = document.createElement("section");
    sectionElem.id = "description";

    const headingElem = document.createElement("h1");
    headingElem.textContent = "Contact";
    sectionElem.appendChild(headingElem);

    loadCard(sectionElem);

    mainElem.appendChild(sectionElem);    
}

export {loadContact};