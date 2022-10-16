import {createImage,createParagraph} from './elements.js'
import restaurantFace from './assets/restaurantFace.jpg';
import stars from './assets/5stars.png';

function createHero(){
    const content = document.createElement('div');
    const hero = document.createElement('div');
    const heroImage = createImage(restaurantFace,'restaurant face');
    const heroTextDiv = document.createElement('div');
    const heroTitle = document.createElement('h2');
    const heroTitleFoods = document.createElement('h4');
    const heroJapanese = document.createElement('h4');
    const fiveStars = createImage(stars,'5 stars review');

    content.classList.add('main-content')
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
    const firstImage = createImage();
    const firstImageText = createParagraph('Taste authentic ramen created by chefs who honed their techniques across restaurants in Japan');
    const secondImage = createImage();
    const secondImageText = createParagraph();
    const thirdImage = createImage();
    const thirdImageText = createParagraph();

    content.appendChild(firstImage);

    return content;
}

export default function createHomePage(){
    const main = document.getElementById('main');
    main.appendChild(createHero());
    main.appendChild(createMid());
}