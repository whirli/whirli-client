import AbstractResource from '../AbstractResource';

export default class Users extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'member';
    }

    public create: Function = this.createMethodFromPartialSpec({
        access: 'guest',
        method: 'POST',
        path: '/',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/{id}',
    });

    public updateDetails: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}',
    });
}
