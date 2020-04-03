import { BasketLine } from './BasketLine';
export interface APIBasket {
    id?: string;
    tokens_total?: number;
    created_at?: Date;
    updated_at?: Date;
    basket_lines?: Array<BasketLine>;
}
export interface Basket {
    id?: string;
    tokensTotal?: number;
    createdAt?: Date;
    updatedAt?: Date;
    basketLines?: Array<BasketLine>;
}
