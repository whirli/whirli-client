import WaccReferralInterface from '../../../Interfaces/referral/WaccReferral';
import BaseTransformer from '../../../BaseTransformer';
import WaccReferral from '../WaccReferral';
import UserInterface from '../../../Interfaces/user/User';
export default class WaccReferralTransformer extends BaseTransformer {
    mapData(waccReferral: WaccReferralInterface): WaccReferral;
    includeReferredUsers(waccReferral: WaccReferralInterface): Array<UserInterface>;
    includeUser(waccReferral: WaccReferralInterface): UserInterface | null;
}
