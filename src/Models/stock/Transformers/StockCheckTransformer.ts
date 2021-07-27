import BaseTransformer from '../../../BaseTransformer';
import StockCheckInterface from '../../../Interfaces/stock/StockCheck';
import StockCheck from '../StockCheck';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';

export default class StockCheckTransformer extends BaseTransformer {
    mapData(stockCheck: StockCheckInterface): StockCheck {
        return new StockCheck({
            id: stockCheck.id,
            user: this.includeUser(stockCheck),
            productVariant: this.includeProductVariant(stockCheck),
            previousTotal: stockCheck.previousTotal,
            verifiedTotal: stockCheck.verifiedTotal,
            checkedAt: stockCheck.checkedAt,
            createdAt: stockCheck.createdAt,
            updatedAt: stockCheck.updatedAt,
        });
    }

    includeUser(stockCheck: StockCheckInterface): UserInterface | null {
        return this.item(stockCheck, 'user', new UserTransformer());
    }

    includeProductVariant(stockCheck: StockCheckInterface): ProductVariantInterface | null {
        return this.item(stockCheck, 'productVariant', new ProductVariantTransformer());
    }
}
