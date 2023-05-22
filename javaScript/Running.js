const navigationDesktop = document.querySelector('.navigation-desktop');
const burgerMenu = document.querySelector('.burger-menu'); 

burgerMenu.addEventListener('click', () => {
navigationDesktop.classList.toggle('mobileCoder');
});