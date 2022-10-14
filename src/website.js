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

function createFooter(){
    const footer = document.createElement('footer');
    const testimonies = document.createElement('div');
    const para1 = document.createElement('h5');
    const review1 = document.createElement('p');
    const para2 = document.createElement('h5');
    const review2 = document.createElement('p');
    const para3 = document.createElement('h5');
    const review3 = document.createElement('p');

    footer.classList.add('footer');
    testimonies.classList.add('testimonies');
    para1.classList.add('paragraph');
    para2.classList.add('paragraph');
    para3.classList.add('paragraph');

    para1.textContent = `"I dine in this restaurant quite often! 
    I visit this place regularly and love it everytime. 
    The meals are authentic and the price is not too expensive.
    I enjoy eating in this place and would recommend to anyone."`;
    review1.textContent = `-Clark Kent Reviewed on Google`
    para2.textContent = `"Authentic ramen from one of the best Japanese chefs in town!
    They also serve amazing Sushi dishes that melt in your mouth.
    The staff has always been friendly and the place has such a beautiful Japanese aesthetic."`
    review2.textContent = `-Barry Allen Reviewed on Google`
    para3.textContent = `"I wholeheartedly recommend the Miso Ramen, such a classic ramen dish brought to an extraodinary level.
    Great work."`
    review3.textContent = `-Bruce Wayne Reviewed on Google`

    testimonies.append(para1);
    testimonies.append(para2);
    testimonies.append(para3);
    footer.appendChild(testimonies); 

    return footer;
}

export default function createWebsite(){
    const content = document.getElementById('content')
    const header = createHeader();
    content.appendChild(header);
    content.appendChild(createMain());
    content.appendChild(createFooter());
}