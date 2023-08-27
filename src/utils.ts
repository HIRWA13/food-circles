import { Hero } from "./classes";
import { heroContainer, restaurantsContainer } from "./index";
import { restaurants } from "./index";
import { Restaurants } from "./interfaces";

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

export const genRestaurant = (restaurants: Restaurants[]) => {
   for(const item of restaurants) {
    const rest = document.createElement('div');
    rest.setAttribute('class', 'rest-container');
    const restHero = document.createElement('div');
    restHero.setAttribute('class', 'rest-hero');
    const img = document.createElement('img')
    img.src = item.image;
    img.style.width = '100%';
    img.style.height = '100%';
    restHero.appendChild(img);
    rest.appendChild(restHero);
    restaurantsContainer.appendChild(rest)
    const restaurantDescription = document.createElement('div')
    restaurantDescription.setAttribute('class', 'restaurant-description');
    const restaurantName = document.createElement('h1');
    restaurantName.setAttribute('class', 'rest-name')
    const restaurantLocation = document.createElement('p');
    restaurantLocation.setAttribute('class', 'rest-location');
    const star = document.createElement('p');
    star.setAttribute('class', 'star');
    const restaurantRating = document.createElement('p');
    const mail = document.createElement('p');
    mail.setAttribute('class', 'rest-email');
    const phone = document.createElement('p');
    phone.setAttribute('class','rest-phone')
    const bookBtn = document.createElement('button');
    bookBtn.setAttribute('class', 'book-btn');
    const viewMenu = document.createElement('button');
    const nameRating = document.createElement('div');
    nameRating.setAttribute('class', 'name-rating');
    const starRating = document.createElement('div');
    starRating.setAttribute('class', 'star-rating');
    starRating.appendChild(star);
    starRating.appendChild(restaurantRating);
    nameRating.appendChild(restaurantName);
    nameRating.appendChild(starRating);
    viewMenu.setAttribute('class', 'view-menu');
    restaurantRating.textContent = item.rating.toString();
    restaurantLocation.setAttribute('class', 'restaurant-location');
    star.textContent = '⭐';
    restaurantName.textContent = item.name;
    mail.textContent = '✉ ' + item.contact[1];
    phone.textContent = '☎ ' + '250' + item.contact[0].toString();
    restaurantLocation.textContent = '📍' + item.address.city + ', ' + ' ' + item.address.country
    bookBtn.textContent = 'Book a Table';
    viewMenu.textContent = 'View Menu';
    restaurantDescription.appendChild(nameRating);
    restaurantDescription.appendChild(mail);
    restaurantDescription.appendChild(phone);
    restaurantDescription.appendChild(restaurantLocation);
    restaurantDescription.appendChild(bookBtn);
    restaurantDescription.appendChild(viewMenu);
    restaurantDescription.setAttribute('class', 'restaurant-description');
    rest.appendChild(restaurantDescription);
   }
}