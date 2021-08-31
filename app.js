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
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    image: './images/works.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
];

let projectCard = ` 
  <div>
    <h1 class="align-left justify-center">My Recent Work</h1>
    <hr />
  </div>  
  ${projects.map(
    (project) => `
 
  <article class="card ">
    <div class="card-image">
      <img src=${project.image} alt="first project" />
    </div>

    <div class="card-body">
      <h3 class="card-title align-left">${project.name}</h3>
      <p class="card-text align-left">
      ${project.description}
      </p>
      <div class="tags d-flex">
        <ul class="d-flex">
        ${project.technologies.map((list) => `<li>${list} </li>`)}  
          
        </ul>
      </div>
      <div class="card-button align-left">
        <button class="align-left" type="submit">See Project</button>
      </div>
    </div>
  </article>`
  )}`;

document.getElementById('portfolio-section').innerHTML = projectCard;
