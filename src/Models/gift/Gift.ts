import GiftInterface from '../../Interfaces/gift/Gift';

export default class Gift {
    constructor(parameters: GiftInterface) {
        Object.assign(this, parameters);
    }
}
