import AbstractResource from '../AbstractResource';

export default class Users extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'users';
    }

    public get: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'GET',
        path: '/{id}',
    });

    public create: Function = this.createMethodFromPartialSpec({
        access: 'guest',
        method: 'POST',
        path: '',
    });

    public update: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'PUT',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'DELETE',
        path: '/{id}',
    });
}
