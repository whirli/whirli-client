import AbstractResource from '../AbstractResource';

export default class Baskets extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/basket-lines';
        this.defaultAccess = 'guest';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public addLine: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public updateLine: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public removeLine: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });
}
