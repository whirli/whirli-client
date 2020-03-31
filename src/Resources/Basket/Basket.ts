import AbstractResource from '../AbstractResource';

export default class Basket extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/basket-lines';
        this.defaultAccess = 'guest';
    }

    public addToGuest: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public add: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'POST',
        path: '/',
    });

    public removeFromGuest: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });

    public remove: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'DELETE',
        path: '/{id}',
    });

    public updateGuest: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public update: Function = this.createMethodFromPartialSpec({
        access: 'member',
        method: 'PUT',
        path: '/{id}',
    });
}
