import { Product } from "./products.model";

export interface Invoice {
    id:       null;
    total:    number;
    date:     Date;
    products: Product[];
}


export interface ResponseCreateIdInvoice {
    idInvoice: string;
}
