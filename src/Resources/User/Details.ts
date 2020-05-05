import AbstractResource from '../AbstractResource';

export default class UserDetails extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'member';
    }

    public update: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/{id}',
    });
}
