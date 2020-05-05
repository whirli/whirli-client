import ProductManufacturer from '../ProductManufacturer';
import ProductManufacturerInterface from '../../../Interfaces/product/ProductManufacturer';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductAssociationInterface from '../../../Interfaces/product/ProductAssociation';
import BaseTransformer from '../../../BaseTransformer';
export default class ProductManufacturerTransformer extends BaseTransformer {
    mapData(productManufacturer: ProductManufacturerInterface): ProductManufacturer;
    includeAssociated(productManufacturer: ProductManufacturerInterface): ProductAssociationInterface | null;
    includeProducts(productManufacturer: ProductManufacturerInterface): Array<ProductInterface>;
}
