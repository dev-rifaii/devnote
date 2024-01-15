export function setTextForElementById(elementId, text) {
    document.getElementById(elementId).textContent = text;
}

export function createElementWithText(elementName, text) {
    const newElement = document.createElement(elementName);
    newElement.textContent = text;
    return newElement;
}

export function emptyDiv() {
    return document.createElement("div");
}

export function preCodeWrapper(code) {
    const codeElement = document.createElement("code");
    codeElement.textContent = code.trim();

    const preElement = document.createElement("pre");
    preElement.appendChild(codeElement);

    const container = emptyDiv();
    container.id = "code-container";
    container.appendChild(preElement);

    return container;
}