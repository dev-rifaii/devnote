import * as domUtils from "./DomUtils.js";

export function createCodeSection(code) {
    const codeSectionContainer = domUtils.emptyDiv();
    codeSectionContainer.classList.add("code-section");
    codeSectionContainer.appendChild(buildCodeSectionHeader());
    codeSectionContainer.appendChild(domUtils.preCodeWrapper(code));

    return codeSectionContainer;
}

function buildCodeSectionHeader() {
    const copyCodeButton = domUtils.createElementWithText("button", "copy");

    const codeSectionHeaderContainer = domUtils.emptyDiv();
    codeSectionHeaderContainer.classList.add("code-section-header");
    codeSectionHeaderContainer.appendChild(copyCodeButton);
    return codeSectionHeaderContainer;
}