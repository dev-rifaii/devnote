export function setTextForElementById(elementId, text) {
    document.getElementById(elementId).textContent = text;
}

export function createElementWithText(elementName, text) {
    const newElement = document.createElement(elementName);
    newElement.textContent = text;
    return newElement;
}