// search input focus
const searchInput = document.querySelector('.search-block__box-input input')
const searchHistory = document.querySelector('.search-history')
    // bỏ hành vi mạc định
searchHistory.onmousedown = (e) => e.preventDefault()

// search box customer
const searchCustomer = document.querySelector('.search-block__box-customer')
const customerType = document.querySelector('.customer-type')
searchCustomer.onclick = (e) => {
    searchCustomer.classList.toggle('active')
    customerType.classList.toggle('active')
}
    // Chống nổi bọt
customerType.onclick = (e) => e.stopPropagation()

// Language block
const language = document.querySelector('.language')
const languageBlock = document.querySelector('.language__block')
language.onclick = () => {
    languageBlock.classList.toggle('active')
}
languageBlock.onclick = (e) => e.stopPropagation()

// Toggle menu mobile
const overlay = document.querySelector('.header__overlay')
const openMenuBtn = document.querySelector('.navbar__mobile')
const closeMenuBtn = document.querySelector('.navbar__close')
const navbar = document.querySelector('.navbar')
const action = () => {
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
}
openMenuBtn.onclick = () => action()
closeMenuBtn.onclick = () => action()
overlay.onclick = () => action()

// Back to top
const backToTop = document.querySelector('.back-to-top')
window.onscroll = () => {
    if (window.scrollY > 500 || document.documentElement.scrollTop > 500) {
        backToTop.classList.add('active')
    } else {
        backToTop.classList.remove('active')
    }
}
backToTop.onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Loading page
const loading = document.querySelector('#loading')
window.onload = function() {
    loading.style.opacity = 0;
    loading.style.visibility = 'hidden';
};