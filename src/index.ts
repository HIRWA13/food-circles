// export interface Restaurant {
//     image: string;
//     name: string;
//     address: string;
//     rating: number;
//     menu: string[];
//     reviews: string[];
//     contact: [number, string];
// }

import { Restaurants } from './interfaces';
import { Hero } from './classes';
import { generateHero } from './utils'

export const heroContainer = document.getElementById('hero') as HTMLElement;

const restaurants: Restaurants[] = [
    {
        image: 'https://images.unsplash.com/photo-1593275513770-0566f717f3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        name: 'The Hot Pot',
        address: {
            street: '1234 Main St',
            zipCode: 12345,
            city: 'Hawaii',
            country: 'USA'
        },
        rating: 4.5,
        menu: ['Hot Pot', 'Sushi', 'Ramen', 'Dumplings'],
        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],
        contact: [1234567890, 'iamhir@gmail.com']
    },
    {
        image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        name: 'The Hot Pot',
        address: {
            street: '1234 Main St',
            zipCode: 12345,
            city: 'Hawaii',
            country: 'USA'
        },
        rating: 4.5,
        menu: ['Hot Pot', 'Sushi', 'Ramen', 'Dumplings'],
        reviews: ['Great food!', 'Great service!', 'Great atmosphere!'],
        contact: [1234567890, 'iamhir@gmail.com']
    },
]

const hero= new Hero('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105989359-1561566296439gettyimages-492868234.jpg%3Fv%3D1561566362&f=1&nofb=1&ipt=fe45830be36e050e7b25ec0464a0dd9602055d1bb5ff94d0ff168f364d218e5d&ipo=images', '"Explore Culinary Delights: Indulge in Exquisite Flavors  Where Gastronomy Meets Artistry"');

generateHero(hero)