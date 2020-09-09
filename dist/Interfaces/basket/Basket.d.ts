import { BasketLine } from './BasketLine';
import GiftBasket from '../gift/GiftBasket';
import Checkout from '../checkout/Checkout';
export interface APIBasket {
    id?: string;
    total_tokens?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    basket_lines?: Array<BasketLine>;
    gift_basket?: GiftBasket;
    checkout?: Checkout;
}
export interface Basket {
    id?: string;
    totalTokens?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    basketLines?: Array<BasketLine>;
    giftBasket?: GiftBasket;
    checkout?: Checkout;
}
