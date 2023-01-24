import { Invoice } from "./invoice.model";
import { Product } from "./products.model";

export interface ShoppingCart {
    id:       string;
    itemsCar: ItemsCar[];
    invoice:  Invoice | null;
    status:   null | string;
}

export interface ItemsCar {
    id:         string;
    quantity:   number;
    product:    Product;
    importItem: number;
}

export interface ResponseIDShoppingCart {
    idShoppingCart: string
}