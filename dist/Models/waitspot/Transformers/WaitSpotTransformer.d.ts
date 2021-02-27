import BaseTransformer from '../../../BaseTransformer';
import WaitSpotInterface from '../../../Interfaces/waitspot/WaitSpot';
import WaitSpot from '../WaitSpot';
import UserInterface from '../../../Interfaces/user/User';
import ProductInterface from '../../../Interfaces/product/Product';
export default class WaitSpotTransformer extends BaseTransformer {
    mapData(waitSpot: WaitSpotInterface): WaitSpot;
    includeUser(waitSpot: WaitSpotInterface): UserInterface | null;
    includeProduct(waitSpot: WaitSpotInterface): ProductInterface | null;
}
