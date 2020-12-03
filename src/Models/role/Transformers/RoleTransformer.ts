import BaseTransformer from '../../../BaseTransformer';
import RoleInterface from '../../../Interfaces/role/Role';
import Role from '../Role';

export default class RoleTransformer extends BaseTransformer {
    mapData(role: RoleInterface): Role {
        return new Role({
            id: role.id,
            createdAt: role.createdAt,
            updatedAt: role.updatedAt,
            name: role.name,
        });
    }
}
