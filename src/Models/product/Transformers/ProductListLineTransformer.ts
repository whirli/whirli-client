import BaseTransformer from '../../../BaseTransformer';
import ProductListLineInterface from '../../../Interfaces/product/ProductListLine';
import ProductListLine from '../ProductListLine';
import ProductListInterface from '../../../Interfaces/product/ProductList';
import ProductListTransformer from './ProductListTransformer';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import ProductVariantTransformer from './ProductVariantTransformer';

export default class ProductListLineTransformer extends BaseTransformer {
    mapData(productListLine: ProductListLineInterface): ProductListLine {
        return new ProductListLine({
            id: productListLine.id,
            createdAt: productListLine.createdAt,
            updatedAt: productListLine.updatedAt,
            gifted: productListLine.gifted,
            // Belongs to
            productList: this.includeProductList(productListLine) || undefined,
            productVariant: this.includeProductVariant(productListLine) || undefined,
        });
    }

    includeProductList(productListLine: ProductListLineInterface): ProductListInterface | null {
        return this.item(productListLine, 'productList', new ProductListTransformer());
    }

    includeProductVariant(productListLine: ProductListLineInterface): ProductVariantInterface | null {
        return this.item(productListLine, 'productVariant', new ProductVariantTransformer());
    }
}
