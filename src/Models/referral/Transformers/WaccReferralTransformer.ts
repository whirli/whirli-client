import WaccReferralInterface from '../../../Interfaces/referral/WaccReferral';
import UsersTransformer from '../../user/Transformers/UserTransformer';
import BaseTransformer from '../../../BaseTransformer';
import WaccReferral from '../WaccReferral';
import UserInterface from '../../../Interfaces/user/User';

export default class WaccReferralTransformer extends BaseTransformer {
    /**
     * Map an active referral response
     *
     * @param waccReferral
     */
    mapData(waccReferral: WaccReferralInterface): WaccReferral {
        return new WaccReferral({
            id: waccReferral.id,
            code: waccReferral.code,
            createdAt: waccReferral.createdAt,
            redemptions: waccReferral.redemptions,
            referredUsers: this.includeReferredUsers(waccReferral),
            user: this.includeUser(waccReferral),
        });
    }

    includeReferredUsers(waccReferral: WaccReferralInterface): Array<UserInterface> {
        return this.collection(waccReferral, 'referred_users', new UsersTransformer());
    }

    includeUser(waccReferral: WaccReferralInterface): UserInterface | null {
        return this.item(waccReferral, 'user', new UsersTransformer());
    }
}
