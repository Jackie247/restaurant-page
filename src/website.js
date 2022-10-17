import createHomePage from './homepage.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js';

function createHeader(){
    // document elements
    const header = document.createElement('header');
    const nav = createNav();
    // CLASSES // 
    header.classList.add('header');
    // append to element
    header.appendChild(nav);

    return header;
}
function createNav(){
    // document elements
    const main = document.getElementById('main');
    const nav = document.createElement('nav');
    const links = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    // CLASSES // 
    nav.classList.add('navbar');
    links.classList.add('nav-links')
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    home.setAttribute('id','home-btn');
    home.addEventListener('click',(e) => {
        main.innerHTML = '';
        createHomePage();
    })
    menu.setAttribute('id','menu-btn');
    menu.addEventListener('click',(e) => {
        main.innerHTML = '';
        createHomePage();
    })
    contact.setAttribute('id','contact-btn');
    contact.addEventListener('click',(e) => {
        main.innerHTML = '';
        createHomePage();
    })

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);

    nav.appendChild(links);

    return nav;
}
function createMain(){
    const main = document.createElement('main');
    // CLASSES // 
    main.classList.add('main');
    main.setAttribute('id','main');

    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    const text = document.createElement('h4');
    text.textContent = 'Created by Jackie247';
    footer.appendChild(text);

    return footer;
}

export default function createWebsite(){
    const content = document.getElementById('content')
    const header = createHeader();
    content.appendChild(header);
    content.appendChild(createMain());
    content.appendChild(createFooter());

    createHomePage();
}   