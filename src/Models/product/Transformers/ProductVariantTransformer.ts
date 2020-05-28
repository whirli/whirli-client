import ProductVariant from '../ProductVariant';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import Product from '../Product';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ProductVariantTransformer extends BaseTransformer {
    /**
     * Map an productVariant response
     *
     * @param productVariant
     */
    mapData(productVariant: ProductVariantInterface): ProductVariant {
        return new ProductVariant({
            id: productVariant.id,
            createdAt: productVariant.createdAt,
            updatedAt: productVariant.updatedAt,
            sku: productVariant.sku,
            options: productVariant.options,
            price: productVariant.price,
            unitQty: productVariant.unitQty,
            minQty: productVariant.minQty,
            minBatch: productVariant.minBatch,
            maxQty: productVariant.maxQty,
            stock: productVariant.stock,
            incoming: productVariant.incoming,
            backorder: productVariant.backorder,
            requiresShipping: productVariant.requiresShipping,
            weightValue: productVariant.weightValue,
            weightUnit: productVariant.weightUnit,
            heightValue: productVariant.heightValue,
            heightUnit: productVariant.heightUnit,
            widthValue: productVariant.widthValue,
            widthUnit: productVariant.widthUnit,
            depthValue: productVariant.depthValue,
            depthUnit: productVariant.depthUnit,
            volumeValue: productVariant.volumeValue,
            volumeUnit: productVariant.volumeUnit,
            taxId: productVariant.taxId,
            groupPricing: productVariant.groupPricing,
            boxSizeId: productVariant.boxSizeId,
            numberOfPieces: productVariant.numberOfPieces,
            batteriesRequired: productVariant.batteriesRequired,
            supplierSku: productVariant.supplierSku,
            supplierTradePrice: productVariant.supplierTradePrice,
            supplierTokenMargin: productVariant.supplierTokenMargin,
            // belongs to
            product: this.includeProduct(productVariant),
        });
    }

    includeProduct(productVariant: ProductVariantInterface): Product | null {
        return this.item(productVariant, 'product', new ProductTransformer());
    }
}
