import BaseTransformer from '../../../BaseTransformer';
import WaitSpotInterface from '../../../Interfaces/waitspot/WaitSpot';
import WaitSpot from '../WaitSpot';
import UserInterface from '../../../Interfaces/user/User';
import UserTransformer from '../../user/Transformers/UserTransformer';
import ProductInterface from '../../../Interfaces/product/Product';
import ProductTransformer from '../../product/Transformers/ProductTransformer';

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
            product: this.includeProduct(waitSpot) || undefined,
        });
    }

    includeUser(waitSpot: WaitSpotInterface): UserInterface | null {
        return this.item(waitSpot, 'user', new UserTransformer());
    }

    includeProduct(waitSpot: WaitSpotInterface): ProductInterface | null {
        return this.item(waitSpot, 'product', new ProductTransformer());
    }
}
