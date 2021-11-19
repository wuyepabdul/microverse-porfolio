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

/* project cards */
const projectsList = [
  {
    id: '1',
    name: 'Todo List',
    description:
      'A Todo list app that creates a list of todos, saves, retrieves and deletes a todo from localstorage. Built with JavaScript, HTML, CSS',
    image: './images/todo-project.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'https://wuyepabdul.github.io/Todo-List/',
    viewSource: 'https://github.com/wuyepabdul/Todo-List',
  },
  {
    id: '2',
    name: 'Awesome Books',
    description:
      'A book keeping app that creates a book, saves, retrieves and deletes a book from localstorage. Built with JavaScript, HTML, CSS',
    image: './images/awesomeBooks.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: ' https://wuyepabdul.github.io/awesome-books/ ',
    viewSource: 'https://github.com/wuyepabdul/awesome-books',
  },
  {
    id: '3',
    name: 'Jos-Dev Hackathon',
    description:
      'A Hackathon organized for Software Developers in Plateau State. Built using JavaScript, CSS and HTML',
    image: './images/hackjos.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'https://wuyepabdul.github.io/jos-dev-hackathon/',
    viewSource: 'https://github.com/wuyepabdul/jos-dev-hackathon',
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    image: './images/portfolio.png',
    technologies: ['html', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'link',
    viewSource: 'https://github.com/wuyepabdul/microverse-porfolio',
  },
];

let html = `
<div>
  <h1 class="align-left justify-center">My Recent Work</h1>
  <hr />
</div>  
`;

projectsList.forEach((project) => {
  html += `<article class="card"><div class="card-image">
  <img src=${project.image} alt="first project" /></div>
<div class="card-body">
  <h3 class="card-title align-left">${project.name}</h3>
  <p class="card-text align-left">
  ${project.description}
  </p>
  <div class="tags d-flex">
    <ul class="d-flex">
    ${project.technologies.map((list) => `<li>${list} </li>`).join('')}  
    </ul>
  </div>
  <div class="card-button align-left">
    <button class="open-modal align-left" type="submit">See Project</button>
  </div>
</div>
</article>`;
});

document.getElementById('portfolio-section').innerHTML = html;

/* modal */
const modalBtn = document.querySelectorAll('.open-modal');
const modalSection = document.querySelector('.modal-section');
const modalClose = document.querySelector('.close-modal');
const mainContainer = document.querySelector('.main-container');

function showModal() {
  modalSection.style.display = 'flex';
  mainContainer.style.display = 'none';
}

function closeModal() {
  modalSection.style.display = 'none';
  mainContainer.style.display = 'block';
}

modalBtn.forEach((btn) => {
  btn.addEventListener('click', showModal);
});

modalClose.addEventListener('click', closeModal);
