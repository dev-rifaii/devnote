export function setTextForElementById(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
}

export function createElementWithText(elementName, text) {
    const newElement = document.createElement(elementName);
    newElement.innerHTML = text;
    return newElement;
}