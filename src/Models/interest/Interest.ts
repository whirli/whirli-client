import InterestInterface from '../../Interfaces/interest/Interest';

export default class Interest {
    constructor(parameters: InterestInterface) {
        Object.assign(this, parameters);
    }
}
