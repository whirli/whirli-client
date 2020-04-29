import AbstractResource from '../../AbstractResource';

export default class Gifts extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/gifts';
        this.defaultAccess = 'wacc';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });

    public print: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}/print',
    });
}
