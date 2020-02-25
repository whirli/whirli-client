import AbstractResource from '../../AbstractResource';

export default class Users extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/guest/users',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/member/users/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });
}
