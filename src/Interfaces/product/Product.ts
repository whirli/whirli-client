import ProductVariant from './ProductVariant';
import Asset from '../asset/Asset';
import ProductAssociation from '../association/ProductAssociation';
import WaitSpot from '../waitspot/WaitSpot';

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
    recommendedAge?: number;
    metaDescription?: string;
    shortDescription?: string;
    resourceType?: string;
    totalOrders?: number;
    totalReturnedDamaged?: number;
    totalReturnedUndamaged?: number;
    totalSafetyStock?: number;
    totalSold?: number;
    totalStockWithCustomer?: number;
    totalStockQueued?: number;
    totalStockInReturn?: number;
    totalStockWithCustomerOrDesignatedForReturn?: number;
    totalStockUnits?: number;
    gtin?: string;
    // has many
    assets?: Array<Asset>;
    productAssociations?: Array<ProductAssociation>;
    productVariants?: Array<ProductVariant>;
    relatedProducts?: Array<Product>;
    waitSpots?: Array<WaitSpot>;
}
