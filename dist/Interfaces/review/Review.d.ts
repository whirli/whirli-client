export default interface Review {
    id: string | null;
    rating: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId?: string | null;
    productVariantId?: string | null;
}
