import { createImage, createParagraph } from "./elements.js";
import restaurantFace from "./assets/restaurantFace.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";

import stars from "./assets/5stars.png";

// restaurantFace credit Baiq Daling https://unsplash.com/photos/vuZJ1VRHNF4
// gallery1 credit Anton Nazaretian https://unsplash.com/photos/JCHlsKSgbSk
// gallery2 credit
// gallery3 credit Photo by <a href="https://unsplash.com/@s_tsuchiya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">S. Tsuchiya</a> on <a href="https://unsplash.com/s/photos/japanese-restaurant-interior?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function createHero() {
  const content = document.createElement("div");
  const hero = document.createElement("div");
  const heroImage = createImage(restaurantFace, "restaurant face");
  const heroTextDiv = document.createElement("div");
  const heroTitle = document.createElement("h2");
  const heroTitleFoods = document.createElement("h4");
  const heroJapanese = document.createElement("h4");

  content.classList.add("main-content-hero");
  hero.classList.add("hero");
  heroImage.classList.add("hero-image");
  heroTextDiv.classList.add("hero-text");
  heroTitle.classList.add("hero-title");
  heroTitleFoods.classList.add("hero-title-foods");

  heroTitle.textContent = "Bonzai";
  heroTitleFoods.textContent = "Authentic Japanese Ramen | Sushi Bar | Sake";
  heroJapanese.textContent = "ラーメン";

  content.appendChild(hero);
  hero.appendChild(heroImage);
  hero.appendChild(heroTextDiv);
  heroTextDiv.appendChild(heroTitle);
  heroTitle.appendChild(heroTitleFoods);

  return content;
}

function createMid() {
  // This function creates a div that contains all the main elements of the homepage,
  // The div is given a class 'main-content-mid' and this is appended to the main element
  const content = document.createElement("div");
  const titleContainer = document.createElement("div");
  const welcome = document.createElement("h2");
  const welcomeJap = document.createElement("h4");
  const gallery = document.createElement("div");
  const firstImage = createImage(gallery1, "chefs cooking in the kitchen");
  const firstImageTextContainer = document.createElement("div");
  const firstImageTitle = document.createElement("h3");
  const firstImageText = createParagraph(
    "At Bonzai you will taste authentic ramen created by chefs who have honed their techniques across restaurants in Japan. Our team of chefs use the freshest ingredients sourced from local farmers and crafted into the perfect bowl of ramen!"
  );
  const secondImageTextContainer = document.createElement("div");
  const secondImageTitle = document.createElement("h3");
  const secondImage = createImage(gallery2, "bowl of ramen");
  const secondImageText = createParagraph(
    "The cuisine served at Bonzai is a traditional kaiseki prepared by chef Hiroshi Hashimoto. He has been trained at Kikunoi and his proven cooking techniques have been appreciated by many customers. His cuisine is based on dashi and the flavours of the seasonal ingredients themselves."
  );
  const thirdImageTextContainer = document.createElement("div");
  const thirdImageTitle = document.createElement("h3");
  const thirdImage = createImage(gallery3);
  const thirdImageText = createParagraph(
    "Roketsu has been specially designed and built by the craftsmen of Nakamura Sotoji Komuten using Japanese hinoki wood, preserved over 100 years in Kyoto."
  );
  const thirdImageTextTwo = createParagraph(
    "The interior has been made in Kyoto and shipped to London, and assembled by the craftsmen from Nakamura Sotoji Komuten, one of the world's leading experts in the Sukiya style.This project started with a desire to follow in the footsteps of our predecessors and to spread the still developing category of Japanese food culture, kaiseki, to the world."
  );

  welcome.textContent = "Welcome!";
  welcomeJap.textContent = "私たちのサイトに、ようこそ！";
  firstImageTitle.textContent = "Why Bonzai?";
  secondImageTitle.textContent = "Our food";
  thirdImageTitle.textContent = "About Bonzai";
  content.classList.add("main-content-mid");
  titleContainer.classList.add("mid-section-title");
  welcome.classList.add("welcome");
  welcomeJap.classList.add("welcome-japanese");
  gallery.classList.add("gallery");
  firstImage.classList.add("grid-item");
  firstImageTextContainer.classList.add("grid-item");
  secondImage.classList.add("grid-item");
  secondImageTextContainer.classList.add("grid-item");
  thirdImage.classList.add("grid-item");
  thirdImageTextContainer.classList.add("grid-item");

  firstImageTextContainer.appendChild(firstImageTitle);
  firstImageTextContainer.appendChild(firstImageText);
  secondImageTextContainer.appendChild(secondImageTitle);
  secondImageTextContainer.appendChild(secondImageText);
  thirdImageTextContainer.appendChild(thirdImageTitle);
  thirdImageTextContainer.appendChild(thirdImageText);
  thirdImageTextContainer.appendChild(thirdImageTextTwo);

  titleContainer.appendChild(welcome);
  titleContainer.appendChild(welcomeJap);
  content.appendChild(titleContainer);
  content.appendChild(gallery);
  gallery.appendChild(firstImage);
  gallery.appendChild(firstImageTextContainer);
  gallery.appendChild(secondImage);
  gallery.appendChild(secondImageTextContainer);
  gallery.appendChild(thirdImage);
  gallery.appendChild(thirdImageTextContainer);

  return content;
}

function createTestimonies() {
  const testimonies = document.createElement("div");
  const testimony1 = document.createElement("div");
  const stars1 = createImage(stars, "five stars");
  const para1 = createParagraph(`"I dine in this restaurant quite often! 
    I visit this place regularly and love it everytime. 
    The meals are authentic and the price is not too expensive.
    I enjoy eating in this place and would recommend to anyone."`);
  const review1 = createParagraph(`- Clark Kent Reviewed on Google`);
  const testimony2 = document.createElement("div");
  const stars2 = createImage(stars, "five stars");
  const para2 =
    createParagraph(`"Authentic ramen from one of the best Japanese chefs in town!
    They also serve amazing Sushi dishes that melt in your mouth.
    The staff has always been friendly and the place has such a beautiful Japanese aesthetic."`);
  const review2 = createParagraph(`- Barry Allen Reviewed on Google`);
  const testimony3 = document.createElement("div");
  const stars3 = createImage(stars, "five stars");
  const para3 =
    createParagraph(`"I wholeheartedly recommend the Miso Ramen, such a classic ramen dish brought to an extraodinary level.
    Great work."`);
  const review3 = createParagraph(`- Bruce Wayne Reviewed on Google`);

  testimonies.classList.add("testimonies");
  testimony1.classList.add("testimony");
  para1.classList.add("paragraph");
  review1.classList.add("review");
  testimony2.classList.add("testimony");
  para2.classList.add("paragraph");
  review2.classList.add("review");
  testimony3.classList.add("testimony");
  para3.classList.add("paragraph");
  review3.classList.add("review");

  testimony1.appendChild(stars1);
  testimony1.appendChild(para1);
  testimony1.appendChild(review1);
  testimony2.appendChild(stars2);
  testimony2.appendChild(para2);
  testimony2.appendChild(review2);
  testimony3.appendChild(stars3);
  testimony3.appendChild(para3);
  testimony3.appendChild(review3);
  testimonies.append(testimony1);
  testimonies.append(testimony2);
  testimonies.append(testimony3);

  return testimonies;
}
export default function createHomePage() {
  const main = document.getElementById("main");
  main.appendChild(createHero());
  main.appendChild(createMid());
  main.appendChild(createTestimonies());
}
