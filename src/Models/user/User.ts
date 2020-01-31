import UserInterface from '../../Interfaces/user/User';

export default class User {
    constructor(parameters: UserInterface) {
        Object.assign(this, parameters);
    }
}
