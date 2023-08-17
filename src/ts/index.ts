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