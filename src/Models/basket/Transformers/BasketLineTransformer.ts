import BasketLine from '../BasketLine';
import ProductVariant from '../../product/ProductVariant';
import { APIBasketLine as APIBasketLineInterface } from '../../../Interfaces/basket/BasketLine';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class BasketLineTransformer extends BaseTransformer {
    /**
     * Map basket line response
     *
     * @param basketLine
     */
    mapData(basketLine: APIBasketLineInterface): BasketLine {
        return new BasketLine({
            id: basketLine.id,
            quantity: basketLine.quantity,
            createdAt: basketLine.created_at,
            updatedAt: basketLine.updated_at,
            productVariant: this.includeProductVariant(basketLine),
        });
    }
    includeProductVariant(basketLine: APIBasketLineInterface): ProductVariant {
        return this.collection(basketLine, 'product_variant', new ProductVariantTransformer());
    }
}
