import ProductVariant from './ProductVariant';

export default class Product {
    constructor(
        id?: string,
        createdAt?: Date,
        updatedAt?: Date,
        name?: string,
        brand?: string,
        tokens?: number,
        features?: string,
        pageTitle?: string,
        popularity?: string,
        description?: string,
        recentRank?: string,
        manufacturer?: string,
        metaKeywords?: string,
        recommendedAge?: string,
        metaDescription?: string,
        shortDescription?: string,
        // has many
        variants?: ProductVariant[],
    ) {
        Object.assign(this, {
            id,
            createdAt,
            updatedAt,
            name,
            brand,
            tokens,
            features,
            pageTitle,
            popularity,
            description,
            recentRank,
            manufacturer,
            metaKeywords,
            recommendedAge,
            metaDescription,
            shortDescription,
            // has many
            variants,
        });
    }
}
