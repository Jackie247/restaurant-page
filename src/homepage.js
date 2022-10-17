import {createImage,createParagraph} from './elements.js'
import restaurantFace from './assets/restaurantFace.jpg';
import gallery1 from './assets/gallery1.jpg';
import gallery2 from './assets/gallery2.jpg';
import gallery3 from './assets/gallery3.jpg';

import stars from './assets/5stars.png';

// restaurantFace credit Baiq Daling https://unsplash.com/photos/vuZJ1VRHNF4
// gallery1 credit Anton Nazaretian https://unsplash.com/photos/JCHlsKSgbSk
// gallery2 credit 
// gallery3 credit Photo by <a href="https://unsplash.com/@s_tsuchiya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">S. Tsuchiya</a> on <a href="https://unsplash.com/s/photos/japanese-restaurant-interior?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
function createHero(){
    const content = document.createElement('div');
    const hero = document.createElement('div');
    const heroImage = createImage(restaurantFace,'restaurant face');
    const heroTextDiv = document.createElement('div');
    const heroTitle = document.createElement('h2');
    const heroTitleFoods = document.createElement('h4');
    const heroJapanese = document.createElement('h4');

    content.classList.add('main-content-hero')
    hero.classList.add('hero');
    heroImage.classList.add('hero-image');
    heroTextDiv.classList.add('hero-text');
    heroTitle.classList.add('hero-title');
    heroTitleFoods.classList.add('hero-title-foods');

    heroTitle.textContent = 'Bonzai';
    heroTitleFoods.textContent = 'Authentic Japanese Ramen | Sushi Bar | Sake'
    heroJapanese.textContent = 'ラーメン';

    content.appendChild(hero);
    hero.appendChild(heroImage);
    hero.appendChild(heroTextDiv);
    heroTextDiv.appendChild(heroTitle);
    heroTitle.appendChild(heroTitleFoods);

    return content;
}

function createMid(){
    const content = document.createElement('div');
    const titleContainer = document.createElement('div');
    const welcome = document.createElement('h2');
    const welcomeJap = document.createElement('h4');
    const gallery = document.createElement('div');
    const firstImage = createImage(gallery1,'chefs cooking in the kitchen');
    const firstImageText = createParagraph('Taste authentic ramen created by chefs who honed their techniques across restaurants in Japan');
    const secondImage = createImage(gallery2,'bowl of ramen');
    const secondImageText = createParagraph('Taste authentic ramen created by chefs who honed their techniques across restaurants in Japan');
    const thirdImage = createImage(gallery3);
    const thirdImageText = createParagraph('Taste authentic ramen ');

    welcome.textContent = 'Welcome!';
    welcomeJap.textContent = '私たちのサイトに、ようこそ！'

    content.classList.add('main-content-mid')
    titleContainer.classList.add('mid-section-title');
    welcome.classList.add('welcome');
    welcomeJap.classList.add('welcome-japanese');
    gallery.classList.add('gallery');

    titleContainer.appendChild(welcome);
    titleContainer.appendChild(welcomeJap);
    content.appendChild(titleContainer);

    content.appendChild(gallery);
    
    gallery.appendChild(firstImage);
    gallery.appendChild(firstImageText);
    gallery.appendChild(secondImage);
    gallery.appendChild(secondImageText);
    gallery.appendChild(thirdImage);
    gallery.appendChild(thirdImageText);

    return content;
}

export default function createHomePage(){
    const main = document.getElementById('main');
    main.appendChild(createHero());
    main.appendChild(createMid());
}