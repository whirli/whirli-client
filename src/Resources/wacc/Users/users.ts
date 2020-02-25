import AbstractResource from '../../AbstractResource';

export default class Users extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'users';
    }

    public all: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'GET',
        path: '',
    });

    public get: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'GET',
        path: '/{id}',
    });

    public create: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'POST',
        path: '',
    });

    public update: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'PUT',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'DELETE',
        path: '/{id}',
    });
}
