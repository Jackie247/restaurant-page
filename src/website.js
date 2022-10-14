function createHeader(){
    // document elements
    const header = document.createElement('header');
    const headerStrip = document.createElement('div');
    const title = document.createElement('h1');
    const nav = createNav();
    // CLASSES // 
    header.classList.add('header');
    headerStrip.classList.add('header-strip-container');
    // add text
    title.textContent = "Bonzai Ramen"
    // append to element
    header.appendChild(headerStrip);
    headerStrip.appendChild(title);
    headerStrip.appendChild(nav);

    return header;
}
function createNav(){
    // document elements
    const nav = document.createElement('nav');
    const links = document.createElement('div');
    const homePage = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    const dropdown = document.createElement('a');
    const hamburger = document.createElement('i');
    // CLASSES // 
    nav.classList.add('topnav');
    dropdown.classList.add('icon');
    hamburger.classList.add('fa','fa-bars');
    links.setAttribute('id','myLinks');

    dropdown.addEventListener('click', () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    })
    homePage.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    links.appendChild(homePage);
    links.appendChild(menu);
    links.appendChild(contact);
    dropdown.appendChild(hamburger);
    nav.appendChild(links);
    nav.appendChild(dropdown);

    return nav;
}
function createMain(){
    const main = document.createElement('main');
    // CLASSES // 
    main.classList.add('main');
    main.setAttribute('id','main');

    return main;
}
export default function createWebsite(){
    const content = document.getElementById('content')
    const header = createHeader();
    content.appendChild(header);
    content.appendChild(createMain());
}