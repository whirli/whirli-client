import ChildProfileInterface from '../../Interfaces/user/ChildProfile';

export default class ChildProfile {
    constructor(parameters: ChildProfileInterface) {
        Object.assign(this, parameters);
    }
}
