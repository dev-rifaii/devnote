export function setTextForElementById(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
}

export function createElementWithText(elementName, text) {
    const newElement = document.createElement(elementName);
    newElement.innerHTML = text;
    return newElement;
}


export function newLine() {
    return document.createElement("br");
}

export function emptyDiv() {
    return document.createElement("div");
}

export function preCodeWrapper(code) {
    const codeElement = document.createElement("code");
    codeElement.innerText = code;

    const preElement = document.createElement("pre");
    preElement.appendChild(codeElement);

    return preElement;
}