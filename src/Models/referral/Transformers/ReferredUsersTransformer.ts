import ReferredUser from '../ReferredUser';
import ReferredUserInterface from '../../../Interfaces/referral/ReferredUser';
import BaseTransformer from '../../../BaseTransformer';

export default class ReferredUsersTransformer extends BaseTransformer {
    /**
     * Map a referred user response
     *
     * @param referredUser
     */
    mapData(referredUser: ReferredUserInterface): ReferredUser {
        return new ReferredUser({
            firstname: referredUser.firstname,
        });
    }
}
