import ProductVariant from '../ProductVariant';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import Product from '../Product';
import ProductTransformer from '../../product/Transformers/ProductTransformer';
import BaseTransformer from '../../../BaseTransformer';
import { BasketLine as BasketLineInterface } from '../../../Interfaces/basket/BasketLine';
import BasketLineTransformer from '../../basket/Transformers/BasketLineTransformer';
import OrderLineInterface from '../../../Interfaces/order/OrderLine';
import OrderLineTransformer from '../../order/Transformers/OrderLineTransformer';
import StockInterface from '../../../Interfaces/stock/Stock';
import StockTransformer from '../../stock/Transformers/StockTransformer';
import ReviewInterface from '../../../Interfaces/review/Review';
import ReviewTransformer from '../../review/Transformers/ReviewTransformer';

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
            otherHazards: productVariant.otherHazards,
            supplierName: productVariant.supplierName,
            aggregateRating: productVariant.aggregateRating,
            // belongs to
            product: this.includeProduct(productVariant),
            // has many
            basketLines: this.includeBasketLines(productVariant),
            orderLines: this.includeOrderLines(productVariant),
            stockObjects: this.includeStockObjects(productVariant),
            reviews: this.includeReviews(productVariant),
            accountedForReviews: this.includeAccountedForReviews(productVariant),
            // accessor
            totalSafetyStock: productVariant.totalSafetyStock,
            totalStockWithCustomer: productVariant.totalStockWithCustomer,
            totalStockUnits: productVariant.totalStockUnits,
            totalOrders: productVariant.totalOrders,
            totalReturnedDamaged: productVariant.totalReturnedDamaged,
            totalSold: productVariant.totalSold,
            totalReviews: productVariant.totalReviews,
            ratings: productVariant.ratings,
        });
    }

    includeProduct(productVariant: ProductVariantInterface): Product | null {
        return this.item(productVariant, 'product', new ProductTransformer());
    }

    includeBasketLines(productVariant: ProductVariantInterface): Array<BasketLineInterface> | undefined {
        return this.collection(productVariant, 'basketLines', new BasketLineTransformer());
    }

    includeOrderLines(productVariant: ProductVariantInterface): Array<OrderLineInterface> | undefined {
        return this.collection(productVariant, 'orderLines', new OrderLineTransformer());
    }

    includeStockObjects(productVariant: ProductVariantInterface): Array<StockInterface> | undefined {
        return this.collection(productVariant, 'stockObjects', new StockTransformer());
    }

    includeReviews(productVariant: ProductVariantInterface): Array<ReviewInterface> | undefined {
        return this.collection(productVariant, 'reviews', new ReviewTransformer());
    }

    includeAccountedForReviews(productVariant: ProductVariantInterface): Array<ReviewInterface> | undefined {
        return this.collection(productVariant, 'accountedForReviews', new ReviewTransformer());
    }
}
