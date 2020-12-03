import BaseTransformer from '../../../BaseTransformer';
import RoleInterface from '../../../Interfaces/role/Role';
import Role from '../Role';
export default class RoleTransformer extends BaseTransformer {
    mapData(role: RoleInterface): Role;
}
