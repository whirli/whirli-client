import Product from '../Product';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import AssetInterface from '../../../Interfaces/asset/Asset';
import ProductAssociationInterface from '../../../Interfaces/association/ProductAssociation';
import ProductVariantTransformer from './ProductVariantTransformer';
import AssetTransformer from '../../asset/Transformers/AssetTransformer';
import ProductAssociationTransformer from '../../association/Transformers/ProductAssociationTransformer';
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
            publishedAt: product.publishedAt,
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
            assets: this.includeAssets(product),
            productAssociations: this.includeProductAssociations(product),
            productVariants: this.includeProductVariants(product),
            relatedProducts: this.includeRelatedProducts(product),
        });
    }

    includeAssets(product: ProductInterface): AssetInterface[] {
        return this.collection(product, 'assets', new AssetTransformer());
    }

    includeProductAssociations(product: ProductInterface): ProductAssociationInterface[] {
        return this.collection(product, 'productAssociations', new ProductAssociationTransformer());
    }

    includeProductVariants(product: ProductInterface): ProductVariantInterface[] {
        return this.collection(product, 'productVariants', new ProductVariantTransformer());
    }

    includeRelatedProducts(product: ProductInterface): ProductInterface[] {
        return this.collection(product, 'relatedProducts', new ProductTransformer());
    }
}
