
export interface Restaurants {
    image: string;
    name: string;
    address: {
        street: string;
        zipCode: number;
        city: string;
        country: string;
    };
    rating: number;
    menu: string[];
    reviews: string[];
    contact: [number, string];
}