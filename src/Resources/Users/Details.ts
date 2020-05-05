import AbstractResource from '../AbstractResource';

/**
 * _Updating a user's details_
 *
 * `client.user.details.update();`
 */
export default class Details extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'member';
    }

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}',
    });
}
