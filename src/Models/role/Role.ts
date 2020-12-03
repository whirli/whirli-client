import RoleInterface from '../../Interfaces/role/Role';

export default class Role {
    constructor(parameters: RoleInterface) {
        Object.assign(this, parameters);
    }
}
