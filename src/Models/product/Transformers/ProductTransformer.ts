import Product from '../Product';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductTransformer extends BaseTransformer {
    /**
     * Map an product response
     *
     * @param product
     */
    mapData(product: ProductInterface): Product {
        return new Product({
            id: product.id,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
            name: product.name,
            brand: product.brand,
            tokens: product.tokens,
            features: product.features,
            pageTitle: product.pageTitle,
            popularity: product.popularity,
            description: product.description,
            recentRank: product.recentRank,
            manufacturer: product.manufacturer,
            metaKeywords: product.metaKeywords,
            recommendedAge: product.recommendedAge,
            metaDescription: product.metaDescription,
            shortDescription: product.shortDescription,
            // has many
            variants: this.includeProductVariants(product),
        });
    }

    includeProductVariants(product: ProductInterface): ProductVariantInterface[] {
        return this.collection(product, 'variants', new ProductVariantTransformer());
    }
}
