import { createImage, createParagraph } from "./elements.js";
import map from "./assets/map.JPG";

function createContactContent() {
  const content = document.createElement("div");
  content.classList.add("contact-content");
  const title = document.createElement("h2");
  title.textContent = "Where to find us!";
  content.appendChild(title);
  const phoneContainer = document.createElement("div");
  const phone = createParagraph("123 456 789");
  const phoneIcon = document.createElement("i");
  phoneContainer.classList.add("telephone-container");
  phoneIcon.classList.add("bi", "bi-telephone-fill");
  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phone);

  const addressContainer = document.createElement("div");
  const address = createParagraph("398-340 W 46th St, New York, NY 10036, USA");
  const addressIcon = document.createElement("i");
  addressContainer.classList.add("address-container");
  addressIcon.classList.add("bi", "bi-geo-alt-fill");
  addressContainer.appendChild(addressIcon);
  addressContainer.appendChild(address);

  const mapContainer = document.createElement("div");
  const mapImage = createImage(map, "restaurant location on google map");
  mapContainer.classList.add("map-container");
  mapImage.classList.add("map");
  mapContainer.appendChild(mapImage);

  content.appendChild(phoneContainer);
  content.appendChild(addressContainer);
  content.appendChild(mapContainer);

  return content;
}

export default function createContactPage() {
  const main = document.getElementById("main");
  main.appendChild(createContactContent());
}
