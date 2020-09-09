export default interface ShippingAddon {
    id?: string;
    name?: string;
    description?: string;
    originalCost?: number;
    orderCheckoutCost?: number;
    typeId?: number;
    delay?: number;
    expectedDeliveryDate?: Date;
}
