import WaccReferralInterface from '../../Interfaces/referral/WaccReferral';

export default class WaccReferral {
    constructor(parameters: WaccReferralInterface) {
        Object.assign(this, parameters);
    }
}
