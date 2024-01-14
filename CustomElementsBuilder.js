import * as domUtils from "./DomUtils.js";

export function renderCommonElements() {
    renderHeader();
    renderFooter();
}

export function createCodeSection(code) {
    const codeSectionContainer = domUtils.emptyDiv();
    codeSectionContainer.classList.add("code-section");
    codeSectionContainer.appendChild(buildCodeSectionHeader());
    codeSectionContainer.appendChild(domUtils.preCodeWrapper(code));

    return codeSectionContainer;
}

function buildCodeSectionHeader() {
    const copyCodeButton = domUtils.createElementWithText("button", "copy");

    copyCodeButton.addEventListener("click", event => {
        const codeToCopy = copyCodeButton.parentElement.parentElement.lastElementChild.textContent;
        navigator.clipboard.writeText(codeToCopy);
        copyCodeButton.textContent = "copied to clipboard";
        setTimeout(() => { copyCodeButton.textContent = "Copy"; }, 1000);
    })

    const codeSectionHeaderContainer = domUtils.emptyDiv();
    codeSectionHeaderContainer.classList.add("code-section-header");
    codeSectionHeaderContainer.appendChild(copyCodeButton);
    return codeSectionHeaderContainer;
}

function renderHeader() {
    const dashboardButton = domUtils.createElementWithText("button", "Dashboard");
    const createButton = domUtils.createElementWithText("button", "Create");
    dashboardButton.classList.add("navbar-button");
    createButton.classList.add("navbar-button");

    const header = document.querySelector("header");
    header.appendChild(dashboardButton);
    header.appendChild(createButton);
}

function renderFooter() {
    const githubLink = domUtils.createElementWithText("a", "GitHub");
    githubLink.href = "https://github.com/dev-rifaii/";
    githubLink.classList.add("footer-element");

    const footer = document.querySelector("footer");
    footer.appendChild(githubLink);
}