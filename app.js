const hamburger = document.querySelector('.hamburger');
const menuContainer = document.querySelector('.menu-container');
const menuClose = document.querySelector('.close-menu');
const menuLinks = document.querySelector('.menu-links');

function showMenu() {
  menuContainer.style.display = 'flex';
  menuContainer.style.top = '0';
}

function closeMenu() {
  menuContainer.style.top = '-100%';
}

function closeMenuList() {
  menuContainer.style.top = '-100%';
}

hamburger.addEventListener('click', showMenu);
menuClose.addEventListener('click', closeMenu);
menuLinks.addEventListener('click', closeMenuList);
