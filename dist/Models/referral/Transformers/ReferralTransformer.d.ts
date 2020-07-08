import Referral from '../Referral';
import ReferralInterface from '../../../Interfaces/referral/Referral';
import ReferredUser from '../../../Interfaces/referral/ReferredUser';
import BaseTransformer from '../../../BaseTransformer';
export default class ReferralTransformer extends BaseTransformer {
    mapData(referral: ReferralInterface): Referral;
    includeReferredUsers(referral: ReferralInterface): Array<ReferredUser>;
}
