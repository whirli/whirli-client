import BaseTransformer from '../../../BaseTransformer';
import WaitSpotInterface from '../../../Interfaces/waitspot/WaitSpot';
import WaitSpot from '../WaitSpot';
import UserInterface from '../../../Interfaces/user/User';
import ProductVariantInterface from '../../../Interfaces/product/ProductVariant';
export default class WaitSpotTransformer extends BaseTransformer {
    mapData(waitSpot: WaitSpotInterface): WaitSpot;
    includeUser(waitSpot: WaitSpotInterface): UserInterface | null;
    includeProductVariant(waitSpot: WaitSpotInterface): ProductVariantInterface | null;
}
