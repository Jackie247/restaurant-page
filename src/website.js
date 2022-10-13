function createHeader(){
    // document elements
    const header = document.createElement('header');
    const headerStrip = document.createElement('div');
    const nav = createNav();
    const title = document.createElement('h1');
    // append to element
    header.appendChild(headerStrip);
    headerStrip.appendChild(nav);
    headerStrip.appendChild(title);
    // add classes to elements
    header.classList.add('header');
    headerStrip.classList.add('header-strip-container');
    // add text
    title.textContent = "Bonzai Ramen"
    
    return header;
}

function createNav(){
    const nav = document.createElement('nav');
    const homePage = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    nav.appendChild(homePage);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

function createMain(){

}

export default function createWebsite(){
    const content = document.getElementById('content')

    content.appendChild(createHeader());
}