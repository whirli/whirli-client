import Password from '../Password';
import { APIPassword as APIPasswordInterface } from '../../../Interfaces/password/Password';
import BaseTransformer from '../../../BaseTransformer';

export default class PasswordTransformer extends BaseTransformer {
    /**
     * Map password response
     *
     * @param password
     */
    mapData(password: APIPasswordInterface): Password {
        return new Password({
            httpCode: password.http_code,
            success: password.success,
            errors: password.errors,
            messages: password.messages,
            meta: password.meta,
            data: password.data,
        });
    }
}
