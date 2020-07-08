import Referral from '../Referral';
import ReferralInterface from '../../../Interfaces/referral/Referral';
import ReferredUser from '../../../Interfaces/referral/ReferredUser';
import ReferredUsersTransformer from './ReferredUsersTransformer';
import BaseTransformer from '../../../BaseTransformer';

export default class ReferralTransformer extends BaseTransformer {
    /**
     * Map an active referral response
     *
     * @param referral
     */
    mapData(referral: ReferralInterface): Referral {
        return new Referral({
            code: referral.code,
            totalEarned: referral.totalEarned,
            referredUsers: this.includeReferredUsers(referral),
            userBalance: referral.userBalance,
        });
    }

    includeReferredUsers(referral: ReferralInterface): Array<ReferredUser> {
        return this.collection(referral, 'referred_users', new ReferredUsersTransformer());
    }
}
