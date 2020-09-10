import BaseTransformer from '../../../BaseTransformer';
import PurchaseStockInterface from '../../../Interfaces/stock/PurchaseStock';
import PurchaseStock from '../PurchaseStock';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';

export default class PurchaseStockTransformer extends BaseTransformer {
    mapData(purchaseStock: PurchaseStockInterface): PurchaseStock {
        return new PurchaseStock({
            id: purchaseStock.id,
            createdAt: purchaseStock.createdAt,
            updatedAt: purchaseStock.updatedAt,
            statusId: purchaseStock.statusId,
            // Belongs to
            productVariant: this.includeProductVariant(purchaseStock) || undefined,
            user: this.includeUser(purchaseStock) || undefined,
            // Accessors
            availableForOrder: purchaseStock.availableForOrder,
            daysToKeep: purchaseStock.daysToKeep,
            orderDate: purchaseStock.orderDate,
            daysHeld: purchaseStock.daysHeld,
            keepPrice: purchaseStock.keepPrice,
        });
    }

    includeProductVariant(purchaseStock: PurchaseStockInterface): ProductVariantInterface | null {
        return this.item(purchaseStock, 'productVariant', new ProductVariantTransformer());
    }

    includeUser(purchaseStock: PurchaseStockInterface): UserInterface | null {
        return this.item(purchaseStock, 'user', new UserTransformer());
    }
}
