import Product from '../Product';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductVariant from '../ProductVariant';
import Asset from '../../asset/Asset';
import ProductAssociation from '../../association/ProductAssociation';
import ProductVariantTransformer from './ProductVariantTransformer';
import AssetTransformer from '../../asset/Transformers/AssetTransformer';
import ProductAssociationTransformer from '../../association/Transformers/ProductAssociationTransformer';
import BaseTransformer from '../../../BaseTransformer';
import ProductAgeRangeTransformer from '../../association/Transformers/ProductAgeRangeTransformer';
import ProductAgeRange from '../../association/ProductAgeRange';
import ProductSkill from '../../association/ProductSkill';
import ProductSkillTransformer from '../../association/Transformers/ProductSkillTransformer';

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
            slug: product.slug,
            status: product.status,
            stock: product.stock,
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
            resourceType: product.resourceType,
            totalOrders: product.totalOrders,
            totalReturnedWriteOff: product.totalReturnedWriteOff,
            totalReturnedNotWriteOff: product.totalReturnedNotWriteOff,
            totalSafetyStock: product.totalSafetyStock,
            totalSold: product.totalSold,
            totalStockWithCustomer: product.totalStockWithCustomer,
            totalStockQueued: product.totalStockQueued,
            totalStockInReturn: product.totalStockInReturn,
            totalStockWithCustomerOrDesignatedForReturn: product.totalStockWithCustomerOrDesignatedForReturn,
            totalStockUnits: product.totalStockUnits,
            gtin: product.gtin,
            optimumAgeId: product.optimumAgeId,
            primarySkillId: product.primarySkillId,
            discountedValue: product.discountedValue,
            // belongs to
            optimumAge: this.includeOptimumAge(product),
            primarySkill: this.includePrimarySkill(product),
            // has many
            assets: this.includeAssets(product),
            productAssociations: this.includeProductAssociations(product),
            productVariants: this.includeProductVariants(product),
            relatedProducts: this.includeRelatedProducts(product),
        });
    }

    includeOptimumAge(product: ProductInterface): ProductAgeRange | null {
        return this.item(product, 'optimumAge', new ProductAgeRangeTransformer());
    }

    includePrimarySkill(product: ProductInterface): ProductSkill | null {
        return this.item(product, 'primarySkill', new ProductSkillTransformer());
    }

    includeAssets(product: ProductInterface): Array<Asset> {
        return this.collection(product, 'assets', new AssetTransformer());
    }

    includeProductAssociations(product: ProductInterface): Array<ProductAssociation> {
        return this.collection(product, 'productAssociations', new ProductAssociationTransformer());
    }

    includeProductVariants(product: ProductInterface): Array<ProductVariant> {
        return this.collection(product, 'productVariants', new ProductVariantTransformer());
    }

    includeRelatedProducts(product: ProductInterface): Array<Product> {
        return this.collection(product, 'relatedProducts', new ProductTransformer());
    }
}
