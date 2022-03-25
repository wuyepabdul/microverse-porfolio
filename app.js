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
    name: 'Lease a Home',
    description:
      'This web application is built for a company that allows registered users to lease a home, view their leases, and delete their leases. Built with Ruby on Rails and React Built with Ruby on Rails, React, JavaScript, HTML, CSS',
    image: './images/lease-home-list.png',
    technologies: ['React', 'Ruby on Rails', 'css', 'Github'],
    viewLive: 'https://duls-lease-home.herokuapp.com/',
    viewSource: 'https://github.com/HENRYKC24/lease-a-home-frontend',
  },
  {
    id: '2',
    name: 'E-Commerce Application',
    description:
      'An e-commerce application that allows the purchase of accessories for registered users. It allows users to also create orders and view their order histories.. Built with JavaScript, HTML, CSS',
    image: './images/accessories-home.png',
    technologies: ['NodeJS', 'React', 'Bootstrap', 'Github', 'MongoDB'],
    viewLive: 'https://duls-proshop.herokuapp.com/',
    viewSource: 'https://github.com/wuyepabdul/accessories-ecommerce-mern',
  },
  {
    id: '3',
    name: 'Jos-Dev Hackathon',
    description:
      'A Hackathon organized for Software Developers in Plateau State. Built using JavaScript, CSS and HTML',
    image: './images/hackjos.png',
    technologies: ['html', 'css', 'JavaScript', 'Github'],
    viewLive: 'https://wuyepabdul.github.io/jos-dev-hackathon/',
    viewSource: 'https://github.com/wuyepabdul/jos-dev-hackathon',
  },
  {
    id: '4',
    name: 'Urbanstudent',
    description:
      'An immersive virtual learning platform where teachers and students can connect virtually in real time. Still in Development..',
    image: './images/urbanstudent.png',
    technologies: ['WebRTC', 'React', 'NodeJS', 'Gitlab'],
    viewLive: 'https://urbanstudent-webrtc.herokuapp.com/',
    viewSource: 'https://gitlab.com/urban-students/urbanstudents-webrtc-frontend',
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
    <p hidden>${project.viewLive}</p>
    <p hidden>${project.viewSource}</p>
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

function closeModal() {
  modalSection.style.display = 'none';
  mainContainer.style.display = 'block';
}

modalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modalSection.style.display = 'flex';
    mainContainer.style.display = 'none';
    const tag = e.target.parentElement.parentElement.parentElement.children[0].children[0];
    const projectImage = tag.src;
    const projectLink = e.target.parentElement.children[1].innerHTML;
    const projectSource = e.target.parentElement.children[2].innerHTML;
    const modalImage = document.querySelector('.modal-image');
    modalImage.children[0].src = projectImage;
    modalImage.parentElement.lastElementChild.firstElementChild.href = projectLink;
    modalImage.parentElement.lastElementChild.lastElementChild.href = projectSource;
  });
});

modalClose.addEventListener('click', closeModal);
