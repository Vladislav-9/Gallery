const burger = document.querySelector('.navigation__burger');
const navigation = document.querySelector('.navigation__list');

burger.addEventListener('click', () => {
	burger.classList.toggle('navigation__burger_close');
	navigation.classList.toggle('navigation__list_active');
});