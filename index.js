const TAB_BUTTONS_SELECTOR = ".js-tab-buttons";
const TAB_BUTTON_SELECTOR = ".js-tab-button";
const TAB_CONTENT_SELECTOR = ".js-tab-content";

const hideTabContents = () => {
    document.querySelectorAll(TAB_CONTENT_SELECTOR).forEach((node) => {
        node.style.display = 'none';
    });
};

const showTabContent = (node) => {
    node.style.display = "flex";
};

const activateTab = (node) => {
    hideTabContents();
    showTabContent(node);
};

const registerEventHandler = () => {
    document
        .querySelector(TAB_BUTTONS_SELECTOR)
        .addEventListener("click", function (event) {
            const to = event.target.getAttribute('data-tab'); // profile / list
            const contentNode = document.getElementById(to);

            activateTab(contentNode);
        });
};

const init = () => {
    const firstTab = document.querySelector(TAB_CONTENT_SELECTOR);

    activateTab(firstTab);
    registerEventHandler();
};

init();