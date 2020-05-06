import AbstractResource from '../AbstractResource';

export default class Baskets extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'guest';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/baskets/{id}',
    });

    public addLine: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/basket-lines',
    });

    public updateLine: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/basket-lines/{id}',
    });

    public removeLine: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/basket-lines/{id}',
    });
}
