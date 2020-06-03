import ProductVariant from './ProductVariant';
import Asset from '../asset/Asset';
import ProductAssociation from '../association/ProductAssociation';

export default interface Product {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    name?: string;
    slug?: string;
    status?: number;
    stock?: number;
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
    resourceType?: string;
    totalOrders?: number;
    totalReturnedDamaged?: number;
    totalReturnedUndamaged?: number;
    totalSafetyStock?: number;
    totalSold?: number;
    totalStockUnits?: number;
    totalStockWithCustomer?: number;
    // has many
    assets?: Array<Asset>;
    productAssociations?: Array<ProductAssociation>;
    productVariants?: Array<ProductVariant>;
    relatedProducts?: Array<Product>;
}
