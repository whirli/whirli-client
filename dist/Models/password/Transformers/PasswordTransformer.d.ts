import Password from '../Password';
import { APIPassword as APIPasswordInterface } from '../../../Interfaces/password/Password';
import BaseTransformer from '../../../BaseTransformer';
export default class PasswordTransformer extends BaseTransformer {
    mapData(password: APIPasswordInterface): Password;
}
