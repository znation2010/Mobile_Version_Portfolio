const openNavigation = function openNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeNavigation = function closeNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'none';
};

document.querySelector('#open-navigation').addEventListener('click', openNavigation);
document.querySelector('#close-navigation').addEventListener('click', closeNavigation);