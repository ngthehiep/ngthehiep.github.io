const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// click drop menu
const nav_itemIcons = $$('.header__nav-link-icon');
const items_drop = $$('.header__nav-item-drop');
nav_itemIcons.forEach((icon, index) => {
    const item = items_drop[index];
    icon.onclick = function () {
        item.classList.toggle('active');
    }
});