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

let projects = [
  {
    name: 'Project 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
  {
    name: 'Project 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
  {
    name: 'Project 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
  {
    name: 'Project 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
];
