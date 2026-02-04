export  interface CartItem {
    id: string;
    productId: string;
    name: string;
    size: string;
    dough: string;
    toppings: string[];
    quantity: number;
    price: number;
    total: number;
    img: string;
}