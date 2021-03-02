import BaseTransformer from '../../../BaseTransformer';
import WaitSpotInterface from '../../../Interfaces/waitspot/WaitSpot';
import WaitSpot from '../WaitSpot';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
import ProductVariantTransformer from '../../product/Transformers/ProductVariantTransformer';

export default class WaitSpotTransformer extends BaseTransformer {
    mapData(waitSpot: WaitSpotInterface): WaitSpot {
        return new WaitSpot({
            id: waitSpot.id,
            createdAt: waitSpot.createdAt,
            updatedAt: waitSpot.updatedAt,
            completedAt: waitSpot.completedAt,
            deletedAt: waitSpot.deletedAt,
            notifiedAt: waitSpot.notifiedAt,
            // Belongs to
            user: this.includeUser(waitSpot) || undefined,
            productVariant: this.includeProductVariant(waitSpot) || undefined,
        });
    }

    includeUser(waitSpot: WaitSpotInterface): UserInterface | null {
        return this.item(waitSpot, 'user', new UserTransformer());
    }

    includeProductVariant(waitSpot: WaitSpotInterface): ProductVariantInterface | null {
        return this.item(waitSpot, 'productVariant', new ProductVariantTransformer());
    }
}
