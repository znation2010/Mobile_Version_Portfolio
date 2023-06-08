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

const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (emailInput.value === emailInput.value.toLowerCase()) {
    form.submit();
  } else {
    errorMsg.classList.remove('hiddenMsg');
  }
});
