import ProductVariant from '../../Models/product/ProductVariant';
export interface APIBasketLine {
    id?: string;
    quantity?: number;
    created_at?: Date;
    updated_at?: Date;
    product_variant?: ProductVariant | null;
}
export interface BasketLine {
    id?: string;
    quantity?: number;
    createdAt?: Date;
    updatedAt?: Date;
    productVariant?: ProductVariant | null;
}
