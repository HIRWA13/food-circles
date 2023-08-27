
import { Restaurants } from './interfaces';
import { Hero } from './classes';
import { generateHero } from './utils'
import { genRestaurant } from './utils';

export const heroContainer = document.getElementById('hero') as HTMLElement;
export const restaurantsContainer = document.getElementById("restaurants") as HTMLElement;

export const restaurants: Restaurants[] = [
    {
        image: 'https://images.unsplash.com/photo-1593275513770-0566f717f3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        name: 'The Hot Pot',
        address: {
            street: '1234 Main St',
            zipCode: 12345,
            city: 'Kicukiro',
            country: 'Rwanda'
        },
        rating: 4.5,
        menu: ['Hot Pot', 'Sushi', 'Ramen', 'Dumplings'],
        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],
        contact: [787209830, 'iamhir@gmail.com']
    },
    {
        image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        name: 'The Delicious Spoon',
        address: {
            street: '1234 Main St',
            zipCode: 12345,
            city: 'Nyarugenge',
            country: 'Rwanda'
        },
        rating: 4.5,
        menu: ['Hot Pot--------1000 Rwf', 'Sushi ------- 5000 Rwf', 'Ramen-------- 20500 Rwf', 'Dumplings ------- 3500 Rwf'],
        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],
        contact: [789064536, 'iamhir@gmail.com']
    },
    {
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanglophone-direct.com%2Fap_img%2Frestaurant2.jpg&f=1&nofb=1&ipt=10acf44fb0a9d7480482a1ea8aa420d0d2139d198a06c7fea92ad10b64d420b5&ipo=images',
        name: `Peter's Kithcen`,
        address: {
            street: '1234 Main St',
            zipCode: 12345,
            city: 'Gasabo',
            country: 'Rwanda'
        },
        rating: 4.5,
        menu: ['Hot Pot--------1000 Rwf', 'Sushi ------- 5000 Rwf', 'Ramen-------- 20500 Rwf', 'Dumplings ------- 3500 Rwf'],
        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],
        contact: [7678756789, 'iamhir@gmail.com']
    },
    {
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F761345-restaurant-food-architecture-interior-design-room.jpg&f=1&nofb=1&ipt=0f51a3ac61eafcf2f3d66db066510720c6c26469bd4c65f8874b65d1ff853f7c&ipo=images',
        name: 'The Lux Resto',
        address: {
            street: '1234 Main St',
            zipCode: 12345,
            city: 'Musanze',
            country: 'Rwanda'
        },
        rating: 4.5,
        menu: ['Hot Pot--------1000 Rwf', 'Sushi ------- 5000 Rwf', 'Ramen-------- 20500 Rwf', 'Dumplings ------- 3500 Rwf'],
        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],
        contact: [7908768767, 'iamhir@gmail.com']
    }
]

genRestaurant(restaurants);

const hero= new Hero('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105989359-1561566296439gettyimages-492868234.jpg%3Fv%3D1561566362&f=1&nofb=1&ipt=fe45830be36e050e7b25ec0464a0dd9602055d1bb5ff94d0ff168f364d218e5d&ipo=images', '"Explore Culinary Delights: Indulge in Exquisite Flavors  Where Gastronomy Meets Artistry"');

generateHero(hero)