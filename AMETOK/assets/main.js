const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// search
const searchBtn = $(".header-nav__search");
const searchOverlay = $(".search__overlay");
const overlay = $(".overlay");
searchBtn.addEventListener('click', function () {
    searchOverlay.classList.toggle('active');
})
overlay.addEventListener('click', function () {
    searchOverlay.classList.toggle('active');
})

// open & close navigation
const navMobile_open = $('.header-nav__mobile');
const navMobile_close = $('.header-nav__mobile-close');
const navMobile = $('.header-nav__list');
navMobile_open.addEventListener('click', function () {
    navMobile.classList.toggle('active');
})
navMobile_close.addEventListener('click', function () {
    navMobile.classList.toggle('active');
})

// tabs
const tab_Items = $$('.about__tab-item');
const tab_Panes = $$('.about__tab-pane');
tab_Items.forEach(function(tab, index) {
    const pane = tab_Panes[index];
    tab.onclick = function() {
        const tabPane_active = $('.about__tab-pane.active');
        const tabItem_active = $('.about__tab-item.active');
        tabItem_active.classList.remove('active');
        tabPane_active.classList.remove('active');
        tab.classList.add('active');
        pane.classList.add('active');
    }
});

// news
const news = $('.section-news')
const newItems = $$('.news__item')
const newDetails = $('.news-details')
const newDetailItems = $$('.new-details-item')

newItems.forEach((newItem, index) => {
    const newDetailItem = newDetailItems[index]
    newItem.onclick = function() {
        news.classList.add('active')
        newDetails.classList.add('active')
        newDetailItem.classList.add('active')
    }
})