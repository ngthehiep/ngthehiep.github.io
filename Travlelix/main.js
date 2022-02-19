const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// header scrolled
const header = $('.header');
window.addEventListener('scroll', scrollFunction);
function scrollFunction () {
    if (document.documentElement.scrollTop >= 120) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// btn search
const searchBtn = $('.search-btn');
const inputSearch = $('.search-box');
searchBtn.onclick = function() {
    inputSearch.classList.toggle('active');
}

// search form
const tabItems = $$('.search_tab-item');
const searchForms = $$('.search_form');
tabItems.forEach(function(tabItem, index) {
    const searchForm = searchForms[index];
    tabItem.onclick = function() {
        $('.search_tab-item.active').classList.remove('active');
        this.classList.add('active');

        $('.search_form.active').classList.remove('active');
        searchForm.classList.add('active');
    }
})

// slider package
const packageItems = $$('.package__item');
const prevBtn_package = $('.btn__slide-left');
const nextBtn_package = $('.btn__slide-right');
const packageSlider = $('.package__slider');
const packageItem_width = packageItems[0].offsetWidth;
const packageItems_length = packageItems.length;
let positionX = 0;
let index = 0;

nextBtn_package.addEventListener('click', function() {
    handleChangeSlider(1);
});
prevBtn_package.addEventListener('click', function() {
    handleChangeSlider(-1);
});

function handleChangeSlider(value) {
    if (value === 1) {
        if (index >= packageItems_length - 1) {
            return;
        }
        index ++;
        positionX = positionX - packageItem_width
        packageSlider.style = `transform: translateX(${positionX}px);`
    } else if (value === -1) {
        if (index <= 0) {
            return;
        }
        index --;
        console.log(index);
        positionX = positionX + packageItem_width
        packageSlider.style = `transform: translateX(${positionX}px);`
    }
}

// Mobile menu
const openBtn = $('.mobile-bar__btn');
const closeBtn = $('.mobile-btn__close');
const mobileMenu = $('.mobile-menu');

openBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
})
closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
})