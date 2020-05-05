import AbstractResource from '../AbstractResource';

/**
 * _Used for creating a user._
 *
 * `$whirli.user.create();`
 */
export default class Create extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'guest';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });
}
