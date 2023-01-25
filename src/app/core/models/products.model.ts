export interface Product {
    id?:       string;
    name:     string;
    value:    number;
    quantity: number;
    image:    null;
}

export interface ResponseDeleteProduct {
    response: string;
}