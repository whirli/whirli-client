import ReferredUserInterface from '../../Interfaces/referral/ReferredUser';

export default class ReferredUser {
    constructor(parameters: ReferredUserInterface) {
        Object.assign(this, parameters);
    }
}
