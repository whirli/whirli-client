import ReferredUser from '../ReferredUser';
import ReferredUserInterface from '../../../Interfaces/referral/ReferredUser';
import BaseTransformer from '../../../BaseTransformer';
export default class ReferredUsersTransformer extends BaseTransformer {
    mapData(referredUser: ReferredUserInterface): ReferredUser;
}
