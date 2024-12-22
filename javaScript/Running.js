// let Navlinking = document.querySelector('.newNavLinks');
// const Offing = document.getElementById('newCloseTag');

document.querySelectorAll('.newNavLinks').forEach((element) => element.addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'none';
}));

const openNavigation = function openNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeNavigation = function closeNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'none';
};

document.querySelector('#open-navigation').addEventListener('click', openNavigation);
document.querySelector('#close-navigation').addEventListener('click', closeNavigation);