import AbstractResource from '../AbstractResource';

export default class Users extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'guest';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public update: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'POST',
        path: '/{id}',
    });
}
