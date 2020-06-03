import Product from '../product/Product';
import ProductAgeRange from './ProductAgeRange';
import ProductBrand from './ProductBrand';
import ProductCategory from './ProductCategory';
import ProductCollection from './ProductCollection';
import ProductHazard from './ProductHazard';
import ProductManufacturer from './ProductManufacturer';
export default interface ProductAssociation {
    id?: string;
    name?: string;
    internalName?: string;
    active?: boolean;
    position?: number;
    associationClass?: string;
    productsCount?: number;
    publishedAt?: Date;
    association?: ProductBrand | ProductCollection | ProductAgeRange | ProductCategory | ProductHazard | ProductManufacturer;
    products?: Array<Product>;
}
