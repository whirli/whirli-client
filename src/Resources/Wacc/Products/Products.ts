import AbstractResource from '../../AbstractResource';

export default class Products extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/products';
        this.defaultAccess = 'wacc';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });

    public updateRelations: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}/relations',
    });

    public waitSpots: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}/wait-spots',
    });
}
