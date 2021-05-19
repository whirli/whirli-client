export interface BasketAddLineRequest {
    productVariantId: string;
    quantity: number;
    basketId?: string;
}

export interface BasketUpdateLineRequest {
    quantity: number;
}
