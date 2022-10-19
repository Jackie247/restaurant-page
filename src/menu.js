import {createImage,createParagraph} from './elements.js';
function createMenu(){
    const content = document.createElement('div');
    const menu = document.createElement('div');
    const ramenDishes = document.createElement('div');
    ramenDishes.classList.add('menu-block');
    const sushiDishes = document.createElement('div');
    sushiDishes.classList.add('menu-block');
    const sidesDishes = document.createElement('div');
    sidesDishes.classList.add('menu-block');
    const riceDishes = document.createElement('div');
    riceDishes.classList.add('menu-block');

    const category = document.createElement('h1');
    category.textContent = 'Menu';
    content.appendChild(category);
    // Ramen items on menu //
    const ramenCategory = document.createElement('h3');
    ramenCategory.textContent = 'Ramen | ラーメン';
    ramenCategory.classList.add('subcategory');
    ramenDishes.appendChild(ramenCategory);
    const ramenItem1 = createParagraph('Tonkotsu Ramen | 豚骨ラーメン');
    ramenItem1.classList.add('menu-item');
    ramenDishes.appendChild(ramenItem1)
    const ramenItem2 = createParagraph('Spicy Tantanmen Ramen | ピリ辛担々麺');
    ramenItem2.classList.add('menu-item');
    ramenDishes.appendChild(ramenItem2);
    const ramenItem3 = createParagraph('Shoyu Ramen | 醤油ラーメン');
    ramenItem3.classList.add('menu-item');
    ramenDishes.appendChild(ramenItem3);
    const ramenItem4 = createParagraph('Miso Ramen | 味噌ラーメン');
    ramenItem4.classList.add('menu-item');
    ramenDishes.appendChild(ramenItem4);
    // Sushi items on menu //
    const sushiCategory = document.createElement('h3');
    sushiCategory.textContent = 'Sushi | すし';
    sushiCategory.classList.add('subcategory');
    sushiDishes.appendChild(sushiCategory);
    const sushiItem1 = createParagraph('Salmon Nigiri | 鮭のにぎり');
    sushiItem1.classList.add('menu-item');
    sushiDishes.appendChild(sushiItem1)
    const sushiItem2 = createParagraph('Maguro Nigiri | まぐろにぎり');
    sushiItem2.classList.add('menu-item');
    sushiDishes.appendChild(sushiItem2)
    const sushiItem3 = createParagraph('Unagi Nigiri | うなぎにぎり');
    sushiItem3.classList.add('menu-item');
    sushiDishes.appendChild(sushiItem3)
    const sushiItem4 = createParagraph('Hotate Nigiri | ホタテ握り');
    sushiItem4.classList.add('menu-item');
    sushiDishes.appendChild(sushiItem4)
    // Sides items on menu //
    const sidesCategory = document.createElement('h3');
    sidesCategory.textContent = 'Sides | おかず';
    sidesCategory.classList.add('subcategory');
    sidesDishes.appendChild(sidesCategory);
    const sidesItem1 = createParagraph('Tetsunabe Gyoza | 鉄鍋餃子');
    sidesItem1.classList.add('menu-item');
    sidesDishes.appendChild(sidesItem1);
    const sidesItem2 = createParagraph('Takoyaki | たこ焼き');
    sidesItem2.classList.add('menu-item');
    sidesDishes.appendChild(sidesItem2);
    const sidesItem3 = createParagraph('Spicy Takoyaki | ピリ辛たこ焼き');
    sidesItem3.classList.add('menu-item');
    sidesDishes.appendChild(sidesItem3);
    // Rice items on menu //
    const riceCategory = document.createElement('h3');
    riceCategory.textContent = 'Rice | ライスカレー';
    riceCategory.classList.add('subcategory');
    riceDishes.appendChild(riceCategory);
    const riceItem1 = createParagraph('Chicken Katsu Curry | チキンカツカレー');
    riceItem1.classList.add('menu-item');
    riceDishes.appendChild(riceItem1);
    const riceItem2 = createParagraph('Croquette Curry | かぼちゃコロッケカレー');
    riceItem2.classList.add('menu-item');
    riceDishes.appendChild(riceItem2);

    content.classList.add('main-content');
    menu.classList.add('menu');
    category.classList.add('menu-title');

    menu.appendChild(ramenDishes);
    menu.appendChild(sushiDishes);
    menu.appendChild(sidesDishes);
    menu.appendChild(riceDishes);

    content.appendChild(menu);

    return content;
}

export default function createMenuPage(){
    const main = document.getElementById('main');
    main.appendChild(createMenu());
}