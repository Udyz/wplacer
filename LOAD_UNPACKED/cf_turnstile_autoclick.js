function SimuateMouseClick(targetElement) {
    if (targetElement instanceof HTMLElement) targetElement.focus();
    const boundingRect = targetElement.getBoundingClientRect();
    const clientX = Math.random() * boundingRect.width + boundingRect.left;
    const clientY = Math.random() * boundingRect.height + boundingRect.top;
    const screenX = Math.random() * window.screen.width;
    const screenY = Math.random() * window.screen.height;

    const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: clientX,
        clientY: clientY,
        screenX: screenX,
        screenY: screenY
    });

    targetElement.dispatchEvent(clickEvent);
}

function clickCheckBox() {
    let checkBoxInterval = setInterval(function () {
        const checkBox = document.querySelector("body")?.shadowRoot?.querySelector("input[type=checkbox]");

        if (checkBox) {
            setTimeout(function () {
                SimuateMouseClick(document.querySelector("body")?.shadowRoot?.querySelector("label"));
            }, );
            clearInterval(checkBoxInterval);
        }
    }, );
}

if (document?.documentElement) {
    clickCheckBox();
} else {
    let elementSet = false;
    const observer = new MutationObserver(function () {
        if (!elementSet && document.head) {
            elementSet = true;
            clickCheckBox();
            observer.disconnect()
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
}


