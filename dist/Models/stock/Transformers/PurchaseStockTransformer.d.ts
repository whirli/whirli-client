import BaseTransformer from '../../../BaseTransformer';
import PurchaseStockInterface from '../../../Interfaces/stock/PurchaseStock';
import PurchaseStock from '../PurchaseStock';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import UserInterface from '../../../Interfaces/user/User';
export default class PurchaseStockTransformer extends BaseTransformer {
    mapData(purchaseStock: PurchaseStockInterface): PurchaseStock;
    includeProductVariant(purchaseStock: PurchaseStockInterface): ProductVariantInterface | null;
    includeUser(purchaseStock: PurchaseStockInterface): UserInterface | null;
}
