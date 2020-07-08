import ReferralInterface from '../../Interfaces/referral/Referral';

export default class Referral {
    constructor(parameters: ReferralInterface) {
        Object.assign(this, parameters);
    }
}
