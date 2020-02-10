import ProductVariant from './ProductVariant';

export default interface Product {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name?: string;
    brand?: string;
    tokens?: number;
    features?: string;
    pageTitle?: string;
    popularity?: string;
    description?: string;
    recentRank?: string;
    manufacturer?: string;
    metaKeywords?: string;
    recommendedAge?: string;
    metaDescription?: string;
    shortDescription?: string;
    // has many
    variants?: ProductVariant[];
}
