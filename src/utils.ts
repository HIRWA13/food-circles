import { Hero } from "./classes";
import { heroContainer } from "./index";

export const generateHero = (obj:Hero) => {
    const title = document.createElement('h3');
    title.setAttribute('class', 'hero-title')
    title.innerText = obj.headline;
    title.style.position = 'absolute';
    title.style.top = '50%';
    title.style.right = '30%';
    title.style.left = '30%';
    const img = document.createElement('img');
    img.src = obj.image;
    heroContainer.appendChild(img);
    heroContainer.appendChild(title);
}

export const genRestaurant = () => {
    
}